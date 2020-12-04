import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {

    return (
        <>
            <h1>(404) PÁGINA NÃO ENCONTRADA</h1>
            <Link to = "/">
                VOLTAR AO INÍCIO
            </Link>
        </>
    );

}