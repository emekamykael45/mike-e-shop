import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { toggleCart } from "../../store/cart/cartSlice";

import { formatAmount } from "../utils/helper";

import "./navbar.scss";

const NavBar = () => {
	const dispatch = useDispatch();

	const { cartItemsCount, cartPriceTotal } = useSelector(
		(state) => state.cartSlice
	);
	const [collapseNavbar, setCollapseNavbar] = useState(false);

	const toggleCartFromNavbar = () => {
		if (window.innerWidth < 768) {
			dispatch(toggleCart());
			setCollapseNavbar(true);
		} else {
			dispatch(toggleCart());
		}
	};

	return (
		<nav className="navbar navbar-expand-md fixed-top">
			<div className="container-fluid">
				<Link to="/">
					<img
						src="https://res.cloudinary.com/emekamykael45/image/upload/v1613074958/mike-e-shop/house-party_p3lrw0.png"
						className="logo"
						alt=""
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample08"
					aria-controls="navbarsExample08"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setCollapseNavbar(false)}
				>
					<span className="navbar-toggler-icon">
						<img
							className="menu"
							alt=""
							src="https://res.cloudinary.com/the-now-entity/image/upload/v1609939220/Lendha/menu_2_5_bse0xq.svg"
						/>
					</span>
				</button>
				<div
					className={`collapse navbar-collapse ${collapseNavbar && "hide"}`}
					id="navbarsExample08"
				>
					<ul className="navbar-nav mr-auto"></ul>
					<ul className="navbar-nav mr-right">
						<li className="nav-item">
							<h5>(+234) 906 558 2156</h5>
						</li>
						<li className="nav-item">
							<div
								className="cart_toggler"
								onClick={() => toggleCartFromNavbar()}
							>
								<img
									src="https://res.cloudinary.com/emekamykael45/image/upload/v1613117223/mike-e-shop/cart_tbfaxb.svg"
									alt="Cart"
								/>
								<div className="info">
									<p>
										<span>{cartItemsCount}</span> product(s)
									</p>
									<h6>{formatAmount(cartPriceTotal)}</h6>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
