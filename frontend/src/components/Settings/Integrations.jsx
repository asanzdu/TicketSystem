import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Integrations = () => {
    const [clickupApiKey, setClickupApiKey] = useState('');
    const [externalApiUrl, setExternalApiUrl] = useState('');

    useEffect(() => {
        axios.get('/api/settings/integrations')
            .then(res => {
                setClickupApiKey(res.data.clickupApiKey);
                setExternalApiUrl(res.data.externalApiUrl);
            })
            .catch(err => console.error(err));
    }, []);

    const handleClickupApiKeyChange = (e) => {
        setClickupApiKey(e.target.value);
    };

    const handleExternalApiUrlChange = (e) => {
        setExternalApiUrl(e.target.value);
    };

    const handleSave = () => {
        axios.post('/api/settings/integrations', { clickupApiKey, externalApiUrl })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Configuración de Integraciones</h2>
            <div>
                <h3 className="text-lg font-semibold mb-2">API Key de ClickUp</h3>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add] mb-2" type="text" value={clickupApiKey} onChange={handleClickupApiKeyChange} />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">URL de API Externa</h3>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add] mb-2" type="text" value={externalApiUrl} onChange={handleExternalApiUrlChange} />
            </div>
            <button className="bg-[#2c9add] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#2c9add]" onClick={handleSave}>Guardar</button>
        </div>
    );
};

export default Integrations;