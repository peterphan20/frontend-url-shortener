import React from "react";
import FooterIcon from "../atoms/FooterIcon";

const FooterIconsList = () => {
	return (
		<div className="flex justify-center items-center gap-4 pt-6 lg:gap-8 lg:pt-0">
			<FooterIcon className="fab fa-facebook-square" />
			<FooterIcon className="fab fa-twitter" />
			<FooterIcon className="fab fa-pinterest" />
			<FooterIcon className="fab fa-instagram" />
		</div>
	);
};

export default FooterIconsList;
