import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
import logo from '../../assets/logo.svg';
import imagemLoginAdm from '../../assets/img-login-adm.svg';
import api from '../../services/api.js';

export default function Cadastro() {


    async function handleRegister(){


        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const cnpj = document.getElementById('cnpj').value;
        const telefone = document.getElementById('telefone').value;
        const emailConfirmado = document.getElementById('emailConfirmado').value;
        const senha = document.getElementById('senha').value;
        const senhaConfirmada = document.getElementById('senhaConfirmada').value;


        const Hospital = {
            nome,
            cnpj,
            telefone,
            email,
            senha,           
        }

        if (senha !== senhaConfirmada) {
            alert("Senhas não correspondem");
            return;
        }

        if (email !== emailConfirmado) {
            alert("E-mails não correspondem");
            return;
        }

        await api.post('/hospitais', Hospital)
        .then(res => {
            alert('Hospital cadastrado com sucesso!');
        })
        .catch(err => {
            if (nome === "") {
                alert("Nome não pode ser em branco");
            } else if (nome.length < 2 || nome.length > 45) {
                alert("Nome tem que ter no mínimo 2 e no máximo 45 lecaracterestras");
            }

            if (cnpj === ""){
                alert("CNPJ não pode ser em branco");
            }

            if (telefone === ""){
                alert("Telefone não pode ser em branco");
            }
            
            if (email === "") {
                alert("E-mail não pode ser em branco");
            } else if (email.length < 10 || email.length > 60) {
                alert("E-mail tem que ter no mínimo 10 e no máximo 60 caracteres");
            }

            if (senha === ""){
                alert("Senha não pode estar em branco");
            } else if (senha.length < 8 || senha.length > 16) {
                alert("Senha tem que ter no mínimo 8 e no máximo 16 caracteres");
            }  
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
                    <img src={imagemLoginAdm} alt='Imagem de cadastro' />
                </S.containerImagem>
                <S.containerForm>
                    <h1>Informações Pessoais</h1>
                    <S.divDaDiv>
                        <S.divColuna style={{ width: '100%' }}>
                            <label htmlFor="">Nome do Hospital: *</label>
                            <input id="nome" type="text" placeholder="" />
                        </S.divColuna>
                        <S.divLinha>        
                            <S.divColuna>
                                <label htmlFor="">CNPJ: *</label>
                                <input id="cnpj" type="text" placeholder="" />
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Telefone: *</label>
                                <input id="telefone" type="text" placeholder="" />
                            </S.divColuna>
                        </S.divLinha>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">E-mail: *</label>
                                <input id="email" type="email" placeholder="" />
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Confirmar E-mail: *</label>
                                <input id="emailConfirmado" type="email" placeholder="" />
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