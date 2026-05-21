import { motion } from 'motion/react';
import { useState } from 'react';

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function AnimatedInput({ label, className = '', ...props }: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      {label && (
        <motion.label
          className="block text-sm font-semibold text-[#2a2a2a] mb-2"
          animate={{ color: isFocused ? '#4a6741' : '#2a2a2a' }}
        >
          {label}
        </motion.label>
      )}
      <motion.input
        {...props}
        className={`w-full px-4 py-3 rounded-xl border transition-all ${className}`}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        whileFocus={{ scale: 1.01 }}
        style={{
          borderColor: isFocused ? '#4a6741' : 'rgba(139,125,107,0.2)',
        }}
      />
    </div>
  );
}
