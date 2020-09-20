import { UPDATE } from "./searchActionTypes";

const update = (newSerch) => {
  return {
    type: UPDATE,
    payload: newSerch,
  };
};
