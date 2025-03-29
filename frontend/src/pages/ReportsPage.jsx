import React from 'react';
import ReportList from '../components/Reports/ReportList';

const ReportsPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#2c9add] p-6">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-4">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Reportes y Estadísticas</h1>
                <ReportList />
            </div>
        </div>
    );
};

export default ReportsPage;