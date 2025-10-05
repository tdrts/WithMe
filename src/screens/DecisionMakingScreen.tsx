import React from "react";
import { Button } from "../components/ui/Button";
import { Textarea } from "../components/ui/Textarea";
import { Tooltip } from "../components/ui/Tooltip";
import type { ProfileData } from "../types/profile";

const imgIcon = "http://localhost:3845/assets/43373d9bb33db974993c1026c0dcd8a407a3357c.svg";
const imgVector = "http://localhost:3845/assets/4a3585f3cf08b0c86c40fb8cafed8c9b960d31bd.svg";
const imgVector1 = "http://localhost:3845/assets/eeb1c5c5422b11fd11c599f16d53cb0701779525.svg";
const imgVector2 = "http://localhost:3845/assets/e003594b7b007b842fae03818a3d3e38f3b1bf21.svg";

type SectionKey = "decisionStyle" | "decideQuickly" | "needTime" | "experimentWith" | "guardrails";

interface DecisionMakingScreenProps {
  profile: ProfileData;
  onChange: (profile: ProfileData) => void;
  onExit: () => void;
  onContinue: () => void;
}

export default function DecisionMakingScreen({ profile, onChange, onExit, onContinue }: DecisionMakingScreenProps) {
  const handleFieldChange = (key: SectionKey, value: string) => {
    onChange({ ...profile, [key]: value, skipped: { ...profile.skipped, [key]: false } });
  };
  const handleSkip = (key: SectionKey) => {
    onChange({ ...profile, [key]: "", skipped: { ...profile.skipped, [key]: true } });
  };

  return (
    <div className="bg-white relative size-full" data-name="Decision making" data-node-id="1:1184">
      <div className="absolute bg-[#f8f9fa] box-border content-stretch flex flex-col gap-[32px] h-[1529px] items-start left-0 pb-0 pl-[423.5px] pr-[167.5px] pt-[32px] top-0 w-[1359px]" data-name="SectionEditor" data-node-id="1:1185">
        {/* Header */}
        <div className="h-[116px] relative shrink-0 w-full" data-name="Container" data-node-id="1:1186">
          <div className="absolute h-[36px] left-0 rounded-[10px] top-0 w-[148.203px] flex items-center cursor-pointer" data-name="Button" data-node-id="1:1187">
            <div className="left-[12px] size-[16px] top-[10px]">
              <img alt="" className="block max-w-none size-full" src={imgIcon} />
            </div>
            <p className="ml-[32px] font-medium leading-[20px] text-[#0a66c2] text-[14px] tracking-[-0.1504px] whitespace-pre">Back to Home</p>
          </div>
          <div className="absolute flex h-[36px] items-start left-0 top-[52px] w-[768px]" data-name="Heading 1" data-node-id="1:1192">
            <p className="font-normal leading-[36px] text-[30px] text-neutral-950 tracking-[0.3955px]">Decision Making</p>
          </div>
          <div className="absolute h-[20px] left-0 top-[96px] w-[768px]" data-name="Paragraph" data-node-id="1:1194">
            <p className="font-italic leading-[20px] text-[14px] text-gray-500 tracking-[-0.1504px] whitespace-pre">Short and specific beats long and vague.</p>
          </div>
        </div>
        {/* Blue Card */}
        <div className="bg-blue-50 border border-blue-100 border-solid h-[250px] relative rounded-[16px] shrink-0 w-full" data-name="Container" data-node-id="1:1196">
          <div className="absolute flex h-[19px] items-start left-[25px] top-[27.5px] w-[252.141px]">
            <p className="font-bold leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px] whitespace-pre">Show how you think and choose.</p>
          </div>
          <div className="absolute h-[72px] left-[25px] top-[65px] w-[718px]">
            <p className="font-normal leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px] w-[708px]">Every teammate has a different rhythm for taking risks, moving fast, or seeking alignment. Sharing yours helps people know when to involve you, and how to make progress with you — not around you.</p>
          </div>
          <div className="absolute h-[48px] left-[25px] top-[153px] w-[718px] flex items-center">
            <p className="font-bold leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px] whitespace-pre">Why it matters:</p>
          </div>
          <p className="absolute font-normal leading-[24px] left-[25.5px] text-[16px] text-neutral-950 top-[183px] tracking-[-0.3125px] w-[698px]">Clear decision boundaries reduce friction and speed up teamwork, especially as AI shortens the time between idea and action.</p>
        </div>
        {/* Decision Style Card */}
        <div className="bg-white border border-blue-100 border-solid flex flex-col gap-[16px] pb-px pt-[25px] px-[25px] rounded-[16px] w-full mt-8">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[16px] text-neutral-950 tracking-[-0.3125px]">My decision style</span>
              <Tooltip content="Describe your approach to decisions, e.g. data-informed, ship small, iterate."><span className="w-4 h-4 cursor-pointer text-text-muted"><img src={imgVector} alt="info" /></span></Tooltip>
            </div>
            <Button type="button" intent="ghost" size="sm" className="h-8 px-3 rounded-[10px] text-[14px] font-medium text-neutral-950" onClick={() => handleSkip("decisionStyle")}>{profile.skipped?.decisionStyle ? 'Skipped' : 'Skip'}</Button>
          </div>
          <div className="bg-[#f3f3f5] rounded-[10px] flex items-center px-3">
            <Textarea
              value={profile.decisionStyle}
              onChange={e => handleFieldChange("decisionStyle", e.target.value)}
              placeholder="e.g., Data-informed; ship small; iterate"
              rows={3}
              className="bg-transparent border-0 outline-none w-full text-[14px] text-[#717182] placeholder-[#717182] resize-none min-h-[64px]"
              disabled={profile.skipped?.decisionStyle}
            />
          </div>
        </div>
        {/* Decision Speed Card */}
        <div className="bg-white border border-blue-100 border-solid flex flex-col gap-[24px] pb-px pt-[25px] px-[25px] rounded-[16px] w-full mt-8">
          <div className="flex gap-[8px] items-center">
            <span className="font-medium text-[16px] text-neutral-950 tracking-[-0.3125px]">Decision speed</span>
            <Tooltip content="What do you decide quickly vs. slowly?"><span className="w-4 h-4 cursor-pointer text-text-muted"><img src={imgVector} alt="info" /></span></Tooltip>
          </div>
          <div className="flex flex-col gap-6 w-full mt-2">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#717182] text-[14px]">I decide instantly or quickly on:</span>
              <Textarea
                value={profile.decideQuickly}
                onChange={e => handleFieldChange("decideQuickly", e.target.value)}
                placeholder="e.g., • Copy changes\n• Minor UI tweaks\n• Small experiments"
                rows={3}
                className="bg-[#f3f3f5] border-0 rounded-[10px] w-full text-[14px] text-[#717182] placeholder-[#717182] resize-none min-h-[64px]"
                disabled={profile.skipped?.decideQuickly}
              />
              <Button type="button" intent="ghost" size="sm" className="h-8 px-3 rounded-[10px] text-[14px] font-medium text-neutral-950 self-end" onClick={() => handleSkip("decideQuickly")}>{profile.skipped?.decideQuickly ? 'Skipped' : 'Skip'}</Button>
            </div>
            <div className="flex flex-col gap-2 w-full mt-4">
              <span className="text-[#717182] text-[14px]">I need more time / alignment for:</span>
              <Textarea
                value={profile.needTime}
                onChange={e => handleFieldChange("needTime", e.target.value)}
                placeholder="e.g., • Pricing changes\n• Legal matters\n• Brand changes"
                rows={3}
                className="bg-[#f3f3f5] border-0 rounded-[10px] w-full text-[14px] text-[#717182] placeholder-[#717182] resize-none min-h-[64px]"
                disabled={profile.skipped?.needTime}
              />
              <Button type="button" intent="ghost" size="sm" className="h-8 px-3 rounded-[10px] text-[14px] font-medium text-neutral-950 self-end" onClick={() => handleSkip("needTime")}>{profile.skipped?.needTime ? 'Skipped' : 'Skip'}</Button>
            </div>
          </div>
        </div>
        {/* Risk Appetite & Guardrails Card */}
        <div className="bg-white border border-blue-100 border-solid flex flex-col gap-[24px] pb-px pt-[25px] px-[25px] rounded-[16px] w-full mt-8">
          <div className="flex gap-[8px] items-center">
            <span className="font-medium text-[16px] text-neutral-950 tracking-[-0.3125px]">Risk appetite & guardrails</span>
            <Tooltip content="What are you comfortable experimenting with? What are your guardrails?"><span className="w-4 h-4 cursor-pointer text-text-muted"><img src={imgVector} alt="info" /></span></Tooltip>
          </div>
          <div className="flex flex-col gap-6 w-full mt-2">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#717182] text-[14px]">I'm comfortable experimenting with:</span>
              <Textarea
                value={profile.experimentWith}
                onChange={e => handleFieldChange("experimentWith", e.target.value)}
                placeholder="e.g., Onboarding copy, order of steps"
                rows={3}
                className="bg-[#f3f3f5] border-0 rounded-[10px] w-full text-[14px] text-[#717182] placeholder-[#717182] resize-none min-h-[64px]"
                disabled={profile.skipped?.experimentWith}
              />
              <Button type="button" intent="ghost" size="sm" className="h-8 px-3 rounded-[10px] text-[14px] font-medium text-neutral-950 self-end" onClick={() => handleSkip("experimentWith")}>{profile.skipped?.experimentWith ? 'Skipped' : 'Skip'}</Button>
            </div>
            <div className="flex flex-col gap-2 w-full mt-4">
              <span className="text-[#717182] text-[14px]">I'm careful when ______ could be negatively affected:</span>
              <Textarea
                value={profile.guardrails}
                onChange={e => handleFieldChange("guardrails", e.target.value)}
                placeholder="e.g., Trust, data privacy, brand reputation, legal compliance"
                rows={3}
                className="bg-[#f3f3f5] border-0 rounded-[10px] w-full text-[14px] text-[#717182] placeholder-[#717182] resize-none min-h-[64px]"
                disabled={profile.skipped?.guardrails}
              />
              <Button type="button" intent="ghost" size="sm" className="h-8 px-3 rounded-[10px] text-[14px] font-medium text-neutral-950 self-end" onClick={() => handleSkip("guardrails")}>{profile.skipped?.guardrails ? 'Skipped' : 'Skip'}</Button>
            </div>
          </div>
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
      <div className="absolute bg-white border-[0px_1px_0px_0px] border-blue-100 border-solid h-[993px] left-0 top-0 w-[256px]" data-name="SectionEditor" data-node-id="1:1265">
        <div className="box-border flex flex-col gap-[24px] h-[993px] items-start overflow-clip pb-0 pl-[24px] pr-[25px] pt-[24px] rounded-[inherit] w-[256px]">
          <div className="h-[24px] w-full">
            <p className="font-normal leading-[24px] text-[16px] text-neutral-950 tracking-[-0.3125px]">Sections</p>
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <div className="h-[48px] rounded-[12px] w-full flex items-center px-4">
              <span className="text-neutral-950 text-[16px] font-medium">Principles</span>
              <span className="ml-auto bg-neutral-100 rounded-[10px] px-2 py-0.5 text-xs text-neutral-600 font-medium">○</span>
            </div>
            <div className="h-[48px] rounded-[12px] w-full flex items-center px-4">
              <span className="text-neutral-950 text-[16px] font-medium">Communication</span>
              <span className="ml-auto bg-neutral-100 rounded-[10px] px-2 py-0.5 text-xs text-neutral-600 font-medium">○</span>
            </div>
            <div className="bg-blue-50 h-[48px] rounded-[12px] w-full flex items-center px-4">
              <span className="text-[#0a66c2] text-[16px] font-medium">Decision Making</span>
              <span className="ml-auto bg-blue-100 rounded-[10px] px-2 py-0.5 text-xs text-[#1447e6] font-medium">...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
