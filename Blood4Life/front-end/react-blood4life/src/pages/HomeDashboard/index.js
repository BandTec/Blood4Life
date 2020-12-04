import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import * as S from './style';
import NavBar from "../../components/NavBar";
import NavBarSpacing from "../../components/NavBarSpacing";
import MenuLateral from "../../components/MenuLateral";

export default function HomeDashboard() {

    const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);
   
    const hist = useHistory();

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
                    <S.cardContainer>
                        <S.card onClick={() => hist.push("/dashboard")} backgroundC={"#B73B31"}>
                            <S.cardTitle>Hospital 1</S.cardTitle>
                            <S.cardValue>0</S.cardValue>
                            <S.cardDescription>Rua seiquela tal de tal, 59</S.cardDescription>
                        </S.card>
                        <S.card onClick={() => hist.push("/dashboard")} backgroundC={"#E75D52"}>
                            <S.cardTitle>Hospital 2</S.cardTitle>
                            <S.cardValue>0</S.cardValue>
                            <S.cardDescription>Rua seiquela tal de tal, 59</S.cardDescription>
                        </S.card>
                        <S.card onClick={() => hist.push("/dashboard")} backgroundC={"#5580CB"}>
                            <S.cardTitle>Hospital 3</S.cardTitle>
                            <S.cardValue>0</S.cardValue>
                            <S.cardDescription>Rua seiquela tal de tal, 59</S.cardDescription>
                        </S.card>
                        <S.card backgroundC={"#FFDDDD"}>
                            <S.cardTitle>Hospital 4</S.cardTitle>
                            <S.cardValue>1</S.cardValue>
                            <S.cardDescription>Rua seiquela tal de tal, 59</S.cardDescription>
                        </S.card>
                        <S.card backgroundC={"#DDFFDD"}>
                            <S.cardTitle>Hospital 5</S.cardTitle>
                            <S.cardValue>1</S.cardValue>
                            <S.cardDescription>Rua seiquela tal de tal, 59</S.cardDescription>
                        </S.card>
                        <S.card backgroundC={"#FFFFDD"}>
                            <S.cardTitle>Hospital 6</S.cardTitle>
                            <S.cardValue>1</S.cardValue>
                            <S.cardDescription>Rua seiquela tal de tal, 59</S.cardDescription>
                        </S.card>
                        <S.card backgroundC={"#FFF000"}>
                            <S.cardTitle>Hospital 7</S.cardTitle>
                            <S.cardValue>1</S.cardValue>
                            <S.cardDescription>Rua seiquela tal de tal, 59</S.cardDescription>
                        </S.card>
                        <S.card onClick={() => hist.push("/dashboard")} backgroundC={"#5580CB"}>
                            <S.cardTitle>Hospital 8</S.cardTitle>
                            <S.cardValue>1</S.cardValue>
                            <S.cardDescription>Rua seiquela tal de tal, 59</S.cardDescription>
                        </S.card>
                    </S.cardContainer>
                    

                    {/* DIGITE AQUI ACIMA */}
                </S.bodyContainer>
            </S.container>
        </>
    );
}
