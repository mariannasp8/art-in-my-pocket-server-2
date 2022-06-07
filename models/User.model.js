const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      default: "Vincent Van Gogh",
    },
    email: { type: String, required: true, unique: true },
    img: {
      type: String,
      default: (randomPhotoArr = () => {
        const pictures = [
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594908/antony-van-dyck-lucas-van-uffel-1622_xc0eay.jpg",
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594908/bronzino-portrair_of_a_young_man-1530_jkirct.jpg",
        ];

        return pictures[Math.floor(Math.random() * pictures.length)];
      }),
    },
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Piece" }],
    collections: [{ type: Schema.Types.ObjectId, ref: "Collection" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
