import React from "react";
import Card from "../card";

import './styles.css'

const CardList = ({ monsters }) => {

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <Card key={monster.id} monster={monster}/>
        )
      })}
    </div>
  )
}

export default CardList