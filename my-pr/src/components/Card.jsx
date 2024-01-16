import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTitle,
  addDescription,
  addCard,
  deleteCards,
  deleteCard,
} from "./cardSlice";

const Card = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.card.title);
  const description = useSelector((state) => state.card.description);
  const cards = useSelector((state) => state.card.cards);

  return (
    <div>
      <div className="">
        <input
          name="title"
          type="text"
          onChange={(e) => dispatch(addTitle(e.target.value))}
          value={title}
          placeholder="Email"
        />
        <input
          name="description"
          type="text"
          onChange={(e) => dispatch(addDescription(e.target.value))}
          value={description}
        />
        <button onClick={() => dispatch(addCard())}>+</button>
        <button onClick={() => dispatch(deleteCards())}>-</button>
      </div>
      <div className="card">
        {cards.map(({ title, description }, index) => (
          <div className="" key={index}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => dispatch(deleteCard(index))}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
