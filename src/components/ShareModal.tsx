import React, { useState } from "react";
import { asset } from "@/lib/assets";
import { useToast } from "./ToastProvider";


const imgIcon = asset("f8a6f7340b79fe6e21dc80d9f5d1f5ebef58958f.svg");
const imgIcon1 = asset("c03bb0b4cb43d3219bf5634208db55763fe86e36.svg");
const imgIcon2 = asset("68f3aa154402aeb68c72a62e12e5bf77bd821e90.svg");
const imgIcon3 = asset("79dc94bc2402dd0a76064cab2454d188a054d5ff.svg");
const imgIcon4 = asset("9e12764e91cf36e92c672b4ceb011cb1b5c0cb56.svg");
const imgIcon5 = asset("d7b2000829319cde5a6738b706f763cc526b6ba0.svg");

export interface ShareModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ShareModal({ open, onClose }: ShareModalProps) {
  const [publicLink, setPublicLink] = useState(false);
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();
  const link = "workwith.me/tudor-tise";

  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    showToast("Link copied!");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="relative w-[448px] rounded-[12px] border border-[rgba(0,0,0,0.1)] bg-white p-0 shadow-xl">
        <button
          className="absolute right-4 top-4 size-[16px] rounded-[2px] opacity-70"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={imgIcon4} alt="Close" className="size-full" />
        </button>
        <div className="flex flex-col gap-2 p-6">
          <h2 className="text-[18px] font-semibold tracking-[-0.44px] text-neutral-950">Share your profile</h2>
          <p className="text-[14px] text-[#717182]">Make your profile public and share it with others</p>
        </div>
        <div className="flex flex-col gap-6 px-6 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-[16px] font-medium text-neutral-950">Public link</label>
              <p className="text-[14px] text-[#717182]">Anyone with the link can view your profile</p>
            </div>
            <button
              className={`h-[18px] w-8 rounded-full border-none focus:outline-none ${publicLink ? "bg-[#0a66c2]" : "bg-[#cbced4]"}`}
              onClick={() => setPublicLink((value) => !value)}
              aria-pressed={publicLink}
              aria-label="Toggle public link"
            >
              <span className={`block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${publicLink ? "translate-x-4" : ""}`} />
            </button>
          </div>
          {publicLink && (
            <>
              <div className="flex items-center gap-2 rounded-[12px] border border-gray-200 bg-[#ececf0] px-3 py-1">
                <img src={imgIcon2} alt="link" className="size-4" />
                <span className="text-[14px] text-neutral-950">{link}</span>
              </div>
              <button
                className="relative flex h-9 w-full items-center justify-center rounded-[10px] bg-[#0a66c2]"
                onClick={handleCopy}
              >
                <img src={imgIcon5} alt="copy" className="absolute left-4 size-4 -translate-y-1/2 top-1/2" />
                <span className="text-[14px] font-medium text-white">{copied ? "Copied!" : "Copy link"}</span>
              </button>
              <div className="mt-1 flex items-center justify-center gap-2">
                <img src={imgIcon3} alt="active" className="size-2" />
                <span className="text-[14px] text-[#717182]">Link active</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
