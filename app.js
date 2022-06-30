const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hello mi ray");
});

app.listen(port, () => {
  console.log(`app escuchando port ` + port);
});
