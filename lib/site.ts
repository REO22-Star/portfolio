// -----------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH
// Everything swappable lives here. Edit this file to update the whole site.
// Metrics marked [FILL IN] are placeholders — replace with real numbers.
// -----------------------------------------------------------------------------

export const SITE = {
  firstName: "Roland",
  lastName: "Emmanuel Osaro",
  fullName: "Roland Emmanuel Osaro",
  role: "CRM/AI Automation & HubSpot Developer",
  tagline: "CRM / AI Automation & HubSpot Developer",
  heroSub:
    "I design CRM systems, automation pipelines, and HubSpot experiences that cut manual work and help businesses scale.",
  email: "automationwithreo@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/roland-emmanuel-512206370",
  githubUrl: "https://github.com/REO22-Star/REO_AUTOMATION",
  // Formspree endpoint — create a free form at https://formspree.io and paste the ID here.
  formspreeId: "YOUR_FORM_ID",
  portraitSrc: "/portrait.jpg",
  footerCopy: "Roland Emmanuel Osaro — CRM / AI Automation",
  stats: [
    { num: "20+", label: "Projects Delivered" },
    { num: "12+", label: "Workflows Automated" },
    { num: "6+", label: "Industries Served" },
  ],
} as const;

// -----------------------------------------------------------------------------
// ABOUT
// -----------------------------------------------------------------------------
export const ABOUT = {
  paragraphs: [
    "I'm a CRM and automation developer specializing in HubSpot — from CMS themes and marketing email systems to CRM architecture and AI-driven workflows. I build systems that remove repetitive work and let teams focus on the work that actually moves the needle.",
    "My work spans HubSpot CMS (React/HubL themes), drag-and-drop email systems, and full-stack Next.js applications. I care about clean, maintainable builds that hold up in production and are easy for clients to run themselves.",
  ],
} as const;

// -----------------------------------------------------------------------------
// SERVICES
// -----------------------------------------------------------------------------
export const SERVICES = [
  {
    title: "HubSpot CMS Development",
    desc: "Custom themes, modules, and landing pages — React/HubL, mobile-first, editor-friendly.",
  },
  {
    title: "Email Systems",
    desc: "Drag-and-drop marketing email templates built for deliverability and dark-mode safety.",
  },
  {
    title: "CRM & Automation",
    desc: "CRM architecture, workflow automation, and AI-driven process design.",
  },
  {
    title: "Web Development",
    desc: "Full-stack Next.js applications, prototypes, and marketing sites deployed on Vercel.",
  },
] as const;

// -----------------------------------------------------------------------------
// SKILLS — grouped
// -----------------------------------------------------------------------------
export const SKILL_GROUPS = [
  {
    category: "CRM & HubSpot",
    skills: ["HubSpot CRM", "HubSpot CMS", "Marketing Email", "HubL", "Workflows"],
  },
  {
    category: "Automation & AI",
    skills: ["Make", "n8n", "Zapier", "AI Workflows", "API Integration"],
  },
  {
    category: "Development",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python"],
  },
  {
    category: "Data & Delivery",
    skills: ["Prisma", "Supabase", "Vercel", "Git", "Responsive Design"],
  },
] as const;

// -----------------------------------------------------------------------------
// FEATURED PROJECTS / CASE STUDIES
// Results are placeholders — replace [FILL IN] with real metrics.
// -----------------------------------------------------------------------------
export const PROJECTS = [
  {
    name: "JoinBrands Email & Landing System",
    category: "HubSpot • Email + CMS",
    challenge:
      "A creator-marketing platform needed a scalable email system and landing pages that non-developers could edit without breaking layout.",
    solution:
      "Built 16 drag-and-drop email templates with preview-text support and editable body areas, plus a multi-page landing theme deployed to production.",
    tech: ["HubSpot CMS", "HubL", "Drag-and-Drop Email", "Responsive"],
    results: [
      "16 reusable email templates shipped to production",
      "[FILL IN]% reduction in template edit time",
      "[FILL IN] landing pages launched",
    ],
  },
  {
    name: "Chloe Consulting Email & CMS",
    category: "HubSpot • Email + Theme",
    challenge:
      "A consulting brand needed a cohesive, on-brand email suite and a rebranded website theme built from Figma designs.",
    solution:
      "Delivered 6 drag-and-drop email templates (custom hero, feature-row, and footer modules) and a standalone React CMS theme, all editor-friendly with uploadable image fields.",
    tech: ["HubSpot CMS", "React", "Marketing Email", "Figma"],
    results: [
      "6 branded email templates + full site theme",
      "Fully client-editable content fields",
      "[FILL IN]% open-rate improvement",
    ],
  },
  {
    name: "Meridian Online Bank",
    category: "Next.js • Fintech Prototype",
    challenge:
      "Needed a realistic banking prototype with correct accounting and a path to real banking-as-a-service providers.",
    solution:
      "Built a Next.js app with a double-entry ledger and a pluggable BaaS-provider seam, using Prisma and Clerk for data and auth.",
    tech: ["Next.js", "Prisma", "Clerk", "TypeScript"],
    results: [
      "Double-entry ledger with provider abstraction",
      "Auth + accounts + transactions flow",
      "[FILL IN] transactions modeled",
    ],
  },
  {
    name: "JosHomes Rental Marketplace",
    category: "Next.js • Marketplace",
    challenge:
      "Jos, Nigeria lacked a mobile-first way to browse rental vacancies; the market needed a trustworthy listings platform.",
    solution:
      "Delivered a milestone-driven, mobile-first marketplace — public prototype first, then a roadmap toward auth, roles, and a Supabase backend.",
    tech: ["Next.js", "Supabase", "Mobile-First", "TypeScript"],
    results: [
      "Public prototype shipped (Milestone 0)",
      "Roadmap to auth + roles + live data",
      "[FILL IN] listings supported",
    ],
  },
  {
    name: "Journeys & Innfinity Email",
    category: "HubSpot • Email",
    challenge:
      "Travel and hospitality brands needed reusable, survey-ready email templates that stayed on-brand across campaigns.",
    solution:
      "Built modular email template sets (hero, body, footer, survey modules) deployed to HubSpot, structured for easy campaign reuse.",
    tech: ["HubSpot CMS", "HubL", "Email Modules"],
    results: [
      "Multiple reusable template sets delivered",
      "Survey/feedback modules included",
      "[FILL IN] campaigns supported",
    ],
  },
] as const;

// -----------------------------------------------------------------------------
// AUTOMATION WORKFLOWS (n8n) — compact case-study grid
// -----------------------------------------------------------------------------
export const AUTOMATIONS = [
  {
    name: "Auto-Delete Duplicate Companies",
    client: "Klarifi",
    category: "HubSpot Data Hygiene",
    desc: "Scheduled n8n workflow that finds duplicate HubSpot company records and removes the redundant ones while preserving the canonical record — keeping reporting and account context reliable with zero manual review.",
    tech: ["n8n", "HubSpot API", "Scheduled"],
  },
  {
    name: "STR Lead Enrichment & Qualification",
    client: "Internal",
    category: "AI Lead Generation",
    desc: "Email-triggered pipeline: drop in a CSV and the workflow scores each contact with Claude against industry, location, and seniority gates, verifies emails via Hunter.io, scans company sites for HubSpot usage, and returns a ready-to-import scored sheet.",
    tech: ["n8n", "Claude", "Hunter.io", "Google Sheets"],
  },
  {
    name: "Intercom → HubSpot Subscription Sync",
    client: "Cross-platform",
    category: "Data Sync",
    desc: "Daily workflow that pushes paid Intercom subscribers into HubSpot in rate-limit-safe batches (3 per second), so sales and marketing always see current subscription status without manual exports.",
    tech: ["n8n", "Intercom", "HubSpot API"],
  },
  {
    name: "Quote Number Auto-Increment",
    client: "Arrival 3D",
    category: "Quoting Automation",
    desc: "Assigns the next sequential quote number the instant a HubSpot quote is created — collision-free regardless of who creates it or how many are generated in parallel, across 11 years of migrated invoice history.",
    tech: ["n8n", "HubSpot API"],
  },
  {
    name: "HubSpot → VCRM Marketing Preferences",
    client: "TRI · 15+ travel brands",
    category: "Multi-Brand Sync",
    desc: "Syncs opt-out and marketing-preference changes from HubSpot to the matching brand record in VCRM across a 15+ brand portfolio — removing a per-brand manual step and the compliance risk of a missed sync.",
    tech: ["n8n", "HubSpot", "VCRM"],
  },
  {
    name: "Hive API Utility Layer (MCP)",
    client: "Internal",
    category: "PM Automation Infrastructure",
    desc: "Four reusable, MCP-exposed core workflows (list projects, resolve users/statuses, read tasks, create tasks) that underpin a 40-trigger Hive automation layer — so every other workflow and Claude action reuses one tested integration.",
    tech: ["n8n", "Hive API", "MCP", "Claude"],
  },
  {
    name: "Auto-Spender Assisted by Sales",
    client: "JoinBrands",
    category: "Revenue Attribution",
    desc: "Runs every 10 minutes to compare a contact's first meeting date against the deal's closed-won date, then flags whether auto-spender revenue was sales-assisted — turning a manual date comparison into automatic attribution reporting.",
    tech: ["n8n", "HubSpot API", "Scheduled"],
  },
  {
    name: "Auto-Create Company from Business Email",
    client: "JoinBrands",
    category: "CRM Data Quality",
    desc: "Detects a business-email domain on a new or updated contact and automatically creates and associates the matching HubSpot company — closing a data-quality gap that previously left orphaned contacts and broke account-level reporting.",
    tech: ["n8n", "HubSpot API"],
  },
  {
    name: "Slack → Airtable Ops Log",
    client: "ISS",
    category: "Ops Data Structuring",
    desc: "Captures operational updates posted in Slack and writes them into Airtable in structured form, giving the team a searchable, reportable record of information that used to live only inside Slack threads.",
    tech: ["n8n", "Slack", "Airtable"],
  },
] as const;

// -----------------------------------------------------------------------------
// PROCESS
// -----------------------------------------------------------------------------
export const PROCESS = [
  { step: "Discovery", desc: "Understand goals, systems, and constraints." },
  { step: "Audit", desc: "Review current setup and find gaps." },
  { step: "Strategy", desc: "Design the architecture and roadmap." },
  { step: "Build", desc: "Implement, integrate, and iterate." },
  { step: "Testing", desc: "Validate across devices and edge cases." },
  { step: "Handoff", desc: "Document, train, and support." },
] as const;

// -----------------------------------------------------------------------------
// RESUME TIMELINE — placeholder, drafted from project history. Edit freely.
// -----------------------------------------------------------------------------
export const RESUME = [
  {
    period: "2024 — Present",
    title: "CRM / AI Automation & HubSpot Developer",
    org: "Freelance",
    desc: "Building HubSpot CMS themes, email systems, and automation for clients across marketing, hospitality, and fintech.",
  },
  {
    period: "2023 — 2024",
    title: "HubSpot & Web Developer",
    org: "Client Projects",
    desc: "Delivered email template systems, landing pages, and Next.js applications from design through production deployment.",
  },
  {
    period: "2022 — 2023",
    title: "Automation Developer",
    org: "Independent",
    desc: "Designed workflow automations and API integrations connecting CRMs to marketing and operations tools.",
  },
] as const;
