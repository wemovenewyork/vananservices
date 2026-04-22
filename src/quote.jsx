// src/quote.jsx — Interactive multi-step quote wizard

function VQuote() {
  const [step, setStep] = React.useState(0);
  const [service, setService] = React.useState('certified');
  const [fromLang, setFromLang] = React.useState('Spanish');
  const [toLang, setToLang] = React.useState('English');
  const [pages, setPages] = React.useState(3);
  const [rush, setRush] = React.useState(false);
  const [notarize, setNotarize] = React.useState(false);
  const [purpose, setPurpose] = React.useState('USCIS');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [dropHover, setDropHover] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);

  const steps = ['Service','Details','Upload','Contact','Quote'];

  const services = [
    { id:'certified',     name:'Certified translation', desc:'USCIS, courts, schools',             price: 24.95, unit:'page' },
    { id:'legal',         name:'Legal translation',     desc:'Contracts, pleadings, e-discovery',  price: 0.18,  unit:'word' },
    { id:'business',      name:'Business translation',  desc:'Financial, marketing, internal',     price: 0.14,  unit:'word' },
    { id:'transcription', name:'Transcription',         desc:'Audio or video → text',              price: 1.50,  unit:'audio min' },
    { id:'captioning',    name:'Captioning',            desc:'SDH, SRT, VTT',                      price: 7.00,  unit:'video min' },
    { id:'voiceover',     name:'Voiceover',             desc:'120 languages',                      price: 45.00, unit:'finished min' },
    { id:'interpretation',name:'Interpretation',        desc:'Simultaneous or consecutive',        price: 85,    unit:'hour' },
    { id:'localization',  name:'Localization',          desc:'Software, web, e-learning',          price: 0.16,  unit:'word' },
  ];
  const selSvc = services.find(s => s.id === service);

  const base         = selSvc.price * pages;
  const rushFee      = rush ? base * 0.5 : 0;
  const notarizeFee  = notarize && service === 'certified' ? 19.95 : 0;
  const total        = base + rushFee + notarizeFee;

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Pricing" />

      <div className="v-quote-wrap" style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', minHeight:'calc(100vh - 57px)' }}>

        {/* Left: wizard */}
        <div style={{ padding:'56px 56px', borderRight:'1px solid var(--line)' }}>

          {/* Progress bar */}
          <div style={{ display:'flex', alignItems:'center', gap: 0, marginBottom: 48 }}>
            {steps.map((label, i) => (
              <React.Fragment key={label}>
                <button onClick={() => i < step && setStep(i)} style={{
                  background:'transparent', border:0, padding:0,
                  cursor: i < step ? 'pointer' : 'default',
                  display:'flex', alignItems:'center', gap: 10,
                }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: 999,
                    border: `1px solid ${i <= step ? 'var(--brand)' : 'var(--line)'}`,
                    background: i <= step ? 'var(--brand)' : 'transparent',
                    color: i <= step ? '#fff' : 'var(--mute)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize: 11, fontFamily:'JetBrains Mono', flexShrink: 0,
                  }}>{i < step ? '✓' : i + 1}</span>
                  <span style={{ fontSize: 13, color: i <= step ? 'var(--ink)' : 'var(--mute)', fontWeight: i === step ? 500 : 400 }}>{label}</span>
                </button>
                {i < steps.length - 1 && (
                  <span style={{ flex: 1, height: 1, background: i < step ? 'var(--brand)' : 'var(--line)', margin:'0 14px' }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step 0 — Service */}
          {step === 0 && (
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 12 }}>Step 1 · Service</div>
              <h2 className="v-serif" style={{ fontSize: 34, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 10px', fontWeight: 400 }}>What do you need translated?</h2>
              <p style={{ color:'var(--mute)', fontSize: 14.5, margin:'0 0 32px' }}>Pick the discipline. You'll refine the details next.</p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10 }}>
                {services.map(s => {
                  const selected = service === s.id;
                  return (
                    <button key={s.id} onClick={() => setService(s.id)} style={{
                      textAlign:'left', padding: 18,
                      background: selected ? '#fff' : 'transparent',
                      border: `1px solid ${selected ? 'var(--brand)' : 'var(--line)'}`,
                      boxShadow: selected ? '0 0 0 3px rgba(11,30,63,0.06)' : 'none',
                      cursor:'pointer', borderRadius: 6, transition:'all .12s',
                    }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                        <span className="v-serif" style={{ fontSize: 18, letterSpacing:'-0.005em' }}>{s.name}</span>
                        <span className="v-mono" style={{ fontSize: 11, color:'var(--mute)' }}>${s.price} / {s.unit}</span>
                      </div>
                      <div style={{ fontSize: 13, color:'var(--mute)', marginTop: 4 }}>{s.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 1 — Details */}
          {step === 1 && (
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 12 }}>Step 2 · Details</div>
              <h2 className="v-serif" style={{ fontSize: 34, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 10px', fontWeight: 400 }}>A few specifics.</h2>
              <p style={{ color:'var(--mute)', fontSize: 14.5, margin:'0 0 32px' }}>You can change any of these later — nothing is locked in.</p>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 18, marginBottom: 24 }}>
                <QField label="From">
                  <select value={fromLang} onChange={e => setFromLang(e.target.value)} style={fieldStyle}>
                    {['Spanish','French','Arabic','Chinese','Russian','Japanese','Portuguese','German','Hindi','Korean','Turkish','Vietnamese','Other'].map(l => <option key={l}>{l}</option>)}
                  </select>
                </QField>
                <QField label="To">
                  <select value={toLang} onChange={e => setToLang(e.target.value)} style={fieldStyle}>
                    {['English','Spanish','French','Arabic','Chinese','Russian','Japanese','Portuguese','German'].map(l => <option key={l}>{l}</option>)}
                  </select>
                </QField>
              </div>

              <QField label={`Number of ${selSvc.unit}s`}>
                <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
                  <input type="range" min="1" max="50" value={pages} onChange={e => setPages(+e.target.value)} style={{ flex: 1 }} />
                  <div style={{ width: 80, padding:'10px 14px', border:'1px solid var(--line)', borderRadius: 4, background:'#fff', textAlign:'center', flexShrink: 0 }}>
                    <span className="v-serif" style={{ fontSize: 22 }}>{pages}</span>
                    <div className="v-mono" style={{ fontSize: 9, color:'var(--mute)', textTransform:'uppercase', letterSpacing:'0.06em', marginTop: 2 }}>{selSvc.unit}s</div>
                  </div>
                </div>
              </QField>

              {service === 'certified' && (
                <div style={{ marginTop: 24 }}>
                  <QField label="Purpose">
                    <div style={{ display:'flex', flexWrap:'wrap', gap: 8 }}>
                      {['USCIS','Court','University','Employer','Consulate','Other'].map(p => (
                        <button key={p} onClick={() => setPurpose(p)} style={{
                          padding:'9px 14px', fontSize: 13,
                          border: `1px solid ${purpose === p ? 'var(--brand)' : 'var(--line)'}`,
                          background: purpose === p ? 'var(--brand)' : '#fff',
                          color: purpose === p ? '#fff' : 'var(--ink)',
                          borderRadius: 999, cursor:'pointer', transition:'all .12s',
                        }}>{p}</button>
                      ))}
                    </div>
                  </QField>
                </div>
              )}

              <div style={{ marginTop: 32, display:'flex', flexDirection:'column', gap: 12 }}>
                <QToggle checked={rush} onChange={setRush}
                  title="Same-day rush"
                  desc="Delivered in 6 hours or less. +50% on base price." />
                {service === 'certified' && (
                  <QToggle checked={notarize} onChange={setNotarize}
                    title="Notarized hard copy"
                    desc="Mailed next business day. +$19.95 flat." />
                )}
              </div>
              <div style={{
                marginTop: 28, padding: 16,
                background:'var(--warm)', borderRadius: 4,
                fontSize: 13, color:'rgba(10,10,10,0.75)', lineHeight: 1.55,
                display:'flex', gap: 12
              }}>
                <div style={{
                  width: 24, height: 24, flexShrink: 0, borderRadius: 999,
                  border:'1.5px solid var(--brand)', color:'var(--brand)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize: 12, fontFamily:'Source Serif 4'
                }}>V</div>
                <div>
                  <strong style={{ fontWeight: 500 }}>Your likely translator:</strong> For {fromLang} → {toLang} {service === 'certified' ? 'certified civil documents' : selSvc.name.toLowerCase()}, your project will be matched with a specialist like Alexis Ortega (ATA-certified, 9 years, Latin American civil documents) or equivalent.
                </div>
              </div>
            </div>
          )}

          {/* Step 2 — Upload */}
          {step === 2 && (
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 12 }}>Step 3 · Upload</div>
              <h2 className="v-serif" style={{ fontSize: 34, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 10px', fontWeight: 400 }}>Share the document.</h2>
              <p style={{ color:'var(--mute)', fontSize: 14.5, margin:'0 0 32px' }}>Encrypted at rest and in transit. Purged 30 days after delivery. Optional — you can skip and send later.</p>

              {!uploaded ? (
                <div
                  onDragOver={e => { e.preventDefault(); setDropHover(true); }}
                  onDragLeave={() => setDropHover(false)}
                  onDrop={e => { e.preventDefault(); setDropHover(false); setUploaded(true); }}
                  onClick={() => setUploaded(true)}
                  style={{
                    padding: 48, border:`1.5px dashed ${dropHover ? 'var(--brand)' : 'var(--line)'}`,
                    background: dropHover ? 'rgba(11,30,63,0.03)' : '#fff',
                    borderRadius: 4, textAlign:'center', cursor:'pointer', transition:'all .15s',
                  }}
                >
                  <div style={{ fontSize: 44, color:'var(--mute)', lineHeight: 1 }}>↑</div>
                  <div className="v-serif" style={{ fontSize: 22, marginTop: 14, letterSpacing:'-0.01em' }}>Drop your document here</div>
                  <div style={{ fontSize: 13.5, color:'var(--mute)', marginTop: 6 }}>or click to browse · PDF, DOCX, JPG, PNG up to 50MB</div>
                  <div className="v-mono" style={{ fontSize: 10, color:'var(--mute)', marginTop: 28, letterSpacing:'0.06em' }}>AES-256 · TLS 1.3</div>
                </div>
              ) : (
                <div style={{ padding: 20, background:'#fff', border:'1px solid var(--line)', borderRadius: 4, display:'flex', alignItems:'center', gap: 16 }}>
                  <div style={{ width: 48, height: 60, border:'1px solid var(--line)', background:'var(--paper)', flexShrink: 0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <span className="v-mono" style={{ fontSize: 9, color:'var(--mute)' }}>PDF</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>acta_nacimiento_delgado.pdf</div>
                    <div style={{ fontSize: 12, color:'var(--mute)', marginTop: 2 }}>1.2 MB · 3 pages detected · Spanish detected · <span style={{ color:'#2E9E6A' }}>✓ Uploaded</span></div>
                  </div>
                  <button onClick={() => setUploaded(false)} style={{ background:'transparent', border:0, color:'var(--mute)', cursor:'pointer', fontSize: 18 }}>×</button>
                </div>
              )}

              <div style={{ marginTop: 24, padding: 14, background:'var(--warm)', borderRadius: 4, fontSize: 13, color:'rgba(10,10,10,0.75)', lineHeight: 1.55 }}>
                <strong style={{ fontWeight: 500 }}>Privacy note:</strong> only your assigned linguist and reviewer can see this file. No ML training. No third-party sharing.
              </div>
            </div>
          )}

          {/* Step 3 — Contact */}
          {step === 3 && (
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 12 }}>Step 4 · Contact</div>
              <h2 className="v-serif" style={{ fontSize: 34, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 10px', fontWeight: 400 }}>Where should we send the quote?</h2>
              <p style={{ color:'var(--mute)', fontSize: 14.5, margin:'0 0 32px' }}>We'll email you a firm price and a payment link. No sales calls.</p>
              <div style={{ display:'flex', flexDirection:'column', gap: 18 }}>
                <QField label="Full name">
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="Maria Delgado" style={fieldStyle} />
                </QField>
                <QField label="Email">
                  <input value={email} onChange={e => setEmail(e.target.value)} placeholder="maria@example.com" style={fieldStyle} />
                </QField>
                <QField label="Notes for your linguist (optional)">
                  <textarea rows={4} placeholder="e.g. please use my legal name exactly as it appears on the document" style={{ ...fieldStyle, resize:'vertical', lineHeight: 1.5 }} />
                </QField>
              </div>
            </div>
          )}

          {/* Step 4 — Quote */}
          {step === 4 && (
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'#2E9E6A', marginBottom: 12 }}>✓ Quote ready</div>
              <h2 className="v-serif" style={{ fontSize: 34, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 10px', fontWeight: 400 }}>Your firm price, ready now.</h2>
              <p style={{ color:'var(--mute)', fontSize: 14.5, margin:'0 0 32px' }}>A copy has been sent to {email || 'your email'}. Pay now to start your 24-hour clock.</p>

              <div style={{ padding: 28, border:'1px solid var(--line)', background:'#fff', borderRadius: 4 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start' }}>
                  <div>
                    <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--mute)' }}>Quote · VN-2026-0481</div>
                    <div className="v-serif" style={{ fontSize: 28, marginTop: 6, letterSpacing:'-0.01em' }}>{selSvc.name}</div>
                    <div style={{ fontSize: 13, color:'var(--mute)', marginTop: 4 }}>{fromLang} → {toLang} · {pages} {selSvc.unit}s{service === 'certified' ? ` · ${purpose}` : ''}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div className="v-serif" style={{ fontSize: 44, lineHeight: 1, letterSpacing:'-0.02em' }}>${total.toFixed(2)}</div>
                    <div className="v-mono" style={{ fontSize: 11, color:'var(--mute)', marginTop: 4 }}>FIRM · NO HIDDEN FEES</div>
                  </div>
                </div>
                <hr className="v-hr" style={{ margin:'22px 0' }} />
                <div style={{ display:'flex', flexDirection:'column', gap: 8, fontSize: 13.5 }}>
                  <QLine k={`Base · ${pages} × $${selSvc.price.toFixed(2)}`} v={`$${base.toFixed(2)}`} />
                  {rush && <QLine k="Same-day rush · +50%" v={`$${rushFee.toFixed(2)}`} />}
                  {notarizeFee > 0 && <QLine k="Notarized hard copy" v={`$${notarizeFee.toFixed(2)}`} />}
                  <QLine k="Estimated delivery" v={rush ? 'Tonight, 10:47 PM' : 'Tomorrow, 3:15 PM'} />
                </div>
              </div>

              <div style={{ display:'flex', gap: 12, marginTop: 24 }}>
                <VBtn style={{ flex: 1, justifyContent:'center' }}>Pay ${total.toFixed(2)} and start →</VBtn>
                <VBtn variant="ghost">Pay by invoice</VBtn>
              </div>
              <div style={{ marginTop: 28, padding: 16, background:'var(--warm)', borderRadius: 4, fontSize: 13, color:'rgba(10,10,10,0.75)', lineHeight: 1.55, display:'flex', gap: 12 }}>
                <div style={{ width: 24, height: 24, flexShrink: 0, borderRadius: 999, border:'1.5px solid var(--brand)', color:'var(--brand)', display:'flex', alignItems:'center', justifyContent:'center', fontSize: 12, fontFamily:'Source Serif 4' }}>V</div>
                <div>Alexis Ortega (ATA-certified, 9 years, specializes in Latin American civil documents) is available to start this translation. Pay today and she starts on your document this afternoon.</div>
              </div>
            </div>
          )}

          {/* Nav buttons */}
          {step < 4 && (
            <div style={{ display:'flex', justifyContent:'space-between', marginTop: 48, paddingTop: 24, borderTop:'1px solid var(--line)' }}>
              <button onClick={prev} disabled={step === 0} style={{
                background:'transparent', border:0,
                color: step === 0 ? 'rgba(10,10,10,0.25)' : 'var(--mute)',
                cursor: step === 0 ? 'default' : 'pointer', fontSize: 14,
              }}>← Back</button>
              <VBtn onClick={next}>{step === 3 ? 'See my quote →' : 'Continue →'}</VBtn>
            </div>
          )}
        </div>

        {/* Right: live summary */}
        <div className="v-quote-aside" style={{ padding: 56, background:'#fff' }}>
          <div style={{ position:'sticky', top: 80 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 28 }}>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)' }}>Live quote</div>
              <VLive>Calculating</VLive>
            </div>
            <div style={{ display:'flex', alignItems:'baseline', gap: 6, marginBottom: 8 }}>
              <span className="v-serif" style={{ fontSize: 72, lineHeight: 1, letterSpacing:'-0.025em', color:'var(--ink)' }}>${total.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: 13, color:'var(--mute)', marginBottom: 32 }}>Firm price. Updated as you change selections.</div>

            <hr className="v-hr" />
            <div style={{ display:'flex', flexDirection:'column', gap: 14, margin:'24px 0' }}>
              <QSummaryRow label="Service"   value={selSvc.name} />
              <QSummaryRow label="Direction" value={`${fromLang} → ${toLang}`} />
              <QSummaryRow label="Volume"    value={`${pages} ${selSvc.unit}${pages > 1 ? 's' : ''}`} />
              {service === 'certified' && <QSummaryRow label="Purpose"   value={purpose} />}
              <QSummaryRow label="Rush"      value={rush ? 'Same-day' : 'Standard · 24h'} />
              {service === 'certified' && <QSummaryRow label="Hard copy" value={notarize ? 'Notarized' : 'Digital only'} />}
            </div>
            <hr className="v-hr" />

            <div style={{ marginTop: 32, padding: 20, background:'var(--paper)', border:'1px solid var(--line)', borderRadius: 4 }}>
              <div className="v-serif" style={{ fontSize: 15, letterSpacing:'-0.005em', lineHeight: 1.45, color:'var(--ink)' }}>
                "I needed a birth certificate translation for a USCIS deadline two days away. Quote came in 4 minutes, done in 16 hours. I've already recommended Vanan to my whole family."
              </div>
              <div style={{ fontSize: 12, color:'var(--mute)', marginTop: 14, display:'flex', justifyContent:'space-between' }}>
                <span>— David C., Portland, OR</span>
                <span style={{ display:'flex', gap: 2 }}>{[0,1,2,3,4].map(i => <span key={i} style={{ color:'#00B67A' }}>★</span>)}</span>
              </div>
            </div>

            <div style={{ marginTop: 32, fontSize: 12, color:'var(--mute)', lineHeight: 1.6 }}>
              <strong style={{ color:'var(--ink)', fontWeight: 500 }}>Guarantee —</strong> If USCIS rejects for translation quality, we revise free or refund in full. No exceptions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const fieldStyle = {
  width:'100%', padding:'12px 14px', fontSize: 14.5, border:'1px solid var(--line)',
  borderRadius: 4, background:'#fff', color:'var(--ink)', outline:'none',
};

function QField({ label, children }) {
  return (
    <div>
      <label className="v-mono" style={{ display:'block', fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 8 }}>{label}</label>
      {children}
    </div>
  );
}

function QToggle({ checked, onChange, title, desc }) {
  return (
    <button onClick={() => onChange(!checked)} style={{
      display:'grid', gridTemplateColumns:'1fr 44px', gap: 14, alignItems:'center', textAlign:'left',
      padding:'16px 18px',
      background: checked ? '#fff' : 'transparent',
      border: `1px solid ${checked ? 'var(--brand)' : 'var(--line)'}`,
      boxShadow: checked ? '0 0 0 3px rgba(11,30,63,0.06)' : 'none',
      cursor:'pointer', borderRadius: 4, transition:'all .12s',
    }}>
      <div>
        <div className="v-serif" style={{ fontSize: 17, letterSpacing:'-0.005em' }}>{title}</div>
        <div style={{ fontSize: 13, color:'var(--mute)', marginTop: 3 }}>{desc}</div>
      </div>
      <div style={{ width: 44, height: 24, borderRadius: 999, background: checked ? 'var(--brand)' : 'rgba(10,10,10,0.15)', position:'relative', transition:'background .12s' }}>
        <div style={{ position:'absolute', top: 2, left: checked ? 22 : 2, width: 20, height: 20, borderRadius: 999, background:'#fff', boxShadow:'0 1px 3px rgba(0,0,0,0.15)', transition:'left .15s' }} />
      </div>
    </button>
  );
}

function QSummaryRow({ label, value }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', fontSize: 13.5 }}>
      <span style={{ color:'var(--mute)' }}>{label}</span>
      <span style={{ color:'var(--ink)', fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function QLine({ k, v }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between' }}>
      <span style={{ color:'var(--mute)' }}>{k}</span>
      <span style={{ color:'var(--ink)' }}>{v}</span>
    </div>
  );
}

window.VQuote = VQuote;
