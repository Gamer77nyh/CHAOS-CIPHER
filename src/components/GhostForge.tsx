import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, RefreshCw } from 'lucide-react';
import Button from './ui/Button';

const GhostForge = () => {
  const [codeSnippet, setCodeSnippet] = useState('');
  
  const snippets = [
    'payload.inject(target_process);',
    'obfuscate(memory_buffer);',
    'polymorph_engine.mutate();',
    'bypass_av_signatures();',
    'establish_c2_channel();'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeSnippet(snippets[Math.floor(Math.random() * snippets.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Cpu size={40} className="text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-header font-bold">
              GHOST_<span className="text-primary">FORGE</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            On-demand polymorphic malware generator. Create unique, hard-to-detect strains 
            for every mission, ensuring 100% evasion rates against static analysis.
          </p>
        </motion.div>

        {/* Code Morphing Visualization */}
        <div className="relative h-[300px] w-full max-w-2xl mx-auto bg-black border border-primary/30 rounded-lg p-6 flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-2 right-2 flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          
          <div className="font-mono text-xl text-primary mb-8 min-h-[3rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={codeSnippet}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.3 }}
              >
                {codeSnippet}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="text-primary/50" size={48} />
            </motion.div>
          </div>
          
          <div className="mt-8">
            <Button variant="outline" glitch>
              <Code2 className="mr-2 h-4 w-4" /> Generate Payload
            </Button>
          </div>

          {/* Background binary rain effect (subtle) */}
          <div className="absolute inset-0 pointer-events-none opacity-10 flex justify-between px-4">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="text-[10px] w-4 text-center text-primary leading-3 overflow-hidden h-full">
                 {Array(30).fill(0).map(() => Math.round(Math.random())).join('\n')}
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GhostForge;
