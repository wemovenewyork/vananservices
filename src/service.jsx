// src/service.jsx — All service detail pages (data-driven)

const SVC = {
  translation: {
    num: '01', name: 'Certified Translation',
    tagline: 'Certified · Legal · Academic · Audio & Video',
    headline: 'Certified translation,\naccepted by USCIS.',
    body: 'For green cards, naturalization, courts, and academic admissions. Every page signed by a certified linguist with a Statement of Translation Accuracy. Delivered as a digital PDF with a notarized hard copy on request.',
    price: { from:'$24.95', unit:'/ page', tag:'USCIS-certified' },
    rows: [['24-hour delivery','Included'],['Statement of Accuracy','Included'],['Digital PDF + editable','Included'],['Notarized hard copy','+$19.95'],['Same-day rush','+50%']],
    note: 'Firm price at quote. No hidden fees. Money-back guarantee if USCIS rejects for translation quality.',
    deliverables: [
      ['Translated document', 'Mirrors the source layout page-for-page. Stamps, seals, and signatures described in brackets.'],
      ['Statement of Accuracy', 'Signed by a named, ATA-certified linguist. USCIS-compliant language under 8 CFR §103.2(b)(3).'],
      ['Audit record', 'Translator credentials, project ID, and delivery timestamp your attorney can cite.'],
    ],
    table: {
      cols: ['Document','Turnaround','Notarization','USCIS-accepted'],
      rows: [
        ['Birth certificate','24 hours','Optional','Yes'],
        ['Marriage certificate','24 hours','Optional','Yes'],
        ['Divorce decree','24–48 hours','Optional','Yes'],
        ['Police clearance','24 hours','Optional','Yes'],
        ['Academic transcript','48 hours','Rarely','Yes'],
        ['Diploma','24 hours','Rarely','Yes'],
        ['Passport page','24 hours','Rarely','Yes'],
        ['Bank statement','24 hours','Optional','Yes'],
        ['Court judgment','48–72 hours','Recommended','Yes'],
      ],
    },
    faqs: [
      ['Will USCIS accept this?','Yes. Every certified translation includes a Statement of Accuracy worded to meet 8 CFR §103.2(b)(3). If USCIS rejects for translation quality, we revise free or refund in full.'],
      ['How fast is 24 hours, really?','Counted from the moment your payment clears. 97% of documents shipped in our reported window. Rush is same-day for most single-page documents.'],
      ['What if my document is hard to read?','We handle faded scans, handwritten sections, and stamps. If anything is genuinely illegible, your linguist flags it in brackets — never silently guesses.'],
      ['Do you notarize?','Yes. Notarization is an optional $19.95 add-on for documents filed with state agencies, foreign consulates, or specific courts. USCIS does not require it.'],
      ['Is my document safe?','Files are encrypted at rest and in transit. Access is restricted to your assigned linguist and reviewer. Documents are purged 30 days after delivery.'],
    ],
  },
  transcription: {
    num: '02', name: 'Transcription',
    tagline: 'Verbatim · Clean-read · Timecoded',
    headline: 'Every word. Every speaker.\nTimecoded on request.',
    body: 'Verbatim, clean-read, and timecoded transcription for legal, medical, media, and corporate use. 850,000+ minutes delivered. Turnaround from same-day to 48 hours depending on volume.',
    price: { from:'$1.25', unit:'/ audio min', tag:'standard turnaround' },
    rows: [['Standard turnaround','24–48 hours'],['Verbatim transcript','Included'],['Speaker labels','Included'],['Timestamps','On request'],['Rush (same-day)','+60%']],
    note: 'Minimum order $25. Pricing based on audio quality and number of speakers.',
    deliverables: [
      ['Verbatim or clean-read transcript', 'Your choice of format: every filler word included, or a polished clean-read version. Both formats are available for the same audio.'],
      ['Speaker-labeled output', 'Each speaker identified and consistently labeled throughout. Ideal for depositions, interviews, and focus groups.'],
      ['Timestamped file', 'Timestamps at every paragraph break or on request at every line. Available in plain text, Word, or SRT.'],
    ],
    table: {
      cols: ['Audio type','Turnaround','Verbatim','Timestamps'],
      rows: [
        ['Deposition / legal','24 hours','Yes','Optional'],
        ['Medical dictation','24 hours','Yes','Optional'],
        ['Earnings call / conference','24 hours','Clean-read','Optional'],
        ['Focus group / interview','48 hours','Yes','Optional'],
        ['Podcast / webinar','48 hours','Clean-read','Optional'],
        ['Academic research','48 hours','Yes','Required'],
      ],
    },
    faqs: [
      ['What is the difference between verbatim and clean-read?','Verbatim captures every "um," "uh," false start, and repetition. Clean-read removes those while keeping the full meaning. Legal transcription is always verbatim; corporate and media transcription is often clean-read.'],
      ['How do you handle multiple speakers?','We label speakers consistently throughout. For legal depositions, we follow the Q/A format. For focus groups and interviews, we use Speaker 1/2/3 unless you provide a participant list.'],
      ['What audio quality do you need?','We work with all common file formats (MP3, MP4, WAV, M4A). We can transcribe difficult audio — noise, accents, crosstalk — but turnaround and price may be adjusted. We\'ll flag issues before we start.'],
      ['Is my audio confidential?','All files are encrypted at rest and in transit. We routinely work under NDA for legal, medical, and investment-grade engagements. Files are purged 30 days after delivery unless you request otherwise.'],
    ],
  },
  captioning: {
    num: '03', name: 'Captioning',
    tagline: 'Closed · Open · SDH · SRT · VTT',
    headline: 'Captions that meet\nbroadcast standards.',
    body: 'Closed captions, open captions, and SDH subtitles for streaming, broadcast, and corporate video. Delivered in SRT, VTT, SCC, or burned-in — formatted to the spec your platform requires.',
    price: { from:'$1.50', unit:'/ video min', tag:'SRT or VTT' },
    rows: [['SRT / VTT file','Included'],['Speaker identification','Included'],['Sound effects (SDH)','On request'],['Broadcast format (SCC)','On request'],['Burned-in captions','+$0.80/min']],
    note: 'Minimum order $30. Format conversion between SRT, VTT, and SCC included.',
    deliverables: [
      ['SRT or VTT caption file', 'Timecoded to your video. Formatted to 42-character line limits and FCC reading speed guidelines.'],
      ['SDH track (on request)', 'Sound Effects for the Deaf and Hard-of-Hearing — includes speaker identification and non-speech audio descriptions.'],
      ['Burned-in version (on request)', 'Open captions baked directly into the video file. Ideal for social media, trade shows, or platforms that don\'t support sidecar caption files.'],
    ],
    table: {
      cols: ['Platform','Format','SDH','Turnaround'],
      rows: [
        ['YouTube','SRT','Optional','24 hours'],
        ['Netflix / streaming','VTT / TTML','Required','48 hours'],
        ['Broadcast TV','SCC / EBU STL','Required','48 hours'],
        ['Corporate / e-learning','SRT or VTT','Optional','24 hours'],
        ['Social media','Burned-in','N/A','48 hours'],
      ],
    },
    faqs: [
      ['What is the difference between SDH and regular closed captions?','SDH (Subtitles for the Deaf and Hard-of-Hearing) includes speaker identification and non-speech sounds like [applause] or [door closes]. Streaming platforms like Netflix require SDH. Regular closed captions include only the spoken dialogue.'],
      ['Which format does YouTube need?','YouTube accepts SRT and VTT. We deliver SRT by default — you upload it in Creator Studio under "Subtitles." Auto-captions from YouTube are notoriously inaccurate; our human-captioned SRT files achieve 99%+ accuracy.'],
      ['Can you caption foreign-language video?','Yes. We caption in any of our 120 languages, and we can translate + caption simultaneously (e.g., Spanish video delivered with English SRT captions).'],
      ['What is your accuracy rate?','99%+ on clear audio. We use a two-step production + review process for all caption work.'],
    ],
  },
  subtitling: {
    num: '04', name: 'Subtitling',
    tagline: 'Film · Streaming · Broadcast · Educational',
    headline: 'Subtitles for every\nplatform, every language.',
    body: 'Translated subtitles, SDH, and multilingual subtitle packages for film, streaming, and educational distribution. 189,000+ minutes delivered. Every file reviewed by a native-speaking subtitler.',
    price: { from:'$2.50', unit:'/ video min', tag:'per language' },
    rows: [['Translated subtitle file','Included'],['Timecoding','Included'],['Netflix/streaming spec','On request'],['Burned-in version','+$0.80/min'],['Additional language','+$2.50/min']],
    note: 'Minimum order $50 per language. Volume discounts available for 10+ languages.',
    deliverables: [
      ['Translated & timecoded subtitle file', 'Native-speaking subtitler — not a translator working from a script. Idioms and cultural references adapted for the target audience.'],
      ['Platform-formatted output', 'Formatted to Netflix Timed Text (NFLX-TT), EBU STL, SRT, or VTT depending on your distribution requirements.'],
      ['Multilingual package (on request)', 'Up to 40 languages in a single order. Coordinated delivery to a consistent quality standard. One PM, one invoice.'],
    ],
    table: {
      cols: ['Use case','Format','Languages','Turnaround'],
      rows: [
        ['Film festival submission','SRT / PDF','Any','48–72 hours'],
        ['Netflix/streaming','NFLX-TT / VTT','Any','72 hours'],
        ['Broadcast TV','EBU STL / SCC','Any','48–72 hours'],
        ['Educational video','SRT or VTT','Any','48 hours'],
        ['Corporate / training','SRT or VTT','Any','24–48 hours'],
      ],
    },
    faqs: [
      ['What is the difference between subtitling and captioning?','Captions are for viewers who speak the language but can\'t hear the audio. Subtitles are a translation — they convert the dialogue from one language to another. SDH subtitles combine both: translation plus sound descriptions.'],
      ['Do you follow Netflix subtitle guidelines?','Yes. We produce NFLX-TT compliant files with proper character limits, timing gaps, and reading speed targets. We\'ve delivered to Netflix aggregators and distributors directly.'],
      ['How do I send you the video and script?','Upload via the quote form, SFTP, or Google Drive. A script or transcript helps speed production but isn\'t required — we work from the video directly.'],
      ['Can you subtitle in more than one language at once?','Yes. Multilingual subtitle packages (up to 40 languages) are coordinated under a single PM, with consistent quality review across all language pairs.'],
    ],
  },
  voiceover: {
    num: '05', name: 'Voice Over',
    tagline: 'Commercial · E-learning · Documentary · IVR',
    headline: 'Professional narration\nin 100+ languages.',
    body: 'Commercial voice-over, e-learning narration, documentary, and IVR in 100+ languages. Each project is produced in a professional studio environment by a vetted native-speaking talent.',
    price: { from:'$45', unit:'/ finished min', tag:'studio quality' },
    rows: [['Studio-quality audio','Included'],['Native-speaking talent','Included'],['Multiple takes','Included'],['Broadcast-ready delivery','Included'],['Script translation','+$0.14/word']],
    note: 'Minimum order $150. Custom casting, accent matching, and client-directed sessions available.',
    deliverables: [
      ['Broadcast-ready audio file', 'Delivered as WAV (48kHz/24-bit) or MP3 to your spec. Noise-floor clean, levels normalized to -16 LUFS for broadcast or -14 LUFS for streaming.'],
      ['Multiple takes', 'Two full takes included on all projects under 10 minutes. Client-directed sessions available via remote source-connect for enterprise clients.'],
      ['Script and timing notes', 'If we translated the script, we include a timing-optimized adaptation. If you supply the script, we flag any lines that won\'t work in the target language before recording.'],
    ],
    table: {
      cols: ['Use case','Style','Turnaround','Languages'],
      rows: [
        ['E-learning / LMS narration','Neutral, instructional','48–72 hours','100+'],
        ['Corporate explainer video','Conversational','48 hours','100+'],
        ['Broadcast commercial','Polished, energetic','48–72 hours','60+'],
        ['Documentary narration','Warm, authoritative','72 hours','60+'],
        ['IVR / phone system','Clear, measured','24–48 hours','100+'],
      ],
    },
    faqs: [
      ['Can I direct the session?','Yes. Remote directed sessions are available via Source-Connect, Cleanfeed, or Zoom for enterprise clients. We coordinate talent scheduling and studio booking.'],
      ['How do you select the talent?','You can review talent profiles and listen to demos before we book. We pre-screen talent for accent, energy, and vocal quality against your brief.'],
      ['What if the script needs to be translated first?','We translate the script, deliver it for your approval, and then move into recording — under the same project umbrella. Localization-specific concerns (text expansion, idioms) are handled by the translator before the voice talent sees the script.'],
      ['What audio formats do you deliver?','WAV (48kHz/24-bit) as standard. MP3, AIFF, or any other format on request.'],
    ],
  },
  typing: {
    num: '06', name: 'Typing & DTP',
    tagline: 'Document · Legal · Handwritten · Data entry',
    headline: 'Handwritten. Faded.\nHard copy. We type it.',
    body: 'Document typing, legal DTP, handwritten transcription, and data entry. Every output file is editable, formatted, and reviewed for accuracy before delivery.',
    price: { from:'$3.50', unit:'/ page', tag:'standard turnaround' },
    rows: [['Editable Word or PDF output','Included'],['Layout preservation','Included'],['Original returned unchanged','Included'],['DTP formatting','+$2.00/page'],['Rush (same-day)','+50%']],
    note: 'Minimum order $15. Pricing for handwritten documents may vary based on legibility.',
    deliverables: [
      ['Editable document output', 'Delivered as Microsoft Word (.docx) or PDF. Formatted to match the source layout including tables, columns, and letterheads.'],
      ['DTP-ready file (on request)', 'Adobe InDesign or Illustrator source file if your document requires print-ready typesetting.'],
      ['Accuracy certificate', 'For legal and archival typing, we include an accuracy statement noting any portions flagged as illegible.'],
    ],
    table: {
      cols: ['Document type','Turnaround','Output format','DTP available'],
      rows: [
        ['Handwritten notes / letters','24 hours','Word or PDF','No'],
        ['Legal documents / contracts','24–48 hours','Word + PDF','Yes'],
        ['Historical / archival records','48–72 hours','Word or PDF','On request'],
        ['Medical records','24 hours','Word','No'],
        ['Data entry / forms','24–48 hours','Excel or CSV','No'],
      ],
    },
    faqs: [
      ['Can you type from scanned images?','Yes — PDF scans, photographs, and fax pages. The cleaner the scan, the faster the turnaround. Very degraded material may carry a surcharge; we\'ll flag it upfront.'],
      ['Do you handle handwritten documents?','Yes, including cursive, non-standard handwriting, and historical scripts. If a passage is genuinely illegible, we mark it [illegible] rather than guessing.'],
      ['What if the document is not in English?','We type documents in any of our 120 supported languages. Foreign-language typing is priced the same as English.'],
      ['Can you preserve the original formatting?','Yes. Tables, columns, logos, and letterheads are reproduced in the output file. For complex layouts, DTP add-on delivers a pixel-accurate reproduction.'],
    ],
  },
  audiodescription: {
    num: '07', name: 'Audio Description',
    tagline: 'Broadcast · Streaming · Theatrical · Museum',
    headline: 'Making your content\naccessible to everyone.',
    body: 'Audio description narration for broadcast, streaming, theatrical, and museum content. Written and narrated by trained AD specialists. Delivered as a separate audio track or combined video file.',
    price: { from:'$2.00', unit:'/ video min', tag:'standard AD' },
    rows: [['AD script','Included'],['Narrated audio track','Included'],['Extended AD (on request)','Custom quote'],['Combined video file','+$0.50/min'],['Broadcast QC report','On request']],
    note: 'Minimum order $60. Meets FCC, Ofcom, and WCAG 2.1 accessibility standards.',
    deliverables: [
      ['AD script', 'Written by a trained AD specialist. Timed to fit within natural pauses in the dialogue — never talking over speech unless extended AD is specified.'],
      ['Narrated audio track', 'Recorded by a professional narrator in a studio environment. Delivered as a separate M&E mix or combined with your original audio.'],
      ['Combined video file (on request)', 'Your video with the AD track mixed in and an on-screen "Audio Description Available" badge. Ready for platform upload.'],
    ],
    table: {
      cols: ['Platform','Standard','Delivery format','Turnaround'],
      rows: [
        ['Broadcast TV','FCC / Ofcom','M&E + AD audio','72 hours'],
        ['Netflix / streaming','WCAG 2.1','AAC audio track','72 hours'],
        ['Theatrical / cinema','ITC guidelines','Broadcast WAV','5–7 days'],
        ['Museum / gallery','Custom spec','MP3 or guide device','5–7 days'],
        ['Corporate / e-learning','WCAG 2.1','Combined video','48–72 hours'],
      ],
    },
    faqs: [
      ['What is audio description?','Audio description (AD) is narration added to the gaps in dialogue that describes key visual elements — actions, settings, facial expressions, and on-screen text — so blind and low-vision viewers can follow the story.'],
      ['What is extended audio description?','Extended AD pauses the video to accommodate longer descriptions when the gaps in dialogue are too short. Required for complex visual narratives. Not suitable for all content types.'],
      ['Do you meet FCC requirements for broadcast?','Yes. Our AD scripts and narration meet FCC requirements under 47 C.F.R. §79.3 for video programming distributors.'],
      ['Can you produce AD in other languages?','Yes. We produce AD in any of our 120 languages — useful for multilingual streaming distributions and international co-productions.'],
    ],
  },
  video: {
    num: '08', name: 'Video Services',
    tagline: 'Animation · Editing · Spokesperson · Production',
    headline: 'Video production\nfor global audiences.',
    body: 'Explainer animation, spokesperson video, corporate video production, and video editing in 100+ languages. Designed for e-learning, marketing, and internal communications teams.',
    price: { from:'Custom', unit:'quote', tag:'based on scope' },
    rows: [['Creative brief consultation','Included'],['Script & storyboard','Included'],['Revision rounds','2 included'],['Source files','On request'],['Rush delivery','Subject to availability']],
    note: 'Contact us with your brief for a firm quote. Most projects quoted within 4 business hours.',
    deliverables: [
      ['Final video file', 'MP4 (H.264) at your specified resolution — 1080p for web, 4K for broadcast. ProRes or DNxHD source files available on request.'],
      ['Script and storyboard', 'A fully approved script and motion storyboard before production begins. No surprises at the end.'],
      ['Multilingual versions', 'Swap in localized voice-over and subtitle tracks for up to 40 languages, using the same animation or footage. Cost-effective global rollout.'],
    ],
    table: {
      cols: ['Product type','Typical duration','Turnaround','Starting from'],
      rows: [
        ['2D explainer animation','60–90 sec','10–14 business days','$2,400'],
        ['Spokesperson / presenter','60–180 sec','5–7 business days','$950'],
        ['Corporate B-roll edit','2–5 min','3–5 business days','$600'],
        ['E-learning module video','5–10 min','7–10 business days','$1,800'],
        ['Multilingual VO swap (per lang)','Any','2–3 business days','$180/min'],
      ],
    },
    faqs: [
      ['Do you write scripts?','Yes. Our production team handles brief → script → storyboard → production. If you have an existing script, we can work from that.'],
      ['What file formats do you deliver?','MP4 (H.264) as standard. ProRes, DNxHD, or any other format on request. We also deliver separate audio stems if you need them.'],
      ['Can you localize an existing video into other languages?','Yes — this is one of our most common requests. We swap the voice-over track, update on-screen text, and adjust timing where needed. Languages coordinated in parallel so all versions deliver together.'],
      ['How many revision rounds are included?','Two rounds of revisions are included at the script stage and two at the final video stage. Additional rounds are billed at $80/hour.'],
    ],
  },
};

const SVC_ORDER = ['translation','transcription','captioning','subtitling','voiceover','typing','audiodescription','video'];

function VService({ service = 'translation' }) {
  const svc = SVC[service] || SVC.translation;

  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Services" />

      {/* Breadcrumb + hero */}
      <section style={{ padding:'36px 40px 64px', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10, fontSize: 12.5, color:'var(--mute)', marginBottom: 44, flexWrap:'wrap' }}>
            <a href="#" onClick={e => { e.preventDefault(); window.navigate('home'); }} style={{ color:'var(--mute)', textDecoration:'none' }}>Services</a>
            <span>/</span>
            <span style={{ color:'var(--ink)' }}>{svc.name}</span>
          </div>
          <div className="v-g-hero">
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--brand)', marginBottom: 24 }}>
                Service · {svc.num}
              </div>
              <h1 className="v-serif" style={{ fontSize: 56, lineHeight: 1.05, letterSpacing:'-0.025em', margin: 0, fontWeight: 400, whiteSpace:'pre-line' }}>
                {svc.headline}
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.55, color:'var(--mute)', marginTop: 24, maxWidth: 540 }}>
                {svc.body}
              </p>
              <div style={{ display:'flex', gap: 12, marginTop: 32, flexWrap:'wrap' }}>
                <VBtn onClick={() => window.navigate('quote')}>Get a quote →</VBtn>
                <VBtn variant="ghost">Talk to a specialist</VBtn>
              </div>
            </div>

            {/* Pricing card */}
            <div style={{ background:'#fff', border:'1px solid var(--line)', padding: 28, boxShadow:'0 2px 6px rgba(10,10,10,0.03)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 20 }}>
                <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--mute)' }}>Starts at</div>
                <VLive>Quoting live</VLive>
              </div>
              <div style={{ display:'flex', alignItems:'baseline', gap: 8 }}>
                <span className="v-serif" style={{ fontSize: 52, lineHeight: 1, letterSpacing:'-0.02em' }}>{svc.price.from}</span>
                <span style={{ fontSize: 14, color:'var(--mute)' }}>{svc.price.unit}</span>
              </div>
              <div className="v-mono" style={{ fontSize: 10, color:'var(--brand)', letterSpacing:'0.06em', textTransform:'uppercase', marginTop: 6 }}>{svc.price.tag}</div>
              <hr className="v-hr" style={{ margin:'22px 0' }} />
              <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
                {svc.rows.map(([k,v]) => (
                  <div key={k} style={{ display:'flex', justifyContent:'space-between', fontSize: 13.5 }}>
                    <span style={{ color:'var(--ink)' }}>{k}</span>
                    <span style={{ color: v.startsWith('+') ? 'var(--mute)' : 'var(--ink)', fontWeight: v.startsWith('+') ? 400 : 500 }}>{v}</span>
                  </div>
                ))}
              </div>
              <hr className="v-hr" style={{ margin:'22px 0 18px' }} />
              <div style={{ fontSize: 12, color:'var(--mute)', lineHeight: 1.5 }}>{svc.note}</div>
            </div>
          </div>
        </div>
      </section>

      <VProof />

      {/* What you receive */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div className="v-g-sidebar" style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal style={{ position:'sticky', top: 80, alignSelf:'start' }}>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>What you receive</div>
            <h2 className="v-serif" style={{ fontSize: 36, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>A deliverable that holds up to review.</h2>
          </Reveal>
          <div style={{ display:'flex', flexDirection:'column', gap: 0 }}>
            {svc.deliverables.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 60}>
                <div style={{ padding:'28px 0', borderBottom:'1px solid var(--line)' }}>
                  <div className="v-serif" style={{ fontSize: 22, letterSpacing:'-0.01em', marginBottom: 10 }}>{title}</div>
                  <p style={{ fontSize: 14.5, color:'var(--mute)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases table */}
      <section style={{ padding:'96px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div className="v-g-sidebar" style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>Common use cases</div>
            <h2 className="v-serif" style={{ fontSize: 36, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>What clients ask us for most.</h2>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <div style={{ display:'grid', gridTemplateColumns:`2fr ${svc.table.cols.slice(1).map(() => '1fr').join(' ')}`, padding:'0 0 14px', borderBottom:'1px solid var(--line)', fontSize: 11, textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--mute)' }}>
                {svc.table.cols.map(c => <div key={c}>{c}</div>)}
              </div>
              {svc.table.rows.map(row => (
                <div key={row[0]} style={{ display:'grid', gridTemplateColumns:`2fr ${row.slice(1).map(() => '1fr').join(' ')}`, padding:'16px 0', borderBottom:'1px solid var(--line)', fontSize: 14, alignItems:'center' }}>
                  <div className="v-serif" style={{ fontSize: 16, letterSpacing:'-0.005em' }}>{row[0]}</div>
                  {row.slice(1).map((cell, ci) => (
                    <div key={ci} style={{ color: cell === 'Yes' || cell === 'Required' || cell === 'Included' ? '#2E9E6A' : 'var(--mute)' }}>{cell}</div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div className="v-g-sidebar" style={{ maxWidth: 1200, margin:'0 auto' }}>
          <Reveal>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>Questions we're asked</div>
            <h2 className="v-serif" style={{ fontSize: 36, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>Plain answers.</h2>
          </Reveal>
          <div>
            {svc.faqs.map(([q, a], i) => (
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

      {/* Other services strip */}
      <section style={{ padding:'64px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 28 }}>Other services</div>
          <div>
            {SVC_ORDER.filter(slug => slug !== service).map((slug, i) => {
              const s = SVC[slug];
              return (
                <a key={slug} href="#" className="v-svc-row"
                  onClick={e => { e.preventDefault(); window.navigate('service', { service: slug }); }}
                  style={{ display:'grid', gridTemplateColumns:'48px 1.2fr 2fr 32px', alignItems:'center', gap: 24, padding:'20px 0', borderBottom:'1px solid var(--line)', textDecoration:'none', color:'inherit' }}>
                  <span className="v-mono" style={{ fontSize: 11, color:'var(--mute)' }}>{s.num}</span>
                  <span className="v-serif" style={{ fontSize: 18, letterSpacing:'-0.01em' }}>{s.name}</span>
                  <span style={{ color:'var(--mute)', fontSize: 14 }}>{s.tagline}</span>
                  <span className="v-svc-arrow" style={{ color:'var(--mute)', fontSize: 18, textAlign:'right' }}>→</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'96px 40px', background:'var(--ink)', color:'#fff' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 64, alignItems:'center', maxWidth: 1200, margin:'0 auto' }}>
          <h2 className="v-serif" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400, color:'#fff' }}>
            Ready to start a {svc.name.toLowerCase()} project?
          </h2>
          <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
            <VBtn onClick={() => window.navigate('quote')} style={{ background:'#fff', color:'var(--ink)', justifyContent:'space-between', width:'100%' }}>
              <span>Get a quote →</span>
            </VBtn>
            <VBtn variant="ghost" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.25)', justifyContent:'space-between', width:'100%' }}>
              <span>Email support@vananservices.com</span><span>↗</span>
            </VBtn>
          </div>
        </div>
      </section>

      <VFooter />
    </div>
  );
}

window.VService = VService;
