import React from "react";

const Post = ({ children: { id, name, info }, children }) => {
  console.log("🚀 ~ Post ~ children:", children);
  return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{info}</p>
        <a href="#" className="btn btn-primary">
          {name}
        </a>
      </div>
    </div>
  );
};

export default Post;
