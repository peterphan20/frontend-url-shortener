import React from "react";
import MenuAnchorDesktop from "../atoms/MenuAnchorDesktop";

const MenuDesktop = () => {
	return (
		<div className="flex justify-between items-center py-5 w-full h-full">
			<div className="flex justify-center items-center px-8 gap-9">
				<MenuAnchorDesktop text="Features" className="hover:text-gray-900" />
				<MenuAnchorDesktop text="Pricing" className="hover:text-gray-900" />
				<MenuAnchorDesktop text="Resources" className="hover:text-gray-900" />
			</div>
			<div className="flex items-center gap-6">
				<MenuAnchorDesktop
					text="Login"
					className="rounded-3xl py-1 px-4 hover:bg-cyan hover:text-gray-100"
				/>
				<MenuAnchorDesktop
					text="Sign Up"
					className="rounded-3xl py-1 px-4 hover:bg-cyan hover:text-gray-100"
				/>
			</div>
		</div>
	);
};

export default MenuDesktop;
