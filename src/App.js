import React from 'react';
import './App.css';
import {render} from 'react-dom'
import SplitPane from 'react-split-pane'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Explore from './components/Explore'
import Notifications from './components/Notifications'
import Messages from './components/Messages'
import Bookmarks from './components/Bookmarks';
import Lists from './components/Lists'
import Profile from './components/Profile'


const styles = {
    background: '#000',
    width: '2px',
    cursor: 'col-resize',
    margin: '0 5px',
    height: '100%',
  };

const App = () => (
    <Router>
        <SplitPane
        split="vertical"
        minSize={100}
        defaultSize={100}
        resizerStyle={styles}
        >
            <menu>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/Explore'>Explore</Link></div>
                <div><Link to='/Notifications'>Notifications</Link></div>
                <div><Link to='/Messages'>Messages</Link></div>
                <div><Link to='/Bookmarks'>Bookmarks</Link></div>
                <div><Link to='/Lists'>Lists</Link></div>
                <div><Link to='/Profile'>Profile</Link></div>

            </menu>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/Explore' component={Explore} />
                <Route path='/Notifications' component={Notifications} />
                <Route path='/Messages' component={Messages} />
                <Route path='/Bookmarks' component={Bookmarks} />
                <Route path='/Lists' component={Lists} />
                <Route path='/Profile' component={Profile} />
            </div>
        </SplitPane>
    </Router>
)

export default App;
