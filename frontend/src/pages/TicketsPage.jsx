import React, { useState } from 'react';
import TicketList from '../components/Tickets/TicketList';
import TicketDetails from '../components/Tickets/TicketDetails';
import TicketForm from '../components/Tickets/TicketForm';

const TicketsPage = () => {
    const [selectedTicketId, setSelectedTicketId] = useState(null);

    const handleTicketClick = (ticketId) => {
        setSelectedTicketId(ticketId);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#2c9add] p-6">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-4">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Gestión de Tickets</h1>
                <TicketForm ticketId={selectedTicketId} />
                <TicketList onTicketClick={handleTicketClick} />
                {selectedTicketId && <TicketDetails ticketId={selectedTicketId} />}
            </div>
        </div>
    );
};

export default TicketsPage;