// src/tweaks.jsx — floating tweak panel for brand color + hero headline

const BRAND_COLORS = {
  blue:  { ink:'#0A0A0A', brand:'#0B1E3F', label:'Deep navy' },
  teal:  { ink:'#0A0A0A', brand:'#0F3B3A', label:'Dark teal' },
  warm:  { ink:'#1A1A1A', brand:'#1A1A1A', label:'Near-black' },
};

function applyBrand(key) {
  const c = BRAND_COLORS[key] || BRAND_COLORS.blue;
  document.querySelectorAll('.v-scope').forEach(el => {
    el.style.setProperty('--ink', c.ink);
    el.style.setProperty('--brand', c.brand);
  });
}

function VTweaks() {
  const [open, setOpen] = React.useState(true);
  const [brand, setBrand] = React.useState(window.TWEAKS?.brandColor || 'blue');
  const [headline, setHeadline] = React.useState(window.TWEAKS?.headlineVariant ?? 0);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setActive(true);
      if (e.data?.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  React.useEffect(() => { applyBrand(brand); }, [brand]);
  React.useEffect(() => {
    window.TWEAKS.headlineVariant = headline;
    window.dispatchEvent(new CustomEvent('tweaks-changed'));
  }, [headline]);

  const update = (key, val) => {
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  };

  if (!active) return null;

  return (
    <div style={{
      position:'fixed', right: 16, bottom: 16, zIndex: 9999, width: 280,
      background:'#fff', border:'1px solid rgba(10,10,10,0.12)', borderRadius: 8,
      boxShadow:'0 12px 40px rgba(10,10,10,0.12)',
      fontFamily:'Inter Tight, system-ui, sans-serif', color:'#0A0A0A',
    }}>
      <div onClick={() => setOpen(o => !o)} style={{
        padding:'12px 14px', display:'flex', justifyContent:'space-between', alignItems:'center',
        borderBottom: open ? '1px solid rgba(10,10,10,0.08)' : 0, cursor:'pointer',
      }}>
        <span style={{ fontSize: 13, fontWeight: 500 }}>Tweaks</span>
        <span style={{ fontSize: 12, color:'rgba(10,10,10,0.5)' }}>{open ? '▾' : '▸'}</span>
      </div>
      {open && (
        <div style={{ padding: 14, display:'flex', flexDirection:'column', gap: 16 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(10,10,10,0.5)', marginBottom: 8, fontFamily:'JetBrains Mono, monospace' }}>Brand color</div>
            <div style={{ display:'flex', gap: 8 }}>
              {Object.entries(BRAND_COLORS).map(([k, c]) => (
                <button key={k} onClick={() => { setBrand(k); update('brandColor', k); }} style={{
                  flex: 1, padding:'8px 6px', border:`1px solid ${brand === k ? '#0A0A0A' : 'rgba(10,10,10,0.15)'}`,
                  background:'#fff', cursor:'pointer', borderRadius: 4, display:'flex', flexDirection:'column', alignItems:'center', gap: 6,
                }}>
                  <span style={{ width: 24, height: 24, borderRadius: 4, background: c.brand }} />
                  <span style={{ fontSize: 10.5, color:'rgba(10,10,10,0.7)' }}>{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(10,10,10,0.5)', marginBottom: 8, fontFamily:'JetBrains Mono, monospace' }}>Homepage headline</div>
            <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
              {['Functional · speed & authority','Quiet authority · positioning','Editorial · craft-forward'].map((lbl, i) => (
                <button key={i} onClick={() => { setHeadline(i); update('headlineVariant', i); }} style={{
                  textAlign:'left', padding:'8px 10px', border:`1px solid ${headline === i ? '#0A0A0A' : 'rgba(10,10,10,0.15)'}`,
                  background:'#fff', cursor:'pointer', borderRadius: 4, fontSize: 12,
                }}>{lbl}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

window.VTweaks = VTweaks;
window.applyBrand = applyBrand;
