import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import IconRenderer from '../components/IconRenderer';
import * as Icons from 'lucide-react';

const More: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    { title: 'Ministérios', icon: 'Users', color: 'bg-indigo-100 text-indigo-600', path: '/ministries' },
    { title: 'Dízimo', icon: 'CreditCard', color: 'bg-green-100 text-green-600', path: '/give' },
    { title: 'Bíblia', icon: 'Book', color: 'bg-amber-100 text-amber-600', path: '/bible' },
    { title: 'Configurações', icon: 'Settings', color: 'bg-gray-100 text-gray-600', path: '/settings' },
    { title: 'Prayer Request', icon: 'Send', color: 'bg-blue-100 text-blue-600', path: '/prayer-request' },
  ];

  return (
    <div className="pb-24 pt-14 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header title="More" />

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-8">
        
        {/* Quick Actions Grid */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 px-1">Resources</h2>
          <div className="grid grid-cols-2 gap-4">
            {sections.map((section, idx) => (
              <button 
                key={idx} 
                onClick={() => section.path !== '#' && navigate(section.path)}
                className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center h-32 active:scale-95 transition-transform duration-100"
              >
                <div className={`p-3 rounded-full mb-3 ${section.color}`}>
                  <IconRenderer name={section.icon} size={28} />
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">{section.title}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Contact / Location Card */}
        <section>
           <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 px-1">Connect</h2>
           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
              <div className="flex items-center mb-4">
                 <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg text-orange-600 mr-3">
                    <Icons.MapPin size={20} />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Visit Us</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">123 Grace Blvd, Faith City</p>
                 </div>
              </div>
              
              <div className="flex items-center mb-4">
                 <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 mr-3">
                    <Icons.Mail size={20} />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Email Us</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">hello@gracevalley.church</p>
                 </div>
              </div>

              <div className="flex items-center">
                 <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 mr-3">
                    <Icons.Phone size={20} />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Call Us</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">(555) 123-4567</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Socials / Footer Links */}
        <section className="pt-4">
            <div className="flex justify-center space-x-6">
                <button className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <Icons.Facebook size={20} />
                </button>
                <button className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400">
                    <Icons.Instagram size={20} />
                </button>
                <button className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <Icons.Youtube size={20} />
                </button>
            </div>
            <div className="text-center mt-6 text-gray-400 dark:text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Grace Valley Church. <br/> All rights reserved.
            </div>
        </section>

      </div>
    </div>
  );
};

export default More;