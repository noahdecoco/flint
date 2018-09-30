const express = require("express");

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`<p>🔥 Flint server is standing by.</p>
  <p><a href="http://localhost:8080/">Frontend on port 8080</a></p>`);
});
