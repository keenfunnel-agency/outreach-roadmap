export type GlossaryTier = "foundational" | "intermediate" | "advanced" | "edge";

export type GlossaryEntry = {
  slug: string;
  label: string;
  pillarId: "deliverability" | "enrichment" | "copywriting" | "orchestration" | "growth";
  tier: GlossaryTier;
  summary: string;
};

export const GLOSSARY: GlossaryEntry[] = [
  {
    slug: "secondary-domain-portfolio",
    label: "Secondary Domain Portfolio Acquisition",
    pillarId: "deliverability",
    tier: "foundational",
    summary:
      "A dedicated set of sending domains that shield your primary corporate domain from reputation risk. These domains are purpose-built for outbound, aged appropriately, and rotated to distribute sending volume and maintain pristine sender scores.",
  },
  {
    slug: "dns-authentication-suite",
    label: "DNS Authentication Suite (SPF/DKIM/DMARC)",
    pillarId: "deliverability",
    tier: "foundational",
    summary:
      "The technical DNS protocols that prove to receiving mail servers that your emails are legitimately sent and unaltered in transit. Full enforcement across SPF, DKIM, and DMARC is the non-negotiable baseline for inbox placement at scale.",
  },
  {
    slug: "ip-warmup-protocol",
    label: "IP Warmup Protocol Engine",
    pillarId: "deliverability",
    tier: "foundational",
    summary:
      "A structured system for gradually increasing sending volume on new IPs and domains to build trust with mailbox providers. Proper warmup prevents immediate spam classification and establishes the sender reputation foundation.",
  },
  {
    slug: "bounce-complaint-management",
    label: "Bounce & Complaint Management System",
    pillarId: "deliverability",
    tier: "foundational",
    summary:
      "An automated system that processes hard bounces, soft bounces, and spam complaints in real time. It suppresses invalid addresses, detects patterns, and prevents sending infrastructure from accumulating reputation damage.",
  },
  {
    slug: "domain-rotation-framework",
    label: "Automated Domain Rotation Framework",
    pillarId: "deliverability",
    tier: "intermediate",
    summary:
      "An intelligent system that distributes sending volume across a portfolio of domains based on their current reputation health, warmup stage, and daily limits. It maximizes total sending capacity while keeping each domain well within safe thresholds.",
  },
  {
    slug: "inbox-placement-monitoring",
    label: "Inbox Placement Monitoring Dashboard",
    pillarId: "deliverability",
    tier: "intermediate",
    summary:
      "Continuous visibility into where your emails actually land — primary inbox, promotions tab, or spam — across major mailbox providers. Seed testing and panel data provide actionable signals before deliverability degrades to the point of campaign failure.",
  },
  {
    slug: "reputation-scoring-alerts",
    label: "Reputation Scoring & Alert System",
    pillarId: "deliverability",
    tier: "intermediate",
    summary:
      "A monitoring layer that aggregates sender score, domain reputation, and blacklist status into a unified health dashboard. Automated alerts trigger corrective action before reputation damage becomes irreversible.",
  },
  {
    slug: "multi-provider-infrastructure",
    label: "Multi-Provider Sending Infrastructure",
    pillarId: "deliverability",
    tier: "intermediate",
    summary:
      "A diversified sending architecture that distributes outbound across multiple email service providers. This eliminates single-point-of-failure risk and provides failover capacity if any single provider experiences deliverability issues.",
  },
  {
    slug: "distributed-sending-mesh",
    label: "Distributed Sending Mesh Architecture",
    pillarId: "deliverability",
    tier: "advanced",
    summary:
      "A sophisticated infrastructure layer that routes each email through the optimal sending path based on recipient domain, provider reputation data, and real-time deliverability signals. It maximizes inbox placement probability per message.",
  },
  {
    slug: "predictive-reputation-modeling",
    label: "Predictive Reputation Modeling",
    pillarId: "deliverability",
    tier: "advanced",
    summary:
      "Machine learning models that forecast reputation trajectory based on current sending patterns, enabling preemptive volume adjustments before reputation thresholds are breached.",
  },
  {
    slug: "automated-remediation-workflows",
    label: "Automated Remediation Workflows",
    pillarId: "deliverability",
    tier: "advanced",
    summary:
      "Pre-configured response protocols that automatically execute when deliverability metrics fall below threshold — pausing sending, redistributing volume, or initiating re-warmup sequences without human intervention.",
  },
  {
    slug: "self-healing-deliverability",
    label: "Self-Healing Deliverability Network",
    pillarId: "deliverability",
    tier: "edge",
    summary:
      "A fully autonomous infrastructure that detects, diagnoses, and resolves deliverability issues without human intervention. The network continuously rebalances load, retires degraded domains, and provisions new sending capacity.",
  },
  {
    slug: "ai-send-optimization",
    label: "AI-Driven Send Optimization Engine",
    pillarId: "deliverability",
    tier: "edge",
    summary:
      "An intelligence layer that optimizes every aspect of email delivery — from send time to routing path to throttling cadence — using real-time machine learning trained on billions of delivery outcomes.",
  },

  {
    slug: "multi-source-lead-builder",
    label: "Multi-Source Lead Database Builder",
    pillarId: "enrichment",
    tier: "foundational",
    summary:
      "A system that aggregates prospect data from multiple sources into a unified, deduplicated database. It combines public records, professional network data, company databases, and web scraping to build comprehensive target lists.",
  },
  {
    slug: "contact-verification-cascade",
    label: "Contact Verification Cascade",
    pillarId: "enrichment",
    tier: "foundational",
    summary:
      "A multi-step verification pipeline that validates email addresses through progressive checks — syntax, domain MX records, SMTP verification, and catch-all detection. Each step filters out invalid contacts before they enter your sending pipeline.",
  },
  {
    slug: "firmographic-segmentation",
    label: "Firmographic Segmentation Engine",
    pillarId: "enrichment",
    tier: "foundational",
    summary:
      "A classification system that segments prospect companies by size, industry, revenue, technology stack, and growth signals. It transforms raw company data into actionable segments that map to your ideal customer profiles.",
  },
  {
    slug: "suppression-compliance-layer",
    label: "Suppression & Compliance Layer",
    pillarId: "enrichment",
    tier: "foundational",
    summary:
      "An automated system that maintains suppression lists, processes opt-outs, and ensures outreach complies with regional regulations. It prevents legal exposure and protects sender reputation from compliance-related complaints.",
  },
  {
    slug: "intent-signal-platform",
    label: "Intent Signal Aggregation Platform",
    pillarId: "enrichment",
    tier: "intermediate",
    summary:
      "A platform that captures and correlates buyer intent signals from multiple sources — content consumption, search behavior, review site activity, and competitive research patterns — to identify accounts actively in-market.",
  },
  {
    slug: "technographic-hiring-signals",
    label: "Technographic & Hiring Signal Capture",
    pillarId: "enrichment",
    tier: "intermediate",
    summary:
      "Monitoring systems that detect technology adoption changes and hiring patterns at target accounts. New tool implementations and role openings are strong indicators of budget allocation and organizational priorities.",
  },
  {
    slug: "dynamic-micro-segmentation",
    label: "Dynamic Micro-Segmentation Framework",
    pillarId: "enrichment",
    tier: "intermediate",
    summary:
      "A system that continuously re-segments your prospect database based on evolving behavioral, firmographic, and intent data. Segments update in real-time as new signals arrive, ensuring outreach always targets the most relevant cohorts.",
  },
  {
    slug: "data-decay-detection",
    label: "Automated Data Decay Detection",
    pillarId: "enrichment",
    tier: "intermediate",
    summary:
      "An automated monitoring system that identifies when prospect data becomes stale — job changes, company moves, email bounces, or organizational restructuring — and triggers re-enrichment workflows before outdated data damages campaigns.",
  },
  {
    slug: "realtime-enrichment-waterfall",
    label: "Real-Time Enrichment Waterfall Pipeline",
    pillarId: "enrichment",
    tier: "advanced",
    summary:
      "A cascading enrichment architecture that queries multiple data providers in priority order, falling through to the next source when the primary returns insufficient data. It maximizes contact completeness while optimizing enrichment costs.",
  },
  {
    slug: "buyer-persona-scoring",
    label: "Buyer Persona Scoring Model",
    pillarId: "enrichment",
    tier: "advanced",
    summary:
      "A scoring model that evaluates each contact against your ideal buyer personas using weighted criteria — seniority, department, decision-making authority, and historical conversion patterns from similar profiles.",
  },
  {
    slug: "predictive-account-prioritization",
    label: "Predictive Account Prioritization Engine",
    pillarId: "enrichment",
    tier: "advanced",
    summary:
      "A machine learning system that ranks accounts by probability of conversion based on patterns from historical wins. It directs outbound effort toward the accounts most likely to generate pipeline, maximizing team productivity.",
  },
  {
    slug: "autonomous-data-intelligence",
    label: "Autonomous Data Intelligence Network",
    pillarId: "enrichment",
    tier: "edge",
    summary:
      "A fully self-operating data infrastructure that continuously discovers, verifies, enriches, and prioritizes new prospects without human intervention. It autonomously expands your addressable market and maintains data freshness.",
  },
  {
    slug: "cross-platform-signal-fusion",
    label: "Cross-Platform Signal Fusion Layer",
    pillarId: "enrichment",
    tier: "edge",
    summary:
      "An advanced correlation engine that fuses signals across disparate platforms — social engagement, ad interactions, website behavior, community participation — into a unified intent score per account and contact.",
  },

  {
    slug: "persona-messaging-matrix",
    label: "Persona-Based Messaging Matrix",
    pillarId: "copywriting",
    tier: "foundational",
    summary:
      "A structured framework that maps specific pain points, value propositions, and proof points to each buyer persona. It ensures every outbound message speaks directly to the recipient's role-specific challenges and priorities.",
  },
  {
    slug: "ab-testing-framework",
    label: "A/B Testing Framework",
    pillarId: "copywriting",
    tier: "foundational",
    summary:
      "A systematic approach to testing message variations with statistical rigor. It isolates variables — subject lines, opening hooks, CTAs — and determines winners based on meaningful sample sizes rather than gut feel.",
  },
  {
    slug: "centralized-copy-repository",
    label: "Centralized Copy Repository",
    pillarId: "copywriting",
    tier: "foundational",
    summary:
      "A single source of truth for all outbound messaging assets — templates, sequences, snippets, and proof points. It eliminates scattered copies across individual rep folders and enables organization-wide learning from top performers.",
  },
  {
    slug: "followup-sequence-templates",
    label: "Follow-Up Sequence Templates",
    pillarId: "copywriting",
    tier: "foundational",
    summary:
      "Pre-built multi-step follow-up frameworks that escalate value with each touch rather than simply repeating the ask. Each step introduces new angles, proof points, or triggers designed to re-engage prospects who didn't respond initially.",
  },
  {
    slug: "spintax-variation-engine",
    label: "Spintax Variation Engine",
    pillarId: "copywriting",
    tier: "intermediate",
    summary:
      "A system that generates hundreds of unique email variations from template structures using dynamic text rotation. It prevents pattern detection by spam filters and ensures no two recipients receive identical messaging.",
  },
  {
    slug: "multivariate-testing-platform",
    label: "Multi-Variate Testing Platform",
    pillarId: "copywriting",
    tier: "intermediate",
    summary:
      "An advanced testing system that simultaneously evaluates multiple variables across subject line, body copy, CTA, and send time. It identifies the highest-performing combinations across dimensions rather than testing one variable at a time.",
  },
  {
    slug: "performance-scored-library",
    label: "Performance-Scored Copy Library",
    pillarId: "copywriting",
    tier: "intermediate",
    summary:
      "A copy repository where every template and variation carries a performance score based on open rates, reply rates, and meeting conversion. It enables teams to instantly identify top-performing messaging for each segment and persona.",
  },
  {
    slug: "value-escalation-logic",
    label: "Value-Escalation Sequence Logic",
    pillarId: "copywriting",
    tier: "intermediate",
    summary:
      "A sequence architecture where each follow-up step deliberately increases the perceived value offered to the prospect. Rather than repeating the same pitch, each touch introduces stronger proof, more specific insights, or higher-leverage offers.",
  },
  {
    slug: "ai-personalization-layer",
    label: "AI-Powered Personalization Layer",
    pillarId: "copywriting",
    tier: "advanced",
    summary:
      "An AI system that automatically generates personalized opening lines, references, and talking points for each prospect using their public activity, company news, and professional context — at scale, without manual research.",
  },
  {
    slug: "dynamic-offer-assembly",
    label: "Dynamic Offer Assembly System",
    pillarId: "copywriting",
    tier: "advanced",
    summary:
      "A system that dynamically assembles the most relevant offer for each prospect based on their segment, engagement history, and intent signals. It moves beyond static offers to contextually appropriate value propositions.",
  },
  {
    slug: "automated-copy-retirement",
    label: "Automated Copy Retirement & Iteration",
    pillarId: "copywriting",
    tier: "advanced",
    summary:
      "An automated lifecycle manager for copy assets that monitors performance decay over time, retires underperforming variants, and triggers the creation of replacements based on patterns from current top performers.",
  },
  {
    slug: "generative-outbound-engine",
    label: "Generative Outbound Copy Engine",
    pillarId: "copywriting",
    tier: "edge",
    summary:
      "A generative AI system that produces net-new outbound messaging tailored to each prospect and campaign context. It learns from historical performance data to generate copy that consistently outperforms human-written alternatives.",
  },
  {
    slug: "self-optimizing-messaging",
    label: "Self-Optimizing Messaging Network",
    pillarId: "copywriting",
    tier: "edge",
    summary:
      "A closed-loop system where messaging continuously evolves based on real-time engagement data. The network autonomously generates, tests, promotes, and retires copy variants without human oversight.",
  },

  {
    slug: "automated-email-sequence-engine",
    label: "Automated Email Sequence Engine",
    pillarId: "orchestration",
    tier: "foundational",
    summary:
      "The core automation layer that executes multi-step email sequences on autopilot — handling delays, follow-ups, and stop conditions based on prospect engagement. It frees reps from manual send-by-send execution.",
  },
  {
    slug: "multi-channel-coordination",
    label: "Multi-Channel Coordination Layer",
    pillarId: "orchestration",
    tier: "foundational",
    summary:
      "A system that coordinates outreach across email, professional networks, and social platforms into a unified sequence. It ensures prospects experience a coherent, non-repetitive multi-touchpoint journey rather than fragmented channel-specific blasts.",
  },
  {
    slug: "timezone-scheduling",
    label: "Time-Zone Aware Scheduling System",
    pillarId: "orchestration",
    tier: "foundational",
    summary:
      "An intelligent scheduling layer that delivers messages during optimal windows based on each prospect's time zone and day-of-week engagement patterns. It maximizes open rates by reaching prospects when they're most likely to engage.",
  },
  {
    slug: "territory-routing-rules",
    label: "Territory & Ownership Routing Rules",
    pillarId: "orchestration",
    tier: "foundational",
    summary:
      "A rules engine that assigns prospects to team members based on territory, account size, or specialty — preventing duplication, ensuring coverage, and maintaining clean handoffs between team members.",
  },
  {
    slug: "touchpoint-governance",
    label: "Cross-Channel Touchpoint Governance",
    pillarId: "orchestration",
    tier: "intermediate",
    summary:
      "A unified control system that enforces total touchpoint limits across all channels. It prevents prospect fatigue by ensuring no contact receives more combined outreach than the optimal threshold regardless of which channels are active.",
  },
  {
    slug: "engagement-branching",
    label: "Engagement-Based Branching Logic",
    pillarId: "orchestration",
    tier: "intermediate",
    summary:
      "Conditional logic that dynamically adjusts the next sequence step based on how the prospect engaged — opened but didn't reply, clicked a link, replied with a question, or showed no engagement at all. Each path optimizes for the observed behavior.",
  },
  {
    slug: "response-classification-routing",
    label: "Response Classification & Routing",
    pillarId: "orchestration",
    tier: "intermediate",
    summary:
      "An automated system that classifies incoming responses by type — positive interest, objection, out-of-office, referral, opt-out — and routes each to the appropriate handler or workflow without manual inbox triage.",
  },
  {
    slug: "fatigue-scoring-throttling",
    label: "Fatigue Scoring & Throttling Engine",
    pillarId: "orchestration",
    tier: "intermediate",
    summary:
      "A scoring system that tracks cumulative outreach pressure per prospect and automatically throttles or pauses sequences when fatigue thresholds are approached. It protects long-term relationship potential over short-term outreach volume.",
  },
  {
    slug: "ai-send-time-engine",
    label: "AI-Optimized Send-Time Engine",
    pillarId: "orchestration",
    tier: "advanced",
    summary:
      "A machine learning system that determines the optimal send time for each individual prospect based on their historical engagement patterns, not just generalized time-zone rules. It maximizes per-message engagement probability.",
  },
  {
    slug: "unified-sequence-orchestrator",
    label: "Unified Sequence Orchestrator",
    pillarId: "orchestration",
    tier: "advanced",
    summary:
      "A central control plane that manages all active sequences across all channels, team members, and campaigns. It provides a single view of who is being contacted, when, through which channel, and by whom.",
  },
  {
    slug: "conflict-resolution-system",
    label: "Real-Time Conflict Resolution System",
    pillarId: "orchestration",
    tier: "advanced",
    summary:
      "An automated system that detects and resolves scheduling conflicts, duplicate outreach, and territory overlaps in real time. It prevents the coordination failures that damage prospect experience in multi-rep organizations.",
  },
  {
    slug: "autonomous-multichannel-network",
    label: "Autonomous Multi-Channel Execution Network",
    pillarId: "orchestration",
    tier: "edge",
    summary:
      "A fully autonomous orchestration system that plans, executes, and adapts multi-channel sequences without human intervention. It dynamically selects channels, timing, and messaging based on real-time prospect behavior.",
  },
  {
    slug: "predictive-cadence-engine",
    label: "Predictive Cadence Optimization Engine",
    pillarId: "orchestration",
    tier: "edge",
    summary:
      "A predictive system that determines the optimal number, spacing, and channel mix of touchpoints for each prospect based on their profile similarity to historical converters. It maximizes conversion probability per sequence.",
  },

  {
    slug: "ai-inbox-management",
    label: "AI Inbox Management & Reply Handling",
    pillarId: "growth",
    tier: "foundational",
    summary:
      "An AI-powered system that monitors inboxes, classifies responses, handles routine replies, manages objections, and escalates high-intent conversations to humans. It eliminates the bottleneck of manual inbox monitoring.",
  },
  {
    slug: "automated-meeting-booking",
    label: "Automated Meeting Booking Protocol",
    pillarId: "growth",
    tier: "foundational",
    summary:
      "An automated system that detects positive buying signals in replies and immediately offers calendar booking options — handling the back-and-forth scheduling that typically adds days of latency between interest and conversation.",
  },
  {
    slug: "bidirectional-crm-sync",
    label: "Bi-Directional CRM Sync Engine",
    pillarId: "growth",
    tier: "foundational",
    summary:
      "A real-time synchronization layer that pushes all outbound activity, engagement data, and responses into the CRM while pulling ownership rules, deal stages, and suppression lists back into the outbound engine.",
  },
  {
    slug: "attribution-reporting-layer",
    label: "Basic Attribution & Reporting Layer",
    pillarId: "growth",
    tier: "foundational",
    summary:
      "A reporting system that connects outbound activity to pipeline creation and revenue outcomes. It provides visibility into which campaigns, sequences, and messages are generating real business results.",
  },
  {
    slug: "full-funnel-attribution",
    label: "Full-Funnel Attribution Model",
    pillarId: "growth",
    tier: "intermediate",
    summary:
      "A multi-touch attribution system that traces the complete journey from first outbound touch through closed deal. It assigns weighted credit to each touchpoint, enabling accurate ROI measurement across the entire funnel.",
  },
  {
    slug: "lead-recycling-system",
    label: "Lead Recycling & Re-Engagement System",
    pillarId: "growth",
    tier: "intermediate",
    summary:
      "A system that identifies previously unresponsive leads who now show new buying signals — job changes, funding rounds, technology purchases — and automatically re-enters them into appropriate sequences.",
  },
  {
    slug: "pipeline-stage-automation",
    label: "Pipeline Stage Automation Engine",
    pillarId: "growth",
    tier: "intermediate",
    summary:
      "An automation layer that moves deals through pipeline stages based on defined criteria and engagement milestones. It ensures pipeline hygiene, accurate forecasting, and timely follow-up actions at each stage transition.",
  },
  {
    slug: "cohort-performance-analytics",
    label: "Cohort Performance Analytics",
    pillarId: "growth",
    tier: "intermediate",
    summary:
      "An analytics system that tracks outbound performance by cohort — segment, campaign, time period, rep — to identify what's working, what's degrading, and where to allocate increased investment.",
  },
  {
    slug: "autonomous-scaling-architecture",
    label: "Autonomous Scaling Architecture",
    pillarId: "growth",
    tier: "advanced",
    summary:
      "An infrastructure design that allows outbound volume to scale without proportional headcount growth. Automation handles execution while humans focus exclusively on strategy, creative, and high-value conversations.",
  },
  {
    slug: "ai-optimization-recommendations",
    label: "AI-Generated Optimization Recommendations",
    pillarId: "growth",
    tier: "advanced",
    summary:
      "An AI system that continuously analyzes campaign performance and generates specific, actionable recommendations for improvement — which segments to expand, which copy to retire, which channels to increase.",
  },
  {
    slug: "signal-triggered-reengagement",
    label: "Signal-Triggered Re-Engagement Workflows",
    pillarId: "growth",
    tier: "advanced",
    summary:
      "Automated workflows that activate based on specific external triggers — a prospect changing jobs, their company raising funding, or visiting your pricing page — rather than arbitrary time-based schedules.",
  },
  {
    slug: "self-optimizing-growth-loop",
    label: "Self-Optimizing Growth Loop",
    pillarId: "growth",
    tier: "edge",
    summary:
      "A closed-loop system where the outbound engine continuously improves its own performance — adjusting targeting, messaging, timing, and channel mix based on outcome data without requiring human analysis or intervention.",
  },
  {
    slug: "predictive-pipeline-intelligence",
    label: "Predictive Pipeline Intelligence Network",
    pillarId: "growth",
    tier: "edge",
    summary:
      "An advanced intelligence layer that predicts future pipeline outcomes from current outbound activity patterns. It provides leading indicators of pipeline health weeks before outcomes materialize in the CRM.",
  },
];

const SLUG_BY_LABEL: Record<string, string> = GLOSSARY.reduce(
  (acc, e) => {
    acc[e.label] = e.slug;
    return acc;
  },
  {} as Record<string, string>
);

export function slugForResource(label: string): string {
  return (
    SLUG_BY_LABEL[label] ??
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}
