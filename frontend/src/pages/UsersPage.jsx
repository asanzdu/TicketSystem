import React, { useState } from 'react';
import UserList from '../components/Users/UserList';
import UserProfile from '../components/Users/UserProfile';
import RolesPermissions from '../components/Users/RolesPermissions';

const UsersPage = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#2c9add] p-6">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-4">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Gestión de Usuarios y Roles</h1>
                <UserList onUserClick={(userId) => setSelectedUserId(userId)} />
                {selectedUserId && <UserProfile userId={selectedUserId} />}
                {selectedUserId && <RolesPermissions userId={selectedUserId} />}
            </div>
        </div>
    );
};

export default UsersPage;