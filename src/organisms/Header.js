import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

import MenuDesktop from "../molecules/MenuDesktop";
import MenuMobile from "../molecules/MenuMobile";

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setOpen] = useState(false);

	const trackWindowChanges = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", trackWindowChanges);
		if (windowWidth > 864) {
			setOpen(false);
		}

		return () => {
			window.removeEventListener("resize", trackWindowChanges);
		};
	}, [windowWidth]);

	const showMenu = () => {
		return windowWidth > 864 ? (
			<MenuDesktop />
		) : (
			<span className="z-30 text-gray-400">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</span>
		);
	};

	return (
		<div className="flex justify-between items-center relative text-gray-900 py-8 px-8 z-20 w-full lg:py-3 lg:px-56">
			<p className="text-4xl font-bold">Shortly</p>
			{showMenu()}
			<MenuMobile setOpen={setOpen} isOpen={isOpen} />
		</div>
	);
};

export default Header;
