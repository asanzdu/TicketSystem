import React from 'react';
import SystemSettings from '../components/Settings/SystemSettings';
import Notifications from '../components/Settings/Notifications';
import Integrations from '../components/Settings/Integrations';

const SettingsPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-4">
                    <h1 className="text-3xl font-bold text-gray-700 mb-4">Configuración y Administración</h1>
                    <SystemSettings />
                    <Notifications />
                    <Integrations />
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;