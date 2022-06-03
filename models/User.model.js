const { Schema, model } = require("mongoose");

// CHECK THIS
const randomPhoto = "";

/* const randomPhoto = () => {
  const pictures = [
    "https://res.cloudinary.com/matildecosta/image/upload/v1652707931/bookclub/illustration-austen-by-mikel-casal-148-x-21-cm-reproduction_p5gjb5.jpg",
    "https://res.cloudinary.com/matildecosta/image/upload/v1652707931/bookclub/illustration-hemingway-by-mikel-casal-148-x-21-cms-reproduction_gbx5yf.jpg",
    "https://res.cloudinary.com/matildecosta/image/upload/v1652707931/bookclub/illustration-wolf-by-mikel-casal-148-x-21-cms-reproduction_suhhk4.jpg",
    "https://res.cloudinary.com/matildecosta/image/upload/v1652707930/bookclub/illustration-fernando-pessoa-by-mikel-casal-148-x-21-cm-reproduction_hppkca.jpg",
  ];

  return pictures[Math.floor(Math.random() * pictures.length)];
};

const randomPhoto = randomPhoto();
 */

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
      //default: randomPhoto,
    },
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Piece" }],
    collections: [{ type: Schema.Types.ObjectId, ref: "Collections" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
