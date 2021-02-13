import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { URL } from "../../api";

import { setIsFetching, setAlert } from "../components/componentsSlice";

// Slice
const slice = createSlice({
	name: "products",
	initialState: {
		products: null,
		bannerProduct: null,
		productInfo: null,
	},
	reducers: {
		setProducts: (state, { payload }) => {
			state.products = payload;
		},
		setBannerProduct: (state, { payload }) => {
			state.bannerProduct = payload;
		},
		setProductInfo: (state, { payload }) => {
			state.productInfo = payload;
		},
	},
});
export default slice.reducer;

// Actions
const { setProducts, setBannerProduct, setProductInfo } = slice.actions;

const successStatusCode = 200 || 201;

export const getProducts = (data) => async (dispatch) => {
	dispatch(setIsFetching(true));
	try {
		const res = await api.get(`${URL.products}`);
		if (res.status === successStatusCode) {
			const randomNumber = Math.floor(Math.random() * 20) + 1;
			const bannerProduct = res.data?.filter(
				(item) => item.id === randomNumber
			)?.[0];

			dispatch(setIsFetching(false));
			dispatch(setProducts(res.data));
			dispatch(setBannerProduct(bannerProduct));
		}
	} catch (err) {
		const error = err.response?.data;
		dispatch(setIsFetching(false));
		dispatch(
			setAlert({
				show: true,
				type: "error",
				message: error?.message || "Something went wrong",
			})
		);
	}
};

export const getCategoryProducts = (data) => async (dispatch) => {
	dispatch(setIsFetching(true));
	try {
		const res = await api.get(`${URL.category_product}${data}`);
		if (res.status === successStatusCode) {
			dispatch(setIsFetching(false));
			dispatch(setProducts(res.data));
		}
	} catch (err) {
		const error = err.response?.data;
		dispatch(setIsFetching(false));
		dispatch(
			setAlert({
				show: true,
				type: "error",
				message: error?.message || "Something went wrong",
			})
		);
	}
};

export const getProductInfo = (id) => async (dispatch) => {
	dispatch(setIsFetching(true));
	try {
		const res = await api.get(`${URL.product_info}${id}`);
		if (res.status === successStatusCode) {
			dispatch(setIsFetching(false));
			dispatch(setProductInfo(res.data));
		}
	} catch (err) {
		const error = err.response?.data;
		dispatch(setIsFetching(false));
		dispatch(
			setAlert({
				show: true,
				type: "error",
				message: error?.message || "Something went wrong",
			})
		);
	}
};
