import React from 'react';
import  './styles/Governing_header';


export default function GoverningComp(props) {
    return (
        <div>
            <div className="Parralax">
                <h1 >Who is responsible for AI’s decisions?</h1>
                <img src={props.picture} alt="no img" position='fixed'/>
            </div>

        </div>
    )
}
