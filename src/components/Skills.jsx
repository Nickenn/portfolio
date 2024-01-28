import { motion } from "framer-motion";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";

import SectionWrapper from "../hoc/SectionWrapper";

const SkillCard = ({ index, name, image }) => (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.5, 0.95)}
    className="p-2 rounded-2xl w-[150px] h-[100px]bg-tertiary flex flex-col justify-center items-center"
  >
    <p className="text-white text-[20px] font-bold">{name}</p>
    <img className="w-10 h-10" src={image} alt="Skill technology logos." />
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10 sm:m-0">
        <h2 className={styles.sectionHeadText}>Technologies I've used </h2>
      </motion.div>
      <div className="mt-40 mx-auto flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skill");
