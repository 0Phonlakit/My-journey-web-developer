//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import pg from "pg";
import md5 from "md5";

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
 
app.post("/register", async function (req, res) {
  const newUsername = req.body.username;
  const newPassword = md5(req.body.password);
 
  try {
    await db.query("INSERT INTO level3 (email, password) VALUES ($1, $2)", [
      newUsername,
      newPassword
    ]);
    res.render("secrets");
  } catch (err) {
    console.log(err);
  }
});
 
app.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = md5(req.body.password);

  try {
    const foundUser = await db.query("SELECT * FROM level3 WHERE email = $1", [
      username
    ]);
    
    const user = foundUser.rows[0];
    console.log(user);

    if (foundUser) {
      if (foundUser.rows[0].password === password) {
        res.render("secrets");
      }
    }
  } catch (err) {
    console.log(err);
  }
});
 
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});