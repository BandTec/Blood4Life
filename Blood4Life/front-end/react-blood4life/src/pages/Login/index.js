import React from 'react';
import * as S from './style.js';
import imgLogin from '../../assets/loginImg.png';
import b4lLogo from '../../assets/b4l-logo.png';
import imgEmailUser from '../../assets/email-user.png';
import imgSenhaUser from '../../assets/senha-user.png';

export default function Login() {
    return (
        <>

            <S.container>


                <S.divesquerda>

                    <S.divLogo>
                        <S.imgLogo src={b4lLogo} />

                    </S.divLogo>
                    <S.divestrutura>
                        <S.divInputs>
                            <S.divEmail>
                                <S.imgEmailUser src={imgEmailUser} />
                                <S.inputEmail id="txtUseremail" type="text" name="useremail" placeholder="Email" />
                            </S.divEmail>
                            <S.divSenha>
                                <S.imgSenhaUser src={imgSenhaUser} />
                                <S.inputSenha id="txtUsersenha" type="text" name="usersenha" placeholder="Senha" />
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
                            <S.btnLogar>
                                <S.lblbotao>Entrar</S.lblbotao>
                            </S.btnLogar>
                        </S.divBotao>
                    </S.divestrutura>
                </S.divesquerda>
                <S.divdireita>

                    <S.imglogin src={imgLogin} />

                </S.divdireita>

            </S.container>


        </>
    )
}