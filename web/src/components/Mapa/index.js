import ReactDOM from "react-dom";
import React from "react";

import { Card, ListGroup } from "react-bootstrap";

import "./styles.css";
import ol from "openlayers";

class Mapa extends React.Component {
    componentDidMount() {
        // create feature layer and vector source
        var featuresLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [],
            }),
        });

        // create map object with feature layer
        var map = new ol.Map({
            controls: ol.control.defaults({
                attributionOptions: {
                    collapsible: false,
                },
            }),
            target: this.refs.mapContainer,
            layers: [
                //default OSM layer
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                }),
                featuresLayer,
            ],
            view: new ol.View({
                center: ol.proj.transform(
                    [-53.46330958485, -24.9614305105536],
                    "EPSG:4326",
                    "EPSG:3857"
                ),
                zoom: 13,
            }),
        });

        map.on("click", this.handleMapClick.bind(this));

        // save map and layer references to local state
        this.setState({
            map: map,
            featuresLayer: featuresLayer,
        });
    }

    // pass new features from props into the OpenLayers layer object
    componentDidUpdate(prevProps, prevState) {
        this.state.featuresLayer.setSource(
            new ol.source.Vector({
                features: this.props.routes,
            })
        );
    }

    handleMapClick(event) {
        // create WKT writer
        var wktWriter = new ol.format.WKT();

        // derive map coordinate (references map from Wrapper Component state)
        var clickedCoordinate = this.state.map.getCoordinateFromPixel(
            event.pixel
        );

        // create Point geometry from clicked coordinate
        var clickedPointGeom = new ol.geom.Point(clickedCoordinate);

        // write Point geometry to WKT with wktWriter
        var clickedPointWkt = wktWriter.writeGeometry(clickedPointGeom);

        // place Flux Action call to notify Store map coordinate was clicked
        // Actions.setRoutingCoord(clickedPointWkt);
    }

    render() {
        const { title } = this.props;
        return (
            <Card id="cardList">
                <Card.Header as="h3" className="title">
                    {title || "Lista"}
                </Card.Header>
                <Card.Body id="cardBody">
                    <ListGroup variant="flush" id="list">
                        <div ref="mapContainer"> </div>
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}

export default Mapa;
