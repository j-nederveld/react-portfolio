import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreatePostForm() {

  return (
    <div className="container">
    <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2">
      <img id="pfp" src="https://github.com/j-nederveld/responsive-portfolio/blob/master/assets/img/pfp.jpg" alt="" />
    </div>

    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-10 paddingTop-xs">
      <div className="row tile marginBottom line25 font18">
        <p>Constantly learning and adding to my skillset is important to me. Learn fast, without cutting corners. I want to be able to provide the best, most efficient solution for any task. Programming languages are constantly evolving, therefore it is necessary to be adaptable and always ready for what is next.</p>
        <br />
        <p>Team oriented. Creative solutions, exceptional attention to detail. I have experience with HTML, CSS, PHP, and some JavaScript. I am an avid learner and willing to take on new projects.</p>
        <br />
        <p>Currently, I am enrolled in the Full Stack Flex program at the University of Central Florida in order to refine and add to my skillset.</p>
        
        <p><br /><a className="hoverDark" href="assets/img/Resume.pdf" target="_blank">Check out my resume</a></p>
      </div>
    </div>
  </div>
  </div>
  );
}

export default CreatePostForm;
