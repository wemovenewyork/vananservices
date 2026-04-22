// src/about.jsx — Company about page

function VAbout() {
  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="" />

      {/* Hero */}
      <section style={{ padding:'80px 40px 72px', borderBottom:'1px solid var(--line)', background:'var(--brand)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginBottom: 24 }}>About Vanan</div>
          <div className="v-g-hero">
            <div>
              <h1 className="v-serif" style={{ fontSize: 58, lineHeight: 1.05, letterSpacing:'-0.025em', margin: 0, fontWeight: 400, color:'#fff' }}>
                Language is our only business. It always has been.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.6, color:'rgba(255,255,255,0.62)', marginTop: 28, maxWidth: 520 }}>
                Vanan Services started in New York with a single promise: every translation reviewed by a certified human linguist. Two decades later, 56,000+ projects and 100+ languages later, that promise is unchanged.
              </p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 0, border:'1px solid rgba(255,255,255,0.15)', background:'rgba(255,255,255,0.06)' }}>
              {[
                ['56,000+', 'Projects delivered'],
                ['100+',    'Languages supported'],
                ['28,700+', 'Satisfied clients'],
                ['440+',    'Certified linguists'],
                ['New York', 'Headquartered since founding'],
              ].map(([num, label], i) => (
                <div key={label} style={{ display:'flex', alignItems:'center', gap: 24, padding:'20px 28px', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.1)' : 0 }}>
                  <span className="v-serif" style={{ fontSize: 30, letterSpacing:'-0.02em', color:'#fff', lineHeight: 1, minWidth: 90 }}>{num}</span>
                  <span style={{ fontSize: 13.5, color:'rgba(255,255,255,0.6)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VProof compact={true} />

      {/* Mission */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-g-sidebar">
            <Reveal style={{ position:'sticky', top: 80, alignSelf:'start' }}>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>01 · What we believe</div>
              <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>
                Translation is not a commodity.
              </h2>
              <p style={{ color:'var(--mute)', fontSize: 15, marginTop: 18, lineHeight: 1.65 }}>
                A birth certificate translated for a USCIS filing carries someone's case. A clause mistranslated in a contract can unravel a deal. A medical instruction misread by a patient has consequences no price can address.
              </p>
            </Reveal>
            <div style={{ display:'flex', flexDirection:'column', gap: 32 }}>
              {[
                ['Named linguists, not queues', 'Every project is assigned to a specific, certified human translator with domain expertise in your field. You can see their credentials. No anonymous marketplace, no black-box routing.'],
                ['A workflow that documents itself', 'Every translation goes through a documented two-step process — translation, then independent review — before it leaves our system. The audit trail is yours to keep.'],
                ['Prices that don\'t change at delivery', 'We quote firm prices, not estimates. If we find complexity we didn\'t anticipate, we absorb it. You pay what we quoted.'],
                ['A guarantee that means something', 'If USCIS rejects a certified translation for quality, we revise free or refund in full. In 20 years, fewer than 0.2% of our certified translations have been rejected for any reason.'],
              ].map(([title, desc], i) => (
                <Reveal key={title} delay={i * 60}>
                  <div style={{ paddingTop: 28, borderTop:'1px solid var(--line)' }}>
                    <div className="v-serif" style={{ fontSize: 22, letterSpacing:'-0.01em', marginBottom: 12 }}>{title}</div>
                    <p style={{ fontSize: 15, color:'var(--mute)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding:'96px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>02 · Certifications & compliance</div>
            <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 56px', fontWeight: 400 }}>
              The standards that govern our work.
            </h2>
          </Reveal>
          <div className="v-g-2col">
            {[
              {
                badge: 'ISO 9001:2015',
                title: 'Quality management',
                desc: 'Our entire operation — from intake to delivery — is certified under ISO 9001:2015. This means our quality processes are independently audited, documented, and consistently applied across every project and every language pair.',
              },
              {
                badge: 'ISO 17100',
                title: 'Translation services standard',
                desc: 'ISO 17100 defines the minimum qualifications for translators, the required two-step translation + revision process, and the project management controls a compliant translation service must follow. We meet or exceed every requirement.',
              },
              {
                badge: 'HIPAA-ready',
                title: 'Healthcare data handling',
                desc: 'We execute Business Associate Agreements (BAAs) for healthcare clients. Patient records, clinical trial documents, and informed consent forms are handled under a documented HIPAA-compliant workflow with restricted access and audit logging.',
              },
              {
                badge: 'SOC 2 Type II',
                title: 'Security & availability',
                desc: 'Our platform and file handling infrastructure has been independently audited against the SOC 2 Type II framework. Files are encrypted at rest (AES-256) and in transit (TLS 1.3). Access logs are retained for 12 months.',
              },
              {
                badge: 'ATA Members',
                title: 'American Translators Association',
                desc: 'Our linguists hold ATA certification in their language pairs — a credential that requires passing a rigorous, proctored translation exam. ATA-certified translators represent the top tier of the profession in the United States.',
              },
              {
                badge: '8 CFR §103.2',
                title: 'USCIS translation compliance',
                desc: 'Certified translations produced for USCIS filings are worded to meet the exact language required under 8 CFR §103.2(b)(3). Our Statements of Accuracy have been accepted by every USCIS service center.',
              },
            ].map((c, i) => (
              <Reveal key={c.badge} delay={i * 50}>
                <div className="v-card-lift" style={{ padding: 28, border:'1px solid var(--line)', background:'#fff' }}>
                  <div className="v-mono" style={{ display:'inline-block', fontSize: 11, letterSpacing:'0.06em', color:'var(--brand)', background:'rgba(11,30,63,0.05)', padding:'5px 10px', marginBottom: 16 }}>{c.badge}</div>
                  <div className="v-serif" style={{ fontSize: 20, letterSpacing:'-0.01em', marginBottom: 10 }}>{c.title}</div>
                  <p style={{ fontSize: 13.5, color:'var(--mute)', lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>03 · Our linguists</div>
            <div className="v-g-2col" style={{ marginBottom: 56 }}>
              <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>
                440+ certified professionals, each with a specialty.
              </h2>
              <p style={{ fontSize: 15.5, color:'var(--mute)', lineHeight: 1.65, margin: 0 }}>
                We do not use generalist freelancers or unverified marketplace talent. Every linguist working on Vanan projects has been vetted, credentialed, and assigned a domain — immigration, legal, medical, media, or technical.
              </p>
            </div>
          </Reveal>
          <div className="v-g-4col" style={{ borderTop:'1px solid var(--line)' }}>
            {[
              { stat: '100%', label: 'Credentialed or ATA-certified', detail: 'No unverified marketplace talent. Every linguist has submitted credentials before their first project.' },
              { stat: '9.2 yrs', label: 'Average linguist experience', detail: 'Measured across all active linguists on our platform, weighted by project volume.' },
              { stat: '12+', label: 'Domain specializations', detail: 'Immigration, legal, medical, media, finance, technical, marketing, academic, and more.' },
              { stat: 'Named', label: 'Assigned to every project', detail: 'You always know who translated your document. You can see their credentials before you pay.' },
            ].map(({ stat, label, detail }) => (
              <Reveal key={stat}>
                <div style={{ paddingTop: 28, paddingRight: 28 }}>
                  <div className="v-serif" style={{ fontSize: 40, letterSpacing:'-0.02em', color:'var(--brand)', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginTop: 10 }}>{label}</div>
                  <p style={{ fontSize: 13.5, color:'var(--mute)', lineHeight: 1.6, marginTop: 8 }}>{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ padding:'96px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <Reveal style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>04 · Where we are</div>
          <div className="v-g-2col">
            <div>
              <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 24px', fontWeight: 400 }}>New York City.</h2>
              <div style={{ display:'flex', flexDirection:'column', gap: 14, fontSize: 13.5, color:'var(--mute)' }}>
                {[
                  ['Address', '224 West 35th St., Suite 1200-8\nNew York, NY 10001'],
                  ['Phone (US toll-free)', '+1-800-230-7918'],
                  ['Phone (direct)', '+1-646-481-2955'],
                  ['Email', 'support@vananservices.com'],
                  ['Hours', 'Mon–Fri 9 AM–6 PM ET · Phone support\n24/7 online ordering & quotes'],
                ].map(([label, value]) => (
                  <div key={label} style={{ display:'flex', gap: 24 }}>
                    <span className="v-mono" style={{ fontSize: 10, letterSpacing:'0.06em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)', minWidth: 120, paddingTop: 2 }}>{label}</span>
                    <span style={{ whiteSpace:'pre-line' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:'var(--warm)', border:'1px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'center', minHeight: 260 }}>
              <div style={{ textAlign:'center', color:'rgba(10,10,10,0.4)' }}>
                <div className="v-serif" style={{ fontSize: 52 }}>NY</div>
                <div className="v-mono" style={{ fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase', marginTop: 8 }}>New York · 10001</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ padding:'96px 40px', background:'var(--ink)', color:'#fff' }}>
        <Reveal style={{ maxWidth: 880, margin:'0 auto', textAlign:'center' }}>
          <h2 className="v-serif" style={{ fontSize: 52, lineHeight: 1.08, letterSpacing:'-0.02em', margin:'0 0 36px', fontWeight: 400, color:'#fff' }}>
            Ready to work together?
          </h2>
          <div style={{ display:'flex', gap: 12, justifyContent:'center' }}>
            <VBtn onClick={() => window.navigate('quote')} style={{ background:'#fff', color:'var(--ink)' }}>Get a quote →</VBtn>
            <VBtn onClick={() => window.navigate('enterprise')} variant="ghost" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.25)' }}>Enterprise enquiry</VBtn>
          </div>
        </Reveal>
      </section>

      <VFooter />
    </div>
  );
}

window.VAbout = VAbout;
