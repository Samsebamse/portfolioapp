import React from 'react';
import projectimg from '../assets/images/project.png';
import './card.css';

export const card = (project, key) => {
    return (
        <div className="card" key={key}>
            <img src={projectimg} alt="project" />
            <div className="textfield" onClick={clickHandler}>
                <h4 className="title">{project.title}</h4>
                <p className="content">{project.content}</p>
            </div>
        </div>
    );
};


const clickHandler = () => {
};