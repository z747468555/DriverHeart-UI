import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const ConnectDevice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#f4f6f7] dark:bg-slate-900 relative">
      {/* Status Bar Mock */}
      <div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20">
        <span className="text-sm font-semibold text-slate-800 dark:text-white">9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-icons text-slate-800 dark:text-white text-sm">signal_cellular_alt</span>
          <span className="material-icons text-slate-800 dark:text-white text-sm">wifi</span>
          <span className="material-icons text-slate-800 dark:text-white text-sm">battery_full</span>
        </div>
      </div>

      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between z-20">
        <button onClick={() => navigate('/')} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-600 hover:bg-white/80 transition-colors">
          <span className="material-icons">chevron_left</span>
        </button>
        <h1 className="text-lg font-semibold text-slate-800 dark:text-white tracking-wide">Connect Device</h1>
        <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-600 hover:bg-white/80 transition-colors">
          <span className="material-icons text-xl">help_outline</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center relative w-full px-6 pt-4 pb-8 overflow-y-auto no-scrollbar">
        {/* Radar Animation */}
        <div className="relative w-full flex-1 min-h-[300px] flex items-center justify-center mb-8">
          <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-60 dark:opacity-20 animate-pulse"></div>
          <div className="absolute w-56 h-56 rounded-full border border-primary/20 pulse-ring" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-56 h-56 rounded-full border border-primary/20 pulse-ring" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-56 h-56 rounded-full border border-primary/20 pulse-ring" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 w-40 h-40 glass-card !rounded-full flex flex-col items-center justify-center animate-pulse bg-white/40 dark:bg-white/5 border border-white/60">
            <span className="material-icons text-5xl text-primary drop-shadow-sm mb-2">bluetooth_searching</span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Scanning</span>
          </div>
        </div>

        {/* Device List */}
        <div className="w-full space-y-4 z-10">
          <div className="flex justify-between items-end px-2 mb-2">
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Available Devices</h2>
            <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
          </div>

          {/* Device 1 */}
          <GlassCard className="!rounded-full p-1.5 flex items-center justify-between shadow-sm hover:shadow-md transition-all bg-white/60 dark:bg-slate-800/60">
            <div className="flex items-center gap-4 pl-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-inner">
                <span className="material-icons text-primary text-xl">watch</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-800 dark:text-white text-base leading-tight">Driver Band-01</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-xs text-primary font-medium">Strong Signal</span>
                  <span className="material-icons text-[10px] text-primary">signal_cellular_4_bar</span>
                </div>
              </div>
            </div>
            <button onClick={() => navigate('/dashboard')} className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/30 transition-all active:scale-95">
              Connect
            </button>
          </GlassCard>

           {/* Device 2 */}
           <GlassCard className="!rounded-full p-1.5 flex items-center justify-between shadow-sm hover:shadow-md transition-all bg-white/40 dark:bg-slate-800/40">
            <div className="flex items-center gap-4 pl-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-inner opacity-80">
                <span className="material-icons text-slate-400 text-xl">favorite</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-700 dark:text-slate-200 text-base leading-tight">Jiaxin Heart Monitor</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-xs text-slate-400 font-medium">Medium Signal</span>
                  <span className="material-icons text-[10px] text-slate-400">signal_cellular_3_bar</span>
                </div>
              </div>
            </div>
            <button className="bg-white hover:bg-slate-50 text-primary border border-primary/30 px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all active:scale-95">
              Connect
            </button>
          </GlassCard>
          
           {/* Device 3 */}
           <GlassCard className="!rounded-full p-1.5 flex items-center justify-between shadow-sm hover:shadow-md transition-all bg-white/30 dark:bg-slate-800/30 opacity-75">
            <div className="flex items-center gap-4 pl-1">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-inner opacity-60">
                <span className="material-icons text-slate-400 text-xl">bluetooth</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-600 dark:text-slate-300 text-base leading-tight">Unknown Device</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-xs text-slate-400 font-medium">Weak Signal</span>
                  <span className="material-icons text-[10px] text-slate-400">signal_cellular_1_bar</span>
                </div>
              </div>
            </div>
            <button className="bg-transparent hover:bg-slate-100 text-slate-400 border border-slate-200 px-6 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95">
              Connect
            </button>
          </GlassCard>

        </div>

        <div className="mt-8 text-center px-8">
            <p className="text-xs text-slate-400 leading-relaxed">
                Make sure your Jiaxin device is turned on and within 5 meters. <br/>
                <a href="#" className="text-primary hover:text-primary-dark underline decoration-primary/30 underline-offset-2">Need help?</a>
            </p>
        </div>
      </main>

      {/* Home Indicator */}
      <div className="w-full h-8 flex justify-center items-center pb-2 z-20">
         <div className="w-32 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default ConnectDevice;