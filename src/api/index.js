import axios from "axios";
// import Xendit from "xendit-node";

export const URL = {
	baseURL: "https://fakestoreapi.com",
	xenditURL: "https://api.xendit.co/v2/",
	products: "/products",
	product_info: "/products/",
	category_product: "/products/category/",
};

export const xenditAPI = axios.create({
	baseURL: URL.xenditURL,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Basic ${process.env.REACT_APP_XENDIT_SECRET_KEY}`,
	},
});

const api = axios.create({
	baseURL: URL.baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
