import React from 'react';
import Header from '../components/Header';
import { STAFF, CHURCH_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-24 pt-14 bg-gray-50 min-h-screen">
      <Header title="Sobre" />
      
      <div className="px-4 py-6 max-w-2xl mx-auto">
        {/* Intro */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bem vindo a {CHURCH_NAME}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a community of believers passionate about loving God and loving people. 
            Our mission is to create a welcoming environment where everyone can experience the transformational love of Jesus Christ.
          </p>
          <img 
            src="https://picsum.photos/800/400?random=50" 
            alt="Church Community" 
            className="w-full h-48 object-cover rounded-xl shadow-sm mb-4" 
          />
        </div>

        {/* Beliefs - Accordion style simplified */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Our Core Values</h3>
          <div className="space-y-3">
            {[
              { title: 'Authentic Community', desc: 'Doing life together with honesty and grace.' },
              { title: 'Biblical Truth', desc: 'Grounded in the unshakeable Word of God.' },
              { title: 'Radical Generosity', desc: 'Giving of our time, talents, and resources.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-indigo-700 mb-1">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Leadership Team</h3>
          <div className="space-y-4">
            {STAFF.map(person => (
              <div key={person.id} className="flex bg-white p-4 rounded-xl border border-gray-100 shadow-sm items-start">
                <img 
                  src={person.imageUrl} 
                  alt={person.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-indigo-50"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{person.name}</h4>
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2 block">{person.role}</span>
                  <p className="text-sm text-gray-500 leading-snug">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Info Footer */}
        <div className="mt-10 p-6 bg-gray-100 rounded-2xl text-center">
            <h4 className="font-bold text-gray-900 mb-2">Visit Us</h4>
            <p className="text-gray-600 text-sm mb-1">123 Grace Blvd, Faith City, ST 12345</p>
            <p className="text-gray-600 text-sm mb-4">hello@gracevalley.church</p>
            <button className="text-indigo-600 font-semibold text-sm">Get Directions</button>
        </div>
      </div>
    </div>
  );
};

export default About;