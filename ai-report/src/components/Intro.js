import React from 'react';
import imageAI from './imageAI.jpg';

export default function Intro() {
    return (
        <div>
            <h1>What is <em>Artificial Intelligence</em>?</h1>
            <img src = { imageAI } alt= 'ai-intelligence' style = {{ width: 700, height: 200}}/>
            <p>Artificial Intelligence, also referred to as AI for short,involves using computers to do things that traditionally require human intelligence.  Just like someone in the field of computer science or software engineering, those in this field also create algorithms to classify, analyze, and draw predictions from data.  Many believe that AI aims to put the human mind into a computer, although some researchers state it is their objective with their works, it mainly may be that they are using that phrase metaphorically due to the complexity of the brain I doubt anyone is serious about imitating them.  However, the collective objective based off my own research is that it aims to make computer programs that can solve problems and achieve goals in the world as well as humans.  How was AI first brought into the world?</p>
            <br />
            <p>The term artificial intelligence was first coined by John McCarthy in 1956 when he held the first academic conference on the subject. But the journey to understand if machines can truly think began much before that.After WWII, a number of people independently started to work on intelligent machines.  The English mathematician Alan Turing may have been the first.  He gave a lecture on it in 1947.  He also may have been the first to decide that AI was best researched by programming computers rather than by building machines.  By the late 1950s, there were many researchers on AI, and most of them were basing their work on programming computers.</p>
            <br />
            <h2>What are the types of AI that are studied?</h2>
            <br />
            <ol>
                <li>Narrow AI</li>
                <li>General AI</li>
            </ol>

        </div>
    )
}
