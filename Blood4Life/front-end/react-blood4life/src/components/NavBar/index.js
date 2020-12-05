import React from 'react';
import * as S from './style';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

export default function NavBar(props) {

    console.log("props.onClicked");
    console.log(props.onClicked);
    console.log(props.childClick);
    console.log(props);

    return (

        <>
            {
                props.mostrandoMenu
                    ?
                    <S.navContainer style={{ width: "80%" }}>
                        <S.menuHamburguer onClick={props.onClicked}>
                            <GiHamburgerMenu className="icon" />
                        </S.menuHamburguer>
                        <S.divInput>
                            <S.input placeholder="Pesquise Aqui"></S.input>
                            <S.divSearchIcon>
                                <AiOutlineSearch className="icon" />
                            </S.divSearchIcon>
                            {/* <S.divSearch>
                            </S.divSearch> */}
                        </S.divInput>
                        <S.divPerfil>
                            <S.divPersonaInfo>
                                <S.personaName>NOME DO USUÁRIO</S.personaName>
                            </S.divPersonaInfo>
                            <S.divPersonaIcon>
                                <S.personaIcon></S.personaIcon>
                            </S.divPersonaIcon>
                        </S.divPerfil>
                    </S.navContainer>

                    :

                    <S.navContainer>
                        <S.menuHamburguer onClick={props.onClicked}>
                            <GiHamburgerMenu className="icon" />
                        </S.menuHamburguer>
                        <S.divInput>
                            <S.input placeholder="Pesquise aqui"></S.input>
                            <S.divSearchIcon>
                                <FaSearch className="icon" />
                            </S.divSearchIcon>
                            {/* <S.divSearch>
                            </S.divSearch> */}
                        </S.divInput>
                        <S.divPerfil>
                            <S.divPersonaInfo>
                                <S.personaName>NOME DO USUÁRIO</S.personaName>
                            </S.divPersonaInfo>
                            <S.divPersonaIcon>
                                <S.personaIcon></S.personaIcon>
                            </S.divPersonaIcon>
                        </S.divPerfil>
                    </S.navContainer>
            }
        </>
    );

}