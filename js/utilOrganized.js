var putListInPage = function(retrievedList){
  document.getElementById('endResult').innerHTML = "";
   for( obj in retrievedList){
     var current = retrievedList[obj];

     console.log(current);
     var row = document.createElement('div');
     row.innerHTML += "id: "+ current._id +"  name: "+ current.name + " , profession:  " + current.profession ;
     document.getElementById('endResult').appendChild(row);
   }
}

function retrieveList(url, callback){
    var xmlhttp;
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        if (xmlhttp.readyState == DONE && xmlhttp.status == OK){
            console.log(xmlhttp.responseText);
            callback(JSON.parse(xmlhttp.responseText));
        }else {
          console.log('Error: ' + xmlhttp.status); // An error occurred during the request.
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//retrieveList('localhost:3004/users', putListInPage);


var singleCall = function(){
  var xmlhttp;
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function(){
      if (xmlhttp.readyState == DONE && xmlhttp.status == OK){
          console.log(xmlhttp.responseText);
          document.getElementById('endResult').innerHTML = JSON.parse(xmlhttp.responseText);
          //callback(JSON.parse(xmlhttp.responseText));
      }else {
        console.log('Error: ' + xmlhttp.status); // An error occurred during the request.
      }
  }
  var textUrl = 'http://localhost:3004/user/'+document.getElementById('singleID').value;
  xmlhttp.open("POST", textUrl, true);
  xmlhttp.send();
}

var updateCall - function(){
  //TODO create a function to be called to url "http://localhost:3004/users/update"
  //TODO pass information from the created form in html file to the call
  //TODO update the information in the list with all users (hint - use existing functions)
}
