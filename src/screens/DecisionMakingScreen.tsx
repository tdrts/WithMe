import React from "react";
import { asset } from "@/lib/assets";
import { Button } from "../components/ui/Button";
import { Textarea } from "../components/ui/Textarea";
import { Tooltip } from "../components/ui/Tooltip";
import type { ProfileData } from "../types/profile";

const imgIcon = asset("43373d9bb33db974993c1026c0dcd8a407a3357c.svg");
const imgVector = asset("4a3585f3cf08b0c86c40fb8cafed8c9b960d31bd.svg");
const imgVector1 = asset("eeb1c5c5422b11fd11c599f16d53cb0701779525.svg");
const imgVector2 = asset("e003594b7b007b842fae03818a3d3e38f3b1bf21.svg");

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
    <div className="bg-white relative size-full" data-name="DecisionMaking" data-node-id="1:1181">
      <div className="absolute left-0 top-0 h-[1642px] w-[1359px] bg-[#f8f9fa] px-[167.5px] pb-0 pl-[423.5px] pt-[32px]" data-name="SectionEditor" data-node-id="1:1182">
        <div className="relative h-[116px] w-full" data-name="Container" data-node-id="1:1183">
          <button
            type="button"
            className="flex h-[36px] items-center gap-2 rounded-[10px] text-[#0a66c2]"
            onClick={onExit}
          >
            <img alt="" className="size-4" src={imgIcon} />
            <span className="text-[14px] font-medium tracking-[-0.1504px]">Back to Home</span>
          </button>
          <h1 className="absolute left-0 top-[52px] text-[30px] font-normal tracking-[0.3955px] text-neutral-950">
            Decision Making
          </h1>
          <p className="absolute left-0 top-[96px] text-[14px] italic tracking-[-0.1504px] text-gray-500">
            How you decide sets the pace — share how people should involve you.
          </p>
        </div>

        <div className="relative w-full rounded-[16px] border border-blue-100 bg-blue-50">
          <div className="flex flex-col gap-4 p-6">
            <p className="text-[16px] font-bold tracking-[-0.3125px] text-neutral-950">Share your pace, principles, and guardrails.</p>
            <p className="text-[16px] tracking-[-0.3125px] text-neutral-950">
              Make it clear where you move fast, where you go deep, and where you say no. Teams and AI copilots can make smarter
              calls without losing momentum.
            </p>
            <img src={imgVector1} alt="Illustration" className="pointer-events-none select-none" />
          </div>
        </div>

        <section className="mt-8 flex flex-col gap-4">
          {["decisionStyle", "decideQuickly", "needTime", "experimentWith", "guardrails"].map((key) => {
            const typedKey = key as SectionKey;
            const meta = {
              decisionStyle: {
                label: "My decision style",
                tooltip: "How you typically make decisions (e.g., collaborative, fast-paced, consensus-based)",
                placeholder: "Describe your default approach to decisions"
              },
              decideQuickly: {
                label: "I decide quickly on",
                tooltip: "The kinds of decisions you can make fast",
                placeholder: "List quick decisions you’re comfortable making"
              },
              needTime: {
                label: "I need more time or alignment for",
                tooltip: "Decisions where you slow down or loop others in",
                placeholder: "List decisions that need more context"
              },
              experimentWith: {
                label: "I'm comfortable experimenting with",
                tooltip: "Where you like to test and learn",
                placeholder: "List safe-to-try experiments"
              },
              guardrails: {
                label: "I'm careful when these could be affected",
                tooltip: "What guardrails should others watch before shipping or deciding?",
                placeholder: "List your guardrails"
              }
            }[typedKey];

            return (
              <div key={typedKey} className="flex flex-col gap-4 rounded-[16px] border border-blue-100 bg-white p-6">
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
                    onClick={() => handleSkip(typedKey)}
                  >
                    {profile.skipped?.[typedKey] ? "Unskip" : "Skip"}
                  </Button>
                </div>
                <Textarea
                  value={profile[typedKey] ?? ""}
                  onChange={(event) => handleFieldChange(typedKey, event.target.value)}
                  placeholder={meta.placeholder}
                  rows={4}
                  className="min-h-[120px] resize-none rounded-[12px] border border-transparent bg-[#f3f3f5] px-4 py-3 text-[14px] text-[#717182]"
                  disabled={profile.skipped?.[typedKey]}
                />
              </div>
            );
          })}
        </section>

        <div className="mt-8 flex items-center justify-between border-t border-blue-100 pt-6">
          <Button type="button" intent="outline" size="md" className="h-[36px] rounded-[10px]" onClick={onExit}>
            Save & Exit
          </Button>
          <Button type="button" intent="primary" size="md" className="h-[36px] rounded-[10px]" onClick={onContinue}>
            Save & Continue
          </Button>
        </div>
      </div>

      <aside className="absolute left-0 top-0 h-[993px] w-[256px] border-r border-blue-100 bg-white">
        <div className="flex h-full flex-col gap-6 px-6 py-6">
          <p className="text-[16px] text-neutral-950">Sections</p>
          <nav className="flex flex-col gap-2">
            <button type="button" className="flex h-12 items-center justify-between rounded-[12px] px-4 text-left text-[16px] text-neutral-950">
              Principles
              <span className="rounded-[10px] bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">○</span>
            </button>
            <button type="button" className="flex h-12 items-center justify-between rounded-[12px] px-4 text-left text-[16px] text-neutral-950">
              Communication
              <span className="rounded-[10px] bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">○</span>
            </button>
            <button type="button" className="flex h-12 items-center justify-between rounded-[12px] bg-blue-50 px-4 text-left text-[16px] text-[#0a66c2]">
              Decision Making
              <span className="rounded-[10px] bg-blue-100 px-2 py-0.5 text-xs text-[#1447e6]">•••</span>
            </button>
          </nav>
        </div>
      </aside>
    </div>
  );
}
