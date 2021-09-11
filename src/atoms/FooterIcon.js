import React from "react";

const FooterIcon = ({ src, label }) => {
	return (
		<>
			<img src={src} className="text-gray-100 text-xl" aria-label={label} />
		</>
	);
};

export default FooterIcon;
