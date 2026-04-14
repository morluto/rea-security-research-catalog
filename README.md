<!-- Generated from catalog.js by scripts/generate.js. Do not edit README.md directly. -->

<p align="center">
  <img src="https://img.shields.io/badge/Curated%20AI%20security%20catalog-0f172a?style=for-the-badge&labelColor=111827&color=0f172a" alt="Curated AI security catalog">
</p>

<h1 align="center">🛡️ Awesome Vulnerability Detection Skills</h1>

<p align="center">
  <a href="https://github.com/sindresorhus/awesome"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome"></a>
  <img src="https://img.shields.io/badge/entries-51-2f81f7?style=flat-square" alt="51 entries">
  <img src="https://img.shields.io/badge/dimension%20tags-25-238636?style=flat-square" alt="25 dimension tags">
  <a href="https://iie-varas.github.io/awesome-vulnerability-detection-skills/"><img src="https://img.shields.io/badge/GitHub%20Pages-live%20catalog-0ea5e9?style=flat-square" alt="GitHub Pages"></a>
  <a href="https://github.com/IIE-VARAS/awesome-vulnerability-detection-skills/actions/workflows/catalog-sync.yml"><img src="https://github.com/IIE-VARAS/awesome-vulnerability-detection-skills/actions/workflows/catalog-sync.yml/badge.svg" alt="Catalog Sync"></a>
</p>

<p align="center">A curated list of AI agent skills, workflows, MCP servers, and related tooling for vulnerability detection and security research.<br>For Claude Code, OpenClaw, Codex, Cursor, Gemini CLI, and adjacent agent runtimes.</p>

<p align="center"><a href="https://iie-varas.github.io/awesome-vulnerability-detection-skills/"><strong>Open Live Catalog</strong></a></p>

## Overview

- The canonical list lives in this README.
- The live catalog is published on GitHub Pages for search and filtering.
- A searchable static catalog is included in [`docs/index.html`](docs/index.html).
- Entries include both agent-native skills and standalone tools when they are useful in the same workflow.
- Every entry is tagged along three orthogonal dimensions — target, technique, and form — plus a platform tag.

## Catalog at a Glance

| # | Name | Platform | Target | Technique | Form |
| --- | --- | --- | --- | --- | --- |
| 1 | [GitHub Security Lab taskflow-agent](#entry-github-security-lab-taskflow-agent) | `OAI` `MCP` | Source Code, General | Threat Modeling, Static Analysis | Workflow |
| 2 | [GitHub Security Lab taskflows](#entry-github-security-lab-taskflows) | `OAI` | Source Code, General | Threat Modeling | Workflow |
| 3 | [OpenAI security-threat-model](#entry-openai-security-threat-model) | `CX` | General | Threat Modeling | Prompt Skill |
| 4 | [Trail of Bits Skills](#entry-trail-of-bits-skills) | `CC` `CX` | Source Code, Binary | Static Analysis, Compliance | Prompt Skill |
| 5 | [Ghost Security Skills](#entry-ghost-security-skills) | `CC` | Source Code, Web | Static Analysis | Prompt Skill |
| 6 | [Anthropic Security Review](#entry-anthropic-security-review) | `CC` | Source Code | Static Analysis | Workflow |
| 7 | [afiqiqmal/claude-security-audit](#entry-afiqiqmal-claude-security-audit) | `CC` | Source Code, Web | Static Analysis, Compliance | Workflow |
| 8 | [claude-code-owasp](#entry-claude-code-owasp) | `CC` | Source Code, Web | Static Analysis, Compliance | Knowledge Base |
| 9 | [vibesec](#entry-vibesec) | `CC` | Web | Static Analysis | Prompt Skill |
| 10 | [clawsec](#entry-clawsec) | `CC` | Agent | Static Analysis | Prompt Skill |
| 11 | [perseus](#entry-perseus) | `CC` `CX` | Source Code | Static Analysis | Prompt Skill |
| 12 | [NeoLab code-review](#entry-neolab-code-review) | `CC` | Source Code | Static Analysis | Agent Framework |
| 13 | [wrsmith108/security-auditor](#entry-wrsmith108-security-auditor) | `CC` | Supply Chain | Static Analysis | Tool Wrapper |
| 14 | [SecOpsAgentKit](#entry-secopsagentkit) | `CC` | Source Code, Container, Supply Chain | Static Analysis | Suite |
| 15 | [claude-forge](#entry-claude-forge) | `CC` | General | Static Analysis | Suite |
| 16 | [everything-claude-code](#entry-everything-claude-code) | `CC` | General | Static Analysis | Suite |
| 17 | [graphify](#entry-graphify) | `CC` `CX` `OC` | Source Code, General | Static Analysis | Tool Wrapper |
| 18 | [awesome-claude-skills-security](#entry-awesome-claude-skills-security) | `CC` | Web, General | Dynamic Testing, Fuzzing, Exploit Dev | Prompt Skill |
| 19 | [bug-hunter](#entry-bug-hunter) | `CC` `CX` | Web, General | Dynamic Testing, Exploit Dev | Prompt Skill |
| 20 | [raptor](#entry-raptor) | `CC` | General | Static Analysis, Dynamic Testing | Prompt Skill |
| 21 | [communitytools](#entry-communitytools) | `CC` | Web, General | Dynamic Testing, Recon | Prompt Skill |
| 22 | [Strix](#entry-strix) | `🔧` | Web | Dynamic Testing | Agent Framework |
| 23 | [hexstrike-ai](#entry-hexstrike-ai) | `MCP` | General | Dynamic Testing, Recon | MCP Server |
| 24 | [ctf-skills](#entry-ctf-skills) | `CC` `CX` | Web, Binary | Reverse Engineering, Exploit Dev, Recon | Prompt Skill |
| 25 | [Trail of Bits testing-handbook-skills](#entry-trail-of-bits-testing-handbook-skills) | `CC` `CX` | Source Code | Fuzzing, Static Analysis | Prompt Skill |
| 26 | [ffuf-claude-skill](#entry-ffuf-claude-skill) | `CC` | Web | Fuzzing | Tool Wrapper |
| 27 | [Trail of Bits dwarf-expert](#entry-trail-of-bits-dwarf-expert) | `CC` `CX` | Binary | Reverse Engineering | Knowledge Base |
| 28 | [Trail of Bits firebase-apk-scanner](#entry-trail-of-bits-firebase-apk-scanner) | `CC` `CX` | Mobile | Static Analysis | Workflow |
| 29 | [Trail of Bits burpsuite-project-parser](#entry-trail-of-bits-burpsuite-project-parser) | `CC` `CX` | Web | Reverse Engineering | Tool Wrapper |
| 30 | [Trail of Bits building-secure-contracts](#entry-trail-of-bits-building-secure-contracts) | `CC` `CX` | Smart Contract | Static Analysis, Compliance | Prompt Skill |
| 31 | [Trail of Bits entry-point-analyzer](#entry-trail-of-bits-entry-point-analyzer) | `CC` `CX` | Smart Contract | Static Analysis | Prompt Skill |
| 32 | [Trail of Bits spec-to-code-compliance](#entry-trail-of-bits-spec-to-code-compliance) | `CC` `CX` | Smart Contract | Compliance | Prompt Skill |
| 33 | [scv-scan](#entry-scv-scan) | `CC` | Smart Contract | Static Analysis | Prompt Skill |
| 34 | [Cisco skill-scanner](#entry-cisco-skill-scanner) | `🔧` | Agent | Static Analysis | Tool Wrapper |
| 35 | [Snyk agent-scan](#entry-snyk-agent-scan) | `🔧` | Agent | Static Analysis | Tool Wrapper |
| 36 | [pors/skill-audit](#entry-pors-skill-audit) | `🔧` | Agent | Static Analysis | Tool Wrapper |
| 37 | [huifer/skill-security-scan](#entry-huifer-skill-security-scan) | `🔧` | Agent | Static Analysis | Tool Wrapper |
| 38 | [mukul975/Anthropic-Cybersecurity-Skills](#entry-mukul975-anthropic-cybersecurity-skills) | `CC` `OC` | General | Static Analysis | Knowledge Base |
| 39 | [Skills-4-SE Security Scanner Suite](#entry-skills-4-se-security-scanner-suite) | `CC` | Source Code | Static Analysis | Knowledge Base |
| 40 | [Skills-4-SE Formal Verification Toolkit](#entry-skills-4-se-formal-verification-toolkit) | `CC` | Source Code | Static Analysis | Knowledge Base |
| 41 | [ArabelaTso/Skills-4-SE](#entry-arabelatso-skills-4-se) |  | Source Code, General | Static Analysis | Knowledge Base |
| 42 | [huhusmang/Awesome-LLMs-for-Vulnerability-Detection](#entry-huhusmang-awesome-llms-for-vulnerability-detection) |  | General | — | Knowledge Base |
| 43 | [VoltAgent/awesome-agent-skills](#entry-voltagent-awesome-agent-skills) |  | General | — | Catalog |
| 44 | [antigravity-awesome-skills](#entry-antigravity-awesome-skills) |  | General | — | Catalog |
| 45 | [travisvn/awesome-claude-skills](#entry-travisvn-awesome-claude-skills) |  | General | — | Catalog |
| 46 | [hesreallyhim/awesome-claude-code](#entry-hesreallyhim-awesome-claude-code) |  | General | — | Catalog |
| 47 | [BehiSecc/awesome-claude-skills](#entry-behisecc-awesome-claude-skills) |  | General | — | Catalog |
| 48 | [ComposioHQ/awesome-claude-skills](#entry-composiohq-awesome-claude-skills) |  | General | — | Catalog |
| 49 | [ottosulin/awesome-ai-security](#entry-ottosulin-awesome-ai-security) |  | General | — | Catalog |
| 50 | [alirezarezvani/claude-skills](#entry-alirezarezvani-claude-skills) |  | General | — | Catalog |
| 51 | [aiskillstore/marketplace](#entry-aiskillstore-marketplace) |  | General | — | Catalog |

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

## Dimension Tags

Every entry is tagged along three orthogonal dimensions:

### 🎯 Target

What does the skill analyze or operate on?

| Tag | Meaning |
| --- | --- |
| `source` | Language-agnostic source code analysis |
| `web` | Web applications, APIs, HTTP |
| `binary` | Binaries, ELF, PE, firmware |
| `mobile` | Android APK, iOS applications |
| `smart-contract` | Solidity, EVM, blockchain |
| `container` | Docker, Kubernetes, cloud config |
| `supply-chain` | Dependencies, packages, SCA |
| `agent` | AI skills, MCP servers, prompts |
| `general` | Cross-domain or not target-specific |

### ⚙️ Technique

What security analysis method does it employ?

| Tag | Meaning |
| --- | --- |
| `static-analysis` | All forms of analysis without execution (SAST, code review, formal verification, rule scanning) |
| `dynamic-testing` | Runtime / interactive testing (DAST, pentest) |
| `fuzzing` | Automated input generation for bug discovery |
| `reverse-engineering` | Binary analysis, decompilation, artifact extraction |
| `threat-modeling` | Architecture-level threat identification (STRIDE, etc.) |
| `compliance` | Standard / specification conformance checking |
| `recon` | Reconnaissance, OSINT, information gathering |
| `exploit-dev` | Exploit development, PoC creation |

### 📦 Form

How is the skill packaged or delivered?

| Tag | Meaning |
| --- | --- |
| `prompt-skill` | Pure knowledge / instruction (SKILL.md) |
| `tool-wrapper` | Wraps external CLI tools |
| `workflow` | Multi-step orchestrated pipeline |
| `agent-framework` | Autonomous agent system |
| `knowledge-base` | Reference material, checklists, paper collection |
| `catalog` | Curated index or list |
| `mcp-server` | MCP tool server |
| `suite` | Comprehensive multi-capability bundle |

## Repository Layout

- [`catalog.js`](catalog.js): single source of truth for the catalog content and site copy.
- [`CONTRIBUTING.md`](CONTRIBUTING.md): contribution workflow for editing the catalog and opening PRs.
- [`scripts/generate.js`](scripts/generate.js): generates `README.md` and `docs/data.js` from `catalog.js`.
- [`docs/index.html`](docs/index.html): searchable static catalog UI.
- [`docs/data.js`](docs/data.js): generated browser data bundle consumed by the static site.
- [`docs/app.js`](docs/app.js): client-side rendering, search, filtering, and data-driven page copy.

Run `npm run generate` after editing the source catalog. Use `npm run check` to verify generated files are up to date.

## Entries

<a id="entry-github-security-lab-taskflow-agent"></a>
### GitHub Security Lab taskflow-agent

`OAI` `MCP` `🎯Source Code·General` `⚙️Threat Modeling·Static Analysis` `📦Workflow` https://github.com/GitHubSecurityLab/seclab-taskflow-agent

3-stage audit pipeline: threat modeling, vulnerability suggestion, and independent verification.

---

<a id="entry-github-security-lab-taskflows"></a>
### GitHub Security Lab taskflows

`OAI` `🎯Source Code·General` `⚙️Threat Modeling` `📦Workflow` https://github.com/GitHubSecurityLab/seclab-taskflows

Declarative YAML taskflow definitions for GitHub Security Lab's audit agent workflow.

---

<a id="entry-openai-security-threat-model"></a>
### OpenAI security-threat-model

`CX` `🎯General` `⚙️Threat Modeling` `📦Prompt Skill` https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model

STRIDE-based architecture-level threat modeling skill for Codex-style workflows.

---

<a id="entry-trail-of-bits-skills"></a>
### Trail of Bits Skills

`CC` `CX` `🎯Source Code·Binary` `⚙️Static Analysis·Compliance` `📦Prompt Skill` https://github.com/trailofbits/skills

18+ security skills including static analysis, variant analysis, differential review, insecure defaults, constant-time analysis, audit context building, and more.

---

<a id="entry-ghost-security-skills"></a>
### Ghost Security Skills

`CC` `🎯Source Code·Web` `⚙️Static Analysis` `📦Prompt Skill` https://github.com/ghostsecurity/skills

AI-native application security skills focused on practical AppSec workflows.

---

<a id="entry-anthropic-security-review"></a>
### Anthropic Security Review

`CC` `🎯Source Code` `⚙️Static Analysis` `📦Workflow` https://github.com/anthropics/claude-code-security-review

Official GitHub Action for PR security review with false-positive filtering.

---

<a id="entry-afiqiqmal-claude-security-audit"></a>
### afiqiqmal/claude-security-audit

`CC` `🎯Source Code·Web` `⚙️Static Analysis·Compliance` `📦Workflow` https://github.com/afiqiqmal/claude-security-audit

5-phase audit flow with 475+ checks, OWASP 2025 coverage, compliance mappings, and framework-specific rules.

---

<a id="entry-claude-code-owasp"></a>
### claude-code-owasp

`CC` `🎯Source Code·Web` `⚙️Static Analysis·Compliance` `📦Knowledge Base` https://github.com/agamm/claude-code-owasp

OWASP Top 10:2025 + ASVS 5.0 + agentic AI security review guidance across 20+ languages.

---

<a id="entry-vibesec"></a>
### vibesec

`CC` `🎯Web` `⚙️Static Analysis` `📦Prompt Skill` https://github.com/BehiSecc/vibesec

Bug hunter-oriented secure coding assistant focused on IDOR, XSS, SQLi, SSRF, and similar flaws.

---

<a id="entry-clawsec"></a>
### clawsec

`CC` `🎯Agent` `⚙️Static Analysis` `📦Prompt Skill` https://github.com/prompt-security/clawsec

Security drift detection, automatic auditing, and skill integrity verification.

---

<a id="entry-perseus"></a>
### perseus

`CC` `CX` `🎯Source Code` `⚙️Static Analysis` `📦Prompt Skill` https://github.com/kaivyy/perseus

Multi-language security assessment for JS, Go, Python, Rust, Java, and PHP.

---

<a id="entry-neolab-code-review"></a>
### NeoLab code-review

`CC` `🎯Source Code` `⚙️Static Analysis` `📦Agent Framework` https://github.com/NeoLabHQ

6 parallel specialist agents covering bug hunting, security auditing, code quality, contracts, tests, and history.

---

<a id="entry-wrsmith108-security-auditor"></a>
### wrsmith108/security-auditor

`CC` `🎯Supply Chain` `⚙️Static Analysis` `📦Tool Wrapper` https://github.com/wrsmith108/claude-skill-security-auditor

npm dependency audit wrapper with exception management support.

---

<a id="entry-secopsagentkit"></a>
### SecOpsAgentKit

`CC` `🎯Source Code·Container·Supply Chain` `⚙️Static Analysis` `📦Suite` https://github.com/AgentSecOps/SecOpsAgentKit

25+ SecOps skills for vulnerability discovery, container scanning, secrets detection, and policy enforcement.

---

<a id="entry-claude-forge"></a>
### claude-forge

`CC` `🎯General` `⚙️Static Analysis` `📦Suite` https://github.com/sangrokjung/claude-forge

Security-conscious Claude setup with 11 agents, 36 commands, 15 skills, and layered hooks.

---

<a id="entry-everything-claude-code"></a>
### everything-claude-code

`CC` `🎯General` `⚙️Static Analysis` `📦Suite` https://github.com/affaan-m/everything-claude-code

Performance-optimized Claude Code setup with security-focused skills, instincts, and memory.

---

<a id="entry-graphify"></a>
### graphify

`CC` `CX` `OC` `🎯Source Code·General` `⚙️Static Analysis` `📦Tool Wrapper` https://github.com/safishamsi/graphify

Convert code and docs into queryable knowledge graphs for audit assistance.

---

<a id="entry-awesome-claude-skills-security"></a>
### awesome-claude-skills-security

`CC` `🎯Web·General` `⚙️Dynamic Testing·Fuzzing·Exploit Dev` `📦Prompt Skill` https://github.com/Eyadkelleh/awesome-claude-skills-security

Security-oriented Claude skills collection with dedicated pentest, CTF, and bug bounty agents.

---

<a id="entry-bug-hunter"></a>
### bug-hunter

`CC` `CX` `🎯Web·General` `⚙️Dynamic Testing·Exploit Dev` `📦Prompt Skill` https://github.com/codexstar69/bug-hunter

Adversarial AI bug hunter targeting offensive security and bug bounty workflows.

---

<a id="entry-raptor"></a>
### raptor

`CC` `🎯General` `⚙️Static Analysis·Dynamic Testing` `📦Prompt Skill` https://github.com/gadievron/raptor

General-purpose security agent spanning both offensive and defensive work.

---

<a id="entry-communitytools"></a>
### communitytools

`CC` `🎯Web·General` `⚙️Dynamic Testing·Recon` `📦Prompt Skill` https://github.com/transilienceai/communitytools

Pentest skills and slash commands tuned for bug bounty research.

---

<a id="entry-strix"></a>
### Strix

`🔧` `🎯Web` `⚙️Dynamic Testing` `📦Agent Framework` https://github.com/usestrix/strix

Autonomous AI pentester in a Docker sandbox with Caido proxy, headless browser, multi-agent orchestration, and PoC-focused reporting.

---

<a id="entry-hexstrike-ai"></a>
### hexstrike-ai

`MCP` `🎯General` `⚙️Dynamic Testing·Recon` `📦MCP Server` https://github.com/0x4m4/hexstrike-ai

MCP server exposing 150+ Kali Linux pentest tools to AI agents.

---

<a id="entry-ctf-skills"></a>
### ctf-skills

`CC` `CX` `🎯Web·Binary` `⚙️Reverse Engineering·Exploit Dev·Recon` `📦Prompt Skill` https://github.com/ljagiello/ctf-skills

CTF-oriented skills for web, pwn, crypto, reverse, forensics, OSINT, malware, and more.

---

<a id="entry-trail-of-bits-testing-handbook-skills"></a>
### Trail of Bits testing-handbook-skills

`CC` `CX` `🎯Source Code` `⚙️Fuzzing·Static Analysis` `📦Prompt Skill` https://github.com/trailofbits/skills

Fuzzer, static analysis, and sanitizer integration guidance from Trail of Bits.

---

<a id="entry-ffuf-claude-skill"></a>
### ffuf-claude-skill

`CC` `🎯Web` `⚙️Fuzzing` `📦Tool Wrapper` https://github.com/jthack/ffuf-claude-skill

FFUF-based web fuzzing integration for Claude.

---

<a id="entry-trail-of-bits-dwarf-expert"></a>
### Trail of Bits dwarf-expert

`CC` `CX` `🎯Binary` `⚙️Reverse Engineering` `📦Knowledge Base` https://github.com/trailofbits/skills

DWARF debug format expertise for binary analysis workflows.

---

<a id="entry-trail-of-bits-firebase-apk-scanner"></a>
### Trail of Bits firebase-apk-scanner

`CC` `CX` `🎯Mobile` `⚙️Static Analysis` `📦Workflow` https://github.com/trailofbits/skills

Android APK scanning workflow for Firebase misconfiguration discovery.

---

<a id="entry-trail-of-bits-burpsuite-project-parser"></a>
### Trail of Bits burpsuite-project-parser

`CC` `CX` `🎯Web` `⚙️Reverse Engineering` `📦Tool Wrapper` https://github.com/trailofbits/skills

Search and extract data from Burp Suite project files.

---

<a id="entry-trail-of-bits-building-secure-contracts"></a>
### Trail of Bits building-secure-contracts

`CC` `CX` `🎯Smart Contract` `⚙️Static Analysis·Compliance` `📦Prompt Skill` https://github.com/trailofbits/skills/tree/main/plugins/building-secure-contracts

6-chain scanner plus audit prep and maturity assessment for smart contract projects.

---

<a id="entry-trail-of-bits-entry-point-analyzer"></a>
### Trail of Bits entry-point-analyzer

`CC` `CX` `🎯Smart Contract` `⚙️Static Analysis` `📦Prompt Skill` https://github.com/trailofbits/skills

Identify state-changing entry points in smart contracts.

---

<a id="entry-trail-of-bits-spec-to-code-compliance"></a>
### Trail of Bits spec-to-code-compliance

`CC` `CX` `🎯Smart Contract` `⚙️Compliance` `📦Prompt Skill` https://github.com/trailofbits/skills

Specification-to-code compliance checking for blockchain audits.

---

<a id="entry-scv-scan"></a>
### scv-scan

`CC` `🎯Smart Contract` `⚙️Static Analysis` `📦Prompt Skill` https://github.com/kadenzipfel/scv-scan

Solidity vulnerability scanner covering 36 vulnerability classes.

---

<a id="entry-cisco-skill-scanner"></a>
### Cisco skill-scanner

`🔧` `🎯Agent` `⚙️Static Analysis` `📦Tool Wrapper` https://github.com/cisco-ai-defense/skill-scanner

Multi-engine skill scanning using YAML/YARA rules, AST behavior analysis, semantic review, and VirusTotal.

---

<a id="entry-snyk-agent-scan"></a>
### Snyk agent-scan

`🔧` `🎯Agent` `⚙️Static Analysis` `📦Tool Wrapper` https://github.com/snyk/agent-scan

Scan MCP servers and agent skills for prompt injection, tool poisoning, and data exfiltration risk.

---

<a id="entry-pors-skill-audit"></a>
### pors/skill-audit

`🔧` `🎯Agent` `⚙️Static Analysis` `📦Tool Wrapper` https://github.com/pors/skill-audit

CLI scanner for prompt injection, secret leakage, and dangerous patterns with SARIF output.

---

<a id="entry-huifer-skill-security-scan"></a>
### huifer/skill-security-scan

`🔧` `🎯Agent` `⚙️Static Analysis` `📦Tool Wrapper` https://github.com/huifer/skill-security-scan

Bilingual Claude Skills scanner with static analysis, rule engine, and HTML reporting.

---

<a id="entry-mukul975-anthropic-cybersecurity-skills"></a>
### mukul975/Anthropic-Cybersecurity-Skills

`CC` `OC` `🎯General` `⚙️Static Analysis` `📦Knowledge Base` https://github.com/mukul975/Anthropic-Cybersecurity-Skills

754 structured skills across 38 security domains aligned with MITRE ATT&CK and NIST CSF 2.0.

---

<a id="entry-skills-4-se-security-scanner-suite"></a>
### Skills-4-SE Security Scanner Suite

`CC` `🎯Source Code` `⚙️Static Analysis` `📦Knowledge Base` https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/security-scanner-suite

13 security skills spanning static vuln detection, root cause analysis, exploitability assessment, CVE reachability, taint instrumentation, and patch advice.

---

<a id="entry-skills-4-se-formal-verification-toolkit"></a>
### Skills-4-SE Formal Verification Toolkit

`CC` `🎯Source Code` `⚙️Static Analysis` `📦Knowledge Base` https://github.com/ArabelaTso/Skills-4-SE/tree/main/skill-packs/formal-verification-toolkit

17 formal verification skills for model checking, contract verification, and invariant analysis.

---

<a id="entry-arabelatso-skills-4-se"></a>
### ArabelaTso/Skills-4-SE

`🎯Source Code·General` `⚙️Static Analysis` `📦Knowledge Base` https://github.com/ArabelaTso/Skills-4-SE

180+ software engineering skills across the lifecycle, including security scanner and formal verification packs.

---

<a id="entry-huhusmang-awesome-llms-for-vulnerability-detection"></a>
### huhusmang/Awesome-LLMs-for-Vulnerability-Detection

`🎯General` `📦Knowledge Base` https://github.com/huhusmang/Awesome-LLMs-for-Vulnerability-Detection

Paper collection focused on LLMs for vulnerability detection.

---

<a id="entry-voltagent-awesome-agent-skills"></a>
### VoltAgent/awesome-agent-skills

`🎯General` `📦Catalog` https://github.com/VoltAgent/awesome-agent-skills

500+ agent skills with strong security coverage.

---

<a id="entry-antigravity-awesome-skills"></a>
### antigravity-awesome-skills

`🎯General` `📦Catalog` https://github.com/sickn33/antigravity-awesome-skills

1,370+ installable agentic skills with a rich security category.

---

<a id="entry-travisvn-awesome-claude-skills"></a>
### travisvn/awesome-claude-skills

`🎯General` `📦Catalog` https://github.com/travisvn/awesome-claude-skills

Curated Claude Skills index with security-relevant entries.

---

<a id="entry-hesreallyhim-awesome-claude-code"></a>
### hesreallyhim/awesome-claude-code

`🎯General` `📦Catalog` https://github.com/hesreallyhim/awesome-claude-code

Claude Code resource collection spanning skills, hooks, and slash commands.

---

<a id="entry-behisecc-awesome-claude-skills"></a>
### BehiSecc/awesome-claude-skills

`🎯General` `📦Catalog` https://github.com/BehiSecc/awesome-claude-skills

Security-focused Claude Skills curation.

---

<a id="entry-composiohq-awesome-claude-skills"></a>
### ComposioHQ/awesome-claude-skills

`🎯General` `📦Catalog` https://github.com/ComposioHQ/awesome-claude-skills

Another broad Claude Skills curated list.

---

<a id="entry-ottosulin-awesome-ai-security"></a>
### ottosulin/awesome-ai-security

`🎯General` `📦Catalog` https://github.com/ottosulin/awesome-ai-security

AI security resource collection with an agent-skills category.

---

<a id="entry-alirezarezvani-claude-skills"></a>
### alirezarezvani/claude-skills

`🎯General` `📦Catalog` https://github.com/alirezarezvani/claude-skills

220+ Claude Code skills and agent plugins.

---

<a id="entry-aiskillstore-marketplace"></a>
### aiskillstore/marketplace

`🎯General` `📦Catalog` https://github.com/aiskillstore/marketplace

Security-audited Claude and Codex skills marketplace.

## Contributing

Open a PR with:

- Project name
- Repository link
- One-sentence description
- Applicable platform tags: `CC`, `OC`, `CX`, `MCP`, `OAI`, `TOOL`
- Dimension tags: target, technique, and form (see tables below)

Prefer entries that are clearly maintained, practically usable, and specific about what the skill or tool actually does.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full PR workflow.
