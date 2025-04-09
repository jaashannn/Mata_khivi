import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Menu,
  X,
  Home,
  Users,
  Coffee,
  ShoppingBag,
  DollarSign,
  LogOut,
} from 'lucide-react';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="font-bold text-xl">Gurudwara Seva</span>
          </Link>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-orange-700 rounded"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 py-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/langar"
                  onClick={closeMenu}
                  className="flex items-center space-x-2 hover:text-orange-200"
                >
                  <Coffee className="h-5 w-5" />
                  <span>Langar</span>
                </Link>
                <Link
                  to="/cloth-donation"
                  onClick={closeMenu}
                  className="flex items-center space-x-2 hover:text-orange-200"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Cloth Donation</span>
                </Link>
                <Link
                  to="/donation"
                  onClick={closeMenu}
                  className="flex items-center space-x-2 hover:text-orange-200"
                >
                  <DollarSign className="h-5 w-5" />
                  <span>Donate</span>
                </Link>
                {user?.role === 'admin' && (
                  <Link
                    to="/admin"
                    onClick={closeMenu}
                    className="flex items-center space-x-2 hover:text-orange-200"
                  >
                    <Users className="h-5 w-5" />
                    <span>Admin</span>
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="flex items-center space-x-2 hover:text-orange-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="hover:text-orange-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="hover:text-orange-200"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
