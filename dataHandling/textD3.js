var fs = require('fs');

var file = 'satversme.txt'
var letterMap = {};
var satText =  fs.readFileSync(file).toString().toLowerCase().replace(/[^0-9a-z]/gi, '');

for (var letter in satText){
  (letterMap[satText[letter]] != undefined) ? letterMap[satText[letter]] += 1 : letterMap[satText[letter]]=1;
}
console.log(letterMap);
/*
console.log(letterMap['a']);
var eee = 'b';
console.log(letterMap[eee]);
console.log(letterMap['c'] == undefined)
letterMap['c'] = 4;

console.log(letterMap['c']);
console.log(letterMap['c'] == undefined)
*/
