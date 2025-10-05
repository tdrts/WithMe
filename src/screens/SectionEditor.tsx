import React from "react";

interface SectionEditorProps {
  sectionId: string;
  onBack: () => void;
  onNextQuestion?: () => void;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({ sectionId, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <button className="text-sm font-semibold text-[#0A66C2]" onClick={onBack}>
          ← Back to dashboard
        </button>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 capitalize">{sectionId.replace("-", " ")}</h2>
          <p className="mt-2 text-sm text-slate-600">Detailed question editor coming soon.</p>
        </div>
      </div>
    </div>
  );
};
