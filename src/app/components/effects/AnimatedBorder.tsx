import { motion } from 'motion/react';
import { useState } from 'react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}

export function AnimatedBorder({
  children,
  className = '',
  borderColor = '#4a6741'
}: AnimatedBorderProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(90deg, ${borderColor}, transparent)`,
          opacity: 0,
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          backgroundPosition: isHovered ? '200% 0' : '0 0',
        }}
        transition={{
          opacity: { duration: 0.3 },
          backgroundPosition: { duration: 2, ease: 'linear', repeat: Infinity },
        }}
      />
      {children}
    </motion.div>
  );
}
