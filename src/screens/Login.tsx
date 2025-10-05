
import React, { useState } from 'react';

export interface LoginProps {
  onSkip?: () => void;
}

export default function Login({ onSkip }: LoginProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className="bg-[#f8f9fa] box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[268px] px-[343.5px] relative size-full min-h-screen w-full" data-name="Login" data-node-id="18:787">
      <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 1" data-node-id="18:788">
        <p className="basis-0 font-inter font-medium grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-center text-neutral-950 tracking-[0.3955px]">Work With Me</p>
      </div>
      <div className="bg-white border border-blue-100 border-solid h-[389px] relative rounded-[16px] shrink-0 w-full max-w-[672px]" data-name="Container" data-node-id="18:790">
        <div className="absolute content-stretch flex h-[19px] items-start left-[33px] top-[36.5px] w-[425.516px]" data-name="Bold Text" data-node-id="18:791">
          <p className="font-inter font-bold leading-[26px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap tracking-[-0.3125px] whitespace-pre">Understand yourself. Help others work better with you.</p>
        </div>
        <form className="absolute border-t border-gray-200 box-border content-stretch flex flex-col gap-[16px] h-[265px] items-start left-[33px] pb-0 pt-[25px] px-0 top-[91px] w-[606px]" data-name="Container" data-node-id="18:793" onSubmit={e => { e.preventDefault(); /* handle submit here */ }}>
          <div className="gap-[16px] grid grid-cols-2 h-[64px] w-full" data-name="Container" data-node-id="18:794">
            <div className="flex flex-col gap-[8px]" data-name="Container" data-node-id="18:795">
              <label className="h-[20px] text-[14px] text-gray-500 font-inter font-normal leading-[20px] tracking-[-0.1504px]">First name</label>
              <input
                className="bg-[#f3f3f5] border border-transparent h-[36px] rounded-[10px] px-[12px] py-[4px] w-full text-[14px] text-[#717182] font-inter"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-[8px]" data-name="Container" data-node-id="18:800">
              <label className="h-[20px] text-[14px] text-gray-500 font-inter font-normal leading-[20px] tracking-[-0.1504px]">Last name</label>
              <input
                className="bg-[#f3f3f5] border border-transparent h-[36px] rounded-[10px] px-[12px] py-[4px] w-full text-[14px] text-[#717182] font-inter"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] h-[64px] w-full" data-name="Container" data-node-id="18:805">
            <label className="h-[20px] text-[14px] text-gray-500 font-inter font-normal leading-[20px] tracking-[-0.1504px]">Email</label>
            <input
              className="bg-[#f3f3f5] border border-transparent h-[36px] rounded-[10px] px-[12px] py-[4px] w-full text-[14px] text-[#717182] font-inter"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-[#0a66c2] h-[36px] rounded-[10px] w-full relative mt-2">
            <span className="font-inter font-medium leading-[20px] text-[14px] text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Continue</span>
          </button>
          <div className="flex h-[28px] items-center justify-between w-full mt-2">
            <button type="button" className="h-[20px] w-[79.969px] text-[14px] text-gray-500 font-inter font-normal leading-[20px] tracking-[-0.1504px]" onClick={onSkip}>Skip for now</button>
            <button type="button" className="h-[20px] w-[109.125px] text-[14px] text-[#0a66c2] font-inter font-normal leading-[20px] tracking-[-0.1504px]">Preview Example</button>
          </div>
        </form>
      </div>
    </div>
  );
}
