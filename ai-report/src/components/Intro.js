import React from 'react';
import imageAI from './imageAI.jpg';

export default function Intro() {
    return (
        <div>
            <h1>What is <em>Artificial Intelligence</em>?</h1>
            <img src = { imageAI } alt= 'ai-intelligence' style = {{ width: 700, height: 200}}/>
            <p>Artificial Intelligence, also referred to as AI for short,involves using computers to do things that traditionally require human intelligence. Just like someone in the field of computer science or software engineering, those in this field also create algorithms to classify, analyze, and draw predictions from data.</p>

        </div>
    )
}
