import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Alert from "../../components/alert/alert";
import PageHeader from "../../components/page-header/page-header";
import CartItem from "../../components/cart-item/cart-item";
import NoRecords from "../../components/no-records/no-records";
import FormInput from "../../components/form-input/form-input";

import { closeAlert } from "../../store/components/componentsSlice";
import { createPaymentInvoice, getInvoiceID } from "../../store/cart/cartSlice";

import { formatAmount, useLocalStorage } from "../../components/utils/helper";

import "./checkout-page.scss";

const CheckoutPage = () => {
	const dispatch = useDispatch();

	const { isLoading, alert } = useSelector((state) => state.componentsSlice);
	const { cartItems, cartPriceTotal } = useSelector((state) => state.cartSlice);
	const { register, handleSubmit, errors } = useForm();
	const [showEmailInput, setShowEmailInput] = useState(false);
	const notification = alert;

	const invoice_id = useLocalStorage.get("invoice_id");
	useEffect(() => {
		if (invoice_id) {
			dispatch(getInvoiceID());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const createInvoice = (data) => {
		if (data) {
			const amount = cartPriceTotal * 1000000;
			const payerEmail = data.email;
			dispatch(createPaymentInvoice({ amount, payerEmail }));
		}
	};

	return (
		<React.Fragment>
			<div className="checkout_page">
				<PageHeader headerText="Checkout" />

				<div className="checkout_container">
					{cartItems?.length >= 1 ? (
						<>
							<div className="cart_items">
								{cartItems.map((item, i) => (
									<CartItem key={i} item={item} />
								))}
							</div>
							<div className="total">
								<p>
									TOTAL: <span>{formatAmount(cartPriceTotal)}</span>
								</p>
							</div>

							<form onSubmit={handleSubmit(createInvoice)}>
								{showEmailInput && (
									<React.Fragment>
										<br />
										<FormInput
											label="Your email address"
											name="email"
											type="email"
											inputRef={register({
												required: "Email address is required",
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: "Invalid email address",
												},
											})}
											error={errors.email}
											errorMessage={errors.email && errors.email.message}
										/>
									</React.Fragment>
								)}
								<div className="action">
									{!invoice_id && !showEmailInput && (
										<button onClick={() => setShowEmailInput(true)}>
											CHECKOUT
										</button>
									)}
									{(invoice_id || showEmailInput) && (
										<button
											onClick={() => createInvoice()}
											disabled={isLoading || errors.email}
										>
											{isLoading ? "Loading..." : "PROCEED TO PAY"}
										</button>
									)}
								</div>
							</form>
						</>
					) : (
						<NoRecords />
					)}
				</div>
			</div>

			{/* Other components */}
			{notification.show && (
				<Alert
					className={notification.type}
					textBeforeLink={
						notification.message === "cors"
							? "This request has been blocked by CORS policy. Kindly "
							: notification.message
					}
					linkText={notification.message === "cors" && "CLICK HERE"}
					linkTo={
						notification.message === "cors" &&
						"https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
					}
					textAfterLink={
						notification.message === "cors" &&
						" to install the 'Allow CORS' extension from the Chrome Web Store in your browser, toggle it ON and retry again"
					}
					close={notification.close}
					closeAlert={() => dispatch(closeAlert())}
				/>
			)}
		</React.Fragment>
	);
};

export default CheckoutPage;
