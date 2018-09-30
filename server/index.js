const express = require("express");
const webpack = require("webpack");

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("🔥 Flint server is standing by.");
});
