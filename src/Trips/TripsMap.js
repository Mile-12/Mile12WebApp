import React, { Component } from "react";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";

const style = {
  width: "75%",
  height: "400px",
  position: "absolute",
};

const triangleCoords = [
  { lat: 6.496617, lng: 3.385929 },
  { lat: 6.499446, lng: 3.387898 },
  { lat: 6.498316, lng: 3.389266 },
  { lat: 25.774, lng: 3.385929},
];
export class MapContainer extends Component {
  render() {
    return (
      <div style={{ height: "400px" }}>
        <Map
          google={this.props.google}
          containerStyle={style}
          className={"map"}
          zoom={14}
          onReady={this.fetchPlaces}
        >
          <Polygon
            paths={triangleCoords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);
