import React from 'react';
import * as S from './style'
// import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

const state = {
	labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto','Setembo','Outubro','Dezembro'],
	datasets: [{
			label: "A+",
			// fill: true,
			borderColor: '#5580CB',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			data: [
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),	
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1)	
			]
			},
			{
			label: "A-",
			borderColor: '#5580CB',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			// fill: true,
			data: [
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),	
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1)	
			]
			},
			{
			label: "B+",
			borderColor: '#5580CB',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			// fill: true,
			data: [
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),	
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1)	
			]
			},
			{
			label: "B-",
			borderColor: '#5580CB',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			// fill: true,
			data: [
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),	
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1)	
			]
			},
			{
			label: "AB+",
			borderColor: '#5580CB',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			// fill: true,
			data: [
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),	
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1)	
			]
			},
			{
			label: "AB-",
			borderColor: '#5580CB',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			// fill: true,
			data: [
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),	
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1)	
			]
			},
			{
			label: "O+",
			borderColor: '#5580CB',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			// fill: true,
			data: [
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),	
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1)	
			]
			},
			{
			label: "O-",
			borderColor: '#5580CB',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			// fill: true,
			data: [
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),	
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1),
				Math.random(1, 10000 +1)	
			]
			},


	],

}

const options = {
	scales: {
		yAxes: [{
		  ticks: {
			beginAtZero: false
		  },
		  scaleLabel: {
			display: true,
			labelString: 'Milhões'
		  }
		}]
	  },

	title: {
		display: true,
		text: 'Média de doadores mensais',
		fontSize: 20,
		fontColor: "#6186c8"
	},
	legend: {
		display: true,
		// usePointStyle: true,
		position: "top",
	},
	// labels:{
	// 	position: 'left'
	// },
	// responsive: true,
  }


export default class UltimasDoacoes extends React.Component {
	render() {
		return (
			<S.chartContainer>
				<Line
					data={state}
					options={options}
				/>
			</S.chartContainer>
		);
	}
}