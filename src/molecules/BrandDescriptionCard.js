import React from "react";

const BrandDescriptionCard = ({ src, header, description, className = " " }) => {
	return (
		<div className="flex flex-col justify-center items-center relative bg-gray-100 pt-16 pb-12 px-5 rounded-lg w-80 h-full">
			<div className={`${className} absolute inline-block bg-violet rounded-full -top-10 p-5`}>
				<img src={src} alt={`icon for the ${header} section`} />
			</div>
			<h1 className="text-2xl font-bold pb-5">{header}</h1>
			<p className="text-base text-gray-400">{description}</p>
		</div>
	);
};

export default BrandDescriptionCard;
