import { useEffect, useState } from "react";
import { data } from "../../data/data";
import Tweet from "../Tweet";

import "./TweetList.module.css";
import CreateTweetForm from "../CreateTweet";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'

function TweetList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:4000/tweets");
        console.log(res.data);
        setTweets([...res.data]);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const addTweet = async (newTweet) => {
    // const tweetDoc = {
    //   content: newTweet,
    //   username: "hellome",
    //   likes: 0,
    //   retweets: 0,
    //   timstamp: new Date(),
    //   id: uuidv4(),
    // };


    // setTweets([tweetDoc, ...tweets]);
try {
  const res = await axios.post("http://localhost:4000/tweets", {
        newTweet,
        username: "abe123",
      });
      setTweets([res.data, ...tweets])
} catch (error) {
  
}

  };
  const removeTweet = (tweetId) => {
    setTweets(tweets.filter((t) => t._id !== tweetId));
  };

  const updateTweet= (tweetId,newTweetContent) => {
    setTweets(tweets.map(t => {
      if (t._id === tweetId){
        return{
          ...t,
          content: newTweetContent
        }
      }else return t;
    }))
  }

  return (
    <div>
      <CreateTweetForm addTweet={addTweet} />
      
<h2>Spilt Tea...</h2>
      <section>
        {tweets.map((item) => (
          <Tweet tweet={item} key={item._id ? item._id : item.id} removeTweet={removeTweet}  updateTweet={updateTweet}/>
        ))}
      </section>
    </div>
  );
}

export default TweetList;
