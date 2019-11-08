import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Notifications from './components/Notifications'
import Messages from './components/Messages'
import Bookmarks from './components/Bookmarks';
import Lists from './components/Lists'
import Profile from './components/Profile'
import Nav from './components/Nav'


class App extends React.Component {
    

    render(){
        return(
         <BrowserRouter>
            <div className="content">
                <Nav/>
                <Home/>
                <Trending/>
            </div>
           
                <div className="app">
                        <Switch>
                            <Route path='/Notifications' render={ () => <Notifications/> } />
                            <Route path='/Messages' render={ () => <Messages/> } />
                            <Route path='/Bookmarks' render={ () => <Bookmarks/> } />
                            <Route path='/Lists' render={ () => <Lists/> } />
                            <Route path='/Profile' render={ () => <Profile/> } />
                        </Switch> 
                    
                </div>
            </BrowserRouter>
        
        )
    }
    
}

export default App;
