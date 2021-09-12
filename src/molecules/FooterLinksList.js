import React from "react";
import FooterLinkHeaders from "../atoms/FooterLinkHeaders";
import FooterLinks from "../atoms/FooterLinks";

const FooterLinksList = () => {
	return (
		<>
			<FooterLinkHeaders text="Features" />
			<FooterLinks text="Link Shortening" />
			<FooterLinks text="Branded Links" />
			<FooterLinks text="Analytics" />
			<FooterLinkHeaders text="Resources" />
			<FooterLinks text="Blog" />
			<FooterLinks text="Developers" />
			<FooterLinks text="Support" />
			<FooterLinkHeaders text="Company" />
			<FooterLinks text="About" />
			<FooterLinks text="Our Team" />
			<FooterLinks text="Careers" />
			<FooterLinks text="Contact" />
		</>
	);
};

export default FooterLinksList;
