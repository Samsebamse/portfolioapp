import React, { Component } from 'react';
import { card } from '../shared/card';
import './Projects.css';

import { connect } from 'react-redux';

class Projects extends Component {
    render() {
        const { projects } = this.props.projectspage;
        return (
            <div className="projects">
                {projects.map((item, key) => {
                    return card(item, key);
                })}
            </div>
        );
    }  
}

const mapStateToProps = (state) => ({
    projectspage: state.projectspage
});
    
const mapDispatchToProps = (action) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);