import React, { Component } from 'react';
import Chart from "chart.js";
import * as S from './style.js';

export default class TipoSanguineo extends Component {
    
    chartRef = React.createRef();
    
    
    dataAleatoria(start, end) {
        var date = new Date(+start + Math.random() * (end - start));
        return date;
    }

    corAleatoria = () => {
        const color = "6186C8"
        // const randomColor = Math.floor(Math.random()*16777215).toString(16);
        // return "#" + randomColor;
        return "#" + color;
    }

    async componentDidMount() {

        var processos = [];

        const myChartRef = this.chartRef.current.getContext('2d');
        
    processos = [
        {
            data: Math.random(0, 100) + 1,
            tipoSanguineo: "A+",
        },
        {
            data: Math.random(0, 100) + 1,
            tipoSanguineo: "A-",
        },
        {
            data: Math.random(0, 100) + 1,
            tipoSanguineo: "B+",
        },
        {
            data: Math.random(0, 100) + 1,
            tipoSanguineo: "B-",
        },
        {
            data: Math.random(0, 100) + 1,
            tipoSanguineo: "AB+",
        },
        {
            data: Math.random(0, 100) + 1,
            tipoSanguineo: "AB-",
        },
        {
            data: Math.random(0, 100) + 1,
            tipoSanguineo: "O-",
        },
        {
            data: Math.random(0, 100) + 1,
            tipoSanguineo: "O+",
        }
    ];

    let tipos = [];
    let datas = [];
    let valores1 = [];
    let valores2 = [];
    let valores3 = [];
    let valores4 = [];
    let valores5 = [];
    let valores6 = [];
    let valores7 = [];
    let valores8 = [];
    let cores = [];
    let bordaCores = [];
    let hoverBordaCores = [];
    for(var i =0; i < processos.length; i++) {
        tipos.push(processos[i].tipoSanguineo);
        datas.push(processos[i].data);
        cores.push(this.corAleatoria());
        bordaCores.push(this.corAleatoria());
        hoverBordaCores.push(this.corAleatoria());
        valores1.push(Math.random(0, 100) + 1)
        valores2.push(Math.random(0, 100) + 1)
        valores3.push(Math.random(0, 100) + 1)
        valores4.push(Math.random(0, 100) + 1)
        valores5.push(Math.random(0, 100) + 1)
        valores6.push(Math.random(0, 100) + 1)
        valores7.push(Math.random(0, 100) + 1)
        valores8.push(Math.random(0, 100) + 1)
    }


        new Chart(myChartRef, {
            type: 'line',
            data: {
                // labels: [processos[0][0].nome, processos[0][1].nome, processos[0][2].nome],
                // labels: [processos[0].nome, processos[1].nome, processos[2].nome],
                labels: [
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                    // this.dataAleatoria(new Date(2000, 1, 1), new Date(2020, 12, 31)),
                ],
                datasets: [
                    {
                        label: 'Últimas doações',
                        data: valores1,
                        
                        pointBackgroundColor: cores,
                        pointBorderColor: bordaCores,
                        pointRadius: 7,
                        pointHitRadius: 20,
                        pointHoverRadius: 20,
                        pointHoverBorderWidth: 1,
                    
                        // backgroundColor: cores,      // doughnut
                        // borderColor: bordaCores,     // doughnut

                    }
                ]
            },
            options: {
                layout: {
                    padding: {}
                },
                legend: {
                    display: true,
                    position: 'left',
                    align: 'start',
                    labels: {
                        fontColor: '#FF0000',
                    },
                    onHover: {
                        fontColor: '#000000',
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            // min: 0,
                            // max: 65,
                            // stepSize: 1
                        }, 
                        xAxes: [{
                            type: 'time',
                            time: {
                                unit: 'month',
                            }
                        }]
                    }]
                }
            }

        });

    }
    render() {
        return (
            <>
                <S.chart>
                    <canvas style={{width: "100%", height: "100%"}}
                        id="myChart"
                        ref={this.chartRef}
                    />
                </S.chart>
            </>
        )
    }
}