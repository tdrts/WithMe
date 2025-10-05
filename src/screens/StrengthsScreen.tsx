import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export interface StrengthsScreenProps {
  onContinue?: (strengths: string[]) => void;
}

export default function StrengthsScreen({ onContinue }: StrengthsScreenProps) {
  const [fields, setFields] = useState<string[]>(['', '', '']);

  const handleChange = (idx: number, value: string) => {
    setFields(fields.map((f, i) => (i === idx ? value : f)));
  };

  const handleAdd = () => {
    if (fields.length < 5) setFields([...fields, '']);
  };

  const handleRemove = (idx: number) => {
    if (fields.length > 3) setFields(fields.filter((_, i) => i !== idx));
  };

  const canContinue = fields.filter(f => f.trim()).length >= 3;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted">
      <div className="bg-white border border-input-border rounded-[16px] shadow-sm px-8 py-10 w-full max-w-[560px] flex flex-col" style={{paddingTop: 40, paddingBottom: 40, paddingLeft: 32, paddingRight: 32}}>
        <div className="flex items-center justify-between mb-2">
          <div className="text-[20px] font-bold text-text-default">Strengths</div>
        </div>
        <div className="text-[16px] text-text-default font-medium mt-8">What are your top strengths?</div>
        <div className="text-[14px] text-text-muted mt-2">Add at least 3, up to 5 strengths. E.g. Strategy, Product Thinking, Storytelling</div>
        <div className="flex flex-col gap-4 mt-6">
          {fields.map((val, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <Input
                type="text"
                value={val}
                onChange={e => handleChange(idx, e.target.value)}
                placeholder={`Strength ${idx + 1}`}
                className="flex-1"
                maxLength={32}
              />
              {fields.length > 3 && (
                <Button type="button" intent="ghost" size="sm" className="px-2" onClick={() => handleRemove(idx)} aria-label="Remove strength">
                  ×
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center mt-6">
          <Button type="button" intent="secondary" size="sm" className="text-sm underline-offset-2 hover:underline" onClick={handleAdd} disabled={fields.length >= 5}>
            + Add strength
          </Button>
          <Button type="button" intent="primary" size="md" className="min-w-[120px] h-12 shadow-none" onClick={() => onContinue && onContinue(fields.filter(f => f.trim()))} disabled={!canContinue}>
            Continue
          </Button>
        </div>
        <div className="text-xs text-text-muted mt-2 text-right">{fields.length} of 5 strengths</div>
      </div>
    </div>
  );
}