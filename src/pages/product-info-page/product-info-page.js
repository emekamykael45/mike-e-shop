import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Spinner from "../../components/spinner/spinner";
import Alert from "../../components/alert/alert";
import NoRecords from "../../components/no-records/no-records";

import { setAlert, closeAlert } from "../../store/components/componentsSlice";
import { getProductInfo } from "../../store/products/productsSlice";
import { addToCart } from "../../store/cart/cartSlice";

import { formatAmount } from "../../components/utils/helper";

import "./product-info-page.scss";

const ProductInfoPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const { isFetching, alert } = useSelector((state) => state.componentsSlice);
	const { productInfo } = useSelector((state) => state.productsSlice);
	const notification = alert;

	useEffect(() => {
		const abortController = new AbortController();
		window.scroll(0, 0);
		dispatch(getProductInfo(id));

		return function cleanup() {
			dispatch(closeAlert());
			abortController.abort();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const addProductToCart = () => {
		dispatch(addToCart(productInfo));
		dispatch(
			setAlert({
				show: true,
				type: "success",
				message: "Product added to cart!",
			})
		);
	};

	return (
		<React.Fragment>
			<div className="product_info_page">
				{isFetching ? (
					<Spinner />
				) : (
					<React.Fragment>
						{productInfo ? (
							<div className="product_info">
								<img
									className="product_image"
									src={productInfo.image}
									alt="Product"
								/>
								<div className="info">
									<h1 className="title">{productInfo.title}</h1>
									<Link
										className="category"
										to={`/products?slug=${productInfo.category}`}
									>
										{productInfo.category}
									</Link>
									<p className="price">{formatAmount(productInfo.price)}</p>
									<p className="description">{productInfo.description}</p>
									<button onClick={() => addProductToCart()}>
										ADD TO CART
									</button>
								</div>
							</div>
						) : (
							<NoRecords text="Couldn't get product" />
						)}
					</React.Fragment>
				)}
			</div>

			{/* Other components */}
			{notification.show && (
				<Alert
					className={notification.type}
					textBeforeLink={notification.message}
					close={notification.close}
					closeAlert={() => dispatch(closeAlert())}
				/>
			)}
		</React.Fragment>
	);
};

export default ProductInfoPage;
