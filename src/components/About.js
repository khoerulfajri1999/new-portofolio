import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaReact, FaNodeJs, FaJava, FaDocker, FaGithub, FaBootstrap, FaDatabase, FaFire, FaCode, FaLock, FaServer, FaCloud, FaTools, FaMobileAlt, FaCog, FaUsers, FaSync, FaBrain, FaCrown } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiPostman, SiMui, SiMongodb, SiFirebase, SiJson, SiInsomnia, SiSpringboot, SiRedis, SiPostgresql } from "react-icons/si";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [isTechPopupOpen, setIsTechPopupOpen] = useState(false);
  const [isSoftPopupOpen, setIsSoftPopupOpen] = useState(false);

  const techSkills = [
    { name: "React Js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node JS", icon: <FaNodeJs />, color: "#339933" },
    { name: "Expressjs", icon: <SiExpress />, color: "#000000" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "MaterialUi", icon: <SiMui />, color: "#0081CB" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "API", icon: <FaCode />, color: "#000000" },
    { name: "Sequelize", icon: <FaDatabase />, color: "#52B0E7" },
    { name: "Mongoose", icon: <SiMongodb />, color: "#880000" },
    { name: "JSON", icon: <SiJson />, color: "#000000" },
    { name: "Rest API", icon: <FaServer />, color: "#000000" },
    { name: "JWT", icon: <FaLock />, color: "#000000" },
    { name: "Insomnia", icon: <SiInsomnia />, color: "#5849BE" },
    { name: "Springboot", icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "Microservice", icon: <FaCog />, color: "#000000" },
    { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
    { name: "React Native", icon: <FaMobileAlt />, color: "#61DAFB" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "PgAdmin", icon: <SiPostgresql />, color: "#336791" },
    { name: "Spring Cloud", icon: <FaCloud />, color: "#6DB33F" },
    { name: "Clean Architecture", icon: <FaTools />, color: "#000000" },
  ];

  const softSkills = [
    { name: "Problem-solving", icon: <FaTools />, color: "#FF6B6B" },
    { name: "Collaboration", icon: <FaUsers />, color: "#4ECDC4" },
    { name: "Adaptability", icon: <FaSync />, color: "#45B7D1" },
    { name: "Critical Thinking", icon: <FaBrain />, color: "#96CEB4" },
    { name: "Leadership", icon: <FaCrown />, color: "#FFD700" },
  ];

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: { duration: 0.2 },
    },
  };

  const handleOutsideClick = (e) => {
    if (e.target.className.includes("bg-black")) {
      setIsTechPopupOpen(false);
      setIsSoftPopupOpen(false);
    }
  };

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          <motion.div variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a Freelance Front-end Developer, back-end developer, and mobile developer.</h3>
            <p className="mb-6">
              Experience in software development, especially in web and mobile application development. Strong understanding of various technologies and tools, including React.js, Spring Boot, and React Native. Accustomed to working in a
              team and have good communication skills. Committed to delivering high-quality software solutions and meeting client needs well.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div className="relative">
                <div className="text-[40px] font-tertiary text-gradient mb-2 cursor-pointer hover:text-accent transition-colors" onClick={() => setIsTechPopupOpen(true)}>
                  {inView ? <CountUp start={0} end={27} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Technical <br />
                  Skills
                </div>
              </div>
              <div className="relative">
                <div className="text-[40px] font-tertiary text-gradient mb-2 cursor-pointer hover:text-accent transition-colors" onClick={() => setIsSoftPopupOpen(true)}>
                  {inView ? <CountUp start={0} end={5} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Soft <br />
                  Skills
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technical Skills Popup */}
      {isTechPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={handleOutsideClick}>
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-xl p-6 w-full max-w-[800px] max-h-[80vh] overflow-y-auto shadow-2xl border border-gray-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gradient bg-clip-text">Technical Skills</h3>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 text-lg font-semibold"
                onClick={() => setIsTechPopupOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techSkills.map((skill, index) => (
                <motion.div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-100 shadow-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="text-3xl mb-2 transform hover:rotate-12 transition-transform duration-200" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="text-sm text-center font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button className="btn px-6 py-2 bg-gradient-to-r from-accent to-blue-500 text-white rounded-full hover:from-blue-500 hover:to-accent transition-all duration-300" onClick={() => setIsTechPopupOpen(false)}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Soft Skills Popup */}
      {isSoftPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={handleOutsideClick}>
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-xl p-6 w-full max-w-[600px] max-h-[80vh] overflow-y-auto shadow-2xl border border-gray-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gradient bg-clip-text">Soft Skills</h3>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 text-lg font-semibold"
                onClick={() => setIsSoftPopupOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-100 shadow-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="text-3xl mb-2 transform hover:rotate-12 transition-transform duration-200" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="text-sm text-center font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button className="btn px-6 py-2 bg-gradient-to-r from-accent to-blue-500 text-white rounded-full hover:from-blue-500 hover:to-accent transition-all duration-300" onClick={() => setIsSoftPopupOpen(false)}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;
