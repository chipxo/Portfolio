import { useSelector, useDispatch } from "react-redux";
import {
  addTitle,
  addDescription,
  addCard,
  deleteCards,
  deleteCard,
} from "./cardSlice";

const Card = () => {
  const { title, description, cards } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-8">
      <div className="mx-auto mb-10 mt-20 grid w-fit max-w-screen-md justify-center gap-x-4 gap-y-4 rounded-md border border-black px-8 py-6">
        <input
          className="rounded-md border border-black p-2"
          onChange={(e) => dispatch(addTitle(e.target.value))}
          type="text"
          value={title}
          name="title"
          placeholder="Title"
        />
        <input
          className="rounded-md border border-black p-2"
          onChange={(e) => dispatch(addDescription(e.target.value))}
          type="text"
          value={description}
          name="description"
          placeholder="Description"
        />
        <div className="flex justify-between">
          <button
            className="rounded-md border border-black px-5 py-2 transition duration-100 hover:shadow-xl"
            onClick={() => dispatch(addCard())}
          >
            Add
          </button>
          <button
            className="rounded-md border border-black px-5 py-2 transition duration-100 hover:shadow-xl"
            onClick={() => dispatch(deleteCards())}
          >
            Delete All
          </button>
        </div>{" "}
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        {cards.map(({ title, description }, index) => (
          <div
            className="grid justify-center gap-y-4 rounded-md border border-black p-4 text-center"
            key={index}
          >
            <h2 className="text-2xl font-semibold">
              {title[0].toUpperCase() + title.slice(1)}
            </h2>
            <p>{description[0].toUpperCase() + description.slice(1)}</p>
            <button
              className="rounded-md border border-black px-5 py-2 transition duration-100 hover:shadow-xl"
              onClick={() => dispatch(deleteCard(index))}
            >
              Delete Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
