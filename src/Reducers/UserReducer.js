import { data } from "../Data/Data";

const initialState = {
  data,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {};
    default:
      return state;
  }
};
export default UserReducer;
