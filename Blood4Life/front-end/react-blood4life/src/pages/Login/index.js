import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
import loginImg from '../../assets/login.svg';
import hospital from '../../assets/hospital.png';

export default function Login() {

    return (
        <>
            <h1>ESSA É A TELA DE LOGIN</h1>
            <Link to="/">
                HOME
                <img src="" />
            </Link>
            <br />
            <Link to="/cadastro">
                CADASTRAR
                <img src="" />  
            </Link>
            

            <S.containerBase>
                <S.header>Login</S.header>
                <S.content>
                    <S.imagemFundo>
                        <img src={hospital} />
                    </S.imagemFundo>
                    <S.formulario>
                        <S.grupoFormulario>
                            <label htmlFor="username">Username</label>
                            <input id="txtUsername" type="text" name="username" placeholder="username" />
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