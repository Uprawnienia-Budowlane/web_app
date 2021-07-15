import React from 'react'
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['Sty', 'Lut', 'Mar', 'Marz', 'Kwie', 'Maj', 'Cze'],
    datasets: [
        {
            data: [0, 1, 1.5, 5, 7.5, 2.5, 10],
            fill: false,
            backgroundColor: 'rgb(37, 99, 235)',
            borderColor: 'rgba(37, 99, 235, 1)',
        },
    ],
};

const options = {
    layout: {
        padding: 10
    },
    elements: {
        point: {
            radius: 4,
            borderWidth: 1,
            borderColor: 'rgb(255,255,255)'
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    var label = context.dataset.label || '';
                    if (context.parsed.y !== null) {
                        label += (context.parsed.y);
                    }
                    return label;
                }
            }
        },
        legend: {
            display: false
        }
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: true,
                drawOnChartArea: true,
                drawTicks: true,
            }
        },
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ]
    }
};

class DesktopMainCharts extends React.Component {
    render(props) {
        return (
            <div>
                <Line data={data} options={options} height={400}/>
            </div>
        );
    }
}

export default DesktopMainCharts;