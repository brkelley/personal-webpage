import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

class MapContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            points: props.points
        };
    }

    render () {
        return (
            <div className="map-wrapper">
                <Map
                    google={this.props.google}
                    zoom={3}
                    style={mapStyles}
                    initialCenter={{
                        lat: 25.971675,
                        lng: -23.786136
                    }}>
                    {this.state.points.map(point => {
                        return (
                            <Marker
                                key={point.name}
                                title={point.name}
                                name={point.name}
                                position={{ lat: point.lat, lng: point.lng }} />
                        )
                    })}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCUHjG1TFAdZssRc7QX8Dy0WW8qne16uPY'
})(MapContainer);
