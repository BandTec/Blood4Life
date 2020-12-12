import React from 'react';
import * as S from './style'

export default class Card extends React.Component {
    constructor(props){
		super(props);
		this.state = {
            nome: '',
            numero:'',
            endereco:''
		}
    }	
    componentDidMount(){
        this.setState({nome: this.props.nome});
        this.setState({numero: this.props.numero});
        this.setState({endereco: this.props.endereco});
    }
    
    render(){
        return(
            <S.card>
                <S.cardTitle>{this.state.nome}</S.cardTitle>
                <S.cardValue>{this.state.numero}</S.cardValue>
                <S.cardDescription>{this.state.endereco}</S.cardDescription>
            </S.card>
        )
    }
}