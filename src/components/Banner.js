import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaYoutube, FaDribbble, FaWhatsapp, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Bagian Teks */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={['Frontend', 2000, 'Backend', 2000, 'Mobile', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
              <br />
              <span className="text-accent mr-4">Developer</span>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Experienced electrical engineering graduate with a solid
              foundation in fullstack development. Completed an intensive
              Fullstack bootcamp at Enigma, showcasing expertise in diverse
              frontend, backend and mobile technologies such as React.js, Spring
              Boot and React Native. Adept at collaborating effectively in a
              team environment, honed through active participation in campus
              organizations. Prepared to excel as a proactive Fullstack
              Developer in a dynamic work environment, utilizing a blend of
              technical skills and collaborative prowess.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer"
              >
                <button className="btn btn-lg">Contact me</button>
              </Link>

              <a
                href="https://drive.google.com/file/d/1yfC6lWuzm5_JHURbrbIuj-Wamm3m6IT4/view?usp=sharing"
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/khoerulfajri1999">
                <FaGithub />
              </a>
              <a href="https://wa.me/62882003233343">
                <FaWhatsapp />
              </a>
              <a href="https://www.linkedin.com/in/khoerul-fajri-93698a229/">
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
          {/* Bagian Gambar */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[682px]"
          >
            <motion.img
              src={Image}
              alt="Avatar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-[60vw] h-[65vh] object-cover mb-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
