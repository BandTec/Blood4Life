import styled from 'styled-components';

export const navContainer = styled.nav`
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
    .selected {
        background-color: #DDDDFF;
        .icon{
            color: #7DABFA;
        } 
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
    }
`;
export const divPerfil = styled.div`
    height: 80%;
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
    border: 4px solid #5580CB; 
    border-radius: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &&:hover{
        background-color: #DDDDFF;
    }
`;
export const divPersonaInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const divPersonaName = styled.div`
    width: 100%;
    display: flex;
`;
export const personaName = styled.span`
    max-width: 100%;
    color: #FFFFFF;
    font-weight: 500;
`;

export const dropdownProfile = styled.div`
    position: absolute;
    right: 0;
    top: 10vh;
    width: 10vw;
    min-width: 100px;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    z-index: 1;

    &:hover {
        color: #5580cb;
        text-decoration: underline;
  }
`;

export const divLogout = styled.div`
    padding: 10% 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
    color: #5580cb;

    .logoutIcon{
        max-width: 50vw;
    }

    &:hover {
        color: #EF5261;
        background-color: #F1F1F1;
        text-decoration: underline;
  }
`;

export const leave = styled.p`
    font-weight: 600;
    font-size: 1.2em;
`;