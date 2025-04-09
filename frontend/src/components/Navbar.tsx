import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, Home, Users, Coffee, ShoppingBag, DollarSign, LogOut } from 'lucide-react';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="font-bold text-xl">Gurudwara Seva</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/langar" className="flex items-center space-x-1 hover:text-orange-200">
                  <Coffee className="h-5 w-5" />
                  <span>Langar</span>
                </Link>
                <Link to="/cloth-donation" className="flex items-center space-x-1 hover:text-orange-200">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Cloth Donation</span>
                </Link>
                <Link to="/donation" className="flex items-center space-x-1 hover:text-orange-200">
                  <DollarSign className="h-5 w-5" />
                  <span>Donate</span>
                </Link>
                {user?.role === 'admin' && (
                  <Link to="/admin" className="flex items-center space-x-1 hover:text-orange-200">
                    <Users className="h-5 w-5" />
                    <span>Admin</span>
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-orange-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-orange-200">Login</Link>
                <Link to="/register" className="hover:text-orange-200">Register</Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button className="p-2 hover:bg-orange-700 rounded">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}