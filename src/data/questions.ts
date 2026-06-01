export type Option = { label: string; text: string; score: 1 | 2 | 3 | 5 };
export type Question = { id: number; pillarId: string; text: string; options: Option[] };
export type Pillar = { id: string; name: string; short: string; description: string };

export const PILLARS: Pillar[] = [
  {
    id: "deliverability",
    name: "Deliverability & Infrastructure Shielding",
    short: "Deliverability",
    description: "Domain acquisition, IP warmup, and technical DNS protocols to guarantee inbox placement.",
  },
  {
    id: "enrichment",
    name: "Data Scraping & Waterfall Enrichment",
    short: "Enrichment",
    description: "Building highly targeted, verified lead databases and capturing buyer intent signals.",
  },
  {
    id: "copywriting",
    name: "Offer Structuring & Dynamic Copywriting",
    short: "Copywriting",
    description: "Crafting hyper-personalized messaging matrices, A/B testing frameworks, and spintax variations.",
  },
  {
    id: "orchestration",
    name: "Multi-Channel Sequence Orchestration",
    short: "Orchestration",
    description: "Deploying automated sales funnels across email, professional networks, and social touches.",
  },
  {
    id: "growth",
    name: "Autonomous Growth Architecture & CRM Sync",
    short: "Growth",
    description: "AI-driven inbox management, automated meeting booking protocols, and bi-directional CRM data flows.",
  },
];

const mk = (
  id: number,
  pillarId: string,
  text: string,
  a: string,
  b: string,
  c: string,
  d: string
): Question => ({
  id,
  pillarId,
  text,
  options: [
    { label: "A", text: a, score: 1 },
    { label: "B", text: b, score: 2 },
    { label: "C", text: c, score: 3 },
    { label: "D", text: d, score: 5 },
  ],
});

export const QUESTIONS: Question[] = [
  mk(1, "deliverability", "How many dedicated sending domains does your outbound infrastructure use?",
    "Zero — we send from our primary corporate domain.",
    "One or two secondary domains with no rotation.",
    "A small pool of warmed domains with basic rotation.",
    "A fully shielded domain portfolio with automated rotation and reputation monitoring."),
  mk(2, "deliverability", "What is the state of your DNS authentication protocols (SPF, DKIM, DMARC)?",
    "Not configured or unknown.",
    "SPF only, partially configured.",
    "SPF and DKIM in place, DMARC on monitoring.",
    "Full enforcement across all sending domains with alignment reporting."),
  mk(3, "deliverability", "How do you handle IP warmup for new sending infrastructure?",
    "We don't — we send at full volume immediately.",
    "Manual ramp-up based on intuition.",
    "Structured warmup calendar with volume throttling.",
    "Automated warmup protocols with real-time reputation feedback loops."),
  mk(4, "deliverability", "How do you monitor inbox placement and sender reputation?",
    "No monitoring — we assume emails are delivered.",
    "Check spam folders manually and react to complaints.",
    "Periodic seed testing and bounce rate analysis.",
    "Continuous placement monitoring with automated alerts and corrective action triggers."),
  mk(5, "deliverability", "How do you manage bounce rates and list hygiene?",
    "No process — we send until things break.",
    "Reactive cleanup after high bounce events.",
    "Scheduled verification sweeps before campaigns.",
    "Real-time verification at point of capture with automated suppression workflows."),
  mk(6, "deliverability", "What level of sending infrastructure redundancy do you have?",
    "Single provider, single configuration.",
    "One backup provider not actively used.",
    "Multi-provider setup with manual failover.",
    "Distributed sending mesh with automated load balancing and failover."),

  mk(7, "enrichment", "How do you build your target account lists?",
    "Manual LinkedIn browsing and ad-hoc research.",
    "Purchased static lists from a single vendor.",
    "Multi-source data aggregation with basic filtering.",
    "Waterfall enrichment across multiple data layers with signal-based prioritization."),
  mk(8, "enrichment", "How do you verify contact data accuracy?",
    "We don't — we trust the source.",
    "Spot-check a sample before sending.",
    "Batch verification through a single validation layer.",
    "Multi-step waterfall verification with cascading fallback providers."),
  mk(9, "enrichment", "Do you capture and act on buyer intent signals?",
    "No intent data in our process.",
    "Aware of intent data but not actively using it.",
    "Monitoring basic signals like website visits or content downloads.",
    "Layered intent scoring from technographic, hiring, funding, and engagement signals."),
  mk(10, "enrichment", "How do you segment and prioritize your prospect universe?",
    "No segmentation — one list for all campaigns.",
    "Basic firmographic filters (industry, size).",
    "Multi-dimensional segmentation with persona mapping.",
    "Dynamic micro-segments updated in real-time based on behavioral and intent triggers."),
  mk(11, "enrichment", "How frequently is your prospect data refreshed?",
    "Never — lists are static once built.",
    "Quarterly or annually.",
    "Monthly refresh cycles.",
    "Continuous enrichment with real-time data decay detection and auto-refresh."),
  mk(12, "enrichment", "How do you handle data compliance and consent management?",
    "No compliance process in place.",
    "Basic suppression lists managed manually.",
    "Opt-out handling with regional compliance checks.",
    "Automated jurisdiction-aware compliance engine with full audit trails."),

  mk(13, "copywriting", "How do you structure your outbound messaging?",
    "One generic template for all prospects.",
    "A few variations based on job title.",
    "Persona-specific messaging with basic personalization.",
    "Dynamic messaging matrices with spintax, conditional logic, and hyper-personalization tokens."),
  mk(14, "copywriting", "How do you approach A/B testing in your outbound?",
    "No testing — we go with our best guess.",
    "Occasional subject line tests.",
    "Structured split testing on subject and body with statistical significance tracking.",
    "Multi-variate testing framework with automated winner selection and iterative optimization."),
  mk(15, "copywriting", "How personalized are your cold outreach sequences?",
    "Fully generic — name and company only.",
    "Light personalization with industry references.",
    "Research-backed custom openers tied to prospect context.",
    "AI-driven personalization using technographic, intent, and behavioral data at scale."),
  mk(16, "copywriting", "How do you handle offer positioning for different segments?",
    "One offer for everyone.",
    "Different offers by industry vertical.",
    "Segment-specific value propositions with tailored proof points.",
    "Dynamic offer assembly that adapts based on prospect signals and engagement history."),
  mk(17, "copywriting", "How do you manage and iterate on your copy library?",
    "No library — each rep writes from scratch.",
    "Shared folder of past emails with no versioning.",
    "Centralized copy repository with performance tags.",
    "Living copy system with version control, performance scoring, and automated retirement of underperformers."),
  mk(18, "copywriting", "How do you craft follow-up sequences?",
    "One follow-up, then stop.",
    "Three to five follow-ups with minor variations.",
    "Multi-touch sequences with value-escalation logic.",
    "Adaptive follow-up architecture that adjusts timing, channel, and angle based on engagement signals."),

  mk(19, "orchestration", "How many outbound channels do you actively orchestrate?",
    "Email only.",
    "Email plus one secondary channel (manual).",
    "Two to three channels with some coordination.",
    "Fully orchestrated multi-channel sequences across email, social, calls, and direct messaging."),
  mk(20, "orchestration", "How automated are your outbound sequences?",
    "Fully manual send-by-send execution.",
    "Semi-automated with manual triggers between steps.",
    "Automated sequences with basic conditional branching.",
    "Fully autonomous execution with dynamic branching based on real-time engagement data."),
  mk(21, "orchestration", "How do you handle channel-specific timing and cadence?",
    "No thought given to timing — we send when ready.",
    "Fixed schedules based on general best practices.",
    "Time-zone aware sending with day-of-week optimization.",
    "AI-optimized send times per prospect based on historical engagement patterns."),
  mk(22, "orchestration", "How do you manage prospect touchpoint limits?",
    "No limits — we reach out until we get a response or give up.",
    "Hard cap on emails but no cross-channel awareness.",
    "Channel-specific limits with manual coordination.",
    "Unified touchpoint governance across all channels with fatigue scoring and automatic throttling."),
  mk(23, "orchestration", "How do you coordinate outbound between multiple team members?",
    "No coordination — overlap and duplication are common.",
    "Spreadsheet-based territory assignments.",
    "CRM-based ownership rules with manual checks.",
    "Automated deduplication and routing engine with real-time conflict resolution."),
  mk(24, "orchestration", "How do you handle responses and engagement routing?",
    "Responses sit in individual inboxes until someone checks.",
    "Shared inbox with manual triage.",
    "Rule-based routing to appropriate team members.",
    "AI-powered response classification with instant routing, sentiment detection, and priority scoring."),

  mk(25, "growth", "How do you manage positive replies and meeting booking?",
    "Manual back-and-forth to schedule calls.",
    "Calendar link in signature, hope prospects use it.",
    "Automated booking links triggered on positive sentiment.",
    "AI-driven inbox management that detects intent, handles objections, and books meetings autonomously."),
  mk(26, "growth", "How do you sync outbound activity with your CRM?",
    "No sync — CRM and outbound are separate systems.",
    "Manual logging of key activities.",
    "One-directional sync (outbound to CRM).",
    "Bi-directional real-time sync with full activity attribution and pipeline stage automation."),
  mk(27, "growth", "How do you attribute pipeline to outbound efforts?",
    "No attribution — we can't trace where deals came from.",
    "First-touch attribution only.",
    "Multi-touch attribution with basic weighting.",
    "Full-funnel attribution model with channel-level ROI visibility and cohort analysis."),
  mk(28, "growth", "How do you scale your outbound without proportional headcount growth?",
    "We can't — every new campaign requires more people.",
    "Some templates and basic automation reduce load.",
    "Playbooks and automation handle 50-70% of execution.",
    "Fully autonomous growth engine that scales volume without linear team growth."),
  mk(29, "growth", "How do you handle lead recycling and re-engagement?",
    "Dead leads stay dead — no re-engagement process.",
    "Occasional manual outreach to old lists.",
    "Scheduled re-engagement campaigns on fixed intervals.",
    "Signal-triggered re-engagement that activates based on new intent, job changes, or funding events."),
  mk(30, "growth", "How mature is your outbound reporting and optimization loop?",
    "No reporting — we don't know what's working.",
    "Basic open and reply rate tracking.",
    "Full-funnel metrics with weekly optimization reviews.",
    "Real-time performance dashboards with AI-generated optimization recommendations and automated adjustments."),
];

export function getMaturityLevel(total: number): { level: number; name: string; summary: string } {
  const bands: Array<{ min: number; max: number; name: string; summary: string }> = [
    { min: 30, max: 41, name: "Cold Start", summary: "Critical infrastructure gaps across the entire outbound engine. Without intervention, deliverability decay and wasted pipeline are inevitable." },
    { min: 42, max: 53, name: "Manual Grind", summary: "Early outbound motion exists but relies on brute-force effort. There is no scalable system — just individual hustle." },
    { min: 54, max: 65, name: "Foundation Set", summary: "Core building blocks are in place. Infrastructure and enrichment are stabilizing, but orchestration and growth automation lag behind." },
    { min: 66, max: 77, name: "Gaining Traction", summary: "Credible progress on multiple fronts. The machine is starting to compound, but orchestration gaps still limit throughput." },
    { min: 78, max: 89, name: "Systematic", summary: "Outbound operates as a system, not a collection of tactics. Scaling is possible but not yet autonomous." },
    { min: 90, max: 101, name: "Scalable Engine", summary: "The growth engine runs with minimal intervention. Focus shifts from building to optimizing and expanding reach." },
    { min: 102, max: 113, name: "High-Performance", summary: "Advanced architecture producing predictable pipeline. AI and automation handle the majority of execution." },
    { min: 114, max: 125, name: "Autonomous", summary: "Near-fully autonomous outbound system. Human effort concentrates on strategy, creative, and high-value conversations only." },
    { min: 126, max: 137, name: "Elite Architecture", summary: "Category-leading outbound infrastructure. The system self-optimizes, self-heals, and compounds results without proportional headcount." },
    { min: 138, max: 150, name: "Market Dominator", summary: "Best-in-class outbound engine operating at peak efficiency. This architecture is a defensible competitive moat." },
  ];
  for (let i = 0; i < bands.length; i++) {
    const b = bands[i];
    if (total >= b.min && total <= b.max) return { level: i + 1, name: b.name, summary: b.summary };
  }
  if (total < 30) return { level: 1, name: "Cold Start", summary: bands[0].summary };
  return { level: 10, name: "Market Dominator", summary: bands[9].summary };
}

export type PillarBlueprint = {
  pillarId: string;
  pillarName: string;
  score: number;
  initiative: string;
  resources: string[];
  hours: number;
};

export type AssetTier = "foundational" | "intermediate" | "advanced" | "edge";

type PillarBlueprintDef = {
  initiative: string;
  baseHours: number;
  tiers: Record<AssetTier, string[]>;
};

const PILLAR_BLUEPRINTS: Record<string, PillarBlueprintDef> = {
  deliverability: {
    initiative: "Full Deliverability Infrastructure & Domain Shielding",
    baseHours: 650,
    tiers: {
      foundational: [
        "Secondary Domain Portfolio Acquisition",
        "DNS Authentication Suite (SPF/DKIM/DMARC)",
        "IP Warmup Protocol Engine",
        "Bounce & Complaint Management System",
      ],
      intermediate: [
        "Automated Domain Rotation Framework",
        "Inbox Placement Monitoring Dashboard",
        "Reputation Scoring & Alert System",
        "Multi-Provider Sending Infrastructure",
      ],
      advanced: [
        "Distributed Sending Mesh Architecture",
        "Predictive Reputation Modeling",
        "Automated Remediation Workflows",
      ],
      edge: [
        "Self-Healing Deliverability Network",
        "AI-Driven Send Optimization Engine",
      ],
    },
  },
  enrichment: {
    initiative: "Waterfall Data Enrichment & Intent Signal Pipeline",
    baseHours: 600,
    tiers: {
      foundational: [
        "Multi-Source Lead Database Builder",
        "Contact Verification Cascade",
        "Firmographic Segmentation Engine",
        "Suppression & Compliance Layer",
      ],
      intermediate: [
        "Intent Signal Aggregation Platform",
        "Technographic & Hiring Signal Capture",
        "Dynamic Micro-Segmentation Framework",
        "Automated Data Decay Detection",
      ],
      advanced: [
        "Real-Time Enrichment Waterfall Pipeline",
        "Buyer Persona Scoring Model",
        "Predictive Account Prioritization Engine",
      ],
      edge: [
        "Autonomous Data Intelligence Network",
        "Cross-Platform Signal Fusion Layer",
      ],
    },
  },
  copywriting: {
    initiative: "Dynamic Messaging Architecture & Copy Optimization System",
    baseHours: 500,
    tiers: {
      foundational: [
        "Persona-Based Messaging Matrix",
        "A/B Testing Framework",
        "Centralized Copy Repository",
        "Follow-Up Sequence Templates",
      ],
      intermediate: [
        "Spintax Variation Engine",
        "Multi-Variate Testing Platform",
        "Performance-Scored Copy Library",
        "Value-Escalation Sequence Logic",
      ],
      advanced: [
        "AI-Powered Personalization Layer",
        "Dynamic Offer Assembly System",
        "Automated Copy Retirement & Iteration",
      ],
      edge: [
        "Generative Outbound Copy Engine",
        "Self-Optimizing Messaging Network",
      ],
    },
  },
  orchestration: {
    initiative: "Multi-Channel Sequence Orchestration & Execution Fabric",
    baseHours: 700,
    tiers: {
      foundational: [
        "Automated Email Sequence Engine",
        "Multi-Channel Coordination Layer",
        "Time-Zone Aware Scheduling System",
        "Territory & Ownership Routing Rules",
      ],
      intermediate: [
        "Cross-Channel Touchpoint Governance",
        "Engagement-Based Branching Logic",
        "Response Classification & Routing",
        "Fatigue Scoring & Throttling Engine",
      ],
      advanced: [
        "AI-Optimized Send-Time Engine",
        "Unified Sequence Orchestrator",
        "Real-Time Conflict Resolution System",
      ],
      edge: [
        "Autonomous Multi-Channel Execution Network",
        "Predictive Cadence Optimization Engine",
      ],
    },
  },
  growth: {
    initiative: "Autonomous Growth Architecture & Revenue Pipeline Integration",
    baseHours: 550,
    tiers: {
      foundational: [
        "AI Inbox Management & Reply Handling",
        "Automated Meeting Booking Protocol",
        "Bi-Directional CRM Sync Engine",
        "Basic Attribution & Reporting Layer",
      ],
      intermediate: [
        "Full-Funnel Attribution Model",
        "Lead Recycling & Re-Engagement System",
        "Pipeline Stage Automation Engine",
        "Cohort Performance Analytics",
      ],
      advanced: [
        "Autonomous Scaling Architecture",
        "AI-Generated Optimization Recommendations",
        "Signal-Triggered Re-Engagement Workflows",
      ],
      edge: [
        "Self-Optimizing Growth Loop",
        "Predictive Pipeline Intelligence Network",
      ],
    },
  },
};

export function getAssetTier(score: number): AssetTier | null {
  if (score >= 30) return null;
  if (score <= 15) return "foundational";
  if (score <= 22) return "intermediate";
  if (score <= 27) return "advanced";
  return "edge";
}

const TIER_DISPLAY_COUNT: Record<AssetTier, number> = {
  foundational: 3,
  intermediate: 3,
  advanced: 3,
  edge: 2,
};

export function buildRoadmap(pillarScores: Record<string, number>): PillarBlueprint[] {
  const out: PillarBlueprint[] = [];
  for (const p of PILLARS) {
    const score = pillarScores[p.id] ?? 0;
    const tier = getAssetTier(score);
    if (!tier) continue;
    const bp = PILLAR_BLUEPRINTS[p.id];
    const pool = bp.tiers[tier];
    const resources = pool.slice(0, TIER_DISPLAY_COUNT[tier]);
    const deficit = Math.max(0, 30 - score);
    const hours = Math.round(bp.baseHours * (0.45 + (deficit / 30) * 0.95));
    out.push({
      pillarId: p.id,
      pillarName: p.name,
      score,
      initiative: bp.initiative,
      resources,
      hours,
    });
  }
  return out;
}

export function getAllPillarAssets(pillarId: string): { tier: AssetTier; assets: string[] }[] {
  const bp = PILLAR_BLUEPRINTS[pillarId];
  if (!bp) return [];
  return (["foundational", "intermediate", "advanced", "edge"] as AssetTier[]).map((tier) => ({
    tier,
    assets: bp.tiers[tier],
  }));
}
