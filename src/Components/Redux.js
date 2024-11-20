import { createStore } from "redux"


function reduce(state, action) {
    if(action.type === "Increment"){
        return {counter: state.counter + action.payload}
    }
    return state
}

const initialStore = {counter:0}

const store = createStore(reduce, initialStore)

export default store;