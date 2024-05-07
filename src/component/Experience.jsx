import React from "react";

const Experience = () => {
  return (
    <section className="mt-5 " id="experience">
      <div className="max_width m-auto">
        <h2 className="primary_text_clr text-center mb-4">My Experience</h2>
        <div className="timelinecontainer">
          <div className="timeline">
            <ul className="p-0">
              {/* <li>
                <div className="timeline-content">
                  <h3 className="date">20th may, 2010</h3>
                  <h1>Heading 1</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur tempora ab laudantium voluptatibus aut eos
                    placeat laborum, quibusdam exercitationem labore.
                  </p>
                </div>
              </li> */}
              <li>
                <div className="timeline-content">
                  <h3 className="date">14th nov, 2022</h3>
                  <h3>Hyplap IT Solution Pvt Ltd </h3>
                  <p>Frontend Developer</p>
                  <p>
                    Created and maintained web pages that are responsive using
                    HTML, CSS, JavaScript, and Bootstrap for various clients and
                    projects. Collaborated with backend developers , designers
                    and tester to ensure high-quality web application and user
                    experience. Debugged and fixed frontend issues using Chrome
                    DevTools.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
