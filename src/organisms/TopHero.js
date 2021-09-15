import React from "react";
import illustration from "../assets/illustration-working.svg";

const TopHero = () => {
	return (
		<div className="text-center pt-8 pb-24 px-3 w-full h-full lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:pl-52 lg:pr-40 lg:pb-44">
			<img src={illustration} aria-label="person sitting at a desk" />
			<div className="py-10 px-3 lg:text-left lg:pr-28">
				<h1 className="text-3xl font-bold pb-4 lg:text-6xl lg:leading-tight">More than just shorter links</h1>
				<p className="text-lg text-gray-400 pb-5 lg:text-xl">
					Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<button className="bg-cyan text-gray-100 text-lg py-3 px-8 rounded-3xl">Get Started</button>
			</div>
		</div>
	);
};

export default TopHero;
