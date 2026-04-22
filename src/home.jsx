// src/home.jsx — Homepage

function VHome() {
  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Services" />

      {/* ── HERO — dark full-bleed ─────────────────────────── */}
      <section style={{ padding:'80px 40px 72px', background:'var(--brand)', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
        <div className="v-g-hero" style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginBottom: 32 }}>
              Language services · New York City · 100+ languages
            </div>
            <h1 className="v-serif" style={{
              fontSize: 62, lineHeight: 1.02, letterSpacing:'-0.028em', margin: 0,
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
          </div>

          {/* Document visual */}
          <div className="v-hero-doc" style={{ position:'relative', height: 500 }}>
            <div className="v-doc-ph" data-label="Source · ES · Acta de Nacimiento" style={{
              position:'absolute', top:0, left:20, width:'85%', height: 340, padding: 20,
              transform:'rotate(-1.2deg)',
              boxShadow:'0 24px 80px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.2)',
            }}>
              <div className="v-serif" style={{ fontSize: 10, color:'rgba(10,10,10,0.55)' }}>REPÚBLICA DEL PERÚ · RENIEC</div>
              <div className="v-serif" style={{ fontSize: 15, marginTop: 14, color:'var(--ink)' }}>Acta de Nacimiento</div>
              <div style={{ fontSize: 10, color:'var(--mute)', marginTop: 4 }}>N° 2024-0481-LIM</div>
              <div style={{ height: 1, background:'rgba(10,10,10,0.1)', margin:'14px 0' }} />
              <div style={{ fontSize: 11, lineHeight: 1.8, color:'rgba(10,10,10,0.7)' }}>
                En la ciudad de Lima, a los veintitrés días del mes…<br/>
                Nombre: ▂▂▂▂▂▂▂▂▂▂▂▂<br/>
                Fecha de nacimiento: ▂▂ de ▂▂▂▂▂ de ▂▂▂▂<br/>
                Sexo: ▂▂▂▂▂▂▂
              </div>
            </div>
            <div style={{
              position:'absolute', bottom: 20, right: 0, width:'78%', height: 300,
              background:'#fff', border:'1px solid rgba(10,10,10,0.08)', padding: 22,
              boxShadow:'0 24px 80px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15)',
              transform:'rotate(1.4deg)',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div className="v-mono" style={{ fontSize: 10, color:'var(--mute)', letterSpacing:'0.06em' }}>TARGET · EN · CERTIFIED</div>
                <div style={{ display:'flex', alignItems:'center', gap: 6, fontSize: 11, color:'#2E9E6A' }}>
                  <span className="v-dot"/> Ready
                </div>
              </div>
              <div className="v-serif" style={{ fontSize: 15, marginTop: 14, color:'var(--ink)' }}>Birth Certificate</div>
              <div style={{ fontSize: 10, color:'var(--mute)', marginTop: 4 }}>No. 2024-0481-LIM</div>
              <div style={{ height: 1, background:'rgba(10,10,10,0.1)', margin:'14px 0' }} />
              <div style={{ fontSize: 11, lineHeight: 1.8, color:'rgba(10,10,10,0.75)' }}>
                In the city of Lima, on the twenty-third day of the month…<br/>
                Full name: Maria C. Delgado-Salas<br/>
                Date of birth: 14 August 1994<br/>
                Sex: Female
              </div>
              <div style={{ marginTop: 18, display:'flex', alignItems:'center', gap: 10 }}>
                <div style={{ width: 34, height: 34, border:'1.5px solid var(--brand)', borderRadius: 999, display:'flex', alignItems:'center', justifyContent:'center', color:'var(--brand)', fontSize: 10 }}>V</div>
                <div style={{ fontSize: 10, color:'var(--mute)', lineHeight: 1.4 }}>
                  <div style={{ color:'var(--ink)' }}>Certificate of Translation Accuracy</div>
                  Signed · 22 Apr 2026 · Vanan Services, Inc.
                </div>
              </div>
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

      {/* ── How it works ──────────────────────────────────── */}
      <section style={{ padding:'96px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 56, flexWrap:'wrap', gap: 16 }}>
              <div>
                <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 14 }}>02 · How it works</div>
                <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>From upload to delivery.</h2>
              </div>
              <a href="#" style={{ color:'var(--ink)', fontSize: 14, textDecoration:'none', borderBottom:'1px solid var(--line)', paddingBottom: 2 }}>Read the full workflow →</a>
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
                    <div style={{ width: 36, height: 36, borderRadius: 999, background:'var(--warm)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0 }}>
                      <span className="v-serif" style={{ fontSize: 13 }}>{t.initials}</span>
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
