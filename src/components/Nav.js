import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../twitter.png'

export default function Nav(props) {
    return (
        <aside>

        <img src={img1} alt="twitter logo"></img>
            <nav>
            
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Explore'>Explore</Link></li>
                    <li><Link to='/Notifications'>Notifications</Link></li>
                    <li><Link to='/Messages'>Messages</Link></li>
                    <li><Link to='/Bookmarks'>Bookmarks</Link></li>
                    <li><Link to='/Lists'>Lists</Link></li>
                    <li><Link to='/Profile'>Profile</Link></li>
                </ul>
            </nav>
        </aside>
        
    )
}
