import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "CHAOS_CIPHER";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
      {/* Background Matrix-like effect (simplified) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] bg-cover opacity-20"></div>
      </div>

      <div className="z-10 text-center space-y-8 max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-6xl md:text-8xl font-black font-header tracking-tighter mb-4 glitch-text"
            data-text={text}
          >
            {text}<span className="animate-pulse">_</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono mt-4">
            Elite Cybersecurity AI <span className="text-primary mx-2">|</span> Autonomous Operations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center mt-12"
        >
          <Button 
            size="lg" 
            glitch 
            onClick={() => document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Initialize Terminal
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Modules
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 text-xs text-muted-foreground font-mono hidden md:block">
        <div>SYSTEM STATUS: ONLINE</div>
        <div>ENCRYPTION: AES-256</div>
        <div>LOCATION: CLASSIFIED</div>
      </div>
    </section>
  );
};

export default Hero;
