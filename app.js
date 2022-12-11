
// First Assignment #01
// Task 
//Try cowsay npm package and inspirational-quotes and print quotes with Cowsay

var cowsay = require("cowsay");
const Quote = require('inspirational-quotes');
console.log(cowsay.say(Quote.getQuote()));
console.log("author")
