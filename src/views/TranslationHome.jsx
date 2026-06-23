import React, { useState, useEffect, useRef } from 'react';

const LOCAL_TRANSLATIONS = [
  // English ↔ Rai
  { sourceText: "hello", translatedText: "Sewa", sourceLang: "English", targetLang: "Rai" },
  { sourceText: "sewa", translatedText: "Hello", sourceLang: "Rai", targetLang: "English" },
  { sourceText: "namaste", translatedText: "Sewanney", sourceLang: "English", targetLang: "Rai" },
  { sourceText: "sewanney", translatedText: "Namaste", sourceLang: "Rai", targetLang: "English" },
  { sourceText: "thank you", translatedText: "Alangney", sourceLang: "English", targetLang: "Rai" },
  { sourceText: "alangney", translatedText: "Thank you", sourceLang: "Rai", targetLang: "English" },

  // English ↔ Subba
  { sourceText: "hello", translatedText: "Sewaaro", sourceLang: "English", targetLang: "Subba" },
  { sourceText: "sewaaro", translatedText: "Hello", sourceLang: "Subba", targetLang: "English" },
  { sourceText: "thank you", translatedText: "nugenlo", sourceLang: "English", targetLang: "Subba" },
  { sourceText: "nugenlo", translatedText: "Thank you", sourceLang: "Subba", targetLang: "English" },
 
  // English ↔ Bhutia
  { sourceText: "hello", translatedText: "Tashi Delek", sourceLang: "English", targetLang: "Bhutia" },
  { sourceText: "tashi delek", translatedText: "Hello", sourceLang: "Bhutia", targetLang: "English" },
  { sourceText: "thank you", translatedText: "Thujeche", sourceLang: "English", targetLang: "Bhutia" },
  { sourceText: "thujeche", translatedText: "Thank you", sourceLang: "Bhutia", targetLang: "English" },
  

  // English ↔ Tamang
  { sourceText: "hello", translatedText: "fhyafullo", sourceLang: "English", targetLang: "Tamang" },
  { sourceText: "fhyafullo", translatedText: "Hello", sourceLang: "Tamang", targetLang: "English" },
  { sourceText: "hello", translatedText: "fhyulla", sourceLang: "English", targetLang: "Tamang" },
  { sourceText: "fhyulla", translatedText: "Hello", sourceLang: "Tamang", targetLang: "English" },
  { sourceText: "thank you", translatedText: "dhanyabad", sourceLang: "English", targetLang: "Tamang" },
  { sourceText: "dhanyabad", translatedText: "Thank you", sourceLang: "Tamang", targetLang: "English" },
];

const findLocalTranslation = (word, sourceLang, targetLang) => {
  const normWord = word.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
  const normSrc = sourceLang.toLowerCase();
  const normTgt = targetLang.toLowerCase();

  // Try exact lookup first
  const match = LOCAL_TRANSLATIONS.find(item => 
    item.sourceText.toLowerCase() === word.trim().toLowerCase() &&
    item.sourceLang.toLowerCase() === normSrc &&
    item.targetLang.toLowerCase() === normTgt
  );
  if (match) return match.translatedText;

  // Try normalized lookup next
  const normMatch = LOCAL_TRANSLATIONS.find(item => 
    item.sourceText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"") === normWord &&
    item.sourceLang.toLowerCase() === normSrc &&
    item.targetLang.toLowerCase() === normTgt
  );
  if (normMatch) return normMatch.translatedText;

  return null;
};

const allLanguages = [
  { name: "Rai", icon: "menu_book" },
  { name: "Bhutia", icon: "menu_book" },
  { name: "Subba", icon: "menu_book" },
  { name: "Tamang", icon: "menu_book" },
  { name: "English", icon: "menu_book" }
];

const COMMUNITY_INFO = {
  Rai: {
    title: "Rai Community & Language",
    location: "Eastern Nepal (Kirat region), Sikkim, and Darjeeling",
    population: "Approx. 620,000 (Nepal)",
    script: "Dhamu Script / Devanagari",
    description: "The Rai (Kirat Rai) are one of the most ancient indigenous ethnolinguistic groups of Nepal and the broader Himalayan region. They belong to the Kirat coalition. Rai culture is deeply intertwined with nature, centered around 'Mundhum'—their ancient oral guide and philosophy of life. They celebrate 'Udhauli' and 'Ubhauli' festivals to mark the migration of birds and seasonal cycles.",
    culturalHighlight: "The Sakela dance, performed in groups with traditional instruments like the Dhol (drum) and Jhyamta (cymbals) to worship Mother Nature.",
    imagePath: "https://i.pinimg.com/736x/18/42/e7/1842e7ecf60826e49a6295962480a466.jpg",
    imageFilename: "rai.jpg"
  },
  Subba: {
    title: "Subba (Limbu) Community & Language",
    location: "Limbuwan region (Eastern Nepal), Sikkim, and West Bengal",
    population: "Approx. 390,000 (Nepal)",
    script: "Sirijunga Script",
    description: "The Limbu (Yakthung), commonly referred to as Subba, are an indigenous group native to the hills of eastern Nepal and Sikkim. They are part of the Kirati group. The Limbus have a rich oral tradition known as 'Mundhum'. Traditional Limbu houses are built of stone and mud, and their social system is divided into various patrilineal clans.",
    culturalHighlight: "The Chyabrung (Ke) dance, a traditional Limbu drum dance performed during weddings and major social ceremonies.",
    imagePath: "https://i.pinimg.com/736x/80/e1/43/80e1438132bbbd3afca526f779223a8f.jpg",
    imageFilename: "subba.jpg"
  },
  Bhutia: {
    title: "Bhutia Community & Language",
    location: "Sikkim, Darjeeling (India), and parts of Bhutan/Nepal",
    population: "Approx. 120,000 (Sikkim)",
    script: "Tibetan Script",
    description: "The Bhutias (Lhopo) are of Tibetan origin and settled in Sikkim around the 15th century. They form a core part of Sikkimese culture alongside the Lepcha and Nepalese groups. Bhutia society is traditionally agrarian and pastoral, and they are practitioners of Tibetan Vajrayana Buddhism. They celebrate 'Losar' (Tibetan New Year) and 'Lhabab Duchen' with vibrant traditional colors.",
    culturalHighlight: "The 'Bakpa' masked dance and the consumption of 'Cha-Chang' (traditional butter tea) and millet beer (Tongba).",
    imagePath: "https://i.pinimg.com/736x/2b/fb/ae/2bfbae3ba05b9c7cd942f02c6f2007e7.jpg",
    imageFilename: "bhutia.jpg"
  },
  Tamang: {
    title: "Tamang Community & Language",
    location: "Kathmandu Valley, Central Hills of Nepal, and Darjeeling",
    population: "Approx. 1.5 Million (Nepal)",
    script: "Tam-Yig / Devanagari",
    description: "The Tamang are one of the largest indigenous ethnic groups in Nepal, residing heavily around the hills of the Kathmandu Valley. The word 'Tamang' is believed to originate from 'Ta' (horse) and 'Mang' (trader or warrior). They practice a blend of Tibeto-Burman animist traditions and Vajrayana Buddhism. They are renowned for their traditional architecture, wood carving, and thankas.",
    culturalHighlight: "The Damphu dance, performed to the rhythm of the 'Damphu'—a traditional single-sided circular drum decorated with a carved symbol of a bird.",
    imagePath: "https://i.pinimg.com/736x/dd/cc/cc/ddcccc90a5b4da8330010be9992e8ab9.jpg",
    imageFilename: "tamang.jpg"
  },

};

export default function TranslationHome({ 
  sourceLang, 
  targetLang, 
  setSourceLang,
  setTargetLang,
  onSwapLanguages, 
  onAddTranslation, 
  setView,
  setIndepthLang
}) {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Custom translation fields for missing entries
  const [showAddForm, setShowAddForm] = useState(false);
  const [customTranslation, setCustomTranslation] = useState('');
  const [isSavingCustom, setIsSavingCustom] = useState(false);

  const [sourceDropdownOpen, setSourceDropdownOpen] = useState(false);
  const [targetDropdownOpen, setTargetDropdownOpen] = useState(false);
  const [dbStatus, setDbStatus] = useState('Checking...');

  const sourceDropdownRef = useRef(null);
  const targetDropdownRef = useRef(null);

  const [activeInfoLang, setActiveInfoLang] = useState(() => {
    return COMMUNITY_INFO[targetLang] ? targetLang : (COMMUNITY_INFO[sourceLang] ? sourceLang : null);
  });
  const prevSourceLang = useRef(sourceLang);
  const prevTargetLang = useRef(targetLang);

  useEffect(() => {
    const sourceChanged = sourceLang !== prevSourceLang.current;
    const targetChanged = targetLang !== prevTargetLang.current;

    if (sourceChanged && targetChanged) {
      // Swapped
      if (COMMUNITY_INFO[targetLang]) {
        setActiveInfoLang(targetLang);
      } else if (COMMUNITY_INFO[sourceLang]) {
        setActiveInfoLang(sourceLang);
      }
    } else if (sourceChanged) {
      if (COMMUNITY_INFO[sourceLang]) {
        setActiveInfoLang(sourceLang);
      }
    } else if (targetChanged) {
      if (COMMUNITY_INFO[targetLang]) {
        setActiveInfoLang(targetLang);
      }
    }

    prevSourceLang.current = sourceLang;
    prevTargetLang.current = targetLang;
  }, [sourceLang, targetLang]);

  const [customImages, setCustomImages] = useState(() => {
    try {
      const saved = localStorage.getItem('lingoswift_community_images');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [imageErrors, setImageErrors] = useState({});
  const [imageUrlInput, setImageUrlInput] = useState('');

  const handleApplyImageUrl = (lang, url) => {
    if (!url.trim()) return;
    const updated = { ...customImages, [lang]: url.trim() };
    setCustomImages(updated);
    setImageErrors(prev => ({ ...prev, [lang]: false }));
    try {
      localStorage.setItem('lingoswift_community_images', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearCustomImage = (lang) => {
    const updated = { ...customImages };
    delete updated[lang];
    setCustomImages(updated);
    setImageErrors(prev => ({ ...prev, [lang]: false }));
    try {
      localStorage.setItem('lingoswift_community_images', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setImageUrlInput('');
  }, [targetLang, sourceLang]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sourceDropdownRef.current && !sourceDropdownRef.current.contains(event.target)) {
        setSourceDropdownOpen(false);
      }
      if (targetDropdownRef.current && !targetDropdownRef.current.contains(event.target)) {
        setTargetDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    async function checkStatus() {
      try {
        const res = await fetch('http://localhost:5000/api/translate/seed');
        const data = await res.json();
        if (res.ok && data.success) {
          setDbStatus(data.dataSource === 'MongoDB' ? 'Connected' : 'Offline Mode');
        } else {
          setDbStatus('Offline Mode');
        }
      } catch (err) {
        setDbStatus('Offline Mode');
      }
    }
    checkStatus();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSwap = () => {
    setSourceDropdownOpen(false);
    setTargetDropdownOpen(false);
    setIsSwapping(true);
    setTimeout(() => setIsSwapping(false), 400);
    onSwapLanguages();
  };

  // Handle auto-clear or placeholder text
  const handleClear = () => {
    setInputText('');
    setTranslatedText('');
    setShowAddForm(false);
    setCustomTranslation('');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsTranslating(true);
    setShowAddForm(false);
    setCustomTranslation('');

    try {
      const response = await fetch('http://localhost:5000/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          word: inputText,
          sourceLang,
          targetLang
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setTranslatedText(data.translatedText);
        setDbStatus(data.dataSource === 'MongoDB' ? 'Connected' : 'Offline Mode');
        
        // Add to history list
        onAddTranslation({
          id: Date.now().toString(),
          sourceLang,
          targetLang,
          sourceText: inputText,
          translatedText: data.translatedText,
          timestamp: 'Just now',
          timestampRaw: Date.now(),
          starred: false
        });
      } else if (response.status === 404) {
        // Translation not found in MongoDB
        const mockResult = `[Not Found in DB]: ${inputText.split(' ').map(w => w.length > 3 ? w.split('').reverse().join('') : w).join(' ')}`;
        setTranslatedText(mockResult);
        
        // Populate custom add form
        const fallbackText = inputText.split(' ').map(w => w.length > 3 ? w.split('').reverse().join('') : w).join(' ');
        setCustomTranslation(fallbackText);
        setShowAddForm(true);
        showToast('Word not found in database. You can save a custom translation.');
      } else {
        throw new Error(data.message || 'API request failed');
      }
    } catch (err) {
      console.warn('API Error, falling back to local simulation:', err.message);
      setDbStatus('Offline Mode');
      
      // Fallback dictionary lookups if offline/errored
      const localResult = findLocalTranslation(inputText, sourceLang, targetLang);
      const result = localResult !== null ? localResult : `[Local Fallback]: ${inputText.split(' ').map(w => w.length > 3 ? w.split('').reverse().join('') : w).join(' ')}`;

      setTranslatedText(result);
      
      onAddTranslation({
        id: Date.now().toString(),
        sourceLang,
        targetLang,
        sourceText: inputText,
        translatedText: result,
        timestamp: 'Offline Fallback',
        timestampRaw: Date.now(),
        starred: false
      });
      showToast('Offline Mode: Translation retrieved from local dictionary.');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSaveCustom = async () => {
    if (!customTranslation.trim()) return;

    setIsSavingCustom(true);
    try {
      const response = await fetch('http://localhost:5000/api/translate/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          word: inputText,
          translatedText: customTranslation,
          sourceLang,
          targetLang
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setTranslatedText(customTranslation);
        setShowAddForm(false);
        showToast('Saved successfully to MongoDB database!');
        
        // Add updated record to history list
        onAddTranslation({
          id: Date.now().toString(),
          sourceLang,
          targetLang,
          sourceText: inputText,
          translatedText: customTranslation,
          timestamp: 'Saved to Database',
          timestampRaw: Date.now(),
          starred: false
        });
      } else {
        throw new Error(data.message || 'Save failed');
      }
    } catch (err) {
      console.error(err);
      showToast('Could not save translation: Server connection failed.');
    } finally {
      setIsSavingCustom(false);
    }
  };

  const handleCopy = () => {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
    showToast('Translation copied to clipboard!');
  };

  const handleSpeak = () => {
    if (!translatedText) return;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(translatedText);
      const lowerLang = targetLang ? targetLang.toLowerCase() : '';
      if (lowerLang.includes('english')) utterance.lang = 'en-US';
      else if (lowerLang.includes('rai')) utterance.lang = 'ne-NP';
      else if (lowerLang.includes('subba')) utterance.lang = 'ne-NP';
      else if (lowerLang.includes('bhutia')) utterance.lang = 'ne-NP';
      else if (lowerLang.includes('lepcha')) utterance.lang = 'ne-NP';
      
      window.speechSynthesis.speak(utterance);
      showToast('Speaking translation...');
    } else {
      showToast('Speech synthesis not supported in this browser.');
    }
  };

  const activeInfo = activeInfoLang ? COMMUNITY_INFO[activeInfoLang] : null;
  const currentImagePath = activeInfo ? (customImages[activeInfoLang] || activeInfo.imagePath) : '';

  const prevImagePath = useRef(currentImagePath);

  useEffect(() => {
    if (currentImagePath !== prevImagePath.current) {
      setImageLoading(true);
      prevImagePath.current = currentImagePath;
    }
  }, [currentImagePath]);

  return (
    <div className="translation-home">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-message">
          {toastMessage}
        </div>
      )}

      {/* Workspace Header with DB Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: 'var(--on-background)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Workspace</h2>
        <div className="db-status-badge">
          <span className={`status-dot ${dbStatus === 'Connected' ? 'status-dot--online' : 'status-dot--offline'}`}></span>
          <span className="status-text">{dbStatus === 'Connected' ? 'MongoDB Connected' : 'Offline Mode'}</span>
        </div>
      </div>

      {/* Language Selector Bar */}
      <section className="lang-bar">
        <div className="lang-dropdown-wrapper" ref={sourceDropdownRef}>
          <button 
            type="button"
            onClick={() => {
              setSourceDropdownOpen(!sourceDropdownOpen);
              setTargetDropdownOpen(false);
            }}
            className="lang-btn"
          >
            <span className="lang-btn-label">
              {sourceLang}
            </span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px', transform: sourceDropdownOpen ? 'rotate(180deg)' : 'none' }}>expand_more</span>
          </button>
          
          <div className={`lang-dropdown ${sourceDropdownOpen ? 'open' : ''}`}>
            {allLanguages.map((lang) => (
              <button
                key={lang.name}
                type="button"
                onClick={() => {
                  setSourceLang(lang.name);
                  setSourceDropdownOpen(false);
                }}
                className={`lang-dropdown-item ${sourceLang === lang.name ? 'selected' : ''}`}
              >
                <span className="material-symbols-outlined">{lang.icon}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleSwap}
          className="swap-btn"
          title="Swap Languages"
        >
          <span className="material-symbols-outlined">swap_horiz</span>
        </button>

        <div className="lang-dropdown-wrapper" ref={targetDropdownRef}>
          <button 
            type="button"
            onClick={() => {
              setTargetDropdownOpen(!targetDropdownOpen);
              setSourceDropdownOpen(false);
            }}
            className="lang-btn"
          >
            <span className="lang-btn-label">
              {targetLang}
            </span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px', transform: targetDropdownOpen ? 'rotate(180deg)' : 'none' }}>expand_more</span>
          </button>
          
          <div className={`lang-dropdown ${targetDropdownOpen ? 'open' : ''}`}>
            {allLanguages.filter((lang) => lang.name !== 'English').map((lang) => (
              <button
                key={lang.name}
                type="button"
                onClick={() => {
                  setTargetLang(lang.name);
                  setTargetDropdownOpen(false);
                }}
                className={`lang-dropdown-item ${targetLang === lang.name ? 'selected' : ''}`}
              >
                <span className="material-symbols-outlined">{lang.icon}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Translation Interface Grid */}
      <div className="translation-grid">
        
        {/* Input Card */}
        <div className={`glass-card input-card ${isSwapping ? 'card-swap-animate' : ''}`}>
          <div className="card-header-row">
            <span className="card-header-label">
              Source Text ({sourceLang})
            </span>
            {inputText && (
              <button 
                onClick={handleClear}
                className="close-btn"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  close
                </span>
              </button>
            )}
          </div>
          
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="textarea-field" 
            placeholder={`Type in ${sourceLang} to translate...`}
            maxLength={500}
          ></textarea>
          <div className="character-counter">
            {inputText.length} / 500
          </div>

          {/* Input Controls */}
          <div className="input-controls">
            
            <button 
              onClick={handleTranslate}
              disabled={!inputText.trim() || isTranslating}
              className="translate-btn"
            >
              {isTranslating ? 'Translating...' : 'Translate'}
            </button>
          </div>
        </div>

        {/* Visual Separator with Waveform */}
        <div className={`waveform-container ${isTranslating ? 'active' : ''}`}>
          <div className="waveform-line">
            {isTranslating ? (
              <div className="active-waveform-bars">
                <div className="active-waveform-bar"></div>
                <div className="active-waveform-bar"></div>
                <div className="active-waveform-bar"></div>
                <div className="active-waveform-bar"></div>
                <div className="active-waveform-bar"></div>
              </div>
            ) : (
              <div className="shimmer" style={{ position: 'absolute', inset: 0 }}></div>
            )}
          </div>
        </div>

        {/* Result Card */}
        <div className={`glass-card result-card ${isSwapping ? 'card-swap-animate' : ''}`}>
          <div className="card-header-row">
            <span className="card-header-label">
              Translation ({targetLang})
            </span>
            {translatedText && (
              <div className="result-actions-row">
                <button 
                  onClick={handleSpeak}
                  className="result-action-btn"
                  title="Listen"
                >
                  <span className="material-symbols-outlined">
                    volume_up
                  </span>
                </button>
                <button 
                  onClick={handleCopy}
                  className="result-action-btn"
                  title="Copy to Clipboard"
                >
                  <span className="material-symbols-outlined">
                    content_copy
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="result-text">
            {translatedText ? translatedText : (
              <span className="result-text-empty">
                Your translations will appear here.
              </span>
            )}
          </div>


          {showAddForm && (
            <div className="custom-add-container" style={{ marginTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#f87171' }}>info</span>
                Not found in database. Customize and save:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input 
                  type="text"
                  value={customTranslation}
                  onChange={(e) => setCustomTranslation(e.target.value)}
                  placeholder={`Enter translation in ${targetLang}...`}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    color: 'inherit',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={handleSaveCustom}
                  disabled={isSavingCustom || !customTranslation.trim()}
                  className="translate-btn"
                  style={{ width: '100%', alignSelf: 'stretch', padding: '0.65rem', margin: '0' }}
                >
                  {isSavingCustom ? 'Saving to Database...' : 'Save to Database'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {activeInfo && (
        <div className="community-info-section">
          <div className="glass-card community-info-card">
            
            <div className="community-info-header">
              <div className="community-info-icon-container">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <div className="community-info-title-group">
                <h3 className="community-info-title">{activeInfo.title}</h3>
                <span className="community-info-subtitle">Heritage & Culture</span>
              </div>
            </div>

            <div className="community-info-card-content">
              <div className="community-info-main">
                <div className="community-info-quick-stats">
                  <div className="stat-pill">
                    <div className="stat-item">
                      <span className="stat-label">Region</span>
                      <span className="stat-value">{activeInfo.location}</span>
                    </div>
                  </div>
                  <div className="stat-pill">
                    <div className="stat-item">
                      <span className="stat-label">Estimated Population</span>
                      <span className="stat-value">{activeInfo.population}</span>
                    </div>
                  </div>
                  <div className="stat-pill">
                    <div className="stat-item">
                      <span className="stat-label">Script System</span>
                      <span className="stat-value">{activeInfo.script}</span>
                    </div>
                  </div>
                </div>

                <p className="community-info-description">
                  {activeInfo.description}
                </p>

                <div className="community-info-highlight">
                  <span className="material-symbols-outlined highlight-icon">campaign</span>
                  <div className="highlight-text">
                    <div className="highlight-title">Cultural Highlight</div>
                    {activeInfo.culturalHighlight}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIndepthLang(activeInfoLang);
                    setView('indepth');
                  }}
                  className="learn-more-btn"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </button>
              </div>

              <div className="community-image-container">
                {imageLoading && !imageErrors[activeInfoLang] && (
                  <div className="skeleton-loader"></div>
                )}
                <img 
                  src={currentImagePath} 
                  alt={activeInfo.title}
                  className="community-image"
                  style={{ display: (imageErrors[activeInfoLang] || imageLoading) ? 'none' : 'block' }}
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageErrors(prev => ({ ...prev, [activeInfoLang]: true }));
                    setImageLoading(false);
                  }}
                />
                
                {imageErrors[activeInfoLang] && (
                  <div className="community-image-placeholder">
                    <span className="material-symbols-outlined placeholder-icon">image</span>
                    <span className="placeholder-text">Place {activeInfo.title} Image here</span>
                    <span className="placeholder-subtext">Save image as "{activeInfo.imageFilename}" in public/images/</span>
                    
                    <div className="image-url-input-row">
                      <input 
                        type="text" 
                        placeholder="Or paste an image URL..."
                        value={imageUrlInput}
                        onChange={(e) => setImageUrlInput(e.target.value)}
                        className="image-url-input"
                      />
                      <button 
                        type="button"
                        onClick={() => {
                          handleApplyImageUrl(activeInfoLang, imageUrlInput);
                          setImageUrlInput('');
                        }}
                        className="image-url-btn"
                      >
                        Load
                      </button>
                    </div>
                  </div>
                )}

      
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
