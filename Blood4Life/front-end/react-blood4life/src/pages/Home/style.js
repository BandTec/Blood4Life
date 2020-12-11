import styled from "styled-components";

export const buttonScrollTop = styled.button`
  box-sizing: border-box;
  height: 10vh;
  width: 10vh;
  position: fixed;
  bottom: 5vh;
  right: 5vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: #5580cb;
  border: 0.1px solid white;
  border-radius: 100vw;
  outline: none;

  animation: fadeIn 0.5s;
  transition: opacity 0.4s;
  opacity: 0.5;
  cursor: pointer;

  .buttonScrollTop {
    color: white;
    height: 100%;
    width: 100%;
  }

  &&:hover {
    height: 11vh;
    opacity: 1;
    transition: 1s;

    .buttonScrollTop {
      margin-bottom: 1vh;
      height: auto;
      color: white;
      transition: 1s;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

// * NAVBAR
export const navbar = styled.nav`
  background-image: linear-gradient(0deg, #f7faff, #ffffff);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const divLogoSalsichao = styled.div`
  width: 30vw;
  height: 13vh;
  border-bottom-right-radius: 100vh;
  border-top-right-radius: 100vh;
  background-color: #7dabfa;
  display: flex;
  align-items: center;
  justify-content: center;
  /* &:hover {
        background-color: #5580CB;
    } */
`;

export const imgLogo = styled.img`
  max-width: 60%;
  max-height: 100%;
`;

export const buttonEntrarAdm = styled.button`
  font-size: 1.7em;
  color: #7dabfa;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 25vw;
  outline:none;

  &:hover {
    color: #5580cb;
    text-decoration: underline;
  }
`;

export const buttonEntrar = styled.button`
  padding: 1.5vh 4vw;
  font-size: 1.7em;
  color: #7dabfa;
  background-color: white;
  border: 0.3vw solid #7dabfa;
  border-radius: 100vh;
  cursor: pointer;
  margin-right: 3vh;
  outline:none;

  &:hover {
    background-color: #5580cb;
    color: white;
  }
`;
// * FIM NAVBAR

// * HEADER
export const header = styled.header`
  background-image: linear-gradient(180deg, #c9dbfb00, #c9dbfbff);
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const divNavbarSpacing = styled.div`
  background-color: #f1f100;
  width: 100%;
  height: 15vh;
`;

export const divHeaderContainer = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const divTextContainer = styled.div`
  width: 50%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const divImageContainer = styled.div`
  width: 50%;
  padding: 0 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const imgHome = styled.img`
  max-width: 100%;
`;

export const pHome = styled.p`
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 3em;
  padding: 0;
  color: #7dabfa;
`;

export const buttonCadastrar = styled.button`
  margin-right: 1%;
  padding: 2vh 5vw;
  font-size: 2em;
  color: white;
  background-color: #7dabfa;
  border: 0.3vw solid #7dabfa;
  border-radius: 100vh;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #5580cb;
  }
`;
// * FIM HEADER

// * BODY
export const body = styled.div`
  background-color: #eeee88;
`;

// -- sessão "Saiba mais" - background com imagem escura
export const sectionLowExposureImage = styled.section`
  background-color: white;
  height: 100vh;
  width: 100%;
`;

export const imgLowExposureImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 100vh;
  z-index: 1;
  left: inherit;
`;

export const divLowExposureImageContainer = styled.div`
  padding: 1% 5%;
  height: 100vh;
  position: absolute;
  top: 100vh;
  left: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const titleLowExposureImage = styled.p`
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 3em;
  color: white;
  a {
    max-width: 10%;
    line-height: 1.5;
    font-size: 1em;
    color: white;
    text-decoration: none;
  }
`;

export const buttonLowExposureImage = styled.button`
  margin-right: 1%;
  padding: 2vh 5vw;
  font-size: 2em;
  color: white;
  background-color: #7dabfa;
  border: 0.3vw solid #7dabfa;
  border-radius: 100vh;
  cursor: pointer;

  &:hover {
    background-color: #5580cb;
  }
`;

// -- FIM sessão "Saiba mais" - background com imagem escura

// -- sessão "O que fazemos"
export const sectionOQueFazemos = styled.section`
  background-color: white;
  height: 100vh;
  width: 100%;
`;

export const divOQueFazemosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background-color: lightcyan; */
`;

export const titleOQueFazemos = styled.p`
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 3em;
  color: #7dabfa;
`;

export const divItensOQueFazemosContainer = styled.div`
  padding: 1% 5%;
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const divItemOQueFazemos = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const divImgTitleOQueFazemos = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const imgOQueFazemos = styled.img`
  max-width: 55%;
`;

export const titleItemOQueFazemos = styled.p`
  max-width: 100%;
  font-weight: 450;
  word-wrap: break-word;
  line-height: 1;
  font-size: 2em;
  color: #3d547a;
`;

export const pItemOQueFazemos = styled.p`
  max-width: 100%;
  font-weight: 300;
  word-wrap: break-word;
  line-height: 1;
  font-size: 1.2em;
  color: #3d547a;
`;

export const buttonOQueFazemos = styled.button`
  margin-right: 1%;
  padding: 2vh 5vw;
  font-size: 2em;
  color: white;
  background-color: #7dabfa;
  border: 0.3vw solid #7dabfa;
  border-radius: 100vh;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #5580cb;
  }
`;
// -- FIM sessão "O que fazemos"

// sessão "Lorem Ipsum (CAMISETA VERMELHA - O QUE COLOCAREMOS AQUI?)"
export const sectionLorem = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: white;
`;

export const divLoremText = styled.div`
  background-image: linear-gradient(180deg, #c9dbfb00, #c9dbfbff);
  width: 50%;
  height: 100%;
  padding: 1% 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const divLoremImg = styled.div`
  width: 50%;
  height: 100%;
`;

export const imgLorem = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const titleLorem = styled.p`
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 3em;
  color: #7dabfa;
`;

export const subtitleLorem = styled.p`
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 2.0em;
  color: #3d547a;
`;

export const pLorem = styled.p`
  max-width: 100%;
  font-weight: 300;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 1.2em;
  color: #3d547a;
`;

export const buttonLorem = styled.button`
  margin-right: 1%;
  padding: 2vh 5vw;
  font-size: 2em;
  color: white;
  background-color: #7dabfa;
  border: 0.3vw solid #7dabfa;
  border-radius: 100vh;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #5580cb;
  }
`;
// FIM sessão "Lorem Ipsum (CAMISETA VERMELHA - O QUE COLOCAREMOS AQUI?)"
// * FIM BODY

// * FOOTER
export const footer = styled.footer`
  background-color: #7dabfa;
  height: 70vh;
  width: 100%;
`;

export const divFooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const titleFooter = styled.p`
  max-width: 100%;
  font-weight: 600;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 3em;
  color: white;

  a {
    color: #ffff;
    scroll-behavior: smooth;
    text-decoration: none;
    overflow-y: scroll;
  }
`;

export const divFooterBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const divFooterContactContainer = styled.div`
  width: 33.3%;
  padding: 0 0 0 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const divFooterContact = styled.div`
  width: 100%;
  height: 33.3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const imgFooterContact = styled.img`
  max-width: 15%;
  cursor: pointer;
`;

export const pFooterContact = styled.p`
  max-width: 100%;
  margin-left: 5%;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 1em;
  color: white;
`;

export const divFooterLogoContainer = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const imgFooterLogo = styled.img`
  max-width: 100%;
`;

export const divFooterSocialMediaContainer = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const titleSocialMedia = styled.p`
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 2em;
  color: white;
`;

export const divImgSocialMediaContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const imgSocialMedia = styled.img`
  max-width: 100%;
  cursor: pointer;
`;

export const pFooterCopyright = styled.p`
  max-width: 100%;
  font-weight: 450;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 1em;
  color: white;
`;
// * FIM FOOTER
