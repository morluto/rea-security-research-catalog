module.exports = {
  repo: {
    name: "Awesome Vulnerability Detection Skills",
    description:
      "A curated list of AI agent skills, workflows, MCP servers, and related tooling for vulnerability detection and security research.",
    audience:
      "For Claude Code, OpenClaw, Codex, Cursor, Gemini CLI, and adjacent agent runtimes.",
    githubUrl:
      "https://github.com/IIE-VARAS/awesome-vulnerability-detection-skills",
    githubPagesUrl:
      "https://iie-varas.github.io/awesome-vulnerability-detection-skills/"
  },
  readme: {
    heroTitle: "🛡️ Awesome Vulnerability Detection Skills",
    heroEyebrow: "Curated AI security catalog",
    overview: [
      "The canonical list lives in this README.",
      "The live catalog is published on GitHub Pages for search and filtering.",
      "A searchable static catalog is included in [`docs/index.html`](docs/index.html).",
      "Entries include both agent-native skills and standalone tools when they are useful in the same workflow.",
      "Every entry is tagged along three orthogonal dimensions — target, technique, and form — plus a platform tag."
    ],
    platformNote:
      "Most `CC` skills with a standard `SKILL.md` layout can also be loaded into OpenClaw through a workspace skills directory.",
    contributingIntro: "Open a PR with:",
    contributingItems: [
      "Project name",
      "Repository link",
      "One-sentence description",
      "Applicable platform tags: `CC`, `OC`, `CX`, `MCP`, `OAI`, `TOOL`",
      "Dimension tags: target, technique, and form (see tables below)"
    ],
    contributingNote:
      "Prefer entries that are clearly maintained, practically usable, and specific about what the skill or tool actually does.",
    liveCatalogLabel: "Open Live Catalog"
  },
  site: {
    eyebrow: "Curated catalog",
    title: "🛡️ Awesome Vulnerability Detection Skills",
    subtitle:
      "A searchable catalog of AI agent skills, workflows, MCP servers, and tools for vulnerability detection and security research.",
    audience:
      "For Claude Code, OpenClaw, Codex, Cursor, Gemini CLI, and adjacent agent runtimes.",
    metaDescription:
      "A searchable catalog of AI agent skills, workflows, MCP servers, and tools for vulnerability detection and security research.",
    howToUseTitle: "How to use this list",
    howToUseText:
      "Filter by target, technique, form, or platform tag, search by capability or project name, then jump to the original repository for setup details.",
    scopeTitle: "Scope",
    scopeText:
      "This catalog mixes native agent skills with adjacent tools when they serve the same security workflow. Every entry is tagged along three orthogonal dimensions.",
    searchLabel: "Search the catalog",
    searchPlaceholder:
      "Search by name, capability, tag, or keyword...",
    legendTitle: "Platform Tags",
    legendNote:
      "Most standard CC skills can also be adapted to OpenClaw-style workspace skill loading.",
    targetFilterTitle: "Filter by target",
    targetFilterText:
      "What does the skill analyze or operate on?",
    techniqueFilterTitle: "Filter by technique",
    techniqueFilterText:
      "What security analysis method does the skill use?",
    formFilterTitle: "Filter by form",
    formFilterText:
      "How is the skill packaged or delivered?",
    platformFilterTitle: "Filter by platform",
    platformFilterText:
      "Narrow results to the runtimes or packaging styles you care about.",
    resultsTitle: "Skill cards",
    resultsText:
      "Browse the visible results directly. Search is optional; filters work without typing anything.",
    allTargetsLabel: "All targets",
    allTechniquesLabel: "All techniques",
    allFormsLabel: "All forms",
    allPlatformsLabel: "All platforms",
    selectionTitle: "Install prompt builder",
    selectionText:
      "Select the skills or repos you want, then copy a ready-to-send prompt for your agent.",
    selectionCountLabel: "Selected skills",
    selectionEmpty:
      "No skills selected yet. Tick one or more entries below to generate an installation prompt.",
    promptLabel: "Generated install prompt",
    copyPromptLabel: "Copy prompt",
    clearSelectionLabel: "Clear selection",
    promptCopiedLabel: "Copied",
    openRepoLabel: "Open repo",
    noResultsText:
      "No entries matched the current filters."
  },

  // --- Platform tags (unchanged) ---
  tags: [
    {
      id: "CC",
      label: "CC",
      readmeLabel: "CC",
      description: "Claude Code skill or workflow"
    },
    {
      id: "OC",
      label: "OC",
      readmeLabel: "OC",
      description: "OpenClaw-compatible skill or runtime"
    },
    {
      id: "CX",
      label: "CX",
      readmeLabel: "CX",
      description: "Codex-compatible skill"
    },
    {
      id: "MCP",
      label: "MCP",
      readmeLabel: "MCP",
      description: "MCP server usable from MCP-compatible agents"
    },
    {
      id: "OAI",
      label: "OAI",
      readmeLabel: "OAI",
      description: "OpenAI Agents SDK or OpenAI platform workflow"
    },
    {
      id: "TOOL",
      label: "🔧 Tool",
      readmeLabel: "🔧",
      description: "Standalone tool or framework"
    }
  ],

  // --- Multi-dimensional tag definitions ---
  tagDimensions: [
    {
      id: "target",
      title: "Target",
      description: "What does the skill analyze or operate on?",
      emoji: "🎯",
      values: [
        { id: "source",         label: "Source Code",     description: "Language-agnostic source code analysis" },
        { id: "web",            label: "Web",             description: "Web applications, APIs, HTTP" },
        { id: "binary",         label: "Binary",          description: "Binaries, ELF, PE, firmware" },
        { id: "mobile",         label: "Mobile",          description: "Android APK, iOS applications" },
        { id: "smart-contract", label: "Smart Contract",  description: "Solidity, EVM, blockchain" },
        { id: "container",      label: "Container",       description: "Docker, Kubernetes, cloud config" },
        { id: "supply-chain",   label: "Supply Chain",    description: "Dependencies, packages, SCA" },
        { id: "agent",          label: "Agent",           description: "AI skills, MCP servers, prompts" },
        { id: "general",        label: "General",         description: "Cross-domain or not target-specific" }
      ]
    },
    {
      id: "technique",
      title: "Technique",
      description: "What security analysis method does it employ?",
      emoji: "⚙️",
      values: [
        { id: "static-analysis",     label: "Static Analysis",     description: "All forms of analysis without execution (SAST, code review, formal verification, rule scanning)" },
        { id: "dynamic-testing",     label: "Dynamic Testing",     description: "Runtime / interactive testing (DAST, pentest)" },
        { id: "fuzzing",             label: "Fuzzing",             description: "Automated input generation for bug discovery" },
        { id: "reverse-engineering", label: "Reverse Engineering", description: "Binary analysis, decompilation, artifact extraction" },
        { id: "threat-modeling",     label: "Threat Modeling",     description: "Architecture-level threat identification (STRIDE, etc.)" },
        { id: "compliance",          label: "Compliance",          description: "Standard / specification conformance checking" },
        { id: "recon",               label: "Recon",               description: "Reconnaissance, OSINT, information gathering" },
        { id: "exploit-dev",         label: "Exploit Dev",         description: "Exploit development, PoC creation" }
      ]
    },
    {
      id: "form",
      title: "Form",
      description: "How is the skill packaged or delivered?",
      emoji: "📦",
      values: [
        { id: "prompt-skill",     label: "Prompt Skill",     description: "Pure knowledge / instruction (SKILL.md)" },
        { id: "tool-wrapper",     label: "Tool Wrapper",     description: "Wraps external CLI tools" },
        { id: "workflow",         label: "Workflow",          description: "Multi-step orchestrated pipeline" },
        { id: "agent-framework",  label: "Agent Framework",  description: "Autonomous agent system" },
        { id: "knowledge-base",   label: "Knowledge Base",   description: "Reference material, checklists, paper collection" },
        { id: "catalog",          label: "Catalog",           description: "Curated index or list" },
        { id: "mcp-server",       label: "MCP Server",       description: "MCP tool server" },
        { id: "suite",            label: "Suite",             description: "Comprehensive multi-capability bundle" }
      ]
    }
  ],

  // --- Flat entry list with multi-dimensional tags ---
  entries: [
    // ── Threat Modeling & Audit ──────────────────────────────────────
    {
      name: "GitHub Security Lab taskflow-agent",
      url: "https://github.com/GitHubSecurityLab/seclab-taskflow-agent",
      tags: ["OAI", "MCP"],
      target: ["source", "general"],
      technique: ["threat-modeling", "static-analysis"],
      form: ["workflow"],
      desc: "3-stage audit pipeline: threat modeling, vulnerability suggestion, and independent verification."
    },
    {
      name: "GitHub Security Lab taskflows",
      url: "https://github.com/GitHubSecurityLab/seclab-taskflows",
      tags: ["OAI"],
      target: ["source", "general"],
      technique: ["threat-modeling"],
      form: ["workflow"],
      desc: "Declarative YAML taskflow definitions for GitHub Security Lab's audit agent workflow."
    },
    {
      name: "OpenAI security-threat-model",
      url: "https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model",
      tags: ["CX"],
      target: ["general"],
      technique: ["threat-modeling"],
      form: ["prompt-skill"],
      desc: "STRIDE-based architecture-level threat modeling skill for Codex-style workflows."
    },

    // ── Static Analysis & Code Review ────────────────────────────────
    {
      name: "Trail of Bits Skills",
      url: "https://github.com/trailofbits/skills",
      tags: ["CC", "CX"],
      target: ["source", "binary"],
      technique: ["static-analysis", "compliance"],
      form: ["prompt-skill"],
      desc: "18+ security skills including static analysis, variant analysis, differential review, insecure defaults, constant-time analysis, audit context building, and more."
    },
    {
      name: "Ghost Security Skills",
      url: "https://github.com/ghostsecurity/skills",
      tags: ["CC"],
      target: ["source", "web"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "AI-native application security skills focused on practical AppSec workflows."
    },
    {
      name: "Anthropic Security Review",
      url: "https://github.com/anthropics/claude-code-security-review",
      tags: ["CC"],
      target: ["source"],
      technique: ["static-analysis"],
      form: ["workflow"],
      desc: "Official GitHub Action for PR security review with false-positive filtering."
    },
    {
      name: "afiqiqmal/claude-security-audit",
      url: "https://github.com/afiqiqmal/claude-security-audit",
      tags: ["CC"],
      target: ["source", "web"],
      technique: ["static-analysis", "compliance"],
      form: ["workflow"],
      desc: "5-phase audit flow with 475+ checks, OWASP 2025 coverage, compliance mappings, and framework-specific rules."
    },
    {
      name: "claude-code-owasp",
      url: "https://github.com/agamm/claude-code-owasp",
      tags: ["CC"],
      target: ["source", "web"],
      technique: ["static-analysis", "compliance"],
      form: ["knowledge-base"],
      desc: "OWASP Top 10:2025 + ASVS 5.0 + agentic AI security review guidance across 20+ languages."
    },
    {
      name: "vibesec",
      url: "https://github.com/BehiSecc/vibesec",
      tags: ["CC"],
      target: ["web"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "Bug hunter-oriented secure coding assistant focused on IDOR, XSS, SQLi, SSRF, and similar flaws."
    },
    {
      name: "clawsec",
      url: "https://github.com/prompt-security/clawsec",
      tags: ["CC"],
      target: ["agent"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "Security drift detection, automatic auditing, and skill integrity verification."
    },
    {
      name: "perseus",
      url: "https://github.com/kaivyy/perseus",
      tags: ["CC", "CX"],
      target: ["source"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "Multi-language security assessment for JS, Go, Python, Rust, Java, and PHP."
    },
    {
      name: "NeoLab code-review",
      url: "https://github.com/NeoLabHQ",
      tags: ["CC"],
      target: ["source"],
      technique: ["static-analysis"],
      form: ["agent-framework"],
      desc: "6 parallel specialist agents covering bug hunting, security auditing, code quality, contracts, tests, and history."
    },
    {
      name: "wrsmith108/security-auditor",
      url: "https://github.com/wrsmith108/claude-skill-security-auditor",
      tags: ["CC"],
      target: ["supply-chain"],
      technique: ["static-analysis"],
      form: ["tool-wrapper"],
      desc: "npm dependency audit wrapper with exception management support."
    },

    // ── Security Operations & Workflow Suites ────────────────────────
    {
      name: "SecOpsAgentKit",
      url: "https://github.com/AgentSecOps/SecOpsAgentKit",
      tags: ["CC"],
      target: ["source", "container", "supply-chain"],
      technique: ["static-analysis"],
      form: ["suite"],
      desc: "25+ SecOps skills for vulnerability discovery, container scanning, secrets detection, and policy enforcement."
    },
    {
      name: "claude-forge",
      url: "https://github.com/sangrokjung/claude-forge",
      tags: ["CC"],
      target: ["general"],
      technique: ["static-analysis"],
      form: ["suite"],
      desc: "Security-conscious Claude setup with 11 agents, 36 commands, 15 skills, and layered hooks."
    },
    {
      name: "everything-claude-code",
      url: "https://github.com/affaan-m/everything-claude-code",
      tags: ["CC"],
      target: ["general"],
      technique: ["static-analysis"],
      form: ["suite"],
      desc: "Performance-optimized Claude Code setup with security-focused skills, instincts, and memory."
    },
    {
      name: "graphify",
      url: "https://github.com/safishamsi/graphify",
      tags: ["CC", "CX", "OC"],
      target: ["source", "general"],
      technique: ["static-analysis"],
      form: ["tool-wrapper"],
      desc: "Convert code and docs into queryable knowledge graphs for audit assistance."
    },

    // ── Offensive Security, Pentest & CTF ────────────────────────────
    {
      name: "awesome-claude-skills-security",
      url: "https://github.com/Eyadkelleh/awesome-claude-skills-security",
      tags: ["CC"],
      target: ["web", "general"],
      technique: ["dynamic-testing", "fuzzing", "exploit-dev"],
      form: ["prompt-skill"],
      desc: "Security-oriented Claude skills collection with dedicated pentest, CTF, and bug bounty agents."
    },
    {
      name: "bug-hunter",
      url: "https://github.com/codexstar69/bug-hunter",
      tags: ["CC", "CX"],
      target: ["web", "general"],
      technique: ["dynamic-testing", "exploit-dev"],
      form: ["prompt-skill"],
      desc: "Adversarial AI bug hunter targeting offensive security and bug bounty workflows."
    },
    {
      name: "raptor",
      url: "https://github.com/gadievron/raptor",
      tags: ["CC"],
      target: ["general"],
      technique: ["static-analysis", "dynamic-testing"],
      form: ["prompt-skill"],
      desc: "General-purpose security agent spanning both offensive and defensive work."
    },
    {
      name: "communitytools",
      url: "https://github.com/transilienceai/communitytools",
      tags: ["CC"],
      target: ["web", "general"],
      technique: ["dynamic-testing", "recon"],
      form: ["prompt-skill"],
      desc: "Pentest skills and slash commands tuned for bug bounty research."
    },
    {
      name: "Strix",
      url: "https://github.com/usestrix/strix",
      tags: ["TOOL"],
      target: ["web"],
      technique: ["dynamic-testing"],
      form: ["agent-framework"],
      desc: "Autonomous AI pentester in a Docker sandbox with Caido proxy, headless browser, multi-agent orchestration, and PoC-focused reporting."
    },
    {
      name: "hexstrike-ai",
      url: "https://github.com/0x4m4/hexstrike-ai",
      tags: ["MCP"],
      target: ["general"],
      technique: ["dynamic-testing", "recon"],
      form: ["mcp-server"],
      desc: "MCP server exposing 150+ Kali Linux pentest tools to AI agents."
    },
    {
      name: "ctf-skills",
      url: "https://github.com/ljagiello/ctf-skills",
      tags: ["CC", "CX"],
      target: ["web", "binary"],
      technique: ["reverse-engineering", "exploit-dev", "recon"],
      form: ["prompt-skill"],
      desc: "CTF-oriented skills for web, pwn, crypto, reverse, forensics, OSINT, malware, and more."
    },

    // ── Fuzzing ──────────────────────────────────────────────────────
    {
      name: "Trail of Bits testing-handbook-skills",
      url: "https://github.com/trailofbits/skills",
      tags: ["CC", "CX"],
      target: ["source"],
      technique: ["fuzzing", "static-analysis"],
      form: ["prompt-skill"],
      desc: "Fuzzer, static analysis, and sanitizer integration guidance from Trail of Bits."
    },
    {
      name: "ffuf-claude-skill",
      url: "https://github.com/jthack/ffuf-claude-skill",
      tags: ["CC"],
      target: ["web"],
      technique: ["fuzzing"],
      form: ["tool-wrapper"],
      desc: "FFUF-based web fuzzing integration for Claude."
    },

    // ── Reverse Engineering & Binary Analysis ────────────────────────
    {
      name: "Trail of Bits dwarf-expert",
      url: "https://github.com/trailofbits/skills",
      tags: ["CC", "CX"],
      target: ["binary"],
      technique: ["reverse-engineering"],
      form: ["knowledge-base"],
      desc: "DWARF debug format expertise for binary analysis workflows."
    },
    {
      name: "Trail of Bits firebase-apk-scanner",
      url: "https://github.com/trailofbits/skills",
      tags: ["CC", "CX"],
      target: ["mobile"],
      technique: ["static-analysis"],
      form: ["workflow"],
      desc: "Android APK scanning workflow for Firebase misconfiguration discovery."
    },
    {
      name: "Trail of Bits burpsuite-project-parser",
      url: "https://github.com/trailofbits/skills",
      tags: ["CC", "CX"],
      target: ["web"],
      technique: ["reverse-engineering"],
      form: ["tool-wrapper"],
      desc: "Search and extract data from Burp Suite project files."
    },

    // ── Smart Contract Security ──────────────────────────────────────
    {
      name: "Trail of Bits building-secure-contracts",
      url: "https://github.com/trailofbits/skills/tree/main/plugins/building-secure-contracts",
      tags: ["CC", "CX"],
      target: ["smart-contract"],
      technique: ["static-analysis", "compliance"],
      form: ["prompt-skill"],
      desc: "6-chain scanner plus audit prep and maturity assessment for smart contract projects."
    },
    {
      name: "Trail of Bits entry-point-analyzer",
      url: "https://github.com/trailofbits/skills",
      tags: ["CC", "CX"],
      target: ["smart-contract"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "Identify state-changing entry points in smart contracts."
    },
    {
      name: "Trail of Bits spec-to-code-compliance",
      url: "https://github.com/trailofbits/skills",
      tags: ["CC", "CX"],
      target: ["smart-contract"],
      technique: ["compliance"],
      form: ["prompt-skill"],
      desc: "Specification-to-code compliance checking for blockchain audits."
    },
    {
      name: "scv-scan",
      url: "https://github.com/kadenzipfel/scv-scan",
      tags: ["CC"],
      target: ["smart-contract"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "Solidity vulnerability scanner covering 36 vulnerability classes."
    },

    // ── Skill & Agent Security ───────────────────────────────────────
    {
      name: "Cisco skill-scanner",
      url: "https://github.com/cisco-ai-defense/skill-scanner",
      tags: ["TOOL"],
      target: ["agent"],
      technique: ["static-analysis"],
      form: ["tool-wrapper"],
      desc: "Multi-engine skill scanning using YAML/YARA rules, AST behavior analysis, semantic review, and VirusTotal."
    },
    {
      name: "Snyk agent-scan",
      url: "https://github.com/snyk/agent-scan",
      tags: ["TOOL"],
      target: ["agent"],
      technique: ["static-analysis"],
      form: ["tool-wrapper"],
      desc: "Scan MCP servers and agent skills for prompt injection, tool poisoning, and data exfiltration risk."
    },
    {
      name: "pors/skill-audit",
      url: "https://github.com/pors/skill-audit",
      tags: ["TOOL"],
      target: ["agent"],
      technique: ["static-analysis"],
      form: ["tool-wrapper"],
      desc: "CLI scanner for prompt injection, secret leakage, and dangerous patterns with SARIF output."
    },
    {
      name: "huifer/skill-security-scan",
      url: "https://github.com/huifer/skill-security-scan",
      tags: ["TOOL"],
      target: ["agent"],
      technique: ["static-analysis"],
      form: ["tool-wrapper"],
      desc: "Bilingual Claude Skills scanner with static analysis, rule engine, and HTML reporting."
    },

    // ── Knowledge Bases & Research ───────────────────────────────────
    {
      name: "mukul975/Anthropic-Cybersecurity-Skills",
      url: "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
      tags: ["CC", "OC"],
      target: ["general"],
      technique: ["static-analysis"],
      form: ["knowledge-base"],
      desc: "754 structured skills across 38 security domains aligned with MITRE ATT&CK and NIST CSF 2.0."
    },
    {
      name: "Skills-4-SE Security Scanner Suite",
      url: "https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/security-scanner-suite",
      tags: ["CC"],
      target: ["source"],
      technique: ["static-analysis"],
      form: ["knowledge-base"],
      desc: "13 security skills spanning static vuln detection, root cause analysis, exploitability assessment, CVE reachability, taint instrumentation, and patch advice."
    },
    {
      name: "Skills-4-SE Formal Verification Toolkit",
      url: "https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/formal-verification-toolkit",
      tags: ["CC"],
      target: ["source"],
      technique: ["static-analysis"],
      form: ["knowledge-base"],
      desc: "17 formal verification skills for model checking, contract verification, and invariant analysis."
    },
    {
      name: "ArabelaTso/Skills-4-SE",
      url: "https://github.com/ArabelaTso/Skills-4-SE",
      tags: [],
      target: ["source", "general"],
      technique: ["static-analysis"],
      form: ["knowledge-base"],
      desc: "180+ software engineering skills across the lifecycle, including security scanner and formal verification packs."
    },
    {
      name: "huhusmang/Awesome-LLMs-for-Vulnerability-Detection",
      url: "https://github.com/huhusmang/Awesome-LLMs-for-Vulnerability-Detection",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["knowledge-base"],
      desc: "Paper collection focused on LLMs for vulnerability detection."
    },

    // ── Indexes, Marketplaces & Discovery ────────────────────────────
    {
      name: "VoltAgent/awesome-agent-skills",
      url: "https://github.com/VoltAgent/awesome-agent-skills",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "500+ agent skills with strong security coverage."
    },
    {
      name: "antigravity-awesome-skills",
      url: "https://github.com/sickn33/antigravity-awesome-skills",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "1,370+ installable agentic skills with a rich security category."
    },
    {
      name: "travisvn/awesome-claude-skills",
      url: "https://github.com/travisvn/awesome-claude-skills",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "Curated Claude Skills index with security-relevant entries."
    },
    {
      name: "hesreallyhim/awesome-claude-code",
      url: "https://github.com/hesreallyhim/awesome-claude-code",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "Claude Code resource collection spanning skills, hooks, and slash commands."
    },
    {
      name: "BehiSecc/awesome-claude-skills",
      url: "https://github.com/BehiSecc/awesome-claude-skills",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "Security-focused Claude Skills curation."
    },
    {
      name: "ComposioHQ/awesome-claude-skills",
      url: "https://github.com/ComposioHQ/awesome-claude-skills",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "Another broad Claude Skills curated list."
    },
    {
      name: "ottosulin/awesome-ai-security",
      url: "https://github.com/ottosulin/awesome-ai-security",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "AI security resource collection with an agent-skills category."
    },
    {
      name: "alirezarezvani/claude-skills",
      url: "https://github.com/alirezarezvani/claude-skills",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "220+ Claude Code skills and agent plugins."
    },
    {
      name: "aiskillstore/marketplace",
      url: "https://github.com/aiskillstore/marketplace",
      tags: [],
      target: ["general"],
      technique: [],
      form: ["catalog"],
      desc: "Security-audited Claude and Codex skills marketplace."
    }
  ]
};
