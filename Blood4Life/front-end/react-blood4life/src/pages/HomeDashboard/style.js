import styled from 'styled-components';

export const divContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 90vh;
    display: flex;
    align-items: center;
`;

export const cardContainer = styled.div`
    max-height: 90vh;
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const cardScroll = styled.div`
    height: 100%;
    max-height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    ::-webkit-scrollbar{
        display:none;
    }
`;
export const textContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    overflow: auto;
`;
export const containerVideo = styled.div`
    height: 100%;
    max-height: 90vh;
    width: 100%;
    padding: 5% 0;
    display:flex;
    /* align-items:center; */
    flex-direction:column;
`;
export const textTitle = styled.p`
    font-family:'Roboto Condensed', sans-serif;
    font-weight:100;
    font-size:8vh;
    /* padding-top:1%; */
    padding-bottom:2.5%;
    color:#3D547A;

`;
export const textSubTitle = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight:normal;
    font-size:3vh;
    padding-top:2.5%;
    padding-right:20%;
    padding-left:0.7%;
    padding-bottom:2.5%;
    color:#3D547A;

`;

export const video = styled.iframe`
    border: none;
    height:40vh;
    width:35vw;
`;

export const a = styled.a`
    font-size:80%; 
    padding-left:0.7%;
    color:#3D547A;
`;