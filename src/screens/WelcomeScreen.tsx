import React from 'react';
import { Button } from '../components/ui/Button';

export interface WelcomeScreenProps {
  onContinue?: () => void;
  onPreviewExample?: () => void;
  onSkip?: () => void;
}

export default function WelcomeScreen({ onContinue, onPreviewExample, onSkip }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted">
      <div className="text-3xl font-medium text-text-default text-center mb-8">Work With Me</div>
      <div className="bg-white border border-input-border rounded-[16px] shadow-sm px-8 py-10 w-full max-w-[400px] flex flex-col gap-8">
        <div className="text-lg font-bold text-text-default mb-2 text-center">Welcome! Let’s get started</div>
        <div className="text-base text-text-muted text-center mb-4">
          This quick guide will help you reflect on how you work best, so you can share it with your team and tools.
        </div>
        <div className="flex flex-col gap-4">
          <Button type="button" intent="primary" size="md" className="w-full h-12 shadow-none" onClick={onContinue}>
            Continue
          </Button>
          <Button type="button" intent="secondary" size="sm" className="w-full text-sm underline-offset-2 hover:underline" onClick={onPreviewExample}>
            Preview Example
          </Button>
          <Button type="button" intent="ghost" size="sm" className="w-full text-sm underline-offset-2 hover:underline" onClick={onSkip}>
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  );
}
