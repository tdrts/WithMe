import React from "react";
import type { ProfileData } from "@/types/profile";

const imgIcon = "http://localhost:3845/assets/40c010260d2c47ca1d646c5d15bf66c0b846d122.svg";
const imgIcon1 = "http://localhost:3845/assets/c7958ead632a1d755ce91f9e69d372b3e3021773.svg";

interface PreviewScreenProps {
  data: ProfileData;
  onClose: () => void;
}

export const PreviewScreen: React.FC<PreviewScreenProps> = ({ data, onClose }) => {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Preview" data-node-id="18:579">
      <div className="bg-[#f8f9fa] min-h-screen w-full relative" data-name="PublicProfile" data-node-id="18:580">
        {/* Top bar */}
        <div className="flex gap-4 items-center bg-[#0a66c2] h-[56px] pl-[231.5px] pr-0 py-0 w-full" data-node-id="18:581">
          <button className="flex items-center h-[32px] rounded-[10px] px-4" onClick={onClose}>
            <img src={imgIcon} alt="Back" className="w-4 h-4 mr-2" />
            <span className="text-white text-[14px] font-medium">Back to edit</span>
          </button>
          <span className="text-white text-[16px] font-normal">Private preview — only you can see this</span>
        </div>
        {/* Main content */}
        <div className="absolute flex flex-col gap-6 left-[167.5px] pt-[32px] px-[32px] top-[56px] w-[1024px]" data-node-id="18:589">
          {/* Profile Card */}
          <div className="bg-white border border-blue-100 rounded-[16px] p-[33px] flex items-center gap-8 w-full" data-node-id="18:590">
            <div className="bg-[#0a66c2] rounded-full flex items-center justify-center w-20 h-20 text-white text-2xl font-semibold">
              {data?.coreValues?.[0]?.slice(0,2).toUpperCase() ?? "WW"}
            </div>
            <div>
              <h1 className="text-[30px] font-normal text-neutral-950">{data?.name ?? "Your Name"}</h1>
              <p className="text-[14px] text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          {/* Principles Section */}
          <div className="bg-white border border-gray-200 rounded-[16px] w-full p-8" data-node-id="18:599">
            <h2 className="text-[24px] text-neutral-950 mb-2">Principles</h2>
            <p className="text-[14px] text-gray-500 mb-6">Values, strengths, and what makes me tick</p>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Core values</h3>
                <p className="text-[16px] text-neutral-950">{data.coreValues?.join(", ") || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Strengths</h3>
                <ul className="list-disc pl-5 text-[16px] text-neutral-950">
                  {data.strengths?.length ? data.strengths.map((s, i) => <li key={i}>{s}</li>) : <li>—</li>}
                </ul>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Learning style</h3>
                <p className="text-[16px] text-neutral-950">{data.learningStyle || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Motivators</h3>
                <p className="text-[16px] text-neutral-950">{data.motivators || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Drainers</h3>
                <p className="text-[16px] text-neutral-950">{data.drainers || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">How I recharge</h3>
                <p className="text-[16px] text-neutral-950">{data.recharge || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Great day</h3>
                <p className="text-[16px] text-neutral-950">{data.greatDay || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Great week</h3>
                <p className="text-[16px] text-neutral-950">{data.greatWeek || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Focus hours</h3>
                <p className="text-[16px] text-neutral-950">{data.focusHours || "—"}</p>
              </div>
            </div>
          </div>
          {/* Communication Section */}
          <div className="bg-white border border-gray-200 rounded-[16px] w-full p-8" data-node-id="18:665">
            <h2 className="text-[24px] text-neutral-950 mb-2">Communication</h2>
            <p className="text-[14px] text-gray-500 mb-6">How I collaborate and share feedback</p>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Channels</h3>
                <ul className="list-disc pl-5 text-[16px] text-neutral-950">
                  {data.channels?.length ? data.channels.map((c, i) => <li key={i}>I prefer {c.channel} for {c.use}</li>) : <li>—</li>}
                </ul>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">How I give feedback</h3>
                <p className="text-[16px] text-neutral-950">{data.giveFeedback || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">How I like to receive feedback</h3>
                <p className="text-[16px] text-neutral-950">{data.receiveFeedback || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">How I deal with conflict</h3>
                <p className="text-[16px] text-neutral-950">{data.conflict || "—"}</p>
              </div>
            </div>
          </div>
          {/* Decision Making Section */}
          <div className="bg-white border border-gray-200 rounded-[16px] w-full p-8" data-node-id="18:701">
            <h2 className="text-[24px] text-neutral-950 mb-2">Decision Making</h2>
            <p className="text-[14px] text-gray-500 mb-6">How I think through choices and trade-offs</p>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">My decision style</h3>
                <p className="text-[16px] text-neutral-950">{data.decisionStyle || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Decide quickly on</h3>
                <p className="text-[16px] text-neutral-950">{data.decideQuickly || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Need more time/alignment for</h3>
                <p className="text-[16px] text-neutral-950">{data.needTime || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Comfortable experimenting with</h3>
                <p className="text-[16px] text-neutral-950">{data.experimentWith || "—"}</p>
              </div>
              <div>
                <h3 className="text-[#0a66c2] text-[18px]">Careful when these could be affected</h3>
                <p className="text-[16px] text-neutral-950">{data.guardrails || "—"}</p>
              </div>
            </div>
          </div>
          {/* Copy buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-white border border-[#bedbff] rounded-[10px] h-[36px] flex items-center px-4">
              <img src={imgIcon1} alt="Copy" className="w-4 h-4 mr-2" />
              <span className="text-[#0a66c2] text-[14px] font-medium">Copy as text</span>
            </button>
            <button className="bg-white border border-[#bedbff] rounded-[10px] h-[36px] flex items-center px-4">
              <img src={imgIcon1} alt="Copy" className="w-4 h-4 mr-2" />
              <span className="text-[#0a66c2] text-[14px] font-medium">Copy LLM context</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
