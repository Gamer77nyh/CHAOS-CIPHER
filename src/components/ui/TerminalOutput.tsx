import React from 'react';
import { cn } from '../../lib/utils';

interface TerminalOutputProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'info' | 'success' | 'warning' | 'error' | 'command';
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ className, type = 'info', children, ...props }) => {
  const colors = {
    info: 'text-primary',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-500',
    command: 'text-white opacity-80',
  };

  return (
    <div className={cn('font-mono text-sm my-1 break-words', colors[type], className)} {...props}>
      <span className="mr-2">{type === 'command' ? '>' : '#'}</span>
      {children}
    </div>
  );
};

export default TerminalOutput;
