import React, {useState} from 'react';
import * as S from './style.js';
import b4lLogo from '../../assets/b4l-logo.png';
import imgEmailUser from '../../assets/email-user.png';
import imgSenhaUser from '../../assets/senha-user.png';
import imgAdminFundo from '../../assets/imgFundoAdmir.png';
import imgLogin from '../../assets/loginImg.png';

export default function Login() {

    const [imgAdmin, setimgAdmin] = useState();

    return (
        <>


            <S.container>
            <button style={{position: "fixed",border:"none",outline:"none" ,zIndex:999, bottom: "0", left:"0", 
            backgroundColor:"White", height: "50px", width: "50px"}}
            
            onClick={()=> setimgAdmin(!imgAdmin)}
            
            ></button>


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
                    {
                        imgAdmin
                        ?
                    <S.divdireita style={{backgroundColor: "#FAE4E1"}}>
                        <S.imglogin src={imgAdminFundo} />
                    </S.divdireita>
                        :
                    <S.divdireita>
                        <S.imglogin src={imgLogin} />
                    </S.divdireita>
                    
                    }

            </S.container>


        </>
    )
}