var fs = require('fs');

var file = 'satversme.txt'
var letterMap = {};//be careful with types, as null will only remove the value assignment, not the type assignment
//Regular expression can also be used here
var satText =  fs.readFileSync(file).toString().toLowerCase();//.replace(/[^0-9a-z]/gi, '');
//var re = /Satversme/i;
//var re = new RegExp("Satversme", "S");
//var check = re.exec(satText);
//console.log(check);
//if(check){
//  console.log("This text might be Satversme.");
//}
//else{
//    console.log("This text might be Satversme.");
//}
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
