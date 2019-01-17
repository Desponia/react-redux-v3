import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export default withGoogleMap((props) => {
    console.log(typeof props.lon)
        return (
            <GoogleMap
                defaultZoon={12}
                defaultCenter={{lat: props.lat, lon: props.lon}}
            />
        )
    }
)