import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { BIBLE_DATA, BibleVersion } from '../data/bible';
import { ChevronLeft, ChevronRight, BookOpen, Settings } from 'lucide-react';

const Bible: React.FC = () => {
  const [version, setVersion] = useState<BibleVersion>('NVI');
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState(18);
  const [showControls, setShowControls] = useState(false);

  // Get current data based on selection
  const currentVersionData = BIBLE_DATA[version];
  const currentBook = currentVersionData.books[currentBookIndex];
  const currentChapter = currentBook?.chapters[currentChapterIndex];

  // Reset chapter if book changes
  useEffect(() => {
    setCurrentChapterIndex(0);
  }, [currentBookIndex]);

  // Handlers
  const handleNextChapter = () => {
    if (currentChapterIndex < currentBook.chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
    } else if (currentBookIndex < currentVersionData.books.length - 1) {
      setCurrentBookIndex(prev => prev + 1);
      setCurrentChapterIndex(0);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
    } else if (currentBookIndex > 0) {
      setCurrentBookIndex(prev => prev - 1);
      // Go to last chapter of previous book (mock logic, simplified since we don't have all chapters)
      setCurrentChapterIndex(0); 
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!currentBook || !currentChapter) {
    return <div className="pt-20 px-4 text-center">Loading Bible data...</div>;
  }

  return (
    <div className="pb-24 pt-14 bg-[#f8f5f2] min-h-screen">
      {/* Custom Header for Bible */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm h-14 flex items-center justify-between px-4 max-w-2xl mx-auto">
        <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-indigo-600" />
            <h1 className="font-bold text-lg text-gray-800">Bíblia</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <select 
            value={version}
            onChange={(e) => setVersion(e.target.value as BibleVersion)}
            className="text-sm font-bold bg-gray-100 text-gray-700 rounded-lg px-2 py-1 border-none focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
          >
            <option value="NVI">NVI</option>
            <option value="AA">AA</option>
          </select>
          <button 
            onClick={() => setShowControls(!showControls)}
            className={`p-1.5 rounded-full ${showControls ? 'bg-gray-200 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Reader Controls (Conditional) */}
      {showControls && (
        <div className="fixed top-14 left-0 right-0 bg-white z-30 shadow-md border-b border-gray-100 px-4 py-3 animate-in slide-in-from-top-2">
            <div className="max-w-2xl mx-auto space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">Tamanho da fonte</span>
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                        <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="px-3 py-1 text-sm font-bold text-gray-600 hover:bg-white rounded">-</button>
                        <span className="w-8 text-center text-sm font-semibold">{fontSize}</span>
                        <button onClick={() => setFontSize(Math.min(28, fontSize + 2))} className="px-3 py-1 text-sm font-bold text-gray-600 hover:bg-white rounded">+</button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Navigation Bar (Sticky under header) */}
      <div className="sticky top-14 z-20 bg-[#f8f5f2]/95 backdrop-blur-sm border-b border-[#e5e0d8] py-3 px-4 flex justify-between items-center max-w-2xl mx-auto">
        <button 
          onClick={handlePrevChapter}
          disabled={currentBookIndex === 0 && currentChapterIndex === 0}
          className="p-1 text-gray-400 hover:text-indigo-600 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-2">
            <select 
                value={currentBookIndex}
                onChange={(e) => {
                    setCurrentBookIndex(Number(e.target.value));
                    window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="bg-transparent font-serif font-bold text-gray-900 text-lg text-center outline-none cursor-pointer hover:underline decoration-indigo-300"
            >
                {currentVersionData.books.map((book, idx) => (
                    <option key={book.name} value={idx}>{book.name}</option>
                ))}
            </select>
            <span className="font-serif text-lg text-gray-900">:</span>
            <select 
                value={currentChapterIndex}
                onChange={(e) => {
                    setCurrentChapterIndex(Number(e.target.value));
                    window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="bg-transparent font-serif font-bold text-gray-900 text-lg text-center outline-none cursor-pointer hover:underline decoration-indigo-300"
            >
                {currentBook.chapters.map((chap, idx) => (
                    <option key={chap.number} value={idx}>{chap.number}</option>
                ))}
            </select>
        </div>

        <button 
          onClick={handleNextChapter}
          disabled={currentBookIndex === currentVersionData.books.length - 1 && currentChapterIndex === currentBook.chapters.length - 1}
          className="p-1 text-gray-400 hover:text-indigo-600 disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bible Text Content */}
      <div className="px-6 py-6 max-w-2xl mx-auto">
        <div 
            className="font-serif text-gray-800 leading-loose"
            style={{ fontSize: `${fontSize}px` }}
        >
            {currentChapter.verses.map((verse) => (
                <span key={verse.number} className="inline">
                    <sup className="text-[0.6em] font-sans font-bold text-indigo-400 mr-1 align-top select-none opacity-80 top-[-0.2em] relative">
                        {verse.number}
                    </sup>
                    <span className="hover:bg-yellow-100 transition-colors duration-200 cursor-text">
                        {verse.text}
                    </span>
                    {" "}
                </span>
            ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center text-center">
            <p className="text-xs text-gray-400 italic max-w-xs">
              © {new Date().getFullYear()} Grace Valley Church. Scripture quotations taken from the Holy Bible.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Bible;