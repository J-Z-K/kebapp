import React from "react";
// import LeafMap from "./LeafMap";
import { Map, TileLayer, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

const LeafMap = ({ lat, lng }) => {
    const position = [lat, lng];
    return (
        <div className="Map">
            <Map center={position} zoom={17}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
                </Marker>
            </Map>
        </div>
    );
};

export default LeafMap;
