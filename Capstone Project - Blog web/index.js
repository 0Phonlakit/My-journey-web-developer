import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

var todayItems = [];
var workItems = [];

app.get("/", (req, res) => {
  const ordinalDateString = date();

  res.render("index.ejs", {
    GetDate : ordinalDateString,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    workItems : workItems,

  });
});

app.post("/work", (req, res) => {

  const ordinalDateString = date();
  let newItem = req.body["newItem"];
  
  let showItem = { newItem: newItem}
  
  workItems.push(showItem);
  res.render("work.ejs", {
    workItems : workItems,
    GetDate : ordinalDateString,
  });
});

app.get("/today", (req, res) => {
  const ordinalDateString = date();
  // console.log("ordinalDateString:", ordinalDateString);
  res.render("today.ejs", {
    todayItems : todayItems,
    GetDate : ordinalDateString,
  });
});

app.post("/today", (req, res) => {

  const ordinalDateString = date();
  let newItem = req.body["newItem"];
  
  let showItem = { newItem: newItem}
  
  todayItems.push(showItem);
  res.render("today.ejs", {
    todayItems : todayItems,
    GetDate : ordinalDateString,
  });
});

function date(){
  const suffixMap = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  };
  
  const date = new Date();
  const dateDay = date.getDate();
  const dateMonth = date.toLocaleString('default', {month: 'long'});
  const dateYear = date.getFullYear();
  const pluralRule = new Intl.PluralRules('en-GB', {type: 'ordinal'});
  const dateOrdinal = suffixMap[pluralRule.select(dateDay)]
  
  const ordinalDateString = `${dateMonth}, ${dateDay}${dateOrdinal} ${dateYear}`; 

  return ordinalDateString
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


