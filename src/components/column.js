import React from "react";
import { useState, useEffect } from "react";
// import { useDrag } from 'react-dnd'

import Card from "./card"
import { getCards } from "../api/cards"
import { getColumn } from "../api/columns"
import "./column.css";

const Column = ({ columnID, onDragCard }) => {
  const [cards, setCards] = useState({});
  const [column, setColumn] = useState({});

  // const onSelect = (id) => {
  //   onDragCard(id);
  // };

  const fetchColumn = async () => {
    const selectedColumn = await getColumn(columnID);
    setColumn(selectedColumn);
  };

  const refetchCards = async () => {
    const retrieveColumns = await getCards(columnID);
    setCards(retrieveColumns);
  };

  useEffect(() => {
    if (columnID) {
      fetchColumn();
      refetchCards();
    }
  });

  return (
    <section className="column">
      <h2 className="column-title">{column?.title}</h2>
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