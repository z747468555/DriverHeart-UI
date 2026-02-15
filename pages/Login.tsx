import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center p-6 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-[#d8e0e1] rounded-full blur-[60px] opacity-60 z-0" />
      <div className="absolute -bottom-10 -right-10 w-[350px] h-[350px] bg-[#e3dcd1] rounded-full blur-[60px] opacity-60 z-0" />
      <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-[#c4ccce] rounded-full blur-[60px] opacity-60 z-0" />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <div className="w-28 h-28 rounded-full glass-card flex items-center justify-center shadow-lg mb-2 relative overflow-hidden group bg-gradient-to-br from-white/40 to-white/10">
            {/* Custom Steering Wheel with Heart SVG */}
            <svg 
              className="w-16 h-16 text-gray-700 dark:text-gray-200 drop-shadow-sm group-hover:scale-105 transition-transform duration-500" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Steering Wheel Ring */}
              <circle cx="12" cy="12" r="9" className="opacity-90" />
              
              {/* Spokes */}
              <path d="M12 21V16" strokeWidth="2" className="opacity-80" />
              <path d="M4.5 14L8.5 12" strokeWidth="2" className="opacity-80" />
              <path d="M19.5 14L15.5 12" strokeWidth="2" className="opacity-80" />
              
              {/* Center Heart */}
              <path 
                d="M12 8C13.1 6.8 15 6.8 16.2 8C17.4 9.2 17.4 11.2 16.2 12.4L12 16.6L7.8 12.4C6.6 11.2 6.6 9.2 7.8 8C9 6.8 10.9 6.8 12 8Z" 
                fill="#b89f7f" /* Accent Color */
                stroke="none"
                className="drop-shadow-md"
              />
            </svg>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 tracking-tight">
              DriverHeart <span className="text-lg font-light block mt-1 text-primary-dark dark:text-gray-400">驾心</span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-light">
              Monitor your drive, protect your heart.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <GlassCard className="w-full p-8 shadow-xl">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/connect'); }}>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-icons-round text-primary text-xl group-focus-within:text-accent transition-colors">person_outline</span>
              </div>
              <input 
                className="block w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border-0 ring-1 ring-primary/30 focus:ring-2 focus:ring-accent/50 rounded-full text-gray-700 dark:text-gray-200 placeholder-gray-400 text-sm transition-all shadow-sm backdrop-blur-sm focus:outline-none" 
                placeholder="Phone or Email" 
                type="text" 
              />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-icons-round text-primary text-xl group-focus-within:text-accent transition-colors">lock_outline</span>
              </div>
              <input 
                className="block w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border-0 ring-1 ring-primary/30 focus:ring-2 focus:ring-accent/50 rounded-full text-gray-700 dark:text-gray-200 placeholder-gray-400 text-sm transition-all shadow-sm backdrop-blur-sm focus:outline-none" 
                placeholder="Password" 
                type="password" 
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-primary hover:text-gray-600 dark:hover:text-gray-300">
                <span className="material-icons-round text-lg">visibility_off</span>
              </button>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-xs text-primary-dark hover:text-accent transition-colors font-medium">Forgot Password?</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-4 rounded-full shadow-lg shadow-accent/20 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center space-x-2"
            >
              <span>Login</span>
              <span className="material-icons-round text-sm">arrow_forward</span>
            </button>
          </form>

          <div className="mt-8 relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-light">Or continue with</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <div className="mt-6 flex justify-center space-x-6">
            <button className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-600 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              {/* Apple Icon */}
              <svg className="w-5 h-5 text-gray-700 dark:text-white fill-current" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.01 4.1-0.8 1.76.22 3.09 1 3.97 2.43-3.66 1.87-3.02 6.6 1.25 8.28-.73 1.6-1.74 3.16-3.26 4.67-.34.33-.67.65-1.14.88zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-600 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <span className="material-icons-round text-green-500 text-2xl">chat_bubble</span>
            </button>
          </div>
        </GlassCard>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Don't have an account? <a href="#" className="text-accent font-semibold hover:text-accent-hover transition-colors">Sign Up</a>
          </p>
          <a href="#" className="text-xs text-primary-dark hover:text-gray-800 dark:hover:text-white transition-colors border-b border-transparent hover:border-gray-400 pb-0.5">
            Continue as Guest
          </a>
        </div>
      </div>
      
      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
    </div>
  );
};

export default Login;