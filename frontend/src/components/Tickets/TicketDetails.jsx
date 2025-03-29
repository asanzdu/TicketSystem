import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TicketDetails = ({ ticketId }) => {
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        axios.get(`/api/tickets/${ticketId}`)
            .then(res => setTicket(res.data))
            .catch(err => console.error(err));
    }, [ticketId]);

    if (!ticket) return <div>Cargando...</div>;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Detalles del Ticket</h2>
            <p>Asunto: {ticket.title}</p>
            <h3>Historial de Cambios</h3>
            <h3>Comentarios</h3>
        </div>
    );
};

export default TicketDetails;