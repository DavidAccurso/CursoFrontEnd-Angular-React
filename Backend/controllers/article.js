'use strict'

var validator = require('validator');
const article = require('../models/article');
var Article = require('../models/article');
var fs = require('fs');
var path = require('path');

var controller = {
    datosCurso : (req, res) => {
        var varHola = req.body.varHola;

        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            nombre: 'David Accurso',
            variableHola: varHola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test del controlador de articulos'
        });
    },

    save: (req, res) => {
        //obtener parametros
        var params = req.body;
        console.log(params);
        //validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content) {
            //crear objeto, asignar valores
            var article = new Article();

            //asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //guardar articulo
            article.save((err, articleStored) => {
                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado!'
                    }); 
                }
            });

            return res.status(200).send({
                status: 'Success',
                article
            }); 
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos!'
            })
        } 
    },

    getArticles: (req, res) => {
        var query = Article.find({});

        //filtra solo ultimos art
        var last = req.params.last;
        if(last || last != undefined){
            query.limit(5);
        }
    
        try{
            query.sort('-_id').exec((err, articles) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al recibir los articulos!'
                    })    
                }
                if(!articles){
                    if(err){
                        return res.status(404).send({
                            status: 'error',
                            message: 'No hay articulos.'
                        })    
                    }
                }
                return res.status(200).send({
                    status: 'Success',
                    articles
                })    
            });
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: err
            })  
        }  
    },

    getArticle: (req, res) => {
        var articleId = req.params.id;
        console.log(articleId);

        if(!articleId || articleId == null || articleId == undefined){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el id.'
            }) 
        }

        Article.findById(articleId, (err, article) => {
            if(err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo.'
                }) 
            }

            return res.status(200).send({
                status: 'Success',
                article
            })    
        });
    },

    update: (req, res) => {
        var articleId = req.params.id;
        var params = req.body;

        try{
            var validate_title = validator.isEmpty(params.title);
            var validate_content = validator.isEmpty(params.content);
            console.log(params.title);
            console.log(validate_title);
            if(validate_title || validate_content){
                return res.status(200).send({
                    status: 'error',
                    message: 'validacion no es correcta'
                })         
            }
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Error en el catch : ' + err
            })          
        }

        Article.findByIdAndUpdate({_id: articleId}, params, {new: true}, (err, articleUpdated) => {
            if(err){
                return res.status(200).send({
                    status: 'error',
                    message: 'Err en update: ' + err
                })         
            }
            if(!articleUpdated){
                return res.status(200).send({
                    status: 'error',
                    message: 'No existe el articulo'
                })         
            }

            return res.status(200).send({
                status: 'Success',
                article: articleUpdated
            })         
        });
    },

    delete: (req, res) => {
        var articleId = req.params.id;
        
        Article.findOneAndDelete({_id: articleId}, (err, articleDeleted) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                })      
            }
            if(!articleDeleted){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se borro el articulo, no existe'
                })
            } 
            
            return res.status(200).send({
                status: 'Success',
                article: articleDeleted
            })  
        });       
    },

    upload: (req, res) => {
        // Configurar el modulo connect multiparty router/article.js

        // Get el fichero de la peticion
        var file_name = 'Imagen no subida...';

        console.log(req.files);
        
        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        };

        // Obtener el path del nuevo nombre del archivo ya subido
        var file_path = req.files.file0.path;

        //nombre del archivo
        var file_split = file_path.split('\\');
        var file_name = file_split[2];

        //extension del fichero
        var extension_split = file_name.split('\.');
        var file_extension = extension_split[1];

        // comprobar ext, solo img, si es invalida borrar
        if(file_extension != 'png' &&
        file_extension != 'jpg' &&
        file_extension != 'jpeg' &&
        file_extension != 'gif'){
            // borra fichero por invalido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida'
                });
            });
        }else {
            // Si todo es valido
            var articleId = req.params.id;

            Article.findOneAndUpdate({_id: articleId}, {image: file_nam}, {new: true}, (err, articleUpdated) => {
                
                // error
                if(err || !articleUpdated){
                    return res.status(200).send({
                        status: 'error', 
                        message: 'error al guardar la imagen'
                    });
                }

                // buscar articulo, aisgnarle el nobre de la img y actualizarla
                return res.status(200).send({
                    status: 'success', 
                    article: articleUpdated
                });
            })
        } 
    },

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/' + file;
        
        fs.exists(path_file, (exist) => {
            if(exist){
                return res.sendFile(path.resolve(path_file));
            }else{

                return res.status(200).send({
                    status: 'No se encontro foto'
                });
            }
        });

    },

    search: (req, res) => {

        // sacar el string a buscar 
        var searchString = req.params.search;

        // find or
        Article.find({ "$or": [
            { "title": { "$regex": searchString, "$options": "i" }},
            { "content": { "$regex": searchString, "$options": "i" }},
        ]})
        .sort([['date', 'descending']])
        .exec((err, articles) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la peticion: ',
                    err
                });
            }
            else if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos que coincidan'
                });
            }else { 
                return res.status(200).send({
                    status: 'success',
                    articles
                });
            }
        });
    }
};

module.exports = controller;