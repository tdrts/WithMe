
import React from "react";
import { useToast } from "./ToastProvider";

const imgIcon4 = "http://localhost:3845/assets/d7b2000829319cde5a6738b706f763cc526b6ba0.svg";
const imgIcon5 = "http://localhost:3845/assets/9e12764e91cf36e92c672b4ceb011cb1b5c0cb56.svg";

interface EmailSignatureModalProps {
  open: boolean;
  onClose: () => void;
  signatureUrl?: string;
}

const signatureText = (url: string) => `---\nSee how I work: ${url}`;

export default function EmailSignatureModal({ open, onClose, signatureUrl = "workwith.me/tudor-tise" }: EmailSignatureModalProps) {
  const { showToast } = useToast();
  if (!open) return null;
  const handleCopy = () => {
    navigator.clipboard.writeText(signatureText(signatureUrl));
    showToast("Signature copied!");
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[270px] w-[448px] rounded-[12px] shadow-xl relative" data-node-id="1:820">
        {/* Close button */}
        <button
          className="absolute left-[415px] top-[17px] size-[16px] opacity-70 rounded-[2px] z-10 hover:bg-gray-100 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={imgIcon5} alt="close" className="block max-w-none size-full" />
        </button>
        {/* Header */}
        <div className="absolute flex flex-col gap-[8px] h-[46px] items-start left-[25px] top-[25px] w-[398px]">
          <div className="h-[18px] relative w-[398px]">
            <p className="font-inter font-semibold leading-[18px] text-[18px] text-neutral-950 tracking-[-0.44px]">Email signature</p>
          </div>
          <div className="relative w-[398px]">
            <p className="font-inter font-normal leading-[20px] text-[#717182] text-[14px] tracking-[-0.15px]">Add this to your email signature to share your profile</p>
          </div>
        </div>
        {/* Signature block and button */}
        <div className="absolute flex flex-col gap-[16px] h-[158px] left-[25px] pt-[16px] top-[87px] w-[398px]">
          <div className="bg-[#ececf0] border border-gray-200 rounded-[12px] px-[17px] pt-[17px] pb-px w-full">
            <pre className="text-[14px] text-neutral-950 font-inter leading-[20px] whitespace-pre mb-0">{signatureText(signatureUrl)}</pre>
          </div>
          <button
            className="bg-[#0a66c2] h-[36px] rounded-[10px] w-full relative flex items-center justify-center hover:bg-[#0856a0] transition-colors"
            onClick={handleCopy}
          >
            <img src={imgIcon4} alt="copy" className="absolute left-[133.04px] size-4 top-[10px]" />
            <span className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] absolute left-[165.04px] top-[8.5px] text-white">Copy signature</span>
          </button>
        </div>
      </div>
    </div>
  );
}
