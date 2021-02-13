import React from "react";
import { useSelector } from "react-redux";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/home-page/home-page";
import ProductsPage from "./pages/products-page/products-page";
import ProductInfoPage from "./pages/product-info-page/product-info-page";
import CheckoutPage from "./pages/checkout-page/checkout-page";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";

const App = () => {
	const { hidden } = useSelector((state) => state.cartSlice);

	return (
		<Router>
			<div className={`page${hidden ? "" : " fixed"}`}>
				<NavBar />
				<Cart isCartShowing={hidden} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/products" component={ProductsPage} />
					<Route exact path="/product/:id" component={ProductInfoPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route path="*" component={() => <Redirect to="/" />} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
