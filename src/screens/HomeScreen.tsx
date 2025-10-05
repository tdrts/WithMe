import React from "react";

interface HomeScreenProps {
  onOpenSection: (sectionId: string) => void;
  onPreviewProfile: () => void;
}

const sections = [
  { id: "principles", title: "Principles", description: "Values & Motivations", total: 9 },
  { id: "communication", title: "Communication", description: "Collaboration Preferences", total: 4 },
  { id: "decision-making", title: "Decision Making", description: "Thinking & Choice Patterns", total: 5 }
];

export const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenSection, onPreviewProfile }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-slate-700 shadow-sm">
          <h2 className="text-xl font-semibold text-[#0A66C2]">Why share this?</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Because clarity builds trust. Sharing how you operate helps others make better decisions, give better feedback, and collaborate without friction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{section.description}</p>
              </div>
              <button
                className="mt-auto rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#004182]"
                onClick={() => onOpenSection(section.id)}
              >
                Continue
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Preview your profile</h3>
            <p className="mt-1 text-sm text-slate-600">See what teammates will experience before you share it.</p>
          </div>
          <button className="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-[#0A66C2] hover:bg-blue-50" onClick={onPreviewProfile}>
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};
