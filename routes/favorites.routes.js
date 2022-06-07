const router = require("express").Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const User = require("../models/User.model.js");
const Piece = require("../models/Piece.model");
const Collection = require("../models/Collection.model");

// add pieces to the favorites

// remove pieces from the collection
router.put("/favorites/add-piece/:pieceId", (req, res) => {
  console.log(req.params);

  // Collection.findByIdAndUpdate(
  //   collectionId,
  //   { $pull: { pieces: pieceId } },
  //   { new: true }
  // )

  //   .then((updatedCollection) => res.status(201).json(updatedCollection))
  //   .catch((err) => res.status(400).json({ message: "error" }));
});

router.put("/favorites/add-piece/:pieceId", (req, res) => {
  const { pieceId } = req.params;
  console.log(req.params);
  // const { _id } = req.payload;

  // User.findByIdAndUpdate(_id, { $push: { favorites: pieceId } }, { new: true })

  //   .then((userFavorites) => res.status(201).json(userFavorites))
  //   .catch((err) => res.status(400).json({ message: "error" }));
});

// remove pieces from the favorites
router.delete("/favorites/delete-piece/:pieceId", (req, res) => {
  const { pieceId } = req.params;
  const { _id } = req.payload;

  User.findByIdAndUpdate(_id, { $pull: { favorites: pieceId } }, { new: true })

    .then((deletedFavorites) => res.status(201).json(deletedFavorites))
    .catch((err) => res.status(400).json({ message: "error" }));
});

module.exports = router;
