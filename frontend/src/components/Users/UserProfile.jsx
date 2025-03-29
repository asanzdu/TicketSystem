import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [notifications, setNotifications] = useState(false);

    useEffect(() => {
        axios.get(`/api/users/${userId}`)
            .then(res => setUser(res.data))
            .catch(err => console.error(err));
    }, [userId]);

    useEffect(() => {
        if (user) {
            setNotifications(user.notifications);
        }
    }, [user]);

    const handleNotificationsChange = (e) => {
        setNotifications(e.target.checked);
        // Lógica para guardar la configuración de notificaciones en el backend
    };

    if (!user) return <div className="p-4">Cargando...</div>;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Perfil de Usuario</h2>
            <p className="mb-2">Nombre: {user.name}</p>
            <p className="mb-2">Correo Electrónico: {user.email}</p>
            <div className="mb-2">
                <label className="flex items-center">
                    <input type="checkbox" checked={notifications} onChange={handleNotificationsChange} className="mr-2" />
                    Notificaciones
                </label>
            </div>
        </div>
    );
};

export default UserProfile;