import React from "react";

const Skills = () => {
  return (
    <section className="mt-5 d-flex justify-content-center">
      <div className="max_width">
        <h2 className="primary_text_clr text-center mb-4">My Skills</h2>
        <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
        <span className="text-capitalize skills_item">HTML</span>
        <span className="text-capitalize skills_item">CSS</span>
        

           
            <span className="text-capitalize skills_item">JavaScript</span>
            <span className="text-capitalize skills_item">React</span>
            <span className="text-capitalize skills_item">Angular</span>
            {/* <span className="text-capitalize skills_item">Git Hub</span> */}

            <span className="text-capitalize skills_item">java</span>
            <span className="text-capitalize skills_item">MySql</span>

        </div>
      </div>
    </section>
  );
};

export default Skills;
