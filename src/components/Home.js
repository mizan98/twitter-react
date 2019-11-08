import React from 'react'
import img1 from '../tweet.png'

export default function Home() {
    return (
        <div>
                <div className="Title">
                    <h1>Home</h1>
                    
                </div>

            <body>
                <div className="content">
                <img className="tweet" src={img1} alt = "tweet"></img>
                </div>
            </body> 

        </div>
    )
}
