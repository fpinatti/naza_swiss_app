import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';


// To implement the Prayer Request feature integrated with Google Sheets, we will use the Google Forms method. This is the standard, secure, serverless way to send data from a frontend website directly to a Google Sheet.
// How it works:
// You create a Google Form.
// You set the destination of the form to a Google Sheet.
// We send a POST request from the app to the Google Form, which automatically saves the row in the Sheet with the timestamp.

const PrayerRequest: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // CONFIGURATION:
  // 1. Create a Google Form with two questions: "Name" (Short answer) and "Request" (Paragraph).
  // 2. Click the "Three dots" > "Get pre-filled link".
  // 3. Fill in dummy data, click "Get link", then "Copy link".
  // 4. Paste the link in a notepad. It looks like:
  //    https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url&entry.123456=Name&entry.789012=Request
  
  // REPLACE THESE VALUES WITH YOURS:
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse";
  const ENTRY_ID_NAME = "entry.123456";    // Replace with the ID for the Name field
  const ENTRY_ID_REQUEST = "entry.789012"; // Replace with the ID for the Request field

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;

    setStatus('submitting');

    const formData = new FormData();
    formData.append(ENTRY_ID_NAME, name);
    formData.append(ENTRY_ID_REQUEST, request);

    try {
      // Note: Google Forms does not return CORS headers, so the browser will block the response reading.
      // However, the submission actually SUCCEEDS. We use mode: 'no-cors' to allow sending.
      // We assume success if no network error occurs.
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setStatus('success');
      
      // Reset form after delay or navigate back
      setTimeout(() => {
        navigate('/more');
      }, 3000);

    } catch (error) {
      console.error("Submission error", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="pb-24 pt-14 bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center px-6 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pedido Enviado</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Estaremos orando por você. <br/>"A oração de um justo é poderosa e eficaz."
        </p>
        <button 
          onClick={() => navigate('/more')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-14 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header title="Pedido de Oração" />

      <div className="px-4 py-6 max-w-2xl mx-auto">
        <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg mb-8 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-50"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10">Como podemos orar por você?</h2>
          <p className="text-indigo-100 text-sm relative z-10">
            Compartilhe seus pedidos. Nossa equipe de intercessão estará apresentando sua vida a Deus.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Seu Nome (Opcional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                placeholder="Ex: Maria Silva"
              />
            </div>
          </div>

          <div>
            <label htmlFor="request" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Seu Pedido
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageSquare size={20} className="text-gray-400" />
              </div>
              <textarea
                id="request"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                required
                rows={6}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
                placeholder="Descreva seu pedido de oração aqui..."
              />
            </div>
          </div>

          {status === 'error' && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-center text-sm">
              <AlertCircle size={20} className="mr-2 flex-shrink-0" />
              Houve um erro ao enviar. Por favor, tente novamente.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting' || !request.trim()}
            className={`w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-xl shadow-md text-base font-bold text-white transition-all ${
              status === 'submitting' || !request.trim()
                ? 'bg-indigo-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]'
            }`}
          >
            {status === 'submitting' ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              <span className="flex items-center">
                <Send size={20} className="mr-2" />
                Enviar Pedido
              </span>
            )}
          </button>
        </form>
        
        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          Seus dados são confidenciais e serão vistos apenas pela equipe pastoral.
        </p>
      </div>
    </div>
  );
};

export default PrayerRequest;
