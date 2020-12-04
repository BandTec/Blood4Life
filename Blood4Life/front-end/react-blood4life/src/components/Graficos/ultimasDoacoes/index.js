import React from 'react';
import * as S from './style'
import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';


const state = {
	labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
	datasets: [
		{
			label: "none",
			backgroundColor: [
				"#FF0000",
				"#FFDDDD",
				"#00FF00",
				"#DDFFDD",
				"#0000FF",
				"#DDDDFF",
				"#FDDDFD",
				"#F0F0F0",
			],
			borderColor: 'rgb(97, 134, 200)',
			borderWidth: 2.5,
			backgroundColor: 'rgb(0,0,0,0)',
			data: [
				Math.random(0, 100) + 1,
				Math.random(0, 100) + 1,
				Math.random(0, 100) + 1,
				Math.random(0, 100) + 1,
				Math.random(0, 100) + 1,	
				Math.random(0, 100) + 1,
				Math.random(0, 100) + 1,
				Math.random(0, 100) + 1,	
			]
		}
	],

}


export default class UltimasDoacoes extends React.Component {
	render() {
		return (
			// <S.chartContainer>
				<Line
					data={state}
					options={{
						title: {
							display: true,
							text: 'Média de doadores mensais',
							fontSize: 20,
							fontColor: "#6186c8"
						},
						legend: {
							display: false,
							position: 'bottom',	
						},
						labels:{
							position: 'left'
						},
						responsive: true,
						onResize: () => {
							// window.alert("teste")
						}
					}}
				/>
			// </S.chartContainer>
		);
	}
}