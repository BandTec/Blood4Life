import styled from 'styled-components';

export const Hospitais = styled.div`
    display:flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #ffffff;
    border-left: 3px solid transparent;
    :hover {
        background-color:#00000014;
        border-left-color: #E75D52;
    }
`;

export const HospitasInfo = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-family: Roboto , 'sans-serif';
    color: #000000b3;
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
`;


export const Address = styled.span`
    font-family: Roboto , 'sans-serif';
    color: #000000b3;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const HospitaisPhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;
`;