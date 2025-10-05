import React from "react";

import type { ProfileData } from "@/types/profile";

interface PreviewScreenProps {
  data: ProfileData;
  onClose: () => void;
}

export const PreviewScreen: React.FC<PreviewScreenProps> = ({ data, onClose }) => {
  return (
    <div className="min-h-screen bg-slate-50">
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
              {data?.coreValues?.[0]?.[0] ?? "W"}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Your Work With Me profile</h1>
              <p className="text-sm text-slate-600">Last updated just now</p>
            </div>
          </header>
          <section className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
            <p>Profile preview content will render here once the editor is complete.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
