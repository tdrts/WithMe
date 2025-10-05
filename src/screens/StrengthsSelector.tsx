import React, { useState } from 'react';
import { Button } from '../components/ui/Button';

const SUGGESTED = [
  'Strategy', 'Product Thinking', 'Storytelling', 'Collaboration', 'Execution', 'Empathy', 'Creativity', 'Focus', 'Communication', 'Problem Solving', 'Leadership', 'Adaptability', 'Other'
];

export interface StrengthsSelectorProps {
  onContinue?: (selected: string[]) => void;
}

export default function StrengthsSelector({ onContinue }: StrengthsSelectorProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [custom, setCustom] = useState('');
  const [customActive, setCustomActive] = useState(false);
  const [customValues, setCustomValues] = useState<string[]>([]);

  const totalSelected = selected.filter(v => v !== 'Other').length + customValues.length;
  const canContinue = totalSelected >= 3 && totalSelected <= 5 && (!selected.includes('Other') || customValues.length > 0);

  const handleSelect = (value: string) => {
    if (value === 'Other') {
      setCustomActive(true);
      if (!selected.includes('Other') && totalSelected < 5) setSelected([...selected, 'Other']);
      return;
    }
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
      if (value === 'Other') {
        setCustomActive(false);
        setCustomValues([]);
      }
    } else if (totalSelected < 5) {
      setSelected([...selected, value]);
    }
  };

  const handleAddCustom = () => {
    const trimmed = custom.trim();
    if (
      trimmed &&
      !customValues.includes(trimmed) &&
      totalSelected < 5
    ) {
      setCustomValues([...customValues, trimmed]);
      setCustom('');
      setSelected(selected.filter(v => v !== 'Other'));
      setCustomActive(false);
    }
  };

  const handleRemoveCustom = (val: string) => {
    setCustomValues(customValues.filter(v => v !== val));
  };

  return (
    <div className="bg-white border border-input-border rounded-[16px] shadow-sm px-8 py-10 w-full max-w-[560px] flex flex-col" style={{paddingTop: 40, paddingBottom: 40, paddingLeft: 32, paddingRight: 32}}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-[20px] font-bold text-text-default">Strengths</div>
      </div>
      <div className="text-[16px] text-text-default font-medium mt-8">What are your top strengths?</div>
      <div className="text-[14px] text-text-muted mt-2">E.g. Strategy, Product Thinking, Storytelling</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
        {SUGGESTED.filter(v => v !== 'Other').map((value) => {
          const isSelected = selected.includes(value);
          return (
            <button
              key={value}
              type="button"
              className={`px-3 py-2 rounded-md border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isSelected
                  ? 'text-white'
                  : 'bg-surface text-text-default border-input-border hover:bg-muted'
              }`}
              style={isSelected ? { background: '#0A66C2', borderColor: '#0A66C2' } : {}}
              onClick={() => handleSelect(value)}
              disabled={totalSelected === 5 && !isSelected}
            >
              {value}
            </button>
          );
        })}
        {customValues.map(val => (
          <span
            key={val}
            className="px-3 py-2 rounded-md border text-sm font-medium inline-flex items-center"
            style={{ background: '#0A66C2', color: '#fff', borderColor: '#0A66C2' }}
          >
            {val}
            <button
              type="button"
              className="ml-2 text-white hover:text-light-blue focus:outline-none"
              onClick={() => handleRemoveCustom(val)}
              aria-label={`Remove ${val}`}
            >
              ×
            </button>
          </span>
        ))}
        <button
          key="Other"
          type="button"
          className={`px-3 py-2 rounded-md border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 col-span-2 sm:col-span-1 ${
            selected.includes('Other')
              ? 'text-white'
              : 'bg-surface text-text-default border-input-border hover:bg-muted'
          }`}
          style={selected.includes('Other') ? { background: '#0A66C2', borderColor: '#0A66C2' } : {}}
          onClick={() => handleSelect('Other')}
          disabled={totalSelected === 5 && !selected.includes('Other')}
        >
          Other
        </button>
      </div>
      {customActive && selected.includes('Other') && (
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            className="flex-1 rounded-md border border-input-border bg-input-bg px-3 py-2 text-base text-text-default focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter your strength..."
            value={custom}
            onChange={e => setCustom(e.target.value)}
            maxLength={32}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddCustom(); } }}
            disabled={totalSelected >= 5}
          />
          <Button type="button" intent="primary" size="sm" className="h-10 px-4" onClick={handleAddCustom} disabled={!custom.trim() || totalSelected >= 5}>
            Add
          </Button>
        </div>
      )}
      <div className="flex flex-row justify-end gap-3 mt-8">
        <Button type="button" intent="primary" size="md" className="min-w-[120px] h-12 shadow-none" onClick={() => onContinue && onContinue([...selected.filter(v => v !== 'Other'), ...customValues])} disabled={!canContinue}>
          Continue
        </Button>
      </div>
      <div className="text-xs text-text-muted mt-2 text-right">Select 3–5 strengths</div>
    </div>
  );
}
