# AdamSneed.com — Build Brief

## Overview
Personal website for Adam Sneed — security-focused engineering leader with agentic AI systems experience.

## Stack
- Astro (static-first, Markdown-native)
- Tailwind CSS
- Vanilla JS for interactive elements (Lab, Game)
- No backend

## Design Direction
- Clean, technical, modern
- Dark option appreciated
- Accent color: #e94560 (subtle red — security + energy)
- Typography: Inter or IBM Plex Sans
- Mobile-responsive

## Pages to Build

### 1. Home (/)
Hero: "Adam Sneed" + "I build systems that work when no one's watching."
Subline: "Security engineering. Agentic AI. Production-grade automation."
Three cards below hero:
- 🔐 Security Engineering — Enterprise PAM, credential vaulting, zero-trust architecture
- 🤖 Agentic Systems — Multi-agent orchestration, prompt engineering, guardrails
- ⚙️ Operations & Scale — 20 years building from datacenter metal to cloud-native automation
CTA: "I'm currently exploring opportunities in agentic systems engineering, security architecture, and AI-adjacent technical leadership."
[View My Work →] [Download Resume →]

### 2. About (/about)
Photo: headshot.jpg (illustrated style, bookshelf background)
Copy: Two decades enterprise IT. Started RedHat/AIX, progressed through datacenter ops, technical leadership, security engineering. Now leads PAM at Netwrix. Builds multi-agent AI systems with same rigor as privileged access: least privilege, human-in-the-loop, audit trails, fail-safe defaults.
Principles:
- Build for production, not demos
- Security is architecture, not a feature
- Agents need guardrails
- Write it down
JD from LSU Law — informs policy design, regulatory risk analysis, contract-level SOW precision.

### 3. Work (/work) — Three case studies

#### /work/pam — Enterprise PAM Engineering
Principal engineer for enterprise PAM deployments at Netwrix. Credential lifecycle automation (Python, PowerShell). Session governance — proxied recording, JIT access. Integration architecture — PAM + SIEM/SOAR + ITSM + CI/CD. Netwrix Hero Award (Q1 FY'25).

#### /work/agents — Agentic Systems Engineering
Production multi-agent system — 5+ specialized agents with defined roles, permissions, chains of command. Prompt-engineered workflows with structured output, verification loops, retry logic, approval gates. Security-first: credential isolation, injection detection, code scanning. Cross-agent communication, session orchestration, webhook state machines. Commercial intelligence product built on top. Tools used: Claude Code, OpenClaw, prompt engineering, agentic workflow design. Keep abstract — don't name ScoutPulse.

#### /work/ops — Operations & Scale
GCS Technologies progression: Datacenter Lead → Tech Support Manager → Director of Ops (9 years). Led 30-person team, managed P&L, exceeded revenue targets 7 consecutive quarters. Training programs: 73% → 86% utilization. Started on bare metal, evolved through every stack layer.

### 4. Resume (/resume)
HTML rendering of resume (see resume content below). PDF download button.

### 5. Lab (/lab)
"Agent Flow Visualizer" — interactive animated diagram showing multi-agent request flow. Click Start, watch message flow through agents. Nodes pulse when active, edges animate with flowing dots. Click any node to see its "policy." Use Canvas API or D3.js, data-driven from JSON.
JSON workflow structure:
```json
{
  "nodes": [
    {"id": "router", "label": "Router Agent", "type": "agent"},
    {"id": "specialist-a", "label": "Specialist A", "type": "agent"},
    {"id": "specialist-b", "label": "Specialist B", "type": "agent"},
    {"id": "human-review", "label": "Human Review", "type": "gate"},
    {"id": "execute", "label": "Execute", "type": "action"},
    {"id": "feedback", "label": "Feedback Loop", "type": "action"}
  ],
  "edges": [
    {"from": "router", "to": "specialist-a"},
    {"from": "router", "to": "specialist-b"},
    {"from": "specialist-a", "to": "human-review"},
    {"from": "specialist-b", "to": "human-review"},
    {"from": "human-review", "to": "execute", "label": "approved"},
    {"from": "human-review", "to": "feedback", "label": "rejected"}
  ]
}
```

### 6. Contact (/contact)
"Let's Talk" — exploring opportunities in agentic systems engineering, security architecture, AI-adjacent technical leadership.
Email: adam@adamsneed.com | Phone: 512.888.5580
LinkedIn: https://www.linkedin.com/in/adam-sneed-8113375/
GitHub: https://github.com/adamlsneed
No contact form. Direct is better.

### 7. Game (/game) — "Root Access"
Security decision card game. You're a newly hired security engineer. Inbox fills with access requests, incident alerts, vendor demands. Triage: Approve, Deny, Investigate, Escalate. 5 rounds of 4-6 cards. Score: Security Posture (0-100), Business Satisfaction (0-100), Your Sanity (0-100). Vanilla JS + CSS, card-based UI, JSON scenario definitions, single-page.

## Resume Content (ATS-First — render as HTML on /resume page)

ADAM LACROIX SNEED
Austin, TX | 512.888.5580 | adam@adamsneed.com | adamsneed.com | linkedin.com/in/adam-sneed-8113375/

SUMMARY
Security-focused Engineering Leader building at the intersection of privileged access management and agentic AI systems. 20+ years in IT with 4+ years leading enterprise PAM/EPM engineering. Designs and deploys secure, scalable automation — from credential vaulting and session governance to AI-driven workflow orchestration with human-in-the-loop guardrails. Proven ability to architect API-driven integrations across PAM, SIEM/SOAR, ITSM, and cloud IAM platforms while translating compliance requirements (NIST, CIS, SOX/PCI) into production-grade policy enforcement.

TECHNICAL SKILLS
PAM/EPM Engineering & Architecture | Credential Vaulting & Rotation | SIEM/SOAR & ITSM Integration | Zero Trust & Least Privilege | Cloud IAM (AWS/Azure/GCP) | AD/Entra ID | PowerShell, Python, SQL | REST API Integration & Orchestration | Terraform, Ansible & IaC | DevOps & CI/CD Pipelines | Agentic Workflow Design | Prompt Engineering & Evaluation | AI-Assisted Automation | Multi-Agent Systems | Policy Enforcement & Guardrails | Reliability Engineering | NIST, CIS, ISO 27001, SOX/PCI | Agile (Scrum/Kanban)

PROFESSIONAL EXPERIENCE

NETWRIX CORPORATION — Remote from Austin, TX
Senior Solutions Architect, Privileged Access Management | 09/2021 – Present
- Serve as principal engineer for enterprise PAM deployments across Fortune-class organizations, integrating credential vaulting, session proxying, JIT access, and service account governance with AD/Entra ID, AWS/Azure cloud IAM, SIEM/SOAR, and ITSM platforms.
- Architect API-driven automation frameworks (PowerShell, Python, REST APIs) for privileged account lifecycle management — onboarding, credential rotation, access workflows — reducing manual intervention and enforcing least-privilege policies at scale.
- Design and codify operational runbooks, decision-logic SOPs, and escalation policies that translate directly to agentic workflow patterns — conditional branching, retry logic, human-in-the-loop approval gates, and automated remediation.
- Lead root cause analysis and platform resilience engineering; create reusable knowledge bases and handoff documentation ensuring operational continuity across teams.
- Oversee vendor-led PAM implementations including SOW scoping, UAT execution, and production cutovers within Agile delivery frameworks (Scrum/Kanban).
- Awarded Netwrix Hero Award (Q1 FY'25) for excellence in enterprise PAM solution delivery.

AGENTIC & AI SYSTEMS ENGINEERING | 2025 – Present
- Design, build, and operate a production multi-agent system — coordinating 5+ specialized AI agents across security monitoring, business intelligence, home automation, and infrastructure management with defined roles, guardrails, and chain-of-command policies.
- Engineer prompt-driven workflows with structured output parsing, verification loops, retry logic, approval gates, and failure handling — applying reliability engineering principles to AI-assisted automation.
- Build and maintain AI-driven business intelligence pipelines: automated competitor monitoring, web scraping, LLM-powered analysis, and branded email digest delivery.
- Implement security-first agent architecture including credential isolation, tool-use policies, output sanitization, injection detection, and mandatory code scanning before execution.
- Develop cross-agent communication protocols, session orchestration, and workflow engines integrating webhook triggers, template variable systems, and status-driven state machines.

GCS TECHNOLOGIES — Austin, TX | 2012 – 2021
Director of Operations (2019–2021) | Technical Support Manager (2017–2019) | Datacenter Team Lead (2014–2017)
- Progressed from datacenter operations to directing a business unit — managing P&L, strategic initiatives, and a 30-member technical team while exceeding revenue targets for seven consecutive quarters.
- Developed internal training programs that increased team utilization from 73% to 86%; built customer feedback loops that measurably improved service retention.
- Led cross-functional security initiatives aligning identity and access management practices with compliance requirements and business objectives.

EARLY CAREER: RedHat Linux & AIX Unix Administrator — University of Texas at Austin IT; Security Management Services LLC.

EDUCATION & CERTIFICATIONS
Juris Doctor / Graduate Diploma in Civil Law — Louisiana State University, Paul M. Hebert Law Center
Bachelor of Arts in Government, Minor in Biology — University of Texas at Austin
CompTIA Security+ CE | Microsoft Certified: Azure Fundamentals

PROFESSIONAL AFFILIATIONS
Member, State Bar of Texas

## Assets
- Headshot: Will be at src/assets/headshot.jpg
- OG image: Generate during build or provide
- Favicon: Simple "AS" monogram or security lock icon

## SEO
- Semantic HTML, proper heading hierarchy
- OpenGraph + Twitter cards
- JSON-LD Person schema
- sitemap.xml + robots.txt (Astro auto-generates)
- Alt text on all images
- Keyboard-navigable interactive elements
- prefers-reduced-motion respected
- Performance: <100KB first load target
