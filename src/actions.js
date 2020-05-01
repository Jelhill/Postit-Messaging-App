export const getTypedMessage = (message) => {
  return {
    type: "GET_MESSAGE",
    message: message,
  };
};

export const postMessage = (message) => {
  return {
    type: "POST_MESSAGE",
    message: message,
  };
};

export const selectedGroup = (groupData, dispatch) => {
  console.log(groupData, dispatch);
  dispatch({
    type: "SELECTED_GROUP",
    payload: groupData,
  });
};
