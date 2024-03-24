import React from "react";
import Post from "./Post";

const FetchedPosts = ({ posts = [] }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post?.id}>{post}</Post>
      ))}
    </div>
  );
};

export default FetchedPosts;
