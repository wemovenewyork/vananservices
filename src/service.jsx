// src/service.jsx — Certified translation service page

function VService() {
  return (
    <div className="v-scope" style={{ background:'var(--paper)', minHeight:'100vh' }}>
      <VNav active="Services" />

      {/* Breadcrumb + hero */}
      <section style={{ padding:'36px 40px 64px', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10, fontSize: 12.5, color:'var(--mute)', marginBottom: 44 }}>
            <a href="#" onClick={e => { e.preventDefault(); window.navigate('home'); }} style={{ color:'var(--mute)', textDecoration:'none' }}>Services</a>
            <span>/</span>
            <span style={{ color:'var(--ink)' }}>Certified document translation</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 64, alignItems:'end' }}>
            <div>
              <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--brand)', marginBottom: 24 }}>
                Service · 01
              </div>
              <h1 className="v-serif" style={{ fontSize: 58, lineHeight: 1.05, letterSpacing:'-0.025em', margin: 0, fontWeight: 400 }}>
                Certified translation,<br/>accepted by USCIS.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.55, color:'var(--mute)', marginTop: 24, maxWidth: 540 }}>
                For green cards, naturalization, courts, and academic admissions. Every page signed by a certified linguist with a Statement of Translation Accuracy. Delivered as a digital PDF with a notarized hard copy on request.
              </p>
              <div style={{ display:'flex', gap: 12, marginTop: 32 }}>
                <VBtn onClick={() => window.navigate('quote')}>Start my translation →</VBtn>
                <VBtn variant="ghost">Download sample certificate</VBtn>
              </div>
            </div>

            {/* Pricing card */}
            <div style={{ background:'#fff', border:'1px solid var(--line)', padding: 28, boxShadow:'0 2px 6px rgba(10,10,10,0.03)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 20 }}>
                <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--mute)' }}>Starts at</div>
                <VLive>Quoting live</VLive>
              </div>
              <div style={{ display:'flex', alignItems:'baseline', gap: 8 }}>
                <span className="v-serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing:'-0.02em' }}>$24.95</span>
                <span style={{ fontSize: 14, color:'var(--mute)' }}>/ page · USCIS-certified</span>
              </div>
              <hr className="v-hr" style={{ margin:'22px 0' }} />
              <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
                {[
                  ['24-hour delivery','Included'],
                  ['Statement of Accuracy','Included'],
                  ['Digital PDF + editable','Included'],
                  ['Notarized hard copy','+$19.95'],
                  ['Same-day rush','+50%'],
                ].map(([k,v]) => (
                  <div key={k} style={{ display:'flex', justifyContent:'space-between', fontSize: 13.5 }}>
                    <span style={{ color:'var(--ink)' }}>{k}</span>
                    <span style={{ color: v.startsWith('+') ? 'var(--mute)' : 'var(--ink)', fontWeight: v.startsWith('+') ? 400 : 500 }}>{v}</span>
                  </div>
                ))}
              </div>
              <hr className="v-hr" style={{ margin:'22px 0 18px' }} />
              <div style={{ fontSize: 12, color:'var(--mute)', lineHeight: 1.5 }}>
                Firm price at quote. No hidden fees. Money-back guarantee if USCIS rejects for translation quality.
              </div>
            </div>
          </div>
        </div>
      </section>

      <VProof />

      {/* What you receive */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'320px 1fr', gap: 72, maxWidth: 1200, margin:'0 auto' }}>
          <div>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>What you receive</div>
            <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>A deliverable that holds up to review.</h2>
            <p style={{ color:'var(--mute)', fontSize: 15, marginTop: 18, maxWidth: 300 }}>
              Every translation ships with three artifacts: the translated document, a signed Statement of Accuracy, and an audit record your attorney can verify.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24 }}>
            <div>
              <div className="v-doc-ph" data-label="01 · Translated PDF" style={{ height: 280, padding: 20 }}>
                <div className="v-serif" style={{ fontSize: 13, color:'var(--ink)' }}>Birth Certificate</div>
                <div style={{ fontSize: 10, color:'var(--mute)' }}>Translated from Spanish · 22 Apr 2026</div>
                <div style={{ height: 1, background:'rgba(10,10,10,0.1)', margin:'12px 0' }} />
                <div style={{ fontSize: 10, lineHeight: 1.9, color:'rgba(10,10,10,0.7)' }}>
                  In the city of ▂▂▂▂, on the ▂▂▂▂▂▂<br/>
                  day of ▂▂▂▂▂▂ two-thousand and ▂▂▂▂.<br/>
                  Name: ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂<br/>
                  Date of birth: ▂▂ ▂▂▂▂▂▂▂ ▂▂▂▂<br/>
                  Place of birth: ▂▂▂▂▂▂▂▂▂▂▂▂▂▂
                </div>
              </div>
              <div style={{ fontSize: 13.5, color:'var(--ink)', marginTop: 14, fontWeight: 500 }}>The translation</div>
              <div style={{ fontSize: 13, color:'var(--mute)', marginTop: 4 }}>Mirrors the source layout page-for-page. Stamps, seals, and signatures described in brackets.</div>
            </div>
            <div>
              <div style={{ height: 280, padding: 20, background:'#fff', border:'1px solid var(--line)', position:'relative' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div className="v-serif" style={{ fontSize: 13 }}>Statement of Translation Accuracy</div>
                  <div style={{ fontSize: 9, color:'var(--mute)', fontFamily:'JetBrains Mono' }}>VN-2026-0481</div>
                </div>
                <div style={{ height: 1, background:'rgba(10,10,10,0.1)', margin:'12px 0' }} />
                <div style={{ fontSize: 10, lineHeight: 1.8, color:'rgba(10,10,10,0.7)' }}>
                  I, the undersigned, certify that I am competent to translate from Spanish into English, and that the above translation is a true and accurate rendering of the attached original document, to the best of my knowledge and ability.
                </div>
                <div style={{ marginTop: 22, display:'flex', alignItems:'end', gap: 16 }}>
                  <div>
                    <div className="v-serif" style={{ fontSize: 18, fontStyle:'italic', color:'var(--brand)' }}>A. Ortega</div>
                    <div style={{ height: 1, background:'rgba(10,10,10,0.3)', width: 120, margin:'4px 0' }} />
                    <div style={{ fontSize: 9, color:'var(--mute)' }}>Alexis Ortega · ATA-certified #271904</div>
                  </div>
                </div>
                <div style={{ position:'absolute', right: 20, bottom: 20, width: 62, height: 62, border:'1.5px solid var(--brand)', borderRadius: 999, display:'flex', alignItems:'center', justifyContent:'center', color:'var(--brand)' }}>
                  <div style={{ textAlign:'center', lineHeight: 1 }}>
                    <div className="v-serif" style={{ fontSize: 18 }}>V</div>
                    <div style={{ fontSize: 7, marginTop: 2, letterSpacing:'0.05em' }}>CERTIFIED</div>
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 13.5, color:'var(--ink)', marginTop: 14, fontWeight: 500 }}>The certificate</div>
              <div style={{ fontSize: 13, color:'var(--mute)', marginTop: 4 }}>Signed by a named linguist. USCIS-compliant language. Notarized on request.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Language strip */}
      <section style={{ padding:'72px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth: 1200, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 40 }}>
            <h3 className="v-serif" style={{ fontSize: 22, margin: 0, fontWeight: 400, letterSpacing:'-0.01em' }}>A few of the 120 languages we work in</h3>
            <a href="#" style={{ fontSize: 13.5, color:'var(--mute)', textDecoration:'none' }}>See full list →</a>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap: 24 }}>
            {[
              ['Español','Lo que se escribe, permanece.'],
              ['Français','Les mots choisis avec soin.'],
              ['العربية','الكلمات تحمل الثقل.'],
              ['中文','文字，谨慎之选。'],
              ['Русский','Слова весят.'],
              ['日本語','言葉は重みを持つ。'],
              ['한국어','말에는 무게가 있다.'],
              ['Português','Palavras pesam.'],
              ['Deutsch','Worte haben Gewicht.'],
              ['हिन्दी','शब्दों का वज़न होता है।'],
              ['Türkçe','Sözler ağırdır.'],
              ['Tiếng Việt','Lời có trọng lượng.'],
            ].map(([name, sample]) => (
              <div key={name} style={{ paddingTop: 16, borderTop:'1px solid var(--line)' }}>
                <div className="v-mono" style={{ fontSize: 10, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--mute)' }}>{name}</div>
                <div className="v-serif" style={{ fontSize: 17, lineHeight: 1.3, marginTop: 8, letterSpacing:'-0.005em' }}>{sample}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases table */}
      <section style={{ padding:'96px 40px', background:'#fff', borderBottom:'1px solid var(--line)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'320px 1fr', gap: 72, maxWidth: 1200, margin:'0 auto' }}>
          <div>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>Common use cases</div>
            <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>What we translate most.</h2>
          </div>
          <div>
            <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', padding:'0 0 14px', borderBottom:'1px solid var(--line)', fontSize: 11, textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--mute)' }}>
              <div>Document</div><div>Typical turnaround</div><div>Notarization</div><div>USCIS-accepted</div>
            </div>
            {[
              ['Birth certificate','24 hours','Optional','Yes'],
              ['Marriage certificate','24 hours','Optional','Yes'],
              ['Divorce decree','24–48 hours','Optional','Yes'],
              ['Police clearance','24 hours','Optional','Yes'],
              ['Academic transcript','48 hours','Rarely','Yes'],
              ['Diploma','24 hours','Rarely','Yes'],
              ['Passport page','24 hours','Rarely','Yes'],
              ['Bank statement','24 hours','Optional','Yes'],
              ['Court judgment','48–72 hours','Recommended','Yes'],
            ].map(row => (
              <div key={row[0]} style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', padding:'16px 0', borderBottom:'1px solid var(--line)', fontSize: 14 }}>
                <div className="v-serif" style={{ fontSize: 17, letterSpacing:'-0.005em' }}>{row[0]}</div>
                <div style={{ color:'var(--mute)' }}>{row[1]}</div>
                <div style={{ color:'var(--mute)' }}>{row[2]}</div>
                <div style={{ color:'#2E9E6A' }}>{row[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'96px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'320px 1fr', gap: 72, maxWidth: 1200, margin:'0 auto' }}>
          <div>
            <div className="v-mono" style={{ fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 18 }}>Questions we're asked</div>
            <h2 className="v-serif" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400 }}>Plain answers.</h2>
          </div>
          <div>
            {[
              ['Will USCIS accept this?','Yes. Every certified translation includes a Statement of Accuracy worded to meet 8 CFR §103.2(b)(3). If USCIS rejects for translation quality, we revise free or refund in full.'],
              ['How fast is 24 hours, really?','Counted from the moment your payment clears. 97% of documents shipped in our reported window over the last 12 months. Rush is same-day for most single-page documents.'],
              ['What if my document is hard to read?','We handle faded scans, handwritten sections, and stamps. If anything is genuinely illegible, your linguist will flag it in brackets — never silently guess.'],
              ['Do you notarize?','Yes. Notarization is an optional $19.95 add-on for documents filed with state agencies, foreign consulates, or specific courts. USCIS does not require it.'],
              ['Is my document safe?','Files are encrypted at rest and in transit. Access is restricted to your assigned linguist and reviewer. Documents are purged 30 days after delivery unless you ask us to keep them.'],
            ].map(([q, a], i) => (
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

      {/* CTA */}
      <section style={{ padding:'96px 40px', background:'var(--ink)', color:'#fff' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 64, alignItems:'center', maxWidth: 1200, margin:'0 auto' }}>
          <h2 className="v-serif" style={{ fontSize: 48, lineHeight: 1.1, letterSpacing:'-0.02em', margin: 0, fontWeight: 400, color:'#fff' }}>
            Still have a question before you start?
          </h2>
          <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
            <VBtn onClick={() => window.navigate('quote')} style={{ background:'#fff', color:'var(--ink)', justifyContent:'space-between', width:'100%' }}>
              <span>Start a certified translation</span><span>→</span>
            </VBtn>
            <VBtn variant="ghost" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.25)', justifyContent:'space-between', width:'100%' }}>
              <span>Chat with a project manager</span><span>↗</span>
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
