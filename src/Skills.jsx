import React from 'react';
import { icons } from './assets/icons';

const Skills = () => {
  return (
    <div>
            <section id="skills" className="bg-white">
        <div className="">
          <h1 className="text-center mt-5">Skills</h1>
          <p className="text-center">
            I have hands-on experience with these technologies and tools, and
            continue to explore many more. <br /> My passion for learning keeps
            me constantly expanding my skill set.
          </p>
        </div>
        <div className="img-icon gap-2 mt-5 d-flex flex-wrap justify-content-center">
          <img src={icons.html} className="img-thumbnail" alt="Html" />
          <img src={icons.css} className="img-thumbnail" alt="css" />
          <img src={icons.javascript} className="img-thumbnail" alt="js" />
          <img src={icons.reactS} className="img-thumbnail" alt="react" />
          <img src={icons.mongodb} className="img-thumbnail" alt="mongodb" />
          <img src={icons.nodes} className="img-thumbnail" alt="node" />
          <img src={icons.github} className="img-thumbnail" alt="github" />
          <img src={icons.express} className="img-thumbnail" alt="express" />
          <img src={icons.java} className="img-thumbnail" alt="java" />
          <img src={icons.vsCode} className="img-thumbnail" alt="vs" />
        </div>
      </section>
    </div>
  )
}

export default Skills
