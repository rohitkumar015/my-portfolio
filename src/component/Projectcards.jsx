import React from "react";
import { LuLink } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
const Projectcards = () => {
  return (
    <div className="project_card">
      <div className="row  overflow-hidden">
        <div className="col-6">
          <h4 className="secondary_text_clr mt-2" style={{ textAlign: "left" }}>
            NetFlixGpt
          </h4>
          <p className="secondary_text_clr mt-3" style={{ textAlign: "left" }}>
          "NetflixGPT" is a project I built as a practice exercise in React for beginners. It incorporates several key technologies such as Redux for state management and React Router for navigation.
          </p>
          <div  style={{ textAlign: "left" }} >
            <a href="https://moviesnetflix.netlify.app/" target="blank" style={{ textAlign: "left" }} className="project_link"><FaLink className="me-2 fw-bold" style={{width:'25'}}></FaLink>nextflix.com</a>
          </div>

          <div className="mt-5">
            <div className="d-flex align-items-center gap-3 flex-wrap">
                <span className="capsule">
                    React
                </span>
                <span className="capsule">
                    JavaScript
                </span>
                <span className="capsule">HTML</span>
                <span className="capsule">
                    CSS
                </span>
                


            </div>

          </div>
        </div>
        <div className="col-6  position-relative">
          <img
            src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="project_image mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Projectcards;
