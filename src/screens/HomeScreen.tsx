
import React, { useState } from "react";
import ShareModal from "../components/ShareModal";
import ExportModal from "../components/ExportModal";
import { asset } from "@/lib/assets";
import EmailSignatureModal from "../components/EmailSignatureModal";
import type { ProfileData } from "../types/profile";
const imgIcon = asset("f8a6f7340b79fe6e21dc80d9f5d1f5ebef58958f.svg");
const imgIcon1 = asset("c03bb0b4cb43d3219bf5634208db55763fe86e36.svg");
const imgIcon2 = asset("68f3aa154402aeb68c72a62e12e5bf77bd821e90.svg");
const imgIcon3 = asset("79dc94bc2402dd0a76064cab2454d188a054d5ff.svg");


type HomeScreenProps = {
  onOpenSection: (sectionId: string) => void;
  onPreviewProfile: () => void;
  profile: ProfileData;
};

export default function HomeScreen({ onOpenSection, onPreviewProfile, profile }: HomeScreenProps) {
  const [shareOpen, setShareOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [emailSigOpen, setEmailSigOpen] = useState(false);

  // --- Export text generation ---
  const exportText = `WORK WITH ME — Tudor Tise\n\nPRINCIPLES\n• Core values: ${profile.coreValues?.join(", ") || "—"}\n• Strengths: ${profile.strengths?.join('; ') || "—"}\n• Learning style: ${profile.learningStyle || "—"}\n• Motivators: ${profile.motivators || "—"}\n• Drainers: ${profile.drainers || "—"}\n• How I recharge: ${profile.recharge || "—"}\n• Great day: ${profile.greatDay || "—"}\n• Great week: ${profile.greatWeek || "—"}\n• Focus hours: ${profile.focusHours || "—"}\n\nCOMMUNICATION\n• Channels:\n${profile.channels && profile.channels.length > 0 ? profile.channels.map((c: any) => `  - I prefer ${c.channel} for ${c.use}`).join("\n") : "  —"}\n• How I give feedback: ${profile.giveFeedback || "—"}\n• How I like to receive feedback: ${profile.receiveFeedback || "—"}\n• How I deal with conflict: ${profile.conflict || "—"}\n\nDECISION MAKING\n• My decision style: ${profile.decisionStyle || "—"}\n• Decision speed:\n  - Decide quickly on: ${profile.decideQuickly || "—"}\n  - Need more time/alignment for: ${profile.needTime || "—"}\n• Risk appetite & guardrails:\n  - Comfortable experimenting with: ${profile.experimentWith || "—"}\n  - Careful when these could be affected: ${profile.guardrails || "—"}\n\nLast updated: ${new Date().toLocaleDateString()}\n`;

  const llmPrompt = `SYSTEM:\nYou are a helpful teammate who adapts communication and feedback to a person's \"How I work\" profile. Follow their preferences strictly.\n\nUSER PROFILE (STRUCTURED):\n- Core values: ${profile.coreValues?.join(", ") || "—"}\n- Strengths: ${profile.strengths?.join('; ') || "—"}\n- Learning style: ${profile.learningStyle || "—"}\n- Motivators: ${profile.motivators || "—"}\n- Drainers: ${profile.drainers || "—"}\n- Recharge: ${profile.recharge || "—"}\n- Great day: ${profile.greatDay || "—"}\n- Great week: ${profile.greatWeek || "—"}\n- Focus hours: ${profile.focusHours || "—"}\n\nCOMMUNICATION PREFERENCES:\n- Channels:\n${profile.channels && profile.channels.length > 0 ? profile.channels.map((c: any) => `  - I prefer ${c.channel} for ${c.use}`).join("\n") : "  —"}\n- Give feedback: ${profile.giveFeedback || "—"}\n- Receive feedback: ${profile.receiveFeedback || "—"}\n- Conflict: ${profile.conflict || "—"}\n\nDECISION STYLE:\n- Style: ${profile.decisionStyle || "—"}\n- Decide quickly on: ${profile.decideQuickly || "—"}\n- Need more time/alignment for: ${profile.needTime || "—"}\n- Comfortable experimenting with: ${profile.experimentWith || "—"}\n- Guardrails (be careful when…): ${profile.guardrails || "—"}\n\nTASK:\nGiven the profile above, rewrite the following message/document to match their preferences (tone, channel, length, structure). If content is missing or conflicts with guardrails, flag it and propose safe alternatives.`;

  return (
    <div>
      <div className="bg-white relative size-full" data-name="Home" data-node-id="1:118">
        <div className="absolute bg-[#f8f9fa] box-border content-stretch flex flex-col gap-[32px] h-[1052px] items-start left-0 pb-0 pt-[32px] px-[263.5px] top-0 w-[1359px]" data-name="HomeScreen" data-node-id="1:119">
        <div className="content-stretch flex flex-col gap-[16px] h-[378px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:120">
          <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="1:121">
            <div className="h-[36px] relative shrink-0 w-[182.289px]" data-name="Heading 1" data-node-id="1:122">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-start relative w-[182.289px]">
                <p className="font-inter font-normal leading-[36px] not-italic relative shrink-0 text-[30px] text-neutral-950 text-nowrap tracking-[0.3955px] whitespace-pre" data-node-id="1:123">
                  Work With Me
                </p>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-[464.805px]" data-name="Container" data-node-id="1:124">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[464.805px]">
                <button className="bg-white border border-[#bedbff] border-solid h-[32px] relative rounded-[10px] shrink-0 w-[90.219px] flex items-center" data-name="Button" data-node-id="1:125" type="button" onClick={() => setShareOpen(true)}>
                  <img alt="" className="block max-w-none size-[16px] ml-[11px] mr-[14px]" src={imgIcon} />
                  <span className="font-inter font-medium leading-[20px] not-italic text-[#0a66c2] text-[14px] text-nowrap tracking-[-0.1504px]">Share</span>
                </button>
                <button className="bg-white border border-[#bedbff] border-solid h-[32px] relative rounded-[10px] shrink-0 w-[95.344px] flex items-center" data-name="Button" data-node-id="1:133" type="button" onClick={() => setExportOpen(true)}>
                  <img alt="" className="block max-w-none size-[16px] ml-[11px] mr-[14px]" src={imgIcon1} />
                  <span className="font-inter font-medium leading-[20px] not-italic text-[#0a66c2] text-[14px] text-nowrap tracking-[-0.1504px]">Export</span>
                </button>
                <button className="bg-white border border-[#bedbff] border-solid h-[32px] relative rounded-[10px] shrink-0 flex-1 min-w-0 flex items-center" data-name="Button" data-node-id="1:139" type="button" onClick={() => setEmailSigOpen(true)}>
                  <img alt="" className="block max-w-none size-[16px] ml-[11px] mr-[14px]" src={imgIcon2} />
                  <span className="font-inter font-medium leading-[20px] not-italic text-[#0a66c2] text-[14px] text-nowrap tracking-[-0.1504px]">Email signature</span>
                </button>
                <button className="bg-[#0a66c2] h-[32px] relative rounded-[10px] shrink-0 w-[102.086px] flex items-center" data-name="Button" data-node-id="1:144" type="button" onClick={onPreviewProfile}>
                  <img alt="" className="block max-w-none size-[16px] ml-[10px] mr-[14px]" src={imgIcon3} />
                  <span className="font-inter font-medium leading-[20px] not-italic text-[14px] text-nowrap text-white tracking-[-0.1504px]">Preview</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-[#bedbff] border-solid h-[326px] relative rounded-[12px] shrink-0 w-full" data-name="Container" data-node-id="1:149">
            <div className="absolute content-stretch flex h-[19px] items-start left-[25px] top-[27.5px] w-[425.516px]" data-name="Bold Text" data-node-id="1:150">
              <p className="font-inter font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre" data-node-id="1:151">
                Understand yourself. Help others work better with you.
              </p>
            </div>
            <div className="absolute h-[48px] left-[25px] top-[61px] w-[782px]" data-name="Paragraph" data-node-id="1:152">
              <p className="absolute font-inter font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre" data-node-id="1:153">AI made teamwork faster, but it didn't make understanding people easier. This space helps you reflect on</p>
              <span className="absolute font-inter font-normal italic leading-[24px] left-0 text-[16px] text-gray-800 text-nowrap top-[26.5px] tracking-[-0.3125px] whitespace-pre" data-node-id="1:155">how you work best</span>
              <span className="absolute font-inter font-normal leading-[24px] left-[136.12px] not-italic text-[16px] text-gray-800 text-nowrap top-[23.5px] tracking-[-0.3125px] whitespace-pre" data-node-id="1:156">— so your teammates and tools can adapt to you, not the other way around.</span>
            </div>
            <div className="absolute content-stretch flex h-[19px] items-start left-[25px] top-[123.5px] w-[123.438px]" data-name="Bold Text" data-node-id="1:157">
              <p className="font-inter font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre" data-node-id="1:158">Why share this?</p>
            </div>
            <div className="absolute h-[48px] left-[25px] top-[157px] w-[782px]" data-name="Paragraph" data-node-id="1:159">
              <p className="absolute font-inter font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-800 top-[-0.5px] tracking-[-0.3125px] w-[730px]" data-node-id="1:160">Because clarity builds trust. Sharing how you operate helps others make better decisions, give better feedback, and collaborate without friction.</p>
            </div>
            <div className="absolute content-stretch flex h-[19px] items-start left-[25px] top-[219.5px] w-[497.594px]" data-name="Bold Text" data-node-id="1:161">
              <p className="font-inter font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre" data-node-id="1:162">And hey — maybe if you share yours, others will share theirs too.</p>
            </div>
            <div className="absolute h-[48px] left-[25px] top-[253px] w-[782px]" data-name="Paragraph" data-node-id="1:163">
              <p className="absolute font-inter font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-800 top-[-0.5px] tracking-[-0.3125px] w-[779px]" data-node-id="1:164">Then we (and our AI copilots) can finally understand each other a little better — and turn that understanding into more meaningful, impactful work.</p>
            </div>
          </div>
        </div>
        {/* Progress Cards */}
        <div className="content-stretch flex flex-col gap-[16px] h-[578px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:165">
          {/* Principles Card */}
          <div className="bg-white border border-blue-100 border-solid box-border content-stretch flex flex-col gap-[16px] h-[182px] items-start pb-px pt-[25px] px-[25px] relative rounded-[16px] shrink-0 w-full" data-name="ProgressCard" data-node-id="1:166">
            <div className="box-border content-stretch flex flex-col gap-[11.5px] h-[60px] items-start pl-0 pr-[701.461px] py-0 relative shrink-0 w-full" data-name="Container" data-node-id="1:167">
              <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3" data-node-id="1:168">
                <p className="absolute font-inter font-medium leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 tracking-[-0.4395px] whitespace-pre" data-node-id="1:169">Principles</p>
              </div>
              <div className="bg-neutral-100 h-[20px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Badge" data-node-id="1:170">
                <p className="absolute font-inter font-medium leading-[16px] left-[8px] not-italic text-[12px] text-neutral-600 text-nowrap top-[3px] whitespace-pre" data-node-id="1:171">Not started</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] h-[56px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:172">
              <div className="bg-[rgba(10,102,194,0.2)] box-border content-stretch flex flex-col h-[8px] items-start overflow-clip pr-[782px] py-0 relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Primitive.div" data-node-id="1:173">
                <div className="bg-[#0a66c2] h-[8px] shrink-0 w-full" data-name="Container" data-node-id="1:174" />
              </div>
              <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="1:175">
                <div className="h-[20px] relative shrink-0 w-[140.984px]" data-name="Text" data-node-id="1:176">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[140.984px]">
                    <p className="absolute font-inter font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[141px]" data-node-id="1:177">0 of 9 questions done</p>
                  </div>
                </div>
                <button className="bg-[#0a66c2] h-[36px] relative rounded-[10px] shrink-0 w-[64.625px] flex items-center justify-center px-[16px] py-[8px]" data-name="Button" data-node-id="1:178" type="button" onClick={() => onOpenSection("principles")}> 
                  <span className="font-inter font-medium leading-[20px] not-italic text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="1:179">Start</span>
                </button>
              </div>
            </div>
          </div>
          {/* Communication Card */}
          <div className="bg-white border border-blue-100 border-solid box-border content-stretch flex flex-col gap-[16px] h-[182px] items-start pb-px pt-[25px] px-[25px] relative rounded-[16px] shrink-0 w-full" data-name="ProgressCard" data-node-id="1:180">
            <div className="h-[60px] relative shrink-0 w-full" data-name="Container" data-node-id="1:181">
              <div className="absolute h-[28px] left-0 top-0 w-[129.344px]" data-name="Heading 3" data-node-id="1:182">
                <p className="absolute font-inter font-medium leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 tracking-[-0.4395px] whitespace-pre" data-node-id="1:183">Communication</p>
              </div>
              <div className="absolute bg-neutral-100 h-[20px] left-0 overflow-clip rounded-[10px] top-[39.5px] w-[81.688px]" data-name="Badge" data-node-id="1:184">
                <p className="absolute font-inter font-medium leading-[16px] left-[8px] not-italic text-[12px] text-neutral-600 text-nowrap top-[3px] whitespace-pre" data-node-id="1:185">Not started</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] h-[56px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:186">
              <div className="bg-[rgba(10,102,194,0.2)] box-border content-stretch flex flex-col h-[8px] items-start overflow-clip pr-[782px] py-0 relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Primitive.div" data-node-id="1:187">
                <div className="bg-[#0a66c2] h-[8px] shrink-0 w-full" data-name="Container" data-node-id="1:188" />
              </div>
              <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="1:189">
                <div className="h-[20px] relative shrink-0 w-[141.078px]" data-name="Text" data-node-id="1:190">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[141.078px]">
                    <p className="absolute font-inter font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[142px]" data-node-id="1:191">0 of 4 questions done</p>
                  </div>
                </div>
                <button className="bg-[#0a66c2] h-[36px] relative rounded-[10px] shrink-0 w-[64.625px] flex items-center justify-center px-[16px] py-[8px]" data-name="Button" data-node-id="1:192" type="button" onClick={() => onOpenSection("communication")}> 
                  <span className="font-inter font-medium leading-[20px] not-italic text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="1:193">Start</span>
                </button>
              </div>
            </div>
          </div>
          {/* Decision Making Card */}
          <div className="bg-white border border-blue-100 border-solid box-border content-stretch flex flex-col gap-[16px] h-[182px] items-start pb-px pt-[25px] px-[25px] relative rounded-[16px] shrink-0 w-full" data-name="ProgressCard" data-node-id="1:194">
            <div className="h-[60px] relative shrink-0 w-full" data-name="Container" data-node-id="1:195">
              <div className="absolute h-[28px] left-0 top-0 w-[135.039px]" data-name="Heading 3" data-node-id="1:196">
                <p className="absolute font-inter font-medium leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 tracking-[-0.4395px] whitespace-pre" data-node-id="1:197">Decision Making</p>
              </div>
              <div className="absolute bg-neutral-100 h-[20px] left-0 overflow-clip rounded-[10px] top-[39.5px] w-[81.688px]" data-name="Badge" data-node-id="1:198">
                <p className="absolute font-inter font-medium leading-[16px] left-[8px] not-italic text-[12px] text-neutral-600 text-nowrap top-[3px] whitespace-pre" data-node-id="1:199">Not started</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] h-[56px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:200">
              <div className="bg-[rgba(10,102,194,0.2)] box-border content-stretch flex flex-col h-[8px] items-start overflow-clip pr-[782px] py-0 relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Primitive.div" data-node-id="1:201">
                <div className="bg-[#0a66c2] h-[8px] shrink-0 w-full" data-name="Container" data-node-id="1:202" />
              </div>
              <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="1:203">
                <div className="h-[20px] relative shrink-0 w-[140.727px]" data-name="Text" data-node-id="1:204">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[140.727px]">
                    <p className="absolute font-inter font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[141px]" data-node-id="1:205">0 of 5 questions done</p>
                  </div>
                </div>
                <button className="bg-[#0a66c2] h-[36px] relative rounded-[10px] shrink-0 w-[64.625px] flex items-center justify-center px-[16px] py-[8px]" data-name="Button" data-node-id="1:206" type="button" onClick={() => onOpenSection("decision-making")}> 
                  <span className="font-inter font-medium leading-[20px] not-italic text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="1:207">Start</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  <ShareModal open={shareOpen} onClose={() => setShareOpen(false)} />
  <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} text={exportText} llmPrompt={llmPrompt} />
  <EmailSignatureModal open={emailSigOpen} onClose={() => setEmailSigOpen(false)} signatureUrl={`workwith.me/tudor-tise`} />
    </div>
  );
}
