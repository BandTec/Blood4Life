import React from 'react';
import * as S from './style';
import ReactStars from "react-rating-stars-component";
import Restaurante from '../../assets/restaurante-fake.png';

export default function HospitaisCard() {
    return(
        <>
            <S.Hospitais>
                <S.HospitasInfo>
                    <S.Title>Nome do Hospital</S.Title>
                    <ReactStars count={5} isHalf value={4} edit={false}  activeColor="#e7711c"/>
                    <S.Address>Rua Rio de Janeiro, 120</S.Address>
                </S.HospitasInfo>
                <S.HospitaisPhoto src={Restaurante} alt="Foto do Restaurante"/>
            </S.Hospitais>
        </>
    )
}