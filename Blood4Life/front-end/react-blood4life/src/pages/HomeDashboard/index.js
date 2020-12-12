import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import * as S from './style';
import NavBar from "../../components/NavBar";
import NavBarSpacing from "../../components/NavBarSpacing";
import MenuLateral from "../../components/MenuLateral";
import Card from '../../components/Card/index'

export default function HomeDashboard() {

    const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);
   
    // const hist = useHistory();

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
                <NavBarSpacing />
                    {/* DIGITE AQUI ABAIXO*/}
                <S.cardAll>
                    <S.cardContainer>
                        <S.cardScroll>
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                            <Card nome={'Hospital Sírio libanes'} numero={1} endereco={'Rua são josé bonifácio'} />
                        </S.cardScroll>
                    </S.cardContainer>
                    <S.textContainer> 
                    </S.textContainer>
                </S.cardAll>

                    {/* DIGITE AQUI ACIMA */}
                </S.bodyContainer>
            </S.container>
        </>
    );
}
