import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";

import serverConfig from "../config/serverConfig";

const app = express();

/* rotas da api */
app.use(routes);

/* CORS */
app.use(cors);

/* body dos requests em JSON */
app.use(express.json());

app.listen(serverConfig.port, () => {
    console.log(`App rodando na porta ${serverConfig.port}`);
});
