import React from "react";

import type { ProfileData } from "@/types/profile";

interface PublicProfileProps {
  data: ProfileData;
}

export const PublicProfile: React.FC<PublicProfileProps> = ({ data }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A66C2] text-2xl font-semibold text-white">
            {(data?.coreValues?.[0] ?? "WW").slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Work With Me Profile</h1>
            <p className="text-sm text-slate-600">Share this with teammates to help them collaborate with you.</p>
          </div>
        </header>
        <article className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm text-slate-600">Public profile layout to be filled in with actual data.</p>
        </article>
      </div>
    </div>
  );
};
