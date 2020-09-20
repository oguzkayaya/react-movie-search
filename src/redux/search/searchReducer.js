import { UPDATE } from "./searchActionTypes";

const initialState = {
  title: "Pokemon",
  year: "",
  type: "",
  page: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
