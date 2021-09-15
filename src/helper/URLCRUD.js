export const shortenURL = async (url) => {
	try {
		const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
			method: "POST",
		});
		const data = res.json();
		return data;
	} catch (err) {
		console.log(err);
		alert("Error: We were unable to shorten your link");
	}
};
