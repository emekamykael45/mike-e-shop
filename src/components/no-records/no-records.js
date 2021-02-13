import React from "react";

import "./no-records.scss";

const NoRecords = ({ text }) => (
	<div className="no_records">
		<img
			src="https://res.cloudinary.com/emekamykael45/image/upload/v1613117227/mike-e-shop/box_vi8bq5.svg"
			alt="No records"
		/>
		{text ? <p>{text}</p> : <p>No records to show</p>}
	</div>
);

export default NoRecords;
