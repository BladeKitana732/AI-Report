import React from 'react';
import './styles/Ethics_container.scss'

export default function Ethics_container(props) {
    return (
        <div>
            <div className="first_block article_block">
                <h2>{props.header_text}</h2>
                <article>{props.article_top}</article>
                <article>{props.article_top2}</article>
            </div>
            <div className="second_block article_block">
                <h2>{props.header_middle}</h2>
                <article>{props.article_middle}</article>
                <article>{props.article_middle2}</article>
                <article>{props.article_middle3}</article>
            </div>
            <div className="third_block article_block">
                <h2>{props.header_middle2}</h2>
                <article>{props.article_middle4}</article>
                <article>{props.article_middle5}</article>
            </div>
            <div className="fourth_block article_block">
                <h2>{props.header_bottom}</h2>
                <article>{props.article_bottom}</article>
                <article>{props.article_bottom2}</article>
            </div>
            <div className="fifth_block article_block">
                <h2>{props.header_bottom2}</h2>
                <article>{props.article_bottom3}</article>
                <article>{props.article_bottom4}</article>
            </div>
        </div>
    )
}
