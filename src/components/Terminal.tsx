import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minimize, Maximize } from 'lucide-react';
import TerminalOutput from './ui/TerminalOutput';
import { cn } from '../lib/utils';

interface HistoryItem {
  type: 'command' | 'response';
  content: React.ReactNode;
  status?: 'info' | 'success' | 'warning' | 'error';
}

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'response', content: 'ChaosCipher OS v1.0.0 Initialized...', status: 'success' },
    { type: 'response', content: 'Type "help" to see available commands.', status: 'info' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const focusInput = () => inputRef.current?.focus();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory: HistoryItem[] = [...history, { type: 'command', content: cmd }];

    switch (trimmedCmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          content: (
            <div className="space-y-1">
              <p>Available commands:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                <div><span className="text-primary">help</span> - Show this help message</div>
                <div><span className="text-primary">status</span> - Check system status</div>
                <div><span className="text-primary">whoami</span> - Display current user info</div>
                <div><span className="text-primary">clear</span> - Clear terminal history</div>
                <div><span className="text-primary">ls</span> - List available modules</div>
                <div><span className="text-primary">blackvault</span> - Info on Black Vault module</div>
                <div><span className="text-primary">shadowstep</span> - Info on Shadow Step module</div>
                <div><span className="text-primary">ghostforge</span> - Info on Ghost Forge module</div>
              </div>
            </div>
          ),
          status: 'info'
        });
        break;
      case 'status':
        newHistory.push({ type: 'response', content: 'SYSTEM STATUS: OPERATIONAL | SECURITY LEVEL: MAX', status: 'success' });
        break;
      case 'whoami':
        newHistory.push({ type: 'response', content: 'User: Anonymous | Role: Guest | Access: Restricted', status: 'warning' });
        break;
      case 'ls':
        newHistory.push({ 
          type: 'response', 
          content: (
            <div className="flex flex-col">
              <span>black_vault.exe</span>
              <span>shadow_step.exe</span>
              <span>ghost_forge.exe</span>
              <span>readme.txt</span>
            </div>
          ), 
          status: 'info' 
        });
        break;
      case 'blackvault':
        newHistory.push({ 
          type: 'response', 
          content: 'Black Vault: Autonomous data exfiltration and leak engine. Ensures maximum yield with minimal traceability.', 
          status: 'success' 
        });
        break;
      case 'shadowstep':
        newHistory.push({ 
          type: 'response', 
          content: 'Shadow Step: Stealth module for privilege escalation and lateral movement. Navigate networks undetected.', 
          status: 'success' 
        });
        break;
      case 'ghostforge':
        newHistory.push({ 
          type: 'response', 
          content: 'Ghost Forge: On-demand polymorphic malware generator. Creates unique strains for each mission.', 
          status: 'success' 
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        break;
      default:
        newHistory.push({ type: 'response', content: `Command not found: ${cmd}. Type "help" for a list of commands.`, status: 'error' });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <section id="terminal" className="py-20 px-4 flex justify-center bg-black/50">
      <div className="w-full max-w-4xl border border-primary/30 rounded-lg overflow-hidden bg-black shadow-[0_0_30px_rgba(0,255,0,0.1)]">
        {/* Terminal Header */}
        <div className="bg-primary/10 border-b border-primary/30 p-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary text-sm font-mono">
            <TerminalIcon size={16} />
            <span>chaoscipher@root:~</span>
          </div>
          <div className="flex items-center gap-2 text-primary/50">
            <Minimize size={14} className="cursor-pointer hover:text-primary" />
            <Maximize size={14} className="cursor-pointer hover:text-primary" />
            <X size={14} className="cursor-pointer hover:text-destructive" />
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="h-[400px] overflow-y-auto p-4 font-mono text-sm space-y-2 cursor-text"
          onClick={focusInput}
        >
          {history.map((item, index) => (
            <TerminalOutput 
              key={index} 
              type={item.type === 'command' ? 'command' : item.status}
            >
              {item.content}
            </TerminalOutput>
          ))}
          
          <div className="flex items-center text-primary">
            <span className="mr-2">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-foreground caret-primary"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
};

export default Terminal;
