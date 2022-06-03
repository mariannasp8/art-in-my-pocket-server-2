// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const { isAuthenticated } = require("./middleware/jwt.middleware");

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
// INDEX ROUTES
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);
// AUTH ROUTES
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

/* const searchRoutes = require("./routes/search0.routes");
app.use("/api", searchRoutes);
 */
// PIECE ROUTES
const piecesRoutes = require("./routes/pieces.routes");
app.use("/api", piecesRoutes);
// COLLECTION ROUTES
const collectionRoutes = require("./routes/collection.routes");
app.use("/api", isAuthenticated, collectionRoutes);
// FAVORITE ROUTES
const favoritesRoutes = require("./routes/favorites.routes");
app.use("/api", isAuthenticated, favoritesRoutes);
// EVENTS ROUTES
/* const eventsRoutes = require("./routes/events.routes");
app.use("/event", eventsRoutes); */

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

/* 
outer.delete("/categories/:id", isAuthenticated, async (req, res, next) => {
    const { id } = req.params;
    const { _id } = req.payload;
  
    try {
      let establishmentToDelete = await Establishment.findById(id);
      console.log(establishmentToDelete);
      if (establishmentToDelete.establishmentOwner != _id) {
        res.status(400).json({ errorMessage: "You are not the owner" });
        return;
      }
      let deletedEstablishment = await Establishment.findByIdAndRemove(id);
  
      await User.findByIdAndUpdate(_id, {
        $pull: { establishments: deletedEstablishment._id },
      });
      res.status(200).json({
        message: `deleted establishment ${deletedEstablishment.companyName}`,
      });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  });
   */
