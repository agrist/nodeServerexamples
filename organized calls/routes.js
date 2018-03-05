module.exports = function(app){
 var painters = require('./controllers/painters');
    app.get('/painters', painters.findAll);
    app.get('/painterID/:id', painters.findById);
    app.get('/painters/:style', painters.findByStyle);
  //  app.post('/painters', painters.add);
  //  app.put('/painters/:id', painters.update);
  //  app.delete('/painters/:id', painters.delete);

 var users = require('./controllers/users');
    app.get('/users',users.findAll);
    app.post('/user', users.add);
    app.post('/user/update', users.update);
    app.post('/users/delete', users.delete);
    app.post('/user/id', users.findById);

var joined = require('./controllers/joined');
    app.get('/joined/dwarf', joined.findFirst);

    app.get('/hello', function(req, res) {
	    res.send('Hello User, please use the correct file structure! \n');
});
};
