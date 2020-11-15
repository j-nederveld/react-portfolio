import React from 'react';
import artbook from '../img/artbook.png';
import currentWeather from '../img/current-weather.png';
import eatdaburger from '../img/eatdaburger.png';
import jscode2 from '../img/jscode2.png';
import realEstate1 from '../img/real-estate1.png';
import realEstate2 from '../img/real-estate2.png';
import realEstate3 from '../img/real-estate3.png';
import workdayplanner from '../img/workdayplanner.png';

function Portfolio(props) {
    return(
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
     
       
        <div className="container">
        <div className="row">
          <div className="col-md-6 marginBottom">
            <div className="card" style={{width: "18rem"}}>
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={realEstate1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={realEstate2} class="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={realEstate3} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">Real Estate App
                  <br />
                  <a  href="https://j-nederveld.github.io/Real-Estate-App/" className="card-text" target="_blank">Deployed GitHub Page</a>
                  <br />
                  <a  href="https://github.com/j-nederveld/Real-Estate-App" class="card-text" target="_blank">GitHub Repository</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 marginBottom">
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={jscode2} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">JavaScript Code Quiz<br />
                  <a  href="https://j-nederveld.github.io/JavaScript-CodeQuiz/" className="card-text" target="_blank">Deployed GitHub Page</a>
                  <br />
                  <a  href="https://github.com/j-nederveld/JavaScript-CodeQuiz/" className="card-text" target="_blank">GitHub Repository</a>
                </p>
                
              </div>
            </div>
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-6 marginBottom">
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={workdayplanner} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Work Day Scheduler Tool<br />
                <a  href="https://j-nederveld.github.io/Workday-Schedule-App/" className="card-text" target="_blank">Deployed GitHub Page</a>
                <br />
                <a  href="https://github.com/j-nederveld/Workday-Schedule-App/" className="card-text" target="_blank">GitHub Repository</a>
              </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 marginBottom">
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={currentWeather} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Current Weather App<br />
                <a  href="https://j-nederveld.github.io/Current-Weather-App/" className="card-text" target="_blank">Deployed GitHub Page</a>
                <br />
                <a  href="https://github.com/j-nederveld/Current-Weather-App" className="card-text" target="_blank">GitHub Repository</a>
              </p>
              </div>
            </div>
          </div>
</div>
  
  <div className="row">
    <div className="col-md-6 marginBottom">
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={eatdaburger} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Eat Da Burger<br />
          <a  href="https://aqueous-tor-81147.herokuapp.com/" className="card-text" target="_blank">Deployed Heroku App</a>
          <br />
          <a  href="https://github.com/j-nederveld/burger" className="card-text" target="_blank">GitHub Repository</a>
        </p>
        </div>
      </div>
    </div>
    <div className="col-md-6 marginBottom">
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={artbook} alt="Card image cap" />
        <div className="card-body">
          <p class="card-text">Artbook<br />
          <a  href="https://quiet-earth-28574.herokuapp.com/" className="card-text" target="_blank">Deployed Heroku App</a>
          <br />
          <a  href="https://github.com/eschiavoni2/Project2" className="card-text" target="_blank">GitHub Repository</a>
        </p>
        </div>
      </div>
    </div>
</div>
</div>
        
        </>
    );
}

export default Portfolio;