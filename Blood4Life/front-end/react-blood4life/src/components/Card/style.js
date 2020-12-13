import styled from 'styled-components'

export const card = styled.div`
    height: 30vh;
    grid-column:2/3;
    /* align-self:center;   */
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
export const cardIcon = styled.img`
    height: 40%;
`;
export const cardTitle = styled.text`
    max-width: 100%;
    text-align: center;
    font-size: 200%;
    color:white;
    text-shadow:2px 2px 2px #6388C8;

`;
export const cardDescription = styled.text`
    text-align: center;
    font-size: 100%;    
    color:white;
    text-shadow:2px 2px 2px #6388C8;
`;
