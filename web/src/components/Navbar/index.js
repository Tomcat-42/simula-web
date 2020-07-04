import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

import "./styles.css";

import LogoWide from "../../images/logo-wide-light.png";

class MainNavbar extends Component {
    render() {
        return (
            <Navbar id="main-nav" variant="dark" expand="sm">
                <NavLink className="navbar-brand" to="/">
                    <img
                        alt=""
                        src={LogoWide}
                        width="104"
                        height="32"
                        className="d-inline-block align-top"
                    />{" "}
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink
                            className="route-link nav-link"
                            to="/simulacao"
                        >
                            simulação
                        </NavLink>

                        <NavDropdown title="visualização" id="nav-visualizacao">
                            <NavLink
                                className="route-link dropdown-item"
                                to="/visualizacao/mapas"
                            >
                                mapas
                            </NavLink>
                            <NavLink
                                className="route-link dropdown-item"
                                to="/visualizacao/graficos"
                            >
                                gráficos
                            </NavLink>
                        </NavDropdown>

                        <NavDropdown title="individual" id="nav-individual">
                            <NavLink
                                className="route-link dropdown-item"
                                to="/individual/buscar"
                            >
                                buscar
                            </NavLink>
                            <NavLink
                                className="route-link dropdown-item"
                                to="/individual/graficos"
                            >
                                rastrear
                            </NavLink>
                        </NavDropdown>

                        <NavLink className="route-link nav-link" to="/sobre">
                            sobre
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNavbar;
