import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, Trophy, Award, BadgeCheck, Download, Target, Users,
  GraduationCap, Mail, MapPin, FileText, ArrowRight, Brain, Workflow,
} from "lucide-react";
import { FaHockeyPuck, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiJira, SiNotion, SiFigma } from "react-icons/si";

/* ------------------------------------------------------------------ data */
const interests = [
  "Product Management", "Product Analytics", "AI Products",
  "Sports Technology", "Full Stack Development",
];

const achievements = [
  { icon: <Trophy />, value: "Top 5 Finalist", org: "Dizzy Hackers Hackathon", note: "Decentralized Identity Management", grad: "from-yellow-400 to-amber-500" },
  { icon: <Award />, value: "Top 70 / 500+", org: "World Innovation Expo 2023", note: "Vehicle Maintenance Index", grad: "from-fuchsia-400 to-pink-500" },
  { icon: <BadgeCheck />, value: "IBM Certified", org: "Product Management Professional", note: "Coursera · IBM", grad: "from-blue-400 to-indigo-500" },
  { icon: <FaHockeyPuck />, value: "Elite Project Analyst", org: "Hudl", note: "Instat Ice Hockey · Sports Analytics", grad: "from-cyan-400 to-sky-500" },
];

const productSkills = [
  "Product Roadmapping", "Agile Methodologies", "Scrum", "User Research",
  "Requirement Gathering", "Product Analytics", "Feature Prioritization",
  "Stakeholder Management", "Jira", "Notion", "Figma", "Product Documentation",
];

const caseStudies = [
  {
    icon: <Workflow />,
    title: "Improving Sports Video Analysis Workflows",
    problem: "Manual match-tagging workflows are repetitive and time-consuming for analysts.",
    solution: "AI-assisted tagging suggestions plus workflow automation that pre-fills routine events.",
    impact: "Reduced analyst effort, improved productivity, and faster match processing.",
  },
  {
    icon: <Users />,
    title: "Improving LinkedIn Job Recommendations",
    problem: "Users receive a high volume of irrelevant job suggestions.",
    solution: "A skill-based recommendation engine that ranks roles by genuine fit, not keywords.",
    impact: "Higher application rates and noticeably better user satisfaction.",
  },
  {
    icon: <GraduationCap />,
    title: "Improving College Placement Preparation",
    problem: "Students lack realistic, on-demand interview practice before placements.",
    solution: "AI-powered mock interviews with structured, automated feedback on every answer.",
    impact: "Better preparation, stronger answers, and higher candidate confidence.",
  },
];

const projects = [
  { name: "NexPrep AI", tag: "AI Product", outcome: "AI interview platform with voice simulations and automated feedback — built to cut interview-prep effort (~40%*) and grow candidate confidence.", href: "/projects/nexprep" },
  { name: "CopaScore AI", tag: "Sports Analytics", outcome: "Turns live match data into instant, readable insights — making pro-grade football analytics accessible without a paid subscription.", href: "/projects/copascore" },
  { name: "Skillquest IFA", tag: "Hiring Product", outcome: "Gamified hiring-evaluation product that screens candidates on real problem-solving signal instead of résumés.", href: "/projects/skillquest-ifa" },
  { name: "Smart Algo Trade", tag: "FinTech", outcome: "Algorithmic-trading product with backtesting and risk controls — lets retail traders validate strategies before risking capital.", href: "/projects/smart-algo-trade" },
  { name: "Godrej Properties", tag: "Lead Generation", outcome: "Conversion-focused lead-gen platform that turns visitors into qualified inquiries for a real-estate sales funnel.", href: "/projects/godrej-properties" },
  { name: "Max Extrusions", tag: "B2B Product", outcome: "B2B catalog + inquiry product that streamlines industrial product discovery and shortens the sales-inquiry path.", href: "/projects/max-extrusions" },
];

const timeline = [
  { year: "2022", title: "Started B.Tech in CSE (AI & ML)", note: "Presidency University, Bangalore" },
  { year: "2024", title: "Started Freelance Web Development", note: "Shipping products for clients & startups" },
  { year: "2025", title: "Full Stack Development Internship", note: "Insight Fusion Analytics" },
  { year: "2026", title: "Elite Project Analyst — Hudl", note: "Instat Ice Hockey · Sports Analytics" },
  { year: "Future", title: "Product Analyst → Associate PM → Product Manager", note: "The direction I'm building toward", future: true },
];

const learning = [
  "SQL for Product Analytics", "Product Metrics", "User Research",
  "Product Strategy", "AI Product Management", "Data-Driven Decision Making",
];

const interestedIn = [
  "Product Management Opportunities", "Product Analytics Roles",
  "Technical Product Management", "AI Product Development", "Full Stack Development",
];

/* ------------------------------------------------------------------ helpers */
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHead = ({ kicker, title, accentWord, sub }) => (
  <Reveal className="mb-10">
    <div className="h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 mb-4" />
    <p className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 mb-3">{kicker}</p>
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
      {title} <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 text-transparent bg-clip-text">{accentWord}</span>
    </h2>
    {sub && <p className="text-white/45 text-sm md:text-base mt-3 max-w-2xl">{sub}</p>}
  </Reveal>
);

const Chip = ({ children, icon }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/80 text-sm font-medium hover:border-violet-500/40 hover:bg-white/[0.06] transition-colors duration-300">
    {icon && <span className="text-violet-400">{icon}</span>}
    {children}
  </span>
);

/* ------------------------------------------------------------------ page */
export default function PMPage() {
  return (
    <div className="font-sans min-h-screen relative overflow-hidden bg-[#050505] text-slate-200 selection:bg-violet-500/30 selection:text-white">
      {/* ambient glow */}
      <div className="pointer-events-none fixed -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-lg font-extrabold tracking-tight text-white">Ajinkya<span className="text-violet-400">.</span></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25">Product</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#achievements" className="hidden sm:inline-block text-sm text-white/55 hover:text-white px-3 py-2 transition-colors">Achievements</a>
            <a href="#product" className="hidden sm:inline-block text-sm text-white/55 hover:text-white px-3 py-2 transition-colors">Product</a>
            <a href="#contact" className="hidden sm:inline-block text-sm text-white/55 hover:text-white px-3 py-2 transition-colors">Contact</a>
            <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 border border-white/12 text-white/80 hover:bg-white/[0.06] transition-colors">
              <ArrowLeft size={15} /> <span className="hidden sm:inline">Full&nbsp;Stack site</span><span className="sm:hidden">Back</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* 1 ─ HERO */}
        <section className="px-6 md:px-12 pt-16 md:pt-24 pb-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-white/70 tracking-wide uppercase">Open to Product Roles</span>
            </div>
            <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white/45 mb-3">Technical Product Manager · Product Analyst</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Ajinkya Dhumal
              <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 text-transparent bg-clip-text">Building products, not just code.</span>
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light max-w-2xl mt-5">
              An engineer who understands how products are built — and a product thinker who cares about <strong className="text-white/90">users, outcomes, and strategy</strong>. I bridge the gap between engineering and product management.
            </p>
          </Reveal>

          {/* current role + interests */}
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <Reveal delay={0.05}>
              <div className="glass-panel rounded-3xl p-6 border border-white/10 h-full">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40 mb-4">Current Role</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl bg-gradient-to-br from-cyan-400 to-sky-500 shadow-lg shrink-0">
                    <FaHockeyPuck />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">Elite Project Analyst</h3>
                    <p className="text-cyan-400 text-sm font-semibold">Hudl — Instat Ice Hockey</p>
                    <p className="text-white/40 text-xs mt-0.5">Sports Technology · Analytics</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-3xl p-6 border border-white/10 h-full">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40 mb-4">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((it) => (
                    <span key={it} className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-200 text-xs font-medium">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="flex flex-wrap gap-3 mt-8">
            <a href="#product" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-shadow">
              View Product Work <ArrowRight size={16} />
            </a>
            <a href="#resume" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/15 text-white hover:bg-white/[0.06] transition-colors">
              <Download size={16} /> Resume
            </a>
          </Reveal>
        </section>

        {/* 2 ─ FEATURED ACHIEVEMENTS */}
        <section id="achievements" className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
          <SectionHead kicker="Proof" title="Featured" accentWord="Achievements" sub="The signals worth scanning in the first ten seconds." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((a, i) => (
              <Reveal key={a.value} delay={i * 0.06}>
                <div className="glass-panel rounded-3xl p-6 border border-white/10 h-full hover:border-white/20 transition-colors duration-300">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg bg-gradient-to-br ${a.grad} shadow-lg mb-4`}>{a.icon}</div>
                  <h3 className={`text-xl font-extrabold bg-gradient-to-r ${a.grad} text-transparent bg-clip-text leading-tight`}>{a.value}</h3>
                  <p className="text-white/85 text-sm font-semibold mt-1">{a.org}</p>
                  <p className="text-white/40 text-xs mt-1">{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 3 ─ RESUME */}
        <section id="resume" className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
          <Reveal>
            <div className="glass-panel rounded-[2rem] p-8 md:p-10 border border-white/10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:flex-1">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 mb-2">Resume</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">Pick the profile that fits the role.</h2>
                <p className="text-white/45 text-sm mt-2 max-w-md">Two tailored versions — one for product, one for engineering.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/Ajinkya-Dhumal-Product-Manager-Resume.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-shadow">
                  <Download size={16} /> Product Management Resume
                </a>
                <a href="/Ajinkya-Dhumal-Full-Stack-Resume.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold border border-white/15 text-white hover:bg-white/[0.06] transition-colors">
                  <FileText size={16} /> Full Stack Developer Resume
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 4 ─ PRODUCT MANAGEMENT */}
        <section id="product" className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
          <SectionHead kicker="The Shift" title="Product" accentWord="Management" />
          <Reveal>
            <div className="glass-panel rounded-3xl p-7 md:p-9 border border-white/10">
              <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-3xl">
                My background in software engineering helps me understand <strong className="text-white/90">how products are built</strong>, while my interest in user problems, business outcomes, and strategy drives my transition toward <strong className="text-white/90">Product Management</strong>.
                <br /><br />
                I enjoy identifying problems, understanding user needs, defining solutions, and collaborating across teams to deliver products that actually matter.
              </p>
              <div className="h-px bg-white/[0.07] my-7" />
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40 mb-4">Product Skills</p>
              <div className="flex flex-wrap gap-2.5">
                {productSkills.map((s) => {
                  const icon = s === "Jira" ? <SiJira /> : s === "Notion" ? <SiNotion /> : s === "Figma" ? <SiFigma /> : null;
                  return <Chip key={s} icon={icon}>{s}</Chip>;
                })}
              </div>
            </div>
          </Reveal>
        </section>

        {/* 5 ─ PRODUCT CASE STUDIES */}
        <section className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
          <SectionHead kicker="How I Think" title="Product Thinking &" accentWord="Case Studies" sub="Structured problem → solution → impact reasoning." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="glass-panel rounded-3xl p-6 border border-white/10 h-full flex flex-col hover:border-violet-500/30 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg mb-4">{c.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4 leading-snug">{c.title}</h3>
                  <div className="space-y-3.5 text-sm">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-rose-300/70 mb-1">Problem</p>
                      <p className="text-white/60 leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-sky-300/70 mb-1">Solution</p>
                      <p className="text-white/60 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-300/70 mb-1">Expected Impact</p>
                      <p className="text-white/60 leading-relaxed">{c.impact}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 6 ─ PROJECT IMPACT */}
        <section className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
          <SectionHead kicker="Shipped" title="Project" accentWord="Impact" sub="Outcome-focused — what each product does for its users." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.06}>
                <a href={p.href} className="glass-panel rounded-3xl p-6 border border-white/10 h-full flex flex-col group hover:border-violet-500/30 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">{p.name}</h3>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 border border-white/10 px-2.5 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed flex-grow">{p.outcome}</p>
                  <span className="inline-flex items-center gap-1.5 text-violet-300/80 group-hover:text-violet-300 text-sm font-semibold mt-4">Read case study <ArrowRight size={14} /></span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-5">* Illustrative metric — replace with verified numbers before sharing.</p>
        </section>

        {/* 7 ─ CAREER JOURNEY */}
        <section className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
          <SectionHead kicker="The Arc" title="Career" accentWord="Journey" />
          <div className="relative pl-6 md:pl-8">
            <div className="absolute left-0 md:left-1 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-fuchsia-500/10" />
            <div className="space-y-7">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div className="relative">
                    <span className={`absolute -left-[27px] md:-left-[35px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${t.future ? "bg-fuchsia-500/30 border-fuchsia-400" : "bg-[#050505] border-violet-400"}`} />
                    <p className={`text-xs font-mono font-bold tracking-widest ${t.future ? "text-fuchsia-300" : "text-violet-300"}`}>{t.year}</p>
                    <h3 className="text-base md:text-lg font-bold text-white mt-1">{t.title}</h3>
                    <p className="text-white/45 text-sm">{t.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8 ─ CURRENTLY LEARNING */}
        <section className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
          <SectionHead kicker="Always Improving" title="Currently" accentWord="Learning" />
          <div className="flex flex-wrap gap-3">
            {learning.map((l, i) => (
              <Reveal key={l} delay={i * 0.04}>
                <Chip icon={<Brain size={15} />}>{l}</Chip>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 9 ─ CONTACT / INTERESTED IN */}
        <section id="contact" className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
          <Reveal>
            <div className="glass-panel rounded-[2rem] p-8 md:p-12 border border-white/10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <SectionHead kicker="Let's Talk" title="Get in" accentWord="Touch" />
                  <a href="mailto:dhumalajinkya2004@gmail.com" className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white"><Mail size={18} /></span>
                    dhumalajinkya2004@gmail.com
                  </a>
                  <p className="flex items-center gap-3 text-white/55 mt-4">
                    <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-violet-300"><MapPin size={18} /></span>
                    Mumbai &amp; Bangalore, India
                  </p>
                  <div className="flex gap-3 mt-6">
                    <a href="https://github.com/Ajinkyaa2004" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/25 transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ajinkya-dhumal/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-white/25 transition-colors"><FaLinkedin /></a>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 mb-4">Interested In</p>
                  <div className="space-y-2.5">
                    {interestedIn.map((x) => (
                      <div key={x} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white/80 text-sm font-medium">
                        <Target size={15} className="text-violet-400 shrink-0" /> {x}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="px-6 py-10 text-center text-white/30 text-sm border-t border-white/[0.06]">
          Ajinkya Dhumal — Product · Analytics · Engineering &nbsp;|&nbsp;
          <a href="/" className="text-white/45 hover:text-white transition-colors">Full Stack Portfolio →</a>
        </footer>
      </main>
    </div>
  );
}
