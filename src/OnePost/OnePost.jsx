import React from "react";
import "./onepost.css";
import { useParams } from "react-router-dom";

const OnePost = ({data}) => { 

  const { id } = useParams()

  const post = data.find(el => el.id === +id)

  console.log(post);

  return (
    <div className="one-post">
      <h1 className="one-post-main">{post.title}</h1>
      <div className="one-post-info"><p>{post.information}</p></div>
      <img src={`${post.Image}`} alt="asd" />
    </div>
  );
};

export default OnePost;
