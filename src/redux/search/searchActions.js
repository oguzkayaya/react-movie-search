import { UPDATE } from "./searchActionTypes";

export const updateSearch = (newSerch) => {
  return {
    type: UPDATE,
    payload: newSerch,
  };
};
