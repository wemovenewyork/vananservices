// src/industries.jsx — Industries page

function VIndustries() {
  const industries = [
    {
      id: 'immigration',
      name: 'Immigration',
      tag: '01',
      headline: 'Every document your case officer will see.',
      desc: 'USCIS-accepted certified translations for green cards, naturalization, family petitions, and asylum. We understand immigration timelines — 24-hour delivery is standard, same-day is available.',
      services: ['Certified translation','Notarization','Apostille support'],
      docs: ['Birth certificates','Marriage & divorce decrees','Police clearances','Financial statements','Academic transcripts'],
      stat: ['97%','On-time delivery over the last 12 months'],
    },
    {
      id: 'legal',
      name: 'Legal',
      tag: '02',
      headline: 'Translations that hold up under cross-examination.',
      desc: 'ISO 17100 workflows, ATA-certified linguists, and a full audit trail for every document. Contracts, pleadings, depositions, e-discovery sets — handled under NDA with chain-of-custody logging.',
      services: ['Legal translation','Certified translation','Interpretation','Transcription'],
      docs: ['Contracts & agreements','Deposition transcripts','Court orders','Expert witness reports','Patent filings'],
      stat: ['ISO 17100','Certified workflow for every engagement'],
    },
    {
      id: 'media',
      name: 'Media & Film',
      tag: '03',
      headline: 'Reach every audience, in their language.',
      desc: 'From festival submissions to streaming distribution — subtitles, dubbing, and voice-over in 120 languages. Broadcast-grade QC, tight to your delivery specs (SRT, VTT, EBU STL, burned-in).',
      services: ['Subtitling & captioning','Voiceover & dubbing','Transcription','Localization'],
      docs: ['SDH & closed captions','Subtitle files (SRT, VTT)','Press kits','Screenplay translations','EPK materials'],
      stat: ['120','Languages for voiceover and dubbing'],
    },
    {
      id: 'publishing',
      name: 'Publishing',
      tag: '04',
      headline: 'Words that read as if written in the target language.',
      desc: 'Literary translation, academic publishing, and educational content. Every project is assigned to a linguist with domain expertise and a passion for the source material — not just language transfer.',
      services: ['Literary translation','Academic translation','Localization','Proofreading'],
      docs: ['Books & manuscripts','Academic journals','Educational materials','Marketing copy','Contracts & rights'],
      stat: ['400+','Publishers and media companies served'],
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      tag: '05',
      headline: 'Precision matters more than anywhere else.',
      desc: 'HIPAA-ready workflows, medical-specialist linguists, and a zero-tolerance QA process for clinical terminology. Patient records, informed consent, regulatory submissions, and clinical trial documentation.',
      services: ['Medical translation','Patient communication','Regulatory translation','Interpretation'],
      docs: ['Patient records','Informed consent forms','Clinical trial protocols','Drug labeling','Medical device manuals'],
      stat: ['HIPAA','Ready workflow for all patient data'],
    },
    {
      id: 'corporate',
      name: 'Corporate L&D',
      tag: '06',
      headline: 'Train every employee, in every language.',
      desc: 'E-learning localization, video captioning, and internal communications at scale. We integrate with your LMS and support continuous delivery via API or SFTP — no manual handoffs.',
      services: ['E-learning localization','Captioning','Voiceover','Business translation'],
      docs: ['LMS modules','Training videos','HR documentation','Policy manuals','Internal presentations'],
      stat: ['API & SFTP','For continuous localization pipelines'],
    },
  ];

  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Industries" />

      {/* Hero */}
      <section style={{ padding:'72px 40px 64px', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 24 }}>
            Industries
          </div>
          <div className="v-g-2col" style={{ alignItems:'end' }}>
            <h1 className="v-serif" style={{ fontSize: 58, lineHeight: 1.05, letterSpacing:'-0.025em', margin: 0, fontWeight: 400 }}>
              Every industry has its own language.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color:'var(--mute)', margin: 0 }}>
              A legal translator and a medical translator are not the same person. Neither are a film subtitler and an immigration specialist. Vanan assigns linguists with verified domain expertise — not just language pairs.
            </p>
          </div>
        </div>
      </section>

      {/* Industry cards */}
      {industries.map((ind, i) => (
        <section key={ind.id} style={{ padding:'80px 40px', borderBottom:'1px solid var(--line)', background: i % 2 === 0 ? '#fff' : 'var(--paper)' }}>
          <Reveal><div className="v-g-ind-card" style={{ maxWidth: 1200, margin:'0 auto' }}>

            {/* Label */}
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 16 }}>{ind.tag} · {ind.name}</div>
              <h2 className="v-serif" style={{ fontSize: 30, lineHeight: 1.15, letterSpacing:'-0.02em', margin:'0 0 16px', fontWeight: 400 }}>{ind.headline}</h2>
              <p style={{ fontSize: 14.5, color:'var(--mute)', lineHeight: 1.65, margin:'0 0 28px' }}>{ind.desc}</p>
              <div style={{ paddingTop: 20, borderTop:'1px solid var(--line)' }}>
                <div style={{ fontSize: 36, fontWeight: 600, color:'var(--brand)', fontFamily:'Source Serif 4', letterSpacing:'-0.02em', lineHeight: 1 }}>{ind.stat[0]}</div>
                <div style={{ fontSize: 12.5, color:'var(--mute)', marginTop: 6, lineHeight: 1.4 }}>{ind.stat[1]}</div>
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="v-mono" style={{ fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 16 }}>Services we provide</div>
              <div style={{ display:'flex', flexDirection:'column', gap: 0 }}>
                {ind.services.map(s => (
                  <a key={s} href="#" className="v-ind-service" onClick={e => { e.preventDefault(); window.navigate('service'); }} style={{
                    display:'flex', justifyContent:'space-between', alignItems:'center',
                    padding:'14px 0', borderBottom:'1px solid var(--line)',
                    textDecoration:'none', color:'var(--ink)', fontSize: 15,
                  }}>
                    <span className="v-serif" style={{ letterSpacing:'-0.005em' }}>{s}</span>
                    <span style={{ color:'var(--mute)', fontSize: 16 }}>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Document types */}
            <div>
              <div className="v-mono" style={{ fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 16 }}>Common documents</div>
              <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
                {ind.docs.map(d => (
                  <div key={d} style={{ display:'flex', alignItems:'center', gap: 10, fontSize: 14, color:'var(--mute)' }}>
                    <span style={{ width: 4, height: 4, borderRadius: 999, background:'var(--mute)', flexShrink: 0 }} />
                    {d}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <VBtn onClick={() => window.navigate('quote')}>Get a quote →</VBtn>
              </div>
            </div>
          </div></Reveal>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding:'96px 40px', background:'var(--ink)' }}>
        <div style={{ maxWidth: 880, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)', marginBottom: 24 }}>Start a project</div>
          <h2 className="v-serif" style={{ fontSize: 52, lineHeight: 1.08, letterSpacing:'-0.02em', margin:'0 0 36px', fontWeight: 400, color:'#fff' }}>
            Tell us your industry.<br/>We'll match you with the right linguist.
          </h2>
          <div style={{ display:'flex', gap: 12 }}>
            <VBtn onClick={() => window.navigate('quote')} style={{ background:'#fff', color:'var(--ink)' }}>Get a quote →</VBtn>
            <VBtn variant="ghost" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.25)' }}>Talk to a specialist</VBtn>
          </div>
        </div>
      </section>

      <VFooter />
    </div>
  );
}

window.VIndustries = VIndustries;
