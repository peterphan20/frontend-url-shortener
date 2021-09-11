import React from "react";
import FooterIcon from "../atoms/FooterIcon";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-instagram.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";

const FooterIconsList = () => {
	return (
		<div className="flex justify-center items-center gap-4 pt-6">
			<FooterIcon src={facebookIcon} label="facebook icon" />
			<FooterIcon src={twitterIcon} label="twitter icon" />
			<FooterIcon src={pinterestIcon} label="pinterest icon" />
			<FooterIcon src={instagramIcon} label="instagram icon" />
		</div>
	);
};

export default FooterIconsList;
