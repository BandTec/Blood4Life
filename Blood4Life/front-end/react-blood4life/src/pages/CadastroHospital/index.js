import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
import logo from '../../assets/logo.svg';
import imagemLoginAdm from '../../assets/img-login-adm.svg';
import api from '../../services/api.js';
import Cleave from 'cleave.js/react';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [cnpj, setCnjp] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmado, setEmailConfirmado] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const onChangeNome = ev => {
        setNome(ev.target.value);
    };

    const onChangeEmail = ev => {
        setEmail(ev.target.value);
    };

    const onChangeEmailConfirmado = ev => {
        setEmailConfirmado(ev.target.value);
    };

    const onChangeSenha = ev => {
        setSenha(ev.target.value);
    };

    const onChangeSenhaConfirmada = ev => {
        setSenhaConfirmada(ev.target.value);
    };

    const onChangeCnpj = e => {
        setCnjp(e.target.rawValue);
    }

    const onChangeTelefone = e => {
        setTelefone(e.target.rawValue);
    }
    
    const onChangeCep = e => {
        setCep(e.target.rawValue);
    }

    const onChangeComplemento = ev => {
        setComplemento(ev.target.value);
    };

    const onChangeRua = ev => {
        setRua(ev.target.value);
    };

    const onChangeNumero = ev => {
        setNumero(ev.target.value);
    };

    const onChangeBairro = ev => {
        setBairro(ev.target.value);
    };

    const onChangeCidade = ev => {
        setCidade(ev.target.value);
    };

    const onChangeEstado = ev => {
        setEstado(ev.target.value);
    };

    async function handleRegister(){

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
                    <h1>Informações Institucionais</h1>
                    <S.divDaDiv>
                        <S.divColuna style={{ width: '100%' }}>
                            <label htmlFor="">Nome do Hospital: *</label>
                            <input id="nome" type="text" placeholder="" onChange={onChangeNome} value={nome} />
                        </S.divColuna>
                        <S.divLinha>        
                            <S.divColuna>
                                <label htmlFor="">CNPJ: *</label>
                                <Cleave id="cnpj" placeholder="99.999.999/9999-99" options={{blocks: [2,3,3,4,2], delimiters: ['.','.','/','-'], numericOnly: true}} onChange={onChangeCnpj} value={cnpj} />
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Telefone: *</label>
                                <Cleave id="telefone" type="text" placeholder="(99) 9 9999-9999" options={{blocks: [0,2,0,1,4,4], delimiters: ['(',')',' ',' ','-'], numericOnly: true}} onChange={onChangeTelefone} value={telefone} />
                            </S.divColuna>
                        </S.divLinha>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">E-mail: *</label>
                                <input id="email" type="email" placeholder="seu@email.com" onChange={onChangeEmail} value={email} />
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Confirmar E-mail: *</label>
                                <input id="emailConfirmado" type="email" placeholder="seu@email.com" onChange={onChangeEmailConfirmado} value={emailConfirmado} />
                            </S.divColuna>
                        </S.divLinha>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Senha: *</label>
                                <input id="senha" type="password" placeholder="" onChange={onChangeSenha} value={senha} />
                                <S.dicaInput>(Min: 8 Caracteres)</S.dicaInput>
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Confirmar Senha: *</label>
                                <input id="senhaConfirmada" type="password" placeholder="" onChange={onChangeSenhaConfirmada} value={senhaConfirmada} />
                            </S.divColuna>
                        </S.divLinha>
                    </S.divDaDiv>
                    <h1>Informações de Contato</h1>
                    <S.divDaDiv>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">CEP: *</label>
                                <Cleave id="cep" type="text" placeholder="99999-999" options={{ blocks: [5, 3], delimiter: '-', numericOnly: true }} onChange={onChangeCep} value={cep} />
                            </S.divColuna>
                            <S.divColuna>
                                <label htmlFor="">Complemento:</label>
                                <input id="complemento" placeholder="" onChange={onChangeComplemento} value={complemento} />
                            </S.divColuna>
                        </S.divLinha>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Rua: *</label>
                                <input id="rua" placeholder="" onChange={onChangeRua} value={rua} />
                            </S.divColuna>
                            <S.divColuna>
                                <label htmlFor="">Número: *</label>
                                <input id="numero" placeholder="" onChange={onChangeNumero} value={numero} />
                            </S.divColuna>
                        </S.divLinha>
                        <S.divColuna style={{ width: '100%' }}>
                            <label htmlFor="">Bairro: *</label>
                            <input id="bairro" placeholder="" onChange={onChangeBairro} value={bairro} />
                        </S.divColuna>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Cidade: *</label>
                                <input id="cidade" placeholder="" onChange={onChangeCidade} value={cidade} />
                            </S.divColuna>
                            <S.divColuna>
                                <label htmlFor="">Estado: *</label>
                                <input id="estado" placeholder="" onChange={onChangeEstado} value={estado} />
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