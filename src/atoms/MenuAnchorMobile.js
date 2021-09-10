import React from "react";

const MenuAnchorMobile = ({ clickHandler, text }) => {
	return (
		<>
			<button
				className="text-xl font-medium text-gray-200 py-4 px-3 w-full"
				onClick={clickHandler}
				aria-label={`Click the anchor link to take you to the ${text} section of the page`}
			>
				{text}
			</button>
		</>
	);
};

export default MenuAnchorMobile;
