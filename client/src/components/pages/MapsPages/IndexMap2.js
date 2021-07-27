import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";


// import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    //  styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 28.092381,
    lng: -15.464042,
};

export default function App() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        // setMarkers((current) => [
        setMarkers(() => [
            // ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                // time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
        ///// esto hace que se vaya a tu localizacion al cargar el mapa
        navigator.geolocation.getCurrentPosition(
            (position) => {
                panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            () => null
        );

    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(12);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>
            <h1>
                Bears{" "}
                <span role="img" aria-label="tent">
                    ⛺️
                </span>
            </h1>

            <Locate panTo={panTo} />
            {/* <Search panTo={panTo} /> */}

            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map((marker) => (
                    <Marker

                        key={`${marker.lat}-${marker.lng}`}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                    // icon={{
                    //     url: `/bear.svg`,
                    //     origin: new window.google.maps.Point(0, 0),
                    //     anchor: new window.google.maps.Point(15, 15),
                    //     scaledSize: new window.google.maps.Size(30, 30),
                    // }}
                    />
                ))}

                {selected ? (
                    <InfoWindow
                        position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}
                    >
                        <div>
                            <h2>
                                <span role="img" aria-label="bear">
                                    🐻
                                </span>{" "}
                                Alert
                                {/* aqui poner el contenido y el enlace al perfil del usuario */}
                            </h2>
                            {/* <p>Spotted {formatRelative(selected.time, new Date())}</p> */}
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </div>
    );
}

function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >
            <img src="/compass.svg" alt="compass" />
        </button>
    );
}



// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import Marker from 'google-map-react';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: 28.092381,
//             lng: -15.464042

//         },
//         zoom: 12
//     };
//     onLoad = marker => {
//         console.log('marker: ', marker)
//     }

//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact

//                     bootstrapURLKeys={{ key: "AIzaSyAiWoZMeyUtielp3mdwvhIbbcddZkfUMtU" }}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <Marker
//                         onLoad={this.onLoad}
//                         position={this.center}
//                     />
//                     <AnyReactComponent
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }

// export default SimpleMap;