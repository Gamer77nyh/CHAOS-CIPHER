import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glitch?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  glitch = false,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_10px_rgba(0,255,0,0.5)]',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'hover:bg-primary/10 text-primary',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-8 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-sm font-mono font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider',
        variants[variant],
        sizes[size],
        glitch && 'glitch-text',
        className
      )}
      data-text={typeof children === 'string' ? children : undefined}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
