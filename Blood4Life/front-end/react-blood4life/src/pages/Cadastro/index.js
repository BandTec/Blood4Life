import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
import cadastro from '../../assets/cadastro.svg';

export default function Cadastro() {
    return (
        <>
            <h1>ESSA É A TELA DE CADASTRO</h1>
            <Link to="/">
                HOME
                <img src="" />
            </Link>
            <br/>
            <Link to="/login">
                LOGIN
                <img src="" />
            </Link>

            <S.containerBase>
                <S.header>Cadastro</S.header>
                <S.content>
                    <S.imagemFundo>
                        <img src={cadastro} />
                    </S.imagemFundo>
                    <S.formulario>
                        <S.grupoFormulario>
                            <label htmlFor="username">Username</label>
                            <input id="txtUsername" type="text" name="username" placeholder="username" />
                        </S.grupoFormulario>
                        <S.grupoFormulario>
                            <label htmlFor="email">Email</label>
                            <input id="txtEmail" type="email" name="email" placeholder="email" />
                        </S.grupoFormulario>
                        <S.grupoFormulario>
                            <label htmlFor="password">Password</label>
                            <input id="txtSenha" type="password" name="password" placeholder="password" />
                        </S.grupoFormulario>
                    </S.formulario>
                </S.content>
                <S.footer>
                    <S.botaoLogar >
                        Login
                     </S.botaoLogar>
                </S.footer>
            </S.containerBase>

        </>
    );
}