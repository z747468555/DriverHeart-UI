import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

const Trends: React.FC = () => {
  const navigate = useNavigate();

  // Mock Data for Area Chart
  const hrData = [
    { time: '06:00', bpm: 60 },
    { time: '08:00', bpm: 85 }, // Commute
    { time: '10:00', bpm: 72 },
    { time: '12:00', bpm: 68 },
    { time: '14:00', bpm: 75 },
    { time: '16:00', bpm: 80 },
    { time: '18:00', bpm: 90 }, // Commute back
    { time: 'Now', bpm: 72 },
  ];

  const days = [
      { day: 'Mon', date: '12' },
      { day: 'Tue', date: '13' },
      { day: 'Wed', date: '14', active: true },
      { day: 'Thu', date: '15' },
      { day: 'Fri', date: '16' },
  ];

  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden bg-background-light dark:bg-background-dark pb-8">
      {/* Orbs */}
      <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[40%] bg-morandi-blue/20 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-12 pb-6 relative z-10">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-white/50 transition-colors">
            <span className="material-icons text-gray-600 dark:text-gray-300">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-semibold tracking-wide text-gray-800 dark:text-white">Health Trends</h1>
        <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
            <span className="material-icons text-gray-600 dark:text-gray-300">calendar_today</span>
        </button>
      </header>

      {/* Date Picker Strip */}
      <div className="px-6 mb-8 relative z-10">
        <div className="flex justify-between items-center space-x-2 overflow-x-auto no-scrollbar py-2">
            {days.map((d, i) => (
                <div 
                    key={i} 
                    className={`flex flex-col items-center justify-center min-w-[3.5rem] h-16 rounded-2xl cursor-pointer transition-all duration-300 
                        ${d.active 
                            ? 'bg-primary shadow-lg shadow-primary/30 text-white transform scale-105' 
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    <span className="text-xs font-medium mb-1 opacity-90">{d.day}</span>
                    <span className={`font-bold ${d.active ? 'text-xl' : 'text-lg'}`}>{d.date}</span>
                    {d.active && <div className="w-1 h-1 bg-white rounded-full mt-1"></div>}
                </div>
            ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 space-y-6 relative z-10 flex-1 overflow-y-auto no-scrollbar pb-24">
        
        {/* Heart Rate Trend Card */}
        <GlassCard className="!rounded-[28px] p-6 relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <span className="material-icons text-gray-500 text-sm">favorite</span>
                        </div>
                        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Heart Rate</h2>
                    </div>
                    <div className="mt-2 flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-gray-800 dark:text-white">72</span>
                        <span className="text-sm text-gray-500 font-medium">bpm avg</span>
                    </div>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                     <span className="material-icons text-xs mr-1">arrow_downward</span> Normal
                </div>
            </div>

            {/* Spline Chart */}
            <div className="h-48 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={hrData}>
                        <defs>
                            <linearGradient id="hrGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#A7B0B2" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#A7B0B2" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <YAxis hide domain={[50, 110]} />
                        <Area 
                            type="monotone" 
                            dataKey="bpm" 
                            stroke="#A7B0B2" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#hrGradient)" 
                        />
                         {/* Mock Dots for specific points */}
                    </AreaChart>
                 </ResponsiveContainer>
                 {/* Manually placed dots to simulate the specific design look */}
                 <div className="absolute top-[50%] left-[30%] w-2 h-2 bg-white border-2 border-[#A7B0B2] rounded-full"></div>
                 <div className="absolute top-[30%] left-[60%] w-2 h-2 bg-white border-2 border-[#A7B0B2] rounded-full"></div>
                 <div className="absolute top-[40%] right-[0%] w-3 h-3 bg-accent border-2 border-white rounded-full shadow-lg"></div>

                <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>Now</span>
                </div>
            </div>

            <div className="mt-6 flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                <div className="text-center w-1/2 border-r border-gray-100 dark:border-gray-700">
                    <div className="text-xs text-gray-400 mb-1">Min HR</div>
                    <div className="font-semibold text-gray-700 dark:text-gray-200">58 bpm</div>
                </div>
                <div className="text-center w-1/2">
                    <div className="text-xs text-gray-400 mb-1">Max HR</div>
                    <div className="font-semibold text-gray-700 dark:text-gray-200">98 bpm</div>
                </div>
            </div>
        </GlassCard>

        {/* Stress Analysis Card */}
        <GlassCard className="!rounded-[28px] p-6 relative">
            <div className="flex justify-between items-start mb-6">
                <div>
                     <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <span className="material-icons text-gray-500 text-sm">spa</span>
                        </div>
                        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Driving Stress</h2>
                    </div>
                    <div className="mt-2">
                        <span className="text-2xl font-bold text-gray-800 dark:text-white">Relaxed</span>
                        <p className="text-xs text-gray-400 mt-1">Based on HRV analysis</p>
                    </div>
                </div>
                 {/* Circular Progress Small */}
                 <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="transform -rotate-90 w-12 h-12" viewBox="0 0 48 48">
                        <circle className="text-gray-100 dark:text-gray-700" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
                        <circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="65" strokeLinecap="round" strokeWidth="4"></circle>
                    </svg>
                    <span className="absolute text-[10px] font-bold text-primary">45</span>
                 </div>
            </div>

            {/* Custom Bar Chart Visual */}
            <div className="h-32 flex items-end justify-between space-x-2 px-2">
                 {[
                     { day: 'Mon', h: '30%', color: 'bg-morandi-sage/40' },
                     { day: 'Tue', h: '45%', color: 'bg-morandi-sage/50' },
                     { day: 'Wed', h: '60%', color: 'bg-primary shadow-[0_0_15px_rgba(184,159,127,0.4)]', active: true },
                     { day: 'Thu', h: '25%', color: 'bg-morandi-sage/40' },
                     { day: 'Fri', h: '35%', color: 'bg-morandi-sage/40' },
                 ].map((bar, i) => (
                    <div key={i} className="w-full flex flex-col items-center group">
                        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t-lg relative h-24 overflow-hidden">
                            <div 
                                className={`absolute bottom-0 w-full rounded-t-lg transition-all duration-500 ${bar.color}`} 
                                style={{ height: bar.h }}
                            ></div>
                        </div>
                        <span className={`text-[10px] mt-2 ${bar.active ? 'text-primary font-bold' : 'text-gray-400'}`}>{bar.day}</span>
                    </div>
                 ))}
            </div>
        </GlassCard>

        <div className="h-12"></div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Trends;