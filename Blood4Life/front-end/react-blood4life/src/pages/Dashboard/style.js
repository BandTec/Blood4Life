import styled from 'styled-components';

export const divContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
export const divNome = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const titleNome = styled.h1`
    word-wrap: break-word;
    color: #7DABFA;
`;
export const upperSection = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
`;
export const rightLowerUp = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const rightLowerBottom = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const upperCard = styled.div`
    height: 70%;
    width: 30%;
    background-color: ${props => props.backgroundC};
    box-shadow: 4px 7px 6px rgba(0, 0, 0, 0.1225);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
export const upperCardTitle = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 1.8vw;
    color:white;
    word-wrap: break-word;
    text-shadow:2px 2px 2px grey;
`;
export const upperCardValue = styled.p`
    text-align: center;
    font-weight: 900;
    font-size: 1.8vw;
    color:white;
    text-shadow:2px 2px 2px grey;
`;

export const lowerSection = styled.div`
    height: 80%;    
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const leftLowerCard = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const rightLowerCard = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

`;
