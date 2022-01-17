import React, { useEffect, useState } from "react";
import Share from "../Share/Share";
import Posts from "../Posts/Posts";
import feedStyle from "./Feed.module.css";
// import { myPosts } from "../../dummyData";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:5000/timeline/display/61e5d562374d60f5b3a1f7ef"
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className={feedStyle.feed}>
      <div className={feedStyle.feedWrapper}>
        <Share />
        {posts.map((p) => (
          <Posts key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
