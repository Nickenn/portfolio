import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { projects } from "../constants";

import SectionWrapper from "../hoc/SectionWrapper";
import { NavLink } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  image,
  description,
  hosted_demo_link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.95)}>
      <div className="bg-tertiary rounded-2xl sm:w-[360px] w-full relative">
        <NavLink to={hosted_demo_link}>
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-contain rounded-t-2xl"
          />
        </NavLink>
        <NavLink
          to={source_code_link}
          className="absolute top-7 left-14 w-6 h-6 z-[10] bg-primary rounded-full flex items-center justify-center"
        >
          {FaGithub}
        </NavLink>
        <NavLink
          to={hosted_demo_link}
          className="absolute top-7 right-14 w-6 h-6 z-[10] bg-primary rounded-full flex items-center justify-center"
        >
          {FaGlobe}
        </NavLink>
        <div className="p-5">
          <h3 className="text-[24px] mt-1 primary-gradient p-2 rounded-lg">
            {name}
          </h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>My projects</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[20px] max-w-3xl leading-[30px] my-4 mx-auto"
      >
        Here you see a selection of projects I have worked on so far. Please
        click the icons to check out the source code and hosted demos.
      </motion.p>
      <div className="flex flex-wrap sm:justify-center gap-6 mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
