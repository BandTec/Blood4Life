import styled from 'styled-components';


export const container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;

export const bodyContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
export const cardAll = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const cardContainer = styled.div`
    height: 100%;
    width: 50%;
    display: grid;
    grid-template-rows:20% 20% 20% 20% 30%;
    align-items: center;
    @media (max-width: 700px) { 
        overflow: auto;
    }
`;
export const cardScroll = styled.div`
    height: 80%;
    width: 100%;
    grid-row: 1/7;
    display:grid;
    grid-template-columns:20% 60% 20%;
    grid-row-gap:10%;
    flex-direction: column;
    overflow:scroll;
    overflow-x:hidden;

    ::-webkit-scrollbar{
        display:none;
    }
`;
export const textContainer = styled.div`
    height: 100%;
    width: 50%;
    display: grid;
    grid-template-rows:20% 20% 20% 20% 30%;
    align-items: center;
    /* background-color:yellow; */
    @media (max-width: 1000px) { 
        overflow: auto;
    }
`;
export const containerVideo = styled.div`
    height: 80%;
    width: 100%;
    grid-row: 1/7;
    display:flex;
    /* align-items:center; */
    flex-direction:column;
`;
export const textTitle = styled.text`
    font-family:'Roboto Condensed', sans-serif;
    font-weight:100;
    font-size:8vh;
    /* padding-top:1%; */
    padding-bottom:2.5%;
    color:#3D547A;

`;
export const textSubTitle = styled.text`
    font-family: 'Raleway', sans-serif;
    font-weight:normal;
    font-size:2.5vh;
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
    padding-left:0.7%;
`;

export const a = styled.a`
    font-size:80%; 
    padding-left:0.7%;
    color:#3D547A;
`;