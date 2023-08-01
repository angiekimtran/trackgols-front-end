// import React, { useState } from "react";
import { useDrag } from 'react-dnd'
import Card from "./card"
import "./column.css";

const Column = ({ cards, onDragCard }) => {

  const onSelect = (id) => {
    onDragCard(id);
  };

  return (
    <section className="column">
      <h2 className="column-title">{Column.title}</h2>
      <section className="card-list">
        <ul>
        {cards &&
                cards.map((card) => (
                <Card
                    key={card.card_id}
                    id={card.card_id}
                    message={card.message}
                    refetchCards={refetchCards}
                />
                ))}
        </ul>
        {/* <ul>
            {cards &&
            cards.map((card) => (
                <li key={card.card_id}>
                <button onClick={() => onSelect(card.card_id)}>
                    {card.message}
                </button>
                </li>
            ))}
        </ul> */}
        </section>
    </section>
  );
};

export default Column;