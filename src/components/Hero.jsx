import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { ComputersCanvas } from "./canvas";
import MiaPhoto from "./MiaPhoto";

const Hero = () => {
  return (
    <section className="relative w-full h-[800px] mx-auto">
      {/* Brief Summary */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c78baa]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-tr from-[#f0bddc] to-[#401830] opacity-50" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} `}>
            <span className="text-[#ffffff]">Hello! </span>
            <br /> I'm Mingyue(Mia) Guo
          </h1>
          <p className={`${styles.heroSubText} mt-2 `}>
            Software Developer & Front-End Developer
          </p>
          <br></br>
          <Link to="https://www.linkedin.com/in/mingyue-guo-416ab7255/">
            <button type="button" className="btn btn-info">
              <img src="linkedin.png" className="h-[35px]" />
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="https://github.com/Mia-Guoo/">
            <button type="button" className="btn btn-info">
              <img src="github.png" className="h-[35px]" />
            </button>
          </Link>
        </div>
        <div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        {/* <div className="flex-1 bg-about bg-contain bg-no-repeat opacity-90">
          <img
            src="Mia1.png"
            alt="miaphoto"
            className="miaLogo"
            style={{ height: 350 }}
          />
        </div> */}
        <MiaPhoto />
      </div>
      {/* <ComputersCanvas /> */}
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
