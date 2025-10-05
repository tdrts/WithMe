import React from "react";
import { asset } from "@/lib/assets";
import { useToast } from "./ToastProvider";

const imgIcon1 = asset("c03bb0b4cb43d3219bf5634208db55763fe86e36.svg");
const imgIconClose = asset("9e12764e91cf36e92c672b4ceb011cb1b5c0cb56.svg");

export interface ExportModalProps {
  open: boolean;
  onClose: () => void;
  text: string;
  llmPrompt: string;
}

export default function ExportModal({ open, onClose, text, llmPrompt }: ExportModalProps) {
  const { showToast } = useToast();
  if (!open) return null;

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    showToast("Profile text copied!");
  };
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(llmPrompt);
    showToast("LLM prompt copied!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="relative w-[600px] max-w-full rounded-[12px] border border-[rgba(0,0,0,0.1)] bg-white p-0 shadow-xl">
        <button
          className="absolute right-4 top-4 size-[16px] rounded-[2px] opacity-70"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={imgIconClose} alt="Close" className="size-full" />
        </button>
        <div className="flex flex-col gap-2 p-6">
          <div className="mb-2 flex items-center gap-2">
            <img src={imgIcon1} alt="Export" className="size-5" />
            <h2 className="text-[18px] font-semibold text-neutral-950 tracking-[-0.44px]">Export your profile</h2>
          </div>
          <p className="mb-2 text-[14px] text-[#717182]">Copy your profile as text or use the LLM prompt below.</p>
          <textarea
            className="mb-4 h-64 w-full resize-none rounded-[10px] border border-gray-200 bg-[#f3f3f5] p-3 text-[14px] font-mono text-neutral-950"
            value={text}
            readOnly
          />
          <button
            className="mb-4 flex h-9 w-full items-center justify-center rounded-[10px] bg-[#0a66c2] text-[14px] font-medium text-white"
            onClick={handleCopyText}
          >
            Copy text
          </button>
          <div className="mb-1 text-[16px] font-semibold text-neutral-950">LLM prompt</div>
          <textarea
            className="mb-4 h-48 w-full resize-none rounded-[10px] border border-gray-200 bg-[#f3f3f5] p-3 text-[14px] font-mono text-neutral-950"
            value={llmPrompt}
            readOnly
          />
          <button
            className="flex h-9 w-full items-center justify-center rounded-[10px] bg-[#0a66c2] text-[14px] font-medium text-white"
            onClick={handleCopyPrompt}
          >
            Copy LLM prompt
          </button>
        </div>
      </div>
    </div>
  );
}
