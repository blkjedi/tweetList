import { FaHeart } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import {createPortal} from "react-dom"
import styles from "./Tweet.module.css";
import { useState } from "react";
import UpdateTweetFrom from "../UpdateTweet";

function Tweet({ tweet, removeTweet, updateTweet }) {

  const [showModal,setModal] = useState(false)

  return (

    <>
    {/* {showModal && createPortal(<UpdateTweetFrom tweet={tweet} setModal={setModal} updateTweet={updateTweet}/>, document.body)} */}
    <div className={styles.container}>
      <div className={styles.title}>{tweet.username}</div>
      <div>{tweet.content}</div>
      <div className="heart">
        <div>
          <FaHeart /> {tweet.likes}
        </div>
        <div>
          <LiaRetweetSolid size={22} /> {tweet.retweets}
        </div>
      </div>
    
    <div>
        <button className={styles.button} onClick={() => removeTweet(tweet._id)}>delete</button>

        <button  onClick={() => setModal(true)}>update</button>
    </div>
    {showModal && (
          <UpdateTweetFrom
            tweet={tweet}
            setModal={setModal}
            updateTweet={updateTweet}
          />
        )}
    </div>
    </>

  );
}
export default Tweet;
