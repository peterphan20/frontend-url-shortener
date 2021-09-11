import React from "react";
import illustration from "../assets/illustration-working.svg";

const TopHero = () => {
	return (
		<div className="text-center pt-28 pb-5 px-3">
			<img src={illustration} alt="person sitting at a desk" />
			<div className="py-10 px-3">
				<h1 className="text-3xl font-bold pb-4">More than just shorter links</h1>
				<p className="text-lg text-gray-400 pb-5">
					Build your brand's recognition and get detailed insights on how your links are performing.
				</p>
				<button className="bg-cyan text-gray-100 text-lg py-3 px-8 rounded-3xl">Get Started</button>
			</div>
		</div>
	);
};

export default TopHero;
