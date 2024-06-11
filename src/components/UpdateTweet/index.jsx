import { useState } from "react";

import styles from '../UpdateTweet/UpdateTweet.module.css'

function UpdateTweetFrom({ tweet, setModal, updateTweet }) {
  const [newTweetContent, setNewTweetContent] = useState(tweet.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTweet(tweet._id, newTweetContent)
    setModal(false)
  }
  return (
    <div className={styles.form}>
    <form  onSubmit={handleSubmit}>
      <input type="text" value={newTweetContent}
      onChange={(e) => setNewTweetContent(e.target.value)}
      />

      <input type="submit" value="save" />
    </form>
    </div>
  );
}
export default UpdateTweetFrom;
