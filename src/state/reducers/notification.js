import { ADD_NOTIFICATION } from "../actions/action";

const initialState={
    notification:[]
}

export const notificationReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NOTIFICATION:
            return ({
                ...state,
                notification:[...state.notification,action.payload]
            })
        default:
            return state;
    }
}

