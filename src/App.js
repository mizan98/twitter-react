import React from 'react';

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
            <div>
                <button onClick = {()=> this.switchTweetsHandler ()}>New Tweet</button>
                <input type="text" onChange = {(e)=>{this.switchInput(e)}} />
                {this.state.showTweets ? tweetsDetail : null}
            </div>
        )
    }
}
export default App;