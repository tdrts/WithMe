import React, { useState } from "react";
import { asset } from "@/lib/assets";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Tooltip } from "../components/ui/Tooltip";

const imgIcon = asset("43373d9bb33db974993c1026c0dcd8a407a3357c.svg");
const imgVector = asset("4a3585f3cf08b0c86c40fb8cafed8c9b960d31bd.svg");
const imgVector1 = asset("eeb1c5c5422b11fd11c599f16d53cb0701779525.svg");
const imgVector2 = asset("e003594b7b007b842fae03818a3d3e38f3b1bf21.svg");

const SUGGESTED = [
  "Clarity",
  "Speed",
  "Simplicity",
  "Inclusion",
  "Ownership",
  "Candor",
  "Curiosity",
  "Reliability",
  "Craft",
  "Impact",
  "Data-informed",
  "Experimentation",
  "Empathy",
  "Autonomy",
  "Focus",
  "Transparency",
  "Long-term thinking",
  "Learning",
  "Other"
];

const FIELD_KEYS = [
  "learningStyle",
  "motivators",
  "drainers",
  "recharge",
  "greatDay",
  "greatWeek",
  "focusHours"
] as const;

type FieldKey = (typeof FIELD_KEYS)[number];

const ValueChip: React.FC<{ label: string; selected: boolean; onClick: () => void }> = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition ${
      selected
        ? "border-[#0A66C2] bg-[#0A66C2] text-white"
        : "border-blue-100 bg-white text-[#0A66C2] hover:border-[#0A66C2]/60 hover:text-[#004182]"
    }`}
  >
    {label}
  </button>
);

export default function PrinciplesScreen() {
  const [coreValues, setCoreValues] = useState<string[]>([]);
  const [customValue, setCustomValue] = useState("");
  const [customActive, setCustomActive] = useState(false);
  const [strengths, setStrengths] = useState<string[]>(["", "", ""]);
  const [fields, setFields] = useState<Record<FieldKey, string>>({
    learningStyle: "",
    motivators: "",
    drainers: "",
    recharge: "",
    greatDay: "",
    greatWeek: "",
    focusHours: ""
  });
  const [skipped, setSkipped] = useState<Record<FieldKey, boolean>>({});

  const handleSelectValue = (value: string) => {
    if (coreValues.includes(value)) {
      setCoreValues(coreValues.filter((item) => item !== value));
    } else if (coreValues.length < 5) {
      setCoreValues([...coreValues, value]);
    }
    if (value === "Other") {
      setCustomActive(true);
    }
  };

  const handleAddCustom = () => {
    if (customValue.trim() && !coreValues.includes(customValue) && coreValues.length < 5) {
      setCoreValues([...coreValues.filter((item) => item !== "Other"), customValue.trim()]);
      setCustomValue("");
      setCustomActive(false);
    }
  };

  const handleStrengthChange = (index: number, value: string) => {
    setStrengths(strengths.map((strength, idx) => (idx === index ? value : strength)));
  };

  const handleStrengthAdd = () => {
    if (strengths.length < 5) {
      setStrengths([...strengths, ""]);
    }
  };

  const handleStrengthRemove = (index: number) => {
    if (strengths.length > 3) {
      setStrengths(strengths.filter((_, idx) => idx !== index));
    }
  };

  const handleFieldChange = (key: FieldKey, value: string) => {
    setFields({ ...fields, [key]: value });
    setSkipped({ ...skipped, [key]: false });
  };

  const handleSkip = (key: FieldKey) => {
    setFields({ ...fields, [key]: "" });
    setSkipped({ ...skipped, [key]: true });
  };

  const handleSave = () => {
    alert("Save/Continue not yet implemented");
  };

  return (
    <div className="bg-white relative size-full" data-name="Principles" data-node-id="1:842">
      <div className="absolute left-0 top-0 h-[2325px] w-[1359px] bg-[#f8f9fa] px-[167.5px] pb-0 pl-[423.5px] pt-[32px]" data-name="SectionEditor" data-node-id="1:843">
        <div className="relative h-[116px] w-full" data-name="Container" data-node-id="1:844">
          <button type="button" className="flex h-[36px] items-center gap-2 rounded-[10px] text-[#0a66c2]" data-name="Button" data-node-id="1:845">
            <img alt="back" className="size-4" src={imgIcon} />
            <span className="text-[14px] font-medium tracking-[-0.1504px]">Back to Home</span>
          </button>
          <h1 className="absolute left-0 top-[52px] text-[30px] font-normal tracking-[0.3955px] text-neutral-950" data-name="Heading 1" data-node-id="1:850">
            Principles
          </h1>
          <p className="absolute left-0 top-[96px] text-[14px] italic tracking-[-0.1504px] text-gray-500">
            These answers help teammates understand what energises you, how you build momentum, and what to watch out for.
          </p>
        </div>

        <div className="relative w-full rounded-[16px] border border-blue-100 bg-blue-50" data-name="Container" data-node-id="1:854">
          <div className="flex flex-col gap-4 p-6">
            <p className="text-[16px] font-bold tracking-[-0.3125px] text-neutral-950">Why this matters</p>
            <p className="text-[16px] tracking-[-0.3125px] text-neutral-950">
              Sharing your principles helps others support you on the right projects, protect your focus, and know how to celebrate you.
              Bring the ambition, the craft, the care — teammates (and AI copilots) will do the rest.
            </p>
            <img src={imgVector1} alt="Illustration" className="pointer-events-none select-none" />
          </div>
        </div>

        <section className="mt-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-medium tracking-[-0.44px] text-neutral-950">Core values</h2>
            <Tooltip content="Pick up to five values that describe how you show up at work">
              <span className="size-4 cursor-pointer text-[#0a66c2]">
                <img src={imgVector} alt="info" />
              </span>
            </Tooltip>
          </div>
          <p className="text-[14px] text-[#717182]">Pick 3–5 that describe how you work best.</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED.map((value) => (
              <ValueChip
                key={value}
                label={value}
                selected={coreValues.includes(value)}
                onClick={() => handleSelectValue(value)}
              />
            ))}
          </div>
          {customActive && (
            <div className="flex items-center gap-2">
              <Input value={customValue} onChange={(event) => setCustomValue(event.target.value)} placeholder="Add your own" />
              <Button type="button" size="sm" intent="primary" onClick={handleAddCustom}>
                Add
              </Button>
            </div>
          )}
        </section>

        <section className="mt-8 flex flex-col gap-4">
          <h2 className="text-[18px] font-medium tracking-[-0.44px] text-neutral-950">Top strengths</h2>
          <p className="text-[14px] text-[#717182]">List up to five strengths teammates should know about.</p>
          <div className="space-y-3">
            {strengths.map((strength, index) => (
              <div key={`strength-${index}`} className="flex items-center gap-3">
                <Input
                  value={strength}
                  onChange={(event) => handleStrengthChange(index, event.target.value)}
                  placeholder={`Strength ${index + 1}`}
                />
                {index >= 3 && (
                  <Button type="button" intent="ghost" size="sm" onClick={() => handleStrengthRemove(index)}>
                    Remove
                  </Button>
                )}
              </div>
            ))}
          </div>
          {strengths.length < 5 && (
            <Button type="button" intent="outline" size="sm" onClick={handleStrengthAdd}>
              Add strength
            </Button>
          )}
        </section>

        <section className="mt-8 flex flex-col gap-4">
          {FIELD_KEYS.map((key) => {
            const meta = {
              learningStyle: {
                label: "I learn best when",
                tooltip: "Share how you prefer to learn — explainers, pairing, docs, experiments",
                placeholder: "Describe your favourite way to learn",
                textarea: true
              },
              motivators: {
                label: "I'm motivated by",
                tooltip: "What energises you — clear goals, autonomy, impact, etc.",
                placeholder: "List what keeps you energised",
                textarea: true
              },
              drainers: {
                label: "I'm drained by",
                tooltip: "Work patterns that slow you down or frustrate you",
                placeholder: "List what drains you",
                textarea: true
              },
              recharge: {
                label: "I recharge by",
                tooltip: "How you reset focus or energy",
                placeholder: "Share how you decompress or reset",
                textarea: true
              },
              greatDay: {
                label: "A great day at work looks like",
                tooltip: "Describe your ideal workday",
                placeholder: "Describe your ideal workday",
                textarea: true
              },
              greatWeek: {
                label: "A great week at work looks like",
                tooltip: "Describe your ideal work week",
                placeholder: "Describe your ideal work week",
                textarea: true
              },
              focusHours: {
                label: "My focus hours are",
                tooltip: "Share when you do your best deep work or are most productive.",
                placeholder: "e.g., 09:30–12:00 deep work; async after 15:00",
                textarea: false
              }
            }[key];

            return (
              <div key={key} className="flex flex-col gap-4 rounded-[16px] border border-blue-100 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-medium text-neutral-950">{meta.label}</span>
                    <Tooltip content={meta.tooltip}>
                      <span className="size-4 cursor-pointer text-[#0a66c2]">
                        <img src={imgVector2} alt="info" />
                      </span>
                    </Tooltip>
                  </div>
                  <Button
                    type="button"
                    intent="ghost"
                    size="sm"
                    className="rounded-[10px]"
                    onClick={() => handleSkip(key)}
                  >
                    {skipped[key] ? "Unskip" : "Skip"}
                  </Button>
                </div>
                {meta.textarea ? (
                  <Textarea
                    value={fields[key]}
                    onChange={(event) => handleFieldChange(key, event.target.value)}
                    placeholder={meta.placeholder}
                    rows={3}
                    className="min-h-[96px] resize-none rounded-[12px] border border-transparent bg-[#f3f3f5] px-4 py-3 text-[14px] text-[#717182]"
                    disabled={skipped[key]}
                  />
                ) : (
                  <Input
                    value={fields[key]}
                    onChange={(event) => handleFieldChange(key, event.target.value)}
                    placeholder={meta.placeholder}
                    className="rounded-[12px] border border-transparent bg-[#f3f3f5] px-4 py-3 text-[14px] text-[#717182]"
                    disabled={skipped[key]}
                  />
                )}
              </div>
            );
          })}
        </section>

        <div className="mt-8 flex items-center justify-between border-t border-blue-100 pt-6">
          <Button type="button" intent="outline" size="md" className="h-[36px] rounded-[10px]" onClick={handleSave}>
            Save & Exit
          </Button>
          <Button type="button" intent="primary" size="md" className="h-[36px] rounded-[10px]" onClick={handleSave}>
            Save & Continue
          </Button>
        </div>
      </div>

      <aside className="absolute left-0 top-0 h-[993px] w-[256px] border-r border-blue-100 bg-white">
        <div className="flex h-full flex-col gap-6 px-6 py-6">
          <p className="text-[16px] text-neutral-950">Sections</p>
          <nav className="flex flex-col gap-2">
            <button type="button" className="flex h-12 items-center justify-between rounded-[12px] bg-blue-50 px-4 text-left text-[16px] text-[#0a66c2]">
              Principles
              <span className="rounded-[10px] bg-blue-100 px-2 py-0.5 text-xs text-[#1447e6]">•••</span>
            </button>
            <button type="button" className="flex h-12 items-center justify-between rounded-[12px] px-4 text-left text-[16px] text-neutral-950">
              Communication
              <span className="rounded-[10px] bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">○</span>
            </button>
            <button type="button" className="flex h-12 items-center justify-between rounded-[12px] px-4 text-left text-[16px] text-neutral-950">
              Decision Making
              <span className="rounded-[10px] bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">○</span>
            </button>
          </nav>
        </div>
      </aside>
    </div>
  );
}
