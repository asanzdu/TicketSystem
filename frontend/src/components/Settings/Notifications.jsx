import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
    const [slackWebhook, setSlackWebhook] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');

    useEffect(() => {
        axios.get('/api/settings/notifications')
            .then(res => {
                setSlackWebhook(res.data.slackWebhook);
                setWhatsappNumber(res.data.whatsappNumber);
            })
            .catch(err => console.error(err));
    }, []);

    const handleSlackWebhookChange = (e) => {
        setSlackWebhook(e.target.value);
    };

    const handleWhatsappNumberChange = (e) => {
        setWhatsappNumber(e.target.value);
    };

    const handleSave = () => {
        axios.post('/api/settings/notifications', { slackWebhook, whatsappNumber })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Configuración de Notificaciones</h2>
            <div>
                <h3 className="text-lg font-semibold mb-2">Webhook de Slack</h3>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add] mb-2" type="text" value={slackWebhook} onChange={handleSlackWebhookChange} />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Número de WhatsApp</h3>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add] mb-2" type="text" value={whatsappNumber} onChange={handleWhatsappNumberChange} />
            </div>
            <button className="bg-[#2c9add] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#2c9add]" onClick={handleSave}>Guardar</button>
        </div>
    );
};

export default Notifications;