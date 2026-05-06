const express = require("express");
const scheduleRoutes = require("./route/scheduleRoutes.js");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("API working");
});

app.use("/api", scheduleRoutes);


app.listen(8000, () => {
  console.log("Server running on port 8000");
});  

