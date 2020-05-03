import React from 'react';


export default function GoverningComp(props) {
    return (
        <div>
            <div className="Parralax">
                <h1 >Who is responsible for AI’s decisions?</h1>
                <img src={props.picture} alt="no img" position='fixed'/>
            </div>
            <div className="Header">
               <h2>{props.headText}</h2>
                {/*  background img<img src={props.secondPic} alt="no img" /> */}

            </div>
        </div>
    )
}
