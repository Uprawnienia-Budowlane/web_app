import React from 'react'
import {Bar, Line} from 'react-chartjs-2';

const data = [
    {
        labels: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
        datasets: [
            {
                data: [15, 20, 35, 15, 35, 75, 80],
                fill: false,
                backgroundColor: 'rgb(59, 130, 246)',
                borderColor: 'rgb(59, 130, 246)',
                yAxisID: 'yAxis'
            },
        ],
    }, {
        labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'],
        datasets: [
            {
                data: [0, 10, 15, 50, 75, 55, 100],
                fill: false,
                backgroundColor: 'rgb(59, 130, 246)',
                borderColor: 'rgb(59, 130, 246)',
                yAxisID: 'yAxis'
            },
        ],
    }, {
        labels: ['Sty', 'Lut', 'Mar', 'Marz', 'Kwie', 'Maj', 'Cze'],
        datasets: [
            {
                data: [0, 10, 15, 50, 75, 55, 100],
                fill: false,
                backgroundColor: 'rgb(59, 130, 246)',
                borderColor: 'rgb(59, 130, 246)',
                yAxisID: 'yAxis'
            },
        ],
    }
];

const options = {
    layout: {
        padding: 10
    },
    elements: {
        point: {
            radius: 4,
            borderWidth: 5,
            borderColor: 'rgb(255, 255, 255)'
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: (context) => {
                    let label = context.dataset.label || '';
                    if (context.parsed.y !== null) {
                        label += (context.parsed.y) + '%';
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
        yAxis: {
            ticks: {
                beginAtZero: true,
                callback: v => v + '%',
                min: 100
            },
        },
    }
};

const verticalLinePlugin = {
    beforeDatasetsDraw: (chart, easing) => {
        const context = chart.ctx;

        context.beginPath();
        context.strokeStyle = 'rgba(154,232,118,0.55)';
        context.moveTo(50, 98);
        context.lineTo(chart.width - 18, 98);
        context.stroke();
    }
};

const MainCharts = props => {
    if (props.bar) {
        return (
            <div className="pt-4 mobile-stats__">
                <Bar data={data[props.period]} options={options} height={400} plugins={[verticalLinePlugin]}/>
            </div>
        );
    } else {
        return (
            <div className="pt-4 mobile-stats__">
                <Line data={data[props.period]} options={options} height={400} plugins={[verticalLinePlugin]}/>
            </div>
        );
    }
}

export default MainCharts;