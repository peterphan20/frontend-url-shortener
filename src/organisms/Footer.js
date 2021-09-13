import React from "react";
import FooterLinksList from "../molecules/FooterLinksList";
import FooterIconsList from "../molecules/FooterIconsList";

const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-center bg-footer py-16 w-full h-full h-min-screen lg:flex-row lg:justify-around lg:items-start lg:px-20">
			<h1 className="text-5xl text-gray-100 pb-10 lg:text-4xl lg:pb-0">Shortly</h1>
			<FooterLinksList />
			<FooterIconsList />	
		</div>
	);
};

export default Footer;
