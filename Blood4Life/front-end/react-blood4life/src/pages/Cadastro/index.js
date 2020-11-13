import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
import logo from '../../assets/logo.svg';
import imagemForm from '../../assets/imagem-form.svg';
import { useHistory } from 'react-router-dom';
import api from '../../services/api.js';

export default function Cadastro() {

    const hist = useHistory();

    async function handleRegister(){

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const emailConfirmado = document.getElementById('emailConfirmado').value;
        const dtNascimento = document.getElementById('dtNascimento').value;
        const tipoSanguineo = document.getElementById('tipoSanguineo').value;
        const senha = document.getElementById('senha').value;
        const senhaConfirmada = document.getElementById('senhaConfirmada').value;


        const doador = {
            nome,
            email,
            senha,
            dtNascimento,
            tipoSanguineo
        }

        await api.post('/doadores', doador)
        .then(res => {
            alert('Cadastrado com sucesso!');
        })
        .catch(err => {
            console.log("Erro:", err);
        });
    
    }
    
    return (
        <>
            <S.divSalsichao>
                <Link to="/">
                    <img src={logo} alt='Logo Blood4Life' />
                </Link>
            </S.divSalsichao>
            <S.conteudo>
                <S.containerImagem>
                    <img src={imagemForm} alt='Imagem de cadastro' />
                </S.containerImagem>
                <S.containerForm>
                    <h1>Informações Pessoais</h1>
                    <S.divDaDiv>
                        <S.divColuna style={{ width: '100%' }}>
                            <label htmlFor="">Nome: *</label>
                            <input id="nome" type="text" placeholder="" />
                        </S.divColuna>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Email: *</label>
                                <input id="email" type="email" placeholder="" />
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Confirmar Email: *</label>
                                <input id="emailConfirmado" type="email" placeholder="" />
                            </S.divColuna>
                        </S.divLinha>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Data de Nascimento: *</label>
                                <input id="dtNascimento" type="date" />
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Tipo Sanguíneo:</label>
                                <select name="" id="tipoSanguineo">
                                    <option value="">Não sei meu tipo sanguíneo</option>
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
                        </S.divLinha>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Senha: *</label>
                                <input id="senha" type="password" placeholder="" />
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Confirmar Senha: *</label>
                                <input id="senhaConfirmada" type="password" placeholder="" />
                            </S.divColuna>
                        </S.divLinha>
                    </S.divDaDiv>
                    <S.signUpButton>
                        <button onClick={handleRegister}>Cadastrar</button>
                    </S.signUpButton>
                </S.containerForm>

            </S.conteudo>
        </>
    );
}