// src/resources.jsx — Resources page

function VResources() {
  const guides = [
    {
      tag: 'Immigration',
      title: 'The USCIS translation checklist',
      desc: 'What USCIS requires under 8 CFR §103.2(b)(3), what "certified" actually means, and the seven mistakes that get translations rejected — with a checklist your attorney can use.',
      readTime: '8 min read',
      type: 'Guide',
    },
    {
      tag: 'Legal',
      title: 'ISO 17100: what it means for litigation translation',
      desc: 'A plain-language breakdown of the standard — what a conforming workflow looks like, why it matters for e-discovery, and the questions to ask any translation vendor before signing an MSA.',
      readTime: '6 min read',
      type: 'Guide',
    },
    {
      tag: 'Media',
      title: 'SRT vs. VTT vs. STL: choosing the right caption format',
      desc: 'Platform-by-platform rundown of caption and subtitle formats — what streaming services require, what broadcasters expect, and when burned-in captions make sense.',
      readTime: '5 min read',
      type: 'Reference',
    },
    {
      tag: 'Enterprise',
      title: 'Building a vendor contract for translation services',
      desc: 'The clauses that matter — liability, confidentiality, SLAs, revision rights, and IP ownership. With a checklist of the questions your legal team will ask.',
      readTime: '10 min read',
      type: 'Guide',
    },
    {
      tag: 'Healthcare',
      title: 'HIPAA-compliant translation: a practical overview',
      desc: 'What a HIPAA Business Associate Agreement covers in a translation context, which document types are in scope, and how to audit a vendor\'s data-handling practices.',
      readTime: '7 min read',
      type: 'Guide',
    },
    {
      tag: 'Immigration',
      title: 'Do I need a notarized translation for USCIS?',
      desc: 'Short answer: usually no. Long answer: here\'s when notarization is required, when it\'s helpful, and what the difference is between a notarized and a certified translation.',
      readTime: '4 min read',
      type: 'FAQ',
    },
  ];

  const faqs = [
    ['What is a certified translation?', 'A certified translation includes a signed Statement of Translation Accuracy from the translator, attesting that the translation is complete and accurate to the best of their knowledge. This is what USCIS, courts, and universities require — it is not the same as a notarized translation.'],
    ['How is a certified translation different from a notarized translation?', 'A certified translation is signed by the translator. A notarized translation additionally has the translator\'s signature witnessed and stamped by a notary public. USCIS does not require notarization. Some state courts and foreign consulates do.'],
    ['What languages do you support?', 'We work in over 120 languages. Every major world language is covered with multiple certified linguists. For rare or low-resource languages, contact us before ordering — we\'ll confirm availability and give you a firm timeline.'],
    ['How do you handle confidential documents?', 'All files are encrypted at rest (AES-256) and in transit (TLS 1.3). Access is limited to your assigned linguist and reviewer. Documents are purged 30 days after delivery. Enterprise customers can request extended retention or immediate purge.'],
    ['Can you translate documents from scanned copies?', 'Yes. We handle PDF scans, photographs, and faxes. If a scan is too degraded to translate accurately, your linguist will flag the specific passages — we never silently guess.'],
    ['What happens if USCIS rejects my translation?', 'We revise free of charge or refund in full, with no conditions. In practice, USCIS rejections for translation quality are extremely rare with our documents — we write Statements of Accuracy to the exact language the regulation requires.'],
  ];

  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Resources" />

      {/* Hero */}
      <section style={{ padding:'72px 40px 64px', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 24 }}>
            Resources
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 64, alignItems:'end' }}>
            <h1 className="v-serif" style={{ fontSize: 58, lineHeight: 1.05, letterSpacing:'-0.025em', margin: 0, fontWeight: 400 }}>
              Plain answers to the questions clients actually ask.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color:'var(--mute)', margin: 0 }}>
              Guides on USCIS requirements, legal translation standards, caption formats, and enterprise contracting — written by our team for the people doing the work, not for search engines.
            </p>
          </div>
        </div>
      </section>

      {/* Guides grid */}
      <section style={{ padding:'80px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 48 }}>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)' }}>01 · Guides & references</div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 2 }}>
            {guides.map((g, i) => (
              <Reveal key={i} delay={i * 60}><a href="#" style={{ display:'block', padding: 32, border:'1px solid var(--line)', textDecoration:'none', color:'inherit', background:'var(--paper)', transition:'background .12s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#fff'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--paper)'}
              >
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 20 }}>
                  <span className="v-mono" style={{ fontSize: 10, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--brand)' }}>{g.tag}</span>
                  <span className="v-mono" style={{ fontSize: 10, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--mute)' }}>{g.type}</span>
                </div>
                <h3 className="v-serif" style={{ fontSize: 22, lineHeight: 1.25, letterSpacing:'-0.01em', margin:'0 0 12px', fontWeight: 400 }}>{g.title}</h3>
                <p style={{ fontSize: 14, color:'var(--mute)', lineHeight: 1.6, margin:'0 0 24px' }}>{g.desc}</p>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span className="v-mono" style={{ fontSize: 10, color:'var(--mute)', letterSpacing:'0.04em' }}>{g.readTime}</span>
                  <span style={{ color:'var(--mute)', fontSize: 16 }}>→</span>
                </div>
              </a></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'80px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap: 72, maxWidth: 1200, margin:'0 auto' }}>
          <div>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>02 · Frequently asked</div>
            <h2 className="v-serif" style={{ fontSize: 36, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>Common questions.</h2>
            <p style={{ color:'var(--mute)', fontSize: 14.5, marginTop: 16, lineHeight: 1.6 }}>
              Still have a question? Email us at <a href="mailto:support@vanan.co" style={{ color:'var(--ink)' }}>support@vanan.co</a> — a real person replies.
            </p>
          </div>
          <div>
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0} style={{ borderBottom:'1px solid var(--line)', padding:'22px 0' }}>
                <summary style={{ cursor:'pointer', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap: 24 }}>
                  <span className="v-serif" style={{ fontSize: 20, letterSpacing:'-0.01em' }}>{q}</span>
                  <span style={{ color:'var(--mute)', fontSize: 20, flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ color:'var(--mute)', fontSize: 14.5, lineHeight: 1.65, marginTop: 14, maxWidth: 640 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary strip */}
      <section style={{ padding:'64px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 40 }}>03 · Glossary</div>
          <Reveal><div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 32 }}>
            {[
              ['Certified translation', 'A translation accompanied by a signed Statement of Translation Accuracy from the translator. Required by USCIS, courts, and most universities.'],
              ['Notarized translation', 'A certified translation whose translator signature has been witnessed and stamped by a notary public. Required by some state courts and foreign consulates — but not by USCIS.'],
              ['ISO 17100', 'An international standard for translation services. Specifies translator qualification requirements, a two-step translation + revision process, and project management controls.'],
              ['ATA certification', 'A credential issued by the American Translators Association. ATA-certified translators have passed a rigorous exam in a specific language pair.'],
              ['Back translation', 'A translation of a translation back into the source language, used for QA in clinical trials, pharmaceutical labeling, and informed consent documents.'],
              ['Localization (L10n)', 'Adapting content for a specific locale — not just language but also format, cultural references, dates, currencies, and regulatory conventions.'],
            ].map(([term, def]) => (
              <div key={term} style={{ paddingTop: 20, borderTop:'1px solid var(--line)' }}>
                <div className="v-serif" style={{ fontSize: 18, letterSpacing:'-0.01em', marginBottom: 8 }}>{term}</div>
                <div style={{ fontSize: 13.5, color:'var(--mute)', lineHeight: 1.6 }}>{def}</div>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'80px 40px', background:'var(--ink)' }}>
        <div style={{ maxWidth: 880, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr auto', gap: 48, alignItems:'center' }}>
          <div>
            <h2 className="v-serif" style={{ fontSize: 40, lineHeight: 1.1, letterSpacing:'-0.02em', margin:'0 0 16px', fontWeight: 400, color:'#fff' }}>
              Ready to start a project?
            </h2>
            <p style={{ fontSize: 15, color:'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>
              Quote in 15 minutes. Delivery in 24 hours. No sales call required.
            </p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap: 10, flexShrink: 0 }}>
            <VBtn onClick={() => window.navigate('quote')} style={{ background:'#fff', color:'var(--ink)' }}>Get a quote →</VBtn>
            <VBtn variant="ghost" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.25)' }}>Browse services</VBtn>
          </div>
        </div>
      </section>

      <VFooter />
    </div>
  );
}

window.VResources = VResources;
