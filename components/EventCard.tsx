import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4 active:scale-[0.99] transition-transform duration-100">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        {event.category && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-indigo-700 uppercase tracking-wide">
          {event.category}
        </div>
        )}
        
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{event.title}</h3>
        
        <div className="space-y-2 mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-indigo-500 shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-indigo-500 shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-indigo-500 shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-2">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;