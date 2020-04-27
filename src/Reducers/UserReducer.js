
import { data } from "../Data/Data"

const initialState = {
    data
}

const UserReducer = (state = initialState, action) => {
    const newstate = {...state}

    return newstate

}

export default UserReducer