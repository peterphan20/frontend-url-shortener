import { useState } from "react";

const ShortenedLinks = ({ links }) => {
	const [copied, setCopied] = useState(false);

	return (
		<div className="flex flex-col justify-start items-start w-80 h-full transform -translate-y-16">
			<div className="bg-gray-50 rounded-lg py-3 px-4 w-full">
				<h1 className="py-2 border-b border-gray-300 w-full">{links.original_link}</h1>
				<div className="py-3 w-full lg:flex lg:justify-center lg:items-center">
					<h1 className="text-cyan pb-3">{links.short_link}</h1>
					<button
						className="bg-cyan w-full text-gray-100 py-2 px-4 rounded-lg"
						onClick={() => setCopied(false)}
					>
						{!copied ? "Copy" : "Copied!"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShortenedLinks;
