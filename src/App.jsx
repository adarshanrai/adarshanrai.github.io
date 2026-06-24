import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import TranslationHome from './views/TranslationHome';
import History from './views/History';
import Saved from './views/Saved';
import Info from './views/Info';
import Indepth from './views/Indepth';

export default function App() {
  const [view, setView] = useState('translate'); // 'translate' | 'history' | 'saved' | 'info' | 'indepth'
  const [theme, setTheme] = useState('light'); // 'dark' | 'light'
  const [sourceLang, setSourceLang] = useState('English');
  const [targetLang, setTargetLang] = useState('Rai');
  const [indepthLang, setIndepthLang] = useState('Rai');

  const [historyList, setHistoryList] = useState([]);

  // Synchronize HTML dark class when theme shifts
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };



  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  const handleAddTranslation = (newItem) => {
    setHistoryList(prev => [newItem, ...prev]);
  };

  const handleToggleStar = (id) => {
    setHistoryList(prev => 
      prev.map(item => item.id === id ? { ...item, starred: !item.starred } : item)
    );
  };

  // Determine current active view component
  const renderView = () => {
    switch (view) {
      case 'translate':
        return (
          <TranslationHome 
            sourceLang={sourceLang}
            targetLang={targetLang}
            setSourceLang={setSourceLang}
            setTargetLang={setTargetLang}
            onSwapLanguages={handleSwapLanguages}
            onAddTranslation={handleAddTranslation}
            setView={setView}
            setIndepthLang={setIndepthLang}
          />
        );
      case 'history':
        return (
          <History 
            historyList={historyList}
            onToggleStar={handleToggleStar}
          />
        );
      case 'saved':
        return (
          <Saved 
            historyList={historyList}
            onToggleStar={handleToggleStar}
          />
        );
      case 'info':
        return (
          <Info />
        );
      case 'indepth':
        return (
          <Indepth 
            langName={indepthLang}
            setView={setView}
          />
        );

      default:
        return (
          <div className="empty-state">
            <span className="material-symbols-outlined empty-state-icon">error</span>
            <p className="empty-state-text">View not found.</p>
          </div>
        );
    }
  };

  return (
    <div className="app-layout">
      {/* Background Decorative Shader Elements */}
      <div className="shaders-container">
        <div className="bg-shader-1"></div>
        <div className="bg-shader-2"></div>
      </div>

      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Container */}
      <main className="main-content">
        {renderView()}
      </main>

      <BottomNav currentView={view} setView={setView} />
    </div>
  );
}
