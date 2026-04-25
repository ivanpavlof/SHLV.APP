// Tweaks panel — theme + accent

function TweaksPanel({open, tweaks, set}) {
  if (!open) return null;
  return (
    <div className="tweaks-panel">
      <h3>Tweaks</h3>

      <div className="tweak-row">
        <label>Theme</label>
        <div className="tweak-options">
          {['paper','dark'].map(v=>(
            <button key={v} className="tweak-opt" aria-pressed={tweaks.theme===v} onClick={()=>set({theme:v})}>{v}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Accent</label>
        <div className="tweak-options">
          {[
            {v:'cobalt', c:'#2B6BEF'},
            {v:'teal',   c:'#0E9488'},
            {v:'indigo', c:'#4F46E5'},
            {v:'orange', c:'#D2571B'},
          ].map(s=>(
            <button key={s.v} className="tweak-swatch" aria-pressed={tweaks.accent===s.v}
              onClick={()=>set({accent:s.v})}
              style={{background:s.c}} title={s.v}/>
          ))}
        </div>
      </div>

      <div style={{marginTop:8, fontFamily:'var(--font-mono)', fontSize:10, color:'var(--ink-4)', letterSpacing:'.04em'}}>
        Toggle with the Tweaks switch in the toolbar.
      </div>
    </div>
  );
}

window.TweaksPanel = TweaksPanel;
