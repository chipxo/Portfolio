import { CHANGE_SEARCH_FIELD } from "./constants";

const initiasState = {
  searchField: "",
};

export const searchRobots = (state = initiasState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
