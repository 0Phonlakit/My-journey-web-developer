//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import pg from "pg";

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
 
const secretKey = "secretkey";

app.post("/register", async (req, res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;
  try {
      await db.query("INSERT INTO level2 (email, password) VALUES ($1, pgp_sym_encrypt(($2), ($3)))", 
      [newUsername, 
        newPassword, 
        secretKey]);

      res.render("secrets.ejs");
  } catch (err) {
      console.log(err.message);
  };
  
})
 
app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
      const result = await db.query("SELECT email, pgp_sym_decrypt(password, ($1)) AS password FROM level2 WHERE email=($2)", 
      [secretKey, 
        username]);
        
      const user = result.rows[0];
      console.log(user);
      if (user.password == password) {
          res.render("secrets.ejs");
      };
  } catch (err) {
      console.log(err.message);
  };
})
 
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});