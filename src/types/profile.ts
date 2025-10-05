export interface CollaborationChannel {
  channel: string;
  use: string;
}

export interface ProfileData {
  name: string;
  coreValues: string[];
  strengths: string[];
  learningStyle: string;
  motivators: string;
  drainers: string;
  recharge: string;
  greatDay: string;
  greatWeek: string;
  focusHours: string;
  channels: CollaborationChannel[];
  giveFeedback: string;
  receiveFeedback: string;
  conflict: string;
  decisionStyle: string;
  decideQuickly: string;
  needTime: string;
  experimentWith: string;
  guardrails: string;
  skipped: Record<string, boolean>;
}
