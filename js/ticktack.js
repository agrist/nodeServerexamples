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

function areaCreation() {
  var i =1;
  var gameRow = document.createElement('div');
  for (field in fields){
    var spanel = document.createElement('span');
    spanel.setAttribute('class','field');
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
  console.log(e);
  console.log(this);
  e.target.style.backgroundColor = e.target.style.backgroundColor == 'green' ? 'blue':'green' ;

}


areaCreation();
