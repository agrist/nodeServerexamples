var app = {};
app.one = 123;
app.two = 'abc';
app.three = ['q','w','e'];

//browser persistant
localStorage["one"] = app.one;
localStorage["two"] = app.two;
localStorage["three"] = app.three;
localStorage["app"] = app;
localStorage["appObj"] = app.toString();
//tab and window specific
sessionStorage.username = "agrist";
sessionStorage.name = 'agris';
