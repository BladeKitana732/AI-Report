import React from 'react'
import './styles/Ethics_header.scss'


export default function Ethics_header(props) {
    return (
        <div className='Header__main'>
            <div className="Header__main-container">
                <h1>Im Ethics_header</h1>
                <img src={props.image_path4} alt="no image to display" height='200'/>
                <img src={props.image_path2} alt="no image to display" width='350' />
   
                <img src={props.image_path3} alt="no image to display" width='350'/>
                <article>{props.statement}</article>
                <article>{props.statement2}</article>
            </div>
            {/* <img src={props.image_path} alt="no image to display" /> */}
        </div>
    )
}
