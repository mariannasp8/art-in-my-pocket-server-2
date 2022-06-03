// const router = require("express").Router();
// const mongoose = require("mongoose");
// const User = require("../models/User.model.js");
// const Piece = require("../models/Piece.model");
// const axios = require("axios");

// router.get("/search", async (req, res) => {
//   const { q } = req.query;
//   //Entry in object (api)
//   try {
//     const response = await axios.get(
//       `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${q}`
//     );
//     //Entry in object.objectIDs (api)
//     const arrayResults = response.data.objectIDs.slice(0, 10);
//     //Entry in the array inside objectIDs and get info from each id:
//     // const finalResponse = await axios.get(
//     //   arrayResults.map(
//     //     (result) => result.findById()
//     //     // return {
//     //     //   title: result.title,
//     //     //   artistDisplayName: result.artistDisplayName,
//     //     //   primaryImage: result.primaryImage,
//     //     //   objectDate: result.objectDate,
//     //     //   country: result.country,
//     //     //   dimensions: result.dimensions,
//     //     //   rightsAndReproduction: result.rightsAndReproduction,
//     //     //   repository: result.repository,
//     //     // };
//     //   )
//     // );

//     const artPieces = function getArtPieces(){

//       for(let i = 0; i < 10; i++) {
//         await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[i]}`)
//         return {
//            title: arrayResults[i].data.title,
//           //   artistDisplayName: result[i].artistDisplayName,
//           //    primaryImage: result[i].primaryImage,
//           //    objectDate: result.objectDate,
//           //   country: result.country,
//           //    dimensions: result.dimensions,
//           //   rightsAndReproduction: result.rightsAndReproduction,
//           //    repository: result.repository,
//           // };

//       }
      
//     }


//     // const artPiece0 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[0]}`
//     // );
//     // const artPiece1 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[1]}`
//     // );
//     // const artPiece2 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[2]}`
//     // );
//     // const artPiece3 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[3]}`
//     // );
//     // const artPiece4 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[4]}`
//     // );
//     // const artPiece5 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[5]}`
//     // );
//     // const artPiece6 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[6]}`
//     // );
//     // const artPiece7 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[7]}`
//     // );
//     // const artPiece8 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[8]}`
//     // );
//     // const artPiece9 = await axios.get(
//     //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayResults[9]}`
//     // );

//     //console.log("My piece fom API", artPiece.data);

//     //array the ids - fazer await axios
//     //array results [0] e guardar numa response de .data
//     //e depois faço atee vinte
//     //ir burscar as propriedades  ue quero e crio um array com isso = response

//     // console.log("array results: ", arrayResults);
//     /* console.log(
//       "outra coisa:",
//       arrayResults.map((result) => console.log(result, "exemplo de agora"))
//     );
//  */

//     res.status(200).json(artPieces);
//   } catch (err) {
//     res.json(err);
//   }
// });

// // router.get("/api/search", (req, res, next) => {
// //   const {
// //     title,
// //     author,
// //     img,
// //     date,
// //     nationality,
// //     dimensions,
// //     rightAndReproduction,
// //     repository,
// //   } = req.body;

// //   axios
// //     .get("https://collectionapi.metmuseum.org/public/collection/v1/objects")
// //     .then((results) => {
// //       console.log(results);
// //       /*  resposta frontend = n
// //     n.title
// //     bade de dados = b
// //     filter (n.title === b.title || n.author === b.author || n.img === b.img || n.date === b.date || n.nationality ===b.nationality || n.dimensions === b.dimensions ||n.rightAndReproduction === b.rightAndReproduction || n.repository === b.repository)
// //  */
// //     })
// //     .catch((err) => next(err));

// //   Info.find({})
// //     .then((allInfo) => {
// //       res.status(200).json(allInfo);
// //     })
// //     .catch((err) => res.status(400).json({ message: "No information found." }));
// // });

// // // create the post route
// // router.post("/api/search", (req, res, next) => {
// //   let {
// //     title,
// //     author,
// //     img,
// //     date,
// //     nationality,
// //     dimensions,
// //     rigthAndReproduction,
// //     repository,
// //   } = req.body;

// //   Piece.create({
// //     title,
// //     author,
// //     img,
// //     date,
// //     nationality,
// //     dimensions,
// //     rightsAndReproduction,
// //     repository,
// //   })
// //     .then((newPiece) => {
// //       return Piece.findByIdAndUpdate(
// //         newPiece._id,
// //         { $push: { search: newPiece._id } },
// //         { new: true }
// //       );
// //     })
// //     .then((response) => res.json(response))
// //     .catch((err) => res.json(err));
// // });

// module.exports = router;
