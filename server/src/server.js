const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");
const routes = require("./routes");

const serverConfig = require("../config/serverConfig");
const app = express();

/* rotas da api */
app.use(routes);

/* CORS */
app.use(cors);
//app.use(function (req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header(
        //"Access-Control-Allow-Headers",
        //"Origin, X-Requested-With, Content-Type, Accept"
    //);
    //next();
//});

/* body dos requests em JSON */
app.use(express.json());

app.listen(serverConfig.port, () => {
    console.log(`App rodando na porta ${serverConfig.port}`);
});
