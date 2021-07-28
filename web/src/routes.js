import React from "react";
import { Switch, Route } from "react-router-dom";
import Cadastrar from "./pages/Simulacao/Cadastrar";
import VisualizacaoMapas from "./pages/Visualizacao/Mapas/";
import Sobre from "./pages/Sobre/";
import Logs from "./pages/Logs/";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Cadastrar} />
        <Route exact path="/simulacao/cadastrar" component={Cadastrar} />
        <Route exact path="/simulacao/executar" component={Cadastrar} />
        <Route exact path="/visualizacao/mapas" component={VisualizacaoMapas} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/logs" component={Logs} />
    </Switch>
);

export default Routes;
