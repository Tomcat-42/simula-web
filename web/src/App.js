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
            <Routes />
        </div>
    );
}

export default App;
