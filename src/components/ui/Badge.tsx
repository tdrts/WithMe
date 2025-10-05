import React, { ReactNode } from 'react';

/**
 * Badge component
 * Props:
 * - children: ReactNode
 * - variant: 'neutral' | 'inprogress' | 'complete' | 'default' | 'outline'
 * - className?: string
 *
 * Uses design tokens for color, border, radius.
 */
export interface BadgeProps {
  children: ReactNode;
  variant?: 'neutral' | 'inprogress' | 'complete' | 'default' | 'outline';
  className?: string;
}

const variantClasses = {
  neutral: 'bg-status-neutral text-text-muted',
  inprogress: 'bg-status-inprogress text-blue-800',
  complete: 'bg-status-complete text-green-800',
  default: 'bg-primary text-white',
  outline: 'border border-border-default text-text-default',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${
        variantClasses[variant]
      } ${className}`}
    >
      {children}
    </span>
  );
}
