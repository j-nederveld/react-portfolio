import React from 'react';
import pfp from '../img/pfp.jpg';
import resume from '../img/Resume.pdf';
import Container from 'react-bootstrap/esm/Container';
import Hero from '../components/Jumbotron'


function Home(props) {
    return(

< >
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
     
       
        <div className="container">
                   <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2">
            <img id="pfp" src={pfp} style={{maxWidth: "100%"}} alt="" />
          </div>

          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-10 paddingTop-xs">
            <div className="row tile marginBottom line25 font18">
              <p>Constantly learning and adding to my skillset is important to me. Learn fast, without cutting corners. I want to be able to provide the best, most efficient solution for any task. Programming languages are constantly evolving, therefore it is necessary to be adaptable and always ready for what is next.</p>
              <br />
              <p>Team oriented. Creative solutions, exceptional attention to detail. I have experience with HTML, CSS, PHP, and some JavaScript. I am an avid learner and willing to take on new projects.</p>
              <br />
              <p>Currently, I am enrolled in the Full Stack Flex program at the University of Central Florida in order to refine and add to my skillset.</p>
              
              <p><br /><a className="hoverDark" href={resume} target="_blank">Check out my resume</a></p>
            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default Home;