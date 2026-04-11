<!-- Generated from catalog.js by scripts/generate.js. Do not edit README.md directly. -->

# Awesome Vulnerability Detection Skills

A curated list of AI agent skills, workflows, MCP servers, and related tooling for vulnerability detection and security research.

For Claude Code, OpenClaw, Codex, Cursor, Gemini CLI, and adjacent agent runtimes.

[Source Code Audit](#source-code-audit) •
[Dynamic Testing & Pentest](#dynamic-testing-pentest) •
[Fuzzing](#fuzzing) •
[Reverse Engineering](#reverse-engineering) •
[Smart Contract Audit](#smart-contract-audit) •
[Skill Security](#skill-security) •
[Aggregation & Index](#aggregation-index)

## Overview

- The canonical list lives in this README.
- A searchable static catalog is included in [`docs/index.html`](docs/index.html).
- Entries include both agent-native skills and standalone tools when they are useful in the same workflow.

## Platform Tags

| Tag | Meaning |
| --- | --- |
| `CC` | Claude Code skill or workflow |
| `OC` | OpenClaw-compatible skill or runtime |
| `CX` | Codex-compatible skill |
| `MCP` | MCP server usable from MCP-compatible agents |
| `OAI` | OpenAI Agents SDK or OpenAI platform workflow |
| `🔧` | Standalone tool or framework |

> Most `CC` skills with a standard `SKILL.md` layout can also be loaded into OpenClaw through a workspace skills directory.

## Repository Layout

- [`catalog.js`](catalog.js): single source of truth for the catalog content and site copy.
- [`CONTRIBUTING.md`](CONTRIBUTING.md): contribution workflow for editing the catalog and opening PRs.
- [`scripts/generate.js`](scripts/generate.js): generates `README.md` and `docs/data.js` from `catalog.js`.
- [`docs/index.html`](docs/index.html): searchable static catalog UI.
- [`docs/data.js`](docs/data.js): generated browser data bundle consumed by the static site.
- [`docs/app.js`](docs/app.js): client-side rendering, search, filtering, and data-driven page copy.

Run `npm run generate` after editing the source catalog. Use `npm run check` to verify generated files are up to date.

<a id="source-code-audit"></a>
## 🔍 Source Code Audit

Review-oriented skills and security workflows for finding vulnerabilities in codebases.

### 🏢 Professional / Official

- **[Trail of Bits Skills](https://github.com/trailofbits/skills)** `CC` `CX` - 18+ security skills including static analysis, variant analysis, differential review, insecure defaults, constant-time analysis, audit context building, and more.
- **[Ghost Security Skills](https://github.com/ghostsecurity/skills)** `CC` - AI-native application security skills focused on practical AppSec workflows.
- **[Anthropic Security Review](https://github.com/anthropics/claude-code-security-review)** `CC` - Official GitHub Action for PR security review with false-positive filtering.
- **[GitHub Security Lab taskflow-agent](https://github.com/GitHubSecurityLab/seclab-taskflow-agent)** `OAI` `MCP` - 3-stage audit pipeline: threat modeling, vulnerability suggestion, and independent verification.
- **[GitHub Security Lab taskflows](https://github.com/GitHubSecurityLab/seclab-taskflows)** `OAI` - Declarative YAML taskflow definitions for GitHub Security Lab's audit agent workflow.
- **[OpenAI security-threat-model](https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model)** `CX` - STRIDE-based architecture-level threat modeling skill for Codex-style workflows.

### 🧑‍💻 Community - Source Code Review

- **[afiqiqmal/claude-security-audit](https://github.com/afiqiqmal/claude-security-audit)** `CC` - 5-phase audit flow with 475+ checks, OWASP 2025 coverage, compliance mappings, and framework-specific rules.
- **[claude-code-owasp](https://github.com/agamm/claude-code-owasp)** `CC` - OWASP Top 10:2025 + ASVS 5.0 + agentic AI security review guidance across 20+ languages.
- **[vibesec](https://github.com/BehiSecc/vibesec)** `CC` - Bug hunter-oriented secure coding assistant focused on IDOR, XSS, SQLi, SSRF, and similar flaws.
- **[clawsec](https://github.com/prompt-security/clawsec)** `CC` - Security drift detection, automatic auditing, and skill integrity verification.
- **[perseus](https://github.com/kaivyy/perseus)** `CC` `CX` - Multi-language security assessment for JS, Go, Python, Rust, Java, and PHP.
- **[NeoLab code-review](https://github.com/NeoLabHQ)** `CC` - 6 parallel specialist agents covering bug hunting, security auditing, code quality, contracts, tests, and history.
- **[wrsmith108/security-auditor](https://github.com/wrsmith108/claude-skill-security-auditor)** `CC` - npm dependency audit wrapper with exception management support.

### 🧑‍💻 Community - Offensive / Bug Bounty

- **[awesome-claude-skills-security](https://github.com/Eyadkelleh/awesome-claude-skills-security)** `CC` - Security-oriented Claude skills collection with dedicated pentest, CTF, and bug bounty agents.
- **[bug-hunter](https://github.com/codexstar69/bug-hunter)** `CC` `CX` - Adversarial AI bug hunter targeting offensive security and bug bounty workflows.
- **[raptor](https://github.com/gadievron/raptor)** `CC` - General-purpose security agent spanning both offensive and defensive work.
- **[communitytools](https://github.com/transilienceai/communitytools)** `CC` - Pentest skills and slash commands tuned for bug bounty research.
- **[ctf-skills](https://github.com/ljagiello/ctf-skills)** `CC` `CX` - CTF-oriented skills for web, pwn, crypto, reverse, forensics, OSINT, malware, and more.

### 🧑‍💻 Community - SecOps / Comprehensive

- **[SecOpsAgentKit](https://github.com/AgentSecOps/SecOpsAgentKit)** `CC` - 25+ SecOps skills for vulnerability discovery, container scanning, secrets detection, and policy enforcement.
- **[claude-forge](https://github.com/sangrokjung/claude-forge)** `CC` - Security-conscious Claude setup with 11 agents, 36 commands, 15 skills, and layered hooks.
- **[everything-claude-code](https://github.com/affaan-m/everything-claude-code)** `CC` - Performance-optimized Claude Code setup with security-focused skills, instincts, and memory.

### 📚 Knowledge Bases

- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** `CC` `OC` - 754 structured skills across 38 security domains aligned with MITRE ATT&CK and NIST CSF 2.0.
- **[Skills-4-SE Security Scanner Suite](https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/security-scanner-suite)** `CC` - 13 security skills spanning static vuln detection, root cause analysis, exploitability assessment, CVE reachability, taint instrumentation, and patch advice.
- **[Skills-4-SE Formal Verification Toolkit](https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/formal-verification-toolkit)** `CC` - 17 formal verification skills for model checking, contract verification, and invariant analysis.

---

<a id="dynamic-testing-pentest"></a>
## ⚡ Dynamic Testing & Pentest

Agent-facing tooling for active testing, reconnaissance, and pentesting workflows.

### Core Projects

- **[Strix](https://github.com/usestrix/strix)** `🔧` - Autonomous AI pentester in a Docker sandbox with Caido proxy, headless browser, multi-agent orchestration, and PoC-focused reporting.
- **[hexstrike-ai](https://github.com/0x4m4/hexstrike-ai)** `MCP` - MCP server exposing 150+ Kali Linux pentest tools to AI agents.
- **[ffuf-claude-skill](https://github.com/jthack/ffuf-claude-skill)** `CC` - Claude-integrated FFUF web fuzzing workflow with result analysis.

---

<a id="fuzzing"></a>
## 🐛 Fuzzing

Fuzzing-specific skills and adjacent tools for coverage-guided and web-targeted discovery.

### Core Projects

- **[Trail of Bits testing-handbook-skills](https://github.com/trailofbits/skills)** `CC` `CX` - Fuzzer, static analysis, and sanitizer integration guidance from Trail of Bits.
- **[awesome-claude-skills-security](https://github.com/Eyadkelleh/awesome-claude-skills-security)** `CC` - Security skills collection that also includes fuzzing-oriented workflows.
- **[ffuf-claude-skill](https://github.com/jthack/ffuf-claude-skill)** `CC` - FFUF-based web fuzzing integration for Claude.

---

<a id="reverse-engineering"></a>
## 🔬 Reverse Engineering

Binary analysis, APK review, and artifact extraction skills useful during security research.

### Core Projects

- **[Trail of Bits dwarf-expert](https://github.com/trailofbits/skills)** `CC` `CX` - DWARF debug format expertise for binary analysis workflows.
- **[Trail of Bits firebase-apk-scanner](https://github.com/trailofbits/skills)** `CC` `CX` - Android APK scanning workflow for Firebase misconfiguration discovery.
- **[Trail of Bits burpsuite-project-parser](https://github.com/trailofbits/skills)** `CC` `CX` - Search and extract data from Burp Suite project files.

---

<a id="smart-contract-audit"></a>
## 📜 Smart Contract Audit

Smart contract and blockchain-specific audit skills, analyzers, and scanners.

### Core Projects

- **[Trail of Bits building-secure-contracts](https://github.com/trailofbits/skills/tree/main/plugins/building-secure-contracts)** `CC` `CX` - 6-chain scanner plus audit prep and maturity assessment for smart contract projects.
- **[Trail of Bits entry-point-analyzer](https://github.com/trailofbits/skills)** `CC` `CX` - Identify state-changing entry points in smart contracts.
- **[Trail of Bits spec-to-code-compliance](https://github.com/trailofbits/skills)** `CC` `CX` - Specification-to-code compliance checking for blockchain audits.
- **[scv-scan](https://github.com/kadenzipfel/scv-scan)** `CC` - Solidity vulnerability scanner covering 36 vulnerability classes.

---

<a id="skill-security"></a>
## 🔒 Skill Security

Tools specifically focused on scanning skills, prompts, MCP servers, and agent extensions for malicious behavior.

### Core Projects

- **[Cisco skill-scanner](https://github.com/cisco-ai-defense/skill-scanner)** `🔧` - Multi-engine skill scanning using YAML/YARA rules, AST behavior analysis, semantic review, and VirusTotal.
- **[Snyk agent-scan](https://github.com/snyk/agent-scan)** `🔧` - Scan MCP servers and agent skills for prompt injection, tool poisoning, and data exfiltration risk.
- **[pors/skill-audit](https://github.com/pors/skill-audit)** `🔧` - CLI scanner for prompt injection, secret leakage, and dangerous patterns with SARIF output.
- **[huifer/skill-security-scan](https://github.com/huifer/skill-security-scan)** `🔧` - Bilingual Claude Skills scanner with static analysis, rule engine, and HTML reporting.

---

<a id="aggregation-index"></a>
## 🗂️ Aggregation & Index

Broader lists, marketplaces, and reference collections that make the ecosystem easier to discover.

### Core Projects

- **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)** - 500+ agent skills with strong security coverage.
- **[antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills)** - 1,370+ installable agentic skills with a rich security category.
- **[travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)** - Curated Claude Skills index with security-relevant entries.
- **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** - Claude Code resource collection spanning skills, hooks, and slash commands.
- **[BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills)** - Security-focused Claude Skills curation.
- **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)** - Another broad Claude Skills curated list.
- **[ottosulin/awesome-ai-security](https://github.com/ottosulin/awesome-ai-security)** - AI security resource collection with an agent-skills category.
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** - 220+ Claude Code skills and agent plugins.
- **[aiskillstore/marketplace](https://github.com/aiskillstore/marketplace)** - Security-audited Claude and Codex skills marketplace.
- **[graphify](https://github.com/safishamsi/graphify)** `CC` `CX` `OC` - Convert code and docs into queryable knowledge graphs for audit assistance.
- **[huhusmang/Awesome-LLMs-for-Vulnerability-Detection](https://github.com/huhusmang/Awesome-LLMs-for-Vulnerability-Detection)** - Paper collection focused on LLMs for vulnerability detection.
- **[ArabelaTso/Skills-4-SE](https://github.com/ArabelaTso/Skills-4-SE)** - 180+ software engineering skills across the lifecycle, including security scanner and formal verification packs.

## Contributing

Open a PR with:

- Project name
- Repository link
- One-sentence description
- Applicable platform tags: `CC`, `OC`, `CX`, `MCP`, `OAI`, `TOOL`

Prefer entries that are clearly maintained, practically usable, and specific about what the skill or tool actually does.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full PR workflow.
