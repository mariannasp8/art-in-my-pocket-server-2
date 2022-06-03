const { Schema, model } = require("mongoose");

const collectionSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String },
  pieces: [{ type: Schema.Types.ObjectId, ref: "Piece" }],
});

const Collection = model("Collection", collectionSchema);

module.exports = Collection;
