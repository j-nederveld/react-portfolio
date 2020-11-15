import Jumbotron from 'react-bootstrap/Jumbotron';

function Hero(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
    )
}

export default Hero;