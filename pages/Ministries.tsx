import React, { useState } from 'react';
import Header from '../components/Header';
import { MINISTRIES } from '../constants';
import IconRenderer from '../components/IconRenderer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Ministries: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pb-24 pt-14 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header title="Ministries" />
      
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
          Get involved and find your place in our community. Click on a ministry to learn more.
        </p>

        <div className="space-y-4">
          {MINISTRIES.map((ministry) => {
            const isExpanded = expandedId === ministry.id;

            return (
              <div 
                key={ministry.id} 
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-2 ring-indigo-500/20' : ''}`}
              >
                <button 
                  onClick={() => toggleExpand(ministry.id)}
                  className="w-full flex items-center p-4 text-left focus:outline-none"
                >
                  <div className={`p-3 rounded-xl mr-4 transition-colors duration-300 ${isExpanded ? 'bg-indigo-600 text-white' : 'bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400'}`}>
                    <IconRenderer name={ministry.iconName} size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{ministry.title}</h3>
                    <p className={`text-sm text-gray-500 dark:text-gray-400 mt-1 transition-opacity duration-200 ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                      {ministry.description}
                    </p>
                  </div>
                  
                  <div className={`text-gray-400 dark:text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                <div 
                  className={`px-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    {ministry.details || ministry.description}
                  </p>
                  
                  <button className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-bold hover:underline">
                    Contact Leader &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ministries;