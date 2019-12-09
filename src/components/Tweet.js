import React from 'react'

export default function Tweet(props) {
    return (
        <div className="tweetbox">
            <h3>{props.caption}</h3>
            <img className='tweet-images' src={props.image} alt= ''/>
        </div>
    )
}
