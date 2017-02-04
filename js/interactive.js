var app = {};

app.getElement = function(element){
    return document.getElementById(element);
}

app.entry = app.getElement('entry1');
app.output = app.getElement('output');

app.entry.onkeyup = function(){
  //will be called when button released when writing inside the input
  app.output.innerText = this.value;//"this" is in this context the app.entry
}

//Style changes
app.styleThis = function(){
  //using the JS properties approach
var box = app.getElement('box');
/*box.style.width = '120px';
box.style.height = '120px';
box.style.backgroundColor = 'slategrey';
box.style.padding = '10px';
box.style.color = '#fff';
box.style.border = '1px solid #000';*/

//using css style approach using attribute
box.setAttribute('style','width:80px;height:80px;background-color:green');
}
