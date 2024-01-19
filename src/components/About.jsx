import { styles } from "../styles";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import headshot from "../assets/headshot.jpg";

import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h2 className={styles.sectionHeadText}>Who am I?</h2>
        <div className="h-2 sm:w-80 w-40 primary-gradient m-2"></div>
        <p>
          I'm a front-end developer wanting to create interactive and fun
          websites.
        </p>
        <p>I always enjoy learning new things, no matter the challenge!</p>
        <p className="mt-10">Hobbies I love are football and snowboarding.</p>
        <div className="mt-20">
          <img
            src={headshot}
            alt="Headshot of Nicholas Avery."
            className="h-60 w-60 rounded-full border-4 border-white"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
