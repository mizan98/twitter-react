import React from 'react'
import Tweet from './Tweet'
import Monkey from '../image/monkey.jpg'
import Man from '../image/man.jpg'



function Home() {
    return (
        <div className='homebox'>
            <div>
                <h1>Home</h1>
            <div>   
                <Tweet caption='This is a test' image={Monkey}/>
                <Tweet caption='This is the second tweet' image={Man}/>

            </div>
                
            </div>
        </div>
    )
}

export default Home;