import React from 'react';
import './styles/Ethics_container.scss';
import ReactPlayer from "react-player";

export default function Ethics_container(props) {
    return (
        <div className='main_container'>
            <div className="first_block article_block">
                <div className="first_block__article">
                    <h2>{props.header_text}</h2>
                    <article>{props.article_top}</article>
                    <article>{props.article_top2}</article>
                </div>
                <div className="picture">
                    <img src="https://financesonline.com/uploads/2019/11/building-a-competitive-ethical-AI-economy.jpg" alt="no image"
                    width='140%'
                    height="180%" />
                </div>
            </div>
            <div className="second_block article_block">
                <div className="players">
                    <ReactPlayer className="Player"
                        url="https://www.youtube.com/watch?v=H15uuDMqDK0"
                        width="1000px"
                    />
                </div>
                <div className="second_block__article">
                    <h2>{props.header_middle}</h2>
                    <article>{props.article_middle}</article>
                    <article>{props.article_middle2}</article>
                    <article>{props.article_middle3}</article>
                </div>
            </div>
            <div className="third_block article_block">
                <div></div>
                <div className="third_block__article">
                <h2>{props.header_middle2}</h2>
                <div className="picture">
                <img src="https://www.governmentciomedia.com/sites/default/files/styles/featured_article_image/public/2019-03/Screen%20Shot%202019-03-11%20at%201.49.45%20PM.png?itok=QMMmxNPM" alt="no img"
                    width="1000px"
                    />
                </div>

                <article>{props.article_middle4}</article>
                <article>{props.article_middle5}</article>
                </div>
                <div className="players">
                    <ReactPlayer className="Player"
                        url="https://www.youtube.com/watch?v=vgUWKXVvO9Q"
                        width="1000px"
                    />
                </div>
            </div>
            <div className="fourth_block article_block">
                <h2>{props.header_bottom}</h2>
                <article>{props.article_bottom}</article>
                <article>{props.article_bottom2}</article>
            </div>
            <div className="players">
                <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=Izd2qOgOGQI"
                    width="800px"
                />
            </div>
            <div className="fifth_block article_block">
                <div className="fifth_block__article">
                <h2>{props.header_bottom2}</h2>
                <article>{props.article_bottom3}</article>
                <article>{props.article_bottom4}</article>
                </div>
            </div>
            <div className="links">
                <a href="https://www.theatlantic.com/sponsored/hpe-2018/the-ethics-of-ai/1865/">Moral code: ethics of AI.</a>
                <a href="https://www.nytimes.com/2019/03/01/business/ethics-artificial-intelligence.html">Is Ethical A.I. Even Possible?</a>
                <a href="https://www.itpro.co.uk/technology/30736/what-is-ethical-ai">What is ethical AI?</a>
            </div>
        </div>
    )
}
