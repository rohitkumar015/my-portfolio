import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(sectionTop < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="d-flex justify-content-center" id="about">
      <div className="max_width">
        <h2 className="primary_text_clr text-center mb-4">About Me</h2>
        <motion.h6
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 ,delay: 0.5 }}
          whileHover={{ scale: 0.9 }}
          className="text-center secondary_text_clr "
          style={{ lineHeight: "2rem" }}
        >
          After graduating with a degree in Electronic &amp; Telecommunication,
          I decided to pursue my passion for Web Development. I dedicated myself
          and learned frontend web development. My favorite part of programming
          is the problem-solving aspect. I love the feeling of finally figuring
          out a solution to a problem. My core stack is React, Java, and MySql.
          I am currently looking for a full-time position as a software
          developer.
        </motion.h6>
        <motion.h6
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 ,delay: 0.5}}
          whileHover={{ scale: 0.9 }}
          className="text-center secondary_text_clr"
          style={{ lineHeight: "2rem" }}
        >
          When I'm not coding, I enjoy playing video games, watching movies, and
          playing Cricket. I also enjoy learning new things. I am currently
          learning about Next.Js
        </motion.h6>
      </div>
    </section>
  );
};

export default About;
