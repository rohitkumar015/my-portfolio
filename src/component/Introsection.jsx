import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Introsection = () => {
  return (
    <div>
      <section className="primary_bg d-flex justify-content-center" id="home">
        <div className="max_width" style={{ zIndex: "2" }}>
          <div className="position-relative">
            <motion.div
              className="profile_image"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/pic2.webp" width={120} alt="" />
            </motion.div>
            <motion.img
              src="/images/wavinghand.png"
              className="wavinghand"
              width={60}
              alt=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          <div>
            <div className="intro_section">
              <motion.h1
                className="text-center secondary_text_clr"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }} // Adding delay to text animation
                whileHover={{ scale: 0.9 }}
              >
                <b>"Hi, I'm Rohit</b>, a driven frontend developer with a year of
                hands-on experience. I'm on a mission to master frontend
                development, and my focus is on becoming proficient in both
                <i> Angular and React.</i> I'm dedicated to crafting captivating
                websites and web applications that redefine user experience."
              </motion.h1>
              <div className="d-flex justify-content-center flex-m-column mt-5 align-items-center gap-3 my-3">
                <button className="my_primary_btn btn">
                  <a href="tel:8652664872">
                    Contact me here{" "}
                    <IoIosArrowRoundForward
                      className=""
                      style={{ width: "25px", fontSize: "25px" }}
                    ></IoIosArrowRoundForward>
                    <i className=""></i>
                  </a>
                </button>
                <button className="my_secondary_btn btn">
                  <a href="/images/rohitlatescv2024.pdf" download={true}>
                    Download resume{" "}
                    <TfiDownload
                      style={{ width: "25px", fontSize: "15px" }}
                    ></TfiDownload>
                  </a>
                </button>
                <Link to="https://www.linkedin.com/in/rohitkumar1255">
                  <span className="social_links">
                    <FaLinkedin></FaLinkedin>
                  </span>
                </Link>
                <Link to="https://github.com/rohitkumar015">
                  {" "}
                  <span className="social_links">
                    <FaGithub></FaGithub>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introsection;
