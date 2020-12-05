import styled from 'styled-components';

export const divSalsichao = styled.div`
    display: flex;
    height: 10vh;
    width: 25vw;
    align-items: center;
    justify-content: center;
    background-color: #7DABFA;
    border-radius: 0px 50px 50px 0px;
    margin-top: 30px;

    img {
        margin-right: 15px;
        width: 20vw;
    }
`;

export const conteudo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const containerImagem = styled.div`
    img {
        width: 50vw;
        height: 50vh;
    }
`;

export const containerForm = styled.form`
    background-color: #7DABFA;
    width: 80vw;
    height: 162vh;
    border-radius: 30px;
    margin-top: 50px;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #FFF;
        margin-top: 4%;
        margin-left: 6%;
        align-self: flex-start;
    }

    label {
        color: #FFF;
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 15px;
        font-weight: 500;
    }

    input {
        width: 100%;
        height: 5vh;
        border-style: none;
        border-radius: 50px;
        padding-left: 4%;
        outline: 0;
        font-family: 'Roboto';
        ::placeholder {
            color: rgba(0, 0, 0, 0.5);
        }
        ::-webkit-calendar-picker-indicator {
            margin-right: 3%;
        }
    }

    select {
        width: 100%;
        height: 5vh;
        align-self: center;
        border-style: none;
        border-radius: 50px;
        background: #FFF;
        padding-left: 4%;
        outline: 0;
        font-family: 'Roboto';

        ::placeholder {
            font-weight: bold;
            margin-top: 5px;
            font-size: 19px;
            letter-spacing: 0.15em;
            color: rgba(0, 0, 0, 0.5);
        }
    }
`;

export const divDaDiv = styled.div`
    width: 80%;
    height: 70vh;
    /* background-color: red; */
`;

export const divLinha = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const divColuna = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    
    /* background-color: green; */
`;

export const signUpButton = styled.div`
    margin-top: 3%;
    margin-bottom: 3%;
    button {
        cursor: pointer;
        width: 17vw;
        padding: 5%;
        font-size: 32px;
        color: #FFF;
        background-color: #E75D52;
        border-radius: 100px;
        border-style: none;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.12);
        outline: 0;
    }
`;

export const dicaInput = styled.p`
    font-family: 'Roboto';
    color: white;
`;