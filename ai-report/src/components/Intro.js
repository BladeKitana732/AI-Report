import React from 'react';
import Intro_header from './Intro/Intro_header.jsx'

export default function Intro() {
    return (
        <div>
            <h1>Intro (What is AI?) Component</h1>
            <Intro_header
            image_path='https://upload.wikimedia.org/wikipedia/commons/2/2e/What-is-artificial-intelligence-_What_is_artificial_intelligence.jpg'
            image_path2='https://cdn.business2community.com/wp-content/uploads/2018/01/AI_1516402418.jpg'
            image_path3='https://bitsandatoms.co/wp-content/uploads/2019/04/future_ai-1024x585.jpeg'
            header_text="WHAT IS ARTIFICIAL INTELLIGENCE (AI)?"
            article="
                It depends who you ask.
                Back in the 1950s, the fathers of the field Minsky and McCarthy, described artificial intelligence as any task performed by a program or a machine that, if a human carried out the same activity, we would say the human had to apply intelligence to accomplish the task.
                That obviously is a fairly broad definition, which is why you will sometimes see arguments over whether something is truly AI or not.
                AI systems will typically demonstrate at least some of the following behaviours associated with human intelligence: planning, learning, reasoning, problem solving, knowledge representation, perception, motion, and manipulation and, to a lesser extent, social intelligence and creativity.  
            "
            />
        </div>
    )
}
