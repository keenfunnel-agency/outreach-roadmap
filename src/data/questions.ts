export type Option = { label: string; text: string; score: 1 | 2 | 3 | 5 };
export type Question = { id: number; pillarId: string; text: string; options: Option[] };
export type Pillar = { id: string; name: string; short: string; description: string };

export const PILLARS: Pillar[] = [
  {
    id: "data",
    name: "Data Infrastructure & Architecture",
    short: "Data",
    description: "Foundational data systems, API architecture, and intelligence capacity.",
  },
  {
    id: "automation",
    name: "Automation & Operational Workflows",
    short: "Automation",
    description: "Process autonomy, agentic AI deployment, and orchestration velocity.",
  },
  {
    id: "cxro",
    name: "Customer Experience & Revenue Operations",
    short: "CX & RevOps",
    description: "Digital visibility, conversational intelligence, and dynamic revenue strategy.",
  },
  {
    id: "culture",
    name: "Corporate Culture & Internal Tools",
    short: "Culture",
    description: "Organizational readiness, AI upskilling, and leadership posture.",
  },
  {
    id: "governance",
    name: "AI Governance, Security & Compliance",
    short: "Governance",
    description: "Risk mapping, auditing, certification readiness, and IP protection.",
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
  mk(1, "data", "How interconnected is your core software stack?",
    "Siloed systems with no interoperability.",
    "Connected via manual exports and imports.",
    "Connected via standard integration tools.",
    "Fully centralized Headless Data Architecture."),
  mk(2, "data", "How do you handle unstructured data (documents, PDFs)?",
    "Manual reading and interpretation.",
    "Legacy text extraction utilities.",
    "Rule-based routing and classification.",
    "Advanced AI vectorization for semantic search."),
  mk(3, "data", "What is the state of your API architecture?",
    "Closed systems with no public interface.",
    "Occasional ad-hoc scripts and connectors.",
    "Consuming external APIs with middleware.",
    "True API-first architecture across the stack."),
  mk(4, "data", "How is data quality maintained?",
    "Reactive fixes when problems surface.",
    "Periodic manual audits.",
    "Scheduled cleansing routines.",
    "Automated, real-time validation pipelines."),
  mk(5, "data", "How is historical business data utilized?",
    "Archived or ignored.",
    "Manual reporting on demand.",
    "Standard Business Intelligence dashboards.",
    "Predictive modeling and forecasting."),
  mk(6, "data", "What is your data scaling capacity?",
    "Constrained by local hardware limits.",
    "Basic cloud storage in place.",
    "Auto-scaling cloud databases.",
    "Decentralized, edge-computing ready."),

  mk(7, "automation", "Current level of task automation?",
    "Largely manual.",
    "Local scripts on individual machines.",
    "Cloud-based rule engines.",
    "Autonomous AI decision-making."),
  mk(8, "automation", "Do you utilize Generative AI in operations?",
    "None.",
    "Unstructured 'shadow IT' usage by teams.",
    "Specific deployments in isolated silos.",
    "Natively integrated in internal software."),
  mk(9, "automation", "Have you deployed Agentic AI?",
    "No.",
    "Under research and evaluation.",
    "Isolated pilot programs.",
    "Running in production 24/7."),
  mk(10, "automation", "How is cross-department orchestration handled?",
    "Email and messaging threads.",
    "Spreadsheets and manual tracking.",
    "Project management software.",
    "Intelligent AI-driven orchestration platforms."),
  mk(11, "automation", "How do you handle automation exceptions?",
    "The system breaks and halts.",
    "Manual intervention required.",
    "Rule-based fallback flows.",
    "AI-driven self-correction."),
  mk(12, "automation", "Internal tool deployment velocity?",
    "Years to ship new internal tools.",
    "Weeks to months.",
    "Days, using low-code platforms.",
    "Hours, via AI-assisted development."),

  mk(13, "cxro", "Digital visibility strategy?",
    "Traditional keyword SEO only.",
    "Aware of the AI shift but not acting.",
    "Scaling AI-generated content.",
    "Full Answer Engine Optimization (AEO)."),
  mk(14, "cxro", "Inbound complex query handling?",
    "100% human-handled.",
    "Static menus and FAQ trees.",
    "Basic chatbot flows.",
    "Fine-tuned corporate language models."),
  mk(15, "cxro", "Lead generation & qualification?",
    "Static forms only.",
    "Auto-responders on submission.",
    "Behavior-based lead scoring.",
    "AI conversational qualification agents."),
  mk(16, "cxro", "Customer personalization level?",
    "Generic messaging for all.",
    "Broad demographic segments.",
    "Triggered lifecycle journeys.",
    "Hyper-personalized AI experiences."),
  mk(17, "cxro", "Customer sentiment analysis?",
    "None conducted.",
    "Manual surveys.",
    "Keyword-based tracking.",
    "Real-time NLP sentiment analysis."),
  mk(18, "cxro", "Pricing and offers strategy?",
    "Static price lists.",
    "Periodic competitive analysis.",
    "Rule-based promotional engines.",
    "Dynamic algorithmic pricing."),

  mk(19, "culture", "Internal knowledge management?",
    "Scattered institutional memory.",
    "Shared network drives.",
    "Static intranet portals.",
    "Interactive AI knowledge base."),
  mk(20, "culture", "Employee AI training?",
    "None.",
    "Informal peer sharing.",
    "Optional workshops.",
    "Mandatory structured upskilling."),
  mk(21, "culture", "Dedicated AI R&D budget?",
    "None.",
    "Tied into unrelated project budgets.",
    "Approved case-by-case.",
    "Protected annual budget line."),
  mk(22, "culture", "Leadership view on AI?",
    "A passing trend.",
    "A cost-saving gimmick.",
    "An operational necessity.",
    "The foundation of the business model."),
  mk(23, "culture", "Performance measurement for AI initiatives?",
    "No measurement.",
    "Login and usage rates.",
    "Time saved metrics.",
    "ROI linked directly to revenue."),
  mk(24, "culture", "Employee onboarding state?",
    "Manual shadowing.",
    "Static videos and PDFs.",
    "Interactive e-learning courses.",
    "AI-driven customized co-pilots."),

  mk(25, "governance", "Data privacy with AI systems?",
    "Team uses public consumer tools.",
    "Basic internal guidelines.",
    "Manual anonymization workflows.",
    "Secure enterprise APIs with controls."),
  mk(26, "governance", "AI risk mapping against global acts?",
    "Unaware of regulatory landscape.",
    "Researching obligations.",
    "Legal review underway.",
    "Full documented risk taxonomy."),
  mk(27, "governance", "Algorithm auditing practices?",
    "Assume algorithms are correct.",
    "Reactive review after incidents.",
    "Periodic scheduled checks.",
    "Continuous automated monitoring."),
  mk(28, "governance", "AI Management Certification (e.g. ISO 42001)?",
    "Not considered.",
    "Internal ethical discussions only.",
    "Voluntary alignment with frameworks.",
    "Ready for formal certification audit."),
  mk(29, "governance", "Third-party AI vendor evaluation?",
    "Price-driven selection.",
    "Basic IT security checklist.",
    "Standard contractual agreements.",
    "Algorithmic audits & zero-retention SLAs."),
  mk(30, "governance", "IP protection in AI-generated content?",
    "No policy in place.",
    "Reliance on vendor terms of service.",
    "Manual legal review of outputs.",
    "Automated cryptographic watermarking."),
];

export function getMaturityLevel(total: number): { level: number; name: string; summary: string } {
  const bands: Array<{ min: number; max: number; name: string; summary: string }> = [
    { min: 30, max: 41, name: "Nascent", summary: "Foundational gaps across every pillar. Strategic intervention is required before scaling any AI initiative." },
    { min: 42, max: 53, name: "Exploratory", summary: "Early awareness without structure. Initial experimentation is underway but disconnected from enterprise strategy." },
    { min: 54, max: 65, name: "Emerging", summary: "Pockets of capability. Infrastructure debt and governance gaps still constrain scale." },
    { min: 66, max: 77, name: "Developing", summary: "Credible progress on multiple pillars. Orchestration and governance are the primary friction points." },
    { min: 78, max: 89, name: "Operational", summary: "AI is operational but not yet a strategic differentiator. Integration depth remains the main bottleneck." },
    { min: 90, max: 101, name: "Integrated", summary: "AI is integrated into core workflows. Competitive advantage is emerging from compounding automation." },
    { min: 102, max: 113, name: "Advanced", summary: "Advanced architecture in place. Focus shifts to agentic systems and governance maturity." },
    { min: 114, max: 125, name: "Optimized", summary: "Highly optimized stack. AI-native processes deliver measurable revenue impact." },
    { min: 126, max: 137, name: "Transformative", summary: "AI is transformative across the P&L. Governance and moat-building are at elite tier." },
    { min: 138, max: 150, name: "Category-Defining", summary: "Category-defining AI architecture. The organization is effectively an AI-native business." },
  ];
  for (let i = 0; i < bands.length; i++) {
    const b = bands[i];
    if (total >= b.min && total <= b.max) return { level: i + 1, name: b.name, summary: b.summary };
  }
  if (total < 30) return { level: 1, name: "Nascent", summary: bands[0].summary };
  return { level: 10, name: "Category-Defining", summary: bands[9].summary };
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
  data: {
    initiative: "Full Data Orchestration & Semantic Intelligence Layer",
    baseHours: 700,
    tiers: {
      foundational: [
        "Centralized Headless Data Lakehouse",
        "Schema-Enforced API Gateway",
        "Master Data Management Hub",
        "Cloud Object Storage Backbone",
      ],
      intermediate: [
        "High-Performance Vector Database",
        "Semantic Embedding & Indexing Pipeline",
        "Automated Data Quality & Lineage Framework",
        "Federated Identity & Access Catalog",
      ],
      advanced: [
        "Elastic Event Streaming Bus",
        "Real-Time Change Data Capture Layer",
        "Distributed Feature Store",
      ],
      edge: [
        "Edge-Computing Inference Mesh",
        "Decentralized Storage Vault Network",
      ],
    },
  },
  automation: {
    initiative: "Agentic Workflow Fabric & Autonomous Operations",
    baseHours: 600,
    tiers: {
      foundational: [
        "Deterministic Workflow Orchestration Engine",
        "Internal Tooling Platform (Low-Code + AI-Assisted)",
        "Robotic Process Automation Framework",
        "Task Queue & Job Scheduling Backbone",
      ],
      intermediate: [
        "Multi-Agent Orchestration Runtime",
        "LLM Routing & Cost-Optimization Gateway",
        "Human-in-the-Loop Approval Console",
        "Exception Handling & Self-Correction Subsystem",
      ],
      advanced: [
        "Autonomous Agent Memory & State Store",
        "Workflow Observability & Telemetry Stack",
        "Cross-Department Process Mining Engine",
      ],
      edge: [
        "Self-Optimizing Reinforcement Learning Loop",
        "Federated Agent Collaboration Protocol",
      ],
    },
  },
  cxro: {
    initiative: "Conversational Revenue Engine & Answer Engine Optimization",
    baseHours: 550,
    tiers: {
      foundational: [
        "Conversational Brand Knowledge Layer",
        "AEO Content & Structured Data Pipeline",
        "Unified Customer Data Platform",
        "Inbound Lead Capture & Routing Engine",
      ],
      intermediate: [
        "Fine-Tuned Corporate Conversational Model",
        "AI Lead Qualification Agent Cluster",
        "Real-Time NLP Sentiment & Intent Layer",
        "Hyper-Personalization ML Inference Engine",
      ],
      advanced: [
        "Dynamic Pricing & Offer Optimization Engine",
        "Predictive Churn & Expansion Modeling Service",
        "Voice-of-Customer Synthesis Pipeline",
      ],
      edge: [
        "Generative Conversational Commerce Surface",
        "Autonomous Revenue Agent Network",
      ],
    },
  },
  culture: {
    initiative: "AI-Native Organizational Operating System",
    baseHours: 400,
    tiers: {
      foundational: [
        "Interactive AI Knowledge Base",
        "Structured AI Upskilling Curriculum & LMS",
        "Centralized Documentation & Wiki Layer",
        "Internal AI Policy & Acceptable-Use Charter",
      ],
      intermediate: [
        "Employee Co-pilot Layer",
        "Executive AI Governance Council Playbook",
        "AI ROI Measurement & Attribution Framework",
        "Department-Level AI Champion Program",
      ],
      advanced: [
        "Skills Graph & Capability Mapping Engine",
        "AI-Assisted Onboarding & Ramp-Up Service",
        "Cross-Functional AI Pod Operating Model",
      ],
      edge: [
        "Workforce Productivity Telemetry Mesh",
        "Enterprise Innovation Sandbox Environment",
      ],
    },
  },
  governance: {
    initiative: "Enterprise AI Trust, Risk & Compliance Backbone",
    baseHours: 475,
    tiers: {
      foundational: [
        "Secure Enterprise LLM Gateway",
        "AI Risk Taxonomy & Regulatory Map",
        "Data Classification & Sensitivity Tagging Service",
        "Vendor AI Assurance & Zero-Retention SLA Framework",
      ],
      intermediate: [
        "Continuous Algorithmic Auditing Platform",
        "Model Card & System-of-Record Registry",
        "Privacy-Enhancing Technology Toolkit",
        "AI Incident Response & Forensics Runbook",
      ],
      advanced: [
        "ISO 42001-Ready Management System Documentation",
        "Cryptographic Watermarking & Provenance Service",
        "Bias, Fairness & Drift Monitoring Service",
      ],
      edge: [
        "Confidential Computing & Secure Enclave Layer",
        "Algorithmic Red-Team & Adversarial Testing Lab",
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
