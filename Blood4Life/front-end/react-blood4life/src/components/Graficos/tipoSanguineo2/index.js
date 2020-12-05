import React from 'react';
import * as S from './style'
import { Bar } from 'react-chartjs-2';

const state = {
	labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
		datasets: [{
			label: 'Tipos Sanguíneos',
			backgroundColor: [
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8"
			],
			borderColor: 'rgba(0,0,0,0)',
			borderWidth: 1,
			data: [
				Math.random(0, 1000) + 1,
				Math.random(0, 1000) + 1,
				Math.random(0, 1000) + 1,
				Math.random(0, 1000) + 1,
				Math.random(0, 1000) + 1,
				Math.random(0, 1000) + 1,
				Math.random(0, 1000) + 1,
				Math.random(0, 1000) + 1,
			],
		},
	]
}

const options = {
	
	scales: {
	  yAxes: [
		{
		  ticks: {
			beginAtZero: true,
			// max: 100,
			// min: 0,
			stepSize: 0.2
		  },
		  scaleLabel: {
			display: true,
			labelString: 'Mil litros'
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
	render() {
		return (
			<S.chartContainer>
				<Bar
					data={state}
					options={options}
				/>
			</S.chartContainer>
		);
	}
}