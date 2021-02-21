const express = require('express');
const multer = require('multer');
const multerConfig = require('./multer.config');
const upload = multer(multerConfig);

const routes = express.Router();
const EspacialSimulacoesController = require('./controllers/EspacialSimulacoesController');
const BaseSimulacoesController = require('./controllers/BaseSimulacoesController');

routes.post('/files', upload.single('file'), EspacialSimulacoesController.create);
routes.post('/base', upload.single('file'), BaseSimulacoesController.create);

module.exports = routes;
