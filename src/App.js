import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Profile from './components/Profile'
import './App.css';

const Tweet = (props) => {
    return (
        <div>
            <h1>{props.tweet}</h1>
        </div>
    )
}
class App extends React.Component {
    state = {
        tweets: [           
        ],
        showTweets: true,
        text: ""
    }

    switchTweetsHandler = () => {
        this.setState(
          {
            tweets:[
              ...this.state.tweets,
              {tweet : this.state.text},
            ]
          }
        )
    }

    switchInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render(){

        const tweetsDetail = this.state.tweets.map((tweets, i)=>{
            return <Tweet key = {i} tweet = {tweets.tweet} />
        })

        return(
        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" render={ () => <Home/>}/>
                    <Route path="/" render={ () => <Profile/>}/>
                </Switch>
                <button onClick = {()=> this.switchTweetsHandler ()}>New Tweet</button>
                <input type="text" onChange = {(e)=>{this.switchInput(e)}} />
                {this.state.showTweets ? tweetsDetail : null}
            </div>
        </BrowserRouter>
        )
    }
}
export default App;