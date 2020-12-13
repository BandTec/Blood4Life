import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import NavBar from "../../components/NavBar";
import NavBarSpacing from "../../components/NavBarSpacing";
import MenuLateral from "../../components/MenuLateral";
import api from '../../services/api.js';
import Cleave from 'cleave.js/react';
import Hospital from '../../assets/icone-hospital-nomerge.svg';
import setaSelect from "../../assets/setaSelect.png";


export default function AlterarBancoDeSangue() {
    const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);

    const hist = useHistory();

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const apelido = localStorage.getItem("apelido");

    const [tipoSanguineo, setTipoSanguineo] = useState('');
    const [quantidade, setQuantidade] = useState(0);

    const onChildClicked = () => {
        setMostrarMenuLateral(!mostrarMenuLateral);
    };

    const onChangeTipoSanguineo = ev => {
        setTipoSanguineo(ev.target.value);
    };

    const onChangeQuantidade = ev => {
        setQuantidade(ev.target.value);
    };

    // async function atualizarDadosBancoDeSangue() {

    // const hospital = {
    //     id,
    //     nome,
    //     cnpj,
    //     telefone,
    //     email,
    //     senha,
    //     endereco: {
    //         cep,
    //         complemento,
    //         rua,
    //         numero,
    //         bairro,
    //         cidade,
    //         uf,
    //         latitude,
    //         longitude
    //     }
    // }

    // await api.put(`/hospitais/${id}`, hospital)
    //     .then(res => {
    //         localStorage.setItem("usuario", JSON.stringify(res.data));
    //         localStorage.setItem("tipo-usuario", "hospital");

    //         const nome = res.data.nome;
    //         const nomes = nome.split(' ');

    //         if (nomes.length === 1) {
    //             localStorage.setItem("apelido", (nomes[0][0]).toUpperCase());
    //         } else if (nomes.length > 1) {
    //             localStorage.setItem("apelido", (nomes[0][0] + nomes[1][0]).toUpperCase());
    //         }

    //         alert('Hospital alterado com sucesso!');
    //         hist.push("/menu");
    //     })
    //     .catch(err => {
    //         if (quantidade === "") {
    //             alert("Quantidade de sangue não pode ser em branco");
    //         }
    //     });
    // }

    return (
        <>
            <S.container>
                {
                    mostrarMenuLateral
                        ?
                        <MenuLateral />
                        :
                        <>
                        </>
                }
                {
                    mostrarMenuLateral
                        ?
                        <NavBar onClicked={onChildClicked} mostrandoMenu />
                        :
                        <NavBar onClicked={onChildClicked} />
                }
                <S.bodyContainer>
                    <NavBarSpacing />
                    <S.atualizacaoContainer>
                        <S.containerForm >
                            <S.divPersonaIcon>
                                <S.personaIcon>
                                    <img src={Hospital} alt="Imagem do Hospital em forma de icon" width="48px" height="48px" />
                                </S.personaIcon>
                            </S.divPersonaIcon>
                            <h1>Atualizar Estoque - Banco de Sangue</h1>
                            <S.divDaDiv>
                                <S.divLinha>
                                    <S.divColuna>
                                        <label > Tipo Sanguíneo: </label>
                                        <select id="tipoSanguineo" onChange={onChangeTipoSanguineo} value={tipoSanguineo}>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </S.divColuna>
                                    <S.divColuna>
                                        <label htmlFor="">Quantidade em Litros:</label>
                                        <Cleave id="quantidade" options={{ numeral: true, numeralDecimalScale: 1, numeralPositiveOnly: true, numeralDecimalMark: ',', delimiter: '.'}} onChange={onChangeQuantidade} value={quantidade} />
                                    </S.divColuna>
                                </S.divLinha>
                            </S.divDaDiv>
                            <S.signUpButton>
                                <button type="button" >Atualizar</button>
                            </S.signUpButton>
                        </S.containerForm>
                    </S.atualizacaoContainer>
                </S.bodyContainer>
            </S.container>
        </>
    );
}

/*onClick={atualizarDadosBancoDeSangue} */