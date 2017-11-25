import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import io from "socket.io-client";
// import {
//   GoogleMap,
//   Marker,
//   withScriptjs,
//   withGoogleMap
// } from "react-google-maps";
// import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

const socketURL = "http://localhost:4000";
//class RenderMaker
class GiamSat extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
      markerCoordinates: [],
      region: {
        latitude: 20.858446,
        longitude: 106.331177,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  componentDidMount() {
    const socket = this.socket;
    if (!socket) return;

    socket.on("disconnect", () => alert("Luong truc tuyen bi mat"));

    socket.on("locationUpdated", locationState => {
      const newMarkerCoordinates = Object.values(locationState).map(item => ({
        latitude: item.lat,
        longitude: item.lng
      }));

      this.setState({ markerCoordinates: newMarkerCoordinates });
    });
  }
  renderMarkers = markerCoordinates => {
    return markerCoordinates.map((coord, index) => (
      <Marker
        name={"Your position"}
        position={{ lat: coord.latitude, lng: coord.longitude }}
        icon={{
          url: process.env.PUBLIC_URL + "/assets/img/car.png"
        }}
      />
    ));
  };
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <Map
            google={this.props.google}
            initialCenter={{
              lat: 20.858446,
              lng: 106.331177
            }}
            zoom={15}
          >
            {this.renderMarkers(this.state.markerCoordinates)}

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Thanh</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC0lbsTooY--gwm_3eMtqcXf4UyqzH0u-0"
})(GiamSat);
