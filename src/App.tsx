import React from 'react';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import BlackVault from './components/BlackVault';
import ShadowStep from './components/ShadowStep';
import GhostForge from './components/GhostForge';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-black">
      <Hero />
      
      <Terminal />
      
      <div id="showcase" className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <BlackVault />
        <div className="container mx-auto px-4"><div className="h-px w-full bg-primary/20" /></div>
        <ShadowStep />
        <div className="container mx-auto px-4"><div className="h-px w-full bg-primary/20" /></div>
        <GhostForge />
      </div>

      <footer className="py-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
        <p>CHAOS_CIPHER &copy; {new Date().getFullYear()} | <span className="text-primary animate-pulse">SYSTEM_SECURE</span></p>
        <p className="mt-2 text-xs opacity-50">Authorized Personnel Only. All activities are monitored.</p>
      </footer>
    </div>
  );
}

export default App;
