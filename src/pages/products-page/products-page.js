import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Spinner from "../../components/spinner/spinner";
import Alert from "../../components/alert/alert";
import ProductCollection from "../../components/product-collection/product-collection";

import { closeAlert } from "../../store/components/componentsSlice";

import "./products-page.scss";

const ProductsPage = () => {
	const query = new URLSearchParams(useLocation().search);
	const slug = query.get("slug") || null;

	const dispatch = useDispatch();
	const { isFetching, alert } = useSelector((state) => state.componentsSlice);
	const notification = alert;

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<React.Fragment>
			{isFetching && <Spinner />}
			<div className="products_page">
				<div className="product_overview">
					<ProductCollection slug={slug} />
				</div>
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

export default ProductsPage;
