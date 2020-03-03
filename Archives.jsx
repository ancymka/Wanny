import React, { useState, useEffect } from "react";
import axios from "axios";

const Archives = props => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setPosts(res.data);
    });
  }, []);

  const renderPosts = () => {
    if (posts) {
      const renderedPosts = posts.map(post => {
        return <p>{post.title}</p>;
      });

      return renderedPosts;
    }
  };

  return <div>{renderPosts()}</div>;
};

export default Archives;
