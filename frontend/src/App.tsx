import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminDashboard from './pages/admin/Dashboard';
import LangarManagement from './pages/langar/LangarManagement';
import ClothDonation from './pages/cloth/ClothDonation';
import DonationSystem from './pages/donation/DonationSystem';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute role="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/langar/*"
                element={
                  <ProtectedRoute>
                    <LangarManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cloth-donation/*"
                element={
                  <ProtectedRoute>
                    <ClothDonation />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/donation/*"
                element={
                  <ProtectedRoute>
                    <DonationSystem />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;