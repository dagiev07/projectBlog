import React from "react";
import { Link } from "react-router-dom";
const Right = ({ posts }) => {
  return (
    <div className="right">
      {posts.map((post) => {
        return (
          <div>
            <div>
              <img src={post.Image} alt="phot" />
            </div>
            <div>
              <p className="posts">{post.title}</p>
              <p>
                {post.information.slice(0, 150)}
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

export default Right;
