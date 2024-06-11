import { useEffect, useState } from "react";
import { data } from "../../data/data";
import Tweet from "../Tweet";

import "./TweetList.module.css";
import CreateTweetForm from "../CreateTweet";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'

// vite env vars -> https://vitejs.dev/guide/env-and-mode
console.log(import.meta.env.MODE);
const serverUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000"
    : "https://twitterbackend-w3wu.onrender.com/";


function TweetList() {
  const [tweets, setTweets] = useState([]); // initial value is now null

  // useEffect is used to fetch the tweets when the component is rendered
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(`${serverUrl}/tweets`);
        console.log(res.data);
        setTweets([...res.data]); // here the data is set to the state
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // addTweet will make a POST request and create a new tweet
  const addTweet = async (newTweet) => {
    try {
      const res = await axios.post(`${serverUrl}/tweets`, {
        newTweet,
        username: "abe123",
      });
      console.log(res.data);
      setTweets([res.data, ...tweets]); // new tweet is added to the state
    } catch (error) {
      console.log(error);
    }
  };

  // removeTweet will make a DELETE request and delete a tweet by the id
  const removeTweet = async (tweetId) => {
    try {
      const res = await axios.delete(`${serverUrl}/tweets/${tweetId}`);
      // if request was 'ok' remove from app state
      if (res.status === 200) {
        setTweets(tweets.filter((t) => t._id !== tweetId));
      } else {
        throw Error("Error deleting tweet");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTweet = async (tweetId, newTweetContent) => {
    try {
      const res = await axios.put(`${serverUrl}/tweets/${tweetId}`, {newTweetContent});

      // if request was 'ok' remove from app state
      if (res.status === 200) {
        setTweets(
          tweets.map((t) => {
            if (t._id === tweetId) {
              return {
                ...t,
                content:res.data.content,
              };
            } else {
              return t;
            }
          }),
        );
      } else {
        throw Error("Error updating tweet");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
