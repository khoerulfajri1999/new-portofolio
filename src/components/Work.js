import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/porto1.png";
import Img2 from "../assets/porto2.png";
import Img3 from "../assets/porto3.png";
import Img4 from '../assets/porto4.png';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: Img1,
      type: 'Mobile App',
      title: 'Chatting App',
      links: [
        { label: 'Mobile', url: 'https://github.com/khoerulfajri1999/chatApp' },
      ],
    },
    {
      img: Img2,
      type: 'Mobile and Web App',
      title: 'Bantu-In (Volunteering App)',
      links: [
        {
          label: 'Mobile',
          url: 'https://github.com/khoerulfajri1999/bantuin-mobile',
        },
        {
          label: 'Frontend',
          url: 'https://github.com/khoerulfajri1999/bantuin-frontend',
        },
        {
          label: 'Backend',
          url: 'https://github.com/khoerulfajri1999/bantuin-backend ',
        },
      ],
    },
    {
      img: Img3,
      type: 'Web App',
      title: 'E-Commerce',
      links: [
        {
          label: 'Frontend',
          url: 'https://github.com/khoerulfajri1999/ecommerce-frontend',
        },
        {
          label: 'Backend',
          url: 'https://github.com/khoerulfajri1999/ecommerce-backend',
        },
      ],
    },
    {
      img: Img4,
      type: 'Mobile App',
      title: 'Toko Tsunny',
      links: [
        {
          label: 'Mobile',
          url: 'https://github.com/khoerulfajri1999/toko-tsunny-mobile',
        },
        {
          label: 'Backend',
          url: 'https://github.com/khoerulfajri1999/toko-tsunny-backend',
        },
      ],
    },
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
      setSelectedProject(null);
    }
  };

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Project.
              </h2>
              <p className="max-w-sm mb-[50px]">This project is a project that I am working on, and I have also participated in several bootcamps on various platforms.</p>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer" onClick={() => setSelectedProject(projects[0])}>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt="" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">{projects[0].type}</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">{projects[0].title}</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer" onClick={() => setSelectedProject(projects[1])}>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">{projects[1].type}</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">{projects[1].title}</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer" onClick={() => setSelectedProject(projects[2])}>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img3} alt="" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">{projects[2].type}</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">{projects[2].title}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={handleOutsideClick}>
          <motion.div variants={popupVariants} initial="hidden" animate="visible" exit="exit" className="bg-white rounded-xl p-6 w-full max-w-[600px] shadow-2xl border border-gray-200 relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gradient bg-clip-text">{selectedProject.title}</h3>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 text-lg font-semibold"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-2">{selectedProject.type}</p>
              <div className="space-y-2">
                {selectedProject.links.map((link, index) => (
                  <div key={index}>
                    <span className="font-medium text-gray-800">{link.label}: </span>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">
                      {link.url}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <button className="btn px-6 py-2 bg-gradient-to-r from-accent to-blue-500 text-white rounded-full hover:from-blue-500 hover:to-accent transition-all duration-300" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Work;
