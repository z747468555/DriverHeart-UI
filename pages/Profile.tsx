import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col relative bg-morandi-bg dark:bg-background-dark overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="fixed -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none z-0"></div>
      <div className="fixed top-40 -left-20 w-72 h-72 bg-morandi-teal/10 rounded-full blur-3xl opacity-50 pointer-events-none z-0"></div>

      {/* Main Container (Mobile View) */}
      <div className="relative z-10 w-full flex flex-col pb-24 overflow-y-auto no-scrollbar flex-1">
        
        {/* Header Section */}
        <header className="px-6 py-6 flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            {/* Avatar with Glass Border */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-white to-primary/20 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-16 h-16 rounded-full p-1 bg-white/30 backdrop-blur-sm border border-white/50">
                <img 
                  alt="Portrait of Driver Zhang" 
                  className="w-full h-full object-cover rounded-full" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIBzGInmpNTuAkMN8xdL7TrTuBqJgGwxEeTDcYuA6WUTySdDpP5wwk_R9IbRZ20w0cCixGpfvODHXbWOzmr99fOLDs0xDLIZEGPvWaEgIGdo8qcrpGzLv5lqGWObuIkFeCuyTTvOHdN4eyn67KecEIsO9ohAhlCx04z5oTCn7u5sIOnjKirVKGOX5rYZXiU_p2TjW2yQxEnQ5jeSTIVthvWu9okLVQPi7F87Sqx67OR13p5clL92PKF-X4afTRwmH0aVz3sGZJ0p4"
                />
              </div>
            </div>
            
            {/* Name & Badge */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">Driver Zhang</h1>
              <div className="mt-1 flex items-center gap-1.5 px-2 py-0.5 bg-primary/20 rounded-full w-max backdrop-blur-xs border border-white/20">
                <span className="material-icons-outlined text-[14px] text-primary-dark dark:text-gray-200">verified</span>
                <span className="text-xs font-medium text-primary-dark dark:text-gray-200">Verified Driver</span>
              </div>
            </div>
          </div>
          
          {/* Notification Icon */}
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-white/80 transition-colors">
            <span className="material-icons-outlined text-gray-600 dark:text-gray-300">notifications_none</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-400 rounded-full border border-white dark:border-gray-800"></span>
          </button>
        </header>

        {/* Stats Dashboard */}
        <section className="px-6 mt-2">
          <div className="grid grid-cols-3 gap-3">
            {/* Stat Card 1 */}
            <GlassCard className="p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Drive Time</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">128</span>
                <span className="text-xs text-gray-400">h</span>
              </div>
            </GlassCard>
            
            {/* Stat Card 2 */}
            <GlassCard className="p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Health Score</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">92</span>
                <span className="text-xs text-gray-400">/100</span>
              </div>
            </GlassCard>
            
            {/* Stat Card 3 */}
            <GlassCard className="p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Device</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-morandi-green animate-pulse"></span>
                <span className="text-sm font-semibold text-morandi-green">Connected</span>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Banner / Action */}
        <section className="px-6 mt-6">
          <GlassCard className="rounded-2xl p-5 relative overflow-hidden group hover:shadow-lg transition-all cursor-pointer">
            {/* Background Gradient */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Fatigue Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your attention levels are optimal today.</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white transition-all duration-300">
                <span className="material-icons-outlined">arrow_forward</span>
              </button>
            </div>
          </GlassCard>
        </section>

        {/* Settings List */}
        <section className="px-6 mt-6 flex-1">
          <div className="flex flex-col gap-4">
            {/* Emergency Contacts */}
            <button className="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-transform hover:bg-white/80 dark:hover:bg-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-soft-pink/20 flex items-center justify-center text-soft-pink-dark">
                  <span className="material-icons-outlined">sos</span>
                </div>
                <div className="text-left">
                  <h4 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-soft-pink-dark transition-colors">Emergency Contacts</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 contacts set</p>
                </div>
              </div>
              <span className="material-icons-outlined text-gray-400 text-xl">chevron_right</span>
            </button>
            
            {/* Health Reports */}
            <button 
                onClick={() => navigate('/analysis')}
                className="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-transform hover:bg-white/80 dark:hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-dark">
                  <span className="material-icons-outlined">analytics</span>
                </div>
                <div className="text-left">
                  <h4 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors">Health Reports</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Weekly analysis</p>
                </div>
              </div>
              <span className="material-icons-outlined text-gray-400 text-xl">chevron_right</span>
            </button>
            
            {/* Device Settings */}
            <button 
                onClick={() => navigate('/connect')}
                className="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-transform hover:bg-white/80 dark:hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-dark">
                  <span className="material-icons-outlined">watch</span>
                </div>
                <div className="text-left">
                  <h4 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors">Device Settings</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Jiaxin Band 4</p>
                </div>
              </div>
              <span className="material-icons-outlined text-gray-400 text-xl">chevron_right</span>
            </button>
            
            {/* System Preferences */}
            <button className="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-transform hover:bg-white/80 dark:hover:bg-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
                  <span className="material-icons-outlined">settings</span>
                </div>
                <div className="text-left">
                  <h4 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors">System Preferences</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Notifications, Sounds</p>
                </div>
              </div>
              <span className="material-icons-outlined text-gray-400 text-xl">chevron_right</span>
            </button>

             {/* Logout */}
             <button 
                onClick={() => navigate('/')}
                className="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-transform hover:bg-red-50 dark:hover:bg-red-900/10 mt-2 mb-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                  <span className="material-icons-outlined">logout</span>
                </div>
                <div className="text-left">
                  <h4 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-red-500 transition-colors">Log Out</h4>
                </div>
              </div>
            </button>
          </div>
        </section>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Profile;