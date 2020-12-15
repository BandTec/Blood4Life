import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as S from './style.js';
import logo from '../../assets/logo.svg';
import imagemLoginAdm from '../../assets/img-login-adm.svg';
import api from '../../services/api.js';
import Cleave from 'cleave.js/react';

export default function Cadastro() {

    const hist = useHistory();

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
    const [uf, setUf] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    let addressData = {};
    let responseStatusBrasilApi = 0;

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

    const onChangeUf = ev => {
        setUf(ev.target.value);
    };


    const onBlurCep = async ev => {
        const { rawValue } = ev.target;
        const key = "19e64d92a8c340099e467d4f2d1a60e2";

        if (rawValue?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${rawValue}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setUf(data.uf);
            });

        const address = await api.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then(res => {
                res.data = encodeURIComponent(Object.values(res.data).reverse().join(" "));
                addressData = res.data;
                responseStatusBrasilApi = res.status;
            })
            .catch(error => console.log("Erro ao obter endereço"));

        if (responseStatusBrasilApi === 200) {
            const { lat, lng } = await api.get(`https://api.opencagedata.com/geocode/v1/json?q=${addressData}&key=${key}`)
                .then(({ data }) => data.results[0].geometry)
                .catch(error => console.log("Erro ao obter latitude e longitude"));

            setLatitude(lat);
            setLongitude(lng)
        }
    }



    async function handleRegister() {

        let hospitalId = 0;

        const Hospital = {
            nome,
            cnpj,
            telefone,
            email,
            senha,
            endereco: {
                cep,
                complemento,
                rua,
                numero,
                bairro,
                cidade,
                uf,
                latitude,
                longitude
            }
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
                localStorage.setItem("usuario", JSON.stringify(res.data));
                localStorage.setItem("tipo-usuario", "hospital");

                const nome = res.data.nome;
                const nomes = nome.split(' ');

                if (nomes.length === 1) {
                    localStorage.setItem("apelido", (nomes[0][0]).toUpperCase());
                } else if (nomes.length > 1) {
                    localStorage.setItem("apelido", (nomes[0][0] + nomes[1][0]).toUpperCase());
                }

                hospitalId = res.data.id;
                alert('Hospital cadastrado com sucesso! Você será redirecionado à tela inicial.');
                hist.push("/");
            })
            .catch(err => {
                if (nome === "") {
                    alert("Nome não pode ser em branco");
                } else if (nome.length < 2 || nome.length > 45) {
                    alert("Nome tem que ter no mínimo 2 e no máximo 45 lecaracterestras");
                }

                if (cnpj === "") {
                    alert("CNPJ não pode ser em branco");
                }

                if (telefone === "") {
                    alert("Telefone não pode ser em branco");
                }

                if (email === "") {
                    alert("E-mail não pode ser em branco");
                } else if (email.length < 10 || email.length > 60) {
                    alert("E-mail tem que ter no mínimo 10 e no máximo 60 caracteres");
                }

                if (senha === "") {
                    alert("Senha não pode estar em branco");
                } else if (senha.length < 8 || senha.length > 16) {
                    alert("Senha tem que ter no mínimo 8 e no máximo 16 caracteres");
                }

                if (cep === "") {
                    alert("CEP não pode estar em branco");
                } else if (cep.length < 8 || cep.length > 8) {
                    alert("CEP tem que ter 8 caracteres");
                }

                if (complemento.length > 30) {
                    alert("Complemento tem que ter no máximo 30 caracteres");
                }

                if (rua === "") {
                    alert("Rua não pode estar em branco");
                } else if (rua.length > 30) {
                    alert("Rua tem que ter no máximo 30 caracteres");
                }

                if (numero === "") {
                    alert("Número não pode estar em branco");
                } else if (numero.length > 6) {
                    alert("Número tem que ter no máximo 6 caracteres");
                }

                if (bairro === "") {
                    alert("Bairro não pode estar em branco");
                } else if (bairro.length > 30) {
                    alert("Bairro tem que ter no máximo 30 caracteres");
                }

                if (cidade === "") {
                    alert("Cidade não pode estar em branco");
                } else if (cidade.length > 30) {
                    alert("Cidade tem que ter no máximo 30 caracteres");
                }

                if (uf === "") {
                    alert("Estado não pode estar em branco");
                } else if (uf.length < 2 || uf.length > 2) {
                    alert("Estado tem que ter 2 caracteres");
                }
            });

        const tiposSanguineos = [
            {
                tipoSangue: 'A+',
                qtdAtual: 0,
                hospital: {
                    id: hospitalId
                }
            },

            {
                tipoSangue: 'A-',
                qtdAtual: 0,
                hospital: {
                    id: hospitalId
                }
            },

            {
                tipoSangue: 'B+',
                qtdAtual: 0,
                hospital: {
                    id: hospitalId
                }
            },

            {
                tipoSangue: 'B-',
                qtdAtual: 0,
                hospital: {
                    id: hospitalId
                }
            },

            {
                tipoSangue: 'AB+',
                qtdAtual: 0,
                hospital: {
                    id: hospitalId
                }
            },

            {
                tipoSangue: 'AB-',
                qtdAtual: 0,
                hospital: {
                    id: hospitalId
                }
            },

            {
                tipoSangue: 'O+',
                qtdAtual: 0,
                hospital: {
                    id: hospitalId
                }
            },

            {
                tipoSangue: 'O-',
                qtdAtual: 0,
                hospital: {
                    id: hospitalId
                }
            }
        ];

        await api.post('/tipos/lista', tiposSanguineos)
            .then(res => {
                alert('Estoques de Sangue criados com sucesso!');
            })
            .catch(err => {
                alert('Erro ao criar Estoques de Sangue');
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
                            <input style={{ paddingLeft: '2%' }} id="nome" type="text" placeholder="" onChange={onChangeNome} value={nome} />
                        </S.divColuna>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">CNPJ: *</label>
                                <Cleave id="cnpj" placeholder="99.999.999/9999-99" options={{ blocks: [2, 3, 3, 4, 2], delimiters: ['.', '.', '/', '-'], numericOnly: true }} onChange={onChangeCnpj} value={cnpj} />
                            </S.divColuna>

                            <S.divColuna>
                                <label htmlFor="">Telefone: *</label>
                                <Cleave id="telefone" type="text" placeholder="(99) 9 9999-9999" options={{ blocks: [0, 2, 0, 1, 4, 4], delimiters: ['(', ')', ' ', ' ', '-'], numericOnly: true }} onChange={onChangeTelefone} value={telefone} />
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
                                <Cleave id="cep" type="text" placeholder="99999-999" options={{ blocks: [5, 3], delimiter: '-', numericOnly: true }} onBlur={onBlurCep} onChange={onChangeCep} value={cep} />
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
                            <input style={{ paddingLeft: '2%' }} id="bairro" placeholder="" onChange={onChangeBairro} value={bairro} />
                        </S.divColuna>
                        <S.divLinha>
                            <S.divColuna>
                                <label htmlFor="">Cidade: *</label>
                                <input id="cidade" placeholder="" onChange={onChangeCidade} value={cidade} />
                            </S.divColuna>
                            <S.divColuna>
                                <label>Estado: </label>
                                <select id="estado" onChange={onChangeUf} value={uf} >
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </S.divColuna>
                        </S.divLinha>
                    </S.divDaDiv>
                    <S.signUpButton>
                        <button type="button" onClick={handleRegister}>Cadastrar</button>
                    </S.signUpButton>
                </S.containerForm>

            </S.conteudo>
        </>
    );
}