import React, { ReactNode, useState } from 'react';

/**
 * Tooltip component
 * Props:
 * - title: string | ReactNode
 * - content: string | ReactNode
 * - children: ReactNode (the trigger)
 *
 * Shows content on hover/focus. Uses design tokens for background, border, shadow, radius.
 */
export interface TooltipProps {
  title?: string | ReactNode;
  content: string | ReactNode;
  children: ReactNode;
}

export function Tooltip({ title, content, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block" tabIndex={0} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {open && (
        <div className="absolute z-10 mt-2 w-max max-w-xs bg-surface border border-border-default shadow-md rounded-md px-3 py-2 text-sm text-text-default">
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div>{content}</div>
        </div>
      )}
    </span>
  );
}
