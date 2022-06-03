const router = require("express").Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const User = require("../models/User.model.js");
const Piece = require("../models/Piece.model");
const Collection = require("../models/Collection.model");

// add pieces to the favorites
router.put("/favorites/add-piece/:pieceId", (req, res) => {
  const { pieceId } = req.params;
  const { _id } = req.payload;

  User.findByIdAndUpdate(_id, { $push: { favorites: pieceId } }, { new: true })

    .then((userFavorites) => res.status(201).json(userFavorites))
    .catch((err) => res.status(400).json({ message: "error" }));
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
