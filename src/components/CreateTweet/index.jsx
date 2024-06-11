import { useState,useRef } from 'react';

import styles from './CreateTweet.module.css'


function CreateTweetForm({ addTweet }) {
    const [content, setContent] = useState("");
    const inputRef = useRef(null)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputRef.current.value === ''){
        inputRef.current.focus();
        // alert('full out')
        return;
      }
      addTweet(content);
      setContent('')
    };
  
    return (
      <form onSubmit={handleSubmit} className={styles.container}>
        <label htmlFor="content">whats the tea?</label>
  
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          ref={inputRef}
        />
  
        <input type="submit" value="Spill" />
      </form>
    );
  }

export default CreateTweetForm