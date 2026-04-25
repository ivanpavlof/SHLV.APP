// Root app: applies tweaks, handles /t/ deep-link detection, assembles sections

function App() {
  const [tweaks, setTweaks] = React.useState(window.TWEAKS);
  const [editMode, setEditMode] = React.useState(false);
  const [tagId, setTagId] = React.useState(null);

  // Detect /t/:id in URL — only the real SHLV token format (Base62, ~12 chars)
  React.useEffect(() => {
    const TAG_RE = /^[A-Za-z0-9]{8,20}$/;
    const pathMatch = window.location.pathname.match(/\/t\/([A-Za-z0-9]+)/);
    if (pathMatch && TAG_RE.test(pathMatch[1])) { setTagId(pathMatch[1]); return; }

    const hashMatch = window.location.hash.match(/[#/]t\/([A-Za-z0-9]+)/);
    if (hashMatch && TAG_RE.test(hashMatch[1])) { setTagId(hashMatch[1]); return; }
  }, []);

  // Apply theme + accent via data attrs
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme === 'dark' ? 'dark' : 'paper');
    document.documentElement.setAttribute('data-accent', tweaks.accent);
  }, [tweaks]);

  // Tweaks protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setEditMode(true);
      if (d.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const updateTweaks = (patch) => {
    const next = {...tweaks, ...patch};
    setTweaks(next);
    try {
      window.parent.postMessage({type:'__edit_mode_set_keys', edits: patch}, '*');
    } catch(_) {}
  };

  const openInApp = () => {
    // Try Android intent
    const url = `intent://shlv.app/t/${tagId}#Intent;scheme=https;package=app.shlv;end`;
    window.location.href = url;
    setTimeout(() => {
      window.location.href = '#download';
    }, 1200);
  };

  return (
    <>
      <Nav/>
      <DeepLinkBanner tagId={tagId} onOpen={openInApp}/>
      <Hero/>
      <Faq/>
      <Footer/>
      <TweaksPanel open={editMode} tweaks={tweaks} set={updateTweaks}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
