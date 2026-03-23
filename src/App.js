import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import { FaGithub, FaLinkedin, FaCertificate, FaTrophy, FaJava, FaEnvelope, FaCode, FaServer, FaPaintBrush, FaProjectDiagram, FaRobot, FaChartLine, FaFutbol, FaBuilding, FaUserTie, FaIndustry } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiDrizzle, SiReact, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiFramer, SiSpringboot, SiCoursera, SiAdobe, SiGoogleanalytics, SiMysql, SiJirasoftware, SiFigma, SiAdobeillustrator, SiGithub, SiAdobephotoshop, SiCanva, SiTypescript, SiShadcnui, SiNodedotjs, SiExpress, SiFastapi, SiPostgresql, SiDocker, SiGit, SiPostman, SiJira, SiPython } from "react-icons/si";
import { DiJava, DiScrum } from "react-icons/di";
import { useInView } from "react-intersection-observer";
import { MdEmail, MdLocationOn, MdArrowOutward, MdWork } from "react-icons/md";
import { GraduationCap } from "lucide-react";

// Lazy load heavy Lottie components
const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((mod) => ({ default: mod.DotLottieReact }))
);

// Lazy load Lottie JSON — this was ~200KB+ loaded synchronously before
const loadLottieData = () => import("./lottie/DeveloperFrontEnd.json").then(m => m.default);

// Wrapper component that lazy-loads Lottie + its data together
const LazyHeroLottie = lazy(() =>
  Promise.all([import("lottie-react"), loadLottieData()]).then(([mod, data]) => ({
    default: () => <mod.default animationData={data} loop={true} className="w-full max-w-lg relative drop-shadow-2xl" />,
  }))
);

const certifications = [
  { title: "IBM Certified Professional – Product Management", provider: "Coursera", link: "https://drive.google.com/file/d/1U78P3fxtrH02S1PxM8HPSEYcpXzDNk2j/view?usp=sharing", detail: "Credential from IBM covering product lifecycle, strategy, and stakeholder management.", icon: <SiCoursera className="text-blue-500 text-xl" /> },
  { title: "Product Management Develop & Deliver New Product", provider: "Coursera", link: "https://drive.google.com/file/d/1lEzOWerwrLap2uGc234PWLgLQ_vEisx-/view?usp=sharing", detail: "5-course specialization on product foundations, collaboration, and delivery.", icon: <SiCoursera className="text-blue-500 text-xl" /> },
  { title: "Agile Development Scrum", provider: "Coursera", link: "https://drive.google.com/file/d/1T5fF2U1U4i_LdXPWI6bK6Dv9EW52UZHI/view?usp=sharing", detail: "Introduction to Agile Development and Scrum methodologies.", icon: <SiCoursera className="text-blue-500 text-xl" /> },
  { title: "Advanced Java Development", provider: "KR IT Education", link: "https://drive.google.com/file/d/11EMlyfIUH_Wc629dzXJ62CO4ZgPlCs7i/view?usp=sharing", detail: "Covers OOP, HTML, CSS, JS, Java fundamentals, and advanced Java with Spring Boot & Hibernate.", icon: <FaJava className="text-orange-500 text-xl" /> },
  { title: "Frontend Design (Web & Graphics)", provider: "Max Computer Education", link: "https://drive.google.com/file/d/1jbBIoY49OooMGb7Icz9TbGn58oZaYWiH/view?usp=sharing", detail: "Web design, Adobe Illustrator, and InDesign certification.", icon: <SiAdobe className="text-red-500 text-xl" /> },
  { title: "Data Analytics – Visualization", provider: "Infosys Springboard", link: "https://drive.google.com/file/d/1pL3v0s58DW3GXRuRMithG-VreLmOLCuB/view?usp=sharing", detail: "Data visualization and analytics foundations.", icon: <SiGoogleanalytics className="text-yellow-500 text-xl" /> },
];

const achievements = [
  { title: "Dizzy Hackers Hackathon", detail: "Led JUJUTSU CODERS to Top 5 among 60+ teams with a Decentralized Identity project.", badge: "Top 5 Finalist", link: "https://github.com/Ajinkyaa2004/ZenID-JUJUTSU-CODERS" },
  { title: "World Innovation Expo 2023", detail: "Vehicle Maintenance Index project ranked in Top 70 of 500+ entries.", badge: "Top 70 / 500", link: "https://drive.google.com/file/d/1aLjq3xezLE919ivxbxycRqn4CCuJr4zi/view?usp=sharing" },
  { title: "PAC HACK Volunteer", detail: "Coordinated and supported 200+ participants at national-level hackathon.", badge: "Volunteer", link: "#" },
  { title: "Final Year Project Lead", detail: "MediaMind-ML-360 Platform – leading a 3-member engineering team.", badge: "Team Lead", link: "https://github.com/Ajinkyaa2004/MediaMind-ML-360" },
];

const categories = [
  { title: "Product & PM", icon: <FaProjectDiagram />, skills: [
      { name: "Agile (Scrum/Kanban)", icon: <DiScrum className="text-orange-400" />, level: 85, learning: false },
      { name: "Product Roadmapping", icon: <SiFigma className="text-cyan-500" />, level: 78, learning: false },
      { name: "User Research", icon: <SiFigma className="text-pink-500" />, level: 75, learning: false },
      { name: "Competitive Analysis", icon: <SiFigma className="text-purple-500" />, level: 80, learning: false },
      { name: "Prototyping (Figma)", icon: <SiFigma className="text-yellow-400" />, level: 80, learning: true },
      { name: "Stakeholder Mgt", icon: <SiFigma className="text-blue-500" />, level: 80, learning: false },
      { name: "Google Analytics", icon: <SiGoogleanalytics className="text-orange-500" />, level: 80, learning: true }
    ],
  },
  { title: "Frontend Engineering", icon: <FaCode />, skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, level: 90, learning: false },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" />, level: 90, learning: false },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 90, learning: true },
      { name: "React", icon: <SiReact className="text-cyan-400" />, level: 88, learning: false },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 75, learning: false },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 85, learning: false },
    ],
  },
  { title: "System Architecture", icon: <FaServer />, skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" />, level: 70, learning: true },
      { name: "REST APIs", icon: <SiReact className="text-indigo-400" />, level: 80, learning: false },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: 78, learning: false },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 85, learning: false },
      { name: "Drizzle ORM", icon: <SiDrizzle className="text-emerald-400" />, level: 90, learning: true },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 90, learning: false },
    ],
  },
  { title: "Design & Workflow", icon: <FaPaintBrush />, skills: [
      { name: "GitHub", icon: <SiGithub className="text-white" />, level: 85, learning: false },
      { name: "Jira / Notion", icon: <SiJirasoftware className="text-blue-500" />, level: 80, learning: false },
      { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 80, learning: false },
      { name: "Canva", icon: <SiCanva className="text-blue-500" />, level: 82, learning: false },
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" />, level: 65, learning: false },
      { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" />, level: 60, learning: true },
    ],
  },
];

const AnimatedProgress = ({ level, colorClass = "from-cyan-400 to-blue-500" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    let rafId;
    const step = () => {
      start += 2; // increment by 2 for fewer frames (was 1 every 15ms = ~67 frames, now ~50 frames via rAF)
      if (start >= level) {
        setValue(level);
        return;
      }
      setValue(start);
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, level]);

  return (
    <div ref={ref} className="w-full mt-auto pt-2 group-hover/skill:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-white/30 tracking-widest uppercase font-semibold">Proficiency</span>
        <span className="text-xs font-mono font-bold text-white/90 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">{value} / 100</span>
      </div>
      <div className="w-full bg-[#050505] rounded-full h-1.5 border border-white/5 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : "0%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${colorClass}`}
          style={{ willChange: "width" }}
        />
      </div>
    </div>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [lowPerfMode, setLowPerfMode] = useState(false);
  const timelineRef = useRef(null);
  const timelineTrackRef = useRef(null);
  const { scrollYProgress: timelineScroll } = useScroll({ target: timelineTrackRef, offset: ["start center", "end center"] });
  const timelineHeight = useTransform(timelineScroll, [0, 1], ["0%", "100%"]);
  const timelineGlowYRaw = useTransform(timelineScroll, [0, 1], ["2%", "98%"]);
  const timelineGlowY = useSpring(timelineGlowYRaw, lowPerfMode ? { damping: 26, mass: 0.6, stiffness: 120 } : { damping: 15, mass: 0.3, stiffness: 80 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePerfMode = () => {
      const prefersReduced = mediaQuery.matches;
      const lowCpu = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
      const lowMemory = typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4;
      const smallViewport = window.innerWidth < 1024;
      setLowPerfMode(prefersReduced || (smallViewport && (lowCpu || lowMemory)));
    };

    updatePerfMode();
    mediaQuery.addEventListener("change", updatePerfMode);
    window.addEventListener("resize", updatePerfMode, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", updatePerfMode);
      window.removeEventListener("resize", updatePerfMode);
    };
  }, []);

  return (
    <div className="font-sans min-h-screen relative overflow-hidden bg-[#050505] text-slate-200 selection:bg-indigo-500/30 selection:text-white">
      {/* Dynamic Background Noise/Gradient — inline, no external fetch */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 noise-texture"></div>
      
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Navbar />
          <main role="main">

          {/* Ambient Background Orbs — reduced blur for GPU perf */}
          {!lowPerfMode && (
            <>
              <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full filter blur-[80px] pointer-events-none animate-pulse-slow"></div>
              <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full filter blur-[80px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              <div className="fixed top-[40%] left-[20%] w-[30vw] h-[30vw] bg-purple-600/15 rounded-full filter blur-[80px] pointer-events-none animate-blob"></div>
            </>
          )}

          {/* Hero Section */}
          <section id="hero" aria-label="Introduction" className="relative min-h-[100dvh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 z-10 pt-28 pb-12 md:py-0" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}>
            <div className="flex-1 flex flex-col items-start px-4 md:px-10 justify-center space-y-6 z-20 w-full max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-medium text-white/70 tracking-wide uppercase">Open to Opportunities</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
              >
                Hi! I’m <br/>
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 text-transparent bg-clip-text">Ajinkya.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg text-white/60 leading-relaxed font-light max-w-xl"
              >
                Fullstack Web Developer & Aspiring Product Manager bridging the gap between <strong className="text-white/90">engineering</strong> and <strong className="text-white/90">product strategy</strong>.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a href="#projects" aria-label="View featured projects" className="group relative px-6 py-3 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-2">Explore Work <MdArrowOutward /></span>
                </a>
                
                <div className="flex items-center gap-4 ml-2" role="list" aria-label="Social links">
                  {[
                    { icon: FaGithub, href: "https://github.com/Ajinkyaa2004", color: "hover:text-white", label: "GitHub Profile" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ajinkya842004/", color: "hover:text-blue-400", label: "LinkedIn Profile" },
                    { icon: FaEnvelope, href: "mailto:dhumalajinkya2004@gmail.com", color: "hover:text-red-400", label: "Send Email" }
                  ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className={`text-white/50 transition-colors duration-300 ${item.color} p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20 hover:bg-white/10`}>
                      <item.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="flex-1 flex justify-center items-center mt-12 md:mt-0 z-10 relative"
            >
              {!lowPerfMode && <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>}
              {lowPerfMode ? (
                <div className="w-full max-w-lg aspect-square rounded-full bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-cyan-500/15 border border-white/10" />
              ) : (
                <Suspense fallback={<div className="w-full max-w-lg aspect-square rounded-full bg-white/5 border border-white/10" />}>
                  <LazyHeroLottie />
                </Suspense>
              )}
            </motion.div>
          </section>

          {/* About / Bento Grid */}
          <section id="about" aria-label="About Ajinkya Dhumal" className="relative min-h-screen py-20 md:py-28 px-6 md:px-20 z-10 max-w-6xl mx-auto" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1100px" }}>
            {/* Section-level floating decorative orbs */}
            <div className="absolute -top-32 -right-32 w-72 h-72 bg-teal-600/15 rounded-full blur-[60px] pointer-events-none animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-[70px] pointer-events-none animate-pulse-slow"></div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="mb-10">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "60px" }} 
                  transition={{ duration: 0.8, delay: 0.3 }} 
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-green-400 rounded-full mb-4"
                />
                <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 uppercase mb-3">About me</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                  Glimpse into my <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-transparent bg-clip-text">world</span>.
                </h3>
                <p className="text-white/40 text-sm md:text-base mt-3 max-w-lg">A snapshot of who I am, what drives me, and the tech I breathe every day.</p>
              </div>

              {/* Bento Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[220px]">
                {/* Main Intro */}
                <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} whileHover={{ y: -4, scale: 1.01 }} className="md:col-span-2 md:row-span-2 glass-panel hover-glass-panel rounded-3xl p-6 md:p-10 flex flex-col justify-between group overflow-hidden relative border border-white/10 hover:border-teal-500/50 transition-all duration-500 shadow-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/30 rounded-full blur-[60px] animate-pulse-slow" />
                  <div className="absolute inset-0 noise-texture opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4">Crafting code with purpose.</h4>
                      <p className="text-white/70 leading-relaxed text-base max-w-xl">
                        I'm a final-year CS (AI/ML) student at Presidency University. I specialize in the modern web stack, specifically React ecosystems, delivering responsive and extremely robust interfaces. 
                        <br/><br/>
                        Beyond aesthetics, my true passion lies in Product Management—defining roadmaps, structuring features, and delivering solutions that solve real-world problems.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-8">
                       <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div> {'<React.js />'}</span>
                       <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-75"></div> {'<Next.js />'}</span>
                       <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-150"></div> {'<Node.js />'}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Hackathon Widget */}
                <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} whileHover={{ y: -4, scale: 1.01 }} className="glass-panel hover-glass-panel rounded-3xl p-6 flex flex-col items-start justify-end relative overflow-hidden group border border-white/10 hover:border-yellow-500/50 transition-all duration-500 shadow-lg">
                  <div className="absolute -right-4 -top-4 text-8xl opacity-30 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                    🏆
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 w-full">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-white font-bold text-xl">Hackathon Champ</h4>
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                      </span>
                    </div>
                    <p className="text-white/60 text-sm font-medium">Ranked in the Top 5 / 60+ teams at the Dizzy Hackers National Hackathon.</p>
                  </div>
                </motion.div>

                {/* Tech Stack Marquee Widget */}
                <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} whileHover={{ y: -4, scale: 1.01 }} className="glass-panel hover-glass-panel rounded-3xl p-6 flex flex-col justify-center items-center relative overflow-hidden group border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Infinite scroll track */}
                  <div
                    className="relative z-10 self-stretch w-full overflow-hidden py-2 opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                      WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                  >
                     <motion.div 
                        animate={{ x: ["0%", "-50%"] }} 
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex w-max gap-8 items-center whitespace-nowrap"
                     >
                       <SiReact className="text-cyan-400 drop-shadow-md text-3xl" />
                       <SiNextdotjs className="text-white drop-shadow-md text-3xl" />
                       <SiTypescript className="text-blue-500 drop-shadow-md text-3xl" />
                       <SiJavascript className="text-yellow-400 drop-shadow-md text-3xl" />
                       <SiTailwindcss className="text-sky-400 drop-shadow-md text-3xl" />
                       <SiShadcnui className="text-white drop-shadow-md text-3xl" />

                       <SiNodedotjs className="text-green-500 drop-shadow-md text-3xl" />
                       <SiExpress className="text-gray-400 drop-shadow-md text-3xl" />
                       <SiFastapi className="text-green-400 drop-shadow-md text-3xl" />
                       <SiSpringboot className="text-green-600 drop-shadow-md text-3xl" />

                       <SiPostgresql className="text-blue-400 drop-shadow-md text-3xl" />
                       <SiMongodb className="text-green-500 drop-shadow-md text-3xl" />
                       <SiMysql className="text-blue-600 drop-shadow-md text-3xl" />
                       <SiFirebase className="text-yellow-500 drop-shadow-md text-3xl" />

                       <SiDocker className="text-blue-500 drop-shadow-md text-3xl" />
                       <SiGit className="text-orange-500 drop-shadow-md text-3xl" />
                       <SiGithub className="text-white drop-shadow-md text-3xl" />
                       <SiPostman className="text-orange-400 drop-shadow-md text-3xl" />

                       <SiFigma className="text-pink-500 drop-shadow-md text-3xl" />
                       <SiJira className="text-blue-500 drop-shadow-md text-3xl" />

                       <SiPython className="text-yellow-300 drop-shadow-md text-3xl" />
                       <DiJava className="text-red-500 drop-shadow-md text-3xl" />

                       {/* Duplicate for seamless loop */}
                       <SiReact className="text-cyan-400 drop-shadow-md text-3xl" />
                       <SiNextdotjs className="text-white drop-shadow-md text-3xl" />
                       <SiTypescript className="text-blue-500 drop-shadow-md text-3xl" />
                       <SiJavascript className="text-yellow-400 drop-shadow-md text-3xl" />
                       <SiTailwindcss className="text-sky-400 drop-shadow-md text-3xl" />
                       <SiShadcnui className="text-white drop-shadow-md text-3xl" />

                       <SiNodedotjs className="text-green-500 drop-shadow-md text-3xl" />
                       <SiExpress className="text-gray-400 drop-shadow-md text-3xl" />
                       <SiFastapi className="text-green-400 drop-shadow-md text-3xl" />
                       <SiSpringboot className="text-green-600 drop-shadow-md text-3xl" />

                       <SiPostgresql className="text-blue-400 drop-shadow-md text-3xl" />
                       <SiMongodb className="text-green-500 drop-shadow-md text-3xl" />
                       <SiMysql className="text-blue-600 drop-shadow-md text-3xl" />
                       <SiFirebase className="text-yellow-500 drop-shadow-md text-3xl" />

                       <SiDocker className="text-blue-500 drop-shadow-md text-3xl" />
                       <SiGit className="text-orange-500 drop-shadow-md text-3xl" />
                       <SiGithub className="text-white drop-shadow-md text-3xl" />
                       <SiPostman className="text-orange-400 drop-shadow-md text-3xl" />

                       <SiFigma className="text-pink-500 drop-shadow-md text-3xl" />
                       <SiJira className="text-blue-500 drop-shadow-md text-3xl" />

                       <SiPython className="text-yellow-300 drop-shadow-md text-3xl" />
                       <DiJava className="text-red-500 drop-shadow-md text-3xl" />
                     </motion.div>
                  </div>
                  <p className="text-white text-xs mt-8 tracking-widest uppercase font-bold relative z-10 bg-[#050505] px-5 py-2 rounded-full border border-white/10 group-hover:border-white/30 transition-colors shadow-xl">Core Stack</p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Education Timeline */}
          <section id="education" aria-label="Experience and Education Timeline" className="relative py-20 md:py-28 px-6 md:px-20 z-10 max-w-6xl mx-auto" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1200px" }}>
            {/* Section-level floating decorative orbs */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-amber-600/15 rounded-full blur-[60px] pointer-events-none animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-[70px] pointer-events-none animate-pulse-slow"></div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="flex flex-col md:flex-row gap-12 items-start" ref={timelineRef}>
                <div className="w-full md:w-1/3 sticky top-32">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "60px" }} 
                    transition={{ duration: 0.8, delay: 0.3 }} 
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 rounded-full mb-4"
                  />
                  <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 uppercase mb-3">Timeline</h2>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Experience & <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">Education</span>
                  </h3>
                  <p className="text-white/40 text-sm md:text-base cursor-default">My formal path in professional tech roles and computer science.</p>
                </div>

                <div ref={timelineTrackRef} className="w-full md:w-2/3 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-white/10 before:rounded-full py-4">
                  <motion.div 
                    className="absolute top-0 left-5 md:left-1/2 w-1.5 bg-gradient-to-b from-amber-400 via-orange-500 to-yellow-500 -translate-x-[2.5px] md:-translate-x-1/2 z-0 rounded-full"
                    style={{ height: timelineHeight, boxShadow: "0 0 25px rgba(251,146,60,0.8), 0 0 60px rgba(251,146,60,0.3)" }}
                  />
                  <motion.div
                    className="absolute left-5 md:left-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-yellow-400 shadow-[0_0_18px_rgba(251,146,60,0.9),0_0_40px_rgba(251,146,60,0.45)]"
                    style={{ top: timelineGlowY }}
                  />
                  {[ 
                    { isWork: true, year: "Nov 2025 – Present", title: "Full Stack Developer Intern", place: "Insight Fusion Analytics · Remote", desc: "Built scalable web apps with React.js, Next.js, Node.js. Designed PostgreSQL incremental ETL pipelines for a football platform. Contributed to AI-driven hiring evaluation systems. Collaborated in Agile workflows." },
                    { isWork: false, year: "2021 – 2026", title: "B.Tech in CSE (AI & ML)", place: "Presidency University, Bangalore", desc: "Pursuing Engineering with specialization in AI and Machine Learning." },
                    { isWork: false, year: "2019 – 2021", title: "Junior College (Science)", place: "Shri T.P Bhatia College of Science", desc: "Focused on core science subjects laying foundation for engineering." },
                    { isWork: false, year: "2008 – 2019", title: "Schooling", place: "St. Lawrence High School, Mumbai", desc: "Active in academics and various regional extracurricular activities." },
                  ].map((edu, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group z-10 w-full mb-8">
                      <motion.div 
                        initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}
                        className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${edu.isWork ? 'border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(251,146,60,0.5)] group-hover:bg-amber-500/20 group-hover:shadow-[0_0_25px_rgba(251,146,60,0.8)]' : 'border-orange-500/50 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.8)] group-hover:bg-orange-500/20'} bg-[#050505] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 relative z-20`}
                      >
                         {edu.isWork ? <MdWork size={20} className="relative z-10" /> : <GraduationCap size={20} className="relative z-10" />}
                      </motion.div>
                      <motion.div 
                        whileHover={{ y: -3, scale: 1.015 }}
                        className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-5 md:p-6 rounded-3xl relative border-l-4 border-l-transparent ${edu.isWork ? 'group-hover:border-l-amber-400' : 'group-hover:border-l-orange-400'} transition-all duration-500 shadow-xl`}
                      >
                        {/* Shimmer overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-3xl"></div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${edu.isWork ? 'from-amber-500/0 via-amber-500/0 to-amber-500/10' : 'from-orange-500/0 via-orange-500/0 to-orange-500/10'} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl duration-500`}></div>
                        {/* Glow blob */}
                        <div className={`absolute -top-12 -right-12 w-28 h-28 ${edu.isWork ? 'bg-amber-500/10' : 'bg-orange-500/10'} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                        <span className={`font-mono text-xs md:text-sm ${edu.isWork ? 'text-amber-400' : 'text-orange-400'} mb-2 block relative z-10 font-bold tracking-wide`}>{edu.year}</span>
                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 relative z-10">{edu.title}</h4>
                        <span className="text-sm text-white/70 block mb-3 relative z-10 font-medium">{edu.place}</span>
                        <p className="text-xs md:text-sm text-white/50 leading-relaxed relative z-10">{edu.desc}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Projects Gallery */}
          <section id="projects" aria-label="Featured Projects Portfolio" className="relative py-20 md:py-28 px-6 md:px-20 z-10 w-full max-w-6xl mx-auto" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1100px" }}>
            {/* Section-level floating decorative orbs */}
            <div className="absolute -top-32 -right-32 w-72 h-72 bg-blue-600/15 rounded-full blur-[60px] pointer-events-none animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[70px] pointer-events-none animate-pulse-slow"></div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="flex justify-between items-end mb-12">
                <div>
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "60px" }} 
                    transition={{ duration: 0.8, delay: 0.3 }} 
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full mb-4"
                  />
                  <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 uppercase mb-3">Portfolio</h2>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                    Featured <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 text-transparent bg-clip-text">Projects</span>.
                  </h3>
                  <p className="text-white/40 text-sm md:text-base mt-3 max-w-lg">A showcase of production-grade apps and platforms I've engineered.</p>
                </div>
                <a href="https://github.com/Ajinkyaa2004" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors bg-white/5 px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/10 relative group text-sm font-medium">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform origin-center"></div>
                  <span className="relative z-10 flex items-center gap-2">View all 30+ repos on GitHub <MdArrowOutward /></span>
                </a>
              </div>

              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[ 
                  { title: "NexPrep AI", tag: "AI Platform", desc: "Mock interview platform simulating human voices with real-time feedback & ATS checker.", 
                    tech: [{Icon: SiNextdotjs, color: "text-white"}, {Icon: SiReact, color: "text-[#61DAFB]"}, {Icon: SiFirebase, color: "text-[#FFCA28]"}, {Icon: SiMongodb, color: "text-[#47A248]"}], 
                    bgIcon: FaRobot,
                    gh: "https://nexprep-ai.vercel.app/", demo: "https://nexprep-ai.vercel.app/", theme: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] glow-blue", textGlow: "group-hover:text-blue-400" },
                  { title: "Smart Algo Trade", tag: "FinTech", desc: "Production algorithmic trading platform for Indian Stock Market via Kite Connect API.", 
                    tech: [{Icon: SiReact, color: "text-[#61DAFB]"}, {Icon: SiTailwindcss, color: "text-[#38B2AC]"}, {Icon: SiFramer, color: "text-[#0055FF]"}, {Icon: SiMongodb, color: "text-[#47A248]"}], 
                    bgIcon: FaChartLine,
                    gh: "https://github.com/Ajinkyaa2004/Smart-Algo-Trading", demo: "https://github.com/Ajinkyaa2004/Smart-Algo-Trading", theme: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] glow-emerald", textGlow: "group-hover:text-emerald-400" },
                  { title: "CopaScore AI", tag: "Analytics", desc: "Advanced football analytics using SportsMonk API & GROQ LLM for live predictions.", 
                    tech: [{Icon: SiNextdotjs, color: "text-white"}, {Icon: SiReact, color: "text-[#61DAFB]"}, {Icon: SiTailwindcss, color: "text-[#38B2AC]"}], 
                    bgIcon: FaFutbol,
                    gh: "https://copascore-with-llm.onrender.com/", demo: "https://copascore-with-llm.onrender.com/", theme: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] glow-orange", textGlow: "group-hover:text-orange-400" },
                  { title: "Godrej Properties", tag: "Enterprise", desc: "High-performance real estate landing platform for lead generation & robust scheduling APIs.", 
                    tech: [{Icon: SiNextdotjs, color: "text-white"}, {Icon: SiReact, color: "text-[#61DAFB]"}, {Icon: SiTailwindcss, color: "text-[#38B2AC]"}], 
                    bgIcon: FaBuilding,
                    gh: "https://www.godrejreserve.org.in/", demo: "https://www.godrejreserve.org.in/", theme: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] glow-purple", textGlow: "group-hover:text-purple-400" },
                  { title: "Skillquest IFA", tag: "Enterprise", desc: "Gamified hiring platform evaluating real cognitive and problem-solving skills.", 
                    tech: [{Icon: SiNextdotjs, color: "text-white"}, {Icon: SiReact, color: "text-[#61DAFB]"}, {Icon: SiTailwindcss, color: "text-[#38B2AC]"}], 
                    bgIcon: FaUserTie,
                    gh: "https://ifa-hiring-platform.vercel.app", demo: "https://ifa-hiring-platform.vercel.app", theme: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] glow-cyan", textGlow: "group-hover:text-cyan-400" },
                  { title: "Max Extrusions", tag: "B2B Website", desc: "Production-ready B2B corporate website with optimized product catalog & infrastructure.", 
                    tech: [{Icon: SiNextdotjs, color: "text-white"}, {Icon: SiReact, color: "text-[#61DAFB]"}, {Icon: SiTailwindcss, color: "text-[#38B2AC]"}, {Icon: SiFramer, color: "text-[#0055FF]"}], 
                    bgIcon: FaIndustry,
                    gh: "https://www.maxextrusions.com/", demo: "https://www.maxextrusions.com/", theme: "hover:border-slate-400/50 hover:shadow-[0_0_30px_rgba(148,163,184,0.15)] glow-slate", textGlow: "group-hover:text-slate-300" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    className={`glass-panel rounded-3xl p-6 flex flex-col group relative overflow-hidden border border-white/5 transition-all duration-500 ${item.theme}`}
                  >
                    {/* Shimmer overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-3xl z-[1]"></div>

                    {/* Background Icon Watermark */}
                    <div className="absolute -bottom-6 -right-6 text-[12rem] text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-700 pointer-events-none z-0">
                      <item.bgIcon />
                    </div>

                    {/* Minimalist Tech Background Pattern */}
                    <div className="absolute inset-0 noise-texture opacity-10 pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="flex gap-2">
                        {item.tech.map((techItem, i) => (
                           <div key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors shadow-sm">
                             <techItem.Icon className={`${techItem.color} opacity-70 group-hover:opacity-100 transition-opacity text-sm drop-shadow-md`} />
                           </div>
                        ))}
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 border border-white/10 px-2.5 py-1 rounded-full">{item.tag}</span>
                    </div>
                    
                    <div className="relative z-10 flex-grow">
                      <h4 className={`text-xl font-bold text-white mb-3 transition-colors duration-300 ${item.textGlow}`}>
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed mb-6 font-medium">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="relative z-10 mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                      <a href={item.demo} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full text-white/70 group-hover:text-white transition-colors text-sm font-semibold">
                        <span>Live Project</span>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all duration-300 group-hover:-translate-y-1">
                          <MdArrowOutward />
                        </div>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center md:hidden">
                <a href="https://github.com/Ajinkyaa2004" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full border border-white/10">
                   GitHub <MdArrowOutward />
                </a>
              </div>
            </motion.div>
          </section>

          {/* Skills Grid */}
          <section id="skills" aria-label="Technical Skills and Capabilities" className="relative py-20 md:py-28 px-6 md:px-20 z-10 w-full max-w-6xl mx-auto" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1300px" }}>
             {/* Section-level floating decorative orbs */}
             <div className="absolute -top-32 -left-32 w-72 h-72 bg-rose-600/15 rounded-full blur-[60px] pointer-events-none animate-blob"></div>
             <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-600/10 rounded-full blur-[70px] pointer-events-none animate-pulse-slow"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[80px] pointer-events-none"></div>

             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="mb-14 relative">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "60px" }} 
                  transition={{ duration: 0.8, delay: 0.3 }} 
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-400 rounded-full mb-4"
                />
                <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400 uppercase mb-3">Capabilities</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                  Technical <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 text-transparent bg-clip-text">Arsenal</span>.
                </h3>
                <p className="text-white/40 text-sm md:text-base mt-3 max-w-lg">The tools, frameworks, and methodologies I wield to build world-class products.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, idx) => {
                  const colors = [
                    "from-blue-500 to-cyan-400",
                    "from-emerald-400 to-teal-500",
                    "from-orange-400 to-red-500",
                    "from-purple-500 to-pink-500",
                    "from-cyan-400 to-blue-500",
                    "from-slate-300 to-slate-500"
                  ];
                  const glows = [
                    "group-hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-blue-500/10",
                    "group-hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-emerald-500/10",
                    "group-hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] bg-orange-500/10",
                    "group-hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] bg-purple-500/10",
                    "group-hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-cyan-500/10",
                    "group-hover:border-slate-500/50 hover:shadow-[0_0_30px_rgba(148,163,184,0.15)] bg-slate-500/10"
                  ];
                  
                  return (
                    <motion.div 
                       whileHover={{ y: -6 }}
                       transition={{ type: 'spring', stiffness: 300 }}
                       key={idx} 
                       className={`glass-panel rounded-[2rem] p-6 flex flex-col group relative overflow-hidden border border-white/5 transition-all duration-300 ${glows[idx].split(' ')[0]} ${glows[idx].split(' ')[1]}`}
                    >
                      {/* Background Icon Watermark */}
                      <div className="absolute -bottom-8 -right-8 text-[12rem] text-white opacity-[0.02] group-hover:opacity-[0.04] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none z-0">
                        {cat.icon}
                      </div>

                      {/* Subtle Glow Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-0 ${glows[idx].split(' ')[2]}`}></div>
  
                      <div className="flex items-center gap-4 mb-8 text-white text-xl relative z-10 border-b border-white/5 pb-5">
                         <div className="text-white p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-sm">{cat.icon}</div>
                         <h4 className="font-bold tracking-wide">{cat.title}</h4>
                      </div>
  
                      <div className="space-y-6 relative z-10 w-full flex-grow">
                        {cat.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="w-full flex flex-col group/skill mt-2">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2.5">
                                <span className="text-lg text-white/50 group-hover/skill:text-white group-hover/skill:scale-110 group-hover/skill:-translate-y-0.5 transition-all duration-300">{skill.icon}</span>
                                <span className="text-sm font-semibold text-white/70 group-hover/skill:text-white transition-colors">{skill.name}</span>
                              </div>
                              {skill.learning && (
                                <span className="text-[9px] font-mono uppercase tracking-widest bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded-full border border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.1)]">Learning</span>
                              )}
                            </div>
                            <AnimatedProgress level={skill.level} colorClass={colors[idx]} />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Animated Grid Filler Widget (Spans remaining columns) */}
                <motion.div 
                   whileHover={{ y: -6 }}
                   transition={{ type: 'spring', stiffness: 300 }}
                   className="lg:col-span-2 glass-panel rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between group relative overflow-hidden border border-white/5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-gradient-to-br from-cyan-500/5 to-blue-600/5"
                >
                  {/* Subtle Glow Overlay */}
                  <div className="absolute inset-0 noise-texture opacity-10 pointer-events-none mix-blend-overlay z-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-0"></div>
                  <div className="absolute -top-48 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[80px] opacity-40 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-0"></div>

                  <div className="relative z-10 w-full md:w-1/2 space-y-5">
                     <div className="flex items-center gap-3 mb-2">
                       <span className="relative flex h-3 w-3">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                       </span>
                       <h4 className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.2)]">Live Environment</h4>
                     </div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Constantly learning, building, and scaling.</h3>
                     <p className="text-white/50 text-sm leading-relaxed max-w-sm">Every day is an opportunity to explore architecture, optimize algorithms, and push robust enterprise-grade code into production.</p>
                     <div className="pt-2">
                       <a href="https://github.com/Ajinkyaa2004" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold bg-white text-black px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                         <FaGithub className="text-lg" /> Explore GitHub
                       </a>
                     </div>
                  </div>
                  
                  <div className="relative z-10 w-full md:w-1/2 flex justify-center mt-6 md:mt-0 opacity-90 group-hover:opacity-100 group-hover:scale-[1.15] drop-shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-700">
                     {lowPerfMode ? (
                       <div className="w-full max-w-[420px] aspect-square rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-white/10" />
                     ) : (
                       <Suspense fallback={<div className="w-full max-w-[420px] aspect-square rounded-full bg-white/5 border border-white/10" />}>
                         <DotLottieReact src="/lottie/Assistant-Bot.lottie" loop autoplay className="w-full max-w-[420px] scale-110" />
                       </Suspense>
                     )}
                  </div>
                </motion.div>
              </div>
             </motion.div>
          </section>

          {/* Achievements & Certifications — Premium Redesign */}
           <section id="achievements" aria-label="Achievements and Certifications" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-20 z-10 w-full max-w-6xl mx-auto" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1300px" }}>
             {/* Section-level floating decorative orbs */}
             <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-600/15 rounded-full blur-[60px] pointer-events-none animate-blob"></div>
             <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[70px] pointer-events-none animate-pulse-slow"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              {/* Section Header with animated accent */}
              <div className="mb-10 sm:mb-14 relative">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "60px" }} 
                  transition={{ duration: 0.8, delay: 0.3 }} 
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full mb-4"
                />
                <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 uppercase mb-3">Milestones</h2>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Growth & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">Accolades</span>.
                </h3>
                <p className="text-white/40 text-sm md:text-base mt-3 max-w-lg leading-relaxed">A curated collection of certifications earned and milestones achieved on my journey.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                 {/* Certifications Column */}
                 <div className="space-y-5">
                   <motion.h4 
                     initial={{ opacity: 0, x: -20 }} 
                     whileInView={{ opacity: 1, x: 0 }} 
                     transition={{ duration: 0.5 }}
                     viewport={{ once: true }}
                     className="text-lg md:text-xl font-bold text-white/90 flex flex-wrap items-center gap-3 mb-6 md:mb-7"
                   >
                     <div className="p-2.5 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                       <FaCertificate className="text-indigo-400 text-lg"/>
                     </div>
                     <span>Certifications</span>
                     <span className="w-full sm:w-auto sm:ml-auto text-[11px] font-mono text-white/30 bg-white/5 px-3 py-1 rounded-full border border-white/10">{certifications.length} earned</span>
                   </motion.h4>
                   
                   {certifications.map((cert, idx) => (
                     <motion.a 
                       href={cert.link} 
                       target="_blank" 
                       rel="noreferrer" 
                       key={idx}
                       initial={{ opacity: 0, y: 20, scale: 0.97 }}
                       whileInView={{ opacity: 1, y: 0, scale: 1 }}
                       transition={{ duration: 0.5, delay: idx * 0.08 }}
                       viewport={{ once: true }}
                       whileHover={{ y: -3, scale: 1.015 }}
                       className="milestone-card block p-4 sm:p-5 rounded-2xl group relative overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-500"
                     >
                       {/* Shimmer overlay on hover */}
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                       
                       {/* Gradient accent line on left */}
                       <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                       
                       {/* Glow blob */}
                       <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                       
                       <div className="flex items-start sm:items-center justify-between relative z-10">
                         <div className="flex gap-4 items-center min-w-0">
                           {/* Numbered Index Badge */}
                           <div className="relative flex-shrink-0">
                             <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-xl border border-white/10 flex items-center justify-center group-hover:border-indigo-500/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-500">
                               {cert.icon}
                             </div>
                             <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow-[0_0_10px_rgba(99,102,241,0.5)] border border-indigo-400/50">
                               {idx + 1}
                             </div>
                           </div>
                           <div className="min-w-0">
                             <h5 className="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all duration-300 text-sm sm:text-base leading-snug break-words">{cert.title}</h5>
                             <p className="text-xs text-white/40 mt-0.5 flex items-center gap-1.5">
                               <span className="w-1 h-1 rounded-full bg-indigo-500/60"></span>
                               {cert.provider}
                             </p>
                           </div>
                         </div>
                         <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/[0.04] items-center justify-center group-hover:bg-indigo-500/20 group-hover:text-indigo-300 text-white/20 transition-all duration-300 flex-shrink-0 ml-3 group-hover:rotate-45">
                           <MdArrowOutward className="text-sm" />
                         </div>
                       </div>
                     </motion.a>
                   ))}
                 </div>

                 {/* Achievements Column */}
                 <div className="space-y-5">
                   <motion.h4 
                     initial={{ opacity: 0, x: -20 }} 
                     whileInView={{ opacity: 1, x: 0 }} 
                     transition={{ duration: 0.5, delay: 0.1 }}
                     viewport={{ once: true }}
                     className="text-lg md:text-xl font-bold text-white/90 flex flex-wrap items-center gap-3 mb-6 md:mb-7"
                   >
                     <div className="p-2.5 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                       <FaTrophy className="text-yellow-500 text-lg"/>
                     </div>
                     <span>Achievements</span>
                     <span className="w-full sm:w-auto sm:ml-auto text-[11px] font-mono text-white/30 bg-white/5 px-3 py-1 rounded-full border border-white/10">{achievements.length} unlocked</span>
                   </motion.h4>
                   
                   {achievements.map((ach, idx) => {
                     const badgeStyles = [
                       "from-yellow-500/20 to-amber-500/20 text-yellow-300 border-yellow-500/40 shadow-[0_0_15px_rgba(234,179,8,0.15)]",
                       "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                       "from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
                       "from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.15)]",
                     ];
                     const hoverBorders = [
                       "hover:border-yellow-500/40",
                       "hover:border-cyan-500/40",
                       "hover:border-emerald-500/40",
                       "hover:border-pink-500/40",
                     ];
                     const glowColors = [
                       "bg-yellow-500/10",
                       "bg-cyan-500/10",
                       "bg-emerald-500/10",
                       "bg-pink-500/10",
                     ];
                     const textHovers = [
                       "group-hover:from-yellow-300 group-hover:to-amber-200",
                       "group-hover:from-cyan-300 group-hover:to-blue-200",
                       "group-hover:from-emerald-300 group-hover:to-green-200",
                       "group-hover:from-pink-300 group-hover:to-rose-200",
                     ];

                     return (
                       <motion.a 
                         href={ach.link} 
                         target="_blank" 
                         rel="noreferrer" 
                         key={idx}
                         initial={{ opacity: 0, y: 20, scale: 0.97 }}
                         whileInView={{ opacity: 1, y: 0, scale: 1 }}
                         transition={{ duration: 0.5, delay: idx * 0.1 }}
                         viewport={{ once: true }}
                         whileHover={{ y: -4, scale: 1.015 }}
                         className={`milestone-card block p-4 sm:p-5 md:p-6 rounded-2xl group relative overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl ${hoverBorders[idx]} transition-all duration-500`}
                       >
                         {/* Shimmer overlay */}
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                         
                         {/* Corner glow blob */}
                         <div className={`absolute -bottom-16 -right-16 w-36 h-36 ${glowColors[idx]} rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                         
                         {/* Subtle background pattern */}
                         <div className="absolute inset-0 noise-texture opacity-[0.03] pointer-events-none mix-blend-overlay rounded-2xl"></div>

                         <div className="flex flex-col gap-3 relative z-10">
                           <div className="flex justify-between items-start">
                              <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${badgeStyles[idx]} border px-3 py-1.5 rounded-full whitespace-nowrap backdrop-blur-sm`}
                              >
                                {ach.badge}
                              </motion.span>
                              <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/[0.04] items-center justify-center group-hover:bg-white/10 text-white/20 group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:rotate-45">
                                <MdArrowOutward className="text-sm" />
                              </div>
                           </div>
                           <h5 className={`font-bold text-white text-[15px] sm:text-base md:text-lg mt-1 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${textHovers[idx]} transition-all duration-300`}>{ach.title}</h5>
                           <p className="text-xs md:text-sm text-white/40 leading-relaxed">{ach.detail}</p>
                           
                           {/* Bottom accent bar */}
                           <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-1 group-hover:via-white/20 transition-all duration-500"></div>
                         </div>
                       </motion.a>
                     );
                   })}
                 </div>
              </div>
             </motion.div>
           </section>

          {/* Contact Section */}
          <section id="contact" aria-label="Contact Information" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-20 z-10 w-full max-w-6xl mx-auto mb-10" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1000px" }}>
            {/* Section-level floating decorative orbs */}
            <div className="absolute -top-32 -right-32 w-72 h-72 bg-sky-600/15 rounded-full blur-[60px] pointer-events-none animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[70px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="glass-panel rounded-[1.75rem] md:rounded-[2rem] p-4 sm:p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 relative overflow-hidden border border-white/[0.06] hover:border-sky-500/30 transition-all duration-700">
                {/* Multiple glow blobs */}
                <div className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-sky-600/10 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute bottom-[-15%] left-[-5%] w-[30vw] h-[30vw] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none"></div>
                {/* Noise texture */}
                <div className="absolute inset-0 noise-texture opacity-[0.03] pointer-events-none mix-blend-overlay rounded-[2rem]"></div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-between relative z-10">
                  <div>
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: "60px" }} 
                      transition={{ duration: 0.8, delay: 0.3 }} 
                      viewport={{ once: true }}
                      className="h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 rounded-full mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                      Let's <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 text-transparent bg-clip-text">Connect</span>.
                    </h2>
                    <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md">Have an exciting idea or an innovative product? Let's build something exceptional together.</p>
                  </div>

                  <div className="space-y-4 sm:space-y-5">
                    <motion.a href="mailto:dhumalajinkya2004@gmail.com" whileHover={{ x: 4 }} className="flex items-start sm:items-center gap-3 sm:gap-4 group p-3.5 sm:p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-sky-500/40 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl border border-sky-500/30 flex justify-center items-center bg-gradient-to-br from-sky-500/20 to-blue-500/20 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-500">
                        <MdEmail className="text-xl text-sky-400 group-hover:scale-110 transition-transform"/>
                      </div>
                      <div className="relative z-10 min-w-0 flex-1">
                        <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">Email me at</p>
                        <p className="text-[13px] sm:text-sm md:text-base font-medium text-white break-words group-hover:text-sky-300 transition-colors">dhumalajinkya2004@gmail.com</p>
                      </div>
                      <div className="hidden sm:flex ml-auto w-8 h-8 rounded-full bg-white/[0.04] items-center justify-center group-hover:bg-sky-500/20 group-hover:text-sky-300 text-white/20 transition-all duration-300 flex-shrink-0 group-hover:rotate-45">
                        <MdArrowOutward className="text-sm" />
                      </div>
                    </motion.a>
                    
                    <motion.div whileHover={{ x: 4 }} className="flex items-start sm:items-center gap-3 sm:gap-4 group p-3.5 sm:p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/40 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl border border-violet-500/30 flex justify-center items-center bg-gradient-to-br from-violet-500/20 to-blue-500/20 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500">
                        <MdLocationOn className="text-xl text-violet-400 group-hover:scale-110 transition-transform"/>
                      </div>
                      <div className="relative z-10 min-w-0 flex-1">
                        <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">Based in</p>
                        <p className="text-[13px] sm:text-sm md:text-base font-medium text-white group-hover:text-violet-300 transition-colors">Mumbai & Bangalore, India</p>
                      </div>
                    </motion.div>

                    {/* Social Strip */}
                    <div className="flex items-center gap-3 pt-2 sm:pt-4">
                      {[ 
                        { icon: FaGithub, href: "https://github.com/Ajinkyaa2004", hoverColor: "hover:border-white/40 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/ajinkya842004/", hoverColor: "hover:border-blue-400/40 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]" },
                        { icon: FaEnvelope, href: "mailto:dhumalajinkya2004@gmail.com", hoverColor: "hover:border-sky-400/40 hover:text-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]" }
                      ].map((item, i) => (
                        <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex justify-center items-center text-white/40 transition-all duration-300 ${item.hoverColor}`}>
                          <item.icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 w-full relative z-10">
                  <form action="https://formspree.io/f/xgvlgavv" method="POST" aria-label="Contact form" className="space-y-4 sm:space-y-5 bg-black/40 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/[0.06] hover:border-white/10 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                       <input type="text" name="first_name" required placeholder="First Name" className="w-full bg-white/[0.04] text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 sm:py-4 border border-white/[0.08] focus:border-sky-500/60 focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] focus:outline-none transition-all duration-300 text-[13px] sm:text-sm" />
                       <input type="text" name="last_name" required placeholder="Last Name" className="w-full bg-white/[0.04] text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 sm:py-4 border border-white/[0.08] focus:border-sky-500/60 focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] focus:outline-none transition-all duration-300 text-[13px] sm:text-sm" />
                    </div>
                    <input type="email" name="email" required placeholder="Email Address" className="w-full bg-white/[0.04] text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 sm:py-4 border border-white/[0.08] focus:border-sky-500/60 focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] focus:outline-none transition-all duration-300 text-[13px] sm:text-sm" />
                    <textarea name="message" rows="4" required placeholder="Your Message" className="w-full bg-white/[0.04] text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 sm:py-4 border border-white/[0.08] focus:border-sky-500/60 focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] focus:outline-none transition-all duration-300 resize-none text-[13px] sm:text-sm"></textarea>
                    
                    <button className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-violet-500 text-white text-sm sm:text-base font-bold rounded-xl hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-2 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></div>
                      <span className="relative z-10 flex items-center gap-2">Send Message <MdArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </section>

          </main>

          {/* Premium Footer */}
          <footer role="contentinfo" className="relative py-14 px-6 mt-10 overflow-hidden">
            {/* Top gradient border line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center md:text-left">
                  <h2 className="text-2xl font-extrabold tracking-tight mb-1">
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">Ajinkya.</span>
                  </h2>
                  <p className="text-sm text-white/40 font-medium">Building ideas into reality.</p>
                </motion.div>
                
                <div className="flex items-center gap-3">
                  {[ 
                    { icon: FaGithub, href: "https://github.com/Ajinkyaa2004", hoverColor: "hover:border-white/40 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ajinkya842004/", hoverColor: "hover:border-blue-400/40 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
                    { icon: FaEnvelope, href: "mailto:dhumalajinkya2004@gmail.com", hoverColor: "hover:border-red-400/40 hover:text-red-400 hover:shadow-[0_0_15px_rgba(248,113,113,0.15)]" }
                  ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex justify-center items-center text-white/40 transition-all duration-300 hover:scale-110 ${item.hoverColor}`}>
                      <item.icon size={16} />
                    </a>
                  ))}
                </div>

                <div className="text-center md:text-right">
                  <p className="text-xs text-white/60 font-mono tracking-wider">
                    © {new Date().getFullYear()} Ajinkya Dhumal. All rights reserved.
                  </p>
                  <p className="text-[10px] text-white/60 mt-1 uppercase tracking-widest font-semibold">Designed & Built with ❤️</p>
                </div>
              </div>
            </div>
          </footer>

        </motion.div>
      )}
    </div>
  );
}
