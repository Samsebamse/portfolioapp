import React, { Component } from 'react';
import './Home.css';
import portrait from '../assets/images/portrait.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        const { homepage } = this.props;
        return (
            <div className="home">
                <div className="header">
                    <h4>{homepage.greeting}</h4>
                    <h1>{homepage.professiontype}</h1>
                    <p>{homepage.intro1}</p>
                    <Link className="procjetsbtn" to='/projects'>View projects</Link>
                </div>
                <div className="authorcontainer">
                    <div className="portrait">
                        <img src={portrait} alt="Portrait of author" />
                    </div>
                    <div className="aboutme">
                        <h1>About me</h1>
                        <p>{homepage.intro2}</p>
                        <a className="downloadbtn" href="../../public/assets/cv_sami200220.pdf" download>Download CV</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    homepage: state.homepage
});

const mapDispatchToProps = (action) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
