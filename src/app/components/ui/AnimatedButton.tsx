import { motion } from 'motion/react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function AnimatedButton({
  variant = 'primary',
  children,
  className = '',
  ...props
}: AnimatedButtonProps) {
  const baseClasses = 'px-8 py-4 rounded-full font-semibold transition-all';

  const variantClasses = {
    primary: 'bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white',
    secondary: 'bg-[#d4a533] hover:bg-[#b8902c] text-white',
    outline: 'bg-white hover:bg-[#f5f0e8] text-[#2a2a2a] border-2 border-[rgba(139,125,107,0.2)]',
  };

  return (
    <motion.button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
