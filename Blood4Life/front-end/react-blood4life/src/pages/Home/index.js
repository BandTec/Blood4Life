import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import { FaArrowCircleUp } from 'react-icons/fa';

import logo from "../../assets/b4l-logo.png";
import logoHeart from "../../assets/logo-heart.png";
import homeImage from "../../assets/home-image.png";
import backgroundSectionLowExposure from "../../assets/background-hospital.png";
import armBandaid from "../../assets/bandaid-image.png";

// vetor - o que fazemos
import hospital from "../../assets/hospital-vector.png";
import graphic from "../../assets/graphic-vector.png";
import file from "../../assets/document-vector.png";

// vetor - contato
import location from "../../assets/map.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";

// vetor - redes sociais
import twitter from "../../assets/twitter-vector.png";
import instagram from "../../assets/instagram-vector.png";
import facebook from "../../assets/facebook-vector.png";
import linkedin from "../../assets/linkedin-vector.png";

export default function Home() {


  const [mostrarButtonTopo, setMostrarButtonTopo] = useState(false)

  const checkScrollTop = () => {
    if (!mostrarButtonTopo && window.pageYOffset > 400) {
      setMostrarButtonTopo(true)
    } else if (mostrarButtonTopo && window.pageYOffset <= 400) {
      setMostrarButtonTopo(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>

      <S.buttonScrollTop
        style={{
          display: mostrarButtonTopo ? 'flex' : 'none'
        }}
        onClick={() => scrollTop()}>
        <FaArrowCircleUp className="buttonScrollTop" />
      </S.buttonScrollTop>
      {/* NAVBAR */}
      <S.navbar>
        <S.divLogoSalsichao id="logoSalsichao">
          <S.imgLogo src={logo} />
        </S.divLogoSalsichao>

        <Link
          to={{
            pathname: "/login",
            loginProps: {
              admin: true,
            },
          }}
        >
          <S.buttonEntrarAdm>Acessar como <br/> Hospital</S.buttonEntrarAdm>
        </Link>

        <Link
          to={{
            pathname: "/login",
            loginProps: {
              admin: false,
            },
          }}
        >
          <S.buttonEntrar>Entrar</S.buttonEntrar>
        </Link>
      </S.navbar>

      {/* HEADER */}
      <S.header>
        <S.divNavbarSpacing />
        <S.divHeaderContainer>
          <S.divTextContainer>
            <S.pHome>“Doar sangue é um ato de amor e soliedariedade”</S.pHome>

            <Link
              to="/cadastro"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <S.buttonCadastrar>Cadastrar-se</S.buttonCadastrar>
            </Link>

          </S.divTextContainer>
          <S.divImageContainer>
            <S.imgHome src={homeImage} />
          </S.divImageContainer>
        </S.divHeaderContainer>
      </S.header>

      {/* BODY */}
      <S.body>
        <S.sectionLowExposureImage>
          <S.imgLowExposureImage src={backgroundSectionLowExposure} />
          <S.divLowExposureImageContainer>
            <S.titleLowExposureImage>
              <a target="_blank" rel="noopener noreferrer" href="https://www.minhavida.com.br/saude/materias/11475-uma-unica-doacao-de-sangue-pode-salvar-ate-quatro-vidas#:~:text=A%20biom%C3%A9dica%20Cinthya%20Duran%20explica,utilizados%20em%20diversas%20situa%C3%A7%C3%B5es%20cl%C3%ADnicas.">
                Quando você doa sangue, pode salvar a vida de várias famílias,
                inclusive a sua!
              </a>
            </S.titleLowExposureImage>
          </S.divLowExposureImageContainer>
        </S.sectionLowExposureImage>
        <S.sectionOQueFazemos>
          <S.divOQueFazemosContainer>
            <S.titleOQueFazemos>O que nós fazemos</S.titleOQueFazemos>
            <S.divItensOQueFazemosContainer>
              <S.divItemOQueFazemos>
                <S.divImgTitleOQueFazemos>
                  <S.imgOQueFazemos src={hospital} />
                  <S.titleItemOQueFazemos>Localizar</S.titleItemOQueFazemos>
                </S.divImgTitleOQueFazemos>
                <S.pItemOQueFazemos>
                  Encontre o hospital ou hemocentro mais perto da sua
                  residência.
                </S.pItemOQueFazemos>
              </S.divItemOQueFazemos>
              <S.divItemOQueFazemos>
                <S.divImgTitleOQueFazemos>
                  <S.imgOQueFazemos src={graphic} />
                  <S.titleItemOQueFazemos>Gráficos</S.titleItemOQueFazemos>
                </S.divImgTitleOQueFazemos>
                <S.pItemOQueFazemos>
                  Gráficos da situação do armazenamento de sangue nos bancos de
                  sangue dos hospitais.
                </S.pItemOQueFazemos>
              </S.divItemOQueFazemos>
              <S.divItemOQueFazemos>
                <S.divImgTitleOQueFazemos>
                  <S.imgOQueFazemos src={file} />
                  <S.titleItemOQueFazemos>Informativos</S.titleItemOQueFazemos>
                </S.divImgTitleOQueFazemos>
                <S.pItemOQueFazemos>
                  FAQ, questionários e dicas para saber como funciona a doação e
                  se você pode doar ou não.
                </S.pItemOQueFazemos>
              </S.divItemOQueFazemos>
            </S.divItensOQueFazemosContainer>
            <Link
              to="/cadastro"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                outlineStyle: "none",
              }}
            >
              <S.buttonOQueFazemos>
                Tornar-se doador
              </S.buttonOQueFazemos>
            </Link>
          </S.divOQueFazemosContainer>
        </S.sectionOQueFazemos>
        <S.sectionLorem>
          <S.divLoremText>
            <S.titleLorem>Doe Sangue</S.titleLorem>
            <S.subtitleLorem>Doe Vida</S.subtitleLorem>
            <S.pLorem>
               quantas gotas de sangue são necessárias para te manter
              vivo?
              <br />
              A mesma quantidade para salvar uma vida! Você não pode dar tudo o
              que tem para salvar alguém, mas pode ajudar a completar o que
              falta.
              <br />
              Seja a gota que faltava.
            </S.pLorem>
            <Link
              to="/cadastroHospital"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textDecoration: "none",
                outlineStyle: "none",
              }}
            >
              <S.buttonLorem>Cadastre seu Hospital</S.buttonLorem>
            </Link>
          </S.divLoremText>
          <S.divLoremImg>
            <S.imgLorem src={armBandaid} />
          </S.divLoremImg>
        </S.sectionLorem>

        {/* FOOTER  */}
        <S.footer>
          <S.divFooterContainer>
            <S.titleFooter > Faça parte você também!  </S.titleFooter>
            <S.divFooterBody>
              <S.divFooterContactContainer>
                <S.divFooterContact>
                  <S.imgFooterContact
                    src={phone}
                  />
                  <S.pFooterContact>+55 11 99999-9999</S.pFooterContact>
                </S.divFooterContact>
                <S.divFooterContact>
                  <S.imgFooterContact
                    src={mail}
                  />
                  <S.pFooterContact>blood4life@bandtec.com.br</S.pFooterContact>
                </S.divFooterContact>
                <S.divFooterContact>
                  <S.imgFooterContact
                    src={location}
                  />
                  <S.pFooterContact>
                    Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP,
                    01414-001
                  </S.pFooterContact>
                </S.divFooterContact>
              </S.divFooterContactContainer>
              <S.divFooterLogoContainer>
                <S.imgFooterLogo src={logoHeart} />
              </S.divFooterLogoContainer>
              <S.divFooterSocialMediaContainer>
                <S.titleSocialMedia>Redes Sociais</S.titleSocialMedia>
                <S.divImgSocialMediaContainer>
                  <S.imgSocialMedia
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/blooddonations/?logger_action_context_serialized=%7B%22source%22%3A%22unknown%22%7D"
                      )
                    }
                    src={facebook}
                  />

                  <S.imgSocialMedia
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/sejaumdoador/?hl=pt"
                      )
                    }
                    src={instagram}
                  />
                  <S.imgSocialMedia
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/funda-o-pr--sangue"
                      )
                    }
                    src={linkedin}
                  />
                  <S.imgSocialMedia
                    onClick={() =>
                      window.open("https://twitter.com/pro_sangue")
                    }
                    src={twitter}
                  />
                </S.divImgSocialMediaContainer>
              </S.divFooterSocialMediaContainer>
            </S.divFooterBody>
            <S.pFooterCopyright>
              © 2020 Blood4Life. Todos os direitos reservados.
            </S.pFooterCopyright>
          </S.divFooterContainer>
        </S.footer>
      </S.body>
    </>
  );
}
