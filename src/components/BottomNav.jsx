import React from 'react';

export default function BottomNav({ currentView, setView }) {
  const navItems = [
    { id: 'translate', label: 'Translate', icon: 'translate' },
    { id: 'history', label: 'History', icon: 'history' },
    { id: 'saved', label: 'Saved', icon: 'bookmark' },
  { id: 'info', label: 'Info', icon: 'help' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = currentView === item.id || (item.id === 'history' && currentView === 'history') || (item.id === 'saved' && currentView === 'saved');
        return (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`nav-btn ${isActive ? 'nav-btn--active' : 'nav-btn--inactive'}`}
          >
            <span 
              className="material-symbols-outlined" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
