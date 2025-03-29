import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

const Charts = () => {
    const barData = {
        labels: ['Abiertos', 'En progreso', 'Cerrados'],
        datasets: [
            {
                label: 'Tickets',
                data: [12, 19, 3],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Tickets creados',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const pieData = {
        labels: ['Baja', 'Media', 'Alta'],
        datasets: [
            {
                label: 'Prioridad',
                data: [30, 50, 20],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Estadísticas de Tickets',
            },
        },
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Gráficos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded p-4">
                    <Bar data={barData} options={options} />
                </div>
                <div className="bg-white shadow rounded p-4">
                    <Line data={lineData} options={options} />
                </div>
                <div className="bg-white shadow rounded p-4">
                    <Pie data={pieData} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Charts;