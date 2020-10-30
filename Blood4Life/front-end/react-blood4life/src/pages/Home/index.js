import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import logo from '../../assets/b4l-logo.png';
import logoHeart from '../../assets/logo-heart.png'
import homeImage from '../../assets/home-image.png';
import backgroundSectionLowExposure from '../../assets/background-hospital.png';
import armBandaid from '../../assets/bandaid-image.png'

// vetor - o que fazemos 
import hospital from '../../assets/hospital-vector.png';
import graphic from '../../assets/graphic-vector.png';
import file from '../../assets/document-vector.png';

// vetor - contato
import location from '../../assets/map.png';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png';

// vetor - redes sociais
import twitter from '../../assets/twitter-vector.png';
import instagram from '../../assets/instagram-vector.png';
import facebook from '../../assets/facebook-vector.png';
import linkedin from '../../assets/linkedin-vector.png';

export default function Home() {
    
    return (
        <>
            {/* NAVBAR */}
            <S.navbar>
                <S.divLogoSalsichao>
                    <Link style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} to="/cadastro">
                        <S.imgLogo src={logo}/>
                    </Link>
                </S.divLogoSalsichao>
                {/* <Link to="/login"> */}
                    <S.buttonEntrar onClick={() => {window.alert('VOCÊ CLICOU EM ENTRAR!')}}>
                        Entrar
                    </S.buttonEntrar>
                {/* </Link> */}
            </S.navbar>

            {/* HEADER */}
            <S.header>
                <S.divNavbarSpacing/>
                <S.divHeaderContainer>
                    <S.divTextContainer>
                        <S.pHome>“Doar sangue é um ato de amor e soliedariedade”</S.pHome>
                        {/* <Link to="/cadastro"> */}
                            <S.buttonCadastrar onClick={() => {window.alert('VOCÊ CLICOU EM CADASTRAR!')}}>
                                Cadastrar-se
                            </S.buttonCadastrar>
                        {/* </Link> */}
                    </S.divTextContainer>
                    <S.divImageContainer>
                        <S.imgHome src={homeImage}/>
                    </S.divImageContainer>
                </S.divHeaderContainer>
            </S.header>

            {/* BODY */}
            <S.body>
                <S.sectionLowExposureImage>
                    <S.imgLowExposureImage src={backgroundSectionLowExposure}/>
                    <S.divLowExposureImageContainer>
                        <S.titleLowExposureImage>
                            Quando você doa sangue, pode salvar a vida de várias famílias, inclusive a sua!
                        </S.titleLowExposureImage>
                        <S.buttonLowExposureImage onClick={() => {window.alert('VOCÊ CLICOU EM SAIBA MAIS!')}}>
                            Saiba mais
                        </S.buttonLowExposureImage>
                    </S.divLowExposureImageContainer>
                </S.sectionLowExposureImage>
                <S.sectionOQueFazemos>
                    <S.divOQueFazemosContainer>
                        <S.titleOQueFazemos>
                            O que nós fazemos
                        </S.titleOQueFazemos>
                        <S.divItensOQueFazemosContainer>
                            <S.divItemOQueFazemos>
                                <S.divImgTitleOQueFazemos>
                                    <S.imgOQueFazemos src={hospital}/>
                                    <S.titleItemOQueFazemos>
                                        Localizar
                                    </S.titleItemOQueFazemos>
                                </S.divImgTitleOQueFazemos>
                                <S.pItemOQueFazemos>
                                    Encontre o hospital ou hemocentro mais perto da sua residência.
                                </S.pItemOQueFazemos>
                            </S.divItemOQueFazemos>
                            <S.divItemOQueFazemos>
                                <S.divImgTitleOQueFazemos>
                                    <S.imgOQueFazemos src={graphic}/>
                                    <S.titleItemOQueFazemos>
                                        Gráficos
                                    </S.titleItemOQueFazemos>
                                </S.divImgTitleOQueFazemos>
                                <S.pItemOQueFazemos>
                                    Gráficos da situação do armazenamento de sangue nos bancos de sangue dos hospitais.
                                </S.pItemOQueFazemos>
                            </S.divItemOQueFazemos>
                            <S.divItemOQueFazemos>
                                <S.divImgTitleOQueFazemos>
                                    <S.imgOQueFazemos src={file}/>
                                    <S.titleItemOQueFazemos>
                                        Informativos
                                    </S.titleItemOQueFazemos>
                                </S.divImgTitleOQueFazemos>
                                <S.pItemOQueFazemos>
                                    FAQ, questionários e dicas para saber como funciona a doação e se você pode doar ou não.
                                </S.pItemOQueFazemos> 
                            </S.divItemOQueFazemos>
                        </S.divItensOQueFazemosContainer>
                        <S.buttonOQueFazemos onClick={() => {window.alert('VOCÊ CLICOU EM SAIBA MAIS!')}}>
                            Saiba mais
                        </S.buttonOQueFazemos>
                    </S.divOQueFazemosContainer>
                </S.sectionOQueFazemos>
                <S.sectionLorem>
                    <S.divLoremText>
                        <S.titleLorem>
                            TÍTULO
                        </S.titleLorem>
                        <S.subtitleLorem>
                            SUBTÍTULO
                        </S.subtitleLorem>
                        <S.pLorem>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra eget nunc a porttitor. Aenean elementum ac enim quis blandit. Proin congue dictum mi quis mattis. Donec vehicula, ipsum ac mollis bibendum, ante odio fermentum turpis, a ornare quam ante ut purus. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra eget nunc a porttitor. Aenean elementum ac enim quis blandit. Proin congue dictum mi quis mattis. Donec vehicula, ipsum ac mollis bibendum, ante odio fermentum turpis, a ornare quam ante ut purus.
                        </S.pLorem>
                        <S.buttonLorem onClick={() => {window.alert('VOCÊ CLICOU EM SAIBA MAIS!')}}>
                            Saiba mais
                        </S.buttonLorem>
                    </S.divLoremText>
                    <S.divLoremImg>
                        <S.imgLorem src={armBandaid}/>
                    </S.divLoremImg>
                </S.sectionLorem>

                {/* FOOTER  */}
                <S.footer>
                    <S.divFooterContainer>
                        <S.titleFooter>
                            Faça parte você também!
                        </S.titleFooter>
                        <S.divFooterBody>
                            <S.divFooterContactContainer>
                                <S.divFooterContact>
                                    <S.imgFooterContact onClick={() => (window.alert("VOCÊ CLICOU NO PHONE"))} src={phone}/>
                                    <S.pFooterContact>
                                        +55 11 99999-9999
                                    </S.pFooterContact>
                                </S.divFooterContact>
                                <S.divFooterContact>
                                    <S.imgFooterContact onClick={() => (window.alert("VOCÊ CLICOU NO EMAIL"))} src={mail} />
                                    <S.pFooterContact>
                                        blood4life@bandtec.com.br
                                    </S.pFooterContact>
                                </S.divFooterContact>
                                <S.divFooterContact>
                                    <S.imgFooterContact onClick={() => (window.alert("VOCÊ CLICOU NO ENDEREÇO"))} src={location} />
                                    <S.pFooterContact>
                                        Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001
                                    </S.pFooterContact>
                                </S.divFooterContact>
                            </S.divFooterContactContainer>
                            <S.divFooterLogoContainer>
                                    <S.imgFooterLogo src={logoHeart}/>
                            </S.divFooterLogoContainer>
                            <S.divFooterSocialMediaContainer>
                                <S.titleSocialMedia>
                                    Redes Sociais
                                </S.titleSocialMedia>
                                <S.divImgSocialMediaContainer>
                                    <S.imgSocialMedia onClick={() => (window.alert("VOCÊ CLICOU NO FACEBOOK"))} src={facebook}/>
                                    <S.imgSocialMedia onClick={() => (window.alert("VOCÊ CLICOU NO INSTAGRAM"))} src={instagram}/>
                                    <S.imgSocialMedia onClick={() => (window.alert("VOCÊ CLICOU NO LINKEDIN"))} src={linkedin}/>
                                    <S.imgSocialMedia onClick={() => (window.alert("VOCÊ CLICOU NO TWITTER"))} src={twitter}/>
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