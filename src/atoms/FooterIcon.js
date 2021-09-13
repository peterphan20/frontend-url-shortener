import React from "react";

const FooterIcon = ({ className = " " }) => {
	return (
		<>
			<i className={`${className} text-gray-100 text-2xl cursor-pointer hover:text-cyan`} />
		</>
	);
};

export default FooterIcon;
