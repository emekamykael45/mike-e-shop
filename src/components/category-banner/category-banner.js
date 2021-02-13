import React from "react";
import { Link } from "react-router-dom";

import "./category-banner.scss";

const CategoryBanner = ({ category }) => {
	return (
		<div
			className="category_banner"
			style={{ backgroundImage: `url(${category?.image})` }}
		>
			<div className="info">
				<h1>{category?.name}</h1>
				<h4>{category?.description}</h4>
				<div className="action">
					{category && (
						<Link to={`/products?slug=${category.name}`} className="">
							VIEW MORE
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategoryBanner;
