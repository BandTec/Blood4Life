import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
import logo from '../../assets/logo.svg';
import imagemLoginAdm from '../../assets/img-login-adm.svg';
import { useHistory } from 'react-router-dom';

export default function Cadastro() {

    const hist = useHistory();

    // async function handleRegister(){

    //     const nome = document.getElementById('nome').value;
    //     const email = document.getElementById('email').value;
    //     const emailConfirmado = document.getElementById('emailConfirmado').value;
    //     const senha = document.getElementById('senha').value;
    //     const senhaConfirmada = document.getElementById('senhaConfirmada').value;


    //     const administrativo = {
    //         nome,
    //         email,
    //         senha,
    //     }

    //     await api.post('/hospitais', administrativo)
    //     .then(res => {
    //         alert('Cadastrado com sucesso!');
    //         hist.push("/");
    //     })
    //     .catch(err => {
    //         console.log("Erro:", err);
    //     });
    // onClick={handleRegister}
    // }
    
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
                        <button >Cadastrar</button>
                    </S.signUpButton>
                </S.containerForm>

            </S.conteudo>
        </>
    );
}