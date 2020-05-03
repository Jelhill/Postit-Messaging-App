import { groupData, users, dummyMessages, data, groupData2 } from "../Data/Data";

const initialState = {
  groupData,
  groupData2,
  users,
  dummyMessages,
  userTypedMessage: "",
  data,
  selectedGroup: null,
  newMessage: [],
  valueReset: ""

};

const UserReducer = (state = initialState, action) => {
  const newstate = { ...state };
  
  if (action.type === "GET_MESSAGE") {
    newstate.userTypedMessage = action.message;
  }

  if (action.type === "POST_MESSAGE") {
    let postData = [{
      memberName: "Simon Okah",
      memberAvatar: "this is fourth message",
      message: action.message,
    }];
    let newData = newstate.newMessage.concat(postData);
    newstate.newMessage = newData
    newstate.userTypedMessage = ""
  }

  if (action.type === "GET_GROUP_NAME"){
    console.log("Action NAme", action.groupName)
  }
  
  return newstate;
};

export default UserReducer;
