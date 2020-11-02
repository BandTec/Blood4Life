import styled from 'styled-components';
/*
export const nome = tipo;
*/

export const containerBase = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    /* border: 1px solid red; */
    
`;


export const teste = styled.div`
    width:50%;
    flex-direction:column;
    border:solid 1px red;
`;

export const header = styled.div`
    font-size:30px;
    font-family:"Open Sans", sans-serif;
`;

export const content = styled.div`
    display:flex;
    flex-direction:column;
`;

export const formulario = styled.form`
    display:flex;
    flex-direction:column;
    /* align-self:fit-content; 
    align-itens:center*/
    /* margin-left: auto;
    margin-right: auto;  */
    align-items:center;
    font-size:25px;
    label{
        font-size: 30px;
    }
    input {
        margin-top:12px;
        min-width:20em;
        height:35px;
        padding: 0px 10px;
        font-size:16px;
        font-family: "Open Sans", sans-serif;
        border:0;
        background-color: #f3f3f3;
        border-radius:4px;
        margin-bottom:30px;
        transition: all 250ms ease-in-out;
    } 
    &:focus {
            outline: none;
            box-shadow: gray;
          }
    
`;

export const imagemFundo = styled.div`
    
    img{
        width:70%;
        margin-left:100px;
    }
`;

export const grupoFormulario = styled.div`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        width:fit-content; 
`;


export const footer = styled.button`
    margin-top: 1em;
`;


export const botaoLogar = styled.button`
  font-size: 21px;
  padding: 5px 20px;
  border: 0px;
  background-color: #3498db;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
`;
