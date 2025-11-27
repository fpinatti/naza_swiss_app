import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHURCH_NAME, CHURCH_TAGLINE, UPCOMING_EVENTS, DAILY_VERSES } from '../constants';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Take only the first two events for the home page
  const homeEvents = UPCOMING_EVENTS.slice(0, 2);

  // Calculate next service
  const nextService = useMemo(() => {
    const now = new Date();
    
    // Service definition: 0=Sun, 1=Mon, ..., 4=Thu
    const services = [
      { day: 0, hour: 10, minute: 0, label: 'Domingo' },
      { day: 0, hour: 18, minute: 30, label: 'Domingo' },
      { day: 4, hour: 19, minute: 30, label: 'Reunião de Oração' },
    ];

    let nextDate: Date | null = null;
    let nextLabel = '';

    // Find the next occurrence for each service type
    for (const service of services) {
      const date = new Date(now);
      
      // Calculate day difference
      // If today is 1 (Mon) and target is 4 (Thu): 4 - 1 = 3 (add 3 days)
      // If today is 5 (Fri) and target is 4 (Thu): 4 - 5 = -1 (add -1 + 7 = 6 days)
      let dayDiff = service.day - now.getDay();
      
      // Reset hours to check time on the target day
      date.setHours(service.hour, service.minute, 0, 0);

      // Adjust date based on day of week
      if (dayDiff < 0 || (dayDiff === 0 && date <= now)) {
        // Target day is earlier in week OR target day is today but time has passed
        dayDiff += 7;
      }
      
      // Set the full date
      // Note: If dayDiff is 0 and time hasn't passed, we keep current date
      const serviceInstance = new Date(now);
      serviceInstance.setDate(now.getDate() + dayDiff);
      serviceInstance.setHours(service.hour, service.minute, 0, 0);

      // Determine if this is the soonest one
      if (!nextDate || serviceInstance < nextDate) {
        nextDate = serviceInstance;
        nextLabel = service.label;
      }
    }

    if (!nextDate) return { time: '--:--', label: 'Loading' };

    // Format time (e.g., 19:00)
    const timeString = nextDate.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    });

    // Format Day (e.g., Sunday) if needed, but we used custom labels
    return { time: timeString, label: nextLabel };
  }, []);

  // Determine Verse of the Day
  const verseOfTheDay = useMemo(() => {
    // Get local date string YYYY-MM-DD
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    // Filter verses that have a date <= today
    const availableVerses = DAILY_VERSES.filter(v => v.date <= todayStr);

    // Sort descending by date (newest first)
    availableVerses.sort((a, b) => b.date.localeCompare(a.date));

    // Return the first match (closest to today or today), or a fallback from constants if none found
    if (availableVerses.length > 0) {
      return availableVerses[0];
    }
    
    // If we have no verses in the past (only future), or array is empty (unlikely with fallback data)
    // Return the first item in the main array as a safety fallback
    return DAILY_VERSES[0];
  }, []);

  return (
    <div className="pb-24 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative h-[65vh] w-full bg-slate-900 overflow-hidden rounded-b-[2rem] shadow-lg">
        <img 
          src="https://picsum.photos/800/1000?random=99" 
          alt="Church Worship" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        <Header transparent />

        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 flex flex-col items-start justify-end h-full">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
            Seja bem vindo!
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-2 leading-tight">
            {CHURCH_NAME}
          </h1>
          <p className="text-gray-200 text-lg mb-6 max-w-xs">
            {CHURCH_TAGLINE}
          </p>
          <div className="flex gap-3 w-full">
            <button 
              onClick={() => navigate('/about')}
              className="flex-1 bg-white text-indigo-900 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform flex items-center justify-center"
            >
              Novo por aqui?
            </button>
            <button 
              onClick={() => navigate('/live')}
              className="flex-1 bg-white/20 backdrop-blur-md text-white border border-white/30 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <PlayCircle size={18} />
              Assista
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="px-4 -mt-6 relative z-10 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md flex justify-between items-center text-center divide-x divide-gray-100 dark:divide-gray-700">
           <div className="flex-1 px-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 py-2 rounded-lg transition-colors">
             <div className="text-xl font-bold text-gray-800 dark:text-white">{nextService.time}</div>
             <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">{nextService.label}</div>
           </div>
           <div 
             onClick={() => navigate('/location')}
             className="flex-1 px-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 py-2 rounded-lg transition-colors"
           >
             <div className="text-xl font-bold text-gray-800 dark:text-white">Mapa</div>
             <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">Como chegar</div>
           </div>
           <div 
             onClick={() => navigate('/give')}
             className="flex-1 px-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 py-2 rounded-lg transition-colors"
           >
             <div className="text-xl font-bold text-gray-800 dark:text-white">Dízimo</div>
             <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">E ofertas</div>
           </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="px-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Eventos</h2>
          <button onClick={() => navigate('/events')} className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold flex items-center">
            Ver mais <ArrowRight size={14} className="ml-1" />
          </button>
        </div>
        
        <div className="space-y-4">
          {homeEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      
      {/* Verse of the Day */}
      <div className="px-4 mt-8 max-w-2xl mx-auto">
        <div className="bg-indigo-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-600 rounded-full blur-2xl opacity-20"></div>
          
          <h3 className="text-xs font-bold text-indigo-200 mb-3 uppercase tracking-widest flex items-center">
             Versículo do Dia <span className="mx-2 opacity-50">•</span> {new Date(verseOfTheDay.date).toLocaleDateString('pt-BR')}
          </h3>
          
          <blockquote className="text-xl font-serif italic mb-4 relative z-10 leading-relaxed text-indigo-50">
            {verseOfTheDay.text}
          </blockquote>
          <cite className="text-sm font-bold text-indigo-200 not-italic block text-right">— {verseOfTheDay.reference}</cite>
        </div>
      </div>
    </div>
  );
};

export default Home;