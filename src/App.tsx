import React, { useMemo, useState } from "react";

// import { AuthProvider } from "@/providers/AuthProvider";
import { ToastProvider } from "./components/ToastProvider";
import { PublicProfile } from "@/screens/PublicProfile";
import { PreviewScreen } from "@/screens/PreviewScreen";
import HomeScreen from "@/screens/HomeScreen";
import { SectionEditor } from "@/screens/SectionEditor";
import PrinciplesScreen from "@/screens/PrinciplesScreen";
import CommunicationScreen from "@/screens/CommunicationScreen";
import DecisionMakingScreen from "@/screens/DecisionMakingScreen";
import Login from "@/screens/Login";
import type { ProfileData } from "@/types/profile";

const emptyProfile: ProfileData = {
  name: "",
  coreValues: [],
  strengths: [],
  learningStyle: "",
  motivators: "",
  drainers: "",
  recharge: "",
  greatDay: "",
  greatWeek: "",
  focusHours: "",
  channels: [],
  giveFeedback: "",
  receiveFeedback: "",
  conflict: "",
  decisionStyle: "",
  decideQuickly: "",
  needTime: "",
  experimentWith: "",
  guardrails: "",
  skipped: {}
};

const exampleProfile: ProfileData = {
  ...emptyProfile,
  name: "Tudor Tise",
  coreValues: ["Integrity", "Curiosity", "Craft", "Empathy"],
  strengths: ["Strategy", "Product Thinking", "Storytelling"],
  learningStyle: "I learn best through hands-on experimentation paired with short written summaries.",
  motivators: "Clear problem statements, high-trust autonomy, and teammates who think out loud.",
  drainers: "Rewriting unclear goals, waiting on decisions, context switching.",
  recharge: "Quiet mornings, long walks, and deep work blocks with music.",
  greatDay: "Shipped something meaningful, helped a teammate unblock, and learned a new insight.",
  greatWeek: "A balance of strategy, collaboration, and time to reflect on what we’re building.",
  focusHours: "Typically 9am – 12pm CET for deep work; async after 4pm.",
  channels: [
    { channel: "Slack", use: "Async updates and quick questions" },
    { channel: "Zoom", use: "Workshops, decision syncs, complex discussions" },
    { channel: "Notion", use: "Documentation, briefs, decision records" }
  ],
  giveFeedback: "Direct, specific, and balanced. I’ll tell you what’s working and what needs to shift, with examples.",
  receiveFeedback: "Best when it’s timely, contextual, and tied to goals. Please share it candidly.",
  conflict: "I pause to understand motivations, then move into structured problem-solving.",
  decisionStyle: "Bias toward experimentation with clear guardrails and check-ins.",
  decideQuickly: "Resourcing small experiments, scope adjustments, async communication norms.",
  needTime: "Vision shifts, org design, anything that meaningfully impacts teammates.",
  experimentWith: "New rituals, facilitation formats, AI copilots for research.",
  guardrails: "No silent misalignment, no hidden decisions, no values compromises."
};


type Screen = "login" | "welcome" | "home" | "section" | "preview" | "public";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<ProfileData>(emptyProfile);
  const previewData = useMemo(() => exampleProfile, []);

  return (
    <ToastProvider>
      {currentScreen === "login" && (
        <Login onSkip={() => setCurrentScreen("home")} onPreviewExample={() => setCurrentScreen("preview")} />
      )}

      {currentScreen === "home" && (
        <HomeScreen
          onOpenSection={(sectionId: string) => {
            setActiveSection(sectionId);
            setCurrentScreen("section");
          }}
          onPreviewProfile={() => setCurrentScreen("preview")}
          profile={profileData}
        />
      )}

      {currentScreen === "section" && activeSection === "principles" && (
        <PrinciplesScreen />
      )}
      {currentScreen === "section" && activeSection === "communication" && (
        <CommunicationScreen
          profile={profileData}
          onChange={setProfileData}
          onExit={() => setCurrentScreen("home")}
          onContinue={() => setCurrentScreen("home")}
        />
      )}
      {currentScreen === "section" && activeSection === "decision-making" && (
        <DecisionMakingScreen
          profile={profileData}
          onChange={setProfileData}
          onExit={() => setCurrentScreen("home")}
          onContinue={() => setCurrentScreen("home")}
        />
      )}
      {currentScreen === "section" && activeSection && !["principles", "communication", "decision-making"].includes(activeSection) && (
        <SectionEditor
          sectionId={activeSection}
          onBack={() => setCurrentScreen("home")}
        />
      )}

      {currentScreen === "preview" && (
        <PreviewScreen data={previewData} onClose={() => setCurrentScreen("home")} />
      )}

      {currentScreen === "public" && <PublicProfile data={profileData} />}
    </ToastProvider>
  );
};

export default App;
