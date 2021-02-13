import { createSlice } from "@reduxjs/toolkit";
import { addItem, removeItem, countItems, cartTotal } from "./cartUtils";

import {
	setIsLoading,
	setAlert,
	closeAlert,
} from "../components/componentsSlice";

import { xenditAPI } from "../../api";
import { useLocalStorage } from "../../components/utils/helper";

const initialCartItems = useLocalStorage.get("cartItems");

// Slice
const slice = createSlice({
	name: "cart",
	initialState: {
		hidden: true,
		cartItems: initialCartItems,
		cartItemsCount: countItems(initialCartItems),
		cartPriceTotal: cartTotal(initialCartItems),
	},
	reducers: {
		setCartVisiblity: (state) => {
			state.hidden = !state.hidden;
		},
		addItemToCart: (state, { payload }) => {
			state.cartItems = addItem(state.cartItems, payload);
			state.cartItemsCount = countItems(state.cartItems);
			state.cartPriceTotal = cartTotal(state.cartItems);
			useLocalStorage.set("cartItems", state.cartItems);
		},
		removeItemFromCart: (state, { payload }) => {
			state.cartItems = removeItem(state.cartItems, payload);
			state.cartItemsCount = countItems(state.cartItems);
			state.cartPriceTotal = cartTotal(state.cartItems);
			useLocalStorage.set("cartItems", state.cartItems);
		},
	},
});
export default slice.reducer;

// Actions
const { addItemToCart, removeItemFromCart, setCartVisiblity } = slice.actions;

export const toggleCart = () => (dispatch) => {
	dispatch(setCartVisiblity());
};

export const addToCart = (item) => (dispatch) => {
	dispatch(addItemToCart(item));
};

export const removeFromCart = (item) => (dispatch) => {
	dispatch(removeItemFromCart(item));
};

export const createPaymentInvoice = ({ amount, payerEmail }) => async (
	dispatch
) => {
	dispatch(setIsLoading(true));
	const invoiceData = {
		external_id: new Date(),
		payer_email: payerEmail,
		should_send_email: true,
		description: "Invoice for Products Purchase on Mike e-shop",
		amount: amount,
		success_redirect_url: `${window.location.origin}/checkout`,
	};

	try {
		const res = await xenditAPI.post(`invoices`, JSON.stringify(invoiceData));
		if (res?.data?.invoice_url) {
			window.location.assign(res?.data?.invoice_url);
			useLocalStorage.set("invoice_id", res?.data?.id);
		}
	} catch (err) {
		dispatch(setIsLoading(false));
		if (typeof err?.response === "undefined") {
			dispatch(
				setAlert({
					show: true,
					type: "error",
					message: "cors",
				})
			);
		} else {
			dispatch(
				setAlert({
					show: true,
					type: "error",
					message: "Something went wrong while generating your invoice",
				})
			);
		}
	}
};

export const getInvoiceID = () => async (dispatch) => {
	dispatch(setIsLoading(true));
	const invoice_id = useLocalStorage.get("invoice_id");

	try {
		const res = await xenditAPI.get(`/invoices/${invoice_id}`);
		if (res?.data?.status === "PAID") {
			dispatch(
				setAlert({
					show: true,
					type: "success",
					message: "Payment successful!",
				})
			);
			useLocalStorage.remove("invoice_id");
			useLocalStorage.remove("cartItems");
			setTimeout(() => {
				dispatch(closeAlert());
				window.location.assign("/");
			}, 2000);
			clearTimeout();
		} else {
			dispatch(
				setAlert({
					show: true,
					type: "error",
					message: "Something went wrong while processing your payment",
				})
			);
			useLocalStorage.remove("invoice_id");
		}
	} catch (err) {
		dispatch(setIsLoading(false));
		if (typeof err?.response === "undefined") {
			dispatch(
				setAlert({
					show: true,
					type: "error",
					message: "cors",
				})
			);
		} else {
			dispatch(
				setAlert({
					show: true,
					type: "error",
					message:
						err?.response?.data?.message ||
						"Something went wrong while processing your payment",
				})
			);
			useLocalStorage.remove("invoice_id");
		}
	}
};
