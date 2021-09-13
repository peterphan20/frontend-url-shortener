import React from "react";

const MenuAnchorDesktop = ({ clickHandler, text, className = " " }) => {
	return (
		<>
			<button
				className={`${className} text-base font-medium text-gray-400`}
				onClick={clickHandler}
				aria-label={`Click the anchor link to take you to the ${text} section of the page`}
			>
				{text}
			</button>
		</>
	);
};

export default MenuAnchorDesktop;
