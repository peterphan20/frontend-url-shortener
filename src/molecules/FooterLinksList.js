import React from "react";
import FooterLinkHeaders from "../atoms/FooterLinkHeaders";
import FooterLinks from "../atoms/FooterLinks";

const FooterLinksList = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center lg:items-start">
				<FooterLinkHeaders text="Features" />
				<FooterLinks text="Link Shortening" />
				<FooterLinks text="Branded Links" />
				<FooterLinks text="Analytics" />
			</div>
			<div className="flex flex-col justify-center items-center lg:items-start">
				<FooterLinkHeaders text="Resources" />
				<FooterLinks text="Blog" />
				<FooterLinks text="Developers" />
				<FooterLinks text="Support" />
			</div>
			<div className="flex flex-col justify-center items-center lg:items-start">
				<FooterLinkHeaders text="Company" />
				<FooterLinks text="About" />
				<FooterLinks text="Our Team" />
				<FooterLinks text="Careers" />
				<FooterLinks text="Contact" />
			</div>
		</>
	);
};

export default FooterLinksList;
