const express = require('express');
const multer = require('multer');
const multerConfig = require('./multer.config');
const upload = multer(multerConfig);

const routes = express.Router();
const EspacialSimulacoesController = require('./controllers/EspacialSimulacoesController');

routes.post('/files', upload.single('file'), EspacialSimulacoesController.create);

module.exports = routes;
