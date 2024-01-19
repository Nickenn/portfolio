import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h3 className={`${styles.sectionSubText} text-[24px]`}>
          To get in touch with me, e-mail works wonders!
        </h3>
        <h4 className={`${styles.sectionSubText} text-[24px]`}>
          Contact me at: nickeavery@protonmail.com
        </h4>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
