const router = require("express").Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const User = require("../models/User.model.js");
const Piece = require("../models/Piece.model");
const Collection = require("../models/Collection.model");

// create collection
router.post("/create-collection", (req, res) => {
  const { title, img } = req.body;

  Collection.create({ title, img, pieces: [] })
    .then((createdCollection) => res.status(201).json(createdCollection))
    .catch((err) => res.status(400).json({ message: "error" }));
});
// populate the collection with pieces
router.get("/collection", (req, res) => {
  Collection.find()
    .populate("pieces")
    .then((allCollections) => res.json(allCollections))
    .catch((err) => res.status(400).json({ message: "error" }));
});

router.get("/collection/:collectionId", (req, res) => {
  const { collectionId } = req.params;

  Collection.findById(collectionId)
    .populate("pieces")
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json({ message: "error" }));
});

// add pieces to the collection
router.put("/collection/add-piece", (req, res) => {
  const { collectionId, pieceId } = req.body;

  Collection.findByIdAndUpdate(
    collectionId,
    { $push: { pieces: pieceId } },
    { new: true }
  )

    .then((updatedCollection) => res.status(201).json(updatedCollection))
    .catch((err) => res.status(400).json({ message: "error" }));
});

// remove pieces from the collection
router.put("/collection/delete-piece", (req, res) => {
  const { collectionId, pieceId } = req.body;
  console.log(req.body);

  Collection.findByIdAndUpdate(
    collectionId,
    { $pull: { pieces: pieceId } },
    { new: true }
  )

    .then((updatedCollection) => {
      console.log(updatedCollection);
      res.status(201).json(updatedCollection);
    })
    .catch((err) => res.status(400).json({ message: "error" }));
});

// delete my collection and the piece inside the collection
router.delete("/collection/:collectionId", (req, res) => {
  const { collectionId } = req.params;
  console.log(collectionId);

  Collection.findByIdAndRemove(collectionId)
    .then((removedCollection) =>
      res.status(201).json({ message: "Collection removed" })
    )
    .catch((err) => res.status(400).json({ message: "error" }));
});

module.exports = router;
