import React from "react";
import { Link } from "react-router-dom";
import posts from "../posts"; // see posts.js below

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {posts.map((post) => (
        <li key={post.id} style={{ margin: "1.5rem 0" }}>
          <Link to={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
            <p style={{ color: "#888" }}>{post.date}</p>
            <p>{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Blog;