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
      "Entries include both agent-native skills and standalone tools when they are useful in the same workflow."
    ],
    "platformNote": "Most `CC` skills with a standard `SKILL.md` layout can also be loaded into OpenClaw through a workspace skills directory.",
    "contributingIntro": "Open a PR with:",
    "contributingItems": [
      "Project name",
      "Repository link",
      "One-sentence description",
      "Applicable platform tags: `CC`, `OC`, `CX`, `MCP`, `OAI`, `TOOL`"
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
    "howToUseText": "Filter by platform tag, search by capability or project name, then jump to the original repository for setup details.",
    "scopeTitle": "Scope",
    "scopeText": "This catalog mixes native agent skills with adjacent tools when they serve the same security workflow.",
    "searchLabel": "Search the catalog",
    "searchPlaceholder": "Search by name, capability, category, or tag...",
    "legendTitle": "Platform Tags",
    "legendNote": "Most standard CC skills can also be adapted to OpenClaw-style workspace skill loading.",
    "categoryFilterTitle": "Filter by category",
    "categoryFilterText": "Browse by functional area. You can select multiple categories.",
    "platformFilterTitle": "Filter by platform",
    "platformFilterText": "Narrow results to the runtimes or packaging styles you care about.",
    "resultsTitle": "Skill cards",
    "resultsText": "Browse the visible results directly. Search is optional; filters work without typing anything.",
    "allCategoriesLabel": "All categories",
    "allPlatformsLabel": "All platforms",
    "categoryLabel": "Category",
    "groupLabel": "Group",
    "selectionTitle": "Install prompt builder",
    "selectionText": "Select the skills or repos you want, then copy a ready-to-send prompt for your agent.",
    "selectionCountLabel": "Selected skills",
    "selectionEmpty": "No skills selected yet. Tick one or more entries below to generate an installation prompt.",
    "promptLabel": "Generated install prompt",
    "copyPromptLabel": "Copy prompt",
    "clearSelectionLabel": "Clear selection",
    "promptCopiedLabel": "Copied",
    "openRepoLabel": "Open repo",
    "noResultsText": "No entries matched the current category, platform, and search filters."
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
  "categories": [
    {
      "id": "threat-modeling-audit-orchestration",
      "emoji": "🎯",
      "title": "Threat Modeling & Audit Orchestration",
      "description": "Structured workflows that coordinate threat modeling, triage, and multi-stage security review.",
      "groups": [
        {
          "title": "Professional & Official",
          "items": [
            {
              "name": "GitHub Security Lab taskflow-agent",
              "url": "https://github.com/GitHubSecurityLab/seclab-taskflow-agent",
              "tags": [
                "OAI",
                "MCP"
              ],
              "desc": "3-stage audit pipeline: threat modeling, vulnerability suggestion, and independent verification."
            },
            {
              "name": "GitHub Security Lab taskflows",
              "url": "https://github.com/GitHubSecurityLab/seclab-taskflows",
              "tags": [
                "OAI"
              ],
              "desc": "Declarative YAML taskflow definitions for GitHub Security Lab's audit agent workflow."
            },
            {
              "name": "OpenAI security-threat-model",
              "url": "https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model",
              "tags": [
                "CX"
              ],
              "desc": "STRIDE-based architecture-level threat modeling skill for Codex-style workflows."
            }
          ]
        }
      ]
    },
    {
      "id": "static-analysis-code-review",
      "emoji": "🔍",
      "title": "Static Analysis & Code Review",
      "description": "Source-oriented review skills for vulnerability discovery, secure coding guidance, and PR security checks.",
      "groups": [
        {
          "title": "Professional & Official",
          "items": [
            {
              "name": "Trail of Bits Skills",
              "url": "https://github.com/trailofbits/skills",
              "tags": [
                "CC",
                "CX"
              ],
              "desc": "18+ security skills including static analysis, variant analysis, differential review, insecure defaults, constant-time analysis, audit context building, and more."
            },
            {
              "name": "Ghost Security Skills",
              "url": "https://github.com/ghostsecurity/skills",
              "tags": [
                "CC"
              ],
              "desc": "AI-native application security skills focused on practical AppSec workflows."
            },
            {
              "name": "Anthropic Security Review",
              "url": "https://github.com/anthropics/claude-code-security-review",
              "tags": [
                "CC"
              ],
              "desc": "Official GitHub Action for PR security review with false-positive filtering."
            }
          ]
        },
        {
          "title": "Community Review Skills",
          "items": [
            {
              "name": "afiqiqmal/claude-security-audit",
              "url": "https://github.com/afiqiqmal/claude-security-audit",
              "tags": [
                "CC"
              ],
              "desc": "5-phase audit flow with 475+ checks, OWASP 2025 coverage, compliance mappings, and framework-specific rules."
            },
            {
              "name": "claude-code-owasp",
              "url": "https://github.com/agamm/claude-code-owasp",
              "tags": [
                "CC"
              ],
              "desc": "OWASP Top 10:2025 + ASVS 5.0 + agentic AI security review guidance across 20+ languages."
            },
            {
              "name": "vibesec",
              "url": "https://github.com/BehiSecc/vibesec",
              "tags": [
                "CC"
              ],
              "desc": "Bug hunter-oriented secure coding assistant focused on IDOR, XSS, SQLi, SSRF, and similar flaws."
            },
            {
              "name": "clawsec",
              "url": "https://github.com/prompt-security/clawsec",
              "tags": [
                "CC"
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
              "desc": "Multi-language security assessment for JS, Go, Python, Rust, Java, and PHP."
            },
            {
              "name": "NeoLab code-review",
              "url": "https://github.com/NeoLabHQ",
              "tags": [
                "CC"
              ],
              "desc": "6 parallel specialist agents covering bug hunting, security auditing, code quality, contracts, tests, and history."
            },
            {
              "name": "wrsmith108/security-auditor",
              "url": "https://github.com/wrsmith108/claude-skill-security-auditor",
              "tags": [
                "CC"
              ],
              "desc": "npm dependency audit wrapper with exception management support."
            }
          ]
        }
      ]
    },
    {
      "id": "security-operations-workflow-suites",
      "emoji": "🧰",
      "title": "Security Operations & Workflow Suites",
      "description": "Broad, multi-capability security setups spanning scanning, policy enforcement, and agent workflow composition.",
      "groups": [
        {
          "title": "Comprehensive Security Suites",
          "items": [
            {
              "name": "SecOpsAgentKit",
              "url": "https://github.com/AgentSecOps/SecOpsAgentKit",
              "tags": [
                "CC"
              ],
              "desc": "25+ SecOps skills for vulnerability discovery, container scanning, secrets detection, and policy enforcement."
            },
            {
              "name": "claude-forge",
              "url": "https://github.com/sangrokjung/claude-forge",
              "tags": [
                "CC"
              ],
              "desc": "Security-conscious Claude setup with 11 agents, 36 commands, 15 skills, and layered hooks."
            },
            {
              "name": "everything-claude-code",
              "url": "https://github.com/affaan-m/everything-claude-code",
              "tags": [
                "CC"
              ],
              "desc": "Performance-optimized Claude Code setup with security-focused skills, instincts, and memory."
            }
          ]
        },
        {
          "title": "Audit Context Infrastructure",
          "items": [
            {
              "name": "graphify",
              "url": "https://github.com/safishamsi/graphify",
              "tags": [
                "CC",
                "CX",
                "OC"
              ],
              "desc": "Convert code and docs into queryable knowledge graphs for audit assistance."
            }
          ]
        }
      ]
    },
    {
      "id": "offensive-security-pentest-ctf",
      "emoji": "⚔️",
      "title": "Offensive Security, Pentest & CTF",
      "description": "Offensive workflows for bug bounty, autonomous pentesting, hands-on recon, and practice environments.",
      "groups": [
        {
          "title": "Offensive Agents & Bug Bounty",
          "items": [
            {
              "name": "awesome-claude-skills-security",
              "url": "https://github.com/Eyadkelleh/awesome-claude-skills-security",
              "tags": [
                "CC"
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
              "desc": "Adversarial AI bug hunter targeting offensive security and bug bounty workflows."
            },
            {
              "name": "raptor",
              "url": "https://github.com/gadievron/raptor",
              "tags": [
                "CC"
              ],
              "desc": "General-purpose security agent spanning both offensive and defensive work."
            },
            {
              "name": "communitytools",
              "url": "https://github.com/transilienceai/communitytools",
              "tags": [
                "CC"
              ],
              "desc": "Pentest skills and slash commands tuned for bug bounty research."
            }
          ]
        },
        {
          "title": "Dynamic Testing & Pentest",
          "items": [
            {
              "name": "Strix",
              "url": "https://github.com/usestrix/strix",
              "tags": [
                "TOOL"
              ],
              "desc": "Autonomous AI pentester in a Docker sandbox with Caido proxy, headless browser, multi-agent orchestration, and PoC-focused reporting."
            },
            {
              "name": "hexstrike-ai",
              "url": "https://github.com/0x4m4/hexstrike-ai",
              "tags": [
                "MCP"
              ],
              "desc": "MCP server exposing 150+ Kali Linux pentest tools to AI agents."
            }
          ]
        },
        {
          "title": "CTF & Practice",
          "items": [
            {
              "name": "ctf-skills",
              "url": "https://github.com/ljagiello/ctf-skills",
              "tags": [
                "CC",
                "CX"
              ],
              "desc": "CTF-oriented skills for web, pwn, crypto, reverse, forensics, OSINT, malware, and more."
            }
          ]
        }
      ]
    },
    {
      "id": "fuzzing",
      "emoji": "🐛",
      "title": "Fuzzing",
      "description": "Coverage-guided, web-targeted, and workflow-oriented fuzzing skills for bug discovery.",
      "groups": [
        {
          "title": "Core Projects",
          "items": [
            {
              "name": "Trail of Bits testing-handbook-skills",
              "url": "https://github.com/trailofbits/skills",
              "tags": [
                "CC",
                "CX"
              ],
              "desc": "Fuzzer, static analysis, and sanitizer integration guidance from Trail of Bits."
            },
            {
              "name": "ffuf-claude-skill",
              "url": "https://github.com/jthack/ffuf-claude-skill",
              "tags": [
                "CC"
              ],
              "desc": "FFUF-based web fuzzing integration for Claude."
            },
            {
              "name": "awesome-claude-skills-security",
              "url": "https://github.com/Eyadkelleh/awesome-claude-skills-security",
              "tags": [
                "CC"
              ],
              "desc": "Security skills collection that also includes fuzzing-oriented workflows."
            }
          ]
        }
      ]
    },
    {
      "id": "reverse-engineering-binary-analysis",
      "emoji": "🔬",
      "title": "Reverse Engineering & Binary Analysis",
      "description": "Binary analysis, APK review, and artifact extraction skills useful during security research.",
      "groups": [
        {
          "title": "Core Projects",
          "items": [
            {
              "name": "Trail of Bits dwarf-expert",
              "url": "https://github.com/trailofbits/skills",
              "tags": [
                "CC",
                "CX"
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
              "desc": "Android APK scanning workflow for Firebase misconfiguration discovery."
            },
            {
              "name": "Trail of Bits burpsuite-project-parser",
              "url": "https://github.com/trailofbits/skills",
              "tags": [
                "CC",
                "CX"
              ],
              "desc": "Search and extract data from Burp Suite project files."
            }
          ]
        }
      ]
    },
    {
      "id": "smart-contract-security",
      "emoji": "📜",
      "title": "Smart Contract Security",
      "description": "Smart contract and blockchain-focused auditing, compliance checking, and vulnerability scanning.",
      "groups": [
        {
          "title": "Core Projects",
          "items": [
            {
              "name": "Trail of Bits building-secure-contracts",
              "url": "https://github.com/trailofbits/skills/tree/main/plugins/building-secure-contracts",
              "tags": [
                "CC",
                "CX"
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
              "desc": "Identify state-changing entry points in smart contracts."
            },
            {
              "name": "Trail of Bits spec-to-code-compliance",
              "url": "https://github.com/trailofbits/skills",
              "tags": [
                "CC",
                "CX"
              ],
              "desc": "Specification-to-code compliance checking for blockchain audits."
            },
            {
              "name": "scv-scan",
              "url": "https://github.com/kadenzipfel/scv-scan",
              "tags": [
                "CC"
              ],
              "desc": "Solidity vulnerability scanner covering 36 vulnerability classes."
            }
          ]
        }
      ]
    },
    {
      "id": "skill-agent-security",
      "emoji": "🔒",
      "title": "Skill & Agent Security",
      "description": "Tools focused on scanning skills, prompts, MCP servers, and agent extensions for malicious behavior or unsafe patterns.",
      "groups": [
        {
          "title": "Core Projects",
          "items": [
            {
              "name": "Cisco skill-scanner",
              "url": "https://github.com/cisco-ai-defense/skill-scanner",
              "tags": [
                "TOOL"
              ],
              "desc": "Multi-engine skill scanning using YAML/YARA rules, AST behavior analysis, semantic review, and VirusTotal."
            },
            {
              "name": "Snyk agent-scan",
              "url": "https://github.com/snyk/agent-scan",
              "tags": [
                "TOOL"
              ],
              "desc": "Scan MCP servers and agent skills for prompt injection, tool poisoning, and data exfiltration risk."
            },
            {
              "name": "pors/skill-audit",
              "url": "https://github.com/pors/skill-audit",
              "tags": [
                "TOOL"
              ],
              "desc": "CLI scanner for prompt injection, secret leakage, and dangerous patterns with SARIF output."
            },
            {
              "name": "huifer/skill-security-scan",
              "url": "https://github.com/huifer/skill-security-scan",
              "tags": [
                "TOOL"
              ],
              "desc": "Bilingual Claude Skills scanner with static analysis, rule engine, and HTML reporting."
            }
          ]
        }
      ]
    },
    {
      "id": "knowledge-bases-research",
      "emoji": "📚",
      "title": "Knowledge Bases & Research",
      "description": "Structured skill packs, research collections, and reference material that support security analysis workflows.",
      "groups": [
        {
          "title": "Structured Skill Collections",
          "items": [
            {
              "name": "mukul975/Anthropic-Cybersecurity-Skills",
              "url": "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
              "tags": [
                "CC",
                "OC"
              ],
              "desc": "754 structured skills across 38 security domains aligned with MITRE ATT&CK and NIST CSF 2.0."
            },
            {
              "name": "Skills-4-SE Security Scanner Suite",
              "url": "https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/security-scanner-suite",
              "tags": [
                "CC"
              ],
              "desc": "13 security skills spanning static vuln detection, root cause analysis, exploitability assessment, CVE reachability, taint instrumentation, and patch advice."
            },
            {
              "name": "Skills-4-SE Formal Verification Toolkit",
              "url": "https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/formal-verification-toolkit",
              "tags": [
                "CC"
              ],
              "desc": "17 formal verification skills for model checking, contract verification, and invariant analysis."
            },
            {
              "name": "ArabelaTso/Skills-4-SE",
              "url": "https://github.com/ArabelaTso/Skills-4-SE",
              "tags": [],
              "desc": "180+ software engineering skills across the lifecycle, including security scanner and formal verification packs."
            }
          ]
        },
        {
          "title": "Research Collections",
          "items": [
            {
              "name": "huhusmang/Awesome-LLMs-for-Vulnerability-Detection",
              "url": "https://github.com/huhusmang/Awesome-LLMs-for-Vulnerability-Detection",
              "tags": [],
              "desc": "Paper collection focused on LLMs for vulnerability detection."
            }
          ]
        }
      ]
    },
    {
      "id": "indexes-marketplaces-discovery",
      "emoji": "🗂️",
      "title": "Indexes, Marketplaces & Discovery",
      "description": "Broader indexes, marketplaces, and curated lists that help you discover installable skills and related ecosystems.",
      "groups": [
        {
          "title": "Curated Indexes",
          "items": [
            {
              "name": "VoltAgent/awesome-agent-skills",
              "url": "https://github.com/VoltAgent/awesome-agent-skills",
              "tags": [],
              "desc": "500+ agent skills with strong security coverage."
            },
            {
              "name": "antigravity-awesome-skills",
              "url": "https://github.com/sickn33/antigravity-awesome-skills",
              "tags": [],
              "desc": "1,370+ installable agentic skills with a rich security category."
            },
            {
              "name": "travisvn/awesome-claude-skills",
              "url": "https://github.com/travisvn/awesome-claude-skills",
              "tags": [],
              "desc": "Curated Claude Skills index with security-relevant entries."
            },
            {
              "name": "hesreallyhim/awesome-claude-code",
              "url": "https://github.com/hesreallyhim/awesome-claude-code",
              "tags": [],
              "desc": "Claude Code resource collection spanning skills, hooks, and slash commands."
            },
            {
              "name": "BehiSecc/awesome-claude-skills",
              "url": "https://github.com/BehiSecc/awesome-claude-skills",
              "tags": [],
              "desc": "Security-focused Claude Skills curation."
            },
            {
              "name": "ComposioHQ/awesome-claude-skills",
              "url": "https://github.com/ComposioHQ/awesome-claude-skills",
              "tags": [],
              "desc": "Another broad Claude Skills curated list."
            },
            {
              "name": "ottosulin/awesome-ai-security",
              "url": "https://github.com/ottosulin/awesome-ai-security",
              "tags": [],
              "desc": "AI security resource collection with an agent-skills category."
            },
            {
              "name": "alirezarezvani/claude-skills",
              "url": "https://github.com/alirezarezvani/claude-skills",
              "tags": [],
              "desc": "220+ Claude Code skills and agent plugins."
            }
          ]
        },
        {
          "title": "Marketplaces",
          "items": [
            {
              "name": "aiskillstore/marketplace",
              "url": "https://github.com/aiskillstore/marketplace",
              "tags": [],
              "desc": "Security-audited Claude and Codex skills marketplace."
            }
          ]
        }
      ]
    }
  ]
};
