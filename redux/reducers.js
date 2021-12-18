import { CATEGORY_CARDS } from "./actions";

const initialState={
    food:[]
}


function userReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORY_CARDS:
            return { ...state, food: action.payload };
        default:
            return state;
    }
}

export default userReducer;