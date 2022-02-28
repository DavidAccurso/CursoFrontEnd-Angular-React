'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

var multiplart = require('connect-multiparty');
const article = require('../models/article');
var md_upload = multiplart({ uploadDir: './upload/articles' });

//pruebas
router.get('/test-controller', ArticleController.test);
router.get('/datos-curso', ArticleController.datosCurso);

// rutas
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/update/:id', ArticleController.update);
router.delete('/delete/:id', ArticleController.delete);
router.post('/upload-image/:id', md_upload, ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search)
module.exports = router;