const express = require("express");
const app = express();
const port = 8888;
const list = [
  {
    id: "001",
    name: "cat",
  },
  {
    id: "002",
    name: "dog",
  },
  {
    id: "003",
    name: "monkey",
  },
];
app.get("/list", (req, res) => res.send(list));
app.listen(port, () => console.log(`http://localhost:${port}`));
