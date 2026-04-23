// src/home.jsx — Homepage

function LangInterstitial() {
  const row1 = ['Bonjour','مرحبا','你好','こんにちは','Hola','שלום','Здравствуйте','नमस्ते','Olá','Merhaba'];
  const row2 = ['ਸਤ ਸ੍ਰੀ ਅਕਾਲ','Halò','Γεια σας','Salam','Habari','Сайн байна уу','Selamat','Xin chào','안녕하세요','வணக்கம்'];
  const words1 = [...row1, ...row1];
  const words2 = [...row2, ...row2];
  const wordStyle = (italic) => ({
    fontFamily: 'Fraunces, serif',
    fontSize: 'clamp(3.5rem, 7vw, 7rem)',
    fontWeight: 300,
    fontVariationSettings: "'SOFT' 100, 'opsz' 144",
    letterSpacing: '-0.02em',
    color: '#F5F1EA',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    fontStyle: italic ? 'italic' : 'normal',
  });
  return (
    <section style={{ background:'#1A1815', overflow:'hidden', padding:'96px 0', position:'relative' }}>
      {/* Eyebrow labels */}
      <div style={{ position:'absolute', top:24, left:40, fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(245,241,234,0.4)', zIndex:20 }}>04 — 100+ languages</div>
      <div style={{ position:'absolute', top:24, right:40, fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(245,241,234,0.4)', zIndex:20 }}>Interstitial</div>

      {/* Top fade */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:96, background:'linear-gradient(to bottom, #1A1815, transparent)', zIndex:10, pointerEvents:'none' }} />

      {/* Row 1 — scrolls left */}
      <div style={{ overflow:'hidden', marginBottom:32 }}>
        <div style={{ display:'flex', gap:64, animation:'langScroll 60s linear infinite', willChange:'transform' }}>
          {words1.map((w, i) => <span key={i} style={wordStyle(false)}>{w}</span>)}
        </div>
      </div>

      {/* Row 2 — scrolls right, dimmer, italic */}
      <div style={{ overflow:'hidden' }}>
        <div style={{ display:'flex', gap:64, animation:'langScroll 70s linear infinite reverse', willChange:'transform', opacity:0.4 }}>
          {words2.map((w, i) => <span key={i} style={wordStyle(true)}>{w}</span>)}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:96, background:'linear-gradient(to top, #1A1815, transparent)', zIndex:10, pointerEvents:'none' }} />

      {/* Center overlay badge */}
      <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:20, pointerEvents:'none' }}>
        <div style={{ background:'rgba(26,24,21,0.8)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', border:'1px solid rgba(245,241,234,0.1)', padding:'24px 48px', borderRadius:999, textAlign:'center' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:'#C8541C', marginBottom:6 }}>One hundred</div>
          <div style={{ fontFamily:'Fraunces', fontStyle:'italic', fontWeight:300, fontVariationSettings:"'SOFT' 100", fontSize:'clamp(1.5rem, 3vw, 2.25rem)', color:'#F5F1EA', lineHeight:1.2 }}>and counting.</div>
        </div>
      </div>
    </section>
  );
}

function VHome() {

  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Services" />

      {/* ── HERO — dark full-bleed ─────────────────────────── */}
      <section style={{ padding:'clamp(48px, 8vw, 80px) clamp(20px, 4vw, 40px) clamp(48px, 8vw, 72px)', background:'var(--brand)', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
        <div className="v-g-hero" style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginBottom: 32 }}>
              Language services · New York City · 100+ languages
            </div>
            <h1 className="v-serif" style={{
              fontSize: 'clamp(40px, 6.8vw, 62px)', lineHeight: 1.02, letterSpacing:'-0.028em', margin: 0,
              fontWeight: 400, color: '#fff',
            }}>
              Certified translations,<br/>accepted where<br/>it counts.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color:'rgba(255,255,255,0.62)', marginTop: 28, maxWidth: 500 }}>
              USCIS, courts, universities, publishers. Quote in 15 minutes. Delivery in 24 hours. Every document reviewed by a certified human linguist.
            </p>
            <div style={{ display:'flex', gap: 12, marginTop: 40, flexWrap:'wrap' }}>
              <VBtn onClick={() => window.navigate('quote')} style={{ background:'#fff', color:'var(--brand)' }}>Get an instant quote →</VBtn>
              <VBtn onClick={() => window.navigate('enterprise')} variant="ghost" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.28)' }}>Talk to an enterprise lead</VBtn>
            </div>
            <div style={{ display:'flex', gap: 36, marginTop: 48, paddingTop: 36, borderTop:'1px solid rgba(255,255,255,0.1)', flexWrap:'wrap' }}>
              {[
                ['4.9 / 5','Trustpilot · 2,100+ reviews'],
                ['56,000+','Projects delivered since 2013'],
                ['24 hours','Standard turnaround'],
              ].map(([a,b]) => (
                <div key={a}>
                  <div style={{ color:'#fff', fontWeight: 600, fontSize: 15 }}>{a}</div>
                  <div style={{ marginTop: 3, fontSize: 12, color:'rgba(255,255,255,0.45)' }}>{b}</div>
                </div>
              ))}
            </div>

            {/* Slot 01 — PM portrait */}
            <div style={{ display:'flex', alignItems:'center', gap:16, marginTop:36, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.08)' }}>
              <img
                src="/images/hero-pm.png"
                alt="Steffi K., Senior Project Manager, reviewing documents at desk"
                style={{ width:56, height:56, borderRadius:999, objectFit:'cover', objectPosition:'center top', flexShrink:0, display:'block' }}
              />
              <div>
                <div style={{ fontSize:12, fontWeight:500, color:'rgba(255,255,255,0.9)', lineHeight:1.3 }}>Steffi K.</div>
                <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:'0.05em', color:'rgba(255,255,255,0.45)', marginTop:3 }}>
                  Senior Project Manager / Legal &amp; immigration translation · 8 years
                </div>
              </div>
            </div>
          </div>

          {/* Certified document photo */}
          <div className="v-hero-doc" style={{ position:'relative', height:'clamp(340px, 42vw, 500px)', borderRadius:12, overflow:'hidden' }}>
            <img
              src="/images/certified-document.png"
              alt="Certified translation document with official seal and notary stamp on a desk"
              style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }}
            />
            <div style={{ position:'absolute', bottom:20, left:20, right:20, display:'flex', alignItems:'center', gap:10, background:'rgba(11,30,63,0.72)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', padding:'10px 14px', borderRadius:8 }}>
              <span className="v-dot" />
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.06em', textTransform:'uppercase', color:'rgba(255,255,255,0.85)' }}>Certified · USCIS-accepted · ATA-signed</span>
            </div>
          </div>
        </div>
      </section>

      <VProof />

      {/* ── Services list ─────────────────────────────────── */}
      <section style={{ padding:'96px 40px 64px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div className="v-g-sidebar" style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal style={{ position:'sticky', top: 80, alignSelf:'start' }}>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>01 · Services</div>
            <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>
              Eight disciplines.<br/>One studio.
            </h2>
            <p style={{ color:'var(--mute)', fontSize: 15, marginTop: 18, maxWidth: 300 }}>
              Every project is handled by a named linguist with verified domain expertise. No marketplaces, no black-box vendors.
            </p>
          </Reveal>
          <div>
            {[
              ['01','Translation',     'Certified, legal, academic, audio & video — 100+ languages.', 'translation'],
              ['02','Transcription',   'Verbatim, clean-verbatim, timecoded. 850,000+ minutes delivered.', 'transcription'],
              ['03','Captioning',      'Closed, open, broadcast, YouTube. SDH, SRT, VTT.', 'captioning'],
              ['04','Subtitling',      'Film subtitling, dubbing & subtitling. 189,000+ minutes.', 'subtitling'],
              ['05','Voice Over',      'Narration and commercial voice-over. 100+ languages.', 'voiceover'],
              ['06','Typing',          'Document, legal, DTP, handwritten, data entry.', 'typing'],
              ['07','Audio Description','Visual accessibility narration for media and broadcast.', 'audiodescription'],
              ['08','Video Services',  'Animation, editing, production, and spokesperson.', 'video'],
            ].map(([n, title, desc, slug], i) => (
              <Reveal key={n} delay={i * 40}>
                <a
                  href="#"
                  className="v-svc-row"
                  onClick={e => { e.preventDefault(); window.navigate('service', { service: slug }); }}
                  style={{
                    display:'grid', gridTemplateColumns:'48px 1.2fr 2fr 32px', alignItems:'center',
                    gap: 24, padding:'22px 0', borderBottom:'1px solid var(--line)',
                    textDecoration:'none', color:'inherit',
                  }}
                >
                  <span className="v-mono" style={{ fontSize: 11, color:'var(--mute)' }}>{n}</span>
                  <span className="v-serif" style={{ fontSize: 20, letterSpacing:'-0.01em' }}>{title}</span>
                  <span style={{ color:'var(--mute)', fontSize: 14 }}>{desc}</span>
                  <span className="v-svc-arrow" style={{ color:'var(--mute)', fontSize: 18, textAlign:'right' }}>→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Slot 02: Editorial break ──────────────────────── */}
      <section style={{ padding:'0 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', paddingBottom:56 }}>
          <Reveal>
            <div style={{ borderRadius:12, overflow:'hidden', border:'1px solid rgba(26,24,21,0.08)', aspectRatio:'21 / 9' }}>
              <img
                src="/images/editorial-translator.png"
                alt="Translator working hands-on with annotated documents in warm natural light"
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%', display:'block' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Language interstitial ─────────────────────────── */}
      <LangInterstitial />

      {/* ── Team ─────────────────────────────────────────── */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <Reveal>
            <div className="v-mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom:18 }}>05 · Our people</div>
            <div className="v-g-2col" style={{ marginBottom:56 }}>
              <h2 className="v-serif" style={{ fontSize:38, lineHeight:1.1, letterSpacing:'-0.02em', margin:0, fontWeight:400 }}>The people behind the work.</h2>
              <p style={{ fontSize:15.5, color:'var(--mute)', lineHeight:1.65, margin:0 }}>Named project managers, not tickets. Every client has a person to call.</p>
            </div>
          </Reveal>
          <div className="v-g-4col">
            {[
              { initials:'SK', name:'Steffi K.',  role:'Senior Project Manager', domain:'Legal & immigration',     years:8, langs:'EN · ES · FR' },
              { initials:'JL', name:'Jessica L.', role:'Senior Project Manager', domain:'Media & captioning',     years:6, langs:'EN · FR · IT' },
              { initials:'RM', name:'Rahul M.',   role:'Project Manager',        domain:'Technical & localization',years:5, langs:'EN · HI · TA' },
              { initials:'AO', name:'Anika O.',   role:'Project Manager',        domain:'Medical & life sciences',years:7, langs:'EN · DE · NL' },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                {/* TODO: Replace with <Image src={`/team/${m.initials.toLowerCase()}.jpg`} /> when photography is delivered */}
                <div>
                  <ImagePlaceholder
                    treatment="ink"
                    aspect="4:5"
                    label="PHOTO"
                    number={`0${i + 1}`}
                    initials={m.initials}
                    ariaLabel={`Placeholder: portrait of ${m.name}, ${m.role}`}
                    style={{ borderRadius:4 }}
                  />
                  <div style={{ paddingTop:16 }}>
                    <div style={{ fontSize:14.5, fontWeight:500 }}>{m.name}</div>
                    <div style={{ fontSize:13, color:'var(--mute)', marginTop:2 }}>{m.role}</div>
                    <div style={{ fontSize:12, color:'var(--mute)', marginTop:4 }}>{m.domain} · {m.years} yrs</div>
                    <div className="v-mono" style={{ fontSize:10, color:'rgba(10,10,10,0.4)', marginTop:6, letterSpacing:'0.04em' }}>{m.langs}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section style={{ padding:'96px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 56, flexWrap:'wrap', gap: 16 }}>
              <div>
                <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 14 }}>02 · How it works</div>
                <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>From upload to delivery.</h2>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:16 }}>
                <a href="#" style={{ color:'var(--ink)', fontSize: 14, textDecoration:'none', borderBottom:'1px solid var(--line)', paddingBottom: 2 }}>Read the full workflow →</a>
                {/* Slot 03 — atmospheric process detail */}
                <div style={{ width:220, borderRadius:8, overflow:'hidden', aspectRatio:'4 / 3' }}>
                  <img
                    src="/images/atmospheric-signing.png"
                    alt="Hand signing a certified translation document with a pen, dramatic lighting"
                    style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block' }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <div className="v-g-3col">
            {[
              ['Upload','Drop a document, audio, or video file. We auto-detect language, page count, and complexity — no sales call required.','Typical: 30 seconds'],
              ['Quote & approve','Firm price to the penny. Pay by card, ACH, PO, or net-30 invoice for enterprise accounts.','Typical: 90 seconds to firm quote'],
              ['Delivery','A named linguist plus an independent reviewer deliver a PDF, editable source, and signed Certificate of Accuracy.','Typical: 24 hours · Same-day available'],
            ].map(([step, desc, time], i) => (
              <Reveal key={step} delay={i * 100}>
                <div className="v-card-lift" style={{ padding: 32, border:'1px solid var(--line)', background:'#fff' }}>
                  <div className="v-serif" style={{ fontSize: 52, color:'var(--brand)', lineHeight: 1, fontWeight: 400, letterSpacing:'-0.03em' }}>0{i+1}</div>
                  <div className="v-serif" style={{ fontSize: 22, marginTop: 20, letterSpacing:'-0.01em' }}>{step}</div>
                  <p style={{ color:'var(--mute)', fontSize: 14.5, lineHeight: 1.6, marginTop: 10 }}>{desc}</p>
                  <div className="v-mono" style={{ fontSize: 11, color:'var(--mute)', marginTop: 18, letterSpacing:'0.04em' }}>{time}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 48 }}>03 · What clients say</div>
          </Reveal>
          <div className="v-g-3col">
            {[
              {
                quote: '"We moved three vendors onto Vanan last year. A single point of contact, a single contract, and a turnaround that holds up in court. It\'s the boring kind of excellence we wanted."',
                name: 'Leah Morrison',
                role: 'Senior Paralegal, Immigration — Cravath, Swaine & Moore',
                initials: 'LM',
              },
              {
                quote: '"I needed a birth certificate translation for a USCIS deadline two days away. Quote came in 4 minutes, done in 16 hours. I\'ve already recommended Vanan to my whole family."',
                name: 'David C.',
                role: 'Immigration client, Portland, OR',
                initials: 'DC',
              },
              {
                quote: '"We dubbed a six-episode docuseries into three languages on a ten-day deadline. Vanan matched us with three voice directors, handled the language QC, and delivered clean masters a day ahead of schedule."',
                name: 'Priya Raman',
                role: 'Post Production Supervisor — Mandalay Pictures',
                initials: 'PR',
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div style={{ padding: 32, border:'1px solid var(--line)', background:'var(--paper)', display:'flex', flexDirection:'column', justifyContent:'space-between', gap: 24, minHeight: 240 }}>
                  <blockquote className="v-serif" style={{ fontSize: 17, lineHeight: 1.5, letterSpacing:'-0.005em', margin: 0, fontWeight: 400, color:'var(--ink)' }}>
                    {t.quote}
                  </blockquote>
                  <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
                    {/* TODO: Replace with <Image src={`/avatars/${t.initials.toLowerCase()}.jpg`} /> */}
                    <div
                      className="placeholder-ink"
                      role="img"
                      aria-label={`Placeholder: portrait of ${t.name}`}
                      style={{ width:40, height:40, borderRadius:999, flexShrink:0, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}
                    >
                      <span style={{ fontFamily:'Fraunces', fontSize:13, fontWeight:300, fontVariationSettings:"'SOFT' 100", color:'rgba(245,241,234,0.8)', position:'relative', zIndex:1 }}>{t.initials}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color:'var(--mute)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two audiences ─────────────────────────────────── */}
      <section style={{ padding:'64px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <Reveal style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-g-2col" style={{ border:'1px solid var(--line)', background:'#fff' }}>
            {[
              { tag:'For individuals', title:'One document, a week from your interview.', desc:'A birth certificate a week before your interview. A transcript for your I-485. Certified, notarized, signed by an ATA translator — upload now, PDF in your inbox by tomorrow.', cta:'Start a certified translation', variant:'primary', page:'quote' },
              { tag:'For enterprise',  title:'One contract. Every language. Every format.', desc:'One MSA for every language you ship in. Dedicated PM, API or SFTP integration, PO and net-30 billing. SOC 2 Type II, ISO 9001:2015, HIPAA-ready.', cta:'Talk to an enterprise lead', variant:'ink', page:'enterprise' },
            ].map((c, i) => (
              <div key={c.tag} style={{ padding: 40, borderRight: i === 0 ? '1px solid var(--line)' : 0 }}>
                <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--brand)' }}>{c.tag}</div>
                <h3 className="v-serif" style={{ fontSize: 26, lineHeight: 1.2, letterSpacing:'-0.015em', margin:'14px 0', fontWeight: 400, maxWidth: 360 }}>{c.title}</h3>
                <p style={{ fontSize: 14.5, color:'var(--mute)', lineHeight: 1.6, maxWidth: 420, marginBottom: 24 }}>{c.desc}</p>
                <VBtn variant={c.variant} onClick={() => window.navigate(c.page)}>{c.cta} →</VBtn>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Closing CTA ───────────────────────────────────── */}
      <section style={{ padding:'120px 40px', background:'var(--ink)', color:'#fff' }}>
        <Reveal style={{ maxWidth: 880, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)', marginBottom: 24 }}>Start a project</div>
          <h2 className="v-serif" style={{ fontSize: 64, lineHeight: 1.05, letterSpacing:'-0.025em', margin: 0, fontWeight: 400, color:'#fff' }}>
            Upload your document.<br/>A real linguist starts today.
          </h2>
          <div style={{ display:'flex', gap: 12, marginTop: 40, flexWrap:'wrap' }}>
            <VBtn onClick={() => window.navigate('quote')} style={{ background:'#fff', color:'var(--ink)' }}>Get an instant quote →</VBtn>
            <VBtn onClick={() => window.navigate('enterprise')} variant="ghost" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.25)' }}>Book a 20-min call</VBtn>
          </div>
        </Reveal>
      </section>

      <VFooter />
    </div>
  );
}

window.VHome = VHome;
