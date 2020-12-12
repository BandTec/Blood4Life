import styled from 'styled-components';

export const navContainer = styled.nav`
    /* background-image: linear-gradient(
        0deg,
        #FF00BB,
        #FFF000
    ); */
    background-color: #7DABFA;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;    
    justify-content: space-between; 
`;

export const divTeste = styled.div`
    height: 5vh;
    width: 100%;
    background-color: red;
`;

export const menuHamburguer = styled.div`
    background-color: #7DABFA;
    height: 100%;
    width: 5%;
    display: flex;
    justify-content: center; 
    align-items: center;
    cursor: pointer;

    .icon {
        color: #FFFFFF;
        height: 100%;
        max-width: 100;
        min-width: 80%;
    } 

    &&:hover{
        background-color: #DDDDFF;
      
        .icon{
            color: #7DABFA;
        } 
    }
`;

export const divInput = styled.div`
    height: 80%;
    /* background-color: #7DABFA; */
    width: 40%;
    display: flex;

    justify-content: center; 
    align-items: center;

`;
export const input = styled.input`
    width: 85%;
    height: 100%;
    border: none;
    background-color: #F0F6F6;
    font-size: 1.2em;
    color: #7DABFA;
    padding: 0 3%;
    border-bottom-left-radius: 100vh; 
    border-top-left-radius: 100vh;
    outline: none;
    
    ::placeholder{
        color: #D0D6D6;
    }
`;
export const divSearchIcon = styled.div`
    width: 15%;
    height: 100%;
    background-color: #F0F6F6;
    display: flex;
    justify-content: center; 
    align-items: center;
    border-bottom-right-radius: 100vh;
    border-top-right-radius: 100vh;
    cursor: pointer;

    .icon {
        height: 80%;
        color: #D0D6D6;
        max-width: 100%;
        min-width: 80%;
    } 

    && .icon:hover {
        color: #7DABFA;
        /* color: #5580CB; */
    }
`;
// export const divSearch = styled.div`
//     height: 100%;
//     width: 20%;
// `;
// export const buttonSearch = styled.button`
//     height: 100%;
//     width: 100%;
//     cursor: pointer;
// `;

export const divPerfil = styled.div`
    height: 80%;
    /* background-color: lavender; */
    width: 20%;
    display: flex;
    flex-direction: row;
`;

export const divPersonaIcon = styled.div`
    width: 40%; 
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const personaIcon = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border: 4px solid #5580CB; // bordinha vermeia
    border-radius: 100vh;
    cursor: pointer;
    text-align: center;
    font-family: 'Roboto';

    &&:hover{
        background-color: #DDDDFF;
    }
    
    p {
        margin-top: 25%;
    }
`;
export const divPersonaInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const divPersonaName = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const personaName = styled.span`
    max-width: 100%;
    color: #FFFFFF;
    font-weight: 500;
    margin-left: 1vw;
`;

export const dropdownProfile = styled.div`
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    right: 1%;
    bottom: -65%;

    div {
        padding: 12px 16px;
        cursor: pointer;
        display: flex;
        /* align-self: center;
        justify-self: center; */
        justify-content: flex-end;
    }

    .logoutIcon {
        margin-right: 5%;
    }

    &:hover {
        
        .logoutIcon {
            margin-right: 5%;
            color: black;
        }

        color: #5580cb;
        text-decoration: underline;
  }
`;