import styled from 'styled-components'

export const card = styled.div`
    max-height: 35vh;
    width: 70%;
    background-color:#7DABFA;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    border-radius:10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    word-wrap: break-word;
    cursor: pointer;
    margin: 5% 0;
    
    &&:hover{
        box-shadow: 4px 6px 8px rgba(0,0,0,0.3);
        filter: brightness(90%);
        color: #5580CB;
    }
    @media (max-width: 700px) { 
        height: auto;
        max-height: auto;
        width: 70%;
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
