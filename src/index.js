const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ working: true });
});

app.get("/teste", (req, res) => {
  res.send({ teste: false });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
