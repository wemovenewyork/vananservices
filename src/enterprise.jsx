// src/enterprise.jsx — Enterprise page

function VEnterprise() {
  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Enterprise" />

      {/* Hero */}
      <section style={{ padding:'72px 40px 64px', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 24 }}>Enterprise</div>
          <Reveal><div className="v-g-hero" style={{ alignItems:'end' }}>
            <div>
              <h1 className="v-serif" style={{ fontSize: 58, lineHeight: 1.05, letterSpacing:'-0.025em', margin: 0, fontWeight: 400 }}>
                One contract.<br/>Every language.<br/>Every format.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.6, color:'var(--mute)', marginTop: 28, maxWidth: 520 }}>
                MSA-based billing, dedicated project managers, secure file delivery, and ISO 9001:2015-certified workflows — built for legal teams, media companies, healthcare organizations, and global enterprises.
              </p>
              <div style={{ display:'flex', gap: 12, marginTop: 36 }}>
                <VBtn>Talk to an enterprise lead →</VBtn>
                <VBtn variant="ghost">Download capabilities deck</VBtn>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 0, border:'1px solid var(--line)', background:'#fff' }}>
              {[
                ['28,700+', 'Satisfied clients worldwide'],
                ['56,000+', 'Projects completed'],
                ['100+',    'Languages supported'],
                ['440+',    'Qualified language professionals'],
                ['24/7',    'Customer support, Mon–Sun'],
              ].map(([num, label], i) => (
                <div key={label} style={{ display:'flex', alignItems:'center', gap: 24, padding:'22px 28px', borderBottom: i < 4 ? '1px solid var(--line)' : 0 }}>
                  <span className="v-serif" style={{ fontSize: 34, letterSpacing:'-0.02em', color:'var(--brand)', lineHeight: 1, minWidth: 80 }}>{num}</span>
                  <span style={{ fontSize: 14, color:'var(--mute)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div></Reveal>
        </div>
      </section>

      <VProof />

      {/* Features */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-g-ent-feat">
            <div style={{ position:'sticky', top: 80, alignSelf:'start' }}>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>01 · What's included</div>
              <h2 className="v-serif" style={{ fontSize: 36, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>Built for procurement, legal, and ops teams.</h2>
              <p style={{ color:'var(--mute)', fontSize: 14.5, marginTop: 18, lineHeight: 1.6 }}>
                Everything you need to onboard Vanan as a vendor — contracts, security documentation, and integrations included.
              </p>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 2 }}>
              {[
                ['Master Service Agreement', 'Pre-signed MSA with standard IP, liability, and confidentiality clauses. Your legal team can mark it up; most enterprises sign within a week.'],
                ['Dedicated project managers', 'A named PM who learns your style guide, preferred terminology, and delivery preferences — and stays with your account.'],
                ['PO-based billing', 'Invoice against purchase orders. Net-30 terms. Consolidated monthly statements across all projects and departments.'],
                ['Secure file delivery', 'SFTP, API, or direct integration with your CMS or DAM. Files encrypted at rest and in transit. Purge schedules on request.'],
                ['ISO 9001:2015 workflow', 'Every project follows a documented quality management process: translation, revision, and QA before delivery. No exceptions.'],
                ['Non-disclosure agreements', 'Project-level and master NDAs available. We routinely work under court-filed protective orders and investment-grade confidentiality requirements.'],
                ['Rush & super-rush delivery', 'Same-day delivery for most document types. 6-hour turnaround available with advance notice. Dedicated capacity for standing accounts.'],
                ['Volume pricing', 'Tiered rates that scale with your monthly volume. Committed spend agreements available for predictable budgeting.'],
              ].map(([title, desc], i) => (
                <Reveal key={title} delay={i * 40}>
                  <div className="v-card-lift" style={{ padding: 28, background:'var(--paper)', border:'1px solid var(--line)' }}>
                    <div className="v-serif" style={{ fontSize: 19, letterSpacing:'-0.01em', marginBottom: 10 }}>{title}</div>
                    <div style={{ fontSize: 13.5, color:'var(--mute)', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services by use case */}
      <section style={{ padding:'96px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>02 · Services</div>
          <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 56px', fontWeight: 400 }}>Everything under one contract.</h2>
          <div className="v-g-4col" style={{ border:'1px solid var(--line)' }}>
            {[
              { name:'Translation', items:['Certified documents','Legal & contracts','Financial filings','Technical manuals','Marketing copy'] },
              { name:'Transcription', items:['Verbatim & clean-read','Legal depositions','Medical dictation','Media & broadcast','Academic research'] },
              { name:'Captioning & Subtitling', items:['Closed captions (SDH)','Open captions','SRT, VTT, STL files','Broadcast delivery','YouTube & streaming'] },
              { name:'Voice Over & Video', items:['Commercial voice-over','eLearning narration','Dubbing','Animation & editing','Spokesperson video'] },
            ].map((col, i) => (
              <div key={col.name} style={{ padding: 28, borderRight: i < 3 ? '1px solid var(--line)' : 0 }}>
                <div className="v-serif" style={{ fontSize: 19, letterSpacing:'-0.01em', marginBottom: 20, paddingBottom: 16, borderBottom:'1px solid var(--line)' }}>{col.name}</div>
                <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap: 10 }}>
                  {col.items.map(item => (
                    <li key={item} style={{ display:'flex', alignItems:'center', gap: 8, fontSize: 13.5, color:'var(--mute)' }}>
                      <span style={{ width: 4, height: 4, borderRadius: 999, background:'var(--mute)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <Reveal style={{ maxWidth: 920, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 24 }}>03 · What clients say</div>
          <blockquote className="v-serif" style={{ fontSize: 38, lineHeight: 1.25, letterSpacing:'-0.015em', margin: 0, fontWeight: 400, color:'var(--ink)' }}>
            "Very good professional service with excellent turnaround. Very affordable as well. An excellent service with great online support — very easy to get in touch, very responsive."
          </blockquote>
          <div style={{ display:'flex', alignItems:'center', gap: 14, marginTop: 36 }}>
            <div style={{ width: 42, height: 42, borderRadius: 999, background:'var(--warm)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0 }}>
              <span className="v-serif" style={{ fontSize: 16 }}>V</span>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Verified client</div>
              <div style={{ fontSize: 13, color:'var(--mute)' }}>From 2,100+ customer reviews</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact form CTA */}
      <section style={{ padding:'96px 40px', background:'var(--ink)', color:'#fff' }}>
        <div className="v-g-2col" style={{ maxWidth: 1200, margin:'0 auto', gap: 80, alignItems:'start' }}>
          <div>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)', marginBottom: 24 }}>Get in touch</div>
            <h2 className="v-serif" style={{ fontSize: 48, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 24px', fontWeight: 400, color:'#fff' }}>
              Talk to an enterprise lead.
            </h2>
            <p style={{ fontSize: 15, color:'rgba(255,255,255,0.6)', lineHeight: 1.65, margin:'0 0 36px' }}>
              We'll learn about your volume, languages, and delivery requirements — then put together a proposal with pricing, workflow, and an MSA draft. No sales deck, no demo request form.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap: 14, fontSize: 13.5, color:'rgba(255,255,255,0.65)' }}>
              {[
                ['Phone (US)', '+1-800-230-7918'],
                ['Phone (direct)', '+1-646-481-2955'],
                ['Email', 'support@vananservices.com'],
                ['Address', '224 West 35th St., Suite 1200-8, New York, NY 10001'],
              ].map(([label, value]) => (
                <div key={label} style={{ display:'flex', gap: 16 }}>
                  <span className="v-mono" style={{ fontSize: 10, letterSpacing:'0.06em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', minWidth: 80, paddingTop: 2 }}>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)', padding: 36, borderRadius: 4 }}>
            <div style={{ display:'flex', flexDirection:'column', gap: 18 }}>
              {[
                { label:'Full name', placeholder:'Jane Smith', type:'text' },
                { label:'Work email', placeholder:'jane@company.com', type:'email' },
                { label:'Company', placeholder:'Acme Corp', type:'text' },
                { label:'Estimated monthly volume', placeholder:'e.g. 50 documents, 200 audio hours', type:'text' },
              ].map(f => (
                <div key={f.label}>
                  <label className="v-mono" style={{ display:'block', fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{
                    width:'100%', padding:'12px 14px', fontSize: 14, background:'rgba(255,255,255,0.07)',
                    border:'1px solid rgba(255,255,255,0.15)', borderRadius: 4, color:'#fff',
                    outline:'none',
                  }} />
                </div>
              ))}
              <div>
                <label className="v-mono" style={{ display:'block', fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginBottom: 8 }}>Tell us about your project</label>
                <textarea rows={3} placeholder="Languages, deadlines, special requirements…" style={{
                  width:'100%', padding:'12px 14px', fontSize: 14, background:'rgba(255,255,255,0.07)',
                  border:'1px solid rgba(255,255,255,0.15)', borderRadius: 4, color:'#fff',
                  outline:'none', resize:'vertical', lineHeight: 1.5,
                }} />
              </div>
              <VBtn style={{ background:'#fff', color:'var(--ink)', justifyContent:'center', width:'100%' }}>
                Send enquiry →
              </VBtn>
            </div>
          </div>
        </div>
      </section>

      <VFooter />
    </div>
  );
}

window.VEnterprise = VEnterprise;
