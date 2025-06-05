import React from "react";
import { useParams } from "react-router-dom";
import posts from "../posts";

const BlogPost = () => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);
  if (!post) return <p>Post not found</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p style={{ color: "#888" }}>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  );
};

export default BlogPost;