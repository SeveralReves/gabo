// src/components/TodoItem.js
import React, { useState } from "react";
import LaravelImage from "../assets/Laravel.png";
import NodeImage from "../assets/NodeJs.png";
import VueImage from "../assets/VueJS.png";
import ReactImage from "../assets/ReactJS.png";
import Card from "./Card";
import "../styles/_cards.scss";

const Header = ({}) => {
  const [cards, setCards] = useState([
    {
      image: VueImage,
      title: "VueJS",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: ReactImage,
      title: "ReactJs",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: NodeImage,
      title: "NodeJS",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: LaravelImage,
      title: "Laravel",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ]);

  return (
    <div className="container container-cards">
      {cards.map((item, index) => (
        <Card
          dataImage={item.image}
          header={item.title}
          content={item.content}
          key={index}
        />
      ))}
    </div>
  );
};

export default Header;
