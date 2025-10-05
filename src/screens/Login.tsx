import React, { useState } from "react";

export interface LoginProps {
  onSkip?: () => void;
  onPreviewExample?: () => void;
}

export default function Login({ onSkip, onPreviewExample }: LoginProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-2xl">
        <header className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A66C2]">
            Work With Me
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">
            Understand yourself. Help others work better with you.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            AI made teamwork faster, but it didn&apos;t make understanding people easier. This space helps you reflect on how you work best — so your teammates and tools can adapt to you, not the other way around.
          </p>
        </header>

        <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
          <form
            className="grid gap-6"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-600" htmlFor="first-name">
                  First name
                </label>
                <input
                  className="h-11 rounded-xl border border-transparent bg-slate-100 px-3 text-sm text-slate-800 outline-none transition focus:border-[#0A66C2] focus:bg-white"
                  id="first-name"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-600" htmlFor="last-name">
                  Last name
                </label>
                <input
                  className="h-11 rounded-xl border border-transparent bg-slate-100 px-3 text-sm text-slate-800 outline-none transition focus:border-[#0A66C2] focus:bg-white"
                  id="last-name"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-600" htmlFor="email">
                Email
              </label>
              <input
                className="h-11 rounded-xl border border-transparent bg-slate-100 px-3 text-sm text-slate-800 outline-none transition focus:border-[#0A66C2] focus:bg-white"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="h-11 rounded-xl bg-[#0A66C2] text-sm font-semibold text-white transition hover:bg-[#004182]"
            >
              Continue
            </button>

            <div className="flex flex-col gap-2 text-sm font-medium text-[#0A66C2] sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                className="font-medium text-slate-500 transition hover:text-slate-700"
                onClick={onSkip}
              >
                Skip for now
              </button>
              <button
                type="button"
                className="transition hover:text-[#004182]"
                onClick={onPreviewExample}
              >
                Preview example profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
