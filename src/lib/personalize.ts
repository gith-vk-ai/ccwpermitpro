import { findAnswer, type QuizAnswers } from "@/config/quiz";

/**
 * Deterministic results copy: the same answers always produce the same text.
 * It reflects what the visitor told us — it is not legal advice or an
 * assessment of eligibility.
 */

export type Insight = { title: string; body: string };

export type Results = {
  intro: string;
  insights: Insight[];
  goalLine: string;
  nextStep: string;
  snapshot: { label: string; value: string }[];
};

const intros: Record<string, string> = {
  none: "You're starting from zero — and that's the best time to learn things the right way. Good training covers safe handling, the fundamentals, and the legal basics before anything else.",
  some: "You've had some time at the range, which gives you a head start. Structured training can turn those range visits into consistent, safe habits.",
  owner: "You already own a handgun and know your way around it. The step that's often missing is knowing exactly when — and where — you're allowed to carry it.",
  experienced:
    "You bring real experience with firearms. For you, the value is less about the basics and more about civilian carry law, which differs from state to state.",
};

const statusInsights: Record<string, Insight> = {
  researching: {
    title: "A clear starting point",
    body: "Permit rules depend on your state: some require classroom or live-fire training, some accept online courses, and some don't require a permit to carry at all. Your first step is checking your state's official requirements.",
  },
  know_need: {
    title: "Turning intent into a plan",
    body: "Knowing you want a permit is the hardest part. Breaking it into steps — training, paperwork, fingerprints, and the application — makes the process far less intimidating.",
  },
  need_training: {
    title: "Training that counts",
    body: "Before you pay for any course, confirm it is accepted for your state's permit. Many states list approved training options on their official permit website.",
  },
  renewing: {
    title: "Going further with your permit",
    body: "Renewal rules and reciprocity between states change over time. A refresher course is also a good way to keep your skills and legal knowledge current.",
  },
};

const obstacleInsights: Record<string, Insight> = {
  confusing: {
    title: "Making the rules make sense",
    body: "Carry laws are genuinely complicated — where you can carry, how to transport a firearm, and what happens when you cross state lines. Training that explains this in plain English can take the guesswork out.",
  },
  time: {
    title: "Fitting training into real life",
    body: "Busy schedules are one of the most common reasons people put this off. Self-paced online lessons can cover the knowledge portion on your own time, where your state allows it.",
  },
  legal_worry: {
    title: "Understanding the legal side",
    body: "Carrying responsibly means knowing what self-defense law expects of you before you ever need it. Education on use-of-force basics is one of the most valuable parts of good training.",
  },
  confidence: {
    title: "Building real confidence",
    body: "Confidence comes from repetition and good instruction. Learning safe handling, the fundamentals of marksmanship, and a regular practice routine helps you carry with less hesitation.",
  },
  cost: {
    title: "Knowing what's worth it",
    body: "Permit costs vary by state and include fees, fingerprinting, and training. Comparing a few training options side by side makes it easier to see what you'd actually be paying for.",
  },
};

const goalLines: Record<string, string> = {
  family: "And you know why it matters: being prepared to protect the people closest to you.",
  travel: "And you know why it matters: staying legal wherever the road takes you.",
  work: "And you know why it matters: feeling safer on your everyday routes.",
  responsibility: "And you know why it matters: being the kind of gun owner who does it the right way.",
  skills: "And you know why it matters: real skill and confidence, not just a card in your wallet.",
};

const nextSteps: Record<string, string> = {
  now: "You said you're ready — so it's worth taking a look while the motivation is fresh.",
  month: "Getting started in the next few weeks is very doable with training you can fit around your schedule.",
  soon: "There's no commitment in taking a look and seeing what a training program covers.",
  exploring: "Exploring your options is a smart move — here's one worth adding to your list.",
};

export function buildResults(answers: QuizAnswers): Results {
  const intro = intros[answers.experience ?? ""] ?? intros.some;

  const insights: Insight[] = [];
  const status = statusInsights[answers.status ?? ""];
  if (status) insights.push(status);
  const obstacle = obstacleInsights[answers.obstacle ?? ""];
  if (obstacle) insights.push(obstacle);

  const reason = findAnswer("reason", answers.reason);

  return {
    intro,
    insights,
    goalLine: goalLines[answers.reason ?? ""] ?? "",
    nextStep: nextSteps[answers.readiness ?? ""] ?? nextSteps.soon,
    snapshot: [
      { label: "Region", value: findAnswer("region", answers.region)?.label ?? "—" },
      { label: "Your why", value: reason ? trimPeriod(reason.label) : "—" },
      { label: "Focus area", value: obstacle ? obstacle.title : "—" },
    ],
  };
}

function trimPeriod(s: string): string {
  return s.replace(/\.$/, "");
}
