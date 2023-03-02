import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://photo-cdn2.icons8.com/4QcTHTXbjofbWburIkXw5ATVD_H3OmO1a7YDX5vgngQ/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNzk5L2JjODE0/YWQ1LWQyM2UtNGUx/NS1hZWZhLTFlNzVm/M2Q1YjFkNS5qcGc.webp"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Cat staring without any reason</h2>
        <p className="info">
          <a href="/" className="author">
            Nikhil
          </a>
          <time>2023-03-01 10:38</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          repellendus cumque necessitatibus soluta aperiam delectus voluptatum
          distinctio veritatis nisi deserunt consectetur, magnam quia vero
          sapiente ducimus qui iusto illum corporis!
        </p>
      </div>
    </div>
  );
};

export default Post;
