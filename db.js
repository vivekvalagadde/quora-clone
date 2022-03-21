const mongoose = require("mongoose");
require("dotenv").config();

const url =
"mongodb+srv://vivekvalagadde:11june2001@cluster0.pbla0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
