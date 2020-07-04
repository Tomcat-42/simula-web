import React from "react";
import { Switch, Route } from "react-router-dom";
import Simulacao from "./pages/Simulacao/";
import Sobre from "./pages/Sobre/";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Simulacao} />
        <Route exact path="/simulacao" component={Simulacao} />
        <Route exact path="/sobre" component={Sobre} />
    </Switch>
);

export default Routes;
