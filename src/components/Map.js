import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const Map = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBK1EngTtxw7KUFFkwLOgglfY0rGyNPj9c&libraries=geometry,drawing,places",
        loadingElement: <div/>,
        containerElement: <div/>,
        mapElement: <div className="my-3 rounded-3xl mapElement" />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: 13.678815, lng: 100.615378 }}>
        {props.isMarkerShown && (
            <Marker
                position={{ lat: 13.678815, lng: 100.615378 }}
                title="Udomsuk Service"
            />
        )}
    </GoogleMap>
));

export default Map