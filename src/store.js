import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const initialState = {
    counter: 0,
    name: "Agustín"
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MANAGE_COUNTER":
            return Object.assign({}, state, {
                counter:
                    action.operation === "add"
                        ? state.counter + action.quantity
                        : action.operation === "subtract"
                        ? state.counter - action.quantity
                        : 0
            });
        default:
            return state;
    }
};

//actions
export const manageCounter = (quantity = 0, operation = "add") => dispatch => {
    return dispatch({
        type: "MANAGE_COUNTER",
        operation: operation || "add",
        quantity: quantity || 0
    });
};

export function initializeStore() {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}
