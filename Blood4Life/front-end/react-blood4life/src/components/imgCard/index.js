import React from 'react';
import styled from "styled-components";
import Restaturante from '../../assets/restaurante-fake.png';

const Card = styled.div`
    display:flex;
    justify-content: center;
    padding: 5px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${Restaturante});
    background-size: cover;
`;

const Title = styled.span`
    color: #ffffff;
    font-size: 14px;
    font-family: roboto, 'sans-serif';
`;

const ImagemCard = ({src ,title}) =>
    <Card img={src}>
    <Title>{title}</Title>
    </Card>




export default ImagemCard;