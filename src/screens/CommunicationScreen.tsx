// CommunicationScreen.tsx
// Figma MCP-driven, pixel-perfect UI for Communication section
// (Initial implementation, will wire up interactivity and reuse components next)


import React from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Tooltip } from "../components/ui/Tooltip";
import type { ProfileData } from "../types/profile";

type SectionKey = "giveFeedback" | "receiveFeedback" | "conflict";

const imgIcon = "http://localhost:3845/assets/43373d9bb33db974993c1026c0dcd8a407a3357c.svg";
const imgVector = "http://localhost:3845/assets/4a3585f3cf08b0c86c40fb8cafed8c9b960d31bd.svg";
const imgVector1 = "http://localhost:3845/assets/eeb1c5c5422b11fd11c599f16d53cb0701779525.svg";
const imgVector2 = "http://localhost:3845/assets/e003594b7b007b842fae03818a3d3e38f3b1bf21.svg";
const imgIcon1 = "http://localhost:3845/assets/a4424749b725e4cfe9cbc3c75ae72d36fa9b4ea6.svg";

interface CommunicationScreenProps {
  profile: ProfileData;
  onChange: (profile: ProfileData) => void;
  onExit: () => void;
  onContinue: () => void;
}

export default function CommunicationScreen({ profile, onChange, onExit, onContinue }: CommunicationScreenProps) {
  // Handlers for channels
  const handleChannelChange = (idx: number, key: "channel" | "use", value: string) => {
    const newChannels = profile.channels.map((c, i) => (i === idx ? { ...c, [key]: value } : c));
    onChange({ ...profile, channels: newChannels });
  };
  const handleAddChannel = () => {
    onChange({ ...profile, channels: [...profile.channels, { channel: "", use: "" }] });
  };
  const handleRemoveChannel = (idx: number) => {
    if (profile.channels.length > 1) onChange({ ...profile, channels: profile.channels.filter((_, i) => i !== idx) });
  };

  // Handlers for textareas
  const handleFieldChange = (key: SectionKey, value: string) => {
    onChange({ ...profile, [key]: value, skipped: { ...profile.skipped, [key]: false } });
  };
  const handleSkip = (key: SectionKey) => {
    onChange({ ...profile, [key]: "", skipped: { ...profile.skipped, [key]: true } });
  };

  return (
    <div className="bg-white relative size-full" data-name="Communication" data-node-id="1:1068">
      <div className="absolute bg-[#f8f9fa] box-border content-stretch flex flex-col gap-[32px] h-[1299px] items-start left-0 pb-0 pl-[423.5px] pr-[167.5px] pt-[32px] top-0 w-[1359px]" data-name="SectionEditor" data-node-id="1:1069">
        {/* Header */}
        <div className="h-[116px] relative shrink-0 w-full" data-name="Container" data-node-id="1:1070">
          <div className="absolute h-[36px] left-0 rounded-[10px] top-0 w-[148.203px] flex items-center cursor-pointer" data-name="Button" data-node-id="1:1071">
            <div className="left-[12px] size-[16px] top-[10px]">
              <img alt="" className="block max-w-none size-full" src={imgIcon} />
            </div>
            <p className="ml-[32px] font-medium leading-[20px] text-[#0a66c2] text-[14px] tracking-[-0.1504px] whitespace-pre">Back to Home</p>
          </div>
          <div className="absolute flex h-[36px] items-start left-0 top-[52px] w-[768px]" data-name="Heading 1" data-node-id="1:1076">
            <p className="font-normal leading-[36px] text-[30px] text-neutral-950 tracking-[0.3955px]">Communication</p>
          </div>
          <div className="absolute h-[20px] left-0 top-[96px] w-[768px]" data-name="Paragraph" data-node-id="1:1078">
            <p className="font-italic leading-[20px] text-[14px] text-gray-500 tracking-[-0.1504px] whitespace-pre">Short and specific beats long and vague.</p>
          </div>
        </div>
        {/* Blue Card */}
        <div className="bg-blue-50 border border-blue-100 border-solid h-[238px] relative rounded-[16px] shrink-0 w-full" data-name="Container" data-node-id="1:1080">
          <div className="absolute flex h-[19px] items-start left-[25px] top-[27.5px] w-[229.391px]">
            <p className="font-bold leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px] whitespace-pre">Make collaboration smoother.</p>
          </div>
          <div className="absolute h-[72px] left-[25px] top-[65px] w-[718px]">
            <p className="font-normal leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px] w-[708px]">The fastest way to build trust is to make your communication predictable. Defining how you share, respond, and handle feedback saves everyone time — especially when teams work across tools, time zones, and AI assistants.</p>
          </div>
          <div className="absolute h-[48px] left-[25px] top-[153px] w-[718px] flex items-center">
            <p className="font-bold leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px] whitespace-pre">Why it matters:</p>
          </div>
          <p className="absolute font-normal leading-[24px] left-[25.5px] text-[16px] text-neutral-950 top-[183px] tracking-[-0.3125px] w-[698px]">Misalignment happens in minutes; trust takes months. These answers help your peers (and AI copilots) communicate with you the way you prefer.</p>
        </div>
        {/* Channels Card */}
        <div className="bg-white border border-blue-100 border-solid relative rounded-[16px] shrink-0 w-full mt-8 p-[25px] flex flex-col gap-4">
          <div className="flex gap-[8px] items-center">
            <p className="font-medium leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px]">Channels</p>
            <Tooltip content="List the tools and how you use them (e.g. Slack for async, Zoom for workshops)"><span className="w-4 h-4 cursor-pointer text-text-muted"><img src={imgVector} alt="info" /></span></Tooltip>
          </div>
          {profile.channels.map((c, idx) => (
            <div key={idx} className="flex gap-2 items-center w-full">
              <span className="text-[#717182] text-[14px]">I prefer</span>
              <Input
                value={c.channel}
                onChange={e => handleChannelChange(idx, "channel", e.target.value)}
                placeholder="channel"
                className="bg-[#f3f3f5] border-0 rounded-[10px] h-[36px] w-40 text-[14px] text-[#717182] placeholder-[#717182]"
              />
              <span className="text-[#717182] text-[14px]">for</span>
              <Input
                value={c.use}
                onChange={e => handleChannelChange(idx, "use", e.target.value)}
                placeholder="use case"
                className="bg-[#f3f3f5] border-0 rounded-[10px] h-[36px] w-64 text-[14px] text-[#717182] placeholder-[#717182]"
              />
              {profile.channels.length > 1 && (
                <Button type="button" intent="ghost" size="sm" className="ml-2" onClick={() => handleRemoveChannel(idx)} aria-label="Remove channel">×</Button>
              )}
            </div>
          ))}
          <Button type="button" intent="ghost" size="sm" className="mt-2 flex items-center gap-2 w-fit" onClick={handleAddChannel}>
            <img src={imgIcon1} alt="add" className="w-4 h-4" />
            Add another
          </Button>
        </div>
        {/* Feedback and Conflict Cards */}
        <div className="flex flex-col gap-6 w-full mt-8">
          {([
            {
              key: "giveFeedback",
              label: "How I give feedback",
              tooltip: "Describe your feedback style, e.g. direct + kind, examples, action next steps.",
              placeholder: "e.g., Direct + kind; examples; action next steps"
            },
            {
              key: "receiveFeedback",
              label: "How I like to receive feedback",
              tooltip: "Describe how you like to receive feedback, e.g. direct, written first, live if sensitive.",
              placeholder: "e.g., Direct; written first; live if sensitive"
            },
            {
              key: "conflict",
              label: "How I deal with conflict",
              tooltip: "Describe your approach to conflict, e.g. state concern + desired outcome; propose options.",
              placeholder: "e.g., State concern + desired outcome; propose options"
            }
          ] as { key: SectionKey; label: string; tooltip: string; placeholder: string }[]).map(section => (
            <div key={section.key} className="bg-white border border-blue-100 border-solid flex flex-col gap-[16px] pb-px pt-[25px] px-[25px] rounded-[16px] w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[16px] text-neutral-950 tracking-[-0.3125px]">{section.label}</span>
                  <Tooltip content={section.tooltip}><span className="w-4 h-4 cursor-pointer text-text-muted"><img src={imgVector} alt="info" /></span></Tooltip>
                </div>
                <Button type="button" intent="ghost" size="sm" className="h-8 px-3 rounded-[10px] text-[14px] font-medium text-neutral-950" onClick={() => handleSkip(section.key)}>
                  {profile.skipped?.[section.key] ? 'Skipped' : 'Skip'}
                </Button>
              </div>
              <div className="bg-[#f3f3f5] rounded-[10px] flex items-center px-3">
                <Textarea
                  value={profile[section.key]}
                  onChange={e => handleFieldChange(section.key, e.target.value)}
                  placeholder={section.placeholder}
                  rows={3}
                  className="bg-transparent border-0 outline-none w-full text-[14px] text-[#717182] placeholder-[#717182] resize-none min-h-[64px]"
                  disabled={profile.skipped?.[section.key]}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Save/Continue Buttons */}
        <div className="border-t border-blue-100 flex items-center justify-between w-full mt-8 pt-6">
          <Button type="button" intent="outline" size="md" className="rounded-[10px] w-[107.5px] h-[36px]" onClick={onExit}>
            Save & Exit
          </Button>
          <Button type="button" intent="primary" size="md" className="rounded-[10px] w-[140.6px] h-[36px]" onClick={onContinue}>
            Save & Continue
          </Button>
        </div>
      </div>
      {/* Sidebar Navigation (static, for Figma parity) */}
      <div className="absolute bg-white border-[0px_1px_0px_0px] border-blue-100 border-solid h-[993px] left-0 top-0 w-[256px]" data-name="SectionEditor" data-node-id="1:1161">
        <div className="box-border flex flex-col gap-[24px] h-[993px] items-start overflow-clip pb-0 pl-[24px] pr-[25px] pt-[24px] rounded-[inherit] w-[256px]">
          <div className="h-[24px] w-full">
            <p className="font-normal leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px]">Sections</p>
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <div className="h-[48px] rounded-[12px] w-full flex items-center px-4">
              <span className="text-neutral-950 text-[16px] font-medium">Principles</span>
              <span className="ml-auto bg-neutral-100 rounded-[10px] px-2 py-0.5 text-xs text-neutral-600 font-medium">○</span>
            </div>
            <div className="bg-blue-50 h-[48px] rounded-[12px] w-full flex items-center px-4">
              <span className="text-[#0a66c2] text-[16px] font-medium">Communication</span>
              <span className="ml-auto bg-blue-100 rounded-[10px] px-2 py-0.5 text-xs text-[#1447e6] font-medium">...</span>
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
