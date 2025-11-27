import React, { useState } from 'react';
import Header from '../components/Header';
import { MapPin, Navigation, Car, Bus, Coffee, Baby, Info, Copy, ExternalLink } from 'lucide-react';

const Location: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'directions' | 'campus'>('directions');
  
  const address = "123 Grace Blvd, Faith City, ST 12345";
  const coordinates = { lat: 40.7128, lng: -74.0060 }; // Example coordinates

  const handleOpenMaps = (service: 'google' | 'waze' | 'uber') => {
    const encodedAddress = encodeURIComponent(address);
    let url = '';

    switch (service) {
      case 'google':
        url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        break;
      case 'waze':
        url = `https://waze.com/ul?q=${encodedAddress}`;
        break;
      case 'uber':
        // Universal deep link for Uber
        url = `https://m.uber.com/ul/?action=setPickup&client_id=grace_valley&pickup=my_location&dropoff[formatted_address]=${encodedAddress}&dropoff[latitude]=${coordinates.lat}&dropoff[longitude]=${coordinates.lng}`;
        break;
    }
    window.open(url, '_blank');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    // In a real app, show a toast notification here
    alert('Address copied to clipboard');
  };

  return (
    <div className="pb-24 pt-14 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header title="Location" />

      {/* Map Hero Section */}
      <div className="w-full h-[35vh] bg-gray-200 sticky top-14 z-10 shadow-md">
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          title="Church Location"
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Grace%20Valley%20Church)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto -mt-6 relative z-20">
        {/* Main Address Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Grace Valley Church</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{address}</p>
            </div>
            <button 
              onClick={copyAddress}
              className="p-2 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Copy size={18} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button 
              onClick={() => handleOpenMaps('google')}
              className="flex flex-col items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 group"
            >
              <MapPin className="text-blue-600 dark:text-blue-400 mb-1 group-active:scale-110 transition-transform" size={24} />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300">Google Maps</span>
            </button>
            <button 
              onClick={() => handleOpenMaps('waze')}
              className="flex flex-col items-center justify-center p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-100 dark:border-cyan-800 group"
            >
              <Navigation className="text-cyan-600 dark:text-cyan-400 mb-1 group-active:scale-110 transition-transform" size={24} />
              <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300">Waze</span>
            </button>
            <button 
              onClick={() => handleOpenMaps('uber')}
              className="flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 group"
            >
              <Car className="text-gray-800 dark:text-white mb-1 group-active:scale-110 transition-transform" size={24} />
              <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Ride Share</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-200 dark:bg-gray-700 p-1 rounded-xl mb-6">
          <button 
            onClick={() => setActiveTab('directions')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
              activeTab === 'directions' 
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            Getting Here
          </button>
          <button 
            onClick={() => setActiveTab('campus')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
              activeTab === 'campus' 
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            Campus Guide
          </button>
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in duration-300">
          {activeTab === 'directions' ? (
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 dark:text-indigo-400">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Parking</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    We have two parking lots available. The <strong>Main Lot</strong> is located directly in front of the sanctuary. 
                    <br/>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded mt-2 inline-block font-semibold">
                      Main Lot Status: Open
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg mr-4 text-orange-600 dark:text-orange-400">
                  <Bus size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Public Transit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Bus lines <strong>404</strong> and <strong>202</strong> stop right across the street. Look for the "Faith City Central" stop.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
               {/* Innovative Idea: Campus Indoor Map List/Guide */}
               <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                 <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                   <Info size={18} className="mr-2 text-indigo-500" />
                   Where do I go?
                 </h3>
                 
                 <div className="relative border-l-2 border-indigo-100 dark:border-gray-700 ml-3 space-y-8 pl-6 py-2">
                    <div className="relative">
                       <span className="absolute -left-[33px] bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white dark:border-gray-800">1</span>
                       <h4 className="font-bold text-gray-800 dark:text-gray-200">Main Entrance</h4>
                       <p className="text-xs text-gray-500 dark:text-gray-400">Our greeters will welcome you here.</p>
                    </div>
                    <div className="relative">
                       <span className="absolute -left-[33px] bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white dark:border-gray-800">
                          <Baby size={16} />
                       </span>
                       <h4 className="font-bold text-gray-800 dark:text-gray-200">Kids Check-In</h4>
                       <p className="text-xs text-gray-500 dark:text-gray-400">To the left of the lobby. Secure check-in for ages 0-12.</p>
                    </div>
                    <div className="relative">
                       <span className="absolute -left-[33px] bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white dark:border-gray-800">
                          <Coffee size={16} />
                       </span>
                       <h4 className="font-bold text-gray-800 dark:text-gray-200">Grace Cafe</h4>
                       <p className="text-xs text-gray-500 dark:text-gray-400">To the right. Free coffee before every service!</p>
                    </div>
                    <div className="relative">
                       <span className="absolute -left-[33px] bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-sm">
                          <ExternalLink size={16} />
                       </span>
                       <h4 className="font-bold text-gray-800 dark:text-gray-200">Main Sanctuary</h4>
                       <p className="text-xs text-gray-500 dark:text-gray-400">Straight ahead through the double doors.</p>
                    </div>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;