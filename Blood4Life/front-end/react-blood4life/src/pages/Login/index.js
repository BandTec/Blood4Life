import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as S from './style.js';
import b4lLogo from '../../assets/b4l-logo.png';
import imgEmailUser from '../../assets/email-user.png';
import imgSenhaUser from '../../assets/senha-user.png';
import imgAdmin from '../../assets/imgFundoAdmir.png';
import imgDoador from '../../assets/loginImg.png';

import api from '../../services/api';

export default function Login(props) {

    const hist = useHistory();

    async function handleLoginDoador() {

        const email = document.getElementById('txtUseremail').value;
        const senha = document.getElementById('txtUsersenha').value;

        await api.post(`/user/doador?email=${email}&senha=${senha}`)
        .then(res => {
            localStorage.setItem("adm", JSON.stringify(res.data));
            console.log(res.data);
            hist.push('/');
        }).catch(error =>{
            if(error!==undefined&&error.response.status === 404){
                console.log(error);
                alert('Credenciais invalidas');
            } else {
                alert('Problemas de conexão')
            }
        });
    }

    async function handleLoginAdm() {

        const email = document.getElementById('txtUseremail').value;
        const senha = document.getElementById('txtUsersenha').value;

        await api.post(`/user/doador?email=${email}&senha=${senha}`)
        .then(res => {
            localStorage.setItem("doador", JSON.stringify(res.data));
            console.log(res.data);
            // hist.push('/');
        }).catch(error =>{
            if(error!==undefined&&error.response.status === 404){
                console.log(error);
                alert('Credenciais invalidas');
            } else {
                alert('Problemas de conexão')
            }
        });
    }

    return (
        <>
        {
            props.location.loginProps === undefined 
            ?
            (hist.push('/'))
            :
            <S.container>
                <S.divesquerda>
                    <S.divLogo>
                        <Link style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }} to="/">
                                <S.imgLogo src={b4lLogo}/>
                        </Link>
                    </S.divLogo>
                    <S.divestrutura>
                        <S.divInputs>
                            <S.divEmail>
                                <S.imgEmailUser src={imgEmailUser} />
                                <S.inputEmail id="txtUseremail" type="text"  placeholder="Email" />
                            </S.divEmail>
                            <S.divSenha>
                                <S.imgSenhaUser src={imgSenhaUser} />
                                <S.inputSenha id="txtUsersenha" type="text"  placeholder="Senha" />
                            </S.divSenha>

                            <S.divResto>
                                <S.divLembrar>
                                    <S.checkLembrar type="checkbox" name="boxlembrar" />
                                    <S.lblLembrar>Lembrar de mim</S.lblLembrar>
                                </S.divLembrar>

                                <S.divEsqueceu>
                                    <S.lblEsqueceu>Esqueceu a senha</S.lblEsqueceu>
                                </S.divEsqueceu>
                            </S.divResto>
                        </S.divInputs>

                        <S.divBotao>
                        {
                            props.location.loginProps.admin
                            ?
                            <S.btnLogar onClick={handleLoginAdm}>
                                <S.lblbotao>Acessar</S.lblbotao>
                            </S.btnLogar>
                            :
                            <S.btnLogar onClick={handleLoginDoador}>
                                <S.lblbotao>Entrar</S.lblbotao>
                            </S.btnLogar>
                        }
                        </S.divBotao>
                    </S.divestrutura>
                </S.divesquerda>
                    {
                        props.location.loginProps.admin
                        ?
                    <S.divdireita style={{backgroundColor: "#FAE4E1"}}>
                        <S.imglogin src={imgAdmin} />
                    </S.divdireita>
                        :
                    <S.divdireita>
                        <S.imglogin src={imgDoador} />
                    </S.divdireita>
                    }
            </S.container> 
        }
        </>
    )
}