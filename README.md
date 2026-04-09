<p align="center">
  <h1 align="center">🛡️ Awesome Vulnerability Detection Skills</h1>
  <p align="center">
    A curated list of AI agent skills for vulnerability detection & security research.
    <br/>
    <i>For Claude Code · OpenClaw · Codex · Cursor · Gemini CLI and beyond</i>
  </p>
</p>


<p align="center">
  <a href="#-source-code-audit">Source Code Audit</a> •
  <a href="#-dynamic-testing--pentest">Dynamic Testing</a> •
  <a href="#-fuzzing">Fuzzing</a> •
  <a href="#-reverse-engineering">Reverse Engineering</a> •
  <a href="#-smart-contract-audit">Smart Contracts</a> •
  <a href="#-skill-security">Skill Security</a>
</p>


---

### 🏷️ Platform Tags

| Tag   | Meaning                                                      |
| ----- | ------------------------------------------------------------ |
| `CC`  | Claude Code — SKILL.md format, runs inside Claude Code       |
| `OC`  | OpenClaw — compatible with OpenClaw agent runtime            |
| `CX`  | Codex — OpenAI Codex CLI compatible                          |
| `MCP` | MCP Server — works with any MCP-compatible agent             |
| `OAI` | OpenAI Agents SDK / OpenAI platform                          |
| `🔧`   | Standalone tool / framework — not a skill, runs independently |

> Most `CC` skills with standard SKILL.md format can also be loaded into OpenClaw via workspace skills directory.

---

## 🔍 Source Code Audit

### 🏢 Professional / Official

- **[Trail of Bits Skills](https://github.com/trailofbits/skills)** `CC` `CX` — ⭐ 3.7k+ | 18+ security skills: `static-analysis` (Semgrep/CodeQL), `variant-analysis`, `differential-review`, `insecure-defaults`, `sharp-edges`, `constant-time-analysis`, `audit-context-building`, `semgrep-rule-creator` and more
- **[Ghost Security Skills](https://github.com/ghostsecurity/skills)** `CC` — AI-native application security (AppSec) skills
- **[Anthropic Security Review](https://github.com/anthropics/claude-code-security-review)** `CC` — Official GitHub Action for PR security review with auto false-positive filtering
- **[GitHub Security Lab taskflow-agent](https://github.com/GitHubSecurityLab/seclab-taskflow-agent)** `OAI` `MCP` — 3-stage audit pipeline: threat modeling → vuln suggestion → independent verification. 80+ real vulns found
- **[GitHub Security Lab taskflows](https://github.com/GitHubSecurityLab/seclab-taskflows)** `OAI` — Declarative YAML taskflow definitions for the above agent
- **[OpenAI security-threat-model](https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model)** `CX` — STRIDE-based architecture-level threat modeling skill

### 🧑‍💻 Community — Source Code Review

- **[afiqiqmal/claude-security-audit](https://github.com/afiqiqmal/claude-security-audit)** `CC` — 5-phase audit with 475+ checks, OWASP 2025, 9 compliance frameworks, 12 framework-specific rules
- **[claude-code-owasp](https://github.com/agamm/claude-code-owasp)** `CC` — OWASP Top 10:2025 + ASVS 5.0 + Agentic AI security guidelines, 20+ languages
- **[vibesec](https://github.com/BehiSecc/vibesec)** `CC` — Bug hunter perspective: helps write code that prevents IDOR/XSS/SQLi/SSRF
- **[clawsec](https://github.com/prompt-security/clawsec)** `CC` — Security drift detection, auto audit, skill integrity verification
- **[perseus](https://github.com/kaivyy/perseus)** `CC` `CX` — Multi-language security assessment (JS/Go/Python/Rust/Java/PHP)
- **[NeoLab code-review](https://github.com/NeoLabHQ)** `CC` — 6 parallel specialist agents (Bug Hunter / Security Auditor / Code Quality / Contracts / Test / History)
- **[wrsmith108/security-auditor](https://github.com/wrsmith108/claude-skill-security-auditor)** `CC` — npm dependency audit wrapper with exception management

### 🧑‍💻 Community — Offensive / Bug Bounty

- **[awesome-claude-skills-security](https://github.com/Eyadkelleh/awesome-claude-skills-security)** `CC` — 7 security skill types + 3 expert agents (pentest-advisor, ctf-assistant, bug-bounty-hunter)
- **[bug-hunter](https://github.com/codexstar69/bug-hunter)** `CC` `CX` — Adversarial AI bug hunter, multi-platform
- **[raptor](https://github.com/gadievron/raptor)** `CC` — Offensive + defensive general-purpose security agent
- **[communitytools](https://github.com/transilienceai/communitytools)** `CC` — Pentest skills & slash commands for bug bounty research

### 🧑‍💻 Community — SecOps / Comprehensive

- **[SecOpsAgentKit](https://github.com/AgentSecOps/SecOpsAgentKit)** `CC` — 25+ SecOps skills: vuln discovery, container scanning, secrets detection, policy enforcement
- **[claude-forge](https://github.com/sangrokjung/claude-forge)** `CC` — 11 agents + 36 commands + 15 skills + 6-layer security hooks
- **[everything-claude-code](https://github.com/affaan-m/everything-claude-code)** `CC` — Performance-optimized setup with security-focused skills/instincts/memory

### 📚 Knowledge Bases

- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** `CC` `OC` — 754 structured skills across 38 security domains, aligned with MITRE ATT&CK / NIST CSF 2.0

---

## ⚡ Dynamic Testing & Pentest

- **[Strix](https://github.com/usestrix/strix)** `🔧` — Autonomous AI pentester in Docker sandbox: Caido proxy + headless browser + multi-agent. PoC-mandatory reporting with CVSS
- **[hexstrike-ai](https://github.com/0x4m4/hexstrike-ai)** `MCP` — MCP Server exposing 150+ Kali Linux pentest tools to AI agents
- **[ffuf-claude-skill](https://github.com/jthack/ffuf-claude-skill)** `CC` — Claude + FFUF web fuzzer integration: auto-run fuzzing & analyze results

---

## 🐛 Fuzzing

- **[Trail of Bits testing-handbook-skills](https://github.com/trailofbits/skills)** `CC` `CX` — Fuzzer + static analysis + sanitizer integration guide
- **[awesome-claude-skills-security](https://github.com/Eyadkelleh/awesome-claude-skills-security)** `CC` — Includes fuzzing-specific skills
- **[ffuf-claude-skill](https://github.com/jthack/ffuf-claude-skill)** `CC` — FFUF web fuzzer + Claude integration

---

## 🔬 Reverse Engineering

- **[Trail of Bits dwarf-expert](https://github.com/trailofbits/skills)** `CC` `CX` — DWARF debug format expertise for binary analysis
- **[Trail of Bits firebase-apk-scanner](https://github.com/trailofbits/skills)** `CC` `CX` — Scan Android APKs for Firebase misconfigurations
- **[Trail of Bits burpsuite-project-parser](https://github.com/trailofbits/skills)** `CC` `CX` — Search and extract data from Burp Suite project files

---

## 📜 Smart Contract Audit

- **[Trail of Bits building-secure-contracts](https://github.com/trailofbits/skills/tree/main/plugins/building-secure-contracts)** `CC` `CX` — 6-chain scanner (Solidity/Algorand/Cairo/Cosmos/Solana/Substrate/TON) + audit prep + maturity assessment
- **[Trail of Bits entry-point-analyzer](https://github.com/trailofbits/skills)** `CC` `CX` — Identify state-changing entry points in smart contracts
- **[Trail of Bits spec-to-code-compliance](https://github.com/trailofbits/skills)** `CC` `CX` — Specification-to-code compliance checker for blockchain audit
- **[scv-scan](https://github.com/kadenzipfel/scv-scan)** `CC` — Solidity vulnerability scanner covering 36 vuln types

---

## 🔒 Skill Security

> 🚨 AI Skills can be malicious too — scan before you install.

- **[Cisco skill-scanner](https://github.com/cisco-ai-defense/skill-scanner)** `🔧` — Multi-engine: static YAML/YARA + behavioral AST + LLM semantic + VirusTotal
- **[Snyk agent-scan](https://github.com/snyk/agent-scan)** `🔧` — Scan MCP Servers & Agent Skills for prompt injection, tool poisoning, data exfil (15+ risks)
- **[pors/skill-audit](https://github.com/pors/skill-audit)** `🔧` — CLI for prompt injection / secret leak / dangerous pattern detection, SARIF output
- **[huifer/skill-security-scan](https://github.com/huifer/skill-security-scan)** `🔧` — Bilingual (EN/CN) Claude Skills scanner: static analysis + rule engine + HTML report

---

## 🗂️ Aggregation & Index

- **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)** — 500+ agent skills with full Trail of Bits security index
- **[antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills)** — 1,370+ installable agentic skills, rich security category
- **[travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)** — Curated Claude Skills list with security entries
- **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** — Claude Code resources: skills / hooks / slash commands
- **[BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills)** — Security-focused Claude Skills curation
- **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)** — Another Claude Skills curated list
- **[ottosulin/awesome-ai-security](https://github.com/ottosulin/awesome-ai-security)** — AI security resources with Agent Skills category
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** — 220+ Claude Code Skills and Agent plugins
- **[aiskillstore/marketplace](https://github.com/aiskillstore/marketplace)** — Security-audited Claude/Codex Skills marketplace
- **[graphify](https://github.com/safishamsi/graphify)** `CC` `CX` `OC` — Convert code/docs into queryable knowledge graphs for audit assistance
- **[huhusmang/Awesome-LLMs-for-Vulnerability-Detection](https://github.com/huhusmang/Awesome-LLMs-for-Vulnerability-Detection)** — LLM vulnerability detection paper collection

---

## 🤝 Contributing

Contributions welcome! Please submit a PR with:

- Tool name + brief description + link
- Platform tag(s): `CC` / `OC` / `CX` / `MCP` / `OAI` / `🔧`

## 📄 License

[MIT](LICENSE)
