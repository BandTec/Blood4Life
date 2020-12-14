import React, { useEffect, useState } from "react";
import * as S from './style';
import Card from '../../components/Card/index'
import HospitalIcon from '../../assets/hospital-icon.png'
import api from '../../services/api.js';
import BodyNavMenu from "../../components/BodyNavMenu";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";

export default function HomeDashboard() {

    const hist = useHistory();
    const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);
    const [loading, setLoading] = useState(true);

    const onChildClicked = () => {
        setMostrarMenuLateral(!mostrarMenuLateral);
    }

    const [hospitais, setHospitais] = useState([]);

    function redirect(path, param) {
        sessionStorage.setItem('SESSIONTEST', param)
        hist.push(path);
    }

    useEffect(() => {
        if (localStorage.getItem('tipo-usuario') === 'hospital') {
            redirect(`/dashboard/hospitais/${JSON.parse(localStorage.getItem('usuario')).id}`);
        } else {
            api.get("/hospitais").then(response => {
                setHospitais(response.data);
                setLoading(false);
            }).catch(error => {
                console.log("*** Erro ao contatar o banco ***")
            })
        }
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
                    <S.cardContainer>
                        <S.cardScroll>
                            {hospitais.map(
                                data =>
                                    <Card key={data.id} rota={`/dashboard/hospitais/${data.id}`} nome={data.nome} numero={HospitalIcon} endereco={data.endereco.rua + ", " + data.endereco.numero + " - " + data.endereco.uf} id={data.id} />
                            )}
                        </S.cardScroll>
                    </S.cardContainer>
                    <S.textContainer>
                        <S.containerVideo>
                            <S.textTitle>Esteja preparado para doar!</S.textTitle>

                            <S.video src="https://www.youtube.com/embed/I3Rs6HSitWk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                            <S.textSubTitle>
                                "Doar sangue é um gesto altruísta,
                                que possibilita às pessoas que necessitam de
                                transfusão ou de um dos seus hemoderivados
                                uma chance real de sobreviver."
                            </S.textSubTitle>
                            <S.a target="_blank" href="https://oabce.org.br/2018/06/artigo-a-importancia-da-doacao-de-sangue/">Fonte: OAB Ceará.</S.a>
                        </S.containerVideo>
                    </S.textContainer>
                </S.divContainer>
            } />
        </>
    );
}
