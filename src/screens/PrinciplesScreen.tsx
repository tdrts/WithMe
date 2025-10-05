



import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Tooltip } from "../components/ui/Tooltip";
import { Badge } from "../components/ui/Badge";

// Figma MCP asset constants
const imgIcon = "http://localhost:3845/assets/43373d9bb33db974993c1026c0dcd8a407a3357c.svg";
const imgVector = "http://localhost:3845/assets/4a3585f3cf08b0c86c40fb8cafed8c9b960d31bd.svg";
const imgVector1 = "http://localhost:3845/assets/eeb1c5c5422b11fd11c599f16d53cb0701779525.svg";
const imgVector2 = "http://localhost:3845/assets/e003594b7b007b842fae03818a3d3e38f3b1bf21.svg";
const imgVector3 = "http://localhost:3845/assets/bb619ae1bec5bb1265cfd9f5addecc5885ca5000.svg";
const imgVector4 = "http://localhost:3845/assets/254e32d39590ea2c32bf430106410a5cf486e4c3.svg";
const imgIcon1 = "http://localhost:3845/assets/a4424749b725e4cfe9cbc3c75ae72d36fa9b4ea6.svg";

// SUGGESTED values for core values chips (from previous impl)
const SUGGESTED = [
  "Clarity", "Speed", "Simplicity", "Inclusion", "Ownership", "Candor", "Curiosity", "Reliability", "Craft", "Impact", "Data-informed", "Experimentation", "Empathy", "Autonomy", "Focus", "Transparency", "Long-term thinking", "Learning", "Other"
];

const FIELD_KEYS = [
  "learningStyle",
  "motivators",
  "drainers",
  "recharge",
  "greatDay",
  "greatWeek",
  "focusHours"
];

export default function PrinciplesScreen() {
  // State for chips
  const [coreValues, setCoreValues] = useState<string[]>([]);
  const [customValue, setCustomValue] = useState("");
  const [customActive, setCustomActive] = useState(false);
  // State for strengths
  const [strengths, setStrengths] = useState<string[]>(["", "", ""]);
  // State for 7 text fields
  const [fields, setFields] = useState<Record<string, string>>({
    learningStyle: "",
    motivators: "",
    drainers: "",
    recharge: "",
    greatDay: "",
    greatWeek: "",
    focusHours: ""
  });
  // Skip logic for 7 text fields
  const [skipped, setSkipped] = useState<Record<string, boolean>>({});

  // Handlers for chips
  const handleSelectValue = (value: string) => {
    if (coreValues.includes(value)) {
      setCoreValues(coreValues.filter((v) => v !== value));
    } else if (coreValues.length < 5) {
      setCoreValues([...coreValues, value]);
    }
    if (value === "Other") setCustomActive(true);
  };
  const handleAddCustom = () => {
    if (customValue.trim() && !coreValues.includes(customValue) && coreValues.length < 5) {
      setCoreValues([...coreValues.filter((v) => v !== "Other"), customValue.trim()]);
      setCustomValue("");
      setCustomActive(false);
    }
  };

  // Handlers for strengths
  const handleStrengthChange = (idx: number, value: string) => {
    setStrengths(strengths.map((s, i) => (i === idx ? value : s)));
  };
  const handleStrengthAdd = () => {
    if (strengths.length < 5) setStrengths([...strengths, ""]);
  };
  const handleStrengthRemove = (idx: number) => {
    if (strengths.length > 3) setStrengths(strengths.filter((_, i) => i !== idx));
  };

  // Handlers for text fields
  const handleFieldChange = (key: string, value: string) => {
    setFields({ ...fields, [key]: value });
    setSkipped({ ...skipped, [key]: false });
  };
  const handleSkip = (key: string) => {
    setFields({ ...fields, [key]: "" });
    setSkipped({ ...skipped, [key]: true });
  };

  // Save/Continue handlers (stub)
  const handleSave = () => {
    // TODO: Wire up to parent/profile context
    // Example: onSave({ coreValues, strengths, ...fields, skipped })
    alert("Save/Continue not yet implemented");
  };

  // ...existing Figma MCP layout code goes here, replacing static chips/inputs with interactive components and state wiring...
  return (
    <div className="bg-white relative size-full" data-name="Principles" data-node-id="1:842">
      <div className="absolute bg-[#f8f9fa] box-border content-stretch flex flex-col gap-[32px] h-[2325px] items-start left-0 pb-0 pl-[423.5px] pr-[167.5px] pt-[32px] top-0 w-[1359px]" data-name="SectionEditor" data-node-id="1:843">
        {/* Header */}
        <div className="h-[116px] relative shrink-0 w-full" data-name="Container" data-node-id="1:844">
          <div className="absolute h-[36px] left-0 rounded-[10px] top-0 w-[148.203px] cursor-pointer flex items-center" data-name="Button" data-node-id="1:845">
            <div className="left-[12px] size-[16px] top-[10px]">
              <img alt="" className="block max-w-none size-full" src={imgIcon} />
            </div>
            <p className="ml-[32px] font-medium leading-[20px] text-[#0a66c2] text-[14px] tracking-[-0.1504px] whitespace-pre">
              Back to Home
            </p>
          </div>
          <div className="absolute flex h-[36px] items-start left-0 top-[52px] w-[768px]" data-name="Heading 1" data-node-id="1:850">
            <p className="font-normal leading-[36px] text-[30px] text-neutral-950 tracking-[0.3955px]">Principles</p>
          </div>
          <div className="absolute h-[20px] left-0 top-[96px] w-[768px]" data-name="Paragraph" data-node-id="1:852">
            <p className="font-italic leading-[20px] text-[14px] text-gray-500 tracking-[-0.1504px] whitespace-pre">Short and specific beats long and vague.</p>
          </div>
        </div>
        {/* Field Card: Core Values (Chips) */}
        <div className="bg-white border border-blue-100 border-solid box-border flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] rounded-[16px] w-full" data-name="Container" data-node-id="1:864">
          <div className="flex gap-[8px] items-center w-full">
            <div className="flex gap-[8px] items-center">
              <p className="font-medium leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px]">Core values</p>
              <Tooltip content="Select 3–5 values that guide you.">
                <span className="w-4 h-4 cursor-pointer text-text-muted"><img src={imgVector} alt="info" /></span>
              </Tooltip>
            </div>
            <span className="ml-auto text-xs text-[#717182]">{coreValues.length} / 5 selected</span>
          </div>
          <div className="flex flex-wrap gap-2 w-full mt-2">
            {SUGGESTED.map((value) => (
              <button
                key={value}
                type="button"
                className={`px-3 py-1.5 rounded-[10px] border text-sm font-medium transition-colors focus:outline-none ${coreValues.includes(value) ? 'bg-[#0a66c2] text-white border-[#0a66c2]' : 'bg-white text-neutral-950 border-[#d1d5dc] hover:bg-blue-50'} ${value === 'Other' ? 'border-dashed' : ''}`}
                style={{ minWidth: value === 'Other' ? 80 : undefined }}
                onClick={() => handleSelectValue(value)}
                disabled={coreValues.length === 5 && !coreValues.includes(value)}
              >
                {value}
              </button>
            ))}
            {coreValues.filter(v => v !== 'Other' && !SUGGESTED.includes(v)).map(val => (
              <span key={val} className="px-3 py-1.5 rounded-[10px] border text-sm font-medium bg-[#0a66c2] text-white border-[#0a66c2] inline-flex items-center">
                {val}
                <button type="button" className="ml-2 text-white hover:text-blue-200" onClick={() => setCoreValues(coreValues.filter(v => v !== val))} aria-label={`Remove ${val}`}>×</button>
              </span>
            ))}
          </div>
          {customActive && (
            <div className="flex gap-2 mt-2 w-full">
              <Input
                value={customValue}
                onChange={e => setCustomValue(e.target.value)}
                placeholder="Enter your value..."
                maxLength={32}
                className="flex-1"
              />
              <Button type="button" intent="primary" size="sm" className="h-10 px-4" onClick={handleAddCustom} disabled={!customValue.trim() || coreValues.length >= 5}>
                Add
              </Button>
              <Button type="button" intent="ghost" size="sm" className="h-10 px-4" onClick={() => setCustomActive(false)}>
                Cancel
              </Button>
            </div>
          )}
          <div className="text-xs text-text-muted mt-2 text-right w-full">Select 3–5 values</div>
        </div>
        {/* Field Card: Strengths */}
        <div className="bg-white border border-blue-100 border-solid flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] rounded-[16px] w-full mt-8">
          <div className="flex gap-[8px] items-center w-full">
            <p className="font-medium leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px]">Strengths</p>
            <Tooltip content="Add at least 3, up to 5 strengths. E.g. Strategy, Product Thinking, Storytelling" >
              <span className="w-4 h-4 cursor-pointer text-text-muted"><img src={imgVector} alt="info" /></span>
            </Tooltip>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {strengths.map((val, idx) => (
              <div key={idx} className="flex gap-2 items-center w-full">
                <Input
                  value={val}
                  onChange={e => handleStrengthChange(idx, e.target.value)}
                  placeholder={`Strength ${idx + 1}`}
                  maxLength={32}
                  className="flex-1"
                />
                {strengths.length > 3 && (
                  <Button type="button" intent="ghost" size="sm" className="px-2" onClick={() => handleStrengthRemove(idx)} aria-label="Remove strength">×</Button>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-2">
            <Button type="button" intent="secondary" size="sm" className="text-sm underline-offset-2 hover:underline" onClick={handleStrengthAdd} disabled={strengths.length >= 5}>
              + Add strength
            </Button>
            <span className="text-xs text-text-muted">{strengths.length} of 5 strengths</span>
          </div>
        </div>
        {/* Field Cards: 7 Text Inputs with skip logic */}
        <div className="flex flex-col gap-6 w-full mt-8">
          {/* Field definitions for each card */}
          {[
            {
              key: 'learningStyle',
              label: 'Learning style',
              tooltip: 'Describe how you learn best, e.g. hands-on, reading, pairing, video, etc.',
              placeholder: 'e.g., Hands-on prototype + 15m debrief',
              textarea: false
            },
            {
              key: 'motivators',
              label: 'What motivates me',
              tooltip: 'Share what energizes you and helps you do your best work.',
              placeholder: 'e.g., Small wins weekly; autonomy; real user impact',
              textarea: true
            },
            {
              key: 'drainers',
              label: 'What drains me',
              tooltip: 'Describe situations or tasks that sap your energy or focus.',
              placeholder: 'e.g., Vague goals; long unstructured meetings',
              textarea: true
            },
            {
              key: 'recharge',
              label: 'How I recharge',
              tooltip: 'How do you reset and recharge after a tough day or week?',
              placeholder: 'e.g., Walk + podcast',
              textarea: false
            },
            {
              key: 'greatDay',
              label: 'A great day at work looks like',
              tooltip: 'Describe your ideal workday',
              placeholder: 'Describe your ideal workday',
              textarea: true
            },
            {
              key: 'greatWeek',
              label: 'A great week at work looks like',
              tooltip: 'Describe your ideal work week',
              placeholder: 'Describe your ideal work week',
              textarea: true
            },
            {
              key: 'focusHours',
              label: 'My focus hours are',
              tooltip: 'Share when you do your best deep work or are most productive.',
              placeholder: 'e.g., 09:30–12:00 deep work; async after 15:00',
              textarea: false
            }
          ].map(section => (
            <div key={section.key} className="bg-white border border-blue-100 border-solid flex flex-col gap-[16px] pb-px pt-[25px] px-[25px] rounded-[16px] w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[16px] text-neutral-950 tracking-[-0.3125px]">{section.label}</span>
                  <Tooltip content={section.tooltip}><span className="w-4 h-4 cursor-pointer text-text-muted"><img src={imgVector} alt="info" /></span></Tooltip>
                </div>
                <Button type="button" intent="ghost" size="sm" className="h-8 px-3 rounded-[10px] text-[14px] font-medium text-neutral-950" onClick={() => handleSkip(section.key)}>
                  {skipped[section.key] ? 'Skipped' : 'Skip'}
                </Button>
              </div>
              <div className="bg-[#f3f3f5] rounded-[10px] flex items-center px-3">
                {section.textarea ? (
                  <Textarea
                    value={fields[section.key]}
                    onChange={e => handleFieldChange(section.key, e.target.value)}
                    placeholder={section.placeholder}
                    rows={3}
                    className="bg-transparent border-0 outline-none w-full text-[14px] text-[#717182] placeholder-[#717182] resize-none min-h-[64px]"
                    disabled={skipped[section.key]}
                  />
                ) : (
                  <Input
                    value={fields[section.key]}
                    onChange={e => handleFieldChange(section.key, e.target.value)}
                    placeholder={section.placeholder}
                    className="bg-transparent border-0 outline-none w-full text-[14px] text-[#717182] placeholder-[#717182]"
                    disabled={skipped[section.key]}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Save/Continue Buttons */}
        <div className="border-t border-blue-100 flex items-center justify-between w-full mt-8 pt-6">
          <Button type="button" intent="outline" size="md" className="rounded-[10px] w-[107.5px] h-[36px]" onClick={handleSave}>
            Save & Exit
          </Button>
          <Button type="button" intent="primary" size="md" className="rounded-[10px] w-[140.6px] h-[36px]" onClick={handleSave}>
            Save & Continue
          </Button>
        </div>
      </div>
      {/* Sidebar Navigation (static, for Figma parity) */}
      <div className="absolute bg-white border-[0px_1px_0px_0px] border-blue-100 border-solid h-[993px] left-0 top-0 w-[256px]" data-name="SectionEditor" data-node-id="1:1045">
        <div className="box-border flex flex-col gap-[24px] h-[993px] items-start overflow-clip pb-0 pl-[24px] pr-[25px] pt-[24px] rounded-[inherit] w-[256px]">
          <div className="h-[24px] w-full">
            <p className="font-normal leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px]">Sections</p>
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <div className="bg-blue-50 h-[48px] rounded-[12px] w-full flex items-center px-4">
              <span className="text-[#0a66c2] text-[16px] font-medium">Principles</span>
              <span className="ml-auto bg-blue-100 rounded-[10px] px-2 py-0.5 text-xs text-[#1447e6] font-medium">...</span>
            </div>
            <div className="h-[48px] rounded-[12px] w-full flex items-center px-4">
              <span className="text-neutral-950 text-[16px] font-medium">Communication</span>
              <span className="ml-auto bg-neutral-100 rounded-[10px] px-2 py-0.5 text-xs text-neutral-600 font-medium">○</span>
            </div>
            <div className="h-[48px] rounded-[12px] w-full flex items-center px-4">
              <span className="text-neutral-950 text-[16px] font-medium">Decision Making</span>
              <span className="ml-auto bg-neutral-100 rounded-[10px] px-2 py-0.5 text-xs text-neutral-600 font-medium">○</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
