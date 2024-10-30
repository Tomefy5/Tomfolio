import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "../Styles/MapTana.css"

const antananarivoPosition = [-19.0007, 47.5424]; // Coordonnées de Antananarivo

const MapTana = () => {
  return (
    <div style={{ height: "auto", width: "100%" }} className="container-map-tana">
      <h2 className="map-tana-title">How to find me?</h2>
      <MapContainer center={antananarivoPosition} zoom={13} style={{ height: "40vh", width: "100%" , borderRadius: '10px'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={antananarivoPosition}>
          <Popup>
            Antananarivo, capitale de Madagascar.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapTana;
