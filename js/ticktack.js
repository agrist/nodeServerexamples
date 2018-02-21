//TODO advanced - change the below code to be implemented in one game object
// so to not pollute the global namespace

var fields = [
{x:0 , y:0, sign: 'empty' },
{x:0 , y:1, sign: 'empty' },
{x:0 , y:2, sign: 'empty' },
{x:1 , y:0, sign: 'empty' },
{x:1 , y:1, sign: 'empty' },
{x:1 , y:2, sign: 'empty' },
{x:2 , y:0, sign: 'empty' },
{x:2 , y:1, sign: 'empty' },
{x:2 , y:2, sign: 'empty' }
];

//TODO create a global variable for holding the x/o turn

function areaCreation() {
  var i =1;
  var gameRow = document.createElement('div');
  for (field in fields){
    var spanel = document.createElement('span');
    spanel.setAttribute('class','field');
    //console.log(fields[field]);
    spanel.setAttribute('id','x:'+fields[field].x+',y:'+fields[field].y);
    spanel.addEventListener("click", changeColor);
    gameRow.appendChild(spanel);
    if(i%3==0){
      gameRow.setAttribute('class','row');
      document.getElementById('gameField').appendChild(gameRow);
      gameRow = document.createElement('div');
    }
     i++;
  }

}

var changeColor = function(e){
  //console.log(e);
  //console.log(this);
  //TODO change to switch only once depending on whose turn it is
  //TODO for advanced task - create images of 'x' and 'o' and use those instead of color.
  e.target.style.backgroundColor = e.target.style.backgroundColor == 'green' ? 'blue':'green' ;
  var tempId = this.getAttribute('id');

  console.log(switchValueForField(tempId));
}

var switchValueForField = function (tempId){

  var x = tempId.split(',')[0].split(':')[1];
  var y = tempId.split(',')[1].split(':')[1];
  //console.log(x);
  //console.log(y);
  //Note the usage of '==' below, due to local x and y being strings and the field properties being number types !
  var obj = fields.find(function (field) { return (field.x == x && field.y == y); });
  //TODO change if statement to work with global turn and can only assign value to field once
  if (obj){
    obj.sign = obj.sign == 'x' ? 'o' : 'x';
  }
  return obj;
 }


//first function call to create the board
areaCreation();
