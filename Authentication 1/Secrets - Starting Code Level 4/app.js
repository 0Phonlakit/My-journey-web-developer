//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import pg from "pg";
import bcrypt from "bcrypt";
const saltRounds = 10;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
 
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Authentication",
  password: "AAAsss111",
  port: 5432
});
 
db.connect();
 
app.get("/", function (req, res) {
  res.render("home");
});
 
app.get("/login", function (req, res) {
  res.render("login");
});
 
app.get("/register", function (req, res) {
  res.render("register");
});
 
app.post("/register", function (req, res) {

  bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
    const newUsername = req.body.username;
    const newPassword = hash
 
    try {
      await db.query("INSERT INTO level4 (email, password) VALUES ($1, $2)", [
        newUsername,
        newPassword
      ]);
      res.render("secrets");
    } catch (err) {
      console.log(err);
    }   
  });

});
 
app.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const foundUser = await db.query("SELECT * FROM level4 WHERE email = $1", [
      username
    ]);
    
    const user = foundUser.rows[0];
    console.log(user);

    if (foundUser) {
      bcrypt.compare(password, user.password, function(err, result) {
        if (result === true) {
          res.render("secrets");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});
 
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});