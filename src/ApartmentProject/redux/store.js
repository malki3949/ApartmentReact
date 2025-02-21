

import { produce } from "immer"
import { createStore } from "redux";
<button></button>
const initialState = {
    CurrentUser: {},
}
const reducer = produce((state, action) => {
        switch (action.type) {
            case 'SET_USER': state.CurrentUser = action.payload
                return; 
  default: break;
        }
}, initialState)

const store = createStore(reducer)
export default store