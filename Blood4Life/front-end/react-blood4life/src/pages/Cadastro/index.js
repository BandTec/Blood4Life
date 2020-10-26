import React from 'react';
import { Link } from 'react-router-dom';

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
        </>
    );
}