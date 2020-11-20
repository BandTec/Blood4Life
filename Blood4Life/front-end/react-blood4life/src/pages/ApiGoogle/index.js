import React from 'react';
import * as S from './style';
import logoVermelho from '../../assets/img-logo-vermelho.svg';
import TextField from '@material/react-text-field';


export default function apiGoogle() {
    return(
        <>
        <S.divWrapper>
            <S.divContainer>
                <S.divSearch>
                    <img src={logoVermelho} alt="Logo vermelha do projeto blood4life"/>
                    <TextField
                        label="Pesquisar Hospitais"
                        outlined
                        // trailingIcon={<MaterialIcon role="button" icon="search" />}
                    />
                </S.divSearch>
            </S.divContainer>
        </S.divWrapper>
        </>
    )
}