import React from 'react';
import Governing_header from './Governing/Governing_header';
import Governing_container from './Governing/Governing_container';

export default function Governing() {
    return (
        <div>
            <h1>Governing AI</h1>
            <Governing_header
             picture = "https://acn-marketing-blog.accenture.com/wp-content/uploads/2020/01/istock-940875820.jpg"
             secondPic="https://wallpaperaccess.com/full/1398312.jpg"
             />

            <Governing_container

             headText_top="Why do we need better AI regulation?"

             article="
                We live in a world where humans aren’t the only ones that have rights. In the eyes of the law, artificial entities have a legal persona too. Corporations, partnerships or nation states also have the same rights and responsibility as human beings. With rapidly evolving technologies, is it time our legal system considered a similar status for ?"
             article_Pic="https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/right-20190226114018809.jpg"
             article_top_2="
                “AI is already impacting most aspects of our lives. Given its pervasiveness, how this technology is developed is raising profound legal and ethical questions that need to be addressed,” says Julian David, chief executive of industry body techUK."
             article_Pic2="https://ohrh.law.ox.ac.uk/wordpress/wp-content/uploads/2018/01/ITU.jpg"
             article_top_3="
                Take Facebook, Amazon or IBM, they are all legal entities, with similar privileges as citizens, with the right to defend themselves in court and the right to free speech. If IBM has a legal personhood, is it possible that Watson, the company’s AI engine, Google’s complex algorithm or Amazon’s Alexa might also qualify for a new status in law, with new responsibilities and rights too?"
             article_top_4="
                “The idea isn’t as ridiculous as it initially appears. It’s sometimes a problem that AI is regulated according to rules that were developed centuries ago to regulate the behaviour of people,” says Ryan Abbott, professor of law at the University of Surrey."
             article_top_5="
                “One of the biggest and legally disruptive challenges posed by AI is what to do with machines that act in ways that are increasingly autonomous.”"

             headText_middle="Justice for robots"

             article_middle="
                “This burning issue drove the European Parliament to act two years ago. It considered creating a new legal status – electronic personhood – with a view to . Their reasoning was that AI, an algorithm or a robot could then be held responsible if things went wrong, like a company. In response, 156 AI specialists from 14 nations denounced the move in a group letter."
             article_middle2="
                “It makes no sense to make a piece of computer code responsible for its outputs, since it has no understanding of anything that it’s done. Humans are responsible for computer output,” says Noel Sharkey, emeritus professor of AI and robotics at the University of Sheffield, who signed the missive. “This could allow companies to slime out of their responsibilities to consumers and possible victims.”"
             article_middle3="
                Certainly, making AI a legal entity would create a cascade of effects across all areas of law. Yet the idea behind the EU e-person status was less about giving human rights to robots, but more about making sure AI will remain a machine with human backing, which is then accountable in law."
             article_middle4="
                ““To be worthy of people’s trust, greater clarity around the status of AI will certainly be important,” argues Josh Cowls, research associate in data ethics at the Alan Turing Institute. “But by carving AI out from the very human decisions about why it works the way it does and giving it a quasi-mythical status as a separate entity, we risk losing the ability to ask questions of the people and companies who design and deploy it.”"
             article_middle5="
                ““Incoming president of the European Commission, Ursula von der Leyen, has pledged to regulate AI in her first 100 days of office. There’s also a growing international effort; in the past few years 84 groups around the world have , according to researchers at ETH Zurich. In the UK, the Office for AI, the Centre for Data Ethics and Innovation, as well as the Information Commissioner’s Office, are all focused on these issues, yet these are still early days."
             article_middle6="
                ““I’m sceptical about the possibility of a position on AI in the legal framework,” says Matt Hervey, head of AI at Gowling WLG. “We cannot even agree on a definition, let alone its place in law. AI covers a range of tools being used in a growing number of applications. But given the potential disruptive impact of AI, legislators are right to consider whether new laws are justified."
             article_middle7="
                ““Yet laws and regulation tend to lag significantly behind technological change. It took over a decade for our copyright law to catch up with the video recorder and the same again for the iPod. Lawmakers cannot predict what tech companies will produce and these firms often fail to predict how the public will use the technology.”"
            

            headText_middle="Who is responsible for AI’s decisions?"

            article_bottom1="
                Worryingly, none of the current AI ethical codes that the Open Data Institute analysed carry legal backing, or forms of recourse, or penalties for breaking them. To date there are few legal provisions for AI. It’s only a matter of time before tighter regulation comes into force, especially if the general public is to trust AI’s meteoric rise and use by technologists."
            article_bottom2="
            “This is unlike other professions such as medicine or law where people can be banned from practising the profession if they break an ethical code,” explains Peter Wells, the Open Data Institute’s head of public policy."
            article_Pic3="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyHfMTgyQkHVBErB7ubtXSlP7gmFljXtCbwxr-YSYLPht4KdQh&usqp=CAU"
            article_bottom3="
            “So, if an algorithm makes an autonomous decision, who’s responsible? Experts agree that a clear chain of human accountability is crucial. The EU’s General Data Protection Regulation helps in this regard, but with  now and in the future, the law may need to do more."
            article_bottom4="
            ““We are seeing a massive commercialisation of ethics with many companies setting up token ethics boards that do not penetrate into the core issues of their business. This kind of ethics-washing is designed to hinder new regulations,” exclaims Professor Sharkey."
            />

        </div>
    )
}
