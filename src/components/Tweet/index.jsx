import { FaHeart } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import styles from "./Tweet.module.css";

function Tweet({ tweet, removeTweet }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{tweet.username}</div>
      <div>{tweet.content}</div>
      <div>
        <div>
          <FaHeart /> {tweet.likes}
        </div>
        <div>
          <LiaRetweetSolid size={22} /> {tweet.retweets}
        </div>
      </div>
    
    <div>
        <button className={styles.button} onClick={() => removeTweet(tweet.id)}>delete</button>
    </div>
    
    </div>

  );
}
export default Tweet;
