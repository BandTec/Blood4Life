import styled from 'styled-components';

export const menuContainer = styled.div`
    width: 25vw;
    height: 100vh;
    /* background-color: #bbddff; */
`;

export const divLogo = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #fffbbb; */
`;

export const logo = styled.div`
    width: 90%;
    height: 80%;
    /* background-color: lightgreen; */
`;

export const divLista = styled.div`
    background-color: #ffbdbd;
    padding: 5% 0;
    height: 80%;
`;

export const lista = styled.ul`
    /* background-color: lightsalmon; */
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
    margin: 0 0 1% 0;
    width: 100%;
    padding: 3%;
    text-decoration: underline;
    
    color: ${props => props.selected ? "#3CADE7" : "#FFFFFF"};
    background-color: #2D657C;
    cursor: pointer;

    &&:hover {
        background-color: #5580CB;
    }

`;