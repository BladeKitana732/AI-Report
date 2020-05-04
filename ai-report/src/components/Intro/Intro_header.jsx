import React from 'react';
import Intro from './styles/Intro_header.scss';

export default function Intro_header(props) {
    return (
        <div className="main_container__intro">
            <img src={props.image_path} alt="no image" width='1000' height='250px'/>
            <div className="main_container__intro-middle">
                <h2>{props.header_text}</h2>
                <article>{props.article}</article>
            </div>
            <img src={props.image_path2} alt="no image" width='1000' height='250px'/>
            <img src={props.image_path3} alt="no image" width='800' height='350px'/>
            <div className="bubbles"></div> 
            <div className="bubbles2"></div> 
            <div className="bubbles3"></div> 
        </div>
    )
}
