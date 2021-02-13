import React from "react";

import "./page-header.scss";

const PageHeader = ({ headerText }) => (
	<div className="page_header_container">
		<h1>{headerText}</h1>
	</div>
);

export default PageHeader;
