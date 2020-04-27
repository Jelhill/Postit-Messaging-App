import { data } from "../Data/Data";

const initialState = {
  data,
};

export const reducer = (state = initialState, action) => {
  const newstate = { ...state };

  return newstate;
};
