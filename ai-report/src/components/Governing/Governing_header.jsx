import React from 'react';
import  './styles/Governing_header.scss';


export default function GoverningComp(props) {
    return (
        <div>
            <div className="Parralax">
                <h1 > <span>Who is</span> <span>responsible</span> <span> for AI’s decisions?</span> </h1>
                <img src={props.picture} alt="no img" position='fixed'/>
            </div>

        </div>
    )
}
