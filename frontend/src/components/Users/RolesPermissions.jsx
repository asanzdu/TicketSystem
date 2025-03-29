import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RolesPermissions = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);

    useEffect(() => {
        axios.get(`/api/users/${userId}`)
            .then(res => setUser(res.data))
            .catch(err => console.error(err));

        axios.get('/api/roles')
            .then(res => setRoles(res.data))
            .catch(err => console.error(err));

        axios.get('/api/permissions')
            .then(res => setPermissions(res.data))
            .catch(err => console.error(err));
    }, [userId]);

    if (!user) return <div className="p-4">Cargando...</div>;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Roles y Permisos</h2>
            <div>
                <h3>Roles</h3>
                {roles.map(role => (
                    <label key={role._id} className="block">
                        <input type="checkbox" checked={user.roles.includes(role._id)} />
                        {role.name}
                    </label>
                ))}
            </div>
            <div>
                <h3>Permisos</h3>
                {permissions.map(permission => (
                    <label key={permission} className="block">
                        <input type="checkbox" checked={user.permissions.includes(permission)} />
                        {permission}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RolesPermissions;