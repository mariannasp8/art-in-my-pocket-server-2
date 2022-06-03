const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model.js");
const Piece = require("../models/Piece.model");
const axios = require("axios");
const Collection = require("../models/Collection.model");

// create piece
router.post("/create-piece", (req, res) => {
  const { title, author, img, date, nationality, dimensions } = req.body;

  Piece.create({ title, author, img, date, nationality, dimensions })
    .then((createdPiece) => res.status(201).json(createdPiece))
    .catch((err) => res.json(err));
});

//procurar:
/* router.get("/search-pieces/:author", async (req, res) => {
  try {
    const searchAuthor = req.params.author;
    const allPieces = await Piece.findOne({ author: searchAuthor });
    res.status(200).json(allPieces);
  } catch {
    res.status(500).json({ message: `abc` });
  }
}); */

// search piece
router.get("/search-pieces/:author", (req, res) => {
  const { pieceId } = req.params;

  Piece.findById(pieceId)
    .then((searchedPiece) => res.status(201).json(searchedPiece))
    .catch((err) => res.json(err));
});

// NOT WORKING !!!! - giving me error with pieceId
// edit the piece
router.put("/edit-pieces/:pieceId", (req, res) => {
  const { pieceId } = req.params;

  Piece.findByIdAndUpdate(pieceId, peq.body, { new: true })
    .then((uptadedPiece) => res.status(201).json(uptadedPiece))
    .catch((err) => res.json(err));
});

// NOT WORKING !!!!
// delete the piece
router.put("/delete-pieces/:pieceId", (req, res) => {
  const { pieceId } = req.params;

  Piece.findByIdAndRemove(pieceId)
    .then((removedPiece) => res.status(201).json(removedPiece))
    .catch((err) => res.json(err));
});

module.exports = router;
