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
export const cardContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 700px) { 
        overflow: auto;
    }
`;
export const card = styled.div`
    height: 30%;
    width: 21%;
    background-color: ${props => props.backgroundC};
    box-shadow: 4px 7px 6px rgba(0, 0, 0, 0.1225);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    &&:hover{
        filter: brightness(80%);
    }

    @media (max-width: 700px) { 
        height: 30%;
        width: 40%;
        margin: 2% auto;
    }
`;
export const cardTitle = styled.text`
    max-width: 100%;
    word-wrap: break-word;
    text-align: center;
    font-weight: bold;
    font-size: 1.7em;
`;
export const cardValue = styled.text`
    max-width: 100%;
    word-wrap: break-word;
    text-align: center;
    font-weight: 900;
    font-size: 2.5em;
`;
export const cardDescription = styled.text`
max-width: 100%;
    word-wrap: break-word;
    text-align: center;
    font-weight: 600;
    font-size: 1.4em;    
`;
