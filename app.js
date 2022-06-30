const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hello mi ray");
});

app.post("/usuario", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`app escuchando port ` + port);
});
