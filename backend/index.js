const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello its working" });
});
app.listen(3000);
