import React from 'react';

/**
 * Progress component
 * Props:
 * - value: number (0-100)
 * - className?: string
 *
 * Uses design tokens for color, background, radius.
 */
export interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className = '' }: ProgressProps) {
  return (
    <div className={`w-full bg-muted rounded-sm h-2 ${className}`} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} role="progressbar">
      <div
        className="bg-primary h-2 rounded-sm transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
