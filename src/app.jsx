// src/app.jsx — SPA router

function MobileStickyCTA({ currentPage }) {
  if (currentPage === 'quote') return null;
  return (
    <div className="v-mobile-cta-bar" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
      padding: '12px 20px',
      background: 'var(--brand)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex', gap: 10,
    }}>
      <VBtn
        onClick={() => window.navigate('quote')}
        style={{ flex: 1, justifyContent: 'center', background: '#fff', color: 'var(--brand)', borderRadius: 6 }}
      >Get an instant quote →</VBtn>
      <VBtn
        variant="ghost"
        style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', flexShrink: 0 }}
      >Call us</VBtn>
    </div>
  );
}

function App() {
  const [page, setPage] = React.useState('home');
  const [params, setParams] = React.useState({});

  window.navigate = (to, p = {}) => {
    setPage(to);
    setParams(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {page === 'home'       && <VHome />}
      {page === 'service'    && <VService service={params.service || 'translation'} />}
      {page === 'quote'      && <VQuote />}
      {page === 'industries' && <VIndustries />}
      {page === 'resources'  && <VResources />}
      {page === 'enterprise' && <VEnterprise />}
      {page === 'about'      && <VAbout />}
      <MobileStickyCTA currentPage={page} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
