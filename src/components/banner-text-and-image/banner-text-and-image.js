import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./banner-text-and-image.scss";

const BannerTextAndImage = ({ product }) => {
	const { isFetching } = useSelector((state) => state.componentsSlice);

	return (
		<div
			className={`banner_text_and_image${isFetching ? " fetching" : ""}`}
			style={{ backgroundImage: `url(${product?.image})` }}
		>
			{product && (
				<>
					<div className="info">
						<h1>{product?.title}</h1>
						<h4>{product?.description}</h4>
						<div className="action">
							{product && (
								<Link to={`/product/${product?.id}`} className="">
									VIEW PRODUCT
								</Link>
							)}
						</div>
					</div>
					<img className="banner_image" src={product?.image} alt="Banner" />
				</>
			)}
		</div>
	);
};

export default BannerTextAndImage;
