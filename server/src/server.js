const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");
const routes = require("./routes");

const serverConfig = require("../config/serverConfig");
const app = express();

/* CORS */
app.use(cors());

/* rotas da api */
app.use(routes);

/* body dos requests em JSON */
app.use(express.json());

app.listen(serverConfig.port, () => {
    console.log(`App rodando na porta ${serverConfig.port}`);
});
