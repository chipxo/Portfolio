import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  cards: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    addDescription: (state, action) => {
      state.description = action.payload;
    },
    addCard: (state) => {
      const newCard = {
        title: state.title,
        description: state.description,
      };
      if (state.title.length && state.description.length >= 1) {
        return {
          ...state,
          title: "",
          description: "",
          cards: [...state.cards, newCard],
        };
      } else {
        alert("Enter more charachters");
      }
    },
    deleteCards: (state) => {
      state.cards = [];
    },
    deleteCard: (state, action) => {
      const indexToDelete = action.payload;

      return {
        ...state,
        cards: state.cards.filter((_, index) => index !== indexToDelete),
      };
    },
  },
});

export const { addTitle, addDescription, addCard, deleteCards, deleteCard } =
  cardSlice.actions;

export default cardSlice.reducer;
