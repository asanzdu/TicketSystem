import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ onUserClick }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Lista de Usuarios</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Correo Electrónico</th>
                        <th className="p-2">Rol</th>
                        <th className="p-2">Permisos</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} onClick={() => onUserClick(user._id)}>
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.role}</td>
                            <td className="p-2">{user.permissions.join(', ')}</td>
                            <td className="p-2">
                                <button className="bg-[#2c9add] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#2c9add]">Editar</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;