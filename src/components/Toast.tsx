import React, { useEffect } from "react";
import { asset } from "@/lib/assets";

const imgIcon = asset("55e415a215f3ac2873bfb3705018cf983f9a40b0.svg");

interface ToastProps {
  message: string;
  open: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, open, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
      <div
        className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] shadow-lg min-w-[260px] h-[54px] flex items-center relative animate-fade-in-up"
        style={{ width: 260 }}
        data-node-id="20:985"
      >
        <div className="absolute left-[14px] top-1/2 -translate-y-1/2 flex items-center" data-node-id="20:988">
          <img src={imgIcon} alt="Copied" className="w-5 h-5" data-node-id="20:989" />
        </div>
        <div className="pl-[40px] pr-4 w-full flex items-center h-full">
          <span className="font-inter font-medium text-[13px] text-neutral-950 leading-[19.5px] tracking-[-0.08px] whitespace-nowrap" data-node-id="20:987">
            {message}
          </span>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>
  );
};

export default Toast;
