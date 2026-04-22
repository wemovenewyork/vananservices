// src/shared.jsx — logo, nav, footer, proof row, small UI primitives

const VLogo = ({ color = 'var(--ink)', size = 18 }) => (
  <div
    onClick={() => window.navigate('home')}
    style={{ display:'flex', alignItems:'center', gap: 8, color, cursor:'pointer', textDecoration:'none' }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 4h4.2L12 17.2 17.8 4H22l-8.6 18h-2.8L2 4Z" fill="currentColor"/>
    </svg>
    <span style={{ fontWeight: 600, letterSpacing:'-0.01em', fontSize: size - 2 }}>Vanan</span>
  </div>
);

const VNav = ({ active }) => {
  const items = [
    { label: 'Services',    page: 'service' },
    { label: 'Industries',  page: 'industries' },
    { label: 'Pricing',     page: 'quote' },
    { label: 'Resources',   page: 'resources' },
    { label: 'Enterprise',  page: 'enterprise' },
  ];
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'18px 40px', borderBottom:'1px solid var(--line)', background:'var(--paper)',
      position:'sticky', top:0, zIndex:50,
    }}>
      <VLogo />
      <nav style={{ display:'flex', gap: 28 }}>
        {items.map(it => (
          <a
            key={it.label}
            href="#"
            onClick={e => { e.preventDefault(); if (it.page) window.navigate(it.page); }}
            style={{
              textDecoration:'none',
              color: active === it.label ? 'var(--ink)' : 'var(--mute)',
              fontSize: 13.5,
              fontWeight: active === it.label ? 500 : 400,
            }}
          >{it.label}</a>
        ))}
      </nav>
      <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
        <a href="#" style={{ textDecoration:'none', color:'var(--mute)', fontSize: 13.5 }}>Sign in</a>
        <button
          onClick={() => window.navigate('quote')}
          style={{
            background:'var(--brand)', color:'#fff', border:0, padding:'9px 16px',
            borderRadius: 6, fontSize: 13.5, fontWeight: 500, cursor:'pointer',
            letterSpacing:'-0.005em',
          }}
        >Get a quote →</button>
      </div>
    </header>
  );
};

const VProof = ({ compact = false }) => (
  <div style={{ padding: compact ? '28px 40px' : '40px 40px', borderBottom:'1px solid var(--line)', background:'var(--paper)' }}>
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap: 24 }}>
      <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
        <div style={{ display:'flex', gap: 2 }}>
          {[0,1,2,3,4].map(i => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00B67A" aria-hidden="true">
              <rect width="24" height="24" fill="#00B67A"/>
              <path d="M12 4.5l2.1 4.8 5.2.5-3.9 3.5 1.2 5.1L12 15.7 7.4 18.4l1.2-5.1L4.7 9.8l5.2-.5L12 4.5z" fill="#fff"/>
            </svg>
          ))}
        </div>
        <div style={{ fontSize: 13.5, color:'var(--ink)' }}>
          <strong style={{ fontWeight: 600 }}>4.9</strong>
          <span style={{ color:'var(--mute)' }}> · 2,100+ customer reviews</span>
        </div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap: 32, flexWrap:'wrap' }}>
        {['Cravath','Fenwick','Penguin RH','Pearson','Greenberg T.','WPP'].map(name => (
          <span key={name} className="v-serif" style={{
            fontSize: 15, color:'rgba(10,10,10,0.42)', letterSpacing:'-0.005em', fontWeight: 500,
          }}>{name}</span>
        ))}
      </div>
    </div>
  </div>
);

const VFooter = () => (
  <footer style={{ padding:'56px 40px 32px', background:'var(--ink)', color:'rgba(255,255,255,0.7)' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr 1fr', gap: 40 }}>
      <div>
        <VLogo color="#fff" size={20}/>
        <p style={{ fontSize: 13, lineHeight: 1.6, marginTop: 16, maxWidth: 260, color:'rgba(255,255,255,0.55)' }}>
          Translation, transcription, captioning, and voice-over in 100+ languages. 56,000+ projects delivered. New York City.
        </p>
      </div>
      {[
        ['Services', [
          ['Certified translation', 'service'],
          ['Legal', null],
          ['Business', null],
          ['Transcription', null],
          ['Captioning', null],
          ['Voiceover', null],
          ['Interpretation', null],
          ['Localization', null],
        ]],
        ['Industries', [
          ['Immigration', null],
          ['Legal', null],
          ['Media & film', null],
          ['Publishing', null],
          ['Healthcare', null],
          ['Corporate L&D', null],
        ]],
        ['Company', [['About',null],['Careers',null],['Press',null],['Security',null]]],
        ['Support', [['Help center',null],['Contact',null],['Status',null],['Accessibility',null]]],
      ].map(([title, links]) => (
        <div key={title}>
          <div style={{ fontSize: 12, textTransform:'uppercase', letterSpacing:'0.08em', color:'rgba(255,255,255,0.45)', marginBottom: 14 }}>{title}</div>
          <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap: 9 }}>
            {links.map(([label, page]) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={e => { e.preventDefault(); if (page) window.navigate(page); }}
                  style={{ color:'rgba(255,255,255,0.75)', textDecoration:'none', fontSize: 13 }}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div style={{ display:'flex', justifyContent:'space-between', marginTop: 48, paddingTop: 24, borderTop:'1px solid rgba(255,255,255,0.1)', fontSize: 12, color:'rgba(255,255,255,0.45)' }}>
      <div>© 2026 Vanan Services · 224 West 35th St., Suite 1200-8, New York, NY 10001 · +1-800-230-7918</div>
      <div style={{ display:'flex', gap: 24 }}>
        {['Privacy','Terms','DPA','SOC 2'].map(l => (
          <a key={l} href="#" style={{ color:'inherit', textDecoration:'none' }}>{l}</a>
        ))}
      </div>
    </div>
  </footer>
);

const VBtn = ({ children, variant = 'primary', onClick, style = {}, ...rest }) => {
  const base = {
    border: 0, borderRadius: 6, padding: '12px 20px', fontSize: 14, fontWeight: 500,
    cursor:'pointer', letterSpacing:'-0.005em', display:'inline-flex', alignItems:'center', gap: 8,
    transition:'opacity .12s',
  };
  const variants = {
    primary: { background:'var(--brand)', color:'#fff' },
    ghost:   { background:'transparent', color:'var(--ink)', border:'1px solid var(--line)' },
    ink:     { background:'var(--ink)', color:'#fff' },
  };
  return (
    <button {...rest} onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
};

const VLive = ({ children }) => (
  <span className="v-pill">
    <span className="v-dot" /> {children}
  </span>
);

Object.assign(window, { VLogo, VNav, VProof, VFooter, VBtn, VLive });
