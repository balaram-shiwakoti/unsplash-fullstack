const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer"); // Import multer for handling FormData

mongoose

  .connect("mongodb://127.0.0.1:27017/", { dbName: "cat" })
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

var bodyParser = require("body-parser");

const catSchema = new mongoose.Schema({
  label: String,
  imgUrl: String,
});

const Cat = mongoose.model("Cat", catSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/add", upload.none(), (req, res) => {
  const { label, imgUrl } = req.body;
  Cat.create({ label: label, imgUrl: imgUrl })
    .then((createdCat) => {
      res.status(201).json(createdCat);
    })
    .catch((error) => {
      console.error("Error creating Cat:", error);
      res.status(500).json({ error: "Failed to create Cat" });
    });
});

app.listen(3000);
