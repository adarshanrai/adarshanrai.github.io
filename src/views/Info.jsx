import React, { useState } from 'react';

const API_URL = 'https://adarshan.onrender.com';

export default function Info() {
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailInput.trim() || !messageInput.trim()) return;

    setIsSending(true);
    try {
      const response = await fetch(`${API_URL}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput,
          message: messageInput
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (data.actualEmailSent) {
          showToast('Message sent directly to the developer!');
        } else {
          // SMTP not configured on backend
          const recipient = 'raiadarshan05@gmail.com';
          const subject = encodeURIComponent('Feedback & Inquiry: LingoSwift');
          const body = encodeURIComponent(`From: ${emailInput}\n\nMessage:\n${messageInput}`);
          window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
          showToast('Opening mail client (SMTP not configured)...');
        }
        setEmailInput('');
        setMessageInput('');
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      // Backend offline fallback: trigger client-side mailto fallback
      const recipient = 'raiadarshan05@gmail.com';
      const subject = encodeURIComponent('Feedback & Inquiry: LingoSwift');
      const body = encodeURIComponent(`From: ${emailInput}\n\nMessage:\n${messageInput}`);
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      showToast('Opening local mail client (Offline Mode)...');
      setEmailInput('');
      setMessageInput('');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="settings-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-message">
          {toastMessage}
        </div>
      )}

      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: 'var(--on-background)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Developer Note</h2>
      </div>

      <div className="settings-grid">
        {/* Main Dev Note Card */}
        <div className="glass-card settings-card md-col-span-2" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="settings-card-header" style={{ marginBottom: '0.5rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '28px' }}>
              code
            </span>
            <h3 className="settings-card-title" style={{ fontSize: '1.25rem' }}>About </h3>
          </div>

          <p style={{ lineHeight: '1.6', color: 'var(--on-surface-variant)', fontSize: '0.95rem', margin: 0 }}>
            Welcome to <strong>Verbis</strong>! This application was built with the purpose of highlighting the beautiful, rich linguistic heritage of the indigenous communities of the Himalayan state of Sikkim.
          </p>

          <p style={{ lineHeight: '1.6', color: 'var(--on-surface-variant)', fontSize: '0.95rem', margin: 0 }}>
            By focusing on languages that are spoken in Sikkim like <strong>Rai, Bhutia, Subba, and Tamang and many more</strong>, Verbis is an attempt to let non-local people to communicate with the locals. The system leverages a dual-translation pipeline (MongoDB database with high-performance offline in-memory fallbacks) to ensure access is always available, even in remote regions.
          </p>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', marginTop: '0.5rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: 'var(--on-background)', fontWeight: '600' }}>Key Features Built:</h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <li><strong>Heritage Profiles:</strong> Detailed cultural highlights, script systems, and historical geographies for each local community.</li>
              <li><strong>Starred Collections & History:</strong> Easy-to-use search and bookmark lists to save key expressions for educational or field reference.</li>
              <li><strong>Reliable Translations:</strong> The translations you see here are either written by me or came from a native speaker.</li>
            </ul>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', marginTop: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '24px', marginTop: '2px' }}>
              tips_and_updates
            </span>
            <div>
              <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem', color: 'var(--on-background)', fontWeight: '600' }}>Note</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--on-surface-variant)', lineHeight: '1.5' }}>
                The whole point of the project is help someone so that he/she will be able to commnunicate atleast in a basic level to the ones who speak these languages,
                its not meant to work like google translate but rather a small scale project.
              </p>
            </div>
          </div>
        </div>

        {/* Translation Credits Card */}
        <div className="glass-card settings-card md-col-span-2" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="settings-card-header" style={{ marginBottom: '0.25rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '28px' }}>
              volunteer_activism
            </span>
            <h3 className="settings-card-title" style={{ fontSize: '1.25rem' }}>Translation Credits</h3>
          </div>

          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--on-surface-variant)', lineHeight: '1.6' }}>
            A special thanks to the contributors who dedicated their time and knowledge to translate and verify the vocabulary:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Rai Translation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255, 255, 255, 0.02)',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.2)';
              e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(99, 102, 241, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>
                  translate
                </span>
                <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--on-background)' }}>Rai Translation</span>
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--on-surface-variant)' }}>
                Manisha Rai
              </span>
            </div>

            {/* Bhutia Translation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255, 255, 255, 0.02)',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.2)';
              e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(99, 102, 241, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>
                  translate
                </span>
                <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--on-background)' }}>Bhutia Translation</span>
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--on-surface-variant)' }}>
                Dorjee Doma Bhutia
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="glass-card settings-card md-col-span-2" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="settings-card-header" style={{ marginBottom: '0.25rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>
              contact_support
            </span>
            <h3 className="settings-card-title">Get in Touch</h3>
          </div>
          
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--on-surface-variant)', lineHeight: '1.5' }}>
     Want to contribute translations, or experiencing issues? Send a message to me
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--on-background)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Email Address</label>
              <input 
                type="email" 
                required
                placeholder="you@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="feedback-input"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--on-background)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
              <textarea 
                required
                placeholder="Type your feedback, questions, or message here..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                rows="4"
                className="feedback-textarea"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSending || !emailInput.trim() || !messageInput.trim()}
              className="translate-btn"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '0.5rem', 
                padding: '0.75rem 1.75rem', 
                width: '100%',
                margin: '0',
                fontFamily: 'var(--font-display)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.85rem'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
              <span>{isSending ? 'Sending Message...' : 'Send Message'}</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
