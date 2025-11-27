import React from 'react';
import { CHURCH_NAME } from '../constants';
import { Bell } from 'lucide-react';

interface HeaderProps {
  title?: string;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, transparent = false }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${transparent ? 'bg-transparent text-white' : 'bg-white text-gray-900 shadow-sm border-b border-gray-100'}`}>
      <div className="flex items-center justify-between px-4 h-14 max-w-2xl mx-auto">
        <h1 className="font-bold text-lg tracking-tight truncate">
          {title}
        </h1>
        
        {/* <button className={`p-2 rounded-full ${transparent ? 'bg-white/20 hover:bg-white/30 backdrop-blur-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <Bell size={20} />
        </button>*/}
        
      </div>
    </header>
  );
};

export default Header;