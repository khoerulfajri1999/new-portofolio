import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'Mobile Developer',
    description:
      'Experienced in mobile application development using React Native. Have a good understanding of mobile application architecture and experience in integrating APIs.',
    link: 'lorwm more',
  },
  {
    name: 'Front-end Developer',
    description:
      'Experienced in web application development using React.js. Have a good understanding of web application architecture and experience in integrating APIs.',
    link: 'lorwm more',
  },
  {
    name: 'Back-end Developer',
    description:
      'Experienced in web application development using Spring Boot, express.js and Node.js. Have a good understanding of web application architecture and experience in integrating APIs.',
    link: 'lorwm more',
  },
];

const Services = () => {
  return (
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-20">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer, back-end developer, and
              mobile developer.
            </h3>
            <Link
              to="work"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer"
            >
              <button className="btn btn-sm">See my projects</button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-light">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
