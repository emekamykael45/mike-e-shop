import React from "react";
import { Link } from "react-router-dom";

import { formatAmount } from "../utils/helper";

import "./product-card.scss";

const ProductCard = ({ product }) => (
	<div className="product_card">
		<img src={product.image} alt="Product" />
		<h6>{product.title}</h6>
		<p>{formatAmount(product.price)}</p>
		<Link to={`/product/${product.id}`}>VIEW DETAILS</Link>
	</div>
);

export default ProductCard;
