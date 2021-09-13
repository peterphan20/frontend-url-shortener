import React from "react";
import BrandDescriptionCard from "../molecules/BrandDescriptionCard";
import iconBrandRecognition from "../assets/icon-brand-recognition.svg";
import iconDetailedRecords from "../assets/icon-detailed-records.svg";
import iconBrandCustomizable from "../assets/icon-fully-customizable.svg";

const BrandDescription = () => {
	return (
		<div className="bg-gray-200 text-center pt-40 pb-20">
			<span id="features" className="block relative -top-10 lg:-top-28" />
			<h1 className="text-3xl font-bold text-gray-900 pb-5 lg:text-4xl">Advanced Statistics</h1>
			<p className="text-lg text-gray-400 pb-20">
				Track how your links are performing across the web with our advanced statistics dashboard.
			</p>
			<div className="flex flex-col justify-center items-center lg:flex-row">
				<BrandDescriptionCard
					src={iconBrandRecognition}
					header="Brand Recognition"
					description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
				/>
				<hr className="bg-cyan w-2 h-20 lg:w-5 lg:h-2" />
				<BrandDescriptionCard
					src={iconDetailedRecords}
					header="Detailed Records"
					description="Gain insights into who is clicking your links. Knowing when and where 
					people engage with your content helps inform better decisions."
				/>
				<hr className="bg-cyan w-2 h-20 lg:w-5 lg:h-2" />
				<BrandDescriptionCard
					src={iconBrandCustomizable}
					header="Fully Customizable"
					description="Improve brand awareness and content discoverability through customizable 
					links, supercharging audience engagement."
				/>
			</div>
		</div>
	);
};

export default BrandDescription;
