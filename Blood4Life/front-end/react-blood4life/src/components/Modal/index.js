import React,{useEffect} from 'react';
import * as S from './style';

import Portal from './Portal';

export default function Modal({children, open, onCLose}) {
    useEffect(() => {
        function onEsc(e){
            if(e.keyCode === 27) onCLose();
        }
        window.addEventListener('keydown', onEsc);

        return() => {
            window.removeEventListener('keydown', onEsc);
        };
    }, [onCLose]);

    if(!open) return null;

    function onOverlayClick(){
        onCLose();
    }

    function onDialogClick(e){
        e.stopPropagation();
    }

    return(
        <Portal>
         <S.Overlay onClick={onOverlayClick}>
             <S.Dialog onClick={onDialogClick}>
                {children}
             </S.Dialog>
         </S.Overlay>
        </Portal>
    )
}