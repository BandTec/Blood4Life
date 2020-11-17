import styled from 'styled-components';

export const container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
`;

export const divesquerda = styled.div`
    width:50%;
    height:100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;

`;

export const divestrutura = styled.div`
    width:100%;
    height:80%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const divdireita = styled.div`
    width:50%;
    height:100%;
    background-color:#7DABFA;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const imglogin = styled.img`
    max-width:100%;
`;

export const divLogo = styled.div`
    height:15%;
    width: 68%;
    background-color: #7DABFA;
    display: flex;
    border-radius:100vw;
    justify-content: center;
    align-items:center;
    min-width:100px;
    margin-top:5%;

`;

export const imgLogo = styled.img`
    max-width: 100%;
`;

export const divInputs = styled.div`
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;

    `;

export const divEmail = styled.div`
    width: 100%;
    height: 30%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    
`;

export const inputEmail = styled.input`
    width:80%;
    height:40%;
    display:flex;
    border-radius:100vw;
    border-color:  #7DABFA;
    padding: 5%;
    outline: none;  

`;

export const imgEmailUser = styled.img`
    max-width: 100%;
`;


export const divSenha = styled.div`
    width: 100%;
    height: 30%;
    display:flex;
    justify-content: space-around;
    align-items: center;
`;

export const inputSenha = styled.input`
    width:80%;
    height:40%;
    display:flex;
    border-radius:100vw;
    border-color:  #7DABFA;
    padding: 5%;
    box-sizing: border-box;
    outline: none;  
`;

export const imgSenhaUser = styled.img`
    max-width: 100%;
`;

export const divResto = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    `;

export const divLembrar = styled.div`
    width: 32%;
    height: 70%;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
    margin-left:15%;

`;

export const lblLembrar = styled.label`
    color:black;
    font-style:normal;
    font-size: 1.1em;
    display: flex;
    cursor:pointer;
`;

export const checkLembrar = styled.input`
    cursor:pointer;
`;

export const divEsqueceu = styled.div`
    width: 40%;
    height: 70%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

export const lblEsqueceu = styled.label`
    color:black;
    font-style:normal;
    font-size: 1.1em;
    display: flex;
    cursor:pointer;


`;

export const divBotao = styled.div`
    width: 70%;
    height: 28%;
    display: flex;
    justify-content:space-around;
    align-items:center;
    `;

export const btnLogar = styled.button`
    width:30%;
    height: 40%;
    background-color: #7DABFA;
    border-radius: 100vw;
    display: flex;
    justify-content:center;
    align-items:center;
    border:none;
    min-width:50px;
    cursor:pointer;
    outline: none; 

`;

export const lblbotao = styled.label`
    color:rgba(255, 243, 243, 1);
    font-style:normal;
    font-size: 1.4em;
    display: flex;
    cursor:pointer;

`;
