import React, { useState } from "react";
import * as S from "./style";
import logoVermelho from "../../assets/img-logo-vermelho.svg";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import Restaurante from '../../assets/restaurante-fake.png';
// import Slider from "react-slick";
import { Card, HospitaisCard, Modal, Map} from '../../components';

export default function ApiGoogle() {
  const [inputValue, setInputValue] = useState("");
  const [modalOPened, setModalOpened] = useState(false);

  const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
  }

  return (
    <>
      <S.divWrapper>
        <S.divContainer>
          <S.divSearch>
            <S.imgLogo src={logoVermelho} alt="Logo vermelha do projeto blood4life" />
            <TextField
              label="Pesquisar Hospitais"
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search" />}
            >
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            </TextField>
            <S.CarouselTItle>  Na sua Área</S.CarouselTItle>
            <S.Carousel {...settings}>
                <Card title="braian" src={Restaurante} />
                <Card title="braian" src={Restaurante} />
                <Card title="braian" src={Restaurante} />
                <Card title="braian" src={Restaurante} />
                <Card title="braian" src={Restaurante} />
                <Card title="braian" src={Restaurante} />
            </S.Carousel>
          </S.divSearch>
          <button onClick={() => setModalOpened(true)} >Abrir Modal</button>
          <HospitaisCard/>
          <HospitaisCard/>
          <HospitaisCard/>
          <HospitaisCard/>
        </S.divContainer>
        <Map />
        {/* <Modal open={modalOPened} onCLose={() => setModalOpened(!modalOPened)} /> */}
      </S.divWrapper>
    </>
  );
}
