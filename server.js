const express = require("express");
const app = express();

app.set("view-engine", "ejs"); // set the app to use ejs

app.get("/", (req, res) => {
  res.render("index.ejs");
});

//Creating Routes
app.get("/login", (req, res) => {
  // LOGIN Route

  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  // LOGIN Routes

  res.render("register.ejs");
});

//
app.post("/register", (req, res) => {});

app.listen(3000);
