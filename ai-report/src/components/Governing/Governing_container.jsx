import React from 'react';
import { Player } from 'video-react';
import ReactPlayer from "react-player";
import "./styles/Governing_container.scss"

export default function Governing_container(props) {
    return (
        <div className='Main'>
            <div className="Header">
                <div className="firstBlock">
                    <h2>{props.headText_top}</h2>
                    <img src={props.article_Pic} alt="no img" width='600px'/>
                    <article>{props.article}</article>
                    <article>{props.article_top_2}</article>
                    <article>{props.article_top_3}</article>
                    <article>{props.article_top_4}</article>
                    <article>{props.article_top_5}</article>
                </div>
                <div className="secondBlock">
                    <h2>{props.headText_middle}</h2>
                    <article>{props.article_middle}</article>
                    <img src={props.article_Pic2} alt="no img" width='900px' />
                    <article>{props.article_middle2}</article>
                    <article>{props.article_middle3}</article>
                    <article>{props.article_middle4}</article>
                    <article>{props.article_middle5}</article>
                    <article>{props.article_middle6}</article>
                    <article>{props.article_middle7}</article>
 
                </div>
                <div className="thirdBlock">
                    <h2>{props.headText_middle}</h2>
                    <article>{props.article_bottom}</article>
                    <img src={props.article_Pic3} alt="no img" width='600px'/>
                    <article>{props.article_bottom2}</article>
                    <article>{props.article_bottom3}</article>
                    <article>{props.article_bottom4}</article>
                </div>
                    <div className="videoLink">
                        <ReactPlayer className="videoLink"
                            url="https://www.youtube.com/watch?v=oXEOXDS8nJ8"
                            width="30vw"
                            height='40vh'
                        />
                        <ReactPlayer className="videoLink"
                            url="https:www.youtube.com/watch?v=775DYqKA5Ks"
                            width="30vw"
                            height='40vh'
                        />
                    </div>
                    <div className="links">
                        <a href="https://www.raconteur.net/technology/robot-tax">Do we need a robot tax?</a>
                        <a href="https://www.raconteur.net/risk-management/ai-ip-rights">Should AI own their own IP?</a>
                        <a href="https://www.raconteur.net/business-innovation/innovation-automation">Why AI won’t replace human inventors?</a>
                        <a href="https://www.raconteur.net/technology/rpa-game-thrones">What Game of Thrones can teach us about AI?</a>
                    </div>
            </div>
        </div>
    )
}
