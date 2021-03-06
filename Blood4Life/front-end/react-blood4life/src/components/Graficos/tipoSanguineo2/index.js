import React from 'react';
import * as S from './style'
import { Bar } from 'react-chartjs-2';
// import api from '../../../services/api';

const options = {
	
	scales: {
	  yAxes: [
		{
		  ticks: {
			beginAtZero: true,
			// max: 100,
			// min: 0,
			stepSize: 0.5	
		  },
		  scaleLabel: {
			display: true,
			labelString: 'Litros'
		  }
		},
	  ],
	},
	
	title: {
		display: true,
		text: 'Estoque de tipos sanguíneos',
		fontSize: 20,
		fontColor: "#6186c8"
	},
	legend: {
		display: false,
		usePointStyle: true,
		position: "top",
	}
	
  }
  
export default class TipoSanguineo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			quantidade: []
		}
	}	
	componentDidMount(){
		// this.bancoDeSangue();
	this.setState({quantidade: [...this.props.dados]})

	}	
	// bancoDeSangue(){
	// 	api.get('/tipos').then(response =>{
	// 		let conteudo = response.data
	// 		let conteudoNumeros = []
	// 		conteudo.forEach(a=>{
	// 			conteudoNumeros.push(a.qtdAtual)
	// 		})
	// 		this.setState({quantidade: conteudoNumeros})
	// 	}).catch(error=>{		
	// 		console.log('erro')
	// 	})
	// }

	render() {
		return (
			<S.chartContainer>
				<Bar
					data={{labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
					datasets: [{
						label: 'Tipos Sanguíneos',
						backgroundColor: [
							`${true ? '#7DABFA': '#DFB7B4'}`,
							`#7DABFA`,
							`#7DABFA`,
							`#7DABFA`,
							`#7DABFA`,
							`#7DABFA`,
							`#7DABFA`,
							`#7DABFA`
						],
						borderColor: 'rgba(0,0,0,0)',
						borderWidth: 1,
						data: [...this.state.quantidade]
					},
				]}}
					options={options}
				/>
				<div></div>
			</S.chartContainer>
		);
	}
}