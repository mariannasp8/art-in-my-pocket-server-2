const { Schema, model } = require("mongoose");

const pieceSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  img: { type: String },
  date: { type: String },
  material: { type: String },
  nationality: { type: String },
  dimensions: { type: String },
  description: { type: String },
  collectionsId: [{ type: Schema.Types.ObjectId, ref: "Collection" }],
});

const Piece = model("Piece", pieceSchema);

module.exports = Piece;
