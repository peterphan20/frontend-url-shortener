import React from "react";

const URLShortener = () => {
	return (
		<div className="relative flex flex-col justify-center items-center w-full h-full z-10">
			<div className="absolute bg-shorten-mobile bg-violet bg-cover rounded-xl py-8 px-7 w-80 z-30">
				<div className="w-full pb-5">
					<input
						type="text"
						placeholder="Shorten a link here..."
						className="text-gray-900 text-lg rounded-lg outline-none py-3 pl-4 w-full"
						required
						autoFocus
					/>
				</div>
				<button className="bg-cyan text-gray-100 font-bold text-lg rounded-lg outline-none p-3 w-full">
					Shorten it!
				</button>
			</div>
		</div>
	);
};

export default URLShortener;
