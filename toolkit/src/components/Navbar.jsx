import { useState } from 'react';
import { Calculator, FileText, Scale, DollarSign, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('calculator');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()

  const navItems = [
    { id: 'calculator', name: 'Calculator', icon: <Calculator size={20} /> },
    { id: 'notes', name: 'Notes', icon: <FileText size={20} /> },
    { id: 'unit', name: 'Unit Converter', icon: <Scale size={20} /> },
    { id: 'currency', name: 'Currency', icon: <DollarSign size={20} /> },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo / Brand name */}
          <div className="flex items-center">
            <span className="font-bold text-xl tracking-tight">ToolKit</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(`/${item.id}`)
                  setActiveTab(item.id)
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center `}
                
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center ${
                  activeTab === item.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Optional: Indicator for current active section
      <div className="bg-gray-900 text-center py-2 text-sm font-medium">
        {navItems.find(item => item.id === activeTab)?.name}
      </div> */}
    </nav>
  );
}