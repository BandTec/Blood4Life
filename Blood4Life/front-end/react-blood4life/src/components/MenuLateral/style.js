import styled from 'styled-components';

export const menuContainer = styled.div`
    width: 25vw;
    height: 90vh;
    border-right: 0.3px solid #7DABFA;
`;

export const divLogo = styled.div`
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const logo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const divSalsichao = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    border-bottom-right-radius: 100vh;
    border-top-right-radius: 100vh;
    justify-content: center;
    align-items: center;
    padding-left: 5%;
    background-color: ${props => props.bgc};
`;
export const imgLogo = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
export const divLista = styled.div`
    background-color: '#FBFB00';
    padding: 0 0 5% 0;
    height: 85%;
`;
export const lista = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    overflow: auto;
`;
export const item = styled.li`
    color: ${props => props.selected ? "#3CADE7" : "#FFFFFF"};
    margin: 0 0 0.5vh 0;
    width: 100%;
    padding: 5%;    
    background-color: #2D657C;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #7DABFA;
    border-top: 1px inside solid black;
    border-bottom: 1px inside solid black;
    word-wrap: break-word;
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 1%;
    .icon {
        color: #FFFFFF;
        margin-right: 5%;
        width:10%;
    }
    &&:hover {
        background-color: #EF5261;
    }

`;