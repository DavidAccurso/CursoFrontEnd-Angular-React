'use strict'

// cargar modulos de node para crear el sv

var express = require('express');
var bodyParser = require('body-parser');

// ejecutar express para trabajar con http
var app = express();

// cargar ficheros de rutas
var articleRoutes = require('./routes/article');

// cargar middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cargar CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// añadir prefijos a las rutas y cargar rutas

app.use('/', articleRoutes);

// ruta prueba

    // app.get('/prueba', (req, resp) => {
    //     console.log('request desde GET/prueba');
    //     return resp.status(200).send({
    //         curso: 'Master en frameworks js',
    //         nombre: 'David'
    //     }
    //     );
    // });
    // app.post('/prueba', (req, resp) => {
    //     console.log('request desde GET/prueba');

    //     var varHola = req.body.varHola;

    //     return resp.status(200).send({
    //         curso: 'Master en frameworks js',
    //         nombre: 'David',
    //         variableHola: varHola
    //     }
    //     );
    // });



// exportar modulo
module.exports = app;