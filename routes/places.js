const express = require("express");
const router = express.Router();
const placesController = require("../Controllers/places-controller");
router.get("/:pid", placesController.getPlaceById);
router.get("/user/:uid", placesController.getPlaceByCreatorId);

module.exports = router;
