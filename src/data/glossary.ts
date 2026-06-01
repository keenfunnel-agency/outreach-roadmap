export type GlossaryTier = "foundational" | "intermediate" | "advanced" | "edge";

export type GlossaryEntry = {
  slug: string;
  label: string;
  pillarId: "data" | "automation" | "cxro" | "culture" | "governance";
  tier: GlossaryTier;
  summary: string;
};

export const GLOSSARY: GlossaryEntry[] = [
  {
    slug: "centralized-data-lakehouse",
    label: "Centralized Headless Data Lakehouse",
    pillarId: "data",
    tier: "foundational",
    summary:
      "A single analytical substrate that consolidates structured, semi-structured, and unstructured data, decoupled from any specific application. It eliminates data silos and becomes the single source of truth that every AI initiative, BI dashboard, and customer-facing product can rely on.",
  },
  {
    slug: "schema-enforced-api-gateway",
    label: "Schema-Enforced API Gateway",
    pillarId: "data",
    tier: "foundational",
    summary:
      "A controlled entry and exit point for every system that exchanges data with the enterprise. Strict schema enforcement prevents malformed payloads, accelerates partner integrations, and produces a defensible audit trail of all machine-to-machine traffic.",
  },
  {
    slug: "master-data-management-hub",
    label: "Master Data Management Hub",
    pillarId: "data",
    tier: "foundational",
    summary:
      "Reconciles canonical records for customers, products, and entities across every operational system. It removes the executive blindspot of contradictory reports and is the prerequisite for any cross-functional AI use case.",
  },
  {
    slug: "cloud-object-storage-backbone",
    label: "Cloud Object Storage Backbone",
    pillarId: "data",
    tier: "foundational",
    summary:
      "Elastic, durable storage tier sized for petabyte-scale growth without capital expenditure. It collapses storage cost as a barrier and unlocks the long-tail data that frontier AI workloads depend on.",
  },
  {
    slug: "vector-database",
    label: "High-Performance Vector Database",
    pillarId: "data",
    tier: "intermediate",
    summary:
      "The retrieval engine that lets AI understand company knowledge by meaning rather than exact keywords. It returns the most relevant document, contract, or insight in milliseconds, even across millions of records.",
  },
  {
    slug: "semantic-embedding-pipeline",
    label: "Semantic Embedding & Indexing Pipeline",
    pillarId: "data",
    tier: "intermediate",
    summary:
      "An automated pipeline that continuously transforms enterprise content into machine-understandable representations. It is the production line that keeps every AI feature current with the latest knowledge as the business evolves.",
  },
  {
    slug: "data-quality-lineage",
    label: "Automated Data Quality & Lineage Framework",
    pillarId: "data",
    tier: "intermediate",
    summary:
      "Continuously profiles, validates, and traces every dataset back to its origin. It is the single biggest unlock for credible AI forecasting and the fastest way to retire silent data debt.",
  },
  {
    slug: "federated-identity-catalog",
    label: "Federated Identity & Access Catalog",
    pillarId: "data",
    tier: "intermediate",
    summary:
      "Unifies who can access what data, across systems, into one policy surface. It enables fine-grained least-privilege access at AI scale without slowing the business down.",
  },
  {
    slug: "event-streaming-bus",
    label: "Elastic Event Streaming Bus",
    pillarId: "data",
    tier: "advanced",
    summary:
      "A horizontally elastic backbone that broadcasts every meaningful business event to every downstream consumer in real time. It transforms reporting culture into a live, decision-ready organization.",
  },
  {
    slug: "change-data-capture",
    label: "Real-Time Change Data Capture Layer",
    pillarId: "data",
    tier: "advanced",
    summary:
      "Captures every row-level change in operational databases and propagates it instantly across the analytical and AI estate. It eliminates batch latency as a constraint on time-sensitive decisions.",
  },
  {
    slug: "feature-store",
    label: "Distributed Feature Store",
    pillarId: "data",
    tier: "advanced",
    summary:
      "A governed catalog of reusable model features served consistently for both training and live inference. It compounds the productivity of every data science team and prevents online/offline skew in production models.",
  },
  {
    slug: "edge-inference-mesh",
    label: "Edge-Computing Inference Mesh",
    pillarId: "data",
    tier: "edge",
    summary:
      "Distributes model execution to where data is created — devices, branches, retail surfaces — for sub-millisecond response. It enables AI experiences that are physically impossible on a centralized cloud topology.",
  },
  {
    slug: "decentralized-storage-vaults",
    label: "Decentralized Storage Vault Network",
    pillarId: "data",
    tier: "edge",
    summary:
      "Sensitive assets are stored across compartmentalized vaults with explicit access policies and jurisdictional flexibility. It removes single points of failure and provides a defensible posture for regulators and enterprise clients.",
  },

  {
    slug: "workflow-orchestration-engine",
    label: "Deterministic Workflow Orchestration Engine",
    pillarId: "automation",
    tier: "foundational",
    summary:
      "A reliable backbone for long-running business processes with explicit retries, timeouts, and audit trails. It guarantees that nothing is silently dropped, even when external systems fail or humans pause to review.",
  },
  {
    slug: "internal-tooling-platform",
    label: "Internal Tooling Platform (Low-Code + AI-Assisted)",
    pillarId: "automation",
    tier: "foundational",
    summary:
      "A standardized environment where operators ship internal applications in hours instead of quarters. It collapses the cost of building bespoke software and turns operational ideas into running tools at the speed of strategy.",
  },
  {
    slug: "rpa-framework",
    label: "Robotic Process Automation Framework",
    pillarId: "automation",
    tier: "foundational",
    summary:
      "Automates deterministic, rules-based tasks that bridge legacy systems lacking modern APIs. It captures immediate productivity gains while more strategic AI investments are being built underneath.",
  },
  {
    slug: "task-queue-scheduler",
    label: "Task Queue & Job Scheduling Backbone",
    pillarId: "automation",
    tier: "foundational",
    summary:
      "A horizontally scalable substrate that absorbs unpredictable workload spikes and runs background jobs reliably. It is the silent engine that prevents customer-facing systems from buckling under load.",
  },
  {
    slug: "agent-orchestration-runtime",
    label: "Multi-Agent Orchestration Runtime",
    pillarId: "automation",
    tier: "intermediate",
    summary:
      "The control plane that coordinates specialized AI agents to complete complex business processes end-to-end. Instead of point automations, the organization operates a fleet of digital workers with clear handoffs and accountability.",
  },
  {
    slug: "llm-routing-gateway",
    label: "LLM Routing & Cost-Optimization Gateway",
    pillarId: "automation",
    tier: "intermediate",
    summary:
      "A central layer that decides which language model handles each request based on quality, latency, and price. It typically reduces AI spend by 40-70% while giving finance and engineering one place to govern usage.",
  },
  {
    slug: "human-in-the-loop-console",
    label: "Human-in-the-Loop Approval Console",
    pillarId: "automation",
    tier: "intermediate",
    summary:
      "A dedicated workspace where humans review and approve high-stakes AI decisions with full context. It is what allows leadership to scale automation aggressively without inheriting unbounded operational risk.",
  },
  {
    slug: "exception-self-correction",
    label: "Exception Handling & Self-Correction Subsystem",
    pillarId: "automation",
    tier: "intermediate",
    summary:
      "Lets automated processes recover gracefully when reality diverges from expectation. Rather than halting on the first surprise, the system reroutes, retries, or escalates with full context preserved.",
  },
  {
    slug: "agent-memory-store",
    label: "Autonomous Agent Memory & State Store",
    pillarId: "automation",
    tier: "advanced",
    summary:
      "A durable memory layer that gives AI agents continuity of context across sessions, tasks, and users. It is the difference between agents that forget every interaction and agents that compound learning over time.",
  },
  {
    slug: "workflow-observability",
    label: "Workflow Observability & Telemetry Stack",
    pillarId: "automation",
    tier: "advanced",
    summary:
      "End-to-end visibility into how every AI agent and automation behaves in production. Without it, the business is flying blind on quality, cost, and risk; with it, AI becomes a measurable line item.",
  },
  {
    slug: "process-mining-engine",
    label: "Cross-Department Process Mining Engine",
    pillarId: "automation",
    tier: "advanced",
    summary:
      "Reconstructs how work actually flows across the enterprise from system logs and reveals the hidden bottlenecks. It is the empirical foundation for prioritizing automation investments where they yield the most leverage.",
  },
  {
    slug: "reinforcement-learning-loop",
    label: "Self-Optimizing Reinforcement Learning Loop",
    pillarId: "automation",
    tier: "edge",
    summary:
      "A closed feedback system where AI policies improve themselves based on observed business outcomes. It transforms automation from a static asset into a compounding source of competitive advantage.",
  },
  {
    slug: "federated-agent-protocol",
    label: "Federated Agent Collaboration Protocol",
    pillarId: "automation",
    tier: "edge",
    summary:
      "A standardized protocol that allows agents from different teams, vendors, or business units to collaborate safely. It is the connective tissue for an agentic ecosystem rather than isolated point solutions.",
  },

  {
    slug: "brand-knowledge-layer",
    label: "Conversational Brand Knowledge Layer",
    pillarId: "cxro",
    tier: "foundational",
    summary:
      "A curated knowledge surface that captures how the brand answers, sells, and supports across every channel. It is the source material every customer-facing AI system needs to speak with executive consistency.",
  },
  {
    slug: "aeo-pipeline",
    label: "AEO Content & Structured Data Pipeline",
    pillarId: "cxro",
    tier: "foundational",
    summary:
      "Publishes structured, machine-readable representations of your offerings into the answer-engine ecosystem. As buyers shift from queries to conversations, this is what keeps the brand inside the recommended set.",
  },
  {
    slug: "unified-cdp",
    label: "Unified Customer Data Platform",
    pillarId: "cxro",
    tier: "foundational",
    summary:
      "Consolidates every customer signal from product, marketing, sales, and support into a single resolved profile. It is the precondition for any meaningful personalization or revenue intelligence program.",
  },
  {
    slug: "lead-capture-routing",
    label: "Inbound Lead Capture & Routing Engine",
    pillarId: "cxro",
    tier: "foundational",
    summary:
      "Captures every inbound interaction and routes it instantly to the right owner with full context. It removes the silent leakage that costs most organizations 20-40% of qualified pipeline.",
  },
  {
    slug: "corporate-conversational-model",
    label: "Fine-Tuned Corporate Conversational Model",
    pillarId: "cxro",
    tier: "intermediate",
    summary:
      "A language model adapted to your tone, products, and policies so it speaks for the brand with precision. It replaces brittle chatbot trees with conversations that feel native to your most experienced employees.",
  },
  {
    slug: "lead-qualification-cluster",
    label: "AI Lead Qualification Agent Cluster",
    pillarId: "cxro",
    tier: "intermediate",
    summary:
      "A team of conversational agents that engage, qualify, and route inbound leads 24/7. Sales teams receive only opportunities that are ready, materially increasing close rates and reducing cost per acquisition.",
  },
  {
    slug: "sentiment-intent-layer",
    label: "Real-Time NLP Sentiment & Intent Layer",
    pillarId: "cxro",
    tier: "intermediate",
    summary:
      "Analyzes every customer interaction as it happens to surface intent, friction, and churn risk. Leadership stops relying on quarterly survey lag and begins steering the experience while the conversation is still live.",
  },
  {
    slug: "personalization-inference-engine",
    label: "Hyper-Personalization ML Inference Engine",
    pillarId: "cxro",
    tier: "intermediate",
    summary:
      "Decides the next-best message, offer, or touchpoint per individual at real-time speed. It turns generic lifecycle marketing into a personalized growth engine measurable on revenue, not opens.",
  },
  {
    slug: "dynamic-pricing-engine",
    label: "Dynamic Pricing & Offer Optimization Engine",
    pillarId: "cxro",
    tier: "advanced",
    summary:
      "Adjusts pricing, bundles, and promotions in real time based on demand, segment, and competitive signals. It captures the margin that static price lists routinely leave on the table.",
  },
  {
    slug: "churn-expansion-modeling",
    label: "Predictive Churn & Expansion Modeling Service",
    pillarId: "cxro",
    tier: "advanced",
    summary:
      "Forecasts which accounts are at risk and which are ready to expand, with reasons attached. It allows revenue teams to act on the right account at the right time instead of retroactively explaining outcomes.",
  },
  {
    slug: "voice-of-customer-pipeline",
    label: "Voice-of-Customer Synthesis Pipeline",
    pillarId: "cxro",
    tier: "advanced",
    summary:
      "Continuously distills every call, ticket, review, and chat into prioritized executive insight. Product and revenue leaders make decisions on the totality of customer signal, not the loudest sample.",
  },
  {
    slug: "conversational-commerce-surface",
    label: "Generative Conversational Commerce Surface",
    pillarId: "cxro",
    tier: "edge",
    summary:
      "A conversational front-end where customers discover, configure, and buy entirely through dialogue. It is a step-change in conversion economics for any catalogue with meaningful complexity.",
  },
  {
    slug: "autonomous-revenue-network",
    label: "Autonomous Revenue Agent Network",
    pillarId: "cxro",
    tier: "edge",
    summary:
      "A coordinated network of AI agents that prospect, nurture, negotiate, and close inside guardrails set by leadership. It compresses sales-cycle latency and unlocks segments that were previously uneconomic to serve.",
  },

  {
    slug: "ai-knowledge-base",
    label: "Interactive AI Knowledge Base",
    pillarId: "culture",
    tier: "foundational",
    summary:
      "A conversational interface to everything the company knows, governed by who is allowed to see what. It replaces tribal knowledge and stale wikis with an always-on subject matter expert for every employee.",
  },
  {
    slug: "upskilling-curriculum-lms",
    label: "Structured AI Upskilling Curriculum & LMS",
    pillarId: "culture",
    tier: "foundational",
    summary:
      "A formal learning track that brings every function from awareness to fluency on AI tools and practices. It de-risks the human side of transformation and makes adoption an organizational baseline.",
  },
  {
    slug: "documentation-wiki-layer",
    label: "Centralized Documentation & Wiki Layer",
    pillarId: "culture",
    tier: "foundational",
    summary:
      "A canonical place where institutional knowledge is captured, versioned, and discoverable. It is the substrate that every AI knowledge product silently depends on for quality.",
  },
  {
    slug: "ai-acceptable-use-charter",
    label: "Internal AI Policy & Acceptable-Use Charter",
    pillarId: "culture",
    tier: "foundational",
    summary:
      "A clear, leadership-endorsed statement of how AI may and may not be used internally. It eliminates shadow AI usage and gives employees confidence to experiment within explicit guardrails.",
  },
  {
    slug: "employee-copilot-layer",
    label: "Employee Co-pilot Layer",
    pillarId: "culture",
    tier: "intermediate",
    summary:
      "A personalized AI co-pilot for each role that accelerates ramp-up and offloads routine cognitive work. New hires reach productivity faster, and tenured staff focus on higher-leverage decisions.",
  },
  {
    slug: "ai-governance-council-playbook",
    label: "Executive AI Governance Council Playbook",
    pillarId: "culture",
    tier: "intermediate",
    summary:
      "A defined operating cadence for senior leaders to set AI priorities, review risks, and unblock execution. It is the difference between AI as scattered experiments and AI as coordinated strategy.",
  },
  {
    slug: "ai-roi-framework",
    label: "AI ROI Measurement & Attribution Framework",
    pillarId: "culture",
    tier: "intermediate",
    summary:
      "Connects every AI initiative back to revenue, margin, or measurable risk reduction. It moves AI from a discretionary IT line item to a board-ready investment thesis.",
  },
  {
    slug: "ai-champion-program",
    label: "Department-Level AI Champion Program",
    pillarId: "culture",
    tier: "intermediate",
    summary:
      "A formal network of embedded champions who translate central AI strategy into departmental adoption. It is the most reliable mechanism for converting platform investment into observable behavior change.",
  },
  {
    slug: "skills-graph-engine",
    label: "Skills Graph & Capability Mapping Engine",
    pillarId: "culture",
    tier: "advanced",
    summary:
      "A live map of who can do what across the organization, updated from real activity rather than self-report. It enables surgical staffing, succession planning, and targeted upskilling at scale.",
  },
  {
    slug: "ai-onboarding-service",
    label: "AI-Assisted Onboarding & Ramp-Up Service",
    pillarId: "culture",
    tier: "advanced",
    summary:
      "An AI-driven onboarding experience that adapts to each new hire's role, level, and prior context. It compresses time-to-productivity from quarters to weeks and standardizes the first 90 days.",
  },
  {
    slug: "ai-pod-operating-model",
    label: "Cross-Functional AI Pod Operating Model",
    pillarId: "culture",
    tier: "advanced",
    summary:
      "Restructures execution into mission-aligned pods that combine product, engineering, data, and domain expertise. It is the organizational shape that consistently ships AI outcomes rather than AI demos.",
  },
  {
    slug: "workforce-productivity-mesh",
    label: "Workforce Productivity Telemetry Mesh",
    pillarId: "culture",
    tier: "edge",
    summary:
      "Captures how work actually gets done across tools and teams, with privacy-preserving aggregation. Leaders gain an empirical view of where AI is creating leverage and where it is not.",
  },
  {
    slug: "innovation-sandbox-environment",
    label: "Enterprise Innovation Sandbox Environment",
    pillarId: "culture",
    tier: "edge",
    summary:
      "A secured environment where teams can prototype with AI against realistic data without enterprise risk. It is what allows high-velocity experimentation without compromising governance posture.",
  },

  {
    slug: "secure-llm-gateway",
    label: "Secure Enterprise LLM Gateway",
    pillarId: "governance",
    tier: "foundational",
    summary:
      "A controlled, monitored access point through which all employee and system traffic to language models flows. Sensitive data is filtered, logged, and policy-enforced before it ever reaches an external provider.",
  },
  {
    slug: "ai-risk-taxonomy",
    label: "AI Risk Taxonomy & Regulatory Map",
    pillarId: "governance",
    tier: "foundational",
    summary:
      "A documented map of where the business uses AI, the risks each use carries, and how they map to regulations such as the EU AI Act. It is the foundation for any defensible compliance position.",
  },
  {
    slug: "data-classification-service",
    label: "Data Classification & Sensitivity Tagging Service",
    pillarId: "governance",
    tier: "foundational",
    summary:
      "Automatically labels every dataset by sensitivity, residency, and regulatory class. It is the prerequisite for enforcing data policies consistently across an AI estate that no human can fully inventory.",
  },
  {
    slug: "vendor-assurance-framework",
    label: "Vendor AI Assurance & Zero-Retention SLA Framework",
    pillarId: "governance",
    tier: "foundational",
    summary:
      "A standardized way to evaluate and contract third-party AI providers, including zero data retention guarantees. It prevents proprietary data from quietly becoming someone else's training set.",
  },
  {
    slug: "algorithmic-auditing-platform",
    label: "Continuous Algorithmic Auditing Platform",
    pillarId: "governance",
    tier: "intermediate",
    summary:
      "Continuously tests deployed models for drift, bias, and unexpected behavior. Instead of incident-driven reviews, the organization can prove ongoing fitness to regulators, customers, and the board.",
  },
  {
    slug: "model-card-registry",
    label: "Model Card & System-of-Record Registry",
    pillarId: "governance",
    tier: "intermediate",
    summary:
      "A canonical registry of every model in production with its purpose, training data, performance, and owners. It collapses audit cycles from weeks to hours and is the artifact every external assurance review will demand.",
  },
  {
    slug: "pet-toolkit",
    label: "Privacy-Enhancing Technology Toolkit",
    pillarId: "governance",
    tier: "intermediate",
    summary:
      "A standardized set of techniques such as differential privacy, secure aggregation, and tokenization. It enables the business to extract value from sensitive data without inheriting unmanaged exposure.",
  },
  {
    slug: "ai-incident-runbook",
    label: "AI Incident Response & Forensics Runbook",
    pillarId: "governance",
    tier: "intermediate",
    summary:
      "A pre-rehearsed playbook for containing, investigating, and disclosing AI-related incidents. It is what turns a potential reputational crisis into a managed, auditable response.",
  },
  {
    slug: "iso-42001-documentation",
    label: "ISO 42001-Ready Management System Documentation",
    pillarId: "governance",
    tier: "advanced",
    summary:
      "The formal documentation set required to pursue ISO 42001 certification, the emerging gold standard for AI management. Certification readiness signals enterprise-grade discipline to procurement teams worldwide.",
  },
  {
    slug: "watermarking-provenance",
    label: "Cryptographic Watermarking & Provenance Service",
    pillarId: "governance",
    tier: "advanced",
    summary:
      "Embeds verifiable provenance into AI-generated assets so authorship and licensing are never in dispute. It protects the IP value of content created at AI speed.",
  },
  {
    slug: "bias-fairness-monitoring",
    label: "Bias, Fairness & Drift Monitoring Service",
    pillarId: "governance",
    tier: "advanced",
    summary:
      "Continuously monitors models against fairness, bias, and drift thresholds with statistical rigor. It transforms ethical commitments from policy documents into operational signals leadership can act on.",
  },
  {
    slug: "confidential-computing-enclave",
    label: "Confidential Computing & Secure Enclave Layer",
    pillarId: "governance",
    tier: "edge",
    summary:
      "Executes sensitive workloads inside hardware-isolated enclaves where even the host operator cannot inspect data. It unlocks the ability to collaborate on data with partners without ever exposing it.",
  },
  {
    slug: "red-team-adversarial-lab",
    label: "Algorithmic Red-Team & Adversarial Testing Lab",
    pillarId: "governance",
    tier: "edge",
    summary:
      "A dedicated function that proactively attacks the company's own AI systems to find weaknesses before adversaries do. It is the discipline that separates organizations who claim AI security from those who can prove it.",
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
