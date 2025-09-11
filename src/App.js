"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Lottie from "lottie-react";
import DeveloperFrontEnd from "./lottie/DeveloperFrontEnd.json"; // path matches your structure
import robotAnim from "./lottie/Robotsayshello.json"; // path matches your structure
import BookLoading from "./lottie/Bookloading.json";
import Masonry from "react-masonry-css";

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
         `}</style>

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

                {/* Twitter */}
                {/* <a href="https://twitter.com/YourTwitter" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-6 h-6 text-gray-800 hover:text-[#6C63FF]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.939 13.939 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.919 4.919 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 21.539 13.94 13.94 0 0 0 7.548 24c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
                  </svg>
                </a> */}
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
            className="flex flex-col items-center justify-center py-16 px-6 md:px-20 bg-transparent relative z-10 "
          >
            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            {/* Content */}
            <div className="max-w-3xl text-center text-lg space-y-6 text-gray-600 leading-relaxed">
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
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
            className="min-h-screen flex flex-col items-center justify-start mt-12 px-6 md:px-20 bg-transparent relative z-10"
          >
            {/* Left Content - Timeline */}
            <div className="flex-1">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-12 
             bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] 
             bg-clip-text text-transparent w-fit mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Education
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
                      viewport={{ once: true }}
                    >
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
          <section id="projects" className="min-h-screen px-6 md:px-20 py-12">
            {/* Heading */}
            {/* <motion.h2
              className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent w-fit mx-auto"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              My Projects
            </motion.h2> */}
            {/* Masonry Grid */}
<section className="min-h-screen p-6">
  <h2
    className="text-4xl md:text-5xl font-bold mb-12 text-center 
      bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] 
      bg-clip-text text-transparent"
  >
    My Projects
  </h2>

  <div
    className="masonry"
    style={{
      columnCount: 3, // number of columns for desktop
      columnGap: "1.5rem",
    }}
  >
    {[
      { width: 320, height: 200 },
      { width: 320, height: 300 },
      { width: 320, height: 180 },
      { width: 320, height: 250 },
      { width: 320, height: 220 },
      { width: 320, height: 280 },
    ].map((card, index) => (
      <div
        key={index}
        style={{
          breakInside: "avoid",
          marginBottom: "1.5rem",
          borderRadius: "24px",
          padding: "24px",
          color: "white",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          background: "linear-gradient(270deg, #3A41C6, #6C63FF, #00D4FF)",
          backgroundSize: "600% 600%",
          animation: "gradientMove 8s ease infinite",
          width: `${card.width}px`,
          height: `${card.height}px`,
        }}
      >
        <style>
          {`
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </div>
    ))}
  </div>
</section>

          </section>
        </>
      )}
    </div>
  );
}
export default App;
