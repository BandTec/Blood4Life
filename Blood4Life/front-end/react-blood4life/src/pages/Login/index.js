import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <h1>ESSA É A TELA DE LOGIN</h1>
            <Link to="/">
                HOME
                <img src="" />
            </Link>
            <br/>
            <Link to="/cadastro">
                CADASTRAR-SE
                <img src="" />
            </Link>
        </>
    );
}