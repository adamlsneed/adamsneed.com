const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const TEAL = '#14b8a6';
const DARK_BLUE = '#1a2744';
const BODY = '#2d3748';
const LIGHT = '#718096';

const html = `<!DOCTYPE html>
<html><head><style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', -apple-system, sans-serif;
    color: ${BODY};
    font-size: 9.5pt;
    line-height: 1.5;
  }

  /* Header */
  .header {
    border-bottom: 3px solid ${TEAL};
    padding-bottom: 12px;
    margin-bottom: 16px;
  }
  .name {
    font-size: 24pt;
    font-weight: 700;
    color: ${DARK_BLUE};
    letter-spacing: -0.5px;
  }
  .contact {
    display: flex;
    gap: 12px;
    margin-top: 4px;
    font-size: 8.5pt;
    color: ${LIGHT};
  }
  .contact a { color: ${LIGHT}; text-decoration: none; }
  .contact .sep { color: #cbd5e0; }

  /* Section headers */
  h2 {
    font-size: 8pt;
    font-weight: 700;
    color: ${TEAL};
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-top: 16px;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid #e2e8f0;
  }

  /* Summary */
  .summary {
    font-size: 9.5pt;
    line-height: 1.55;
    color: ${BODY};
    padding-left: 10px;
    border-left: 3px solid ${TEAL};
    margin-bottom: 4px;
  }

  /* Skills */
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 4px;
  }
  .skill {
    display: inline-block;
    font-size: 7.5pt;
    padding: 2px 8px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    color: ${BODY};
    background: #f7fafc;
  }

  /* Company block */
  .company {
    margin-bottom: 12px;
    break-inside: avoid;
  }
  .company-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }
  .company-name {
    font-size: 11pt;
    font-weight: 700;
    color: ${DARK_BLUE};
  }
  .company-location {
    font-size: 8pt;
    color: ${LIGHT};
  }
  .role {
    font-size: 9.5pt;
    font-weight: 600;
    color: ${BODY};
    margin-bottom: 4px;
  }
  .role .dates {
    font-weight: 400;
    color: ${LIGHT};
  }
  .role-chips {
    display: flex;
    gap: 6px;
    margin-bottom: 6px;
  }
  .role-chip {
    font-size: 7.5pt;
    padding: 1px 7px;
    border-radius: 8px;
    background: #edf2f7;
    color: ${BODY};
    font-weight: 500;
  }

  /* Bullets */
  ul { list-style: none; margin: 4px 0 0 0; padding: 0; }
  li {
    position: relative;
    padding-left: 14px;
    margin-bottom: 4px;
    font-size: 9pt;
    line-height: 1.45;
    color: #4a5568;
  }
  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${TEAL};
    opacity: 0.6;
  }

  /* Award */
  .award {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
    padding: 6px 10px;
    border-radius: 6px;
    background: linear-gradient(135deg, #f0fdfa, #e6fffa);
    border: 1px solid #b2f5ea;
  }
  .award-emoji { font-size: 14pt; }
  .award-text { font-size: 8.5pt; color: ${DARK_BLUE}; font-weight: 600; }
  .award-sub { font-size: 7.5pt; color: ${LIGHT}; font-weight: 400; }

  /* Section label for agentic */
  .section-accent {
    border-left: 3px solid ${TEAL};
    padding-left: 10px;
  }

  /* Education grid */
  .edu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 4px;
  }
  .edu-item h4 {
    font-size: 9pt;
    font-weight: 600;
    color: ${DARK_BLUE};
    margin-bottom: 1px;
  }
  .edu-item p {
    font-size: 8pt;
    color: ${LIGHT};
  }

  /* Early career */
  .early {
    font-size: 8.5pt;
    color: ${LIGHT};
    padding: 6px 10px;
    background: #f7fafc;
    border-radius: 4px;
    margin-top: 8px;
  }
  .early strong { color: ${BODY}; }
  .contact { flex-wrap: wrap; }
</style></head><body>

<div class="header">
  <div class="name">Adam Lacroix Sneed</div>
  <div class="contact">
    <span>Austin, TX</span>
    <span class="sep">·</span>
    <span>512.888.5580</span>
    <span class="sep">·</span>
    <a href="mailto:adam@adamsneed.com">adam@adamsneed.com</a>
    <span class="sep">·</span>
    <a href="https://adamsneed.com">adamsneed.com</a>
    <span class="sep">·</span>
    <a href="https://www.linkedin.com/in/adam-sneed-8113375/">LinkedIn</a>
  </div>
</div>

<p class="summary"><strong>Manager, Global Cyber Security.</strong> Security-focused engineering leader with deep expertise in PAM, IAM, and enterprise cybersecurity. 20+ years in IT/security with 4+ years focused on enterprise PAM engineering, automation, and compliance. Combines hands-on engineering leadership with team management to deliver credential vaulting, session management, and service account governance across on-prem and cloud environments.</p>

<h2>Technical Skills</h2>
<div class="skills">
  <span class="skill">PAM/EPM Architecture</span>
  <span class="skill">IAM &amp; Identity Governance</span>
  <span class="skill">Credential Vaulting</span>
  <span class="skill">Identity Lifecycle</span>
  <span class="skill">SIEM/SOAR &amp; ITSM</span>
  <span class="skill">Zero Trust</span>
  <span class="skill">Cloud IAM (AWS/Azure/GCP)</span>
  <span class="skill">AD/Entra ID</span>
  <span class="skill">PowerShell</span>
  <span class="skill">Python</span>
  <span class="skill">SQL</span>
  <span class="skill">REST APIs</span>
  <span class="skill">Terraform &amp; Ansible</span>
  <span class="skill">CI/CD Pipelines</span>
  <span class="skill">Non-Human Identity Governance</span>
  <span class="skill">AI Agent Access &amp; MCP</span>
  <span class="skill">LLM-Assisted Engineering</span>
  <span class="skill">Local LLM Inference</span>
  <span class="skill">Policy Enforcement</span>
  <span class="skill">NIST/CIS/ISO 27001</span>
  <span class="skill">SOX/PCI</span>
  <span class="skill">Agile (Scrum/Kanban)</span>
</div>

<h2>Professional Experience</h2>

<div class="company">
  <div class="company-header">
    <span class="company-name">McDonald's Corporation</span>
    <span class="company-location">Remote from Austin, TX</span>
  </div>
  <p class="role">Manager, Global Cyber Security <span class="dates">&middot; Apr 2026 &ndash; Present</span></p>
  <ul>
    <li>Lead PAM platform engineering, operations, and service delivery across a Fortune 100 enterprise's on-prem and multi-cloud environments.</li>
    <li>Drive PAM strategy, roadmap, and governance aligned with Zero Trust, least privilege, risk management, and compliance.</li>
    <li>Partner with security architecture, identity, infrastructure, and audit teams to integrate PAM with SIEM, ITSM, and DevOps/CI-CD workflows.</li>
    <li>Lead and mentor PAM engineers; establish runbooks, SOPs, and operational standards for program maturity.</li>
    <li>Own enterprise selection and program design for non-human identity governance across service accounts, workload identities, and AI agent credentials.</li>
  </ul>
</div>

<div class="company">
  <div class="company-header">
    <span class="company-name">Netwrix Corporation</span>
    <span class="company-location">Remote from Austin, TX</span>
  </div>
  <p class="role">Senior Solutions Architect, Privileged Access Management <span class="dates">&middot; Sep 2021 &ndash; Apr 2026</span></p>
  <ul>
    <li>PAM subject matter expert for enterprise deployments across Fortune-class organizations &mdash; credential vaulting, session proxying, JIT access, and service account governance integrated with AD/Entra ID, AWS/Azure cloud IAM, SIEM/SOAR, and ITSM platforms.</li>
    <li>Architect API-driven automation frameworks (PowerShell, Python, REST APIs) for privileged account lifecycle management &mdash; onboarding, credential rotation, and access workflows enforcing least-privilege at scale.</li>
    <li>Led root cause analysis, platform tuning, Agile delivery, and operational KB/runbook/SOP development; oversaw vendor-led SOW scoping, UAT, and production cutovers.</li>
    <li>Designed a TypeScript MCP server exposing the Netwrix Privilege Secure REST API to LLM workflows for ephemeral admin sessions, rotation reporting, and access automation.</li>
    <li>Pioneered AI-assisted engineering with Claude Code and built local Ollama inference for security-sensitive use cases; concurrently architected independent PAM platform IP (Moat).</li>
  </ul>
  <div class="award">
    <span class="award-emoji">&#127942;</span>
    <div>
      <span class="award-text">Netwrix Hero Award</span>
      <span class="award-sub"> &middot; Q1 FY&rsquo;25 &mdash; Excellence in enterprise PAM solution delivery</span>
    </div>
  </div>
</div>


<div class="company">
  <div class="company-header">
    <span class="company-name">GCS Technologies</span>
    <span class="company-location">Austin, TX &middot; 2012 &ndash; 2021</span>
  </div>
  <div class="role-chips">
    <span class="role-chip">Director of Operations</span>
    <span class="role-chip">Technical Support Manager</span>
    <span class="role-chip">Datacenter Team Lead</span>
  </div>
  <ul>
    <li>Progressed from datacenter operations to directing a business unit &mdash; P&amp;L ownership, strategic initiatives, and a 30-member team while exceeding revenue targets for seven consecutive quarters.</li>
    <li>Built training programs increasing team utilization from 73% to 86%; designed customer feedback loops that measurably improved retention.</li>
    <li>Led cross-functional security initiatives aligning IAM practices with compliance requirements and business objectives.</li>
  </ul>
</div>

<div class="early"><strong>Early Career:</strong> RedHat Linux &amp; AIX Unix Administrator &mdash; University of Texas at Austin IT &middot; Security Management Services LLC</div>

<h2>Education &amp; Certifications</h2>
<div class="edu-grid">
  <div class="edu-item">
    <h4>Juris Doctor / Graduate Diploma in Civil Law</h4>
    <p>Louisiana State University, Paul M. Hebert Law Center</p>
  </div>
  <div class="edu-item">
    <h4>BA in Government, Minor in Biology</h4>
    <p>University of Texas at Austin</p>
  </div>
  <div class="edu-item">
    <h4>CompTIA Security+ CE</h4>
    <p>Microsoft Certified: Azure Fundamentals</p>
  </div>
  <div class="edu-item">
    <h4>Member, State Bar of Texas</h4>
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
    margin: { top: '0.45in', right: '0.55in', bottom: '0.45in', left: '0.55in' },
    printBackground: true
  });
  await browser.close();
  console.log('PDF generated: ' + fs.statSync(outPath).size + ' bytes');
})();
