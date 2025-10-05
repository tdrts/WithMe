// CommunicationScreen.tsx
// Figma MCP-driven, pixel-perfect UI for Communication section
// (Initial implementation, will wire up interactivity and reuse components next)

import React from "react";
import { asset } from "@/lib/assets";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Tooltip } from "../components/ui/Tooltip";
import type { ProfileData } from "../types/profile";

type SectionKey = "giveFeedback" | "receiveFeedback" | "conflict";

const imgIcon = asset("43373d9bb33db974993c1026c0dcd8a407a3357c.svg");
const imgVector = asset("4a3585f3cf08b0c86c40fb8cafed8c9b960d31bd.svg");
const imgVector1 = asset("eeb1c5c5422b11fd11c599f16d53cb0701779525.svg");
const imgVector2 = asset("e003594b7b007b842fae03818a3d3e38f3b1bf21.svg");
const imgIcon1 = asset("a4424749b725e4cfe9cbc3c75ae72d36fa9b4ea6.svg");

interface CommunicationScreenProps {
  profile: ProfileData;
  onChange: (profile: ProfileData) => void;
  onExit: () => void;
  onContinue: () => void;
}

export default function CommunicationScreen({ profile, onChange, onExit, onContinue }: CommunicationScreenProps) {
  // Handlers for channels
  const handleChannelChange = (idx: number, key: "channel" | "use", value: string) => {
    const newChannels = profile.channels.map((channel, index) =>
      index === idx ? { ...channel, [key]: value } : channel
    );
    onChange({ ...profile, channels: newChannels });
  };

  const handleAddChannel = () => {
    onChange({ ...profile, channels: [...profile.channels, { channel: "", use: "" }] });
  };

  const handleRemoveChannel = (idx: number) => {
    if (profile.channels.length > 1) {
      onChange({ ...profile, channels: profile.channels.filter((_, index) => index !== idx) });
    }
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
          <button
            type="button"
            className="absolute left-0 top-0 flex h-[36px] items-center gap-2 rounded-[10px] px-3 text-[#0a66c2]"
            onClick={onExit}
          >
            <img alt="" className="size-4" src={imgIcon} />
            <span className="text-[14px] font-medium tracking-[-0.1504px]">Back to Home</span>
          </button>
          <div className="absolute left-0 top-[52px]">
            <h1 className="text-[30px] font-normal tracking-[0.3955px] text-neutral-950">Communication</h1>
          </div>
          <p className="absolute left-0 top-[96px] text-[14px] italic tracking-[-0.1504px] text-gray-500">
            Short and specific beats long and vague.
          </p>
        </div>

        {/* Blue Card */}
        <div className="relative w-full rounded-[16px] border border-blue-100 bg-blue-50">
          <div className="flex flex-col gap-4 p-6">
            <p className="text-[16px] font-bold tracking-[-0.3125px] text-neutral-950">Make collaboration smoother.</p>
            <p className="text-[16px] tracking-[-0.3125px] text-neutral-950">
              The fastest way to build trust is to make your communication predictable. Defining how you share, respond,
              and handle feedback saves everyone time — especially when teams work across tools, time zones, and AI assistants.
            </p>
            <img src={imgVector1} alt="Illustration" className="pointer-events-none select-none" />
          </div>
        </div>

        {/* Channels */}
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-medium tracking-[-0.44px] text-neutral-950">Communication channels</h2>
            <Tooltip content="Share which channels you use and why each matters">
              <span className="size-4 cursor-pointer text-[#0a66c2]">
                <img src={imgVector} alt="info" />
              </span>
            </Tooltip>
          </div>
          <p className="text-[14px] text-[#717182]">
            List the channels you use and what they’re good for. E.g., Slack for async updates, Zoom for workshops.
          </p>
          <div className="space-y-3">
            {profile.channels.length === 0 && (
              <div className="rounded-[12px] border border-blue-100 bg-white p-4 text-[14px] text-[#717182]">
                No channels yet. Add one to get started.
              </div>
            )}
            {profile.channels.map((channel, index) => (
              <div key={`${channel.channel}-${index}`} className="flex flex-col gap-3 rounded-[12px] border border-blue-100 bg-white p-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <Input
                    label="Channel"
                    placeholder="e.g., Slack"
                    value={channel.channel}
                    onChange={(event) => handleChannelChange(index, "channel", event.target.value)}
                  />
                  <Input
                    label="What it's for"
                    placeholder="Async updates and quick questions"
                    value={channel.use}
                    onChange={(event) => handleChannelChange(index, "use", event.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="button"
                    size="sm"
                    intent="ghost"
                    className="rounded-[10px]"
                    onClick={() => handleRemoveChannel(index)}
                    disabled={profile.channels.length <= 1}
                  >
                    Remove channel
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button type="button" size="sm" intent="outline" className="rounded-[10px]" onClick={handleAddChannel}>
            Add channel
          </Button>
        </div>

        {/* Text Areas */}
        <div className="flex flex-col gap-[16px]">
          {["giveFeedback", "receiveFeedback", "conflict"].map((key) => {
            const typedKey = key as SectionKey;
            const sectionMeta = {
              giveFeedback: {
                label: "How I give feedback",
                tooltip: "Share your preferred feedback style, e.g. direct, written, async vs live.",
                placeholder: "e.g., Direct, specific, and delivered quickly"
              },
              receiveFeedback: {
                label: "How I like to receive feedback",
                tooltip: "What kind of feedback style do you respond to best?",
                placeholder: "e.g., Timely, contextual, and tied to goals"
              },
              conflict: {
                label: "How I deal with conflict",
                tooltip: "Describe your approach to conflict, e.g. state concern + desired outcome; propose options.",
                placeholder: "e.g., State concern + desired outcome; propose options"
              }
            }[typedKey];

            return (
              <div key={typedKey} className="flex flex-col gap-4 rounded-[16px] border border-blue-100 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-medium text-neutral-950">{sectionMeta.label}</span>
                    <Tooltip content={sectionMeta.tooltip}>
                      <span className="size-4 cursor-pointer text-[#0a66c2]">
                        <img src={imgVector2} alt="info" />
                      </span>
                    </Tooltip>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    intent="ghost"
                    className="rounded-[10px]"
                    onClick={() => handleSkip(typedKey)}
                  >
                    {profile.skipped?.[typedKey] ? "Unskip" : "Skip"}
                  </Button>
                </div>

                <Textarea
                  value={profile[typedKey] ?? ""}
                  onChange={(event) => handleFieldChange(typedKey, event.target.value)}
                  placeholder={sectionMeta.placeholder}
                  rows={3}
                  className="min-h-[96px] resize-none rounded-[12px] border border-transparent bg-[#f3f3f5] px-4 py-3 text-[14px] text-[#717182]"
                  disabled={profile.skipped?.[typedKey]}
                />
              </div>
            );
          })}
        </div>

        {/* Save/Continue Buttons */}
        <div className="mt-8 flex items-center justify-between border-t border-blue-100 pt-6">
          <Button type="button" intent="outline" size="md" className="h-[36px] rounded-[10px]" onClick={onExit}>
            Save & Exit
          </Button>
          <div className="flex items-center gap-3">
            <img src={imgIcon1} alt="progress" className="size-4" />
            <Button type="button" intent="primary" size="md" className="h-[36px] rounded-[10px]" onClick={onContinue}>
              Save & Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation (static, for Figma parity) */}
      <aside className="absolute left-0 top-0 h-[993px] w-[256px] border-r border-blue-100 bg-white">
        <div className="flex h-full flex-col gap-6 px-6 py-6">
          <p className="text-[16px] text-neutral-950">Sections</p>
          <nav className="flex flex-col gap-2">
            <button type="button" className="flex h-12 items-center justify-between rounded-[12px] px-4 text-left text-[16px] text-neutral-950">
              Principles
              <span className="rounded-[10px] bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">○</span>
            </button>
            <button type="button" className="flex h-12 items-center justify-between rounded-[12px] bg-blue-50 px-4 text-left text-[16px] text-[#0a66c2]">
              Communication
              <span className="rounded-[10px] bg-blue-100 px-2 py-0.5 text-xs text-[#1447e6]">•••</span>
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
