"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Lottie from "lottie-react";
import DeveloperFrontEnd from "./lottie/DeveloperFrontEnd.json"; 
import robotAnim from "./lottie/Robotsayshello.json"; 
import BookLoading from "./lottie/Bookloading.json";
import { FaGithub, FaJs, FaDatabase } from "react-icons/fa";
import { SiVercel, SiNextdotjs, SiFirebase, SiTailwindcss, SiDrizzle, SiReact } from "react-icons/si";
import { FaNodeJs, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { SiFramer, } from 'react-icons/si';
import { SiSpringboot } from "react-icons/si";
import { DiJava, DiMysql } from 'react-icons/di';
import { FaDesktop } from 'react-icons/fa';
import { FaCertificate, FaTrophy, FaJava, FaReact } from "react-icons/fa";
import { SiCoursera, SiAdobe, SiGoogleanalytics } from "react-icons/si";
import GearAnim from "./lottie/GearsLottieAnimation.json";



const certifications = [
  {
    title: "IBM Certified Professional – Product Management",
    provider: "Coursera",
    link: "https://your-certificate-link.com/ibm",
    detail: "Credential from IBM covering product lifecycle, strategy, and stakeholder management.",
    icon: <SiCoursera className="text-blue-600 text-xl" />,
  },
  {
    title: "Product Management Specialization",
    provider: "Coursera",
    link: "https://your-certificate-link.com/product-management",
    detail: "5-course specialization on product foundations, collaboration, and delivery.",
    icon: <SiCoursera className="text-blue-600 text-xl" />,
  },
  {
    title: "Agile Development Scrum",
    provider: "Coursera",
    link: "https://your-certificate-link.com/agile",
    detail: "Introduction to Agile Development and Scrum methodologies.",
    icon: <SiCoursera className="text-blue-600 text-xl" />,
  },
  {
    title: "Advanced Java Development",
    provider: "KR IT Education",
    link: "https://your-certificate-link.com/java",
    detail: "Covers OOP, HTML, CSS, JS, Java fundamentals, and advanced Java with Spring Boot & Hibernate.",
    icon: <FaJava className="text-red-500 text-xl" />,
  },
  {
    title: "Frontend Design (Web & Graphics)",
    provider: "Max Computer Education",
    link: "https://your-certificate-link.com/frontend",
    detail: "Web design, Adobe Illustrator, and InDesign certification.",
    icon: <SiAdobe className="text-pink-500 text-xl" />,
  },
  {
    title: "Data Analytics – Visualization",
    provider: "Infosys Springboard",
    link: "https://your-certificate-link.com/data-analytics",
    detail: "Data visualization and analytics foundations.",
    icon: <SiGoogleanalytics className="text-green-600 text-xl" />,
  },
];

const achievements = [
  {
    title: "Dizzy Hackers Hackathon",
    detail: "Led JUJUTSU CODERS to Top 5 among 60+ teams with a Decentralized Identity project.",
    badge: "🏆 Top 5 Finalist",
    link: "https://your-certificate-link.com/dizzyhackers",
  },
  {
    title: "World Innovation Expo 2023",
    detail: "Vehicle Maintenance Index project ranked in Top 70 of 500+ entries.",
    badge: "🌍 Top 70 / 500",
    link: "https://your-certificate-link.com/worldexpo",
  },
  {
    title: "PAC HACK Volunteer",
    detail: "Coordinated and supported 200+ participants at national-level hackathon.",
    badge: "🙌 Volunteer",
    link: "https://your-certificate-link.com/pachack",
  },
  {
    title: "Final Year Project Lead",
    detail: "MediaMind-ML-360 Platform – leading a 3-member engineering team.",
    badge: "👨‍💻 Team Lead",
    link: "https://your-certificate-link.com/finalyearproject",
  },
];


function App() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <div className="font-sans min-h-screen relative overflow-hidden">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />

          {/* 🔥 Animated Gradient Background */}
          <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#d0d3ff] via-[#ffffff] via-[#ffffff] to-[#9ef2ff]" />
          <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
         `}
          </style>

          {/* Hero Section */}
          <section
            className="min-h-screen flex flex-col  md:flex-row mt-4 items-center justify-center text-left relative z-10 px-6 md:px-20 gap-10">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start px-6 md:px-20 pt-16 md:pt-0 justify-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
                Hi! I’m Ajinkya
              </h1>

              <p className="text-xl md:text-2xl text-gray-800">
                I’m a <span className="font-semibold">Fullstack Web Developer</span> with a focus on{" "}
                <span className="font-semibold">Frontend</span>, and an{" "}
                <span className="font-semibold">Aspiring Product Manager</span>.
              </p>
              {/* CTA Button */}
              <button className="px-3 py-2 bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] text-white rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
                Explore My Work
              </button>
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                {/* GitHub */}
                <a
                  href="https://github.com/Ajinkyaa2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.02c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.805 1.305 3.49.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.932 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.435.372.81 1.102.81 2.222v3.293c0 .32.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ajinkya842004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732 0-.957.798-1.732 1.75-1.732s1.75.775 1.75 1.732c0 .928-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.025-3.062-1.865-3.062-1.867 0-2.153 1.458-2.153 2.965v5.701h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.562 2.841-1.562 3.036 0 3.6 2.001 3.6 4.601v5.594z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex-1 flex items-center justify-center">
              <Lottie
                animationData={DeveloperFrontEnd}
                loop={true}
                className="w-full max-w-md"
              />
            </div>

          </section>

          {/* About Section */}
          <section
            id="about"
            className="flex flex-col items-center justify-center py-16 px-6 md:px-20 bg-transparent relative z-10 ">
            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              A Glimpse of Me
            </motion.h2>
            {/* Content */}
            <div className="max-w-3xl text-center text-lg space-y-6 text-gray-600 leading-relaxed">
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>
                {/* Lottie Animation Behind Text */}
                <div
                  className="absolute -left-16 md:-left-40 bottom-1 opacity-80 transform -rotate-12 hidden md:block"
                  style={{
                    width: '200px',
                    height: '200px',
                  }}
                >
                  <Lottie
                    animationData={robotAnim}
                    loop={true}
                    style={{ width: '350px', height: '300px' }}
                  />
                </div>
                {/* Text overlapping animation */}
                <p className="text-gray-700 text-lg md:text-xl z-10">
                  I'm <span className=" font-semibold">Ajinkya Dhumal</span> — a{" "}
                  <span className="text-[#6C63FF] font-medium">Fullstack Web Developer</span> specializing in Frontend,
                  and a final-year Computer Science (AI/ML) student at Presidency University, Bangalore.
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I’ve built responsive, user-focused web applications and recently ranked in the Top 5 out of 60 teams at a national hackathon. I focus on creating clean, scalable solutions with strong attention to performance and user experience.
                Alongside development, I’ve also been exploring
                <span className="text-[#6C63FF] font-medium"> Product Management</span> — defining features, structuring roadmaps,
                and collaborating with teams to deliver impactful solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Looking ahead, I aim to bridge engineering with product thinking — growing as a developer
                while sharpening product skills to deliver solutions that create real user impact.
              </motion.p>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="flex flex-col items-center justify-start mt-12 px-6 md:px-20 py-12 bg-transparent relative z-10 " >
            {/* Left Content - Timeline */}
            <div className="flex-1">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-12 
             bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] 
             bg-clip-text text-transparent w-fit mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                Academic Journey
              </motion.h2>
              {/* Timeline */}
              <div className="relative border-l-4 border-indigo-500 pl-10 space-y-16">
                {/* Arrow indicator on the timeline */}
                <div className="absolute left-[-10px] top-0 bottom-0 flex flex-col justify-between">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-indigo-500 border-b-[10px] border-b-transparent"></div>
                </div>
                {/* School */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-8 top-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] text-white border-2 border-white transform transition-transform duration-300 hover:scale-110">
                    {/* School Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12 12 0 01.84 6.17L12 20l-7-3.252a12 12 0 01.84-6.17L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 relative left-4">Schooling</h3>
                    <span className="text-sm text-gray-500 relative left-4">2008 – 2019</span>
                    <motion.p
                      className="mt-2 text-gray-600 relative left-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Completed schooling at <span className="font-medium">St. Lawrence High School, Mumbai</span>,
                      focusing on academics and extracurriculars.
                    </motion.p>
                  </div>
                </div>
                {/* Junior College */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-8 top-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] text-white border-2 border-white transform transition-transform duration-300 hover:scale-110">
                    {/* College Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 relative left-4">Junior College</h3>
                    <span className="text-sm text-gray-500 relative left-4">2019 – 2021</span>
                    <motion.p
                      className="mt-2 text-gray-600 relative left-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Studied at <span className="font-medium">Shri T.P Bhatia College of Science, Mumbai</span>,
                      focusing on Science stream and preparing for engineering.
                    </motion.p>
                  </div>
                </div>
                {/* B.Tech */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-8 top-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] text-white border-2 border-white transform transition-transform duration-300 hover:scale-110">
                    {/* University Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0l-3-3m3 3l3-3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 relative left-4">B.Tech in CSE (AI & ML)</h3>
                    <span className="text-sm text-gray-500 relative left-4">2021 – 2026</span>
                    <motion.p
                      className="mt-2 text-gray-600 relative left-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}>
                      Pursuing Computer Science & Engineering with specialization in
                      Artificial Intelligence and Machine Learning at
                      <span className="font-medium"> Presidency University, Bangalore</span>.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side Animation */}
            <div className="hidden md:block absolute right-28 top-16 opacity-80 rotate-2">
              <Lottie animationData={BookLoading} loop={true} className="w-72 h-72 " />
            </div>
          </section>

          {/* Project Section*/}
          <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-start mt-12 px-6 md:px-20 bg-transparent relative z-10 top-20 mb-52 "  >
            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#595ec0] via-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent w-fit mx-auto"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What I’ve Built & Led
            </motion.h2>
            {/* Cards Grid */}
            <div className="grid gap-6 w-full justify-center"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}  >
              {/* ---- Card 1 ---- */}
              <motion.div
                className="rounded-3xl shadow-xl relative overflow-hidden p-6 flex flex-col justify-between bg-[#fdfdfd] col-span-1 md:col-span-2"
                style={{ height: "auto" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#989be7] to-[#a3f0ff] rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-gradient-to-r from-[#a3f0ff] to-[#989be7] rounded-full filter blur-2xl opacity-40 animate-blob"></div>

                <div className="relative z-10 text-center flex flex-col justify-between h-full">
                  <h1 className="text-5xl font-bold text-left text-gray-900 mb-4">NexPrep</h1>
                  <p className="text-base text-gray-700 rounded-md p-3 -mt-2 text-left">
                    An AI-powered mock interview platform that simulates real-time, voice-based interviews using Vapi voice agents or React Speech Recognition.
                    It provides instant feedback and scoring, helping candidates practice and improve their interview skills.
                  </p>
                  <div className="flex flex-wrap justify-start gap-6 mt-6 text-2xl text-gray-700">
                    <SiNextdotjs title="Next.js" />
                    <SiFirebase title="Firebase" className="text-yellow-500" />
                    <SiTailwindcss title="Tailwind CSS" className="text-sky-500" />
                    <SiDrizzle title="Drizzle ORM" className="text-green-500" />
                    <FaJs title="JavaScript" className="text-yellow-400" />
                  </div>
                  <div className="flex flex-wrap justify-start gap-6 mt-6">
                    <a
                      href="https://github.com/Ajinkyaa2004/NexPrep"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                    >
                      <FaGithub className="text-xl" /> GitHub
                    </a>
                    <a
                      href="https://nexprep-ai.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                    >
                      <SiVercel className="text-xl" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
              {/* ---- Card 2 ---- */}
              <motion.div
                className="rounded-3xl shadow-xl relative overflow-hidden p-6 flex flex-col justify-between bg-[#fdfdfd]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#989be7] to-[#a3f0ff] rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-gradient-to-r from-[#a3f0ff] to-[#989be7] rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="relative z-10 text-center flex flex-col justify-between h-full">
                  <h1 className="text-3xl font-bold text-left text-gray-900 mb-3 -mt-4">Fab Wear</h1>
                  <p className="text-sm text-gray-700 rounded-md -mt-2 text-left">
                    A full-stack e-commerce web app with product listing, cart, and payment gateway integration.
                  </p>
                  <div className="flex justify-start gap-4 mt-1 text-2xl text-gray-700">
                    <SiHtml5 title="React" className="text-orange-500" />
                    <SiCss3 title="Node.js" className="text-blue-500" />
                    <FaJs title="JavaScript" className="text-yellow-400" />
                  </div>
                  <div className="flex flex-wrap justify-start gap-4 mt-1">
                    <a
                      href="https://github.com/Ajinkyaa2004/FabWear-E-Commerce-Webapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                    <a
                      href="https://fab-wear.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <SiVercel className="text-lg" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
              {/* ---- Card 3 ---- */}
              <motion.div
                className="rounded-3xl shadow-xl relative overflow-hidden p-6 flex flex-col justify-between bg-[#fdfdfd]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#989be7] to-[#a3f0ff] rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-gradient-to-r from-[#a3f0ff] to-[#989be7] rounded-full filter blur-2xl opacity-40 animate-blob"></div>

                <div className="relative z-10 text-center flex flex-col justify-between h-full">
                  <h1 className="text-3xl font-bold text-left text-gray-900 mb-3 -mt-4">Portfolio</h1>
                  <p className="text-sm text-gray-700 rounded-md -mt-2 text-left">
                    A personal portfolio showcasing my projects, skills, and resume with modern, responsive design.
                  </p>
                  <div className="flex justify-start gap-4 mt-1 text-2xl text-gray-700">
                    <SiReact title="React" className="text-sky-500" />
                    <SiTailwindcss title="TailwindCSS" className="text-teal-400" />
                    <SiFramer title="Framer Motion" className="text-purple-600" />
                    <FaJs title="JavaScript" className="text-yellow-400" />
                  </div>
                  <div className="flex flex-wrap justify-start gap-4 mt-1">
                    <a
                      href="https://github.com/Ajinkyaa2004/Personal-Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                    <a
                      href="https://itsajinkya.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <SiVercel className="text-lg" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
              {/* ---- Card 4 ---- */}
              <motion.div
                className="rounded-3xl shadow-xl relative overflow-hidden p-6 flex flex-col justify-between bg-[#fdfdfd]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#989be7] to-[#a3f0ff] rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-gradient-to-r from-[#a3f0ff] to-[#989be7] rounded-full filter blur-2xl opacity-40 animate-blob"></div>

                <div className="relative z-10 text-center flex flex-col justify-between h-full">
                  <h1 className="text-3xl font-bold text-left text-gray-900 mb-3 -mt-4">Hotel MS</h1>
                  <p className="text-sm text-gray-700 rounded-md -mt-2 text-left">
                    Hotel management software using Java and MySQL for bookings, customer data, and billing.
                  </p>
                  <div className="flex justify-start gap-4 mt-1 text-2xl text-gray-700">
                    <DiJava color="#f89820" />
                    <DiMysql color="#00758F" />
                    <FaDesktop title="Java Swing UI" className="text-gray-700" />
                  </div>
                  <div className="flex flex-wrap justify-start gap-4 mt-1">
                    <a
                      href="https://github.com/Ajinkyaa2004/Hotel-Management-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <SiVercel className="text-lg" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
              {/* ---- Card 5 ---- */}
              <motion.div
                className="rounded-3xl shadow-xl relative overflow-hidden p-6 flex flex-col justify-between bg-[#fdfdfd]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#989be7] to-[#a3f0ff] rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-gradient-to-r from-[#a3f0ff] to-[#989be7] rounded-full filter blur-2xl opacity-40 animate-blob"></div>

                <div className="relative z-10 text-center flex flex-col justify-between h-full">
                  <h1 className="text-3xl font-bold text-left text-gray-900 mb-3 -mt-4">Web Chat</h1>
                  <p className="text-sm text-gray-700 rounded-md -mt-2 text-left">
                    Instantly connect and communicate on a modern, fast, real-time web chat platform.
                  </p>
                  <div className="flex justify-start gap-4 mt-1 text-2xl text-gray-700">
                    <SiSpringboot color="#6DB33F" />
                    <DiJava color="#f89820" />
                    <FaJs title="JavaScript" className="text-yellow-400" />
                  </div>
                  <div className="flex flex-wrap justify-start gap-4 mt-1">
                    <a
                      href="https://github.com/Ajinkyaa2004/Web-Chat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <SiVercel className="text-lg" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
              {/* ---- Card 6 ---- */}
              <motion.div
                className="rounded-3xl shadow-xl relative overflow-hidden p-5 flex flex-col justify-between bg-[#fdfdfd]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#989be7] to-[#a3f0ff] rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-gradient-to-r from-[#a3f0ff] to-[#989be7] rounded-full filter blur-2xl opacity-40 animate-blob"></div>

                <div className="relative z-10 text-left">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2 -mt-3">Zen-Identity</h1>
                  <p className="text-sm text-gray-700 rounded-md p-2">
                    A decentralized id management system that provides secure, private, and digital credentials with user-controlled access.
                  </p>
                  <div className="flex gap-4 mt-3 text-2xl text-gray-700">
                    <SiNextdotjs title="Next.js" className="text-black" />
                    <SiTailwindcss title="TailwindCSS" className="text-teal-400" />
                    <SiFirebase title="Firebase" className="text-yellow-500" />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://github.com/Ajinkyaa2004/ZenID-JUJUTSU-CODERS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                    <a
                      href="https://your-portfolio.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <SiVercel className="text-lg" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
              {/* ---- Card 7 ---- */}
              <motion.div
                className="rounded-3xl shadow-xl relative overflow-hidden p-5 flex flex-col justify-between bg-[#fdfdfd] col-span-1 md:col-span-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#989be7] to-[#a3f0ff] rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-gradient-to-r from-[#a3f0ff] to-[#989be7] rounded-full filter blur-2xl opacity-40 animate-blob"></div>

                <div className="relative z-10 text-left">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">MediaMind ML-360</h1>
                  <p className="text-sm text-gray-700 rounded-md p-2">
                    AI-powered 360-degree feedback software that monitors and analyzes Government of India news stories across multiple regional languages using web crawling, OCR, and sentiment analysis to provide real-time alerts and insights.
                  </p>
                  <div className="flex gap-4 mt-3 text-2xl text-gray-700">
                    <SiNextdotjs title="Next.js" className="text-black" />
                    <SiTailwindcss title="Tailwind CSS" className="text-sky-500" />
                    <SiFramer title="Framer Motion" className="text-purple-600" />
                    <SiMongodb title="MongoDB" className="text-green-600" />
                    <SiDrizzle title="Drizzle ORM" className="text-green-500" />
                    <SiFirebase title="Firebase (Auth & Firestore)" className="text-yellow-500" />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://github.com/Ajinkyaa2004/MediaMind-ML-360"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <FaGithub className="text-xl" /> GitHub
                    </a>
                    <a
                      href="https://mediamindml-360.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-3xl hover:scale-105 transition-transform duration-300 flex items-center gap-1"
                    >
                      <SiVercel className="text-xl" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Blob Animation Keyframes */}
            <style>
              {`
    .animate-blob {
      animation: blob 20s infinite; /* slower, more subtle */
      opacity: 0.25; /* lighter effect */
      filter: blur(18px); /* softer blur */
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(15px, -25px) scale(1.05); }
      66% { transform: translate(-10px, 10px) scale(0.95); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
  `}
            </style>
          </section>

          {/* Achievements Section */}
          <section
            id="achievements"
            className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 relative z-10 bg-transparent "
          >
            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#595ec0] via-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent w-fit mx-auto"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Growth & Achievements
            </motion.h2>

            {/* Certifications */}
            <motion.div
              className="w-full max-w-5xl mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800  flex items-center gap-2">
                <FaCertificate className="text-indigo-600" /> Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-2xl shadow-md p-6 bg-white/40 dark:bg-white/10 backdrop-blur-lg flex flex-col gap-2 overflow-hidden border border-white/20 group"
                    whileHover={{ scale: 1.03 }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                  >
                    {/* Background Gear Animation */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none 
  left-10 sm:left-20 md:left-40 lg:left-60 xl:left-80">
                      <Lottie
                        animationData={GearAnim}
                        loop={true}
                        className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                      />
                    </div>


                    {/* Foreground Content */}
                    <div className="relative z-10 flex items-center gap-2">
                      {cert.icon}
                      <h4 className="font-semibold text-lg">{cert.title}</h4>
                    </div>
                    <p className="relative z-10 text-sm text-gray-500">{cert.provider}</p>

                    {/* Hover Detail */}
                    <div className="absolute inset-0 bg-indigo-50/95 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-sm text-gray-700 z-20">
                      <p>{cert.detail}</p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 text-sm font-medium mt-2 inline-block hover:scale-105 transition-transform duration-300"
                      >
                        📄 View Certificate
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="w-full max-w-5xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                },
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800  flex items-center gap-2">
                <FaTrophy className="text-yellow-500" /> Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((ach, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-2xl shadow-lg p-6 bg-white/40 dark:bg-white/10 backdrop-blur-lg flex flex-col gap-2 overflow-hidden border border-white/20 group"
                    whileHover={{ scale: 1.03 }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                  >
                    {/* Background Gear Animation */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none 
  left-10 sm:left-20 md:left-40 lg:left-60 xl:left-80">
                      <Lottie
                        animationData={GearAnim}
                        loop={true}
                        className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                      />
                    </div>


                    {/* Foreground Content */}
                    <div className="relative z-10">
                      <h4 className="font-semibold text-lg">{ach.title}</h4>
                      <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-medium inline-block mb-1">
                        {ach.badge}
                      </span>
                      <p className="text-sm text-gray-500">{ach.detail}</p>

                      {/* View Certificate */}
                      <a
                        href={ach.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 text-sm font-medium mt-2 inline-block hover:scale-105 transition-transform duration-300"
                      >
                        📑 View Certificate
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>=

        </>
      )}
    </div>
  );
}
export default App;
