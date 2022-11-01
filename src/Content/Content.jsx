import React from "react";
import { useParams } from "react-router-dom";
import Left from "./Left";
import Right from "./Right";
import Advertising from "./Advertising";
import "./content.css";

const Content = ({ data }) => {
  const { category } = useParams();

  console.log(category);

  const posts = data.filter((item) => item.category === category);

  return (
    <div className="content">
      <h1>{category}</h1>
      <div className="content__item">
        <Left posts={posts.filter((item) => item.direction === "left")} />
        <Right posts={posts.filter((item) => item.direction === "right")} />
      </div>
      <hr />
      <Advertising
        posts={data.filter((item) => {
          if (
            category === "fitness" &&
            (item.id === 39 ||
              item.id === 38 ||
              item.id === 37 ||
              item.id === 35)
          ) {
            return item;
          }
          if (
            category === "food" &&
            (item.id === 41 ||
              item.id === 42 ||
              item.id === 43 ||
              item.id === 44)
          ) {
            return item;
          }
          if (
            category === "Technology" &&
            (item.id === 13 ||
              item.id === 14 ||
              item.id === 15 ||
              item.id === 16)
          ) {
            return item;
          }
          if (
            category === "Tourism" &&
            (item.id === 1 ||
              item.id === 3 ||
              item.id === 4 ||
              item.id === 6)
          ) {
            return item;
          }
        })}
      />
    </div>
  );
};

export default Content;
