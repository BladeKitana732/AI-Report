import React from 'react'

export default function Governing_container(props) {
    return (
        <div>
            <div className="Header">
            <h2>{props.headText}</h2>
            <article>{props.article}</article>
            <img src={props.articlePic} alt="no img" width='500px'/>
            <article>{props.article_2}</article>
            <article>{props.article_3}</article>
            <h2>123</h2>
            </div>
        </div>
    )
}
