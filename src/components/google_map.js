import _ from 'lodash'
import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export default withGoogleMap((props) => {
        const {lat, lon} = props;
        console.log('lat : ', lat, ', lon: ', lon);
        return (
            <GoogleMap
                defaultZoon={12}
                defaultCenter={{lat: lat, lng: lon}}
            />
        )
    }
)