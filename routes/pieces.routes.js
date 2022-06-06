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
    .catch((err) => res.status(400).json({ message: "error" }));
});

// search piece
router.get("/search-pieces", (req, res) => {
  Piece.find({})
    .then((searchedPieces1) => res.status(201).json(searchedPieces1))
    .catch((err) => res.status(400).json({ message: "error" }));
});

// search piece by author:
router.get("/search-pieces/:author", (req, res) => {
  const { author } = req.params;

  Piece.find({ author: { $regex: author, $options: "i" } })
    .then((searchedPieces) => res.status(201).json(searchedPieces))
    .catch((err) => res.status(400).json({ message: "error" }));
});

// edit the piece
router.put("/edit-pieces/:pieceId", (req, res) => {
  const { pieceId } = req.params;

  Piece.findByIdAndUpdate(pieceId, req.body, { new: true })
    .then((uptadedPiece) => res.status(201).json(uptadedPiece))
    .catch((err) => res.status(400).json({ message: "error" }));
});

// delete the piece
router.delete("/delete-pieces/:pieceId", (req, res) => {
  const { pieceId } = req.params;

  Piece.findByIdAndRemove(pieceId)
    .then((removedPiece) => res.status(201).json(removedPiece))
    .catch((err) => res.status(400).json({ message: "error" }));
});

module.exports = router;
