import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner";
import Alert from "../../components/alert/alert";
import BannerTextAndImage from "../../components/banner-text-and-image/banner-text-and-image";
import CategoryBanner from "../../components/category-banner/category-banner";
import ProductCollection from "../../components/product-collection/product-collection";

import { categories } from "../../data";
import { closeAlert } from "../../store/components/componentsSlice";

import "./home-page.scss";

const HomePage = () => {
	const dispatch = useDispatch();
	const { isFetching, alert } = useSelector((state) => state.componentsSlice);
	const { bannerProduct } = useSelector((state) => state.productsSlice);
	const notification = alert;

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<React.Fragment>
			{isFetching && <Spinner />}

			<div className="home_page">
				<div className="banner">
					{/* Select a different product at random to show here on load */}
					<BannerTextAndImage product={bannerProduct} />
				</div>

				<div className="category_overview">
					{categories?.map((category, i) => (
						<CategoryBanner key={i} category={category} />
					))}
				</div>

				<div className="product_overview">
					<ProductCollection seeMore />
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

export default HomePage;
