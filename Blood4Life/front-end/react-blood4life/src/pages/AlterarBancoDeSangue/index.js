import React, { useState } from "react";
import * as S from "./style";
import Cleave from 'cleave.js/react';
import Hospital from '../../assets/icone-hospital-nomerge.svg';
import BodyNavMenu from "../../components/BodyNavMenu";
import api from '../../services/api.js';


export default function AlterarBancoDeSangue() {
    const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const [tipoSanguineo, setTipoSanguineo] = useState('A+');
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

    async function atualizarDadosBancoDeSangue() {

        const tipoSanguineoTratado = tipoSanguineo.replace('+', '%2B').replace('-', '%2D');

        const quantidadeTratada = quantidade.replace('.', '').replace(',', '.');

        await api.put(`tipos/${usuario.id}/${tipoSanguineoTratado}?quantidade=${quantidadeTratada}`)
            .then(res => {
                alert('Quantidade atualizada com sucesso!');
            })
            .catch(err => {
                alert("Erro ao atualizar quantidade");
            });
    }

    return (
        <>
            <BodyNavMenu render={
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
                                    <Cleave id="quantidade" options={{ numeral: true, numeralDecimalScale: 1, numeralPositiveOnly: true, numeralDecimalMark: ',', delimiter: '.' }} onChange={onChangeQuantidade} value={quantidade} />
                                </S.divColuna>
                            </S.divLinha>
                        </S.divDaDiv>
                        <S.divFileContainer>
                            <S.fileText>Importar estoque de sangue</S.fileText>
                            <S.fileInput type='file' />
                        </S.divFileContainer>
                        <S.signUpButton>
                            <button type="button" onClick={atualizarDadosBancoDeSangue} >Atualizar</button>
                        </S.signUpButton>
                    </S.containerForm>
                </S.atualizacaoContainer>
            } />
        </>
    );
}