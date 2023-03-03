import React from "react";
import { format } from "date-fns";
// import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://photo-cdn2.icons8.com/4QcTHTXbjofbWburIkXw5ATVD_H3OmO1a7YDX5vgngQ/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNzk5L2JjODE0/YWQ1LWQyM2UtNGUx/NS1hZWZhLTFlNzVm/M2Q1YjFkNS5qcGc.webp"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a href="/" className="author">
            {author}
          </a>
          <time>{format(new Date(createdAt), "MMM d, yyyy ~ HH:mm")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
