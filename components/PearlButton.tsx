'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

interface PearlButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isExternal?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'pearl-dark' | 'pearl-gold';
}

export default function PearlButton({
  href,
  children,
  icon = <MessageCircle className="w-5 h-5 fill-current text-[#C9A24B]" />,
  isExternal = true,
  size = 'md',
  className = '',
  variant = 'pearl-dark',
}: PearlButtonProps) {
  const sizeClasses = {
    sm: 'text-xs py-2.5 px-6',
    md: 'text-sm py-3.5 px-8',
    lg: 'text-base sm:text-lg py-4 sm:py-5 px-10 sm:px-14',
  }[size];

  const content = (
    <span className={`pearl-btn-wrap flex items-center justify-center gap-3 ${sizeClasses}`}>
      <span className="flex items-center gap-2.5 relative z-10 transition-transform duration-200">
        {icon}
        <span className="tracking-[0.16em] uppercase font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          {children}
        </span>
      </span>
    </span>
  );

  const baseClasses = `pearl-button group inline-flex items-center justify-center select-none ${
    variant === 'pearl-gold' ? 'pearl-button-gold' : ''
  } ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {content}
    </Link>
  );
}
