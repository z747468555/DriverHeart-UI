import React from 'react';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';

const Dashboard: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten opacity-60"></div>
        <div className="absolute bottom-[10%] right-[-20%] w-80 h-80 bg-morandi-teal/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten opacity-60"></div>

        {/* Header */}
        <header className="flex justify-between items-center px-6 pt-6 mb-6">
            <div className="flex flex-col">
                <span className="text-xs font-medium text-primary-dark tracking-widest uppercase mb-1">Welcome Back</span>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">DriverHeart <span className="text-base font-normal text-primary">驾心</span></h1>
            </div>
            <div className="relative cursor-pointer">
                <img 
                    alt="Profile" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzEPPyN_6Z65N9b05rH3N-EgoeAeL8xX5PbfQmV_9W2FTDY9KXtEUo9vzQErumcMXCDj8z8FOSOYEegXWhn99RPlfhvOE9WzVM3v_WjgN5Ysl9mhjwEsOIfvnvVk5tL40e4vzu_kEXLdQTIRagGW6qrdI-gKF1lYLQpBCHMo19ON5mq-qId6nUHbnzQwbkRxJnAySiUSgvoz1b9X6mXPuKvgjSVipbR1RlIzsjCgumlEFcZYfF1DXeq4UmCympQobAUoV4Md_8IiQ" 
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
            </div>
        </header>

        {/* Status Pill */}
        <div className="flex justify-center mb-6">
            <GlassCard className="px-5 py-2 !rounded-full flex items-center gap-2 shadow-sm bg-white/40">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Monitoring Active</span>
            </GlassCard>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 px-6 flex flex-col gap-5 overflow-y-auto no-scrollbar pb-24">
            {/* ECG Card */}
            <GlassCard className="p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg group">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-morandi-teal/10 rounded-full text-morandi-teal">
                            <span className="material-icons text-xl">favorite_border</span>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Heart Rate</h2>
                            <p className="text-xs text-gray-500 dark:text-gray-400">ECG Live Stream</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-icons text-xl">more_horiz</span>
                    </button>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-gray-800 dark:text-white tracking-tight">72</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">BPM</span>
                    <span className="ml-auto text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full flex items-center gap-1">
                        <span className="material-icons text-[10px]">arrow_upward</span> Normal
                    </span>
                </div>

                <div className="h-32 w-full relative">
                    {/* Grid Background */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                       {[...Array(24)].map((_, i) => (
                           <div key={i} className="border-r border-b border-primary/10 dark:border-white/5 last:border-r-0"></div>
                       ))}
                    </div>
                    
                    {/* Animated Line */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        <path 
                            className="ecg-line drop-shadow-md" 
                            d="M0,64 L20,64 L25,50 L30,80 L35,40 L40,90 L45,30 L50,100 L55,20 L60,64 L80,64 L85,50 L90,80 L95,64 L120,64 L125,50 L130,80 L135,40 L140,90 L145,30 L150,100 L155,20 L160,64 L180,64 L185,50 L190,80 L195,64 L220,64 L225,50 L230,80 L235,40 L240,90 L245,30 L250,100 L255,20 L260,64 L280,64 L285,50 L290,80 L295,64 L320,64 L325,50 L330,80 L335,40 L340,90 L345,30 L350,100 L355,20 L360,64 L400,64" 
                            fill="none" 
                            stroke="#8faeb0" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2.5" 
                            vectorEffect="non-scaling-stroke"
                        />
                         <defs>
                            <linearGradient id="fadeGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                                <stop offset="0%" stopColor="white" stopOpacity="0" />
                                <stop offset="100%" stopColor="white" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background-light dark:to-background-dark opacity-20 pointer-events-none"></div>
                </div>
            </GlassCard>

            {/* Blood Oxygen Card */}
            <GlassCard className="p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-morandi-pink/20 rounded-full text-rose-400">
                            <span className="material-icons text-xl">water_drop</span>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Blood Oxygen</h2>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PPG Pulse Wave</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-icons text-xl">more_horiz</span>
                    </button>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-gray-800 dark:text-white tracking-tight">98</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 text-xl">%</span>
                    <span className="ml-auto text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-full">
                        Avg 97-99%
                    </span>
                </div>

                <div className="h-24 w-full relative flex items-end">
                     <div className="absolute inset-x-0 bottom-0 h-full opacity-20">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 150">
                             <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke:'none', fill:'none'}} />
                        </svg>
                     </div>
                     <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                        <path 
                            className="drop-shadow-sm opacity-80" 
                            d="M0,80 C30,80 40,30 60,30 C80,30 90,80 120,80 C150,80 160,30 180,30 C200,30 210,80 240,80 C270,80 280,30 300,30 C320,30 330,80 360,80 C390,80 400,30 420,30" 
                            fill="none" 
                            stroke="#d9c8c0" 
                            strokeLinecap="round" 
                            strokeWidth="4" 
                            vectorEffect="non-scaling-stroke"
                        >
                             <animate attributeName="d" dur="3s" repeatCount="indefinite" values="
                                        M0,80 C30,80 40,30 60,30 C80,30 90,80 120,80 C150,80 160,30 180,30 C200,30 210,80 240,80 C270,80 280,30 300,30 C320,30 330,80 360,80 C390,80 400,30 420,30;
                                        M-40,80 C-10,80 0,30 20,30 C40,30 50,80 80,80 C110,80 120,30 140,30 C160,30 170,80 200,80 C230,80 240,30 260,30 C280,30 290,80 320,80 C350,80 360,30 380,30" 
                             />
                        </path>
                         <path 
                            d="M0,80 C30,80 40,30 60,30 C80,30 90,80 120,80 C150,80 160,30 180,30 C200,30 210,80 240,80 C270,80 280,30 300,30 C320,30 330,80 360,80 C390,80 400,30 420,30" 
                            fill="none" 
                            stroke="#a8b1b3" 
                            strokeLinecap="round" 
                            strokeOpacity="0.3" 
                            strokeWidth="2" 
                            transform="translate(10, 5)" 
                            vectorEffect="non-scaling-stroke" 
                        />
                     </svg>
                </div>
            </GlassCard>
        </div>

        <BottomNav />
    </div>
  );
};

export default Dashboard;