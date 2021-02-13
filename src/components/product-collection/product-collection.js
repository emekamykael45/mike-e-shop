import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SectionHeader from "../section-header/section-header";
import ProductCard from "../product-card/product-card";
import NoRecords from "../no-records/no-records";

import { categories } from "../../data";
import {
	getProducts,
	getCategoryProducts,
} from "../../store/products/productsSlice";

import "./product-collection.scss";

const ProductCollection = ({ slug, seeMore }) => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.productsSlice);
	const [category, setCategory] = useState(slug || null);

	useEffect(() => {
		if (category === null || category === undefined) {
			dispatch(getProducts());
		} else {
			dispatch(getCategoryProducts(category));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	return (
		<div className="product_collection">
			<div className="flex">
				<SectionHeader headText={category ? category : "All Products"} rule />
				<div className="filter_container">
					<div className="filter">
						<p
							className={category === null ? "active" : ""}
							onClick={() => setCategory(null)}
						>
							All
						</p>
						{categories.map((item, i) => (
							<p
								key={i}
								className={category === item.name ? "active" : ""}
								onClick={() => setCategory(item.name)}
							>
								{item.name}
							</p>
						))}
					</div>
				</div>
			</div>
			{products?.length >= 1 ? (
				<>
					<div className="product_listing">
						{seeMore ? (
							<>
								{products
									.filter((item, idx) => idx < 8)
									.map((item, i) => (
										<ProductCard key={i} product={item} />
									))}
							</>
						) : (
							<>
								{products.map((item, i) => (
									<ProductCard key={i} product={item} />
								))}
							</>
						)}
					</div>
					{seeMore && (
						<p className="see_more">
							<Link to="/products">SEE MORE</Link>
						</p>
					)}
				</>
			) : (
				<NoRecords />
			)}
		</div>
	);
};

export default ProductCollection;
