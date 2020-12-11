import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import * as S from "./style";
import NavBar from "../../components/NavBar";
import NavBarSpacing from "../../components/NavBarSpacing";
import MenuLateral from "../../components/MenuLateral";

export default function AlterarDoador() {
  const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);

  // const hist = useHistory();

  const onChildClicked = () => {
    setMostrarMenuLateral(!mostrarMenuLateral);
  };

  return (
    <>
      <S.container>
        {mostrarMenuLateral ? <MenuLateral /> : <></>}
        {mostrarMenuLateral ? (
          <NavBar onClicked={onChildClicked} mostrandoMenu />
        ) : (
          <NavBar onClicked={onChildClicked} />
        )}
        <S.bodyContainer>
            <NavBarSpacing />
                <S.formContainer>
                    <S.containerForm>
                        <h1>Informações Pessoais</h1>
                    </S.containerForm>            
                </S.formContainer>
        </S.bodyContainer>
      </S.container>
    </>
  );
}
