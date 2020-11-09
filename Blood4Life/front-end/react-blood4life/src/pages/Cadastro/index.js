import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
import logo from '../../assets/logo.svg';
import imagemForm from '../../assets/imagem-form.svg';

export default function Cadastro() {
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
                        <S.divColuna style={{width: '100%'}}>
                            <label htmlFor="">Nome: *</label>
                            <input type="text" placeholder=""/>
                        </S.divColuna>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Email: *</label>
                                <input type="email" placeholder=""/>
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Confirmar Email: *</label>
                                <input type="email" placeholder=""/>
                            </S.divColuna>
                        </S.divLinha>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Data de Nascimento: *</label>
                                <input type="date"/>
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Tipo Sanguíneo:</label>
                                <select name="" id="">
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
                                <input type="password" placeholder=""/>
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Confirmar Senha: *</label>
                                <input type="password" placeholder=""/>
                            </S.divColuna>
                        </S.divLinha>
                    </S.divDaDiv>
                </S.containerForm>
                <S.signUpButton>
                    <button>Cadastrar</button>
                </S.signUpButton>
            </S.conteudo>
        </>
    );
}