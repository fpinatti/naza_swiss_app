import React from 'react';
import Header from '../components/Header';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Monitor, ChevronRight } from 'lucide-react';

const Settings: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="pb-24 pt-14 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header title="Settings" />
      
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <section className="mb-8">
          <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-1">Appearance</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
            {themes.map((t, idx) => {
                const Icon = t.icon;
                const isActive = theme === t.id;
                return (
                    <button
                        key={t.id}
                        onClick={() => setTheme(t.id as any)}
                        className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${idx !== themes.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}
                    >
                        <div className="flex items-center">
                            <Icon size={20} className={`mr-3 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`} />
                            <span className={`text-sm font-medium ${isActive ? 'text-indigo-900 dark:text-indigo-100' : 'text-gray-700 dark:text-gray-300'}`}>
                                {t.label}
                            </span>
                        </div>
                        {isActive && (
                            <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                        )}
                    </button>
                );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-1">About App</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
             <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Version</span>
                <span className="text-sm text-gray-500">1.0.0</span>
             </div>
             <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Privacy Policy</span>
                <ChevronRight size={16} className="text-gray-400" />
             </button>
             <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Terms of Service</span>
                <ChevronRight size={16} className="text-gray-400" />
             </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;