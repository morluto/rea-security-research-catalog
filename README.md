<!-- Generated from catalog.js by scripts/generate.js. Do not edit README.md directly. -->

<p align="center">
  <img src="https://img.shields.io/badge/Curated%20AI%20security%20catalog-0f172a?style=for-the-badge&labelColor=111827&color=0f172a" alt="Curated AI security catalog">
</p>

<h1 align="center">🛡️ Awesome Vulnerability Detection Skills</h1>

<p align="center">
  <a href="https://github.com/sindresorhus/awesome"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome"></a>
  <img src="https://img.shields.io/badge/entries-52-2f81f7?style=flat-square" alt="52 entries">
  <img src="https://img.shields.io/badge/categories-10-238636?style=flat-square" alt="10 categories">
  <a href="https://iie-varas.github.io/awesome-vulnerability-detection-skills/"><img src="https://img.shields.io/badge/GitHub%20Pages-live%20catalog-0ea5e9?style=flat-square" alt="GitHub Pages"></a>
  <a href="https://github.com/IIE-VARAS/awesome-vulnerability-detection-skills/actions/workflows/catalog-sync.yml"><img src="https://github.com/IIE-VARAS/awesome-vulnerability-detection-skills/actions/workflows/catalog-sync.yml/badge.svg" alt="Catalog Sync"></a>
</p>

<p align="center">A curated list of AI agent skills, workflows, MCP servers, and related tooling for vulnerability detection and security research.<br>For Claude Code, OpenClaw, Codex, Cursor, Gemini CLI, and adjacent agent runtimes.</p>

<p align="center"><a href="https://iie-varas.github.io/awesome-vulnerability-detection-skills/"><strong>Open Live Catalog</strong></a></p>

[Threat Modeling & Audit Orchestration](#threat-modeling-audit-orchestration) •
[Static Analysis & Code Review](#static-analysis-code-review) •
[Security Operations & Workflow Suites](#security-operations-workflow-suites) •
[Offensive Security, Pentest & CTF](#offensive-security-pentest-ctf) •
[Fuzzing](#fuzzing) •
[Reverse Engineering & Binary Analysis](#reverse-engineering-binary-analysis) •
[Smart Contract Security](#smart-contract-security) •
[Skill & Agent Security](#skill-agent-security) •
[Knowledge Bases & Research](#knowledge-bases-research) •
[Indexes, Marketplaces & Discovery](#indexes-marketplaces-discovery)

## Overview

- The canonical list lives in this README.
- The live catalog is published on GitHub Pages for search and filtering.
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

<a id="threat-modeling-audit-orchestration"></a>
## 🎯 Threat Modeling & Audit Orchestration

Structured workflows that coordinate threat modeling, triage, and multi-stage security review.

### Professional & Official

- **[GitHub Security Lab taskflow-agent](https://github.com/GitHubSecurityLab/seclab-taskflow-agent)** `OAI` `MCP` - 3-stage audit pipeline: threat modeling, vulnerability suggestion, and independent verification.
- **[GitHub Security Lab taskflows](https://github.com/GitHubSecurityLab/seclab-taskflows)** `OAI` - Declarative YAML taskflow definitions for GitHub Security Lab's audit agent workflow.
- **[OpenAI security-threat-model](https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model)** `CX` - STRIDE-based architecture-level threat modeling skill for Codex-style workflows.

---

<a id="static-analysis-code-review"></a>
## 🔍 Static Analysis & Code Review

Source-oriented review skills for vulnerability discovery, secure coding guidance, and PR security checks.

### Professional & Official

- **[Trail of Bits Skills](https://github.com/trailofbits/skills)** `CC` `CX` - 18+ security skills including static analysis, variant analysis, differential review, insecure defaults, constant-time analysis, audit context building, and more.
- **[Ghost Security Skills](https://github.com/ghostsecurity/skills)** `CC` - AI-native application security skills focused on practical AppSec workflows.
- **[Anthropic Security Review](https://github.com/anthropics/claude-code-security-review)** `CC` - Official GitHub Action for PR security review with false-positive filtering.

### Community Review Skills

- **[afiqiqmal/claude-security-audit](https://github.com/afiqiqmal/claude-security-audit)** `CC` - 5-phase audit flow with 475+ checks, OWASP 2025 coverage, compliance mappings, and framework-specific rules.
- **[claude-code-owasp](https://github.com/agamm/claude-code-owasp)** `CC` - OWASP Top 10:2025 + ASVS 5.0 + agentic AI security review guidance across 20+ languages.
- **[vibesec](https://github.com/BehiSecc/vibesec)** `CC` - Bug hunter-oriented secure coding assistant focused on IDOR, XSS, SQLi, SSRF, and similar flaws.
- **[clawsec](https://github.com/prompt-security/clawsec)** `CC` - Security drift detection, automatic auditing, and skill integrity verification.
- **[perseus](https://github.com/kaivyy/perseus)** `CC` `CX` - Multi-language security assessment for JS, Go, Python, Rust, Java, and PHP.
- **[NeoLab code-review](https://github.com/NeoLabHQ)** `CC` - 6 parallel specialist agents covering bug hunting, security auditing, code quality, contracts, tests, and history.
- **[wrsmith108/security-auditor](https://github.com/wrsmith108/claude-skill-security-auditor)** `CC` - npm dependency audit wrapper with exception management support.

---

<a id="security-operations-workflow-suites"></a>
## 🧰 Security Operations & Workflow Suites

Broad, multi-capability security setups spanning scanning, policy enforcement, and agent workflow composition.

### Comprehensive Security Suites

- **[SecOpsAgentKit](https://github.com/AgentSecOps/SecOpsAgentKit)** `CC` - 25+ SecOps skills for vulnerability discovery, container scanning, secrets detection, and policy enforcement.
- **[claude-forge](https://github.com/sangrokjung/claude-forge)** `CC` - Security-conscious Claude setup with 11 agents, 36 commands, 15 skills, and layered hooks.
- **[everything-claude-code](https://github.com/affaan-m/everything-claude-code)** `CC` - Performance-optimized Claude Code setup with security-focused skills, instincts, and memory.

### Audit Context Infrastructure

- **[graphify](https://github.com/safishamsi/graphify)** `CC` `CX` `OC` - Convert code and docs into queryable knowledge graphs for audit assistance.

---

<a id="offensive-security-pentest-ctf"></a>
## ⚔️ Offensive Security, Pentest & CTF

Offensive workflows for bug bounty, autonomous pentesting, hands-on recon, and practice environments.

### Offensive Agents & Bug Bounty

- **[awesome-claude-skills-security](https://github.com/Eyadkelleh/awesome-claude-skills-security)** `CC` - Security-oriented Claude skills collection with dedicated pentest, CTF, and bug bounty agents.
- **[bug-hunter](https://github.com/codexstar69/bug-hunter)** `CC` `CX` - Adversarial AI bug hunter targeting offensive security and bug bounty workflows.
- **[raptor](https://github.com/gadievron/raptor)** `CC` - General-purpose security agent spanning both offensive and defensive work.
- **[communitytools](https://github.com/transilienceai/communitytools)** `CC` - Pentest skills and slash commands tuned for bug bounty research.

### Dynamic Testing & Pentest

- **[Strix](https://github.com/usestrix/strix)** `🔧` - Autonomous AI pentester in a Docker sandbox with Caido proxy, headless browser, multi-agent orchestration, and PoC-focused reporting.
- **[hexstrike-ai](https://github.com/0x4m4/hexstrike-ai)** `MCP` - MCP server exposing 150+ Kali Linux pentest tools to AI agents.

### CTF & Practice

- **[ctf-skills](https://github.com/ljagiello/ctf-skills)** `CC` `CX` - CTF-oriented skills for web, pwn, crypto, reverse, forensics, OSINT, malware, and more.

---

<a id="fuzzing"></a>
## 🐛 Fuzzing

Coverage-guided, web-targeted, and workflow-oriented fuzzing skills for bug discovery.

### Core Projects

- **[Trail of Bits testing-handbook-skills](https://github.com/trailofbits/skills)** `CC` `CX` - Fuzzer, static analysis, and sanitizer integration guidance from Trail of Bits.
- **[ffuf-claude-skill](https://github.com/jthack/ffuf-claude-skill)** `CC` - FFUF-based web fuzzing integration for Claude.
- **[awesome-claude-skills-security](https://github.com/Eyadkelleh/awesome-claude-skills-security)** `CC` - Security skills collection that also includes fuzzing-oriented workflows.

---

<a id="reverse-engineering-binary-analysis"></a>
## 🔬 Reverse Engineering & Binary Analysis

Binary analysis, APK review, and artifact extraction skills useful during security research.

### Core Projects

- **[Trail of Bits dwarf-expert](https://github.com/trailofbits/skills)** `CC` `CX` - DWARF debug format expertise for binary analysis workflows.
- **[Trail of Bits firebase-apk-scanner](https://github.com/trailofbits/skills)** `CC` `CX` - Android APK scanning workflow for Firebase misconfiguration discovery.
- **[Trail of Bits burpsuite-project-parser](https://github.com/trailofbits/skills)** `CC` `CX` - Search and extract data from Burp Suite project files.

---

<a id="smart-contract-security"></a>
## 📜 Smart Contract Security

Smart contract and blockchain-focused auditing, compliance checking, and vulnerability scanning.

### Core Projects

- **[Trail of Bits building-secure-contracts](https://github.com/trailofbits/skills/tree/main/plugins/building-secure-contracts)** `CC` `CX` - 6-chain scanner plus audit prep and maturity assessment for smart contract projects.
- **[Trail of Bits entry-point-analyzer](https://github.com/trailofbits/skills)** `CC` `CX` - Identify state-changing entry points in smart contracts.
- **[Trail of Bits spec-to-code-compliance](https://github.com/trailofbits/skills)** `CC` `CX` - Specification-to-code compliance checking for blockchain audits.
- **[scv-scan](https://github.com/kadenzipfel/scv-scan)** `CC` - Solidity vulnerability scanner covering 36 vulnerability classes.

---

<a id="skill-agent-security"></a>
## 🔒 Skill & Agent Security

Tools focused on scanning skills, prompts, MCP servers, and agent extensions for malicious behavior or unsafe patterns.

### Core Projects

- **[Cisco skill-scanner](https://github.com/cisco-ai-defense/skill-scanner)** `🔧` - Multi-engine skill scanning using YAML/YARA rules, AST behavior analysis, semantic review, and VirusTotal.
- **[Snyk agent-scan](https://github.com/snyk/agent-scan)** `🔧` - Scan MCP servers and agent skills for prompt injection, tool poisoning, and data exfiltration risk.
- **[pors/skill-audit](https://github.com/pors/skill-audit)** `🔧` - CLI scanner for prompt injection, secret leakage, and dangerous patterns with SARIF output.
- **[huifer/skill-security-scan](https://github.com/huifer/skill-security-scan)** `🔧` - Bilingual Claude Skills scanner with static analysis, rule engine, and HTML reporting.

---

<a id="knowledge-bases-research"></a>
## 📚 Knowledge Bases & Research

Structured skill packs, research collections, and reference material that support security analysis workflows.

### Structured Skill Collections

- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** `CC` `OC` - 754 structured skills across 38 security domains aligned with MITRE ATT&CK and NIST CSF 2.0.
- **[Skills-4-SE Security Scanner Suite](https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/security-scanner-suite)** `CC` - 13 security skills spanning static vuln detection, root cause analysis, exploitability assessment, CVE reachability, taint instrumentation, and patch advice.
- **[Skills-4-SE Formal Verification Toolkit](https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/formal-verification-toolkit)** `CC` - 17 formal verification skills for model checking, contract verification, and invariant analysis.
- **[ArabelaTso/Skills-4-SE](https://github.com/ArabelaTso/Skills-4-SE)** - 180+ software engineering skills across the lifecycle, including security scanner and formal verification packs.

### Research Collections

- **[huhusmang/Awesome-LLMs-for-Vulnerability-Detection](https://github.com/huhusmang/Awesome-LLMs-for-Vulnerability-Detection)** - Paper collection focused on LLMs for vulnerability detection.

---

<a id="indexes-marketplaces-discovery"></a>
## 🗂️ Indexes, Marketplaces & Discovery

Broader indexes, marketplaces, and curated lists that help you discover installable skills and related ecosystems.

### Curated Indexes

- **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)** - 500+ agent skills with strong security coverage.
- **[antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills)** - 1,370+ installable agentic skills with a rich security category.
- **[travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)** - Curated Claude Skills index with security-relevant entries.
- **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** - Claude Code resource collection spanning skills, hooks, and slash commands.
- **[BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills)** - Security-focused Claude Skills curation.
- **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)** - Another broad Claude Skills curated list.
- **[ottosulin/awesome-ai-security](https://github.com/ottosulin/awesome-ai-security)** - AI security resource collection with an agent-skills category.
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** - 220+ Claude Code skills and agent plugins.

### Marketplaces

- **[aiskillstore/marketplace](https://github.com/aiskillstore/marketplace)** - Security-audited Claude and Codex skills marketplace.

## Contributing

Open a PR with:

- Project name
- Repository link
- One-sentence description
- Applicable platform tags: `CC`, `OC`, `CX`, `MCP`, `OAI`, `TOOL`

Prefer entries that are clearly maintained, practically usable, and specific about what the skill or tool actually does.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full PR workflow.
