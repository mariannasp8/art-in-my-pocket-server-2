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
  {
    title: "Young Lady in 1866",
    author: "Edouard Manet ",

    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599665/Pieces/edouard_manet-young_lady_in_1866-1866_hf2elb.jpg",
    date: "1866",
    material: "Oil on canvas",
    nationality: "French, Paris, France 1832–1883 Paris",
    dimensions: "185.1 x 128.6 cm",
    description:
      "Manet’s model, Victorine Meurent, had recently posed as the brazen nudes in Olympia and Luncheon on the Grass (both Musée d’Orsay, Paris). Here, appearing relatively demure, she flaunts an intimate silk dressing gown. Critics eyed the painting as a rejoinder to Courbet’s Woman with a Parrot (29.100.57) and as indicative of Manet’s 'current vice' of failing to 'value a head more than a slipper.' Recent scholars have interpreted it as an allegory of the five senses: the nosegay (smell), the orange (taste), the parrot-confidant (hearing), and the man’s monocle she fingers (sight and touch).",
    collectionsId: [],
  },
  {
    title: "The Toilette of Venus",
    author: "François Boucher ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599676/Pieces/francois-boucher-the-toilette-of-venus-1751_nebj6f.jpg",
    date: "1751",
    material: "Oil on canvas",
    nationality: "French, 1703-1770",
    dimensions: "108,3 x 85,1 cm",
    description:
      "Boucher executed this painting for Madame de Pompadour, the powerful, official mistress of Louis XV and Boucher’s most significant patron from 1747 until her death in 1764. It originally decorated the bathing apartments (a luxurious suite of three rooms) in Pompadour’s Château de Bellevue. The construction of her château prompted many of the most important commissions of Rococo painting and sculpture. For a subject that became synonymous with both Boucher and Pompadour, the artist devised a summary of the movement’s key features: overt theatricality, voluptuous flesh, and an asymmetrical unfurling of luxurious furniture, fabric, flowers, and pearls.",
    collectionsId: [],
  },
  {
    title:
      "Joséphine-Éléonore-Marie-Pauline de Galard de Brassac de Béarn (1825–1860), Princesse de Broglie",
    author: "Jean Auguste Dominique Ingres  ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599706/Pieces/jean-dominique-ingres-josephine-eleonore-marie-paulina-1951-53_gy5uou.jpg",
    date: "1851–53",
    material: "Oil on canvas",
    nationality: "French, Montauban 1780–1867 Paris",
    dimensions: "121.3 × 90.8 cm",
    description:
      "Jean-Auguste-Dominique Ingres, the neo-classical French artist par excellence, painted this masterpiece toward the end of his life when his reputation as a portraitist to prominent citizens and Orléanist aristocrats had been long established. Pauline de Broglie sat for the artist’s final commission. Ingres captures the shy reserve of his subject while illuminating through seamless brushwork the material quality of her many fine attributes: her rich blue satin and lace ball gown, the gold embroidered shawl, and silk damask chair, together with finely tooled jewels of pearl, enamel, and gold. The portrait was commissioned by the sitter’s husband, Albert de Broglie, a few years after their ill-fated marriage. Pauline was stricken with tuberculosis soon after completion of the exquisite portrait, leaving five sons and a grieving husband. Through Albert’s lifetime, it was draped in fabric on the walls of the family residence. The portrait remained in the de Broglie family until shortly before Robert Lehman acquired it.",
    collectionsId: [],
  },
  {
    title: "A Bouquet of Flowers",
    author: "Clara Peeters",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599637/Pieces/clara_peeters-a_bouquet_of_flowers-1612_w5bcbv.jpg",
    date: "1612",
    material: "Oil on canvas",
    nationality: "Flemish, Mechelen ca. 1587–after 1636 Ghent",
    dimensions: "46 × 32 cm",
    description:
      "Clara Peeters was a founding figure in the history of European still life, a genre that attracted many women artists who did not have the opportunity to study nude models. In this ambitious composition, Peeters paid close attention to naturalistic details like dewdrops, insect bites, and drooping tulips that hint at transience and decay. At the same time, she asserted her own achievement by inscribing her signature in the stone ledge, juxtaposed with a fallen sprig of forget-me-nots. The crisp edges and acute observation that characterize her work reveal the close link between floral painting and botanical illustration during the Scientific Revolution.",
    collectionsId: [],
  },
  {
    title: "A Vase with Flowers",
    author: "Jacob Vosmaer ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599705/Pieces/jacob_vosmaer-a_vase_with_flowers-1613_fhwo75.jpg",
    date: "1613",
    material: "Oil on wood",
    nationality: "Dutch, Delft ca. 1584–1641 Delft",
    dimensions: "85.1 x 62.5 cm",
    description:
      "The Delft painter Jacob Vosmaer was an early if not pioneering specialist in the painting of flower pictures, which often depict rare specimens known to the artists solely from illustrated books. At some time before 1870 this panel was trimmed on the sides and cut down (about nine inches) at the top, cropping the crown imperial.",
    collectionsId: [],
  },
  {
    title: "Daphne",
    author: " Harriet Goodhue Hosmer ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599665/Pieces/daphne-harriet_goodhue_hosmer-1854_pnwzrz.jpg",
    date: "1854",
    material: "Marble",
    nationality: "American",
    dimensions: "69.9 x 49.8 x 31.8 cm",
    description:
      "In Greek mythology, Apollo’s first love was Daphne, a nymph who shunned marriage and vowed perpetual virginity. Fleeing the god, Daphne prayed for help and was transformed into a laurel tree just as he was about to overtake her. Rather than depicting the dramatic moment of escape, Hosmer modeled a serene image and symbolized Daphne’s metamorphosis by terminating the bust in laurel branches. The work is true to Hosmer’s Neoclassical training in Rome, where she was one of a number of active American women sculptors.",
    collectionsId: [],
  },
  {
    title: "Head of King David",
    author: " no author ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599707/Pieces/head_of_king_david-1145_gkxv0j.jpg",
    date: "1145",
    material: "Limestone, light fine-grained",
    nationality: "French",
    dimensions: "29.7 × 21.1 × 21.3 cm",
    description:
      "Because it was thought they represented the ancient rulers of France, all of the monumental kings decorating the portals of the famed Cathedral of Notre-Dame of Paris were decapitated and presumably destroyed during the French Revolution. Until recently, this head of King David was the only known surviving head from this rich decorative program. Carved of a fine-grained limestone from the Paris region, the highly expressive face was originally more emphatic, as the eyes were inlaid with lead. The head comes from the right-hand portal of the west façade dedicated to themes of the life of Saint Anne and to the genealogy and early life of Jesus. David was regarded as an ancestor of Jesus. Carved about the middle of the twelfth century, the portal was not installed until the early years of the thirteenth century.",
    collectionsId: [],
  },
  {
    title: "The Thinker - Portrait of Louis Kenton",
    author: " Thomas Eakins ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599720/Pieces/the-thinker-portrtait-of-louis.kenton-thomas-eakins-1990_uugvyf.jpg",
    date: "1990",
    collectionsId: [],
  },
  {
    title: "Elizabeth Farren",
    author: " Sir Thomas Lawrence ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599715/Pieces/sir_thomas_lawrence-elizabeth_farren-1790_c3btso.jpg",
    date: "1790",
    collectionsId: [],
  },
  {
    title: "Self-Portrait",
    author: " Rembrandt ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599715/Pieces/rembrandt-selfportrait-1660_rohmpn.jpg",
    date: "1660",
    collectionsId: [],
  },
  {
    title: "Self-Portrait",
    author: " Pablo Picasso ",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599715/Pieces/self-portrait-pablo-picasso-1906_aiso9f.jpg",
    date: "1906",
    collectionsId: [],
  },
  {
    title: "Juan de Pareja",
    author: " Diego Velázquez",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599715/Pieces/velazquez-juan_de_pareja-1650_svxz8s.jpg",
    date: "1650",
    collectionsId: [],
  },
  {
    title: "The Visit",
    author: " Pieter de Hooch",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599714/Pieces/pieter_de_hooch-the_visit-1657_m5dja6.jpg",
    date: "1650",
    collectionsId: [],
  },
  {
    title: "Gertude Stein",
    author: " Pablo Picasso",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599706/Pieces/pablo_picasso-gertude_stein-1905-6_hxcvyu.jpg",
    date: "1605-06",
    collectionsId: [],
  },
  {
    title: "The death of Socrates",
    author: " Jacques Louis David",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599705/Pieces/jacques_louis_david-the_death_of_socrates-1787_ja2ltr.jpg",
    date: "1787",
    collectionsId: [],
  },
  {
    title: "A Woman with a dog",
    author: " Jean Fragonard",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599705/Pieces/jean-fragonard-a-woman-with-a-dog-1769_kjkpgu.jpg",
    date: "1769",
    collectionsId: [],
  },
  {
    title: "Portrait of Gerard de Lairesse",
    author: " Rembrandt",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599704/Pieces/portrait-of-gerard-de-lairesse-rembrandt-1665_ohfvux.jpg",
    date: "1665",
    collectionsId: [],
  },
  {
    title: "Rubens, Helena Fourment and their son",
    author: " Peter Paul Rubens",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599704/Pieces/peter-paul-rubens-rubens-helena-fourment-and-their-son-1635_ohpheg.jpg",
    date: "1635",
    collectionsId: [],
  },
  {
    title: "Manuel Osorio Manrique de Zuniga",
    author: "Francisco de Goya",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599676/Pieces/francisco_de_goya-manuel_osorio_marique_de_zuniga-1797-88_c9c1s9.jpg",
    date: "1797-88",
    collectionsId: [],
  },
  {
    title: "The Abduction of Rebecca",
    author: "Eugene Delacroix",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599665/Pieces/eugene_delacroix-the_abduction_of_rebecca-1846_trrymf.jpg",
    date: "1846",
    collectionsId: [],
  },
  {
    title: "The Musicians",
    author: "Michelangelo Caravaggio",
    img: "https://res.cloudinary.com/drsff217k/image/upload/v1654599637/Pieces/caravaggio-the_musicians-1597_m5r9bj.jpg",
    date: "1597",
    collectionsId: [],
  },
];

Piece.insertMany(piecesArr)
  .then((createdPiece) => {
    console.log(`Created ${createdPiece.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));
