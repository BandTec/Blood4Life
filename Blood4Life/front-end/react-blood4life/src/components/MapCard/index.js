import React, { useEffect, useState } from 'react';
import * as S from './style';
import ReactStars from "react-rating-stars-component";
import Restaurante from '../../assets/restaurante-fake.png';
import { useHistory } from 'react-router-dom';

export default function MapCard(props) {

    const hist = useHistory();
    const [ hidePhoto, setHidePhoto ] = useState(true);

    function change() {
        setHidePhoto(!hidePhoto);
    }

    return(
        <>
            <S.container onClick={() => hist.push(`/dashboard/hospitais/${props.route}`)}>
                <S.cardInfo>
                    <S.title>{props.nome}</S.title>
                    <ReactStars count={10} isHalf value={Math.random() * 10} edit={false} color={"#000000"} activeColor="#EF5261"/>
                    <S.address>{props.endereco}, {props.numero}</S.address>
                </S.cardInfo>
                {
                    hidePhoto && <S.image cor={"#" + Math.floor(Math.random()*16777215).toString(16)}/>
                }
            </S.container>
        </>
    )
}