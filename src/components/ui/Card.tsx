import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ className, hoverEffect = true, children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { scale: 1.01, boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)' } : undefined}
      className={cn(
        'rounded-md border border-primary/20 bg-card text-card-foreground p-6 shadow-sm backdrop-blur-sm',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
