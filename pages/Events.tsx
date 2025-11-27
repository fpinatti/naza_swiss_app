import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import { UPCOMING_EVENTS } from '../constants'; // Keeping as fallback
import { fetchEvents } from '../services/firebase';
import { Search } from 'lucide-react';
import { Event } from '../types';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  
  const categories = ['All', 'Service', 'Youth', 'Community', 'Outreach'];

  useEffect(() => {
    const loadEvents = async () => {
      // In a real scenario, uncomment the line below after setting up valid Firebase config
      // const data = await fetchEvents();
      // if (data.length > 0) setEvents(data as Event[]);
      // else setEvents(UPCOMING_EVENTS);
      
      // For now, simulating API call with mock data
      setTimeout(() => {
        setEvents(UPCOMING_EVENTS);
        setLoading(false);
      }, 500);
    };
    loadEvents();
  }, []);
  
  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(e => e.category === filter);

  return (
    <div className="pb-24 pt-14 bg-gray-50 min-h-screen">
      <Header title="Events" />
      
      <div className="px-4 max-w-2xl mx-auto pt-14">
        {loading ? (
           <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
           </div>
        ) : filteredEvents.length > 0 ? (
           filteredEvents.map(event => (
             <EventCard key={event.id} event={event} />
           ))
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-gray-200 p-4 rounded-full mb-4">
                    <Search size={32} className="text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">No events found in this category.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Events;