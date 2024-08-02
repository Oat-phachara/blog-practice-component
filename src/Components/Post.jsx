import React from "react";
import { useState } from "react";

function Post({ title, img, content }) {
  const [love, setlove] = useState(null);

  const like = () => setlove((i) => i + 1);
  const dislike = () => {
    return love ? setlove((i) => i - 1) : setlove(null);
  };

  return (
    <div className="card">
      <div className="title bg-blue">
        <h3>
          <a href="">{title}</a>
        </h3>
      </div>
      <div className="content">
        <img src={img} alt="" />
        <p>{content}</p>
      </div>
      <div className="readmore">
        <a href="" className="co-read">
          readmore
        </a>
        <button onClick={like}>❤️</button>
        <button onClick={dislike}>💔</button>
        <p className="count">{love}</p>
      </div>
    </div>
  );
}

export default Post;
