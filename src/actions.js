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

// export const selectedGroup = (groupMessages) => {
//   console.log("you clicked on me", groupMessages[0]);
//   return {
//     type: "RECEIVE_MESSAGE",
//     payload: groupMessages,
//   };
// };
