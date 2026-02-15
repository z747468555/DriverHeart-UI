import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';

const Analysis: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col relative bg-background-light dark:bg-background-dark overflow-hidden">
        {/* Decorative Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[rgba(168,177,179,0.1)] to-transparent pointer-events-none z-0"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-soft-pink/20 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Navigation */}
        <header className="relative z-10 px-6 pt-8 pb-4 flex justify-between items-center">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 transition-colors backdrop-blur-md shadow-sm group">
                <span className="material-icons-round text-gray-600 dark:text-gray-200 group-hover:scale-105 transition-transform">arrow_back</span>
            </button>
            <h1 className="text-lg font-medium tracking-wide text-gray-700 dark:text-gray-100">Health Analysis</h1>
            <button className="p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 transition-colors backdrop-blur-md shadow-sm">
                <span className="material-icons-round text-gray-600 dark:text-gray-200">history</span>
            </button>
        </header>

        {/* Scroll Content */}
        <div className="relative z-10 px-6 pb-24 flex-1 flex flex-col gap-6 overflow-y-auto no-scrollbar">
            
            {/* Score Card */}
            <GlassCard className="p-6 shadow-glass relative overflow-hidden group">
                 {/* Background ECG graphic */}
                 <div className="absolute bottom-0 left-0 w-full h-24 opacity-20 pointer-events-none">
                    <svg className="w-full h-full stroke-primary dark:stroke-white fill-none" preserveAspectRatio="none" viewBox="0 0 500 150">
                        <path strokeWidth="2" d="M0,75 L50,75 L60,40 L70,110 L80,75 L120,75 L130,20 L140,130 L150,75 L200,75 L210,50 L220,100 L230,75 L300,75 L310,30 L320,120 L330,75 L400,75 L410,45 L420,105 L430,75 L500,75"></path>
                    </svg>
                </div>
                
                <div className="flex flex-col items-center justify-center relative z-10 py-4">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                             <circle className="text-gray-200 dark:text-gray-700 stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="6"></circle>
                             <circle 
                                className="text-primary stroke-current transition-[stroke-dashoffset] duration-1000 ease-in-out" 
                                cx="50" cy="50" 
                                fill="transparent" 
                                r="40" 
                                strokeWidth="6"
                                strokeDasharray="251.2"
                                strokeDashoffset="25.12" // 90%
                                strokeLinecap="round"
                             ></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-5xl font-bold text-gray-800 dark:text-white tracking-tighter">92</span>
                            <span className="text-sm text-gray-500 dark:text-gray-300 font-medium mt-1">Excellent</span>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-widest font-semibold mb-1">Last Update: Just Now</p>
                    </div>
                </div>
            </GlassCard>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
                {/* HRV */}
                <GlassCard className="p-4 flex flex-col gap-2 shadow-sm !bg-white/60 dark:!bg-white/5">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <span className="material-icons-round text-primary text-xl">favorite</span>
                        <span className="text-xs font-medium uppercase tracking-wide">HRV</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-800 dark:text-white">45</span>
                        <span className="text-xs text-gray-500">ms</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                        <div className="bg-primary h-1.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                </GlassCard>

                {/* SpO2 */}
                <GlassCard className="p-4 flex flex-col gap-2 shadow-sm !bg-white/60 dark:!bg-white/5">
                     <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <span className="material-icons-round text-blue-400 text-xl">water_drop</span>
                        <span className="text-xs font-medium uppercase tracking-wide">SpO2</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-800 dark:text-white">98</span>
                        <span className="text-xs text-gray-500">%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                        <div className="bg-blue-400 h-1.5 rounded-full" style={{width: '98%'}}></div>
                    </div>
                </GlassCard>

                {/* Fatigue */}
                <GlassCard className="p-4 flex flex-col gap-2 shadow-sm !bg-white/60 dark:!bg-white/5">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                         <span className="material-icons-round text-yellow-500 text-xl">bedtime</span>
                        <span className="text-xs font-medium uppercase tracking-wide">Fatigue</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-gray-800 dark:text-white">Low</span>
                         <span className="text-xs text-gray-500">Index: 12</span>
                    </div>
                </GlassCard>

                {/* Stress */}
                 <GlassCard className="p-4 flex flex-col gap-2 shadow-sm !bg-white/60 dark:!bg-white/5">
                     <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <span className="material-icons-round text-purple-400 text-xl">psychology</span>
                        <span className="text-xs font-medium uppercase tracking-wide">Stress</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-gray-800 dark:text-white">Normal</span>
                    </div>
                </GlassCard>
            </div>

            {/* AI Analysis */}
            <GlassCard className="p-6 shadow-glass relative !bg-white/40 dark:!bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-full">
                        <span className="material-icons-round text-primary text-xl">auto_awesome</span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">AI Analysis</h3>
                </div>
                 <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Based on real-time PPG analysis, your heart rate stability is currently normal. Concentration levels are optimal for highway driving. No signs of arrhythmia detected in the last 60 minutes.
                </p>
                <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium border border-green-200 dark:border-green-800">
                        Stable Rhythm
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium border border-blue-200 dark:border-blue-800">
                        Good Focus
                    </span>
                </div>
            </GlassCard>
            
            {/* Simulated Alert (Inactive but visible structure as requested) */}
             <div className="mt-2 group opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-xs text-gray-400 mb-2 ml-1">HISTORY (2 HOURS AGO)</p>
                <div className="relative overflow-hidden rounded-2xl bg-white border border-red-100 p-6 shadow-sm">
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-icons-round text-red-500 bg-red-50 p-2 rounded-full">warning</span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Elevated Stress</h3>
                                    <p className="text-sm text-gray-500">Traffic congestion detected</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <BottomNav />
    </div>
  );
};

export default Analysis;