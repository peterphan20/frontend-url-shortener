import { useState } from "react";

const ShortenedLinks = ({ links }) => {
	const [copied, setCopied] = useState(false);

	return (
		<div className="w-80 h-full transform -translate-y-16 lg:w-2/3">
			{links.original_link ? (
				<div className="flex flex-col justify-start items-start bg-gray-50 rounded-lg py-3 px-4 w-full h-full lg:flex-row lg:justify-between lg:items-center lg:py-4 lg:px-8">
					<h1 className="py-2 border-b border-gray-300 w-full break-words lg:text-lg lg:border-none lg:py-0">
						{links.original_link}
					</h1>
					<div className="py-3 w-full lg:flex lg:justify-end lg:items-center lg:gap-5 lg:py-0">
						<a
							className="text-cyan lg:text-lg"
							href={links.original_link}
							target="_blank"
							rel="noreferrer"
						>
							{links.short_link}
						</a>
						<button
							className={`text-gray-100 mt-3 py-2 px-4 rounded-lg lg:mt-0 w-full lg:w-24 ${
								copied ? "bg-violet" : "bg-cyan"
							}`}
							onClick={() => setCopied(!copied)}
						>
							{!copied ? "Copy" : "Copied!"}
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default ShortenedLinks;
