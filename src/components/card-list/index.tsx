import React from "react";
import { Monster } from "../../App";

import Card from "../card";

import "./styles.css";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
