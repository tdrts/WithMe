import React, { InputHTMLAttributes, ReactNode } from 'react';

/**
 * Input component
 * Props:
 * - label?: string | ReactNode
 * - error?: string | ReactNode
 * - help?: string | ReactNode
 * - disabled?: boolean
 * - value, onChange, ...rest (standard input props)
 *
 * Variants: default, error, with-help
 * States: default, focus, disabled, error
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  error?: string | ReactNode;
  help?: string | ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, help, disabled = false, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1 text-sm font-medium text-text-default">
            {label}
          </label>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={`w-full bg-input-bg border border-input-border text-text-default rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
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
Input.displayName = 'Input';
