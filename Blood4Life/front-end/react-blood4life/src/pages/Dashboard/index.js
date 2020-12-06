import React, { useState } from "react";
import * as S from './style';
import NavBar from "../../components/NavBar";
// import NavBarSpacing from "../../components/NavBarSpacing";
import MenuLateral from "../../components/MenuLateral";
// import UltimasDoacoes from "../../components/Graficos/ultimasDoacoes";
// import TipoSanguineo from "../../components/Graficos/tipoSanguineo";
import TipoSanguineo2 from "../../components/Graficos/tipoSanguineo2";

export default function Dashboard() {

    const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);

    const onChildClicked = () => {
        setMostrarMenuLateral(!mostrarMenuLateral);
    }

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
                    {/* <NavBarSpacing /> */}
                    {/* DIGITE AQUI ABAIXO*/}

                    <S.lowerSection>
                        <S.leftLowerCard>
                            {/* <TipoSanguineo /> */}
                            <TipoSanguineo2 />
                        </S.leftLowerCard>

                        <S.rightLowerCard>
                                {/* <TipoSanguineo /> */}
                                <S.rightLowerUp>
                                <S.upperCard backgroundC={"#B73B31"}>
                                    <S.upperCardTitle>Usuários</S.upperCardTitle>
                                    <S.upperCardValue>6</S.upperCardValue>
                                </S.upperCard>
                                <S.upperCard backgroundC={"#5580CB"}>
                                    <S.upperCardTitle>Crítico</S.upperCardTitle>
                                    <S.upperCardValue>--</S.upperCardValue>
                                </S.upperCard>
                                </S.rightLowerUp>
                               
                               <S.rightLowerBottom>
                                <S.upperCard backgroundC={"#E75D52"}>
                                    <S.upperCardTitle>Meta Semanal</S.upperCardTitle>
                                    <S.upperCardValue>65%</S.upperCardValue>
                                </S.upperCard>
                                <S.upperCard backgroundC={"#5580CB"}>
                                    <S.upperCardTitle>Colaboradores Online</S.upperCardTitle>
                                    <S.upperCardValue>3</S.upperCardValue>
                                </S.upperCard>
                               </S.rightLowerBottom>
                            {/*UltimasDoacoes /*/}
                        </S.rightLowerCard>
                    
                    </S.lowerSection>

                    {/* DIGITE AQUI ACIMA */}
                </S.bodyContainer>
            </S.container>
        </>
    );
}
