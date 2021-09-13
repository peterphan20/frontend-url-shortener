import React from "react";

const URLShortener = () => {
	return (
		<div className="relative flex flex-col justify-center items-center w-full h-full z-10">
			<div className="absolute bg-shorten-mobile bg-violet bg-cover rounded-xl py-8 px-7 w-80 z-30 lg:flex lg:justify-center lg:items-center lg:bg-shorten-desktop lg:gap-5 lg:w-2/3 lg:py-14 lg:px-16">
				<div className="w-full pb-5 lg:pb-0">
					<input
						type="text"
						placeholder="Shorten a link here..."
						className="text-gray-900 text-lg rounded-lg outline-none py-3 pl-4 w-full h-full"
						required
						autoFocus
					/>
				</div>
				<button className="bg-cyan text-gray-100 font-bold text-lg rounded-lg outline-none p-3 w-full lg:w-72">
					Shorten it!
				</button>
			</div>
		</div>
	);
};

export default URLShortener;
