import React from "react";
import { useLocation, Link } from "react-router-dom";
import posts from "../posts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("q")?.toLowerCase() || "";
  const results = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.body.toLowerCase().includes(query) ||
      p.excerpt.toLowerCase().includes(query)
  );

  return (
    <div>
      <h1>Search Results for: "{query}"</h1>
      {results.length === 0 && <p>No blog posts found.</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {results.map((post) => (
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
};

export default SearchResults;