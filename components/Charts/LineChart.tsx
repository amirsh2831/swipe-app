// @ts-nocheck
'use clinet';
import React from 'react'
import Chart from 'chart.js';

import { useEffect } from 'react';


const LineChart = () => {
    useEffect(() => {
        const data = [
          { Day: 'SAT', Price: 10 },
          { Day: 'SUN', Price: 20 },
          { Day: 'MON', Price: 15 },
          { Day: 'TUE', Price: 25 },
          { Day: 'WED', Price: 22 },
          { Day: 'THU', Price: 10 },
          { Day: 'FRI', Price: 10 },
        ];
        var ctx = document.getElementById('chart').getContext('2d');
        var myChart = new Chart(
            ctx,
            {
                type: 'line',
                data: {
                    labels: data.map(row => row.Day),
                    datasets: [
                        {
                            label: 'Prices by day',
                            data: data.map(row => row.Price),
                            fill: false,
                            borderColor: "#be25c1",
                            borderWidth: 3,
                            tension: 0
                        }
                    ]
                },
                options: {
                    legend: {
                        position: "top",
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold",
                                beginAtZero: true,
                                padding: 20
                            },
                            gridLines: {
                                drawTicks: false,
                                display: false
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                zeroLineColor: "transparent"
                            },
                        }]
                    }
                }
            }
        );
    
    });
  return (
    <div className={`w-full h-full bg-white dark:bg-sec-dark rounded-md`}>
        <canvas id='chart' className='p-5'>

        </canvas>
    </div>
  )
}

export default LineChart