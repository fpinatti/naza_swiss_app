import React from 'react';
import Header from '../components/Header';

const Live: React.FC = () => {
  return (
    <div className="pb-24 pt-14 bg-black min-h-screen">
      <Header title="Live Stream" transparent />
      
      <div className="flex flex-col">
        {/* Video Container - Fixed Aspect Ratio */}
        <div className="w-full aspect-video bg-black sticky top-14 z-30 shadow-2xl">
             <iframe 
               className="w-full h-full"
               src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig" 
               // Note: This is a demo URL. In production, use the actual channel ID or video ID. 
               // Example for a specific video: src="https://www.youtube.com/embed/jfKfPfyJRdk"
               title="Church Live Stream" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe>
        </div>

        {/* Content Below Video */}
        <div className="flex-1 bg-gray-900 text-white p-4">
           <div className="mb-6 border-b border-gray-800 pb-4">
               <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block animate-pulse">
                 Live Now
               </span>
               <h2 className="text-xl font-bold mb-1">Sunday Morning Worship</h2>
               <p className="text-gray-400 text-sm">Streaming live from the Main Sanctuary.</p>
           </div>
           
           <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <h3 className="font-bold mb-3 text-indigo-400 text-sm uppercase tracking-wide">Live Chat</h3>
              <div className="space-y-3 h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                 <div className="text-sm flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 mr-2 flex items-center justify-center text-xs font-bold">JD</div>
                    <div>
                        <span className="font-bold text-gray-300 mr-2 text-xs">John Doe</span>
                        <span className="text-gray-200">Good morning church family! 🙏</span>
                    </div>
                 </div>
                 <div className="text-sm flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex-shrink-0 mr-2 flex items-center justify-center text-xs font-bold">SM</div>
                    <div>
                        <span className="font-bold text-gray-300 mr-2 text-xs">Sarah Miller</span>
                        <span className="text-gray-200">Watching from home today. Blessings!</span>
                    </div>
                 </div>
                 <div className="text-sm flex items-start opacity-75">
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex-shrink-0 mr-2 flex items-center justify-center text-xs font-bold">Bot</div>
                    <div>
                        <span className="font-bold text-gray-400 mr-2 text-xs">Moderator</span>
                        <span className="text-gray-400 italic">Welcome to the live stream. Please be respectful in the chat.</span>
                    </div>
                 </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-700 flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Say something..." 
                    className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
                  />
                  <button className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-bold">Send</button>
              </div>
           </div>
           
           <div className="mt-6 space-y-3">
               <button className="w-full bg-gray-800 border border-gray-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
                   Download Sermon Notes (PDF)
               </button>
               <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors">
                   Give Online
               </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Live;