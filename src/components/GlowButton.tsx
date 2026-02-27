import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
}

export function GlowButton({
  children,
  onClick,
  href,
  className = '',
  size = 'md',
  variant = 'primary',
}: GlowButtonProps) {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'text-white',
    secondary: 'bg-white/10 text-white border border-white/20',
    outline: 'bg-transparent text-white border-2 border-instagram-pink',
  };

  // Direct checkout link
  const resolvedHref = href?.includes('payhip.com/b/')
    ? 'https://payhip.com/buy?s=1&cart_links%5B%5D=ZSqkb&qty%5BZSqkb%5D=1'
    : href;

  const Component = resolvedHref ? motion.a : motion.button;

  return (
    <Component
      href={resolvedHref}
      onClick={onClick}
      className={`
        relative overflow-hidden font-bold text-white
        ${sizeClasses[size]}
        ${variant !== 'primary' ? variantClasses[variant] : ''}
        ${className}
      `}
      whileHover={variant === 'primary' ? {
        scale: 1.05,
        backgroundColor: '#8B6914',
        boxShadow: '0 6px 24px rgba(184, 134, 11, 0.5)',
        transition: { duration: 0.25 },
      } : {}}
      whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={variant === 'primary' ? {
        backgroundColor: '#B8860B',
        borderRadius: '10px',
        boxShadow: '0 3px 14px rgba(184, 134, 11, 0.3)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      } : {}}
    >
      {/* Shine sweep on hover */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            borderRadius: '10px',
          }}
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.45 }}
        />
      )}
      {/* Ripple on tap */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '10px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileTap={{ opacity: [0, 0.3, 0], scale: [0.8, 1.2], transition: { duration: 0.3 } }}
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
}
