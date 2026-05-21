import { motion } from 'motion/react';
import { useState } from 'react';

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export function GlowEffect({
  children,
  className = '',
  glowColor = '#4a6741',
  intensity = 20
}: GlowEffectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        boxShadow: isHovered
          ? `0 0 ${intensity}px ${intensity / 2}px ${glowColor}40, 0 0 ${intensity * 2}px ${intensity}px ${glowColor}20`
          : `0 0 0px 0px ${glowColor}00`,
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
