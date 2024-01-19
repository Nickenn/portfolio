import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { IoSchool } from "react-icons/io5";

import { educations } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionWrapper from "../hoc/SectionWrapper";

const EducationCard = ({ index, date, title, school_name, descriptions }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#323849",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={date}
    iconStyle={{ background: "#FF5858", color: "#fff" }}
    icon={<IoSchool />}
  >
    <div>
      <h3 className="text-white text-[20px} font-bold">{title}</h3>
      <p
        className="text-secondary text-[14px] font-semibold mt-0"
        style={{ margin: 0 }}
      >
        {school_name}
      </p>
    </div>
    <ul className="mt-4 list-disc ml-5 space-y-2">
      {descriptions.map((description, index) => (
        <li
          key={index}
          className="text-white-100 text-[12px] pl-1 tracking-wider"
        >
          {description}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>My education</h2>
      </motion.div>
      <div className="mt-20 fles flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} index={index} {...education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
