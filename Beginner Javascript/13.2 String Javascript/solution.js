
var  tweet =  prompt("Compose your tweet: ")
var tweetCount = tweet.length;
alert ("You have written " + tweetCount + " characters, you have " + (140-tweetCount) + " characters remaining.");

// You have written 140 characters, you have -42 characters left.

var tweet =  prompt("Compose your tweet: ")
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

// slice the 140 charcters 