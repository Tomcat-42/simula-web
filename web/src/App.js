import React from "react";
import Routes from "./routes";
import MainNavbar from "./components/Navbar/";

/* Bootstrap css */
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
    return (
        <div className="App">
            <MainNavbar />
            <div id="contentWrapper">
                <Routes />
            </div>
        </div>
    );
}

export default App;
