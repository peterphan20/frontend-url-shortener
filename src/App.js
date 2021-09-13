import React from "react";
import URLShortener from "./organisms/URLShortener";
import BrandDescription from "./organisms/BrandDescription";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";
import TopHero from "./organisms/TopHero";
import BottomHero from "./organisms/BottomHero";

const App = () => {
	return (
		<div className="font-body font-medium w-full h-full">
			<Header />
			<TopHero />
			<URLShortener />
			<BrandDescription />
			<BottomHero />
			<Footer />
		</div>
	);
};

export default App;
