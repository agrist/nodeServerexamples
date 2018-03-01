module.exports = function(app){
 var painters = require('./controllers/painters');
    app.get('/painters', painters.findAll);
    app.get('/painterID/:id', painters.findById);
    app.get('/painters/:style', painters.findByStyle);
    app.post('/painters', painters.add);
    app.put('/painters/:id', painters.update);
    app.delete('/painters/:id', painters.delete);

 var users = require('./controllers/users');
    app.get('/users',users.findAll);
    app.post('/users', users.add);
    app.post('/users/update', users.update);
    app.post('/users/delete', users.delete);
    app.post('/user', users.findByName);

    app.get('/hello', function(req, res) {
	    res.send('Hello User, please use the correct file structure! \n');
});
};
