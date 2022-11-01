import React from "react";
import { Link } from "react-router-dom";
const Left = ({ posts }) => {
  return (
    <div className="left">
      {posts.map((post) => {
        return (
          <div className="left__item">
            <div>
              <img src={post.Image} alt="phot" />
            </div>
            <div>
              <p className="posts">{post.title}</p>
              <p>
                {post.information.slice(0, 100)}
                <Link className="link-read" to={`/post/${post.id}`}>
                  read more
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Left;
