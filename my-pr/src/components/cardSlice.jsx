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

      return {
        ...state,
        cards: [...state.cards, newCard],
        title: "",
        description: "",
      };
    },
    deleteCards: (state) => {
      state.cards = [];
    },
    deleteCard: (state, action) => {
      const indexToDelete = action.payload;

      state.cards = state.cards.filter(
        (card, index) => index !== indexToDelete,
      );
    },
  },
});

export const { addTitle, addDescription, addCard, deleteCards, deleteCard } =
  cardSlice.actions;

export default cardSlice.reducer;
