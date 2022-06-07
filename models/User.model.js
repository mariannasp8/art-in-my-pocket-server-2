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
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594909/velazquez-juan_de_pareja-1650_qpapob.jpg",
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594909/rembrandt-selfportrait-1660_ioe25p.jpg",
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594909/francisco_de_goya-manuel_osorio_marique_de_zuniga-1797-88_azowgv.jpg",
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594909/jean-fragonard-a-woman-with-a-dog-1769_zt9v2y.jpg",
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594909/sir_thomas_lawrence-elizabeth_farren-1790_xzzzfw.jpg",
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594909/edouard_manet-young_lady_in_1866-1866_rptmnz.jpg",
          "https://res.cloudinary.com/drsff217k/image/upload/v1654594908/el_greco-cardinal_fernando_nino_de_guevara-1541-1609_lpnsnq.jpg",
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
