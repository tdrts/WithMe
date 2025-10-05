import React from "react";

interface WelcomeScreenProps {
  onContinue: () => void;
  onPreviewExample: () => void;
  onSkip: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue, onPreviewExample, onSkip }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl font-semibold text-slate-900">Understand yourself. Help others work better with you.</h1>
        <p className="mt-6 text-lg text-slate-600">
          AI made teamwork faster, but it didn't make understanding people easier. This space helps you reflect on how you work best — so your teammates and tools can adapt to you, not the other way around.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <button className="w-full max-w-sm rounded-full bg-[#0A66C2] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#004182]" onClick={onContinue}>
            Continue with email
          </button>
          <button className="w-full max-w-sm rounded-full border border-blue-200 px-6 py-3 text-base font-semibold text-[#0A66C2] transition hover:bg-blue-50" onClick={onPreviewExample}>
            Preview example profile
          </button>
          <button className="text-sm text-slate-500 underline" onClick={onSkip}>
            Skip for now
          </button>
        </div>
      </header>
    </div>
  );
};
