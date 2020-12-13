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
    height: 60%;
    width: 30%;
    background-color: ${props => props.backgroundC};
    box-shadow: 4px 7px 6px rgba(0, 0, 0, 0.1225);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const upperCardTitle = styled.text`
    text-align: center;
    font-weight: bold;
    font-size: 1.8vw;
    color:white;
    word-wrap: break-word;
    text-shadow:2px 2px 2px grey;
`;

export const upperCardValue = styled.text`
    text-align: center;
    font-weight: 900;
    font-size: 1.8vw;
    color:white;
    text-shadow:2px 2px 2px grey;
`;

export const lowerSection = styled.div`
    height: 60%;    
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
