var markdown = require( "markdown" ).markdown;
var fs = require('fs');


var text = "Hello *World*!";
var mdConverted = markdown.toHTML(text);

fs.writeFileSync('./index.txt', mdConverted);

const randomInt = require('random-int');

console.log(randomInt(5));
//=> 3

console.log(randomInt(10, 100));
//=> 54