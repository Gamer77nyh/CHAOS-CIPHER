import React from 'react';
import { motion } from 'framer-motion';
import { Network, EyeOff, ShieldCheck } from 'lucide-react';
import Card from './ui/Card';

const ShadowStep = () => {
  return (
    <section className="py-20 px-4 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
        {/* Network Animation */}
        <div className="order-2 md:order-1 relative h-[400px] bg-black/40 rounded-lg border border-primary/20 p-8">
          <div className="absolute inset-0 flex items-center justify-center">
             {/* Nodes */}
             {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#00ff00]"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
             ))}
             {/* Connection Lines (Simulated) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
               <line x1="30%" y1="30%" x2="70%" y2="70%" stroke="#00ff00" strokeWidth="1" />
               <line x1="70%" y1="30%" x2="30%" y2="70%" stroke="#00ff00" strokeWidth="1" />
               <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#00ff00" strokeWidth="1" />
             </svg>
             
             {/* Moving Agent */}
             <motion.div
               className="absolute w-6 h-6 border-2 border-primary bg-black z-10 rounded-sm flex items-center justify-center"
               animate={{
                 top: ['30%', '70%', '50%', '30%'],
                 left: ['30%', '70%', '20%', '30%'],
               }}
               transition={{
                 duration: 10,
                 repeat: Infinity,
                 ease: "linear"
               }}
             >
               <EyeOff size={14} className="text-primary" />
             </motion.div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-header font-bold mb-4 text-right">
              SHADOW_<span className="text-primary">STEP</span>
            </h2>
            <div className="h-1 w-20 bg-primary mb-6 ml-auto" />
            <p className="text-muted-foreground text-lg leading-relaxed text-right">
              The ultimate stealth module for privilege escalation and lateral movement. 
              Navigate through the most secure networks undetected, leaving no digital footprint behind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
             <Card className="bg-card/50 border-primary/10 text-right">
                <div className="flex items-center justify-end gap-4">
                  <span className="font-mono text-lg">Privilege Escalation</span>
                  <Network className="text-primary" />
                </div>
              </Card>
              <Card className="bg-card/50 border-primary/10 text-right">
                <div className="flex items-center justify-end gap-4">
                  <span className="font-mono text-lg">Lateral Movement</span>
                  <ShieldCheck className="text-primary" />
                </div>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadowStep;
