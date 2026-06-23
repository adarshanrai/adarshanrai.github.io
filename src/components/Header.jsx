import React from 'react';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo-container">
          <span className="material-symbols-outlined logo-icon">
            language
          </span>
          <h1 className="header-title">
          Verbis
          </h1>
        </div>
        <div className="nav-quote">
          "Language divides words, not people."
        </div>
        <button 
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>
    </header>
  );
}