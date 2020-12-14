import React from "react";
import { useHistory } from "react-router-dom";
import * as S from './style';
import api from '../../services/api';

// import logo from "../../assets/logo.svg";
import logoVermelho from "../../assets/img-logo-vermelho.svg";
import { AiFillHome } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdSettings, MdDashboard } from 'react-icons/md';
import { BsArrowRepeat } from 'react-icons/bs';

export default function MenuLateral(props) {

    const hist = useHistory();

    function redirect(path, param) {
        sessionStorage.setItem('SESSIONTEST', param)
        hist.push(path);
    }

    const logout = async () => {
        await api.post('/user/logout')
            .then(res => {
                localStorage.clear();
             //   alert('Deslogado com sucesso!');
                redirect("/");
            })
            .catch(err => {
                alert('Erro ao deslogar');
            });
    }

    return (
        <>
            <S.menuContainer>
                <S.divLogo>
                    <S.logo>
                        <S.divSalsichao bgc={'#FFFFFF'}>
                            <S.imgLogo src={logoVermelho} alt="Logo branca do projeto blood4life com fundo azul" />
                        </S.divSalsichao>
                    </S.logo>
                </S.divLogo>
                <S.divLista>
                    <S.lista>

                        {
                            localStorage.getItem('tipo-usuario') === 'doador'
                            &&
                            <>
                                <S.item onClick={() => redirect('/menu')}>
                                    <AiFillHome className='icon' />
                                    Menu Principal
                                </S.item>
                                <S.item onClick={() => redirect('/localizar')}>
                                    <FaMapMarkerAlt className='icon' />
                                    Localização
                                </S.item>
                                <S.item onClick={() => redirect('/alterarDoador')}>
                                    <MdSettings className='icon' />
                                    Configurações
                                </S.item>
                            </>
                        }
                        {
                            localStorage.getItem('tipo-usuario') === 'hospital'
                            &&
                            (
                                <>
                                    <S.item onClick={() => redirect(`/dashboard/hospitais/${JSON.parse(localStorage.getItem('usuario')).id}`)}>
                                        <MdDashboard className='icon' />
                                        Dashboards
                                    </S.item>
                                    <S.item onClick={() => redirect('/alterarQtdSangue')}>
                                        <BsArrowRepeat className='icon' />
                                        Atualizar Estoque
                                    </S.item>
                                    <S.item onClick={() => redirect('/alterarHospital')}>
                                        <MdSettings className='icon' />
                                        Configurações
                                    </S.item>
                                </>
                            )
                        }
                        <S.item onClick={() => logout()}>
                            <FiLogOut className='icon' />
                            Sair
                        </S.item>
                        {/* TESTANDO O OVERFLOW DA S.lista ficou tão cute-cute :3 */}
                        {/* <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item> */}
                    </S.lista>
                </S.divLista>
            </S.menuContainer>
        </>
    );
}
