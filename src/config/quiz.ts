/**
 * Quiz content. Order matters: the first questions are effortless (pick a
 * region, say why you're interested, describe your experience) so visitors
 * commit before the reflective questions.
 *
 * Answer `id`s are stable keys used by analytics and personalization — change
 * labels freely, but keep ids unless you also update `src/lib/personalize.ts`.
 *
 * Nothing here states what any particular state's law requires: rules differ
 * by state and change often, so the copy stays general on purpose.
 */

export type Answer = {
  id: string;
  label: string;
  /** Short accent shown above the label in grid layouts. */
  badge?: string;
};

export type Question = {
  id: QuestionId;
  prompt: string;
  helper?: string;
  layout?: "grid" | "list";
  answers: Answer[];
};

export type QuestionId = "region" | "reason" | "experience" | "status" | "obstacle" | "readiness";

export const questions: Question[] = [
  {
    id: "region",
    prompt: "Where in the U.S. do you live?",
    helper: "Pick one to get started.",
    layout: "grid",
    answers: [
      { id: "northeast", badge: "🗽", label: "Northeast" },
      { id: "southeast", badge: "🌴", label: "Southeast" },
      { id: "midwest", badge: "🌾", label: "Midwest" },
      { id: "southwest", badge: "🌵", label: "Southwest" },
      { id: "west", badge: "🏔️", label: "West / Mountain" },
      { id: "pacific", badge: "🌊", label: "Pacific Coast" },
    ],
  },
  {
    id: "reason",
    prompt: "What's the main reason you're interested in concealed carry?",
    layout: "list",
    answers: [
      { id: "family", label: "Protecting myself and my family." },
      { id: "travel", label: "Carrying legally when I travel to other states." },
      { id: "work", label: "Feeling safer commuting or at work." },
      { id: "responsibility", label: "Being a prepared, responsible gun owner." },
      { id: "skills", label: "Building real skills and confidence with my firearm." },
    ],
  },
  {
    id: "experience",
    prompt: "How would you describe your experience with handguns?",
    layout: "list",
    answers: [
      { id: "none", label: "I'm brand new — I've never really handled one." },
      { id: "some", label: "I've been to the range a few times." },
      { id: "owner", label: "I own a handgun and shoot occasionally." },
      { id: "experienced", label: "I'm experienced (military, law enforcement, or regular shooter)." },
    ],
  },
  {
    id: "status",
    prompt: "Where are you with your permit right now?",
    layout: "list",
    answers: [
      { id: "researching", label: "Just researching — I don't know where to start." },
      { id: "know_need", label: "I know I want one, but haven't taken any steps yet." },
      { id: "need_training", label: "I need to complete the required training." },
      { id: "renewing", label: "I already have a permit and want to renew or add states." },
    ],
  },
  {
    id: "obstacle",
    prompt: "What's held you back so far?",
    layout: "list",
    answers: [
      { id: "confusing", label: "The laws and requirements feel confusing." },
      { id: "time", label: "Finding time for an in-person class." },
      { id: "legal_worry", label: "Worrying about the legal side if I ever had to use it." },
      { id: "confidence", label: "I don't feel confident enough with my skills yet." },
      { id: "cost", label: "I'm not sure what it costs or what's worth paying for." },
    ],
  },
  {
    id: "readiness",
    prompt: "If you found training that fit your schedule, how soon would you start?",
    layout: "list",
    answers: [
      { id: "now", label: "Right away — I'm ready." },
      { id: "month", label: "Within the next month." },
      { id: "soon", label: "Sometime this year." },
      { id: "exploring", label: "I'm still exploring my options." },
    ],
  },
];

export type QuizAnswers = Partial<Record<QuestionId, string>>;

export function findAnswer(questionId: QuestionId, answerId: string | undefined) {
  const q = questions.find((x) => x.id === questionId);
  return q?.answers.find((a) => a.id === answerId);
}

export function renderPrompt(prompt: string): string {
  return prompt;
}
