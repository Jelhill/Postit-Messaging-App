

import { groupData, users, dummyMessages, data } from "../Data/Data"

const initialState = {
    groupData,
    users,
    dummyMessages,
    userTypedMessage: "",
    data
}

const UserReducer = (state = initialState, action) => {
    const newstate = {...state}

    if(action.type === "GET_MESSAGE"){
        newstate.userTypedMessage = action.message
    }
    
    if(action.type === "POST_MESSAGE"){
        let postData = {memberName: "Simon Okah", memberAvatar: "this is fourth message", message: action.message        }
        let newData = [...newstate.dummyMessages, postData]
        newstate.dummyMessages = newData
    }

    // switch (action.type) {
    //   default:
    //     return newstate;
    // }

    return newstate
}

export default UserReducer

// const initialState = {
//   data,
// };

// const UserReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
// export default UserReducer;

