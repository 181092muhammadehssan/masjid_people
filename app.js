const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const places = require("./routes/places");

const app = express();

app.use("/api/users", users);
app.use("/api/places", places);
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});
app.listen(3000, () => {
  console.log("Server is listning on port 3000");
});
