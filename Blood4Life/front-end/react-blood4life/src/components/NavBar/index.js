import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

import { GiHamburgerMenu } from 'react-icons/gi';
// import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import api from '../../services/api';

export default function NavBar(props) {

    const hist = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    const [display, setDisplay] = useState('none');

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const apelido = localStorage.getItem("apelido");

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
               // alert('Deslogado com sucesso!');
                hist.push("/");
            })
            .catch(err => {
                alert('Erro ao deslogar');
            });
    }


    return (
        <>
            <S.navContainer>
                {
                    props.teste
                        ?
                        <S.menuHamburguer className={props.selected ? "selected" : null} onClick={props.whenClicked}>
                            <MdClose className="icon" />
                        </S.menuHamburguer>
                        :
                        <S.menuHamburguer onClick={props.whenClicked}>
                            <GiHamburgerMenu className="icon" />
                        </S.menuHamburguer>
                }
                {
                    showSearch && (
                        <S.divInput>
                            <S.input placeholder="Pesquise aqui"></S.input>
                            <S.divSearchIcon>
                                <AiOutlineSearch className="icon" />
                            </S.divSearchIcon>
                        </S.divInput>
                    )
                }
                <S.divPerfil>
                    <S.divPersonaInfo>
                        <S.personaName>{usuario.nome}</S.personaName>
                    </S.divPersonaInfo>
                    <S.divPersonaIcon>
                        <S.personaIcon onClick={expandirDropdown}>{apelido}</S.personaIcon>
                    </S.divPersonaIcon>
                    <S.dropdownProfile style={{ display: display }}>
                        <S.divLogout onClick={logout}>
                            <FiLogOut className="logoutIcon" />
                            <S.leave>Sair</S.leave>
                        </S.divLogout>
                    </S.dropdownProfile>
                </S.divPerfil>
            </S.navContainer>
        </>
    );

}