import { useState, useRef, useEffect } from 'react';
import Sidebar, { type View } from './components/Sidebar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import AuditPanel from './components/AuditPanel';
import ComparePanel from './components/ComparePanel';
import AskPanel from './components/AskPanel';
import { playSherlockCue } from './lib/sherlockCue';
import './App.css';
import './sherlock.css';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [sherlock, setSherlock] = useState(false);
  const clicks = useRef(0);
  const timer = useRef<number | undefined>(undefined);

  // reflect Sherlock mode on the root element (drives the whole-page mood)
  useEffect(() => {
    document.documentElement.classList.toggle('sherlock', sherlock);
  }, [sherlock]);

  // three quick clicks on the logo toggles Sherlock mode
  function onLogoClick() {
    clicks.current += 1;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => { clicks.current = 0; }, 800);
    if (clicks.current >= 3) {
      clicks.current = 0;
      setSherlock((s) => {
        const next = !s;
        if (next) playSherlockCue();
        return next;
      });
    }
  }

  return (
    <div className="layout">
      <Sidebar view={view} setView={setView} sherlock={sherlock} onLogoClick={onLogoClick} />
      <main className="stage">
        {view === 'home' && <Landing sherlock={sherlock} go={setView} />}
        {view === 'dashboard' && <Dashboard />}
        {view === 'audit' && <AuditPanel />}
        {view === 'compare' && <ComparePanel />}
        {view === 'ask' && <AskPanel />}
      </main>
    </div>
  );
}
