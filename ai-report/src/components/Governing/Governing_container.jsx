import React from 'react';
import { Player } from 'video-react';
import ReactPlayer from "react-player"

export default function Governing_container(props) {
    return (
        <div className='Main'>
            <div className="Header">
            <h2>{props.headText_top}</h2>
                <div className="firstBlock">
                    <article>{props.article}</article>
                    <img src={props.article_Pic} alt="no img" width='300px'/>
                    <article>{props.article_top_2}</article>
                    <article>{props.article_top_3}</article>
                    <article>{props.article_top_4}</article>
                    <article>{props.article_top_5}</article>
                </div>
                <div className="secondBlock">
                    <article>{props.article_middle}</article>
                    <img src={props.article_Pic2} alt="no img" width='300px'/>
                    <article>{props.article_middle2}</article>
                    <article>{props.article_middle3}</article>
                    <article>{props.article_middle4}</article>
                    <article>{props.article_middle5}</article>
                    <article>{props.article_middle6}</article>
                    <article>{props.article_middle7}</article>
                    <div className="videLink">
                    <ReactPlayer
                        url="https:www.youtube.com/watch?v=775DYqKA5Ks"
                    />
                    </div>
                </div>
                <div className="thirdBlock">
                    <article>{props.article_bottom}</article>
                    <img src={props.article_Pic3} alt="no img" width='300px'/>
                    <article>{props.article_bottom2}</article>
                    <article>{props.article_bottom3}</article>
                    <article>{props.article_bottom4}</article>
                    <div className="videLink">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=oXEOXDS8nJ8"
                    />
                    </div>
                </div>

            </div>
        </div>
    )
}
