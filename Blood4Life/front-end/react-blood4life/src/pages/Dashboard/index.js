import React, { useEffect, useState } from "react";
import * as S from './style';
import NavBar from "../../components/NavBar";
// import NavBarSpacing from "../../components/NavBarSpacing";
import MenuLateral from "../../components/MenuLateral";
// import UltimasDoacoes from "../../components/Graficos/ultimasDoacoes";
// import TipoSanguineo from "../../components/Graficos/tipoSanguineo";
import TipoSanguineo2 from "../../components/Graficos/tipoSanguineo2";
import api from '../../services/api.js';
import BodyNavMenu from "../../components/BodyNavMenu";

export default function Dashboard(props) {

    const [mostrarMenuLateral, setMostrarMenuLateral] = useState(false);

    const [media, setMedia] = useState();
    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [critico, setCritico] = useState();
    const [litros,setLitros] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [render, setRender] = useState(false);


    const onChildClicked = () => {
        setMostrarMenuLateral(!mostrarMenuLateral);
    }

    let id = props.match.params.id;

    useEffect(()=> {
        api.get('/tipos').then(response =>{     
        let dados = response.data
        let litrosSangue = []
        let tipo = []

        dados.forEach(a => {  
            if(a.hospital.id == id){   
                litrosSangue.push(a.qtdAtual)
                console.log("AQUI Ó!: ", litrosSangue)
                if(a.qtdAtual <= 5.0){
                tipo.push(a.tipoSangue)
                }
            }
            

        })
        let soma = 0.0;
        let contador = 0;
        
        litrosSangue.forEach(a=>{
            soma +=a
            if(a <= 5){
                contador++; 
            }
        })
        console.log("TIPOS SANGUÍNUEOS: ",tipo)
            setLitros(litrosSangue)
            setCritico(contador)
            let media = (soma/8);
            setMedia(media.toFixed(2));
            let max = Math.max(...litrosSangue)
            setMax(max.toFixed(2))
            let min = Math.min(...litrosSangue)
            setMin(min.toFixed(2))
            setTipo(tipo);
            setRender(true)

    }).catch(error=>{
        console.log('erro')
    })},[])

    let color = ""
    let color2 = ""
    let color3 = ""
    let color4 = ""

    media >= 9.0
        ? color = "#7DABFA"
        : media >= 5.0 && media < 9.0?color = "#F4B92D":color = "#AA372E"

    critico > 5? color2 ="#AA372E":
    critico <= 5 && critico > 2?color2 = "#F4B92D":color2 = "#7DABFA"
 
    max >= 9.0? color3 = "#7DABFA":
    max >= 5.0 && max < 9.0?color3 = "#F4B92D":color3 = "#AA372E"

    min >= 9.0? color4 = "#7DABFA":
    min >= 5.0 && min < 9.0?color4 = "#F4B92D":color4 = "#AA372E"

    return (
        <>

            <BodyNavMenu render={
                    <S.lowerSection>
                        <S.leftLowerCard>   
                           {render && <TipoSanguineo2 dados={litros} />}
                        </S.leftLowerCard>

                        <S.rightLowerCard>
                                {/* <TipoSanguineo /> */}
                                <S.rightLowerUp>
                                <S.upperCard backgroundC={color}>
                                    <S.upperCardTitle>Média</S.upperCardTitle>
                                    <S.upperCardValue>{media}</S.upperCardValue>
                                </S.upperCard>
                                <S.upperCard backgroundC={color2}>
                                    <S.upperCardTitle>Crítico Total</S.upperCardTitle>
                                <S.upperCardValue>{tipo}</S.upperCardValue>
                                </S.upperCard>
                                </S.rightLowerUp>
                               
                               <S.rightLowerBottom>
                                <S.upperCard backgroundC={color3}>
                                    <S.upperCardTitle>Maior quantia</S.upperCardTitle>
                                <S.upperCardValue>{max}</S.upperCardValue>
                                </S.upperCard>
                                <S.upperCard backgroundC={color4}>
                                    <S.upperCardTitle>Menor quantia</S.upperCardTitle>
                                <S.upperCardValue>{min}</S.upperCardValue>
                                </S.upperCard>
                               </S.rightLowerBottom>
                            {/*UltimasDoacoes /*/}
                        </S.rightLowerCard>
                    
                    </S.lowerSection>
                }/>
        </>
    );
}
