import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'

export default class Card extends React.Component {
    constructor(props){
		super(props);
		this.state = {
            id:'',
            nome: '',
            numero: {},
            endereco:'',
            rota:''
		}
    }	
    componentDidMount(){
        this.setState({id: this.props.id});
        this.setState({nome: this.props.nome});
        this.setState({numero: this.props.numero});
        this.setState({endereco: this.props.endereco});
        this.setState({rota: this.props.rota});
    }
    
    render(){
        return(
            <S.card> 
                <Link
                 style={{width:'100%', height:'100%',flexDirection:'column', display:'flex', textDecoration:'none', justifyContent:'space-around',alignItems:'center'}} 
                 to={{pathname: this.state.rota}}>
                    <S.cardIcon src={this.state.numero}/>
                    <S.cardTitle>{this.state.nome}</S.cardTitle>
                    <S.cardDescription>{this.state.endereco}</S.cardDescription>
                </Link>
            </S.card>
        )
    }
}