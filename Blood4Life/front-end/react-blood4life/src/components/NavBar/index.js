import React, { useState } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import api from '../../services/api.js';

export default function NavBar(props) {

    console.log("props.onClicked");
    console.log(props.onClicked);
    console.log(props.childClick);
    console.log(props);

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    
    const [display, setDisplay] = useState('none');

    const hist = useHistory();

    const expandirDropdown = () => {
        if (display === 'none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }

    const logout = async () => {

        await api.post('/user/logout')
            .then(res => {
                localStorage.clear();
                alert('Deslogado com sucesso!');
                hist.push("/");
            })
            .catch(err => { 
                alert('Erro ao deslogar');
            });
    }

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
                          i  <S.input placeholder="Pesquise Aqui"></S.input>
                            <S.divSearchIcon>
                                <AiOutlineSearch className="icon" />
                            </S.divSearchIcon>
                            {/* <S.divSearch>
                            </S.divSearch> */}
                        </S.divInput>
                        <S.divPerfil>
                            <S.divPersonaInfo>
                                <S.personaName>{usuario.nome}</S.personaName>
                            </S.divPersonaInfo>
                            <S.divPersonaIcon>
                                <S.personaIcon onClick={expandirDropdown}></S.personaIcon>
                            </S.divPersonaIcon>
                            <S.dropdownProfile style={{display: display}}>
                                <div onClick={logout}>Logout</div>
                            </S.dropdownProfile>
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
                                <S.personaName>{usuario.nome}</S.personaName>
                            </S.divPersonaInfo>
                            <S.divPersonaIcon>
                                <S.personaIcon onClick={expandirDropdown}></S.personaIcon>
                            </S.divPersonaIcon>
                            <S.dropdownProfile style={{display: display}}>
                                <div onClick={logout}>Logout</div>
                            </S.dropdownProfile>
                        </S.divPerfil>
                    </S.navContainer>
            }
        </>
    );

}