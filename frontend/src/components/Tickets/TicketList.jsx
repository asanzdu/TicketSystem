import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TicketList = ({ onTicketClick }) => {
    const [tickets, setTickets] = useState([]);
    const [filters, setFilters] = useState({
        status: '',
        priority: '',
        assignedTo: '',
        date: '',
    });

    useEffect(() => {
        axios.get('/api/tickets', { params: filters })
            .then(res => setTickets(res.data))
            .catch(err => console.error(err));
    }, [filters]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Lista de Tickets</h2>
            <div className="mb-4">
                <select name="status" onChange={handleFilterChange}>
                    <option value="">Estado</option>
                    <option value="open">Abierto</option>
                    <option value="in progress">En progreso</option>
                    <option value="closed">Cerrado</option>
                </select>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Asunto</th>
                        <th>Estado</th>
                        <th>Prioridad</th>
                        <th>Asignado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket._id} onClick={() => onTicketClick(ticket._id)}>
                            <td>{ticket.title}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.assignedTo}</td>
                            <td>{ticket.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketList;