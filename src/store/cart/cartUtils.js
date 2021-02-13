export const addItem = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems?.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	} else {
		if (cartItems) {
			return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
		} else {
			return [{ ...cartItemToAdd, quantity: 1 }];
		}
	}
};

export const removeItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems?.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

export const countItems = (cartItems) => {
	return cartItems
		? cartItems.reduce(
				(accumalatedQuantity, cartItem) =>
					accumalatedQuantity + cartItem.quantity,
				0
		  )
		: 0;
};

export const cartTotal = (cartItems) => {
	return cartItems
		? cartItems.reduce(
				(accumalatedQuantity, cartItem) =>
					accumalatedQuantity + cartItem.quantity * cartItem.price,
				0
		  )
		: 0;
};
