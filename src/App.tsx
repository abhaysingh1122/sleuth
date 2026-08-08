import { useState } from 'react';
import Sidebar, { type View } from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AuditPanel from './components/AuditPanel';
import ComparePanel from './components/ComparePanel';
import AskPanel from './components/AskPanel';
import './App.css';

export default function App() {
  const [view, setView] = useState<View>('dashboard');

  return (
    <div className="layout">
      <Sidebar view={view} setView={setView} />
      <main className="stage">
        {view === 'dashboard' && <Dashboard />}
        {view === 'audit' && <AuditPanel />}
        {view === 'compare' && <ComparePanel />}
        {view === 'ask' && <AskPanel />}
      </main>
    </div>
  );
}
