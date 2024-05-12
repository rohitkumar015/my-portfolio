import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skills } from "../utils/skills";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(sectionTop < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="mt-5 d-flex justify-content-center" id="skills">
      <div className="max_width">
        <h2 className="primary_text_clr text-center mb-4">My Skills</h2>
        <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.13 * index }}
              whileHover={{ scale: 0.9 }}
              className="text-capitalize skills_item"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
