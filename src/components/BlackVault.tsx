import React from 'react';
import { motion } from 'framer-motion';
import { Database, Lock, ShieldAlert } from 'lucide-react';
import Card from './ui/Card';

const BlackVault = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-header font-bold mb-4">
              <span className="text-primary">BLACK</span>_VAULT
            </h2>
            <div className="h-1 w-20 bg-primary mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              An autonomous data exfiltration and leak engine designed for silence. 
              Black Vault bypasses traditional DLP systems to extract sensitive information 
              with zero traceability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {['Silent Extraction', 'Encrypted Channels', 'Trace Deletion'].map((feature, idx) => (
              <Card key={idx} className="bg-card/50 border-primary/10">
                <div className="flex items-center gap-4">
                  <ShieldAlert className="text-primary" />
                  <span className="font-mono text-lg">{feature}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Visual representation of data flow */}
        <div className="relative h-[400px] bg-black/40 rounded-lg border border-primary/20 p-8 flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-xs text-primary/30 font-mono whitespace-nowrap"
                initial={{ y: -100, x: Math.random() * 400 }}
                animate={{ y: 500 }}
                transition={{ 
                  duration: Math.random() * 5 + 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 2
                }}
              >
                {Math.random().toString(36).substring(2, 15)}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="z-10 bg-black border border-primary p-6 rounded-full shadow-[0_0_50px_rgba(0,255,0,0.3)]"
            animate={{ boxShadow: ['0 0 20px rgba(0,255,0,0.2)', '0 0 60px rgba(0,255,0,0.6)', '0 0 20px rgba(0,255,0,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Database size={64} className="text-primary" />
          </motion.div>
          
          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-primary/70 font-mono">
            <Lock size={12} />
            STATUS: EXFILTRATING...
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackVault;
