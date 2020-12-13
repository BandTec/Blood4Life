import React, { useEffect, useState } from "react";
import * as S from './style';
import NavBar from "../../components/NavBar";
import NavBarSpacing from "../../components/NavBarSpacing";
import MenuLateral from "../../components/MenuLateral";
import Card from '../../components/Card/index'
import HospitalIcon from '../../assets/hospital-icon.png'
import api from '../../services/api.js';

export default function HomeDashboard() {

    const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);
   
    const onChildClicked = () => {
        setMostrarMenuLateral(!mostrarMenuLateral);
    }

    const [hospitais, setHospitais] = useState([]);

    useEffect(()=>{
        api.get("/hospitais").then(response =>{
            setHospitais(response.data)
        }).catch(error =>{
            console.log("*** Erro ao contatar o banco ***")
        })
    }, []);
    
    return (
        <>

            <S.container>
                {
                    mostrarMenuLateral
                        ?
                        <MenuLateral />
                        :
                        <>
                        </>
                }
                {
                    mostrarMenuLateral
                        ?
                        <NavBar onClicked={onChildClicked} mostrandoMenu />
                        :
                        <NavBar onClicked={onChildClicked} />
                }
                <S.bodyContainer>
                <NavBarSpacing />
                    {/* DIGITE AQUI ABAIXO*/}
                    {/* `/dashboard/hospitais/${data.id}` */}
                <S.cardAll>
                    <S.cardContainer>
                        <S.cardScroll>
                            {hospitais.map(
                                data =>
                                <Card key={data.id} rota={`/dashboard/hospitais/${data.id}`} nome={data.nome} numero={HospitalIcon} endereco={data.endereco.rua+", "+data.endereco.numero+" - "+data.endereco.uf} id={data.id}/>
                            )}
                        </S.cardScroll>
                    </S.cardContainer>
                    <S.textContainer> 
                        <S.containerVideo>
                            <S.textTitle>Esteja preparado para doar!</S.textTitle>

                            <S.video src="https://www.youtube.com/embed/I3Rs6HSitWk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                            <S.textSubTitle>
                                "Doar sangue é um gesto altruísta, 
                                que possibilita às pessoas que necessitam de 
                                transfusão ou de um dos seus hemoderivados 
                                uma chance real de sobreviver. Um gesto gratuito 
                                fundado na solidariedade, mas que de tempos em 
                                tempos a comemoração dá espaço às campanhas cujo 
                                objetivo é tirar o HEMOCE do estado crítico, 
                                buscando captar pessoas para recuperar seus estoques 
                                quase zerados, realidade também presente nos demais 
                                Estados do País."
                            </S.textSubTitle>
                            <S.a target="_blank" href="https://oabce.org.br/2018/06/artigo-a-importancia-da-doacao-de-sangue/">Fonte: OAB Ceará.</S.a>
                        </S.containerVideo>
                    </S.textContainer>
                </S.cardAll>

                    {/* DIGITE AQUI ACIMA */}
                </S.bodyContainer>
            </S.container>
        </>
    );
}
