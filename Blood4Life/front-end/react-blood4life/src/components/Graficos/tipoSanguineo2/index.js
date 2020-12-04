import React from 'react';
import * as S from './style'
import { Bar } from 'react-chartjs-2';

const state = {
	labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
	datasets: [
		{
			// label: 'Tipos Sanguíneos',
			backgroundColor: [
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8",
				"#6186c8"
				// "#FF0000",
				// "#FFDDDD",
				// "#00FF00",
				// "#DDFFDD",
				// "#0000FF",
				// "#DDDDFF",
				// "#FDDDFD",
				// "#F0F0F0",
			],
			borderColor: 'rgba(0,0,0,0)',
			borderWidth: 1,
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
	]
}
  

export default class TipoSanguineo extends React.Component {
	render() {
		return (
			// <S.chartContainer>
				<Bar
					data={state}
					options={{
						title: {
							display: true,
							text: 'Estoque de tipos sanguíneos',
							fontSize: 20,
							fontColor: "#6186c8"
						},
						legend: {
							display: false,
							position: "bottom",
						}
					}}
				/>
			// </S.chartContainer>
		);
	}
}