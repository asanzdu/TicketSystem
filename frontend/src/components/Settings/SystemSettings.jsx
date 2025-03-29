import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SystemSettings = () => {
    const [categories, setCategories] = useState([]);
    const [states, setStates] = useState([]);
    const [sla, setSla] = useState('');

    useEffect(() => {
        axios.get('/api/settings/system')
            .then(res => {
                setCategories(res.data.categories);
                setStates(res.data.states);
                setSla(res.data.sla);
            })
            .catch(err => console.error(err));
    }, []);

    const handleCategoryChange = (e, index) => {
        const newCategories = [...categories];
        newCategories[index] = e.target.value;
        setCategories(newCategories);
    };

    const handleStateChange = (e, index) => {
        const newStates = [...states];
        newStates[index] = e.target.value;
        setStates(newStates);
    };

    const handleSlaChange = (e) => {
        setSla(e.target.value);
    };

    const handleSave = () => {
        axios.post('/api/settings/system', { categories, states, sla })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Configuración del Sistema</h2>
            <div>
                <h3 className="text-lg font-semibold mb-2">Categorías de Tickets</h3>
                {categories.map((category, index) => (
                    <input key={index} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add] mb-2" type="text" value={category} onChange={(e) => handleCategoryChange(e, index)} />
                ))}
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Estados Personalizados</h3>
                {states.map((state, index) => (
                    <input key={index} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add] mb-2" type="text" value={state} onChange={(e) => handleStateChange(e, index)} />
                ))}
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">SLA (Acuerdo de Nivel de Servicio)</h3>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add] mb-2" type="text" value={sla} onChange={handleSlaChange} />
            </div>
            <button className="bg-[#2c9add] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#2c9add]" onClick={handleSave}>Guardar</button>
        </div>
    );
};

export default SystemSettings;