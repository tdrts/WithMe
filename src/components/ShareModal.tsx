import React, { useState } from "react";

const imgIcon = "http://localhost:3845/assets/f8a6f7340b79fe6e21dc80d9f5d1f5ebef58958f.svg";
const imgIcon1 = "http://localhost:3845/assets/c03bb0b4cb43d3219bf5634208db55763fe86e36.svg";
const imgIcon2 = "http://localhost:3845/assets/68f3aa154402aeb68c72a62e12e5bf77bd821e90.svg";
const imgIcon3 = "http://localhost:3845/assets/79dc94bc2402dd0a76064cab2454d188a054d5ff.svg";
const imgIcon4 = "http://localhost:3845/assets/9e12764e91cf36e92c672b4ceb011cb1b5c0cb56.svg";
const imgIcon5 = "http://localhost:3845/assets/d7b2000829319cde5a6738b706f763cc526b6ba0.svg";

export interface ShareModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ShareModal({ open, onClose }: ShareModalProps) {
  const [publicLink, setPublicLink] = useState(false);
  const [copied, setCopied] = useState(false);
  const link = "workwith.me/tudor-tise";

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[12px] w-[448px] relative p-0 shadow-xl">
        <button
          className="absolute right-4 top-4 opacity-70 rounded-[2px] size-[16px]"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={imgIcon4} alt="Close" className="size-full" />
        </button>
        <div className="flex flex-col gap-2 p-6">
          <h2 className="font-semibold text-[18px] text-neutral-950 tracking-[-0.44px]">Share your profile</h2>
          <p className="text-[#717182] text-[14px]">Make your profile public and share it with others</p>
        </div>
        <div className="flex flex-col gap-6 px-6 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium text-[16px] text-neutral-950">Public link</label>
              <p className="text-[#717182] text-[14px]">Anyone with the link can view your profile</p>
            </div>
            <button
              className={`w-8 h-[18px] rounded-full border-none focus:outline-none ${publicLink ? 'bg-[#0a66c2]' : 'bg-[#cbced4]'}`}
              onClick={() => setPublicLink(v => !v)}
              aria-pressed={publicLink}
              aria-label="Toggle public link"
            >
              <span className={`block w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${publicLink ? 'translate-x-4' : ''}`}></span>
            </button>
          </div>
          {publicLink && (
            <>
              <div className="flex items-center bg-[#ececf0] border border-gray-200 rounded-[12px] px-3 py-1 gap-2">
                <img src={imgIcon4} alt="link" className="size-4" />
                <span className="text-[14px] text-neutral-950">{link}</span>
              </div>
              <button
                className="bg-[#0a66c2] h-9 rounded-[10px] w-full flex items-center justify-center relative"
                onClick={() => {
                  navigator.clipboard.writeText(link);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
              >
                <img src={imgIcon5} alt="copy" className="size-4 absolute left-4 top-1/2 -translate-y-1/2" />
                <span className="font-medium text-[14px] text-white">{copied ? 'Copied!' : 'Copy link'}</span>
              </button>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="bg-[#00c950] rounded-full size-2" />
                <span className="text-[#717182] text-[14px]">Link active</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
