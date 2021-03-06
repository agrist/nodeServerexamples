function fail(thing){throw new Error(thing);}
function warn(thing){console.log(['WARNING:',thing].join('  '));}
function note(thing){console.log(['NOTE:', thing].join(' '));}


function parseAge(age){
  if(!age instanceof String) fail('Expected a string');
  var a; //undefined
  note('Attempting to parse an age');
  a = parseInt(age,10); // "10" is the numeric base we want to convert to, its the default base
  if(isNaN(a)){
    warn(['Could not parse age: ',age].join(' '));
    a=0;//set to
  }
  return a;
}


function recursion (thing){
  if(!isNaN(thing)){

    if(thing <= 1){
       note('input to function: ' + thing);
       return 1;
     }else {
      note('input to function: ' + thing);
      var a = recursion(thing-1)*thing;
      note(' we got something back! ' + a);
      return a;
    }
  }else{
    fail('Expected numerical');
    return 1;
  }
}

//Shortform without the console.log's and type checks:
var recursion2 = function(thing){return thing === 0 ? 1 : thing*recursion2(thing-1);}
