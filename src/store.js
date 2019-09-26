import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const initialState = {
    counter: 0,
    name: "Agustín"
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COUNTER":
            return Object.assign({}, state, {
                counter: state.counter + action.quantity
            });
        case "SUBTRACT_COUNTER":
            return Object.assign({}, state, {
                counter: state.counter - action.quantity
            });
        case "RESET_COUNTER":
            return Object.assign({}, state, {
                counter: action.quantity
            });
        default:
            return state;
    }
};

//actions
export const addCounter = (quantity = 0) => dispatch => {
    return dispatch({
        type: "ADD_COUNTER",
        quantity: quantity || 0
    });
};

export const subtractCounter = (quantity = 0) => dispatch => {
    return dispatch({
        type: "SUBTRACT_COUNTER",
        quantity: quantity || 0
    });
};

export const resetCounter = (quantity = 0) => dispatch => {
    return dispatch({
        type: "RESET_COUNTER",
        quantity: quantity || 0
    });
};

export function initializeStore() {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}
