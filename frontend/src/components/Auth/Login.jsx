import React, { useState, useRef } from 'react';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setError('');
        console.log('Inicio de sesión:', { email, password });
        // inicio de sesión backend
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#2c9add] p-6">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl flex flex-col md:flex-row">
                {/* formulario */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-700 mb-6">Bienvenido 💻</h2>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo Electronico</label>
                            <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add]" id="email" type="email" placeholder="Ingrese su correo" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
                            <input ref={passwordRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2c9add]" id="password" type="password" placeholder="Ingrese su contraseña" />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <a className="text-sm text-[#2c9add] hover:text-blue-700" href="/forgot-password">¿Olvidó su contraseña?</a>
                        </div>
                        <button className="bg-[#2c9add] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#2c9add]" type="submit">Iniciar Sesion</button>
                    </form>
                </div>
                <div className=" md:block w-1/2 bg-[#2c9add] flex items-center justify-center p-6">
                    <img src="/images/inicio.png" alt="Login Illustration" className="w-full h-full object-cover rounded-r-lg" />
                </div>
            </div>
        </div>
    );
};

export default Login;
