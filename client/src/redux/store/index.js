import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "../reducerSlices/userSlice"
import logger from 'redux-logger'

 
const reducer = combineReducers({
 user: userSlice,
//other slices will be here
});
 
const store = configureStore({
 reducer,
 middleware: [logger]
});
 
export default store;