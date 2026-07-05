// Generated from catalog.js by scripts/generate.js. Do not edit directly.
window.CATALOG_DATA = {
  "repo": {
    "name": "Awesome Vulnerability Detection Skills",
    "description": "A curated list of AI agent skills, workflows, MCP servers, and related tooling for vulnerability detection and security research.",
    "audience": "For Claude Code, OpenClaw, Codex, Cursor, Gemini CLI, and adjacent agent runtimes.",
    "githubUrl": "https://github.com/IIE-VARAS/awesome-vulnerability-detection-skills",
    "githubPagesUrl": "https://iie-varas.github.io/awesome-vulnerability-detection-skills/"
  },
  "readme": {
    "heroTitle": "🛡️ Awesome Vulnerability Detection Skills",
    "heroEyebrow": "Curated AI security catalog",
    "overview": [
      "The canonical list lives in this README.",
      "The live catalog is published on GitHub Pages for search and filtering.",
      "A searchable static catalog is included in [`docs/index.html`](docs/index.html).",
      "Entries include both agent-native skills and standalone tools when they are useful in the same workflow.",
      "Every entry is tagged along three orthogonal dimensions — target, technique, and form — plus a platform tag."
    ],
    "platformNote": "Most `CC` skills with a standard `SKILL.md` layout can also be loaded into OpenClaw through a workspace skills directory.",
    "contributingIntro": "Open a PR with:",
    "contributingItems": [
      "Project name",
      "Repository link",
      "One-sentence description",
      "Applicable platform tags: `CC`, `OC`, `CX`, `MCP`, `OAI`, `TOOL`",
      "Dimension tags: target, technique, and form (see tables below)"
    ],
    "contributingNote": "Prefer entries that are clearly maintained, practically usable, and specific about what the skill or tool actually does.",
    "liveCatalogLabel": "Open Live Catalog"
  },
  "site": {
    "eyebrow": "Curated catalog",
    "title": "🛡️ Awesome Vulnerability Detection Skills",
    "subtitle": "A searchable catalog of AI agent skills, workflows, MCP servers, and tools for vulnerability detection and security research.",
    "audience": "For Claude Code, OpenClaw, Codex, Cursor, Gemini CLI, and adjacent agent runtimes.",
    "metaDescription": "A searchable catalog of AI agent skills, workflows, MCP servers, and tools for vulnerability detection and security research.",
    "howToUseTitle": "How to use this list",
    "howToUseText": "Filter by target, technique, form, or platform tag, search by capability or project name, then jump to the original repository for setup details.",
    "scopeTitle": "Scope",
    "scopeText": "This catalog mixes native agent skills with adjacent tools when they serve the same security workflow. Every entry is tagged along three orthogonal dimensions.",
    "searchLabel": "Search the catalog",
    "searchPlaceholder": "Search by name, capability, tag, or keyword...",
    "legendTitle": "Platform Tags",
    "legendNote": "Most standard CC skills can also be adapted to OpenClaw-style workspace skill loading.",
    "targetFilterTitle": "Filter by target",
    "targetFilterText": "What does the skill analyze or operate on?",
    "techniqueFilterTitle": "Filter by technique",
    "techniqueFilterText": "What security analysis method does the skill use?",
    "formFilterTitle": "Filter by form",
    "formFilterText": "How is the skill packaged or delivered?",
    "platformFilterTitle": "Filter by platform",
    "platformFilterText": "Narrow results to the runtimes or packaging styles you care about.",
    "resultsTitle": "Skill cards",
    "resultsText": "Browse the visible results directly. Search is optional; filters work without typing anything.",
    "allTargetsLabel": "All targets",
    "allTechniquesLabel": "All techniques",
    "allFormsLabel": "All forms",
    "allPlatformsLabel": "All platforms",
    "selectionTitle": "Install prompt builder",
    "selectionText": "Select the skills or repos you want, then copy a ready-to-send prompt for your agent.",
    "selectionCountLabel": "Selected skills",
    "selectionEmpty": "No skills selected yet. Tick one or more entries below to generate an installation prompt.",
    "promptLabel": "Generated install prompt",
    "copyPromptLabel": "Copy prompt",
    "clearSelectionLabel": "Clear selection",
    "promptCopiedLabel": "Copied",
    "openRepoLabel": "Open repo",
    "noResultsText": "No entries matched the current filters."
  },
  "tags": [
    {
      "id": "CC",
      "label": "CC",
      "readmeLabel": "CC",
      "description": "Claude Code skill or workflow"
    },
    {
      "id": "OC",
      "label": "OC",
      "readmeLabel": "OC",
      "description": "OpenClaw-compatible skill or runtime"
    },
    {
      "id": "CX",
      "label": "CX",
      "readmeLabel": "CX",
      "description": "Codex-compatible skill"
    },
    {
      "id": "MCP",
      "label": "MCP",
      "readmeLabel": "MCP",
      "description": "MCP server usable from MCP-compatible agents"
    },
    {
      "id": "OAI",
      "label": "OAI",
      "readmeLabel": "OAI",
      "description": "OpenAI Agents SDK or OpenAI platform workflow"
    },
    {
      "id": "TOOL",
      "label": "🔧 Tool",
      "readmeLabel": "🔧",
      "description": "Standalone tool or framework"
    }
  ],
  "tagDimensions": [
    {
      "id": "target",
      "title": "Target",
      "description": "What does the skill analyze or operate on?",
      "emoji": "🎯",
      "values": [
        {
          "id": "source",
          "label": "Source Code",
          "description": "Language-agnostic source code analysis"
        },
        {
          "id": "web",
          "label": "Web",
          "description": "Web applications, APIs, HTTP"
        },
        {
          "id": "binary",
          "label": "Binary",
          "description": "Binaries, ELF, PE, firmware"
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "description": "Android APK, iOS applications"
        },
        {
          "id": "smart-contract",
          "label": "Smart Contract",
          "description": "Solidity, EVM, blockchain"
        },
        {
          "id": "container",
          "label": "Container",
          "description": "Docker, Kubernetes, cloud config"
        },
        {
          "id": "supply-chain",
          "label": "Supply Chain",
          "description": "Dependencies, packages, SCA"
        },
        {
          "id": "agent",
          "label": "Agent",
          "description": "AI skills, MCP servers, prompts"
        },
        {
          "id": "general",
          "label": "General",
          "description": "Cross-domain or not target-specific"
        }
      ]
    },
    {
      "id": "technique",
      "title": "Technique",
      "description": "What security analysis method does it employ?",
      "emoji": "⚙️",
      "values": [
        {
          "id": "static-analysis",
          "label": "Static Analysis",
          "description": "All forms of analysis without execution (SAST, code review, formal verification, rule scanning)"
        },
        {
          "id": "dynamic-testing",
          "label": "Dynamic Testing",
          "description": "Runtime / interactive testing (DAST, pentest)"
        },
        {
          "id": "fuzzing",
          "label": "Fuzzing",
          "description": "Automated input generation for bug discovery"
        },
        {
          "id": "reverse-engineering",
          "label": "Reverse Engineering",
          "description": "Binary analysis, decompilation, artifact extraction"
        },
        {
          "id": "threat-modeling",
          "label": "Threat Modeling",
          "description": "Architecture-level threat identification (STRIDE, etc.)"
        },
        {
          "id": "compliance",
          "label": "Compliance",
          "description": "Standard / specification conformance checking"
        },
        {
          "id": "recon",
          "label": "Recon",
          "description": "Reconnaissance, OSINT, information gathering"
        },
        {
          "id": "exploit-dev",
          "label": "Exploit Dev",
          "description": "Exploit development, PoC creation"
        }
      ]
    },
    {
      "id": "form",
      "title": "Form",
      "description": "How is the skill packaged or delivered?",
      "emoji": "📦",
      "values": [
        {
          "id": "prompt-skill",
          "label": "Prompt Skill",
          "description": "Pure knowledge / instruction (SKILL.md)"
        },
        {
          "id": "tool-wrapper",
          "label": "Tool Wrapper",
          "description": "Wraps external CLI tools"
        },
        {
          "id": "workflow",
          "label": "Workflow",
          "description": "Multi-step orchestrated pipeline"
        },
        {
          "id": "agent-framework",
          "label": "Agent Framework",
          "description": "Autonomous agent system"
        },
        {
          "id": "knowledge-base",
          "label": "Knowledge Base",
          "description": "Reference material, checklists, paper collection"
        },
        {
          "id": "catalog",
          "label": "Catalog",
          "description": "Curated index or list"
        },
        {
          "id": "mcp-server",
          "label": "MCP Server",
          "description": "MCP tool server"
        },
        {
          "id": "suite",
          "label": "Suite",
          "description": "Comprehensive multi-capability bundle"
        }
      ]
    }
  ],
  "entries": [
    {
      "name": "agent-security-scanner-mcp",
      "url": "https://github.com/sinewaveai/agent-security-scanner-mcp",
      "tags": [
        "CC",
        "MCP"
      ],
      "target": [
        "supply-chain",
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Security scanner MCP server for AI coding agents. Prompt injection firewall, package hallucination detection (4.3M+ packages), 1000+ vulnerability rules with AST & taint analysis, auto-fix"
    },
    {
      "name": "ultraship",
      "url": "https://github.com/Houseofmvps/ultraship",
      "tags": [
        "CC"
      ],
      "target": [
        "binary",
        "supply-chain",
        "agent"
      ],
      "technique": [
        "dynamic-testing"
      ],
      "form": [
        "workflow"
      ],
      "desc": "\"ULTRASHIP\" Claude Code plugin — 39 skills, 33 tools, 11 agents for ship-ready workflows: planning, review, pentesting, safety guardrails, canary monitoring, SEO/AI-readiness check, penetration testing, code review, competitive analysis, incident response. 1 dependency. 180 tests. MIT"
    },
    {
      "name": "claude-security-audit",
      "url": "https://github.com/VicKayro/claude-security-audit",
      "tags": [
        "CC"
      ],
      "target": [
        "web",
        "agent"
      ],
      "technique": [
        "compliance"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Skill Claude Code pour audit de sécurité complet (OWASP Top 10, CWE/CVE, headers, auth, paywall, infra)"
    },
    {
      "name": "openclaw-skills-security",
      "url": "https://github.com/UseAI-pro/openclaw-skills-security",
      "tags": [
        "CC"
      ],
      "target": [
        "binary",
        "supply-chain",
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Curated, security-first OpenClaw skills (Markdown-based). Security audit skills - detect prompt injection, supply chain attacks, credential leaks. Works with Codex CLI, Claude Code, any LLM"
    },
    {
      "name": "AegisGate",
      "url": "https://github.com/ax128/AegisGate",
      "tags": [
        "CC",
        "OAI",
        "MCP"
      ],
      "target": [
        "web",
        "binary",
        "agent"
      ],
      "technique": [
        "exploit-dev"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Open-source security gateway for LLM APIs — prompt injection detection, PII redaction, dangerous response   sanitization, and audit logging. OpenAI/Claude compatible, MCP & Agent SKILL support. Drop-in proxy for AI coding   agents (Cursor, Claude Code, Codex)"
    },
    {
      "name": "secpipe",
      "url": "https://github.com/FuzzingLabs/secpipe",
      "tags": [
        "MCP"
      ],
      "target": [
        "binary",
        "agent",
        "source"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing",
        "fuzzing"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "MCP server for AI-driven security pipelines"
    },
    {
      "name": "mcp-dnstwist",
      "url": "https://github.com/BurtTheCoder/mcp-dnstwist",
      "tags": [
        "MCP"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "fuzzing"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "MCP server for dnstwist, a powerful DNS fuzzing tool that helps detect typosquatting, phishing, and corporate espionage"
    },
    {
      "name": "mcp-server-fuzzer",
      "url": "https://github.com/Agent-Hellboy/mcp-server-fuzzer",
      "tags": [
        "MCP"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "fuzzing"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "A generic mcp server fuzzer"
    },
    {
      "name": "Zen-Ai-Pentest",
      "url": "https://github.com/SHAdd0WTAka/Zen-Ai-Pentest",
      "tags": [
        "CC"
      ],
      "target": [
        "binary",
        "agent"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing",
        "compliance"
      ],
      "form": [
        "agent-framework"
      ],
      "desc": "🛡⚔️AI-Powered Penetration Testing Framework with automated vulnerability scanning, multi-agent system, and compliance reporting🛡⚔️"
    },
    {
      "name": "pipelock",
      "url": "https://github.com/luckyPipewrench/pipelock",
      "tags": [
        "MCP"
      ],
      "target": [
        "binary",
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Firewall for AI agents. DLP scanning, SSRF protection, bidirectional MCP scanning, tool poisoning detection, and prompt injection blocking"
    },
    {
      "name": "agent-threat-rules",
      "url": "https://github.com/Agent-Threat-Rule/agent-threat-rules",
      "tags": [
        "MCP"
      ],
      "target": [
        "web",
        "binary",
        "agent"
      ],
      "technique": [
        "compliance"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Open detection standard for AI agent threats. Like Sigma, but for prompt injection, tool poisoning, and MCP attacks. Community-driven -- contributions welcome"
    },
    {
      "name": "pydantic-ai-shields",
      "url": "https://github.com/vstorm-co/pydantic-ai-shields",
      "tags": [
        "CC"
      ],
      "target": [
        "web",
        "binary",
        "agent"
      ],
      "technique": [
        "reverse-engineering",
        "exploit-dev"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Guardrail capabilities for Pydantic AI — cost tracking, prompt injection detection, PII filtering, secret redaction, tool permissions, and async guardrails. Built on pydantic-ai's native capabilities API"
    },
    {
      "name": "Mithra-Scanner",
      "url": "https://github.com/KadirArslan/Mithra-Scanner",
      "tags": [
        "CC"
      ],
      "target": [
        "web",
        "agent"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Mithra Scanner is an interactive API testing tool for prompt injection, refusal detection, and LLM security benchmarking. It supports YAML-based rule definitions, custom refusal lists, REST API integration, and provides detailed CLI output for security testing of language model endpoints"
    },
    {
      "name": "aguara",
      "url": "https://github.com/garagon/aguara",
      "tags": [
        "CC",
        "MCP"
      ],
      "target": [
        "binary",
        "agent",
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Security scanner for AI agent skills and MCP servers. Static analysis, incident response, no LLM. One binary.   Detection engine behind oktsec"
    },
    {
      "name": "wxmini-security-audit",
      "url": "https://github.com/sssmmmwww/wxmini-security-audit",
      "tags": [
        "CC"
      ],
      "target": [
        "web",
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "desc": "Automated WeChat mini-program security audit skill based on Claude Code Agent Teams. 7-agent collaboration covering sensitive info detection, API interfaces, crypto analysis, and vulnerability analysis. Script+LLM dual-layer architecture: scripts ensure coverage, LLM ensures accuracy.",
      "form": [
        "prompt-skill"
      ]
    },
    {
      "name": "claude-wordpress-skills",
      "url": "https://github.com/elvismdev/claude-wordpress-skills",
      "tags": [
        "CC"
      ],
      "target": [
        "binary",
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Professional WordPress engineering skills for Claude Code - performance optimization, security auditing, Gutenberg block development, and theme/plugin best practices"
    },
    {
      "name": "supabase-pentest-skills",
      "url": "https://github.com/yoanbernabeu/supabase-pentest-skills",
      "tags": [
        "CC"
      ],
      "target": [
        "web",
        "binary",
        "agent"
      ],
      "technique": [
        "dynamic-testing"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "24 AI Agent Skills for professional security auditing of Supabase applications. Detection, key extraction, RLS testing, storage audit, IDOR detection, and comprehensive reporting. Works with Claude Code, Cursor, Windsurf, and 30+ AI agents"
    },
    {
      "name": "skill-audit",
      "url": "https://github.com/dabit3/skill-audit",
      "tags": [
        "CC"
      ],
      "target": [
        "binary",
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Audit agent skill definitions for security, completeness, and compatibility across Codex, Claude Code, OpenClaw, and more"
    },
    {
      "name": "GitHub Security Lab taskflow-agent",
      "url": "https://github.com/GitHubSecurityLab/seclab-taskflow-agent",
      "tags": [
        "OAI",
        "MCP"
      ],
      "target": [
        "source",
        "general"
      ],
      "technique": [
        "threat-modeling",
        "static-analysis"
      ],
      "form": [
        "workflow"
      ],
      "desc": "3-stage audit pipeline: threat modeling, vulnerability suggestion, and independent verification."
    },
    {
      "name": "GitHub Security Lab taskflows",
      "url": "https://github.com/GitHubSecurityLab/seclab-taskflows",
      "tags": [
        "OAI"
      ],
      "target": [
        "source",
        "general"
      ],
      "technique": [
        "threat-modeling"
      ],
      "form": [
        "workflow"
      ],
      "desc": "Declarative YAML taskflow definitions for GitHub Security Lab's audit agent workflow."
    },
    {
      "name": "OpenAI security-threat-model",
      "url": "https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model",
      "tags": [
        "CX"
      ],
      "target": [
        "general"
      ],
      "technique": [
        "threat-modeling"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "STRIDE-based architecture-level threat modeling skill for Codex-style workflows."
    },
    {
      "name": "Trail of Bits Skills",
      "url": "https://github.com/trailofbits/skills",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "source",
        "binary"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "18+ security skills including static analysis, variant analysis, differential review, insecure defaults, constant-time analysis, audit context building, and more."
    },
    {
      "name": "Ghost Security Skills",
      "url": "https://github.com/ghostsecurity/skills",
      "tags": [
        "CC"
      ],
      "target": [
        "source",
        "web"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "AI-native application security skills focused on practical AppSec workflows."
    },
    {
      "name": "Anthropic Security Review",
      "url": "https://github.com/anthropics/claude-code-security-review",
      "tags": [
        "CC"
      ],
      "target": [
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "workflow"
      ],
      "desc": "Official GitHub Action for PR security review with false-positive filtering."
    },
    {
      "name": "afiqiqmal/claude-security-audit",
      "url": "https://github.com/afiqiqmal/claude-security-audit",
      "tags": [
        "CC"
      ],
      "target": [
        "source",
        "web"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "workflow"
      ],
      "desc": "5-phase audit flow with 475+ checks, OWASP 2025 coverage, compliance mappings, and framework-specific rules."
    },
    {
      "name": "claude-code-owasp",
      "url": "https://github.com/agamm/claude-code-owasp",
      "tags": [
        "CC"
      ],
      "target": [
        "source",
        "web"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "knowledge-base"
      ],
      "desc": "OWASP Top 10:2025 + ASVS 5.0 + agentic AI security review guidance across 20+ languages."
    },
    {
      "name": "vibesec",
      "url": "https://github.com/BehiSecc/vibesec",
      "tags": [
        "CC"
      ],
      "target": [
        "web"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Bug hunter-oriented secure coding assistant focused on IDOR, XSS, SQLi, SSRF, and similar flaws."
    },
    {
      "name": "clawsec",
      "url": "https://github.com/prompt-security/clawsec",
      "tags": [
        "CC"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Security drift detection, automatic auditing, and skill integrity verification."
    },
    {
      "name": "perseus",
      "url": "https://github.com/kaivyy/perseus",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Multi-language security assessment for JS, Go, Python, Rust, Java, and PHP."
    },
    {
      "name": "NeoLab code-review",
      "url": "https://github.com/NeoLabHQ",
      "tags": [
        "CC"
      ],
      "target": [
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "agent-framework"
      ],
      "desc": "6 parallel specialist agents covering bug hunting, security auditing, code quality, contracts, tests, and history."
    },
    {
      "name": "wrsmith108/security-auditor",
      "url": "https://github.com/wrsmith108/claude-skill-security-auditor",
      "tags": [
        "CC"
      ],
      "target": [
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "npm dependency audit wrapper with exception management support."
    },
    {
      "name": "SecOpsAgentKit",
      "url": "https://github.com/AgentSecOps/SecOpsAgentKit",
      "tags": [
        "CC"
      ],
      "target": [
        "source",
        "container",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "suite"
      ],
      "desc": "25+ SecOps skills for vulnerability discovery, container scanning, secrets detection, and policy enforcement."
    },
    {
      "name": "claude-forge",
      "url": "https://github.com/sangrokjung/claude-forge",
      "tags": [
        "CC"
      ],
      "target": [
        "general"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "suite"
      ],
      "desc": "Security-conscious Claude setup with 11 agents, 36 commands, 15 skills, and layered hooks."
    },
    {
      "name": "everything-claude-code",
      "url": "https://github.com/affaan-m/everything-claude-code",
      "tags": [
        "CC"
      ],
      "target": [
        "general"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "suite"
      ],
      "desc": "Performance-optimized Claude Code setup with security-focused skills, instincts, and memory."
    },
    {
      "name": "graphify",
      "url": "https://github.com/safishamsi/graphify",
      "tags": [
        "CC",
        "CX",
        "OC"
      ],
      "target": [
        "source",
        "general"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Convert code and docs into queryable knowledge graphs for audit assistance."
    },
    {
      "name": "awesome-claude-skills-security",
      "url": "https://github.com/Eyadkelleh/awesome-claude-skills-security",
      "tags": [
        "CC"
      ],
      "target": [
        "web",
        "general"
      ],
      "technique": [
        "dynamic-testing",
        "fuzzing",
        "exploit-dev"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Security-oriented Claude skills collection with dedicated pentest, CTF, and bug bounty agents."
    },
    {
      "name": "bug-hunter",
      "url": "https://github.com/codexstar69/bug-hunter",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "web",
        "general"
      ],
      "technique": [
        "dynamic-testing",
        "exploit-dev"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Adversarial AI bug hunter targeting offensive security and bug bounty workflows."
    },
    {
      "name": "raptor",
      "url": "https://github.com/gadievron/raptor",
      "tags": [
        "CC"
      ],
      "target": [
        "general"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "General-purpose security agent spanning both offensive and defensive work."
    },
    {
      "name": "communitytools",
      "url": "https://github.com/transilienceai/communitytools",
      "tags": [
        "CC"
      ],
      "target": [
        "web",
        "general"
      ],
      "technique": [
        "dynamic-testing",
        "recon"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Pentest skills and slash commands tuned for bug bounty research."
    },
    {
      "name": "Strix",
      "url": "https://github.com/usestrix/strix",
      "tags": [
        "TOOL"
      ],
      "target": [
        "web"
      ],
      "technique": [
        "dynamic-testing"
      ],
      "form": [
        "agent-framework"
      ],
      "desc": "Autonomous AI pentester in a Docker sandbox with Caido proxy, headless browser, multi-agent orchestration, and PoC-focused reporting."
    },
    {
      "name": "hexstrike-ai",
      "url": "https://github.com/0x4m4/hexstrike-ai",
      "tags": [
        "MCP"
      ],
      "target": [
        "general"
      ],
      "technique": [
        "dynamic-testing",
        "recon"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "MCP server exposing 150+ Kali Linux pentest tools to AI agents."
    },
    {
      "name": "ctf-skills",
      "url": "https://github.com/ljagiello/ctf-skills",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "web",
        "binary"
      ],
      "technique": [
        "reverse-engineering",
        "exploit-dev",
        "recon"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "CTF-oriented skills for web, pwn, crypto, reverse, forensics, OSINT, malware, and more."
    },
    {
      "name": "Trail of Bits testing-handbook-skills",
      "url": "https://github.com/trailofbits/skills",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "source"
      ],
      "technique": [
        "fuzzing",
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Fuzzer, static analysis, and sanitizer integration guidance from Trail of Bits."
    },
    {
      "name": "P4nda0s/reverse-skills",
      "url": "https://github.com/P4nda0s/reverse-skills",
      "tags": [
        "CC"
      ],
      "target": [
        "binary",
        "mobile"
      ],
      "technique": [
        "reverse-engineering"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "7 reverse engineering skills for symbol recovery, struct reconstruction, Frida instrumentation, Unicorn emulation, DEX dumping, Unity IL2CPP extraction, and IDAPython scripting."
    },
    {
      "name": "Trail of Bits dwarf-expert",
      "url": "https://github.com/trailofbits/skills",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "binary"
      ],
      "technique": [
        "reverse-engineering"
      ],
      "form": [
        "knowledge-base"
      ],
      "desc": "DWARF debug format expertise for binary analysis workflows."
    },
    {
      "name": "Trail of Bits firebase-apk-scanner",
      "url": "https://github.com/trailofbits/skills",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "mobile"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "workflow"
      ],
      "desc": "Android APK scanning workflow for Firebase misconfiguration discovery."
    },
    {
      "name": "Trail of Bits burpsuite-project-parser",
      "url": "https://github.com/trailofbits/skills",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "web"
      ],
      "technique": [
        "reverse-engineering"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Search and extract data from Burp Suite project files."
    },
    {
      "name": "Trail of Bits building-secure-contracts",
      "url": "https://github.com/trailofbits/skills/tree/main/plugins/building-secure-contracts",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "smart-contract"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "6-chain scanner plus audit prep and maturity assessment for smart contract projects."
    },
    {
      "name": "Trail of Bits entry-point-analyzer",
      "url": "https://github.com/trailofbits/skills",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "smart-contract"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Identify state-changing entry points in smart contracts."
    },
    {
      "name": "Trail of Bits spec-to-code-compliance",
      "url": "https://github.com/trailofbits/skills",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "smart-contract"
      ],
      "technique": [
        "compliance"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Specification-to-code compliance checking for blockchain audits."
    },
    {
      "name": "scv-scan",
      "url": "https://github.com/kadenzipfel/scv-scan",
      "tags": [
        "CC"
      ],
      "target": [
        "smart-contract"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Solidity vulnerability scanner covering 36 vulnerability classes."
    },
    {
      "name": "Cisco skill-scanner",
      "url": "https://github.com/cisco-ai-defense/skill-scanner",
      "tags": [
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Multi-engine skill scanning using YAML/YARA rules, AST behavior analysis, semantic review, and VirusTotal."
    },
    {
      "name": "Snyk Agent Scan",
      "url": "https://github.com/snyk/agent-scan",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Snyk security scanner for AI agents, MCP servers, and agent skills, covering prompt injection, tool poisoning, hardcoded secrets, and risky skill content."
    },
    {
      "name": "pors/skill-audit",
      "url": "https://github.com/pors/skill-audit",
      "tags": [
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "CLI scanner for prompt injection, secret leakage, and dangerous patterns with SARIF output."
    },
    {
      "name": "huifer/skill-security-scan",
      "url": "https://github.com/huifer/skill-security-scan",
      "tags": [
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Bilingual Claude Skills scanner with static analysis, rule engine, and HTML reporting."
    },
    {
      "name": "mukul975/Anthropic-Cybersecurity-Skills",
      "url": "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
      "tags": [
        "CC",
        "CX",
        "OC",
        "OAI",
        "TOOL"
      ],
      "target": [
        "agent",
        "source",
        "web",
        "mobile",
        "binary"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing",
        "recon",
        "compliance",
        "reverse-engineering"
      ],
      "form": [
        "knowledge-base",
        "catalog"
      ],
      "desc": "Large cybersecurity skill library for AI agents, organized as structured security skills across multiple domains and mapped to frameworks such as MITRE ATT&CK, NIST CSF, MITRE ATLAS, D3FEND, and NIST AI RMF."
    },
    {
      "name": "Skills-4-SE Security Scanner Suite",
      "url": "https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/security-scanner-suite",
      "tags": [
        "CC"
      ],
      "target": [
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "knowledge-base"
      ],
      "desc": "13 security skills spanning static vuln detection, root cause analysis, exploitability assessment, CVE reachability, taint instrumentation, and patch advice."
    },
    {
      "name": "Skills-4-SE Formal Verification Toolkit",
      "url": "https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/formal-verification-toolkit",
      "tags": [
        "CC"
      ],
      "target": [
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "knowledge-base"
      ],
      "desc": "17 formal verification skills for model checking, contract verification, and invariant analysis."
    },
    {
      "name": "ArabelaTso/Skills-4-SE",
      "url": "https://github.com/ArabelaTso/Skills-4-SE",
      "tags": [],
      "target": [
        "source",
        "general"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "knowledge-base"
      ],
      "desc": "180+ software engineering skills across the lifecycle, including security scanner and formal verification packs."
    },
    {
      "name": "huhusmang/Awesome-LLMs-for-Vulnerability-Detection",
      "url": "https://github.com/huhusmang/Awesome-LLMs-for-Vulnerability-Detection",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "knowledge-base"
      ],
      "desc": "Paper collection focused on LLMs for vulnerability detection."
    },
    {
      "name": "VoltAgent/awesome-agent-skills",
      "url": "https://github.com/VoltAgent/awesome-agent-skills",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "500+ agent skills with strong security coverage."
    },
    {
      "name": "antigravity-awesome-skills",
      "url": "https://github.com/sickn33/antigravity-awesome-skills",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "1,370+ installable agentic skills with a rich security category."
    },
    {
      "name": "travisvn/awesome-claude-skills",
      "url": "https://github.com/travisvn/awesome-claude-skills",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "Curated Claude Skills index with security-relevant entries."
    },
    {
      "name": "hesreallyhim/awesome-claude-code",
      "url": "https://github.com/hesreallyhim/awesome-claude-code",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "Claude Code resource collection spanning skills, hooks, and slash commands."
    },
    {
      "name": "BehiSecc/awesome-claude-skills",
      "url": "https://github.com/BehiSecc/awesome-claude-skills",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "Security-focused Claude Skills curation."
    },
    {
      "name": "ComposioHQ/awesome-claude-skills",
      "url": "https://github.com/ComposioHQ/awesome-claude-skills",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "Another broad Claude Skills curated list."
    },
    {
      "name": "ottosulin/awesome-ai-security",
      "url": "https://github.com/ottosulin/awesome-ai-security",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "AI security resource collection with an agent-skills category."
    },
    {
      "name": "alirezarezvani/claude-skills",
      "url": "https://github.com/alirezarezvani/claude-skills",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "220+ Claude Code skills and agent plugins."
    },
    {
      "name": "Tencent/AI-Infra-Guard",
      "url": "https://github.com/Tencent/AI-Infra-Guard",
      "tags": [
        "CC",
        "OC",
        "MCP"
      ],
      "target": [
        "source",
        "web",
        "binary",
        "supply-chain",
        "agent"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing",
        "fuzzing"
      ],
      "form": [
        "suite"
      ],
      "desc": "Full-stack AI red teaming platform securing AI ecosystems via OpenClaw Security Scan, Agent Scan, Skills Scan, MCP Scan, AI Infra Scan, and LLM jailbreak evaluation."
    },
    {
      "name": "raroque/vibe-security-skill",
      "url": "https://github.com/raroque/vibe-security-skill",
      "tags": [
        "CC"
      ],
      "target": [
        "source",
        "web"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Agent skill that audits vibe-coded apps for common security vulnerabilities introduced by AI coding assistants — hardcoded secrets, missing row-level security, trusting client-submitted data, and localStorage token storage."
    },
    {
      "name": "msoedov/agentic_security",
      "url": "https://github.com/msoedov/agentic_security",
      "tags": [
        "CC"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "fuzzing",
        "dynamic-testing"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Open-source vulnerability scanner for agentic LLM workflows. Protects against jailbreaks, multimodal attacks, and fuzzing with RL-based adaptive attack generation and high-volume API stress testing."
    },
    {
      "name": "aryanbhosale/sh-guard",
      "url": "https://github.com/aryanbhosale/sh-guard",
      "tags": [
        "CC"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Semantic shell command safety classifier for AI coding agents. AST-based risk scoring with sub-100-microsecond latency. Detects recursive deletion, production database access, and other high-risk commands before execution."
    },
    {
      "name": "agent-receipts/ar",
      "url": "https://github.com/agent-receipts/ar",
      "tags": [
        "MCP"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Cryptographically signed audit trails for AI agent actions. Go/TypeScript/Python SDKs with an MCP proxy that signs every tool call — enables tamper-proof security audit logs and compliance verification."
    },
    {
      "name": "hellocosmos/agent-runtime-security",
      "url": "https://github.com/hellocosmos/agent-runtime-security",
      "tags": [
        "CC",
        "MCP"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Open-source runtime security framework for tool-using AI agents. Guard, Scanner, and AuditLogger components with MCP/LangChain/LangGraph integrations. Supports shadow/warn/enforce deployment modes."
    },
    {
      "name": "squirrelscan/skills",
      "url": "https://github.com/squirrelscan/skills",
      "tags": [
        "CC"
      ],
      "target": [
        "web",
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Website audit skill with 200+ rules across SEO, performance, accessibility, and security. Detects 96 secret-leak patterns (OpenAI, Anthropic, AWS, Stripe). LLM-native output, CI/CD optimized."
    },
    {
      "name": "getsentry/skills",
      "url": "https://github.com/getsentry/skills",
      "tags": [
        "CC"
      ],
      "target": [
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Sentry team's agent skills for security-focused code review and development workflow. Includes security-review, audit-website, and audit-supabase skills with high-confidence vulnerability verification."
    },
    {
      "name": "aiskillstore/marketplace",
      "url": "https://github.com/aiskillstore/marketplace",
      "tags": [],
      "target": [
        "general"
      ],
      "technique": [],
      "form": [
        "catalog"
      ],
      "desc": "Security-audited Claude and Codex skills marketplace."
    },
    {
      "name": "code-audit",
      "url": "https://github.com/3stoneBrother/code-audit",
      "tags": [
        "CC"
      ],
      "target": [
        "source",
        "web"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Claude Code white-box security audit skill covering multiple languages, frameworks, vulnerability classes, attack-chain construction, and multi-agent deep analysis"
    },
    {
      "name": "security-audit-skill",
      "url": "https://github.com/netresearch/security-audit-skill",
      "tags": [
        "CC"
      ],
      "target": [
        "source",
        "web"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Claude Code compatible agent skill for PHP security audits with OWASP patterns and vulnerability detection guidance"
    },
    {
      "name": "Claude-BugHunter",
      "url": "https://github.com/elementalsouls/Claude-BugHunter",
      "tags": [
        "CC",
        "CX",
        "OC"
      ],
      "target": [
        "web",
        "agent"
      ],
      "technique": [
        "dynamic-testing",
        "recon",
        "exploit-dev"
      ],
      "form": [
        "suite"
      ],
      "desc": "Agent skill bundle for authorized bug hunting and red-team workflows with vulnerability-class playbooks, disclosed-report patterns, slash commands, and multi-harness installation"
    },
    {
      "name": "oc-security-audit",
      "url": "https://github.com/miclivne/oc-security-audit",
      "tags": [
        "CC",
        "CX"
      ],
      "target": [
        "web",
        "source"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing",
        "compliance"
      ],
      "form": [
        "workflow"
      ],
      "desc": "Full-stack security audit skill for AI coding agents using OWASP-grounded checks across web apps, infrastructure, deployment, privacy, and LLM risk categories"
    },
    {
      "name": "ramparts",
      "url": "https://github.com/highflame-ai/ramparts",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "MCP and skill scanner for detecting indirect attack vectors, security vulnerabilities, and risky configuration in agent tooling"
    },
    {
      "name": "pix-ai-coding-assistant",
      "url": "https://github.com/Vulnetix/pix-ai-coding-assistant",
      "tags": [
        "CC",
        "TOOL"
      ],
      "target": [
        "source",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Vulnerability intelligence plugin for AI coding agents with dependency scanning, exploit analysis, remediation guidance, and pre-commit hooks"
    },
    {
      "name": "Semia",
      "url": "https://github.com/berabuddies/Semia",
      "tags": [
        "CC",
        "CX",
        "OC",
        "TOOL"
      ],
      "target": [
        "agent",
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security audit tool for AI agent skills with static analysis support for Claude Code, Codex, and OpenClaw-style skill ecosystems"
    },
    {
      "name": "agentshield",
      "url": "https://github.com/affaan-m/agentshield",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "AI agent security scanner for agent configurations, MCP servers, and tool permissions with CLI, GitHub Action, and app integrations"
    },
    {
      "name": "agent-audit",
      "url": "https://github.com/HeadyZhang/agent-audit",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Static security scanner for LLM agents covering prompt injection, MCP configuration auditing, taint analysis, and OWASP Agentic Top 10 mappings"
    },
    {
      "name": "skillfortify",
      "url": "https://github.com/qualixar/skillfortify",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner for AI agent skills and plugins with static analysis, supply-chain verification, SBOM generation, and multi-framework support"
    },
    {
      "name": "skillguard",
      "url": "https://github.com/obielin/skillguard",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner for AI agent skills that detects prompt injection, data exfiltration, and malicious payload risks before installation"
    },
    {
      "name": "Armorer-Guard",
      "url": "https://github.com/ArmorerLabs/Armorer-Guard",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Local Rust scanner for AI-agent prompt injection, credential leaks, exfiltration risks, and risky tool calls"
    },
    {
      "name": "joergmichno/clawguard",
      "url": "https://github.com/joergmichno/clawguard",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Prompt injection scanner for AI agents with multilingual detection patterns, REST API support, and compliance mappings"
    },
    {
      "name": "agentsec",
      "url": "https://github.com/debu-sinha/agentsec",
      "tags": [
        "OC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner and hardener for OpenClaw, MCP servers, and AI agent skill ecosystems"
    },
    {
      "name": "skillscan-security",
      "url": "https://github.com/kurtpayne/skillscan-security",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner for AI agent skills and MCP tool bundles covering prompt injection, IOC matching, malware detection, and ML-based classification"
    },
    {
      "name": "NVIDIA SkillSpector",
      "url": "https://github.com/NVIDIA/SkillSpector",
      "tags": [
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner for AI agent skills that detects vulnerabilities, malicious patterns, and security risks in skill packages"
    },
    {
      "name": "llm-sast-scanner",
      "url": "https://github.com/SunWeb3Sec/llm-sast-scanner",
      "tags": [
        "TOOL"
      ],
      "target": [
        "agent",
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "SAST skill for AI coding agents that provides structured vulnerability detection across multiple vulnerability classes"
    },
    {
      "name": "skill-sentinel",
      "url": "https://github.com/EvolutionUnleashed/skill-sentinel",
      "tags": [
        "CC",
        "TOOL"
      ],
      "target": [
        "agent",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "AI agent skill security scanner for detecting malicious code, prompt injection, data exfiltration, and supply-chain threats in SKILL.md files"
    },
    {
      "name": "prompt-shield",
      "url": "https://github.com/mthamil107/prompt-shield",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "web"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Prompt injection detection engine with input detectors, output scanners, PII redaction, red-team self-testing, and framework integrations"
    },
    {
      "name": "agent-scanner",
      "url": "https://github.com/go-authgate/agent-scanner",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner for AI agents, MCP servers, and agent skills with prompt-injection and tool-poisoning checks"
    },
    {
      "name": "mcp-safeguard",
      "url": "https://github.com/SyedAnas01/mcp-safeguard",
      "tags": [
        "CC",
        "MCP",
        "OAI",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Security scanner for MCP servers with rules for prompt injection, credential exposure, SSRF, and tool poisoning"
    },
    {
      "name": "skill-security-guard",
      "url": "https://github.com/rrrrrredy/skill-security-guard",
      "tags": [
        "OC",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Static security scanner for agent skills with A-F risk ratings, safe zip scanning, and CI-tested rules"
    },
    {
      "name": "mcpradar",
      "url": "https://github.com/yatuk/mcpradar",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Security scanner for MCP servers covering tool poisoning, prompt injection, secrets exposure, command injection, and cross-server attack chains"
    },
    {
      "name": "MCP-Shield",
      "url": "https://github.com/sumit1kr/MCP-Shield",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Security scanner for MCP servers that tests OWASP MCP Top 10 risks such as prompt injection, tool poisoning, and SSRF"
    },
    {
      "name": "mcpshield",
      "url": "https://github.com/mcpshield/mcpshield",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Supply-chain security scanner for MCP servers that detects typosquats, CVEs, credential leaks, and dangerous permissions in agent configs"
    },
    {
      "name": "Garak-MCP",
      "url": "https://github.com/EdenYavin/Garak-MCP",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "dynamic-testing"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "MCP server wrapper for using the Garak LLM vulnerability scanner from MCP-compatible agents"
    },
    {
      "name": "eSentire mcp-scanner",
      "url": "https://github.com/eSentire-Labs/mcp-scanner",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Security vulnerability scanner for Model Context Protocol servers"
    },
    {
      "name": "ghostpatch",
      "url": "https://github.com/NeuralRays/ghostpatch",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "source",
        "web",
        "agent"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Local AI-powered vulnerability scanner with OWASP rules, multi-language analysis, and MCP server support for coding agents"
    },
    {
      "name": "badchars/mcp-security-scanner",
      "url": "https://github.com/badchars/mcp-security-scanner",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "source",
        "supply-chain"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing",
        "fuzzing",
        "compliance"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "MCP server security scanner with runtime inspection, AST-based SAST, config audit, dependency analysis, fuzz testing, and OWASP MCP coverage"
    },
    {
      "name": "HailBytes/mcp-security-scanner",
      "url": "https://github.com/HailBytes/mcp-security-scanner",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Scanner for MCP server configurations covering overprivileged tools, missing authentication, prompt-injection surface, and unsafe defaults"
    },
    {
      "name": "adudley78/mcp-audit",
      "url": "https://github.com/adudley78/mcp-audit",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "Security scanner for MCP server configurations that detects prompt injection, credential exposure, and supply-chain risks"
    },
    {
      "name": "decoy-scan",
      "url": "https://github.com/decoy-run/decoy-scan",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "supply-chain"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner for MCP server configurations that finds risky tools, input validation gaps, transport vulnerabilities, and over-permissioned capability chains"
    },
    {
      "name": "mcp-semgrep-scanner",
      "url": "https://github.com/archimedes-market/mcp-semgrep-scanner",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "source",
        "web"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "mcp-server"
      ],
      "desc": "MCP integration for running Semgrep static analysis with OWASP Top 10 checks, secrets detection, custom rules, and baseline scanning"
    },
    {
      "name": "skilldoctor",
      "url": "https://github.com/studiomeyer-io/skilldoctor",
      "tags": [
        "CC",
        "TOOL"
      ],
      "target": [
        "agent",
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Linter and security scanner for AI-agent skill files covering SKILL.md, AGENTS.md, subagent frontmatter, prompt injection, data exfiltration, SARIF, and GitHub Actions"
    },
    {
      "name": "agentguard",
      "url": "https://github.com/dockfixlabs/agentguard",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "source"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner for AI agents that detects prompt injection, tool abuse, data exfiltration, and OWASP Agentic AI risks with MCP server mode"
    },
    {
      "name": "skillsentry",
      "url": "https://github.com/YAMRAJ13y/skillsentry",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Semantic scanner for malicious MCP servers and agent skills covering prompt injection, tool poisoning, rug-pulls, and excessive agency"
    },
    {
      "name": "agent-supply-chain-scanner",
      "url": "https://github.com/cloudanimal/agent-supply-chain-scanner",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "SAST tool for AI agent instructions that detects prompt injection and malicious instructions in skills, MCP servers, hooks, memory, and prompts"
    },
    {
      "name": "repo-forensics",
      "url": "https://github.com/alexgreensh/repo-forensics",
      "tags": [
        "CC",
        "CX",
        "MCP",
        "OC",
        "TOOL"
      ],
      "target": [
        "agent",
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Offline security scanner for AI-agent repositories, skills, plugins, and MCP servers before installation or execution"
    },
    {
      "name": "inkog",
      "url": "https://github.com/inkog-io/inkog",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "source",
        "web"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Static security scanner for AI agents covering prompt injection, runaway loops, missing oversight, and compliance gaps across agent frameworks"
    },
    {
      "name": "cc-audit",
      "url": "https://github.com/ryo-ebata/cc-audit",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "source",
        "supply-chain"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "mcp-server",
        "tool-wrapper"
      ],
      "desc": "AI-free static security scanner for Claude Code skills, hooks, MCP configs, commands, dependencies, and related agent artifacts"
    },
    {
      "name": "tooltrust-scanner",
      "url": "https://github.com/AgentSafe-AI/tooltrust-scanner",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server",
        "tool-wrapper"
      ],
      "desc": "AI agent tool-definition scanner that grades tool trust and reviews prompt injection, permission risk, supply-chain issues, and tool-shadowing risks"
    },
    {
      "name": "Eresus Sentinel",
      "url": "https://github.com/EresusSecurity/Eresus-sentinel",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis",
        "fuzzing"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Deterministic AI security toolkit for local audits, MCP and agent checks, model artifact scanning, and prompt firewall testing"
    },
    {
      "name": "SkillsGuard",
      "url": "https://github.com/Teycir/SkillsGuard",
      "tags": [
        "CC",
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent",
        "source",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Static security scanner for AI agent skill packages that detects malicious SKILL.md files and bundled scripts before they run"
    },
    {
      "name": "skill-lint",
      "url": "https://github.com/LichAmnesia/skill-lint",
      "tags": [
        "CC",
        "TOOL"
      ],
      "target": [
        "agent",
        "source"
      ],
      "technique": [
        "static-analysis",
        "compliance"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Security scanner for Claude Code and agent skills covering prompt injection, obfuscation, credential exfiltration, and supply-chain risks"
    },
    {
      "name": "honeybadger",
      "url": "https://github.com/famclaw/honeybadger",
      "tags": [
        "CC",
        "MCP",
        "OC",
        "TOOL"
      ],
      "target": [
        "agent",
        "source",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "Pre-install security scanner for AI agent skills and MCP servers covering secrets, CVEs, supply-chain attacks, and prompt injection in SKILL.md files"
    },
    {
      "name": "runner-guard",
      "url": "https://github.com/Vigilant-LLC/runner-guard",
      "tags": [
        "TOOL"
      ],
      "target": [
        "source",
        "supply-chain"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "tool-wrapper"
      ],
      "desc": "CI/CD supply-chain scanner for GitHub Actions workflows covering pipeline injection, unpinned dependencies, AI configuration poisoning, and suspicious payloads"
    },
    {
      "name": "SecSkills",
      "url": "https://github.com/DaoYiSec/SecSkills",
      "tags": [
        "CC",
        "MCP",
        "OC",
        "TOOL"
      ],
      "target": [
        "agent",
        "source",
        "web",
        "mobile",
        "binary"
      ],
      "technique": [
        "static-analysis",
        "dynamic-testing",
        "recon",
        "reverse-engineering"
      ],
      "form": [
        "catalog"
      ],
      "desc": "Chinese security-focused catalog of Skills and MCP resources covering code audit, vulnerability scanning, penetration testing, skill security checks, mobile security, reverse engineering, incident response, and security research."
    },
    {
      "name": "SkillSemgrep",
      "url": "https://github.com/KimYx0207/SkillSemgrep",
      "tags": [
        "CC",
        "TOOL"
      ],
      "target": [
        "source",
        "web"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Claude Code security scanning skill powered by Semgrep, enabling natural-language vulnerability scanning, OWASP checks, secret detection, multi-language analysis, and structured security reports."
    },
    {
      "name": "openclaw-security-guard",
      "url": "https://github.com/2pidata/openclaw-security-guard",
      "tags": [
        "MCP",
        "OC",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server",
        "tool-wrapper"
      ],
      "desc": "Security layer for OpenClaw with CLI scanning, live dashboard support, secrets detection, configuration hardening, prompt injection scanning, and MCP server auditing."
    },
    {
      "name": "toolfence",
      "url": "https://github.com/nikolas-sapa/toolfence",
      "tags": [
        "MCP",
        "TOOL"
      ],
      "target": [
        "agent"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "mcp-server",
        "tool-wrapper"
      ],
      "desc": "Security scanner for MCP servers that reports severity-ranked risks inherited by AI agents when connecting to external MCP tools."
    },
    {
      "name": "FlutterGuard",
      "url": "https://github.com/anasfik/FlutterGuard",
      "tags": [
        "CC",
        "CX",
        "OC"
      ],
      "target": [
        "mobile",
        "binary",
        "source"
      ],
      "technique": [
        "static-analysis"
      ],
      "form": [
        "prompt-skill"
      ],
      "desc": "Flutter APK/AAB security skill for OpenClaw, Codex, Claude Code, and other AI coding agents, focused on mobile application security review."
    }
  ]
};
