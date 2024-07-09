export const UPDATE_BALANCE="UPDATE_BALANCE";
export const ADD_NOTIFICATION="ADD_NOTIFICATION";

export const updateBalance=(amount)=>({
    type:UPDATE_BALANCE,
    payload:amount
})

export const addNotification=(message)=>({
    type:ADD_NOTIFICATION,
    payload:message
})