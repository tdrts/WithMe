import React, { ReactNode } from 'react';

/**
 * Card component
 * Props:
 * - header?: ReactNode
 * - content?: ReactNode
 * - footer?: ReactNode
 * - className?: string
 *
 * Uses design tokens for background, border, shadow, radius, and spacing.
 */
export interface CardProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Card({ header, content, footer, className = '' }: CardProps) {
  return (
    <div className={`bg-surface border border-border-default rounded-lg shadow-sm p-6 ${className}`}>
      {header && <div className="mb-4">{header}</div>}
      {content && <div className="mb-4">{content}</div>}
      {footer && <div>{footer}</div>}
    </div>
  );
}
