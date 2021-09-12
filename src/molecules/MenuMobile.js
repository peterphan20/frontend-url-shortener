import React from "react";
import MenuAnchorMobile from "../atoms/MenuAnchorMobile";

const MenuMobile = ({ setOpen, isOpen }) => {
	const handleClick = (id) => {
		setOpen(false);
		setTimeout(() => {
			document.getElementById(id).scrollIntoView();
		}, 300);
	};

	return (
		<div
			className={`flex flex-col justify-center items-center absolute top-0 z-10 bg-violet rounded-xl w-80 transition-all duration-500 ease-out transform ${
				isOpen ? "px-8 py-10 translate-y-28" : "opacity-0 -translate-y-full"
			}`}
		>
			<MenuAnchorMobile text="Features" clickHandler={() => handleClick("features")} />
			<MenuAnchorMobile text="Pricing" clickHandler={() => handleClick("pricing")} />
			<MenuAnchorMobile text="Resources" clickHandler={() => handleClick("resources")} />
			<hr className="my-4 w-full" />
			<MenuAnchorMobile text="Login" />
			<MenuAnchorMobile text="Sign Up" />
		</div>
	);
};

export default MenuMobile;
