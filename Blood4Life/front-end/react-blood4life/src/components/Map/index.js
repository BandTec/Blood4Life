import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents, ZoomControl, } from 'react-leaflet';
import L from 'leaflet';

export default function Map(props) {

    const hist = useHistory();
    const [viewPosition, setViewPosition] = useState([props.coordinates.lat, props.coordinates.lng]);
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        setHospitals(props.data);
        setViewPosition([props.coordinates.lat, props.coordinates.lng]);
    }, [props]);

    return (

        <>
            <MapContainer
                style={{ width: '100%', height: '100%' }}
                center={viewPosition}
                zoom={12}
                dragging={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                <ZoomControl position={'bottomright'} />

                {
                    hospitals.map((hospital, i) => (
                        <Marker
                            key={i + 1}
                            position={[hospital.endereco.latitude, hospital.endereco.longitude]}
                            icon={L.icon({
                                iconUrl: require('../../assets/point.svg'),
                                iconRetinaUrl: require('../../assets/point.svg'),
                                iconAnchor: null,
                                shadowUrl: null,
                                shadowSize: null,
                                shadowAnchor: null,
                                iconSize: [48, 48],
                                popupAnchor: [0, -12]
                            })} >
                            <Popup>
                                <div style={{ height: 'auto', width: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <h1>{hospital.nome}</h1>
                                    <h4>{hospital.endereco.rua}, {hospital.endereco.numero} - {hospital.endereco.bairro}, {hospital.endereco.cidade} - {hospital.endereco.uf}, {hospital.endereco.cep}</h4>
                                </div>
                                <Link to={`/dashboard/hospitais/${i + 1}`}>
                                    <h2>Ver informações</h2>
                                </Link>
                            </Popup>
                        </Marker>
                    ))
                }

                <Marker position={[props.coordinates.lat, props.coordinates.lng]}
                    icon={L.icon({
                        iconUrl: require('../../assets/user-point.svg'),
                        iconRetinaUrl: require('../../assets/user-point.svg'),
                        iconAnchor: null,
                        shadowUrl: null,
                        shadowSize: null,
                        shadowAnchor: null,
                        iconSize: [48, 48],
                        popupAnchor: [0, -12]
                    })}
                >
                    <Popup>
                        <div style={{ height: '50px', width: '115px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <h2><u>{JSON.parse(localStorage.getItem('usuario')).nome}</u>, você está aqui!</h2>
                        </div>
                    </Popup>
                </Marker>

            </MapContainer>
        </>

    );

}