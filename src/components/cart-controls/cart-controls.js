import React from "react";

import "./cart-controls.scss";

const CartControls = ({ addClicked, removeClicked }) => {
	return (
		<div className="cart_controls">
			<button className="btn btn_remove" onClick={removeClicked}>
				-
			</button>
			<button className="btn btn_add" onClick={addClicked}>
				+
			</button>
		</div>
	);
};

export default CartControls;
