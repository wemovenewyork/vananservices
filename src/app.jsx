// src/app.jsx — SPA router

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
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
