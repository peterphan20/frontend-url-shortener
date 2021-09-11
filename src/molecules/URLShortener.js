import React from "react";

const URLShortener = () => {
	return (
		<div className="flex flex-col justify-center items-center bg-shorten-mobile bg-violet bg-cover py-8 px-7 w-full h-full">
			<div className="w-full pb-5">
				<input
					type="text"
					placeholder="Shorten a link here..."
					className="text-gray-900 text-lg rounded-lg outline-none py-3 pl-4 w-full"
					required
					autoFocus
				/>
			</div>
			<button className="bg-cyan text-gray-100 font-bold text-lg rounded-lg outline-none p-3 w-full">Shorten it!</button>
		</div>
	);
};

export default URLShortener;
