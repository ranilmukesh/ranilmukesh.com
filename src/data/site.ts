/**
 * Site content for ranilmukesh.com.
 *
 * Every claim and link here comes from the current public site (ranilmukesh.com)
 * or the owner's content brief. Do not add metrics or URLs that cannot be traced
 * back to one of those sources.
 */

/** Origin that serves the paper PDFs today. Paper links always point here. */
export const LIVE_ORIGIN = 'https://ranilmukesh.com';

/** Build an absolute, URL-encoded link to a paper PDF on the live site. */
export const paperHref = (pdfPath: string) => `${LIVE_ORIGIN}${encodeURI(pdfPath)}`;

export const profile = {
  name: 'Ranil Mukesh MJ',
  shortName: 'Ranil Mukesh',
  initials: 'RM',
  role: 'Co-Founder & CTO',
  companies: 'PhobosQ & k22.ai',
  email: 'ranilmukesh117@gmail.com',
  bio: 'Ranil Mukesh MJ, Co-Founder & CTO of PhobosQ and k22.ai, architects the infrastructure for autonomous enterprise intelligence: deterministic, stateful agentic systems that execute complex business logic at scale.',
};

export const companyLinks = {
  phobosq: 'https://phobosq.com',
  k22: 'https://k22.ai',
};

export type SocialIcon = 'github' | 'linkedin' | 'x' | 'leetcode';

export const socialLinks: { label: string; handle: string; href: string; icon: SocialIcon }[] = [
  { label: 'GitHub', handle: 'github.com/ranilmukesh', href: 'https://github.com/ranilmukesh', icon: 'github' },
  { label: 'LinkedIn', handle: 'in/ranilmukesh', href: 'https://linkedin.com/in/ranilmukesh', icon: 'linkedin' },
  { label: 'X', handle: '@ranilmukesh', href: 'https://x.com/ranilmukesh', icon: 'x' },
  { label: 'LeetCode', handle: 'u/ranilmukesh', href: 'https://leetcode.com/u/ranilmukesh/', icon: 'leetcode' },
];

export const pageCopy = {
  seoTitle: 'Ranil Mukesh MJ | Co-Founder & CTO, PhobosQ & k22.ai',
  seoDescription:
    'Ranil Mukesh MJ, Co-Founder & CTO of PhobosQ and k22.ai. Architecting the infrastructure for autonomous enterprise intelligence: deterministic, stateful agentic systems, foundation models, and production ML.',
  heroSummary:
    'Operating at the convergence of advanced machine learning research and high-availability software engineering, I move AI from stochastic, chat-based novelties into deterministic, stateful agentic systems capable of executing complex business logic at scale.',
  philosophy:
    'In an industry saturated with fragile prototypes, I build production-grade systems. Rigorous testing, multi-tenancy, and fault tolerance come before raw capability.',
  quote: 'The future of enterprise is not just about data analysis; it is about autonomous execution.',
  workIntro:
    'Each system is described by the problem it solves, how it is put together, the decisions that shaped it, and what it does in production. Claims are kept to what can be stated publicly.',
  expertiseIntro:
    'Grouped by the kind of problem, not the logo. These are the layers I design, build, and operate, from agent orchestration down to the hardware a model runs on.',
  journeyIntro:
    'I co-founded two companies and lead their engineering: product AI at PhobosQ, and agentic MLOps at k22.ai.',
  writingIntro:
    'Long-form notes on agentic systems, inference, and model architecture, plus papers and pre-prints from my research.',
  contactBody:
    'Open to conversations about agentic architecture, Model Context Protocol (MCP), and bringing RLAIF into enterprise systems.',
};

/** Short, verifiable facts from the current site. Shown as a quiet strip under the hero. */
export const proofPoints = [
  { value: '3,000+', label: 'enterprise tables navigated by SIRUS' },
  { value: '90M', label: 'Tamil speakers Yazhi is built for' },
  { value: '95%', label: 'accuracy on Indic-language call insights' },
  { value: '11', label: 'research papers & pre-prints' },
];

export type Accent = 'plum' | 'olive' | 'terracotta';

export type FlagshipSystem = {
  slug: string;
  index: string;
  label: string;
  name: string;
  title: string;
  summary: string;
  problem: string;
  architecture: string[];
  decisions: string[];
  outcome: string;
  stack: string[];
  accent: Accent;
  links?: { label: string; href: string }[];
};

export const flagshipSystems: FlagshipSystem[] = [
  {
    slug: 'sirus',
    index: '01',
    label: 'PhobosQ · Autonomous data science',
    name: 'SIRUS',
    title: 'An autonomous AI data scientist for enterprise databases.',
    summary:
      'A multi-tenant, enterprise-grade agent that works directly against production ERP and CRM data and returns analysis instead of guesses.',
    problem:
      'Enterprise data lives in databases with thousands of tables across SAP S/4HANA, Salesforce Health Cloud, and Oracle. Chat-style text-to-SQL breaks at that scale: it invents tables and joins, and it cannot be trusted with tenant data.',
    architecture: [
      'Multi-agent reasoning with governance-graph-based tool use handles SQL generation and insight extraction.',
      'Deterministic agentic middleware signs tool payloads with Ed25519 and runs them inside governed execution enclaves.',
      'Hybrid search over schemas and metadata in Qdrant, with PII redaction before anything reaches a model.',
    ],
    decisions: [
      'Determinism over conversation: every step is a governed tool call, not free text.',
      'Isolation enforced at the protocol level to prevent logic hijacking and keep tenants apart.',
    ],
    outcome:
      'Autonomously navigates enterprise databases of more than 3,000 tables (SAP S/4HANA, Salesforce Health Cloud, Oracle) without hallucination.',
    stack: ['Agno / AgentOS', 'Ed25519', 'Qdrant', 'MCP', 'Rust', 'Redis'],
    accent: 'plum',
    links: [
      { label: 'Product', href: 'https://phobosq.com/sirus' },
      { label: 'Features', href: 'https://phobosq.com/sirus-features' },
    ],
  },
  {
    slug: 'integration-recovery-agent',
    index: '02',
    label: 'Agentic operations · B2B payments',
    name: 'Integration Recovery Agent',
    title: 'A multi-agent swarm that repairs failed B2B payment integrations.',
    summary:
      'An autonomous team of agents that catches broken partner payloads, works out why they broke, fixes them safely, and leaves an audit trail a reviewer can replay.',
    problem:
      'Partner integrations fail quietly when payload schemas drift. Each failure becomes a stuck order and a manual investigation, and an automated fix is only acceptable if it is safe, idempotent, and explainable.',
    architecture: [
      'Intercepts malformed partner payloads, diagnoses schema drift, and repairs them in an in-memory sandbox.',
      'A deterministic Rete-engine policy layer evaluates every repair before orders are processed idempotently.',
      'Records W3C PROV-O causal lineage for each decision and exports RDF audit trails.',
    ],
    decisions: [
      'A coordinated Agno + AgentOS team with hard delegation and anti-looping bounds, not an open-ended agent.',
      'Approved repair rules are reused zero-shot; unsafe or ambiguous cases escalate to a human.',
    ],
    outcome:
      'Failed integrations are recovered end to end with deterministic policy checks and a replayable lineage for every repair.',
    stack: ['Agno + AgentOS', 'Rete rules engine', 'PROV-O / RDF', 'PostgreSQL', 'NVIDIA-hosted LLM', 'Docker'],
    accent: 'olive',
  },
  {
    slug: 'yazhi',
    index: '03',
    label: 'PhobosQ · Foundation models',
    name: 'Yazhi',
    title: 'A foundational AI platform for 90 million Tamil speakers.',
    summary:
      'Language technology built in Tamil from the model up, so that access to intelligence does not depend on speaking English.',
    problem:
      'General-purpose models treat Tamil as an afterthought. Tokenizers fragment the language and cultural context is lost, which keeps people such as farmers away from useful AI.',
    architecture: [
      'A foundational model with a novel tokenization strategy designed for Tamil.',
      'RL-based reasoning (chain-of-thought, parallel tree search) for higher-quality answers.',
      'A swarm of LLM-as-a-judge evaluators provides continuous RLAIF feedback.',
    ],
    decisions: [
      'Cultural and linguistic adaptation at the model level rather than translation layers on top.',
      'Evaluation and alignment automated with AI feedback so the model can keep improving.',
    ],
    outcome:
      'The first foundational AI platform designed for the 90 million Tamil speakers, focused on democratising access to intelligence for farmers.',
    stack: ['Custom tokenizer', 'RLAIF', 'Chain-of-thought', 'LLM-as-a-judge', 'vLLM'],
    accent: 'terracotta',
    links: [{ label: 'Product', href: 'https://phobosq.com/yazhi' }],
  },
  {
    slug: 'tom-call-analytics',
    index: '04',
    label: 'PhobosQ · Voice AI',
    name: 'TOM: Advanced Call Analytics',
    title: 'Call analytics for Tamil and Indic-language conversations.',
    summary:
      'Turns sales and support calls in Tamil and other Indic languages into insight a team can act on: sentiment, opportunities, and coaching.',
    problem:
      'Most speech analytics stops at English. Teams working in Tamil and other Indic languages had no reliable way to learn from their own calls.',
    architecture: [
      'Live voice agents for real-time transcription (STT/TTS) and sentiment extraction.',
      'An asynchronous backend routes work to specialised subagents and updates the CRM autonomously.',
      'Deep CRM integration (Salesforce, SAP) that understands context and takes action.',
    ],
    decisions: [
      'Indic languages as the primary target, not a fallback.',
      'Insights feed straight into coaching and CRM workflows instead of a separate dashboard.',
    ],
    outcome:
      'Transforms Tamil and Indic-language calls into actionable insights with 95% accuracy, with real-time sentiment, sales-opportunity detection, and coaching designed to lift conversion by 35%.',
    stack: ['Live voice agents', 'FastAPI', 'TaskIQ', 'Docker', 'Salesforce / SAP'],
    accent: 'plum',
    links: [{ label: 'Product', href: 'https://phobosq.com/call-analytics' }],
  },
  {
    slug: 'returned-asset-decision-workbench',
    index: '05',
    label: 'Decision intelligence · Product demo',
    name: 'Returned-Asset Decision Workbench',
    title: 'An agent-first workbench for deciding what happens to every returned asset.',
    summary:
      'Each returned asset gets a recommended path (redeploy, resell, re-lease, harvest parts, or responsible exit), and every recommendation carries its own evidence.',
    problem:
      'Returned equipment is often routed by habit. Value is lost because the decision is made without evidence, without a forecast, and without anyone measuring what it was actually worth.',
    architecture: [
      'Agents assemble evidence and a forecast for each asset before recommending a path.',
      'Every decision passes through human approval, then realised value is measured afterwards.',
      'Role-based views: an executive command centre and an operations workspace.',
    ],
    decisions: [
      'Agent-first, but human-approved: the agent proposes and a person signs off.',
      'Responsive across desktop, tablet, and phone for teams on the warehouse floor.',
    ],
    outcome:
      'A working product demo covering the full loop: recommendation, evidence, forecast, approval, and measured realised value.',
    stack: ['Agentic workflows', 'Forecasting', 'Human-in-the-loop', 'Role-based UI'],
    accent: 'olive',
  },
  {
    slug: 'enterprise-business-context-library',
    index: '06',
    label: 'Reference architecture · Governed context',
    name: 'Enterprise Business Context Library',
    title: 'A governed semantic layer that gives AI the business meaning behind the data.',
    summary:
      'A vendor-neutral reference architecture for semantic and context-brokering infrastructure that runs entirely inside an enterprise Microsoft 365 / Azure tenant.',
    problem:
      'Enterprise AI answers are only as good as the context behind them. Storage systems know where data lives, but not what it means to the business, and nobody checks the answers adversarially.',
    architecture: [
      'A "three records, not one" model that separates storage from business meaning.',
      'MCP-based context brokering that serves governed context to any model or agent.',
      'An adversarial due-diligence and verification framework (SAFE and chain-of-verification style) for AI answers.',
    ],
    decisions: [
      'Vendor-neutral by design, and kept entirely inside the customer tenant.',
      'Verification is part of the architecture, not an afterthought.',
    ],
    outcome:
      'A reference architecture for governed, verifiable enterprise context that keeps data and meaning under the enterprise’s control.',
    stack: ['Microsoft 365 / Azure', 'MCP', 'Semantic layer', 'Chain-of-verification'],
    accent: 'terracotta',
  },
];

export type Build = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
};

/** Further work from the current site, shown as a compact grid. */
export const moreBuilds: Build[] = [
  {
    name: 'Luna',
    description:
      'Enterprise document processing for Indian languages. Extracts entities, tables, and insights from complex documents with high accuracy.',
    tags: ['Document intelligence', 'OCR', 'Indian languages'],
    href: 'https://phobosq.com/luna',
  },
  {
    name: 'PhobosQ AutoSEO (QEO)',
    description:
      'An autonomous agent that uses computer-use capabilities to navigate web interfaces, analyse competitive metrics, and execute SEO strategies without human intervention.',
    tags: ['Computer use', 'Autonomous agent', 'SEO'],
  },
  {
    name: 'Paati-Kural League',
    description:
      'Second prize in a 24-hour IEEE hackathon in Chennai for faculty, researchers and industry professionals (₹1 lakh prize pool). A voice-first AI tutor with a grandmother persona that teaches rural students SQL, logic and career planning in Tamil and English, using Thirukkural ethics, Tenali Raman puzzles, generative UI mini-games and an explainable placement predictor.',
    tags: ['Agno AgentOS', 'NVIDIA Nemotron', 'Sarvam AI speech', 'Generative UI', 'XGBoost + SHAP'],
    href: 'https://github.com/ranilmukesh/Rural-GenerativeUi-TTS-Agent',
  },
  {
    name: 'Smart Home Agentic RAG',
    description:
      'Built, tested and demoed in five hours as a proof of concept for a consultation. Answers natural-language questions about a smart home with grounded, verified responses: Neo4j graph traversal plus LanceDB hybrid search, a bounded think-act-analyse loop, and guardrails that block prompt injection and destructive Cypher.',
    tags: ['Agno + AgentOS', 'Neo4j', 'LanceDB', 'NVIDIA NIM', 'OpenTelemetry'],
    href: 'https://github.com/ranilmukesh/smarthome-agent',
  },
  {
    name: 'Rust Web Search Agent',
    description:
      'A hobby build to practise Rust end to end: an async CLI agent on the Rig framework that searches the web through DuckDuckGo and writes grounded answers with NVIDIA-hosted models, fully containerised with tracing built in.',
    tags: ['Rust', 'Rig', 'Tokio', 'NVIDIA API', 'Docker'],
    href: 'https://github.com/ranilmukesh/rust-web-search-agent-nvidia-docker',
  },
  {
    name: 'RAGFlow-AI',
    description:
      'An enterprise-grade RAG system with multi-LLM support, hybrid vector search, and YOLOv8 vision so agents can see and correlate visual data inside complex documents.',
    tags: ['RAG', 'Qdrant', 'YOLOv8'],
    href: 'https://github.com/ranilmukesh/RAGFlow-AI',
  },
  {
    name: 'Distributed RAG Engine',
    description:
      'Production-grade RAG with NVIDIA NIM and LlamaIndex for enterprise-scale document processing: multi-LLM support, parallel processing, and robust security.',
    tags: ['NVIDIA NIM', 'LlamaIndex', 'Distributed systems'],
    href: 'https://github.com/ranilmukesh/distributed-rag-engine',
  },
  {
    name: 'NeoAI: Enterprise Text2SQL',
    description:
      'A multi-agent text-to-SQL system for complex databases. Five LLM agents and a hybrid Monte Carlo Tree Search approach applied to query generation.',
    tags: ['Text2SQL', 'MCTS', 'Multi-agent'],
    href: 'https://github.com/ranilmukesh/neoai--enterprise-grade-text2sql-vite-react-shadcn',
  },
  {
    name: 'AutoML Studio with TensorFlow.js',
    description:
      'Upload a dataset, choose a target, and build models in the browser. Supports on-premise deployment and uses Transformers.js with WebGPU acceleration.',
    tags: ['AutoML', 'TensorFlow.js', 'WebGPU'],
    href: 'https://github.com/ranilmukesh/TensorFlow.js-AutoML-Studio-with-Next-JS',
  },
  {
    name: 'Groq API Playground',
    description:
      'An OpenAI-style playground for Groq models: bring your own key, test custom prompts, and install it on-premise.',
    tags: ['Next.js', 'Groq API', 'LLM playground'],
    href: 'https://github.com/ranilmukesh/Groq-API-PLayground-for-multiple-industries',
  },
  {
    name: 'PlacementPredictor+',
    description:
      'My final-year project: a proof of concept that predicts campus placement chances with XGBoost, explains each result with SHAP, maps skill gaps to target roles with a NetworkX knowledge graph, and offers an AI career assistant.',
    tags: ['FastAPI', 'XGBoost', 'SHAP', 'NetworkX', 'Docker'],
    href: 'https://github.com/ranilmukesh/placementpredictor',
  },
  {
    name: 'Startup Idea Validator',
    description:
      'A Streamlit app that takes a startup idea and gives expert-level guidance on next steps, funding strategy, and more.',
    tags: ['Streamlit', 'Generative AI'],
    href: 'https://github.com/ranilmukesh/Machine-Learning-projects/tree/main/startup%20chat',
  },
  {
    name: 'Early machine learning projects',
    description:
      'Where it started: a disease prediction system, credit card fraud detection, and real-time face detection.',
    tags: ['scikit-learn', 'TensorFlow', 'OpenCV'],
    href: 'https://github.com/ranilmukesh/Machine-Learning-projects/tree/main',
  },
];

export const openSource = [
  {
    name: 'Agno framework',
    description: 'Active contributor to Agno, helping keep the next generation of agent interfaces robust and developer-friendly.',
  },
  {
    name: 'NeoAI',
    description: 'Research implementation of Monte Carlo Tree Search for Text2SQL, applying game-theoretic search to query generation.',
  },
  {
    name: 'RAGFlow-AI',
    description: 'Integrates YOLOv8 so retrieval agents can see and correlate visual data within complex documents.',
  },
];

export type ExpertiseDomain = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  tools: string[];
  accent: Accent | 'neutral';
};

export const expertise: ExpertiseDomain[] = [
  {
    number: '01',
    title: 'Agentic systems & orchestration',
    description: 'Reliable orchestration and coordination layers for autonomous intelligence, with governance built in.',
    capabilities: [
      'Agent design, orchestration, and multi-agent coordination',
      'Tool integration and autonomous action execution',
      'Model Context Protocol (MCP) and agent-to-agent (A2A) communication',
      'Protocol-level isolation and signed tool payloads (Ed25519)',
      'Human-in-the-loop checkpoints for unsafe or ambiguous actions',
    ],
    tools: ['Agno / AgentOS', 'AG-UI', 'LangGraph', 'AgentOps', 'LangSmith', 'GraphRAG', 'LMCache'],
    accent: 'neutral',
  },
  {
    number: '02',
    title: 'Foundation models & training',
    description: 'Past prompting, into model optimisation and alignment ready for production.',
    capabilities: [
      'Domain-specific fine-tuning for production systems',
      'RLAIF for safety and alignment, with LLM-as-a-judge evaluation',
      'Adversarial red-teaming for robustness validation',
      'Multi-modal architectures across text, voice, and image',
      'Language and cultural adaptation (Yazhi, Tamil)',
    ],
    tools: ['PyTorch', 'TensorFlow', 'RLAIF', 'vLLM', 'JEPA-based prompt enhancement'],
    accent: 'plum',
  },
  {
    number: '03',
    title: 'Data & infrastructure',
    description: 'The plumbing that takes AI from research to multi-tenant, high-availability deployment.',
    capabilities: [
      'Multi-tenant, high-availability APIs',
      'End-to-end ML pipelines, deployment, monitoring, and continuous improvement',
      'Natural-language interfaces to databases (Text2SQL) and automated BI',
      'Infrastructure-as-code generated and provisioned by agents',
      'Enterprise-grade compliance and security',
    ],
    tools: ['Kubernetes', 'Docker', 'Qdrant', 'Redis', 'Neon DB', 'Intel Tiber Cloud', 'Oracle Cloud Ampere', 'AWS SageMaker', 'Terraform'],
    accent: 'neutral',
  },
  {
    number: '04',
    title: 'Computer vision & edge',
    description: 'Models that see, running where the data is produced.',
    capabilities: [
      'Real-time detection, OCR, and counting pipelines',
      'Edge deployment on Google Coral Edge-TPU and NVIDIA Jetson',
      'Hybrid quantum-classical classifiers for agricultural vision',
      'Vision inside document understanding and RAG',
    ],
    tools: ['YOLOv8', 'TensorRT', 'OpenCV', 'Edge-TPU', 'Jetson Nano'],
    accent: 'olive',
  },
];

export const foundations = ['Data structures', 'System design', 'Computer architecture', 'Distributed systems'];

export const experience = [
  {
    company: 'PhobosQ',
    href: 'https://phobosq.com',
    marker: 'PQ',
    role: 'Co-Founder & CTO',
    summary:
      'Leading engineering for PhobosQ’s product AI. Architecting SIRUS, the autonomous AI data scientist, and the deterministic agentic middleware beneath it: Ed25519-signed payloads and governed execution enclaves that prevent logic hijacking and keep tenant data isolated. Leading Yazhi, the foundational Tamil AI platform, alongside Luna document intelligence and TOM call analytics.',
    focus: ['SIRUS', 'Yazhi', 'Luna', 'TOM call analytics', 'Governed agentic middleware'],
  },
  {
    company: 'k22.ai',
    href: 'https://k22.ai',
    marker: 'K22',
    role: 'Co-Founder & CTO',
    summary:
      'Architected an autonomous agentic MLOps platform that runs the AI lifecycle from natural language. A multi-tenant backend uses agent-to-agent (A2A) orchestration and the Model Context Protocol (MCP) to generate and provision infrastructure-as-code on AWS, with AgentOps for real-time agent telemetry.',
    focus: ['Agentic MLOps', 'A2A', 'MCP', 'Infrastructure-as-code on AWS', 'AgentOps'],
  },
];

/** Earlier applied research shown on the current site (no public links). */
export const appliedResearch = [
  {
    title: 'Intelligent License Plate Recognition',
    description:
      'A vehicle recognition system for speed, OCR, and in/out counts, deployed on Google Coral Edge-TPU and NVIDIA Jetson, increasing processing efficiency by 40%.',
    tags: ['YOLOv8', 'TensorRT', 'Edge-TPU', 'OpenCV'],
  },
  {
    title: 'Quantum-Tuned Hybrid CNN-SVM for Intelligent Farming',
    description:
      'An interactive system for segregating newborn chicks using quantum SVMs, cutting classification time by 30%. Deployed on NVIDIA Jetson Nano.',
    tags: ['Quantum SVM', 'CNN', 'PyTorch', 'Jetson Nano'],
  },
  {
    title: 'Generative Adversarial RL for Antimicrobial Testing',
    description:
      'A generative adversarial framework for simulating bacterial behaviour: GANs generate data and reinforcement learning makes decisions, improving accuracy by 20%.',
    tags: ['Reinforcement learning', 'GANs', 'PyTorch'],
  },
];
