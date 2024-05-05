import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Introsection = () => {
  return (
    <div>
      <section className="primary_bg d-flex justify-content-center">
        <div className="max_width">
          <div className="profile_image">
            <img src="../../public/logo192.png" alt="" />
            {/* <img src="../../public/waving-hand-svgrepo-com.png" className="wavinghand" width={25} alt="" /> */}
          </div>
          <div>
            <div className="intro_section">
              <h1 className="text-center secondary_text_clr" >
                <b>Hello, I'm Rohit.</b> I'm a Frontend Developer with a year of
                experience. I enjoy building <i>Sites and Web Apps</i>. My focus is
                React.
              </h1>
              <div className="d-flex justify-content-center flex-m-column mt-5  align-items-center gap-3 my-3">
                <button className="my_primary_btn btn"><a href="">Contact me here <IoIosArrowRoundForward className="" style={{width:'25px',fontSize:'25px' }}></IoIosArrowRoundForward><i className=""></i></a></button>
                <button className="my_secondary_btn btn"><a href="">Download resume <TfiDownload  style={{width:'25px',fontSize:'15px' }}></TfiDownload></a></button>
                
                <span className="social_links"><FaLinkedin></FaLinkedin></span>
                <span className="social_links"><FaGithub></FaGithub></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introsection;
