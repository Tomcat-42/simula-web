import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import {
    faRobot,
    faEye,
    faMapMarkedAlt,
    faChartArea,
    faUser,
    faUsers,
    faSearch,
    faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

import LogoWide from "../../images/logo-wide-light.png";

const icones = {
    simulacao: <FontAwesomeIcon icon={faRobot} />,
    visualizacao: <FontAwesomeIcon icon={faEye} />,
    mapa: <FontAwesomeIcon icon={faMapMarkedAlt} />,
    graficos: <FontAwesomeIcon icon={faChartArea} />,
    individual: <FontAwesomeIcon icon={faUser} />,
    buscar: <FontAwesomeIcon icon={faSearch} />,
    rastrear: <FontAwesomeIcon icon={faSearchLocation} />,
    sobre: <FontAwesomeIcon icon={faUsers} />,
};

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
                            {icones.simulacao} simulação
                        </NavLink>

                        <NavDropdown
                            title={<>{icones.visualizacao} visualização</>}
                            id="nav-visualizacao"
                        >
                            <NavLink
                                className="route-link dropdown-item"
                                to="/visualizacao/mapas"
                            >
                                {icones.mapa} mapas
                            </NavLink>
                            <NavLink
                                className="route-link dropdown-item"
                                to="/visualizacao/graficos"
                            >
                                {icones.graficos} gráficos
                            </NavLink>
                        </NavDropdown>

                        <NavDropdown
                            title={<>{icones.individual} individual</>}
                            id="nav-individual"
                        >
                            <NavLink
                                className="route-link dropdown-item"
                                to="/individual/buscar"
                            >
                                {icones.buscar} buscar
                            </NavLink>
                            <NavLink
                                className="route-link dropdown-item"
                                to="/individual/graficos"
                            >
                                {icones.rastrear} rastrear
                            </NavLink>
                        </NavDropdown>

                        <NavLink className="route-link nav-link" to="/sobre">
                            {icones.sobre} sobre
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNavbar;
