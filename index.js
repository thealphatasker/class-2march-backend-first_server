import express from "express";

const app = express();

app.get("/weather", (req, res) => {
  res.send("Hey, Today is the sunny day.");
});

app.get("/alpha", (req, res) => {
  res.send("Hey, this is in beta.");
});

app.listen(8000, () => {
  console.log("Server is running!");
});
