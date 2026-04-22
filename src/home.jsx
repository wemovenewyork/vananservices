// src/home.jsx — Homepage

function VHome() {
  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Services" />

      {/* HERO */}
      <section style={{ padding:'72px 40px 56px', borderBottom:'1px solid var(--line)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.25fr 1fr', gap: 72, alignItems:'start', maxWidth: 1200, margin:'0 auto' }}>
          <div>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 28 }}>
              Language services · New York City · 100+ languages
            </div>
            <h1 className="v-serif" style={{
              fontSize: 60, lineHeight: 1.04, letterSpacing:'-0.025em', margin: 0,
              fontWeight: 400, color:'var(--ink)',
            }}>
              Certified translations,<br/>accepted where it counts.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.55, color:'var(--mute)', marginTop: 28, maxWidth: 520 }}>
              USCIS, courts, universities, publishers. Quote in 15 minutes. Delivery in 24 hours. Every document reviewed by a certified human linguist.
            </p>
            <div style={{ display:'flex', gap: 12, marginTop: 36 }}>
              <VBtn onClick={() => window.navigate('quote')}>Get a quote in 15 minutes →</VBtn>
              <VBtn variant="ghost">Talk to an enterprise lead</VBtn>
            </div>
            <div style={{ display:'flex', gap: 28, marginTop: 40, fontSize: 13, color:'var(--mute)' }}>
              {[
                ['56,000+','Projects delivered'],
                ['100+','Languages supported'],
                ['28,700+','Satisfied clients'],
                ['ISO 9001:2015','Certified quality'],
              ].map(([a,b]) => (
                <div key={a}>
                  <div style={{ color:'var(--ink)', fontWeight: 500 }}>{a}</div>
                  <div style={{ marginTop: 2, fontSize: 12 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Document visual */}
          <div style={{ position:'relative', height: 500 }}>
            <div className="v-doc-ph" data-label="Source · ES · Acta de Nacimiento" style={{
              position:'absolute', top:0, left:20, width:'85%', height: 340, padding: 20,
              transform:'rotate(-1.2deg)',
              boxShadow:'0 18px 60px rgba(10,10,10,0.08), 0 2px 6px rgba(10,10,10,0.04)',
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
              background:'#fff', border:'1px solid var(--line)', padding: 22,
              boxShadow:'0 18px 60px rgba(10,10,10,0.10), 0 2px 6px rgba(10,10,10,0.04)',
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
                <div style={{ width: 34, height: 34, border:'1.5px solid var(--brand)', borderRadius: 999, display:'flex', alignItems:'center', justifyContent:'center', color:'var(--brand)', fontSize: 10, fontFamily:'Source Serif 4' }}>V</div>
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

      {/* Services list */}
      <section style={{ padding:'96px 40px 64px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'320px 1fr', gap: 72, maxWidth: 1200, margin:'0 auto' }}>
          <div style={{ position:'sticky', top: 80, alignSelf:'start' }}>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>01 · Services</div>
            <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>
              Eight disciplines.<br/>One studio.
            </h2>
            <p style={{ color:'var(--mute)', fontSize: 15, marginTop: 18, maxWidth: 300 }}>
              Every project is handled by a named linguist with verified domain expertise. No marketplaces, no black-box vendors.
            </p>
          </div>
          <div>
            {[
              ['01','Translation','Certified, legal, academic, audio & video — 100+ languages.', 'service'],
              ['02','Transcription','Verbatim, clean-verbatim, timecoded. 850,000+ minutes delivered.', null],
              ['03','Captioning','Closed, open, broadcast, YouTube. SDH, SRT, VTT.', null],
              ['04','Subtitling','Film subtitling, dubbing & subtitling. 189,000+ minutes.', null],
              ['05','Voice Over','Narration and commercial voice-over. 100+ languages.', null],
              ['06','Typing','Document, legal, DTP, handwritten, data entry.', null],
              ['07','Audio Description','Visual accessibility narration for media and broadcast.', null],
              ['08','Video Services','Animation, editing, production, and spokesperson.', null],
            ].map(([n,title,desc,page]) => (
              <a
                key={n}
                href="#"
                onClick={e => { e.preventDefault(); if (page) window.navigate(page); }}
                style={{
                  display:'grid', gridTemplateColumns:'48px 1.2fr 2fr 32px', alignItems:'center',
                  gap: 24, padding:'22px 0', borderBottom:'1px solid var(--line)',
                  textDecoration:'none', color:'inherit',
                }}
              >
                <span className="v-mono" style={{ fontSize: 11, color:'var(--mute)' }}>{n}</span>
                <span className="v-serif" style={{ fontSize: 20, letterSpacing:'-0.01em' }}>{title}</span>
                <span style={{ color:'var(--mute)', fontSize: 14 }}>{desc}</span>
                <span style={{ color:'var(--mute)', fontSize: 18, textAlign:'right' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding:'96px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 56 }}>
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 14 }}>02 · How it works</div>
              <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>From upload to delivery.</h2>
            </div>
            <a href="#" style={{ color:'var(--ink)', fontSize: 14, textDecoration:'none', borderBottom:'1px solid var(--line)', paddingBottom: 2 }}>Read the full workflow →</a>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 48 }}>
            {[
              ['Upload','Drop your document or audio file. Our system detects language, page count, and formatting complexity in seconds.','Typical: 30 seconds'],
              ['Quote & approve','Firm price. No estimates, no scope creep. Pay by card, invoice, or PO.','Typical: 2 minutes'],
              ['Delivery','A named linguist + reviewer deliver a PDF, editable file, and certificate of accuracy to your inbox.','Typical: 24 hours'],
            ].map(([step,desc,time], i) => (
              <div key={step}>
                <div className="v-serif" style={{ fontSize: 56, color:'var(--brand)', lineHeight: 1, fontWeight: 400, letterSpacing:'-0.03em' }}>0{i+1}</div>
                <div className="v-serif" style={{ fontSize: 22, marginTop: 20, letterSpacing:'-0.01em' }}>{step}</div>
                <p style={{ color:'var(--mute)', fontSize: 14.5, lineHeight: 1.6, marginTop: 10 }}>{desc}</p>
                <div className="v-mono" style={{ fontSize: 11, color:'var(--mute)', marginTop: 18, letterSpacing:'0.04em' }}>{time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 920, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 24 }}>03 · Enterprise</div>
          <blockquote className="v-serif" style={{ fontSize: 38, lineHeight: 1.25, letterSpacing:'-0.015em', margin: 0, fontWeight: 400, color:'var(--ink)' }}>
            "We moved three vendors onto Vanan last year. A single point of contact, a single contract, and a turnaround that holds up in court. It's the boring kind of excellence we wanted."
          </blockquote>
          <div style={{ display:'flex', alignItems:'center', gap: 14, marginTop: 36 }}>
            <div style={{ width: 42, height: 42, borderRadius: 999, background:'var(--warm)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0 }}>
              <span className="v-serif" style={{ fontSize: 16, color:'var(--ink)' }}>LM</span>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Leah Morrison</div>
              <div style={{ fontSize: 13, color:'var(--mute)' }}>Senior Paralegal, Immigration — Cravath, Swaine & Moore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Two audiences */}
      <section style={{ padding:'64px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 0, border:'1px solid var(--line)', background:'#fff', maxWidth: 1200, margin:'0 auto' }}>
          {[
            {
              tag:'For individuals',
              title:'One document, a week from your interview.',
              desc:'Certified translations accepted by USCIS, universities, and courts. Upload once. Get a firm price. A notarized PDF lands in your inbox within 24 hours.',
              cta:'Start a certified translation',
              variant: 'primary',
              page: 'quote',
            },
            {
              tag:'For enterprise',
              title:'One contract. Every language. Every format.',
              desc:'MSA, PO-based billing, dedicated PM, secure SFTP / API. SOC 2 Type II, ISO 27001, and HIPAA-ready workflows.',
              cta:'Talk to an enterprise lead',
              variant: 'ink',
              page: null,
            },
          ].map((c, i) => (
            <div key={c.tag} style={{ padding: 40, borderRight: i === 0 ? '1px solid var(--line)' : 0 }}>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--brand)' }}>{c.tag}</div>
              <h3 className="v-serif" style={{ fontSize: 26, lineHeight: 1.2, letterSpacing:'-0.015em', margin:'14px 0', fontWeight: 400, maxWidth: 360 }}>{c.title}</h3>
              <p style={{ fontSize: 14.5, color:'var(--mute)', lineHeight: 1.6, maxWidth: 420, marginBottom: 24 }}>{c.desc}</p>
              <VBtn variant={c.variant} onClick={() => c.page && window.navigate(c.page)}>{c.cta} →</VBtn>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ padding:'120px 40px', background:'var(--ink)', color:'#fff' }}>
        <div style={{ maxWidth: 880, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)', marginBottom: 24 }}>Start a project</div>
          <h2 className="v-serif" style={{ fontSize: 64, lineHeight: 1.05, letterSpacing:'-0.025em', margin: 0, fontWeight: 400, color:'#fff' }}>
            Upload your document.<br/>Get a firm price in 15 minutes.
          </h2>
          <div style={{ display:'flex', gap: 12, marginTop: 40 }}>
            <VBtn onClick={() => window.navigate('quote')} style={{ background:'#fff', color:'var(--ink)' }}>Get a quote →</VBtn>
            <VBtn variant="ghost" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.25)' }}>Book a 20-min call</VBtn>
          </div>
        </div>
      </section>

      <VFooter />
    </div>
  );
}

window.VHome = VHome;
