import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/Header';
import Summary from '../components/Dashboard/Summary';
import Charts from '../components/Dashboard/Charts';

const DashboardPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <Header />
                <Summary />
                <Charts />
            </div>
        </div>
    );
};

export default DashboardPage;