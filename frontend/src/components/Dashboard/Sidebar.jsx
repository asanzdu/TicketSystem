import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-[#2c9add] text-white w-64 min-h-screen shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">Menú</h2>
            <ul>
                <li className="mb-2 border border-white-700 rounded-md">
                    <Link to="/dashboard" className="block p-2 hover:bg-blue-700 rounded-md">Inicio</Link>
                </li>
                <li className="mb-2 border border-white-700 rounded-md">
                    <Link to="/tickets" className="block p-2 hover:bg-blue-700 rounded-md">Tickets</Link>
                </li>
                <li className="mb-2 border border-white-700 rounded-md">
                    <Link to="/users" className="block p-2 hover:bg-blue-700 rounded-md">Usuarios</Link>
                </li>
                <li className="mb-2 border border-white-700 rounded-md">
                    <Link to="/reports" className="block p-2 hover:bg-blue-700 rounded-md">Reportes</Link>
                </li>
                <li className="mb-2 border border-white-700 rounded-md">
                    <Link to="/settings" className="block p-2 hover:bg-blue-700 rounded-md">Configuración</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;