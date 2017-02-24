module.exports = function(app){
 var painters = require('./controllers/painters');
    app.get('/painters', painters.findAll);
    app.get('/painters/:id', painters.findById);
    app.post('/painters', painters.add);
    app.put('/painters/:id', painters.update);
    app.delete('/painters/:id', painters.delete);

 var users = require('./controllers/users');
    app.get('/users',users.findAll);
    app.post('/users', users.add);
    app.put('/users/:id', users.update);
    app.delete('/users/:id', users.delete);
    //app.get('/import', users.import);

    app.get('/hello', function(req, res) {
	    res.send('Hello User, please use the correct file structure! \n');
});
};
