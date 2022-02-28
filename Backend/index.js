//Usar modo estricto para mejores practicas
'use strict'

//Importacion
var mongoose = require('mongoose');

//codigo

var url = 'mongodb://localhost:27017/api_blog';
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('La conexion a DB se realizo exitosamente!.');

        //crear servidor y escuchar peticiones
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port);
        });
    });

