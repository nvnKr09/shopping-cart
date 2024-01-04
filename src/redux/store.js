import { createStore } from "redux";
import counterReducer from "./reducers/cartReducer.js";

const store  = createStore(counterReducer);

export default store;