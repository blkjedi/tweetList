import { useState } from "react";
import { data } from "../../data/data";
import Tweet from "../Tweet";

import "./TweetList.module.css";
import CreateTweetForm from "../CreateTweet";
import { v4 as uuidv4 } from 'uuid';

function TweetList() {
  const [tweets, setTweets] = useState(data);

  const addTweet = (newTweet) => {
    const tweetDoc = {
        content:newTweet,
        username:'hellome',
        likes:0,
        retweets:0,
        timstamp:new Date(),
        id: uuidv4()
    }
    setTweets([tweetDoc, ...tweets])
  }
  const removeTweet = (tweetId) =>{
    setTweets(tweets.filter(t => t.id !== tweetId))
  }

  return (
    <div>


      <h2>Spilt Tea</h2>
      <CreateTweetForm addTweet={addTweet}/>

      <section>
        {tweets.map((item) => (
          <Tweet tweet= {item} key={item.id} removeTweet={removeTweet}/>
        ))}
      </section>
    </div>
  );
}

export default TweetList