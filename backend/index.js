const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer"); // Imported multer for handling FormData

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

app.get("/cats", (req, res) => {
  Cat.find({})
    .then((cats) => {
      res.status(200).json(cats);
    })
    .catch((error) => {
      console.error("Error fetching cats:", error);
      res.status(500).json({ error: "Failed to fetch cats" });
    });
});

app.delete("/cats/:id", (req, res) => {
  const catId = req.params.id;
  Cat.findByIdAndDelete(catId)
    .then((deletedCat) => {
      if (!deletedCat) {
        return res.status(404).json({ error: "Cat not found" });
      }

      res.status(200).json(deletedCat);
    })
    .catch((error) => {
      console.log("Error deleting", error);
      res.status(500).json({ error: "Failed to delete cat" });
    });
});

app.get("/cats/search", (req, res) => {
  const label = req.query.label;
  Cat.findOne({ label })
    .then((searchedCat) => {
      if (searchedCat) {
        return res.status(200).json(searchedCat);
      }
      res.status(404).json({ message: "catnotfound" });
    })
    .catch((error) => {
      console.error("Error searching for cat:", error);
      res.status(500).json({ error: "Failed to search for cat" });
    });
});

app.listen(3000);
