import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#d4becc] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-[#7d5782] text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <br />
        <br />
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 style={{ color: "black", fontWeight: "500", fontSize: "36px" }}>
          Overview.
        </h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#7d5782] text-[20px] max-w-3xl leading-[30px]"
      >
        <ul>
          <li className="list-disc">
            Highly skilled with JavaScript, Vue.js, React, HTML, UI/UX, Java,
            C#, Python, Node.js, Oracle.
          </li>
          <li className="list-disc">
            Highly skilled in Photoshop, Illustrator, Microsoft Office, GitHub,
            Figma.
          </li>
          <li className="list-disc">
            Well understanding of AODA accessibility standards, excellent at
            time management, quick learning, and teamwork.
          </li>
        </ul>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
