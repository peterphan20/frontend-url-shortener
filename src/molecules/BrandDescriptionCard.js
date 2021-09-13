import React from "react";

const BrandDescriptionCard = ({ src, header, description, className = " " }) => {
	return (
		<div
			className={`${className} flex flex-col justify-center items-center relative bg-gray-100 pt-16 pb-12 px-5 rounded-lg w-80 h-full lg:items-start lg:px-9 lg:w-96 lg:max-h-72`}
		>
			<div className="absolute inline-block bg-violet rounded-full -top-10 p-5">
				<img src={src} alt={`icon for the ${header} section`} />
			</div>
			<h1 className="text-2xl font-bold pb-5 lg:pb-4">{header}</h1>
			<p className="text-base text-gray-400 lg:text-left">{description}</p>
		</div>
	);
};

export default BrandDescriptionCard;
