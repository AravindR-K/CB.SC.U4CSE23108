const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send("API working"); // placeholder
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
}); 