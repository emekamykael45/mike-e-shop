import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
	const navLinks = [
		{
			name: "Home",
			to: "/",
		},
		{
			name: "Products",
			to: "/products",
		},
		{
			name: "(+234) 906 558 2156",
			to: "#",
		},
	];

	return (
		<div className="footer_container">
			<div className="footer">
				<div className="grid">
					{navLinks.map((item, i) => (
						<Link key={i} to={item.to} className="footer_link">
							{item.name}
						</Link>
					))}
				</div>

				<div className="foot_navs">
					<p className="footer_link">
						Made with &#9829; by{" "}
						<a
							href="https://github.com/emekamykael45"
							target="_blank"
							rel="noreferrer"
						>
							Michael Azonobi C.
						</a>
					</p>
					<p className="footer_link">
						&#169; 2021 Houseparty . All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
