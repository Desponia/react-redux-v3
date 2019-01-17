import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps"
import React from 'react'

const MapWithAMarker = withGoogleMap(props => {
    const { lat, lon } = props;
    console.log('lat : ', lat, ', lon: ', lon);
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: lat, lng: lon}}
        >
            <Marker
                position={{lat: lat, lng: lon}}
            />
        </GoogleMap>
    )
});

export default MapWithAMarker