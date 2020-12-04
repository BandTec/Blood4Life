import React from "react";
import * as S from './style';

export default function MenuLateral() {
    return (
        <>
            <S.menuContainer>
                <S.divLogo>
                    <S.logo>
                        
                    </S.logo>
                </S.divLogo>
                <S.divLista>
                    <S.lista>
                        <S.item selected onClick={() => {window.alert("CLICOU NO ITEM 1")}}>ITEM 1</S.item>
                        <S.item selected onClick={() => {window.alert("CLICOU NO ITEM 2")}}>ITEM 2</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 3")}}>ITEM 3</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        
                        {/* TESTANDO O OVERFLOW DA S.lista ficou tão cute-cute :3 */}
                        {/* <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item>
                        <S.item onClick={() => {window.alert("CLICOU NO ITEM 4")}}>ITEM 4</S.item> */}
                    
                    </S.lista>
                </S.divLista>

            </S.menuContainer>
        </>
    );
}
