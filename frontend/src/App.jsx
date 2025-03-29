import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import TicketsPage from './pages/TicketsPage';
import UsersPage from './pages/UsersPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/tickets" element={<TicketsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;