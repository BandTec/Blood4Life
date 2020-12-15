import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";
// import NavBar from "../../components/NavBar";
// import NavBarSpacing from "../../components/NavBarSpacing";
// import MenuLateral from "../../components/MenuLateral";
// import UltimasDoacoes from "../../components/Graficos/ultimasDoacoes";
// import TipoSanguineo from "../../components/Graficos/tipoSanguineo";
// import { MdClose } from "react-icons/md";
import TipoSanguineo2 from "../../components/Graficos/tipoSanguineo2";
import api from "../../services/api.js";
import BodyNavMenu from "../../components/BodyNavMenu";
import Loading from "../../components/Loading";

import { MdInfo } from "react-icons/md";

export default function Dashboard(props) {
  const hist = useHistory();
  const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [media, setMedia] = useState();
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [critico, setCritico] = useState();
  const [litros, setLitros] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hospitalNome, setHospitalNome] = useState();
  const [hospitalTelefone, setHospitalTelefone] = useState();
  const [hospitalEmail, setHospitalEmail] = useState();
  const [hospitalEndereco, setHospitalEndereco] = useState();

  const onChildClicked = () => {
    setMostrarMenuLateral(!mostrarMenuLateral);
  };

  let id = props.match.params.id;

  useEffect(() => {
    api
      .get("/tipos")
      .then((response) => {
        let dados = response.data;
        let litrosSangue = [];
        let tipo = [];
        let nome = "";
        let telefone = "";
        let email = "";
        let endereco = "";

        dados.forEach((a) => {
          if (a.hospital.id == id) {
            nome = a.hospital.nome;
            telefone = a.hospital.telefone;
            email = a.hospital.email;
            endereco = a.hospital.endereco;
            litrosSangue.push(a.qtdAtual);
            //  console.log("AQUI Ó!: ", litrosSangue)
            if (a.qtdAtual <= 5.0) {
              tipo.push(a.tipoSangue);
            }
          }
        });
        let soma = 0.0;
        let contador = 0;

        litrosSangue.forEach((a) => {
          soma += a;
          if (a <= 5) {
            contador++;
          }
        });
        //   console.log("TIPOS SANGUÍNUEOS: ",tipo)
        setHospitalNome(nome);
        setHospitalTelefone(telefone);
        setHospitalEmail(email);
        setHospitalEndereco(endereco);
        setLitros(litrosSangue);
        setCritico(contador);
        let media = soma / 8;
        setMedia(media.toFixed(2));
        let max = Math.max(...litrosSangue);
        setMax(max.toFixed(2));
        let min = Math.min(...litrosSangue);
        setMin(min.toFixed(2));
        setTipo(tipo);
        setRender(true);

        setLoading(false);
      })
      .catch((error) => {
        console.log("erro");
      });
  }, []);

  let color = "";
  let color2 = "";
  let color3 = "";
  let color4 = "";

  media >= 9.0
    ? (color = "#7DABFA")
    : media >= 5.0 && media < 9.0
    ? (color = "#F4B92D")
    : (color = "#AA372E");

  critico > 5
    ? (color2 = "#AA372E")
    : critico <= 5 && critico > 2
    ? (color2 = "#F4B92D")
    : (color2 = "#7DABFA");

  max >= 9.0
    ? (color3 = "#7DABFA")
    : max >= 5.0 && max < 9.0
    ? (color3 = "#F4B92D")
    : (color3 = "#AA372E");

  min >= 9.0
    ? (color4 = "#7DABFA")
    : min >= 5.0 && min < 9.0
    ? (color4 = "#F4B92D")
    : (color4 = "#AA372E");

  return (
    <>
      {loading ? <Loading /> : null}
      <BodyNavMenu
        render={
          <>
            {showInfo && (
              <div
                onClick={() => setShowInfo(!showInfo)}
                style={{
                  zIndex: 9999999,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00000044",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <div
                  style={{
                    borderRadius: "5vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    backgroundColor: "white",
                    width: "50%",
                    padding: "5%",
                    height: "60%",
                  }}
                >
                  {/* <MdClose
                    style={{
                      backgroundColor: "#7DABFA",
                      alignSelf: "flex-end;",
                      justifySelf: "flex-end;",
                    }}
                  /> */}
                  <div style={{ color: "#7DABFA" }}>Nome:</div>
                  <div style={{ padding: "2% 0 3% 5%" }}>{hospitalNome}</div>
                  <div style={{ color: "#7DABFA" }}>Email:</div>
                  <div style={{ padding: "2% 0 3% 5%" }}>{hospitalEmail}</div>
                  <div style={{ color: "#7DABFA" }}>Telefone:</div>
                  <div style={{ padding: "2% 0 3% 5%" }}>
                    {hospitalTelefone}
                  </div>
                  <div style={{ color: "#7DABFA" }}>Endereço:</div>
                  <div style={{ padding: "2% 0 3% 5%" }}>
                    {hospitalEndereco.rua}, {hospitalEndereco.numero} -{" "}
                    {hospitalEndereco.bairro}, {hospitalEndereco.cidade} -{" "}
                    {hospitalEndereco.uf}, {hospitalEndereco.cep}{" "}
                  </div>
                </div>
              </div>
            )}
            <S.divContainer>
              <S.divNome>
                <S.icon>
                  <MdInfo
                    onClick={() => setShowInfo(!showInfo)}
                    className="icon"
                  />
                </S.icon>
                <S.titleNome>{hospitalNome}</S.titleNome>
              </S.divNome>
              <S.lowerSection>
                <S.leftLowerCard>
                  {render && <TipoSanguineo2 dados={litros} />}
                </S.leftLowerCard>

                <S.rightLowerCard>
                  {/* <TipoSanguineo /> */}
                  <S.rightLowerUp>
                    <S.upperCard backgroundC={color}>
                      <S.upperCardTitle>Média</S.upperCardTitle>
                      <S.upperCardValue>{media}</S.upperCardValue>
                    </S.upperCard>
                    <S.upperCard backgroundC={color2}>
                      <S.upperCardTitle>Crítico Total</S.upperCardTitle>
                      <S.upperCardValue>{tipo}</S.upperCardValue>
                    </S.upperCard>
                  </S.rightLowerUp>

                  <S.rightLowerBottom>
                    <S.upperCard backgroundC={color3}>
                      <S.upperCardTitle>Maior quantia</S.upperCardTitle>
                      <S.upperCardValue>{max}</S.upperCardValue>
                    </S.upperCard>
                    <S.upperCard backgroundC={color4}>
                      <S.upperCardTitle>Menor quantia</S.upperCardTitle>
                      <S.upperCardValue>{min}</S.upperCardValue>
                    </S.upperCard>
                  </S.rightLowerBottom>
                  {/*UltimasDoacoes /*/}
                </S.rightLowerCard>
              </S.lowerSection>
            </S.divContainer>
          </>
        }
      />
    </>
  );
}
