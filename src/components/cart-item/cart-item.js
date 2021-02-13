import React from "react";

import CartControls from "../cart-controls/cart-controls";

import { formatAmount } from "../utils/helper";

import "./cart-item.scss";

const CartItem = ({ item, showControls, addItem, removeItem }) => {
	return (
		<div className="cart_item">
			<img src={item.image} alt="Cart item" />
			<div className="info">
				<h6>{item.title}</h6>
				<p>
					<span>({item.quantity}) - </span>
					{formatAmount(item.quantity * item.price)}
				</p>
				{showControls && (
					<CartControls addClicked={addItem} removeClicked={removeItem} />
				)}
			</div>
		</div>
	);
};

export default CartItem;
