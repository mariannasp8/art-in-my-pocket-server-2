// const router = require("express").Router();

// const User = require("../models/User.model");

// router.get("/profile", (req, res, next) => {
//   User.find({})
//     .populate("collections")
//     .populate("favorites")
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });

// router.get("/user/:userId", (req, res, next) => {
//   const { _id } = req.payload;

//   User.findById(_id)
//     .populate("collections")
//     .populate("favorites")
//     .then((user) => {
//       res.json(user);
//     })
//     .catch(() => console.log("oi"));
// });

// router.put("/edit-profile/:userId", (req, res, next) => {
//   const { userId } = req.params;

//   User.findByIdAndUpdate(userId, req.body, { new: true })
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });

// router.delete("/profile/:userId", (req, res, next) => {
//   const { userId } = req.params;

//   User.findByIdAndRemove(userId)
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });

// module.exports = router;
