import styled from 'styled-components'

export const card = styled.div`
    height: 30vh;
    grid-column:2/3;
    align-self:center;
    /* background-color: ${props => props.backgroundC}; */
    background-color:#7DABFA;
    box-shadow: 4px 7px 6px rgba(0, 0, 0, 0.1225);
    border-radius:10px;
    display: flex;
    align-items: center;
    flex-direction: column;
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
