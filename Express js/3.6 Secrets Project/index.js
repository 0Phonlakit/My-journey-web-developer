//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
//import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var getPasswords = false;

app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

function getPassword(req, res, next){
    console.log(req.body);
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        getPasswords = true;
    }
    
    next();
}

app.use(getPassword);

app.post("/check", (req, res) => {
    if (getPasswords) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });