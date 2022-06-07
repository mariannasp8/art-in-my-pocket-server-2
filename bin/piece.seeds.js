const mongoose = require("mongoose");

const Piece = require("../models/Piece.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://mariana:mariana@cluster0.83vu4.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const piecesArr = [
  {
    title: "Madame Cézanne in a Red Dress",
    author: "Paul Cézanne",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599706/Pieces/paul_cezanne-madame_cezanne-188-90_ef4w4b.jpg",
    date: "1888–90",
    material: "Oil on canvas",
    nationality: "French, Aix-en-Provence 1839–1906 Aix-en-Provence",
    dimensions: "116.5 x 89.5 cm",
    description:
      "Of the four portraits that Cézanne painted of his wife wearing a shawl-collared red dress, this is the only one to show her in an elaborately furnished interior. Seated in a high-backed yellow chair and wedged between well-placed props that seem to bend to her form and shift to her weight, Madame Cézanne is the lynchpin of a tilting, spatially complex composition. The mottled blue wall, the dark red band that edges the wainscoting, and the mirror over the fireplace at left identify the setting as the apartment that Cézanne rented at 15 quai d’Anjou, Paris, from 1888 to 1890.",
    collectionsId: [],
  },
];

Piece.insertMany(piecesArr)
  .then((createdPiece) => {
    console.log(`Created ${createdPiece.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));
