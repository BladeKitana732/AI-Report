import React from 'react'
import './styles/Ethics_header.scss'


export default function Ethics_header(props) {
    return (
        <div className='Header__main'>
            <div className="Header__main-container">
                <h1>The Ethics of Artificial Intelligence</h1>
                <img src={props.image_path4} alt="no image to display"/>
                <img src={props.image_path2} alt="no image to display" width='450' />
   
                <img src={props.image_path3} alt="no image to display" width='450'/>
                <div className="Header__main-container-article">
                    <article>{props.statement}</article>
                    <article>{props.statement2}</article>
                </div>

            </div>
            {/* <img src={props.image_path} alt="no image to display" /> */}
        </div>
    )
}
