import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import componentsSlice from "./components/componentsSlice";
import cartSlice from "./cart/cartSlice";
import productsSlice from "./products/productsSlice";

const reducer = combineReducers({
	// add all reducers here
	componentsSlice,
	cartSlice,
	productsSlice,
});
const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== "production" ? true : false,
});

export default store;
