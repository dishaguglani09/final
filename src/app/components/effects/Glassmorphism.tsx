import { ReactNode } from 'react';

interface GlassmorphismProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  tint?: 'light' | 'dark' | 'green';
}

export function Glassmorphism({
  children,
  className = '',
  intensity = 'medium',
  tint = 'light'
}: GlassmorphismProps) {
  const intensityClasses = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    strong: 'backdrop-blur-xl',
  };

  const tintClasses = {
    light: 'bg-white/80 border-white/20',
    dark: 'bg-black/20 border-white/10',
    green: 'bg-[#4a6741]/10 border-[#4a6741]/20',
  };

  return (
    <div
      className={`${intensityClasses[intensity]} ${tintClasses[tint]} border shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${className}`}
      style={{
        WebkitBackdropFilter: `blur(${intensity === 'light' ? '8px' : intensity === 'medium' ? '12px' : '24px'})`,
      }}
    >
      {children}
    </div>
  );
}
