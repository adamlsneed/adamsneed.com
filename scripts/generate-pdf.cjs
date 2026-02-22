const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; font-size: 10pt; line-height: 1.4; margin: 0; }
  h1 { font-size: 22pt; margin: 0 0 4px 0; }
  .contact { font-size: 9pt; color: #555; margin-bottom: 14px; }
  .contact a { color: #555; text-decoration: none; }
  h2 { font-size: 10.5pt; color: #1a5276; text-transform: uppercase; letter-spacing: 0.12em; border-bottom: 2px solid #1a5276; padding-bottom: 3px; margin: 14px 0 6px 0; }
  h3 { font-size: 11pt; color: #1a5276; margin: 10px 0 2px 0; }
  h3 span { font-size: 9.5pt; color: #555; font-weight: normal; }
  .role { font-weight: 600; margin: 0 0 4px 0; font-size: 10pt; }
  p { margin: 0 0 4px 0; }
  ul { margin: 4px 0 6px 0; padding-left: 18px; }
  li { margin-bottom: 3px; font-size: 9.5pt; line-height: 1.35; }
  .summary { font-size: 10pt; line-height: 1.45; }
  .skills { font-size: 9pt; line-height: 1.4; color: #333; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .small { font-size: 9pt; color: #555; }
</style></head><body>
<h1>ADAM LACROIX SNEED</h1>
<p class="contact">Austin, TX &nbsp;|&nbsp; adam@adamsneed.com &nbsp;|&nbsp; adamsneed.com &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/adam-sneed-8113375/">linkedin.com/in/adam-sneed-8113375</a></p>

<h2>Summary</h2>
<p class="summary">Senior Solutions Architect and PAM subject matter expert with deep expertise in identity &amp; access management and agentic AI systems. 20+ years in IT with 4+ years focused on enterprise PAM/EPM and IAM solutions. Designs and deploys secure, scalable automation &mdash; from credential vaulting, identity lifecycle management, and session governance to AI-driven workflow orchestration with human-in-the-loop guardrails. Proven ability to architect API-driven integrations across PAM, IAM, SIEM/SOAR, ITSM, and cloud identity platforms while translating compliance requirements (NIST, CIS, SOX/PCI) into production-grade policy enforcement.</p>

<h2>Technical Skills</h2>
<p class="skills">PAM/EPM Engineering &amp; Architecture &middot; IAM &amp; Identity Governance &middot; Credential Vaulting &amp; Rotation &middot; Identity Lifecycle Management &middot; SIEM/SOAR &amp; ITSM Integration &middot; Zero Trust &amp; Least Privilege &middot; Cloud IAM (AWS/Azure/GCP) &middot; AD/Entra ID &middot; PowerShell, Python, SQL &middot; REST API Integration &amp; Orchestration &middot; Terraform, Ansible &amp; IaC &middot; DevOps &amp; CI/CD Pipelines &middot; Agentic Workflow Design &middot; Prompt Engineering &amp; Evaluation &middot; AI-Assisted Automation &middot; Multi-Agent Systems &middot; Agent Orchestration &middot; Policy Enforcement &amp; Guardrails &middot; Reliability Engineering &middot; NIST, CIS, ISO 27001, SOX/PCI &middot; Agile (Scrum/Kanban)</p>

<h2>Professional Experience</h2>

<h3>NETWRIX CORPORATION <span>&mdash; Remote from Austin, TX</span></h3>
<p class="role">Senior Solutions Architect, Privileged Access Management &nbsp;|&nbsp; 09/2021 &ndash; Present</p>
<ul>
  <li>Serve as PAM subject matter expert for enterprise deployments across Fortune-class organizations, integrating credential vaulting, session proxying, JIT access, and service account governance with AD/Entra ID, AWS/Azure cloud IAM, SIEM/SOAR, and ITSM platforms.</li>
  <li>Architect API-driven automation frameworks (PowerShell, Python, REST APIs) for privileged account lifecycle management &mdash; onboarding, credential rotation, access workflows &mdash; reducing manual intervention and enforcing least-privilege policies at scale.</li>
  <li>Design and codify operational runbooks, decision-logic SOPs, and escalation policies that translate directly to agentic workflow patterns &mdash; conditional branching, retry logic, human-in-the-loop approval gates, and automated remediation.</li>
  <li>Lead root cause analysis and platform resilience engineering; create reusable knowledge bases and handoff documentation ensuring operational continuity across teams.</li>
  <li>Oversee vendor-led PAM implementations including SOW scoping, UAT execution, and production cutovers within Agile delivery frameworks (Scrum/Kanban).</li>
  <li>Awarded Netwrix Hero Award (Q1 FY&rsquo;25) for excellence in enterprise PAM solution delivery.</li>
</ul>

<h3>AGENTIC &amp; AI SYSTEMS ENGINEERING <span>| 2024 &ndash; Present</span></h3>
<ul>
  <li>Design, build, and operate a production multi-agent system coordinating 5+ specialized AI agents across security monitoring, business intelligence, home automation, and infrastructure management with defined roles, guardrails, and chain-of-command policies.</li>
  <li>Engineer prompt-driven workflows with structured output parsing, verification loops, retry logic, approval gates, and failure handling &mdash; applying reliability engineering principles to AI-assisted automation.</li>
  <li>Build and maintain AI-driven business intelligence pipelines: automated competitor monitoring, web scraping, LLM-powered analysis, and branded email digest delivery.</li>
  <li>Implement security-first agent architecture including credential isolation, tool-use policies, output sanitization, injection detection, and mandatory code scanning before execution.</li>
  <li>Develop cross-agent communication protocols, session orchestration, and workflow engines integrating webhook triggers, template variable systems, and status-driven state machines.</li>
</ul>

<h3>GCS TECHNOLOGIES <span>&mdash; Austin, TX | 2012 &ndash; 2021</span></h3>
<p class="role">Director of Operations (2019&ndash;2021) &middot; Technical Support Manager (2017&ndash;2019) &middot; Datacenter Team Lead (2014&ndash;2017)</p>
<ul>
  <li>Progressed from datacenter operations to directing a business unit &mdash; managing P&amp;L, strategic initiatives, and a 30-member technical team while exceeding revenue targets for seven consecutive quarters.</li>
  <li>Developed internal training programs that increased team utilization from 73% to 86%; built customer feedback loops that measurably improved service retention.</li>
  <li>Led cross-functional security initiatives aligning identity and access management practices with compliance requirements and business objectives.</li>
</ul>

<p class="small"><strong>EARLY CAREER:</strong> RedHat Linux &amp; AIX Unix Administrator &mdash; University of Texas at Austin IT; Security Management Services LLC.</p>

<h2>Education &amp; Certifications</h2>
<div class="two-col">
  <div>
    <p>Juris Doctor / Graduate Diploma in Civil Law &mdash; LSU, Paul M. Hebert Law Center</p>
    <p>BA in Government, Minor in Biology &mdash; University of Texas at Austin</p>
  </div>
  <div>
    <p>CompTIA Security+ CE</p>
    <p>Microsoft Certified: Azure Fundamentals</p>
    <p class="small">Member, State Bar of Texas</p>
  </div>
</div>
</body></html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const outDir = path.join(__dirname, '..', 'public', 'resume');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'adam-sneed-resume.pdf');
  await page.pdf({
    path: outPath,
    format: 'Letter',
    margin: { top: '0.5in', right: '0.6in', bottom: '0.5in', left: '0.6in' },
    printBackground: false
  });
  await browser.close();
  console.log('PDF generated: ' + fs.statSync(outPath).size + ' bytes');
})();
