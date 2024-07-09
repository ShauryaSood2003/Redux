import { UPDATE_BALANCE } from "../actions/action";

const intialBalance={
    balance:0
}

export const balanceReducer=(state=intialBalance,action)=>{
    switch(action.type){
        case UPDATE_BALANCE:
            return ({
                ...state,
                balance:state.balance+action.payload
            })
        default:
            return state;
    }
}