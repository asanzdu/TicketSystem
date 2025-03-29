import React from 'react';

const Summary = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="bg-[#2c9add] shadow-lg rounded-lg p-4 text-white">
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Tickets Abiertos</h3>
                <p className="text-2xl">10</p>
            </div>
            <div className="bg-[#2c9add] shadow-lg rounded-lg p-4 text-white">
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Tickets en Progreso</h3>
                <p className="text-2xl">5</p>
            </div>
            <div className="bg-[#2c9add] shadow-lg rounded-lg p-4 text-white">
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Tickets Cerrados</h3>
                <p className="text-2xl">20</p>
            </div>
        </div>
    );
};

export default Summary;