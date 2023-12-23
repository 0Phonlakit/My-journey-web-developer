var name = prompt("What is your name : ");
var name_capitalized = (name.slice(0, 1).toUpperCase());
var names =  name_capitalized + (name.slice(1, name.length).toLowerCase());

alert("Hello, " + names);