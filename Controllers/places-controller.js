const HttpError = require("../models/error");
const Dummy = require("../Data/DummyData.js");
const getPlaceById = (req, res, next) => {
  const place_id = req.params.pid;
  const place = Dummy.find((obj) => {
    return obj.id === place_id;
  });
  if (!place) {
    const error = new HttpError("Could no find place id", 404);
    throw error;
  }
  res.json({ message: place });
};

const getPlaceByCreatorId = (req, res, next) => {
  const createdBy = req.params.uid;
  const place = Dummy.find((obj) => {
    return obj.createdBy === createdBy;
  });
  if (!place) {
    const error = new HttpError("Could no find created by id", 404);

    return next(error);
  }
  res.json({ message: place });
};

module.exports = { getPlaceByCreatorId, getPlaceById };
// exports.getPlaceByCreatorId = getPlaceByCreatorId;
// exports.getPlaceById = getPlaceById;
