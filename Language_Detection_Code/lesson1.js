// Find an npm package that tells you the language a string is written in.
// Print the most accurate late for the following phrases:
// “Es macht gut”
// “Dobrá práce”
// “Gwaith da”

var langdetect = require('langdetect');

console.log(langdetect.detect('Es macht gut'));

console.log(langdetect.detect('“Dobrá práce”'));

console.log(langdetect.detect('Gwaith da'));