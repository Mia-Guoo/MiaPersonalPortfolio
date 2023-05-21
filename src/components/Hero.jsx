import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Brief Summary */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c78baa]" />
          {/* <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-tr from-[#f0bddc] to-[#401830] opacity-50" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#7d5782]">Hello! </span>
            <br /> I'm Mingyue(Mia) Guo
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-whit-100`}>
            Software Developer & Front-End Developer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      {/* Personal Image */}
      {/* <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <img
            src="Mia.png"
            alt="logo"
            className="miaLogo"
            style={{ height: 450 }}
          />
        </div> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#634358] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#634358] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
