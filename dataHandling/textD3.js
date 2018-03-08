var fs = require('fs');

var file = 'satversme.txt'
var letterMap = {};//be careful with types, as null will only remove the value assignment, not the type assignment
//Regular expression can also be used here
const satText =  fs.readFileSync(file).toString().toLowerCase();//.replace(/[^0-9a-z]/gi, '');

for (let letter of satText){
  letterMap[letter] != undefined ? letterMap[letter] +=1 : letterMap[letter]=1;
}


//this is to structure the json, but for start you can just push information to the json file directly
res = [];
for (o in letterMap){
  //console.log(o + ' : ', + letterMap[o]);
  var temp = '{ key:"'+o+'" , value: '+letterMap[o]+'}';
  res.push(temp);
}
console.log(typeof(letterMap));
//console.log(Object.values(letterMap));
//console.log("-------------------------------");
//console.log(Object.entries(letterMap));
const JSONToFile = (obj, filename) => fs.writeFile(`${filename}.json`, res);

JSONToFile(res, 'satJsonFile');
/*
console.log(letterMap['a']);
var eee = 'b';
console.log(letterMap[eee]);
console.log(letterMap['c'] == undefined)
letterMap['c'] = 4;

console.log(letterMap['c']);
console.log(letterMap['c'] == undefined)
*/
