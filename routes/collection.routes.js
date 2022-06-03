const router = require("express").Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const User = require("../models/User.model.js");
const Piece = require("../models/Piece.model");
const Collection = require("../models/Collection.model");

// create collection
router.post("/collection", (req, res) => {
  const { title, img } = req.body;

  Collection.create({ title, img })
    .then((createdCollection) => res.status(201).json(createdCollection))
    .catch((err) => res.json(err));
});

// add pieces to collection
router.put("/collection/add-piece", (req, res, next) => {
  const { collectionId, pieceId } = req.body;
});

// // create collections:
// router.post("/collection", (req, res, next) => {
//   const { title, img } = req.body;

//   Collection.create({ title, img })
//     .then((createdCollection) => res.status(201).json(createdCollection))
//     .catch((err) => res.json(err));
// });

// //add pieces to collection
// router.put("/collection/add-piece", (req, res, next) => {
//   const { collectionId, pieceId } = req.body;

//   axios
//     .get(
//       `https://collectionapi.metmuseum.org/public/collection/v1/objects/${pieceId}`,
//       {
//         headers: {
//           authorization: `${process.env.API_KEY}`,
//         },
//       }
//     )
//     .then((response) => {
//       //console.log("aqui", response.data);
//       const pieceFromApi = response.data;

//       return Piece.create({
//         title: pieceFromApi.title,
//         author: pieceFromApi.artistDisplayName,
//         img: pieceFromApi.primaryImage,
//         date: pieceFromApi.objectDate,
//         nationality: pieceFromApi.country,
//         dimensions: pieceFromApi.dimensions,
//         rightsAndReproduction: pieceFromApi.rightsAndReproduction,
//         repository: pieceFromApi.repository,
//         collectionId: collectionId,
//       });
//     })

//     .then((createdPiece) => {
//       return Collection.findByIdAndUpdate(
//         collectionId,
//         {
//           $push: { pieces: createdPiece._id },
//         },
//         { new: true }
//       );
//     })
//     .then((updatedCollection) => res.status(201).json(updatedCollection))
//     .catch((err) => res.json(err));
// });

// // delete the piece:
// router.delete("/collection/:id", (req, res, next) => {
//   const { collectionId, pieceId } = req.params;
//   // delete the piece:
//   Piece.findByIdAndRemove(id)
//     .then((response) => res.json(response))

//     //delete collection:
//     .then((createdPiece) => {
//       return Collection.findByIdAndUpdate(
//         collectionId,
//         {
//           $pull: { pieces: createdPiece._id },
//         },
//         { new: true }
//       );
//     })
//     .then((updatedCollection) => res.status(201).json(updatedCollection))

//     .catch((err) => res.json(err));
// });

module.exports = router;
