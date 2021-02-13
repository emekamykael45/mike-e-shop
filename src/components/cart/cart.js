import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SectionHeader from "../section-header/section-header";
import CartItem from "../cart-item/cart-item";
import NoRecords from "../no-records/no-records";

import {
	toggleCart,
	addToCart,
	removeFromCart,
} from "../../store/cart/cartSlice";

import "./cart.scss";

const Cart = () => {
	const dispatch = useDispatch();

	const { cartItems, hidden } = useSelector((state) => state.cartSlice);

	return (
		<div className={`cart${hidden ? "" : " open"}`}>
			<div className="relative">
				<SectionHeader
					headText="Shopping Cart"
					rule
					close={() => dispatch(toggleCart())}
				/>
				<div className="cart_items">
					{cartItems?.length >= 1 ? (
						cartItems.map((item, i) => (
							<CartItem
								key={i}
								item={item}
								showControls
								addItem={() => dispatch(addToCart(item))}
								removeItem={() => dispatch(removeFromCart(item))}
							/>
						))
					) : (
						<NoRecords />
					)}
				</div>
				<div className="action">
					<Link onClick={() => dispatch(toggleCart())} to="/checkout">
						GO TO CHECKOUT
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
