import React, { Component } from 'react'
import Twitter from 'twitter'
import Config from '../cfg/config.js'

const client = new Twitter({
    consumer_key: Config.apiKey,
    consumer_secret: Config.apiKeySecret,
    access_token_key: Config.accessToken,
    access_token_secret: Config.accessTokenSecret
})

const params = {screen_name: 'jimmybrawndev'}

client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(!error) 
    console.log(tweets)
  });
  
class StrangersComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            users : null
        }
    }    

    render(){
        return (
            <div>
                this is the list of strangers:
            </div>
        )
    }
}
export default StrangersComponent