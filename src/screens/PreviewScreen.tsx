import React from "react";
import { asset } from "@/lib/assets";
import type { ProfileData } from "@/types/profile";
import { useToast } from "../components/ToastProvider";

const imgIcon = asset("40c010260d2c47ca1d646c5d15bf66c0b846d122.svg");
const imgIcon1 = asset("c7958ead632a1d755ce91f9e69d372b3e3021773.svg");

interface PreviewScreenProps {
  data: ProfileData;
  onClose: () => void;
}

export const PreviewScreen: React.FC<PreviewScreenProps> = ({ data, onClose }) => {
  const { showToast } = useToast();

  // Generate export text and LLM prompt as in HomeScreen
  const exportText = `WORK WITH ME — Tudor Tise\n\nPRINCIPLES\n• Core values: ${data.coreValues?.join(", ") || "—"}\n• Strengths: ${data.strengths?.join('; ') || "—"}\n• Learning style: ${data.learningStyle || "—"}\n• Motivators: ${data.motivators || "—"}\n• Drainers: ${data.drainers || "—"}\n• How I recharge: ${data.recharge || "—"}\n• Great day: ${data.greatDay || "—"}\n• Great week: ${data.greatWeek || "—"}\n• Focus hours: ${data.focusHours || "—"}\n\nCOMMUNICATION\n• Channels:\n${data.channels && data.channels.length > 0 ? data.channels.map((c: any) => `  - I prefer ${c.channel} for ${c.use}`).join("\n") : "  —"}\n• How I give feedback: ${data.giveFeedback || "—"}\n• How I like to receive feedback: ${data.receiveFeedback || "—"}\n• How I deal with conflict: ${data.conflict || "—"}\n\nDECISION MAKING\n• My decision style: ${data.decisionStyle || "—"}\n• Decision speed:\n  - Decide quickly on: ${data.decideQuickly || "—"}\n  - Need more time/alignment for: ${data.needTime || "—"}\n• Risk appetite & guardrails:\n  - Comfortable experimenting with: ${data.experimentWith || "—"}\n  - Careful when these could be affected: ${data.guardrails || "—"}\n\nLast updated: ${new Date().toLocaleDateString()}\n`;

  const llmPrompt = `SYSTEM:\nYou are a helpful teammate who adapts communication and feedback to a person's \"How I work\" profile. Follow their preferences strictly.\n\nUSER PROFILE (STRUCTURED):\n- Core values: ${data.coreValues?.join(", ") || "—"}\n- Strengths: ${data.strengths?.join('; ') || "—"}\n- Learning style: ${data.learningStyle || "—"}\n- Motivators: ${data.motivators || "—"}\n- Drainers: ${data.drainers || "—"}\n- Recharge: ${data.recharge || "—"}\n- Great day: ${data.greatDay || "—"}\n- Great week: ${data.greatWeek || "—"}\n- Focus hours: ${data.focusHours || "—"}\n\nCOMMUNICATION PREFERENCES:\n- Channels:\n${data.channels && data.channels.length > 0 ? data.channels.map((c: any) => `  - I prefer ${c.channel} for ${c.use}`).join("\n") : "  —"}\n- Give feedback: ${data.giveFeedback || "—"}\n- Receive feedback: ${data.receiveFeedback || "—"}\n- Conflict: ${data.conflict || "—"}\n\nDECISION STYLE:\n- Style: ${data.decisionStyle || "—"}\n- Decide quickly on: ${data.decideQuickly || "—"}\n- Need more time/alignment for: ${data.needTime || "—"}\n- Comfortable experimenting with: ${data.experimentWith || "—"}\n- Guardrails (be careful when…): ${data.guardrails || "—"}\n\nTASK:\nGiven the profile above, rewrite the following message/document to match their preferences (tone, channel, length, structure). If content is missing or conflicts with guardrails, flag it and propose safe alternatives.`;
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="border-b border-blue-200 bg-[#E6F0FB] py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <span className="text-sm font-semibold text-[#0A66C2]">Private preview — only you can see this</span>
          <button className="text-sm font-semibold text-[#0A66C2]" onClick={onClose}>
            Exit preview
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <header className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A66C2] text-2xl font-semibold text-white">
              {data?.name?.slice(0, 1) ?? "W"}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Your Work With Me profile</h1>
              <p className="text-sm text-slate-600">Last updated just now</p>
            </div>
          </header>
          <section className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
            <p>Profile preview content will render here once the editor is complete.</p>
          </section>
          <footer className="mt-8 flex flex-wrap items-center gap-3">
            <button
              className="flex items-center gap-2 rounded-[10px] border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-[#0A66C2] hover:bg-blue-50"
              onClick={() => {
                navigator.clipboard.writeText(exportText);
                showToast("Copied as text");
              }}
            >
              <img src={imgIcon} alt="copy" className="size-4" />
              Copy as text
            </button>
            <button
              className="flex items-center gap-2 rounded-[10px] bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white hover:bg-[#004182]"
              onClick={() => {
                navigator.clipboard.writeText(llmPrompt);
                showToast("LLM context copied");
              }}
            >
              <img src={imgIcon1} alt="AI" className="size-4" />
              Copy LLM context
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};
