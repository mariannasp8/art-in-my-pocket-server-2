const { Schema, model } = require("mongoose");

const collectionSchema = new Schema({
  title: { type: String, required: true },
  img: {
    type: String,
    default:
      "https://res.cloudinary.com/drsff217k/image/upload/v1654599715/Pieces/rembrandt-selfportrait-1660_rohmpn.jpg",
  },
  pieces: [{ type: Schema.Types.ObjectId, ref: "Piece" }],
});

const Collection = model("Collection", collectionSchema);

module.exports = Collection;
