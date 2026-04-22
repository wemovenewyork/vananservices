// src/app.jsx — wires artboards into the design canvas

function useTweakVersion() {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const h = () => setV(x => x + 1);
    window.addEventListener('tweaks-changed', h);
    return () => window.removeEventListener('tweaks-changed', h);
  }, []);
  return v;
}

function App() {
  useTweakVersion();
  React.useEffect(() => { window.applyBrand(window.TWEAKS?.brandColor || 'blue'); }, []);

  return (
    <>
      <DesignCanvas>
        <DCSection id="vanan" title="Vanan — Site exploration" subtitle="Three artboards · Tweaks for brand color and hero headline">
          <DCArtboard id="home"    label="Homepage"                       width={1280} height={4100}><VHome /></DCArtboard>
          <DCArtboard id="service" label="Certified translation · detail" width={1280} height={3920}><VService /></DCArtboard>
          <DCArtboard id="quote"   label="Quote wizard · interactive"     width={1280} height={1100}><VQuote /></DCArtboard>
        </DCSection>
      </DesignCanvas>
      <VTweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
