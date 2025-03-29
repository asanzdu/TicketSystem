import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError(null);

        try {
            // Simulación de llamada a la API (reemplaza con tu llamada real)
            setTimeout(() => {
                // Simulación de respuesta exitosa
                if (email) {
                    setMessage('Se ha enviado un correo de recuperación a su dirección.');
                } else {
                    setError('Por favor ingrese un correo electronico.');
                }
            }, 1000); // Simula 1 segundo de espera
            // En una implementación real, aquí harías la llamada a tu API
            // const response = await fetch('/api/forgot-password', { ... });
            // const data = await response.json();
            // if (response.ok) { setMessage(data.message); } else { setError(data.error); }
        } catch (err) {
            setError('Error de red. Inténtelo de nuevo.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#2c9add] p-6">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-10">
                <h2 className="text-3xl font-bold text-gray-700 mb-6">Recuperar Contraseña</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo Electronico</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add]"
                            id="email"
                            type="email"
                            placeholder="Ingrese su correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-[#2c9add] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#2c9add]"
                        type="submit"
                    >
                        Enviar Correo de Recuperación
                    </button>
                </form>

                {message && <p className="text-green-500 mt-4 text-center">{message}</p>}
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;