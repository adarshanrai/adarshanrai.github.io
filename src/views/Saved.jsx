import React, { useState } from 'react';

export default function Saved({ 
  historyList, 
  onToggleStar
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2000);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    showToast('Translation copied!');
  };

  const handleSpeak = (text, lang) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const lowerLang = lang ? lang.toLowerCase() : '';
      if (lowerLang.includes('english')) utterance.lang = 'en-US';
      else if (lowerLang.includes('rai')) utterance.lang = 'ne-NP';
      else if (lowerLang.includes('subba')) utterance.lang = 'ne-NP';
      else if (lowerLang.includes('bhutia')) utterance.lang = 'ne-NP';
      else if (lowerLang.includes('lepcha')) utterance.lang = 'ne-NP';
      
      window.speechSynthesis.speak(utterance);
      showToast('Speaking...');
    } else {
      showToast('Speech synthesis not supported');
    }
  };

  // Filter list based on search query and only include starred items
  const displayedList = historyList.filter(item => {
    if (!item.starred) return false;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return (
        item.sourceText.toLowerCase().includes(query) ||
        item.translatedText.toLowerCase().includes(query) ||
        item.sourceLang.toLowerCase().includes(query) ||
        item.targetLang.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <div className="history-container">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-message">
          {toastMessage}
        </div>
      )}

      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: 'var(--on-background)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Saved Translations</h2>
      </div>

      {/* Search Bar Section */}
      <div className="search-container">
        <div className="search-icon-wrapper">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search saved translations..."
          className="search-input"
        />
        {searchQuery && (
          <button 
            type="button"
            onClick={() => setSearchQuery('')} 
            className="search-clear-btn"
            title="Clear Search"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
          </button>
        )}
      </div>

      {/* Content List */}
      <div className="history-list">
        {displayedList.map((item) => (
          <div 
            key={item.id}
            className="glass-card history-card"
          >
            <div className="card-top-row">
              <div className="badge-group">
                <span className="badge badge-source">
                  {item.sourceLang}
                </span>
                <span className="material-symbols-outlined arrow-icon-small">
                  arrow_forward
                </span>
                <span className="badge badge-target">
                  {item.targetLang}
                </span>
              </div>
              <span className="time-label">
                {item.timestamp}
              </span>
            </div>

            <div className="card-grid-row">
              <div className="text-group">
                <p className="source-text-display">
                  {item.sourceText}
                </p>
                <p className="target-text-display">
                  {item.translatedText}
                </p>
              </div>
              
              <div className="card-actions">
                <button 
                  onClick={() => handleSpeak(item.translatedText, item.targetLang)}
                  className="action-btn action-btn--unstarred"
                  title="Speak"
                >
                  <span className="material-symbols-outlined">
                    volume_up
                  </span>
                </button>
                <button 
                  onClick={() => onToggleStar(item.id)}
                  className={`action-btn ${item.starred ? 'action-btn--starred' : 'action-btn--unstarred'}`}
                  title={item.starred ? 'Unsave' : 'Save'}
                >
                  <span 
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: item.starred ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    star
                  </span>
                </button>
                <button 
                  onClick={() => handleCopy(item.translatedText)}
                  className="action-btn action-btn--unstarred"
                  title="Copy"
                >
                  <span className="material-symbols-outlined">
                    content_copy
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {displayedList.length === 0 && (
          <div className="empty-state">
            <span className="material-symbols-outlined empty-state-icon">
              bookmark_border
            </span>
            <p className="empty-state-text">
              {searchQuery 
                ? `No results matching "${searchQuery}"`
                : 'No saved translations yet. Star your favorite translations to see them here!'}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
