const express = require("express");
const multer = require("multer");
const multerConfig = require("./multer.config");
const upload = multer(multerConfig);

// Controllers
const routes = express.Router();
const EspacialSimulacoesController = require("./controllers/EspacialSimulacoesController");
const BaseSimulacoesController     = require("./controllers/BaseSimulacoesController");
const LogsController               = require("./controllers/LogsController");
const ArquivosSimulacoesController               = require("./controllers/ArquivosSimulacoesController");

routes.post("/files", upload.single("file"), EspacialSimulacoesController.create);
routes.post("/base", upload.single("file"), BaseSimulacoesController.create);

routes.get("/logs", LogsController.index);
routes.get("/logs/:file", LogsController.show);
routes.get("/simulacoes", ArquivosSimulacoesController.all);
routes.get("/simulacoes/:file", ArquivosSimulacoesController.index);

module.exports = routes;
    