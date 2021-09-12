import React from "react";
import URLShortener from "./organisms/URLShortener";
import BrandDescription from "./organisms/BrandDescription";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";
import TopHero from "./organisms/TopHero";
import BottomHero from "./organisms/BottomHero";
// import bgBoostMobile from "./assets/bg-boost-mobile.svg";
// import bgBoostDesktop from "./assets/bg-boost-desktop.svg";
// import bgShortenDesktop from "./assets/bg-shorten-desktop.svg";
// import bgShortenMobile from "./assets/bg-shorten-mobile.svg";

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
