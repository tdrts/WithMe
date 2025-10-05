import React, { TextareaHTMLAttributes, ReactNode } from 'react';

/**
 * Textarea component
 * Props:
 * - label?: string | ReactNode
 * - error?: string | ReactNode
 * - help?: string | ReactNode
 * - disabled?: boolean
 * - rows?: number
 * - value, onChange, ...rest (standard textarea props)
 *
 * Variants: default, error, with-help
 * States: default, focus, disabled, error
 */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string | ReactNode;
  error?: string | ReactNode;
  help?: string | ReactNode;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, help, disabled = false, rows = 3, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1 text-sm font-medium text-text-default">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          disabled={disabled}
          rows={rows}
          className={`w-full bg-muted border border-border-default text-text-default rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-y ${
            error ? 'border-red-500' : ''
          } ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
          {...props}
        />
        {help && !error && (
          <div className="mt-1 text-xs text-text-muted">{help}</div>
        )}
        {error && (
          <div className="mt-1 text-xs text-red-500">{error}</div>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
