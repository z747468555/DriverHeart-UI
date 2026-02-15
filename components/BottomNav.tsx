import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GlassCard from './GlassCard';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <GlassCard className="px-2 py-2 !rounded-full flex items-center gap-1 shadow-lg bg-white/80 dark:bg-black/40">
          <button 
            onClick={() => navigate('/dashboard')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive('/dashboard') ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'}`}
          >
            <span className="material-icons text-2xl">dashboard</span>
          </button>
          
          <button 
            onClick={() => navigate('/trends')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive('/trends') ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'}`}
          >
            <span className="material-icons text-2xl">analytics</span>
          </button>
          
          <button 
             onClick={() => navigate('/analysis')}
             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive('/analysis') ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'}`}
          >
            <div className="relative">
              <span className="material-icons text-2xl">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full border border-white dark:border-gray-800"></span>
            </div>
          </button>
          
          <button 
            onClick={() => navigate('/profile')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive('/profile') ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'}`}
          >
            <span className="material-icons text-2xl">person</span>
          </button>
        </GlassCard>
      </div>
    </div>
  );
};

export default BottomNav;