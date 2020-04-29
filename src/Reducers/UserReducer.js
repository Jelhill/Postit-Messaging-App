import { data } from "../Data/Data";

const initialState = {
  data
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat([action.data]);
    default:
      return state;
  }
};
export default UserReducer;
