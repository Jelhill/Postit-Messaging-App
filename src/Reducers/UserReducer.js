import { groupData, users, dummyMessages, data } from "../Data/Data";

const initialState = {
  groupData,
  users,
  dummyMessages,
  userTypedMessage: "",
  data,
  selectedGroup: null,
};

const UserReducer = (state = initialState, action) => {
  const newstate = { ...state };

  if (action.type === "GET_MESSAGE") {
    newstate.userTypedMessage = action.message;
  }

  if (action.type === "POST_MESSAGE") {
    let postData = {
      memberName: "Simon Okah",
      memberAvatar: "this is fourth message",
      message: action.message,
    };
    let newData = [...newstate.dummyMessages, postData];
    newstate.dummyMessages = newData;
  }
  if (action.type === "SELECTED_GROUP") {
    return {
      ...state,
      selectedGroup: action.payload,
    };
  }
  return newstate;
};

export default UserReducer;
