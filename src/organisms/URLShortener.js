import { useState } from "react";
import { shortenURL } from "../helper/URLCRUD";
import ShortenedLinks from "../molecules/ShortenedLinks";

const URLShortener = () => {
	const [text, setText] = useState("");
	const [links, setLinks] = useState([]);
	const [responseFailure, setResponseFailure] = useState("");

	const onShortenSubmit = async () => {
		const response = await shortenURL(text);
		if (response.ok) {
			setLinks(response.result);
			console.log(links);
		} else {
			setResponseFailure(response);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center bg-gray-200 w-full h-full">
			<div className="bg-shorten-mobile bg-violet bg-cover rounded-xl py-8 px-7 w-80 transform -translate-y-1/2 lg:bg-shorten-desktop lg:w-2/3 lg:py-14 lg:px-16">
				<div className="lg:flex lg:justify-center lg:items-center lg:gap-5">
					<div className="w-full pb-5 lg:pb-0">
						<input
							type="text"
							placeholder="Shorten a link here..."
							className={`text-gray-900 text-base rounded-lg outline-none py-3 pl-4 w-full h-full lg:text-xl ${
								responseFailure ? "placeholder-red-400 border-2 border-red-600" : ""
							}`}
							onChange={(e) => setText(e.target.value)}
							required
							autoFocus
						/>
					</div>
					<button
						className="bg-cyan text-gray-100 font-bold text-lg rounded-lg outline-none p-3 w-full lg:w-72"
						onClick={onShortenSubmit}
					>
						Shorten it!
					</button>
				</div>
				{responseFailure.error_code === 1 ? (
					<p className="text-red-600 text-sm pt-2">Please add a link</p>
				) : responseFailure ? (
					<p className="text-red-600 text-sm pt-2">Error occurred</p>
				) : null}
			</div>
			<ShortenedLinks links={links} />
		</div>
	);
};

export default URLShortener;
