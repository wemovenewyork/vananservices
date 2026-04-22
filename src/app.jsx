// src/app.jsx — SPA router

function App() {
  const [page, setPage] = React.useState('home');

  // Global navigate so child components can call window.navigate('quote') etc.
  window.navigate = (to) => {
    setPage(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {page === 'home'       && <VHome />}
      {page === 'service'    && <VService />}
      {page === 'quote'      && <VQuote />}
      {page === 'industries' && <VIndustries />}
      {page === 'resources'  && <VResources />}
      {page === 'enterprise' && <VEnterprise />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
