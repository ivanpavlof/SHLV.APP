// Landing page sections

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="SHLV — back to top">
          <div className="brand-mark"/>
          SHLV
        </a>
        <a href="#download" className="nav-cta">Get the app</a>
      </div>
    </nav>
  );
}

// Deep-link banner that appears when URL has /?t=... or /t/XXXX
function DeepLinkBanner({tagId, onOpen}) {
  if (!tagId) return null;
  return (
    <div className="deeplink">
      <div className="wrap deeplink-inner">
        <div>
          <div className="label">NFC tag scanned</div>
          <div className="tagid">shlv.app/t/{tagId}</div>
        </div>
        <div style={{display:'flex', gap:10, alignItems:'center', flexWrap:'wrap'}}>
          <span style={{fontSize:13, opacity:.8}}>Install SHLV to open this place.</span>
          <button onClick={onOpen}>Open in app →</button>
        </div>
      </div>
    </div>
  );
}

function Hero({onDeeplink, tagId}) {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1 className="headline">
            The end of<br/>
            <em>"where did<br/>I put that?"</em>
          </h1>
          <p className="hero-tagline">The simplest home inventory app on the market — quick to set up, easy to use.</p>
          <p className="hero-sub">
            A personal index for everything you own but never see. Whatever you've tucked into
            a cabinet, closet, drawer, or garage shelf — SHLV knows which one, and which shelf.
          </p>

          <div className="cta-row" id="download">
            <a className="btn-store" href="#" aria-label="Get SHLV on Google Play">
              <Icon.PlayStore/>
              <div className="txt">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </div>
            </a>
            <span className="btn-store disabled" aria-disabled="true">
              <Icon.Apple color="var(--ink-4)"/>
              <div className="txt">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
              <span className="badge">Soon</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Faq() {
  const qs = [
    {q:"Does it work without internet?", a:"Yes — you can build your catalog and search what you own completely offline. Pro features that need the cloud, like AI item recognition and semantic search, require internet."},
    {q:"What phones work?", a:"Any Android 8.0+. NFC is optional \u2014 you only need it if you want to tap tags. iOS is in development."},
    {q:"Do I need NFC tags to use the app?", a:"No. The app works fully without tags. Tags just make it faster \u2014 tap a sticker and the right place opens instantly instead of picking it from a list."},
    {q:"Do I have to name every item?", a:"No. Snap a photo and skip the name \u2014 SHLV keeps a review queue so you can fill things in later. On Pro, AI names and categorizes items for you, and you review the suggestions when you have a minute."},
    {q:"Where do I put the tags?", a:"On the outside or inside of the cabinet, drawer, or bin \u2014 anywhere your phone can reach."},
    {q:"Can other people scan my tags?", a:"The tag URL only opens your app on your phone. Someone else scanning it sees nothing useful — just a short URL."},
    {q:"What if I lose a tag?", a:"Re-link any new blank tag to the same place in Settings. The photo, pins, and items are preserved."},
    {q:"Is my photo data sent anywhere?", a:"Photos stay on your phone by default. They’re only sent to the cloud if you use a Pro feature that needs it \u2014 like AI recognition of items in a photo."},
  ];
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Common questions.</h2>
        </div>
        <div style={{borderTop:'1px solid var(--rule)'}}>
          {qs.map((item,i)=>(
            <details key={i} style={{borderBottom:'1px solid var(--rule)', padding:'20px 0'}}>
              <summary style={{cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', fontFamily:'var(--font-display)', fontSize:22, fontWeight:500, letterSpacing:'-.01em', listStyle:'none'}}>
                <span>{item.q}</span>
                <span className="mono" style={{fontSize:11}}>+ OPEN</span>
              </summary>
              <p style={{color:'var(--ink-3)', marginTop:12, maxWidth:'60ch', fontSize:15}}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-simple">
          <div className="footer-brand">
            <div className="brand" style={{marginBottom:10}}>
              <div className="brand-mark"/>
              SHLV
            </div>
            <p style={{color:'var(--ink-3)', fontSize:14, maxWidth:'42ch', margin:0}}>
              A personal index for everything you own but never see. Stop hunting. Start finding.
            </p>
          </div>
          <nav className="footer-links">
            <a href="#faq">FAQ</a>
            <a href="mailto:ivan.lyubomirov.pavlov@gmail.com">Contact</a>
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SHLV</span>
          <span>ivan.lyubomirov.pavlov@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.Hero = Hero;
window.Faq = Faq;
window.Footer = Footer;
window.DeepLinkBanner = DeepLinkBanner;
