import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ReportList = () => {
    const [reportData, setReportData] = useState(null);

    useEffect(() => {
        const fetchReportData = async () => {
            try {
                const res = await axios.get('/api/reports');
                setReportData(res.data);
            } catch (error) {
                console.error('Error fetching report data:', error);
            }
        };
        fetchReportData();
    }, []);

    if (!reportData) return <div className="p-4">Cargando...</div>;

    const data = {
        labels: ['Abiertos', 'Cerrados', 'En Progreso'],
        datasets: [
            {
                label: 'Tickets por estado',
                data: [reportData.open, reportData.closed, reportData.inProgress],
                backgroundColor: ['#2c9add', '#4CAF50', '#FFC107'], 
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Reportes y Estadísticas</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ReportList;