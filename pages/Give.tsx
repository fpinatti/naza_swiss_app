import React from 'react';
import Header from '../components/Header';
import { CreditCard, Heart, Copy } from 'lucide-react';

const Give: React.FC = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="pb-24 pt-14 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header title="Giving" />
      
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg mb-8 text-center">
          <Heart size={48} className="mx-auto mb-4 text-indigo-200" />
          <h2 className="text-2xl font-bold mb-2">Support Our Mission</h2>
          <p className="text-indigo-100 mb-6">Your generosity helps us continue to serve our community and share the love of Jesus.</p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-md active:scale-95 transition-transform w-full sm:w-auto">
            Give Online Now
          </button>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Other Ways to Give</h3>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="flex items-center mb-3">
              <CreditCard className="text-indigo-600 dark:text-indigo-400 mr-3" />
              <h4 className="font-bold text-gray-900 dark:text-white">Bank Transfer</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-2 rounded">
                <span>Bank:</span>
                <span className="font-mono">Grace Bank</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-2 rounded">
                <span>Account:</span>
                <span className="font-mono select-all">12345-6</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-2 rounded">
                <span>Agency:</span>
                <span className="font-mono select-all">0001</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded bg-green-500 text-white flex items-center justify-center text-xs font-bold mr-3">PIX</div>
              <h4 className="font-bold text-gray-900 dark:text-white">PIX</h4>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Use our email key to transfer funds instantly.</p>
            <button 
              onClick={() => handleCopy('give@gracevalley.church')}
              className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-indigo-500 transition-colors group"
            >
              <span className="font-mono text-gray-800 dark:text-gray-200 text-sm">give@gracevalley.church</span>
              <Copy size={16} className="text-gray-400 group-hover:text-indigo-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Give;