
import React, { ReactNode, ButtonHTMLAttributes } from 'react';


export type ButtonIntent = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: ButtonIntent;
  size?: ButtonSize;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
}

const base =
  'inline-flex items-center justify-center font-medium rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] text-base leading-5';
const intents: Record<ButtonIntent, string> = {
  primary:
    'bg-primary text-white border-none hover:bg-primary-hover disabled:bg-[#B3D3F6] disabled:text-white',
  secondary:
    'bg-transparent text-light-blue border-none hover:underline hover:bg-transparent disabled:text-[#B3D3F6]',
  ghost:
    'bg-transparent text-text-muted border-none hover:bg-muted',
  outline:
    'bg-surface border border-input-border text-text-default hover:bg-muted',
};
const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-9 px-4 text-base',
};
const disabledStyle = 'opacity-50 pointer-events-none';

export function Button({
  intent = 'primary',
  size = 'md',
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        base,
        intents[intent],
        sizes[size],
        disabled ? disabledStyle : '',
      ].join(' ')}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
