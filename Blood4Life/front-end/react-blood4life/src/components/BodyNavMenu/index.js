import React from 'react';
import { useState } from 'react';
import MenuLateral from '../MenuLateral';
import NavBar from '../NavBar';
import * as S from './style';

export default function BodyNavMenu(props) {

    const [ hideSideMenu, setHideSideMenu ] = useState(true);    
    
    const onChildClicked = () => {
        setHideSideMenu(!hideSideMenu);
    }
    
    return (
        <>
            <S.container>
                <NavBar closing={!hideSideMenu} selected={hideSideMenu ? true : false} whenClicked={onChildClicked} />
                <S.divNavSpacing />
                <S.bodyContainer>
                    {
                        hideSideMenu || <MenuLateral />        
                    }   
                    <S.divContainer>
                        {props.render}
                    </S.divContainer>
                </S.bodyContainer>
            </S.container>
        </>
    );
}