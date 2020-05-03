import React from 'react';
import GoverningComp from './Governing/Governing-header'

export default function Governing() {
    return (
        <div>
            <h1>Governing AI</h1>
            <GoverningComp
             picture = "https://acn-marketing-blog.accenture.com/wp-content/uploads/2020/01/istock-940875820.jpg"
             secondPic="https://wallpaperaccess.com/full/1398312.jpg"
             headText="Why do we need better AI regulation?"
             article="
             We live in a world where humans aren’t the only ones that have rights. In the eyes of the law, artificial entities have a legal persona too. Corporations, partnerships or nation states also have the same rights and responsibility as human beings. With rapidly evolving technologies, is it time our legal system considered a similar status for ?"
             articlePic="https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/right-20190226114018809.jpg"
             article2="
             “AI is already impacting most aspects of our lives. Given its pervasiveness, how this technology is developed is raising profound legal and ethical questions that need to be addressed,” says Julian David, chief executive of industry body techUK."
             article3="
             Take Facebook, Amazon or IBM, they are all legal entities, with similar privileges as citizens, with the right to defend themselves in court and the right to free speech. If IBM has a legal personhood, is it possible that Watson, the company’s AI engine, Google’s complex algorithm or Amazon’s Alexa might also qualify for a new status in law, with new responsibilities and rights too?"
            />
        </div>
    )
}
