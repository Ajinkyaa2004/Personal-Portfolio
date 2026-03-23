import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Lottie from "lottie-react";
import DeveloperFrontEnd from "./lottie/DeveloperFrontEnd.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaGithub, FaJs, FaDatabase, FaLinkedin, FaInstagram, FaTwitter, FaCertificate, FaTrophy, FaJava, FaEnvelope, FaDesktop, FaCode, FaServer, FaPaintBrush, FaProjectDiagram, FaTools, FaRobot, FaChartLine, FaFutbol, FaBuilding, FaUserTie, FaIndustry } from "react-icons/fa";
import { SiVercel, SiNextdotjs, SiFirebase, SiTailwindcss, SiDrizzle, SiReact, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiFramer, SiSpringboot, SiCoursera, SiAdobe, SiGoogleanalytics, SiMysql, SiJirasoftware, SiFigma, SiAdobeillustrator, SiGithub, SiAdobephotoshop, SiCanva, SiNotion } from "react-icons/si";
import { DiJava, DiMysql, DiScrum } from "react-icons/di";
import { useInView } from "react-intersection-observer";
import { MdEmail, MdLocationOn, MdPhone, MdArrowOutward, MdWork } from "react-icons/md";
import { GraduationCap } from "lucide-react";

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
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start > level) clearInterval(interval);
        else setValue(start);
      }, 15);
      return () => clearInterval(interval);
    }
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
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${colorClass} relative`}
        >
           {/* Glowing Tip */}
           <div className="absolute right-0 top-0 w-3 h-full bg-white rounded-full blur-[2px] opacity-80 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineScroll } = useScroll({ target: timelineRef, offset: ["start center", "end center"] });
  const timelineHeight = useTransform(timelineScroll, [0, 1], ["0%", "100%"]);

  return (
    <div className="font-sans min-h-screen relative overflow-hidden bg-[#050505] text-slate-200 selection:bg-indigo-500/30 selection:text-white">
      {/* Dynamic Background Noise/Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Navbar />

          {/* Ambient Background Orbs */}
          <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full filter blur-[100px] pointer-events-none animate-pulse-slow"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full filter blur-[150px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="fixed top-[40%] left-[20%] w-[30vw] h-[30vw] bg-purple-600/15 rounded-full filter blur-[120px] pointer-events-none animate-blob"></div>

          {/* Hero Section */}
          <section id="hero" className="relative min-h-[100dvh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 z-10 pt-28 pb-12 md:py-0">
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
                <a href="#projects" className="group relative px-6 py-3 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-2">Explore Work <MdArrowOutward /></span>
                </a>
                
                <div className="flex items-center gap-4 ml-2">
                  {[ 
                    { icon: FaGithub, href: "https://github.com/Ajinkyaa2004", color: "hover:text-white" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ajinkya842004/", color: "hover:text-blue-400" },
                    { icon: FaEnvelope, href: "mailto:dhumalajinkya2004@gmail.com", color: "hover:text-red-400" }
                  ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={`text-white/50 transition-colors duration-300 ${item.color} p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20 hover:bg-white/10`}>
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
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
              <Lottie animationData={DeveloperFrontEnd} loop={true} className="w-full max-w-lg relative drop-shadow-2xl" />
            </motion.div>
          </section>

          {/* About / Bento Grid */}
          <section id="about" className="relative min-h-screen py-16 px-6 md:px-20 z-10 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <h2 className="text-xs md:text-sm font-bold tracking-widest text-indigo-500 uppercase mb-2">About me</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Glimpse into my world.</h3>

              {/* Bento Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[220px]">
                {/* Main Intro */}
                <motion.div className="md:col-span-2 md:row-span-2 glass-panel hover-glass-panel rounded-3xl p-6 md:p-10 flex flex-col justify-between group overflow-hidden relative border border-white/10 hover:border-cyan-500/50 transition-colors shadow-lg">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/30 rounded-full blur-[80px]" 
                  />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  
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
                <motion.div className="glass-panel hover-glass-panel rounded-3xl p-6 flex flex-col items-start justify-end relative overflow-hidden group border border-white/10 hover:border-yellow-500/50 transition-colors shadow-lg">
                  <motion.div 
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 -top-4 text-8xl opacity-30 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]"
                  >
                    🏆
                  </motion.div>
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
                <motion.div className="glass-panel hover-glass-panel rounded-3xl p-6 flex flex-col justify-center items-center relative overflow-hidden group border border-white/10 hover:border-cyan-500/50 transition-colors shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Infinite scroll track */}
                  <div className="flex w-[200%] gap-8 relative z-10 overflow-hidden text-5xl opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                     <motion.div 
                        animate={{ x: ["0%", "-50%"] }} 
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="flex gap-8 items-center justify-start min-w-full"
                     >
                       <SiReact className="text-cyan-400 drop-shadow-md" />
                       <SiNextdotjs className="text-white drop-shadow-md" />
                       <SiTailwindcss className="text-sky-400 drop-shadow-md" />
                       <SiMongodb className="text-green-500 drop-shadow-md" />
                       <SiFigma className="text-pink-500 drop-shadow-md" />
                       {/* Duplicated for infinite loop */}
                       <SiReact className="text-cyan-400 drop-shadow-md" />
                       <SiNextdotjs className="text-white drop-shadow-md" />
                       <SiTailwindcss className="text-sky-400 drop-shadow-md" />
                       <SiMongodb className="text-green-500 drop-shadow-md" />
                       <SiFigma className="text-pink-500 drop-shadow-md" />
                     </motion.div>
                  </div>
                  <p className="text-white text-xs mt-8 tracking-widest uppercase font-bold relative z-10 bg-[#050505] px-5 py-2 rounded-full border border-white/10 group-hover:border-white/30 transition-colors shadow-xl">Core Stack</p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Education Timeline */}
          <section id="education" className="relative py-16 px-6 md:px-20 z-10 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="flex flex-col md:flex-row gap-12 items-start" ref={timelineRef}>
                <div className="w-full md:w-1/3 sticky top-32">
                  <h2 className="text-xs md:text-sm font-bold tracking-widest text-indigo-500 uppercase mb-2">Timeline</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Experience & Education</h3>
                  <p className="text-white/50 text-sm md:text-base cursor-default">My formal path in professional tech roles and computer science.</p>
                </div>

                <div className="w-full md:w-2/3 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-white/10 before:rounded-full overflow-hidden py-4">
                  <motion.div 
                    className="absolute left-5 md:left-1/2 w-1.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 -translate-x-[2.5px] md:-translate-x-1/2 z-0 rounded-full"
                    style={{ height: timelineHeight, boxShadow: "0 0 20px rgba(34,211,238,0.8)" }}
                  />
                  {[ 
                    { isWork: true, year: "Nov 2025 – Present", title: "Full Stack Developer Intern", place: "Insight Fusion Analytics · Remote", desc: "Built scalable web apps with React.js, Next.js, Node.js. Designed PostgreSQL incremental ETL pipelines for a football platform. Contributed to AI-driven hiring evaluation systems. Collaborated in Agile workflows." },
                    { isWork: false, year: "2021 – 2026", title: "B.Tech in CSE (AI & ML)", place: "Presidency University, Bangalore", desc: "Pursuing Engineering with specialization in AI and Machine Learning." },
                    { isWork: false, year: "2019 – 2021", title: "Junior College (Science)", place: "Shri T.P Bhatia College of Science", desc: "Focused on core science subjects laying foundation for engineering." },
                    { isWork: false, year: "2008 – 2019", title: "Schooling", place: "St. Lawrence High School, Mumbai", desc: "Active in academics and various regional extracurricular activities." },
                  ].map((edu, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group z-10 w-full mb-8">
                      <motion.div 
                        initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}
                        className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${edu.isWork ? 'border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]' : 'border-indigo-500/50 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] group-hover:bg-indigo-500/20'} bg-[#050505] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 relative z-20`}
                      >
                         {edu.isWork ? <MdWork size={20} className="relative z-10" /> : <GraduationCap size={20} className="relative z-10" />}
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-5 md:p-6 rounded-3xl relative border-l-4 border-l-transparent ${edu.isWork ? 'group-hover:border-l-cyan-400' : 'group-hover:border-l-indigo-400'} transition-all duration-300 shadow-xl`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${edu.isWork ? 'from-cyan-500/0 via-cyan-500/0 to-cyan-500/10' : 'from-indigo-500/0 via-indigo-500/0 to-indigo-500/10'} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl duration-500`}></div>
                        <span className={`font-mono text-xs md:text-sm ${edu.isWork ? 'text-cyan-400' : 'text-indigo-400'} mb-2 block relative z-10 font-bold tracking-wide`}>{edu.year}</span>
                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 relative z-10">{edu.title}</h4>
                        <span className="text-sm text-white/70 block mb-3 relative z-10 font-medium">{edu.place}</span>
                        <p className="text-xs md:text-sm text-white/50 leading-relaxed relative z-10">{edu.desc}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Projects Gallery */}
          <section id="projects" className="relative py-16 px-6 md:px-20 z-10 w-full max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-xs md:text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">Portfolio</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects.</h3>
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
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`glass-panel rounded-3xl p-6 flex flex-col group relative overflow-hidden border border-white/5 transition-all duration-300 ${item.theme}`}
                  >
                    {/* Background Icon Watermark */}
                    <div className="absolute -bottom-6 -right-6 text-[12rem] text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-700 pointer-events-none z-0">
                      <item.bgIcon />
                    </div>

                    {/* Minimalist Tech Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
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
          <section id="skills" className="relative py-16 px-6 md:px-20 z-10 w-full max-w-6xl mx-auto">
             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="mb-12">
                <h2 className="text-xs md:text-sm font-bold tracking-widest text-cyan-500 uppercase mb-2">Capabilities</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Technical Arsenal.</h3>
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
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay z-0"></div>
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
                     <DotLottieReact src="/lottie/Assistant-Bot.lottie" loop autoplay className="w-full max-w-[420px] scale-110" />
                  </div>
                </motion.div>
              </div>
             </motion.div>
          </section>

          {/* Achievements & Certifications */}
           <section id="achievements" className="relative py-16 px-6 md:px-20 z-10 w-full max-w-6xl mx-auto">
             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="mb-10">
                <h2 className="text-xs md:text-sm font-bold tracking-widest text-purple-500 uppercase mb-2">Milestones</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Growth & Accolades.</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                 {/* Certs col */}
                 <div className="space-y-4">
                   <h4 className="text-lg md:text-xl font-bold text-white/90 flex items-center gap-2 mb-6"><FaCertificate className="text-indigo-400"/> Certifications</h4>
                   {certifications.map((cert, idx) => (
                     <a href={cert.link} target="_blank" rel="noreferrer" key={idx} className="glass-panel hover-glass-panel block p-5 rounded-2xl group relative overflow-hidden">
                       <div className="flex items-start justify-between">
                         <div className="flex gap-4 items-center">
                           <div className="p-3 bg-white/5 rounded-xl border border-white/5">{cert.icon}</div>
                           <div>
                             <h5 className="font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">{cert.title}</h5>
                             <p className="text-sm text-white/50">{cert.provider}</p>
                           </div>
                         </div>
                         <MdArrowOutward className="text-white/20 group-hover:text-white transition-colors" />
                       </div>
                     </a>
                   ))}
                 </div>

                 {/* Achiev col */}
                  <div className="space-y-4">
                   <h4 className="text-lg md:text-xl font-bold text-white/90 flex items-center gap-2 mb-6"><FaTrophy className="text-yellow-500"/> Achievements</h4>
                   {achievements.map((ach, idx) => (
                     <a href={ach.link} target="_blank" rel="noreferrer" key={idx} className="glass-panel hover-glass-panel block p-5 rounded-2xl group relative overflow-hidden">
                       <div className="flex flex-col gap-2">
                         <div className="flex justify-between items-center">
                            <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">{ach.badge}</span>
                            <MdArrowOutward className="text-white/20 group-hover:text-white transition-colors" />
                         </div>
                         <h5 className="font-bold text-white mt-1 group-hover:text-yellow-400 transition-colors">{ach.title}</h5>
                         <p className="text-xs md:text-sm text-white/50 line-clamp-2">{ach.detail}</p>
                       </div>
                     </a>
                   ))}
                 </div>
              </div>
             </motion.div>
           </section>

          {/* Contact Section */}
          <section id="contact" className="relative py-16 px-6 md:px-20 z-10 w-full max-w-6xl mx-auto mb-10">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="glass-panel rounded-[2rem] p-6 md:p-12 flex flex-col md:flex-row gap-12 relative overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Let's Connect.</h2>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-md">Have an exciting idea or an innovative product? Let's build something exceptional together. Drop me a message.</p>
                  </div>

                  <div className="space-y-6">
                    <a href="mailto:dhumalajinkya2004@gmail.com" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 flex-shrink-0 rounded-full border border-white/10 flex justify-center items-center bg-white/5 group-hover:bg-blue-500 transition-colors">
                        <MdEmail className="text-xl text-white group-hover:scale-110 transition-transform"/>
                      </div>
                      <div>
                        <p className="text-sm text-white/40">Email me at</p>
                        <p className="text-base md:text-lg font-medium text-white break-all">dhumalajinkya2004@gmail.com</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 flex-shrink-0 rounded-full border border-white/10 flex justify-center items-center bg-white/5 group-hover:bg-purple-500 transition-colors">
                        <MdLocationOn className="text-xl text-white group-hover:scale-110 transition-transform"/>
                      </div>
                      <div>
                        <p className="text-sm text-white/40">Based in</p>
                        <p className="text-lg font-medium text-white">Mumbai & Bangalore, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 w-full relative z-10">
                  <form action="https://formspree.io/f/xgvlgavv" method="POST" className="space-y-6 bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <input type="text" name="first_name" required placeholder="First Name" className="w-full bg-white/5 text-white placeholder:text-white/50 rounded-xl px-4 py-4 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors" />
                       <input type="text" name="last_name" required placeholder="Last Name" className="w-full bg-white/5 text-white placeholder:text-white/50 rounded-xl px-4 py-4 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors" />
                    </div>
                    <input type="email" name="email" required placeholder="Email Address" className="w-full bg-white/5 text-white placeholder:text-white/50 rounded-xl px-4 py-4 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors" />
                    <textarea name="message" rows="4" required placeholder="Your Message" className="w-full bg-white/5 text-white placeholder:text-white/50 rounded-xl px-4 py-4 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors resize-none"></textarea>
                    
                    <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex justify-center items-center gap-2 group">
                      Send Message <MdArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Minimal Footer */}
          <footer className="border-t border-white/5 py-10 px-6 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-1">Ajinkya.</h2>
                <p className="text-sm text-white/40">Building ideas into reality.</p>
              </div>
              
              <div className="flex gap-4">
                <a href="https://github.com/Ajinkyaa2004" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-white/10 transition-colors text-white/70 hover:text-white"><FaGithub size={18}/></a>
                <a href="https://www.linkedin.com/in/ajinkya842004/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-white/10 transition-colors text-white/70 hover:text-white"><FaLinkedin size={18}/></a>
              </div>

              <div className="text-sm text-white/30 text-center md:text-right">
                © {new Date().getFullYear()} Ajinkya Dhumal.
              </div>
            </div>
          </footer>

        </motion.div>
      )}
    </div>
  );
}
