import React, { useState, useEffect } from 'react';
import * as S from './style';
import api from '../../services/api';

import Map from '../../components/Map';
import BodyNavMenu from '../../components/BodyNavMenu';
import Loading from '../../components/Loading';
import { MapCard } from '../../components';

export default function LocalizarHospitais(props) {

    const [loading, setLoading] = useState(true);
    const [hospitals, setHospitals] = useState([]);
    const [location, setLocation] = useState([]);

    useEffect(() => {
        api.get('/hospitais')
            .then(res => {
                setHospitals(res.data);
                setLocation(JSON.parse(localStorage.getItem('usuario')));
                setLoading(false);
            }).catch((error) => {
                // setLoading(false)
                window.alert('Erro: ' + error);
            })
    }, []);

    return (
        <>

            {
                loading
                    ?
                    <Loading />
                    :
                    null
            }

            <BodyNavMenu render={
                <S.divContainer>
                    <S.divMenuContainer>
                        <S.divCardContainer>
                            {
                                loading || (
                                    hospitals.map((hospital, i) => (
                                        <MapCard
                                            key={i}
                                            route={i + 1}
                                            nome={hospital.nome}
                                            endereco={hospital.endereco.rua}
                                            numero={hospital.endereco.numero}
                                        />
                                    ))
                                )
                            }
                        </S.divCardContainer>
                    </S.divMenuContainer>
                    <S.divMapContainer>
                        {
                            loading || (
                                <Map data={hospitals} coordinates={{ lat: location.endereco.latitude, lng: location.endereco.longitude }} />
                            )
                        }
                    </S.divMapContainer>
                </S.divContainer>
            } />

        </>
    );

}



