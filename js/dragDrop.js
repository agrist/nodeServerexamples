var app = {};
app. allowDropping = function (event){
  event.preventDefault();
};

app.dragging = function(event){
  console.log("draging");
  event.dataTransfer.setData("text", event.target.id);
};

app.dropping = function(event){
  console.log(event);
  event.preventDefault();
  var info = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(info));
};
