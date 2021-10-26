/*
	Record UTM parameters in localstorage, and pass them to app store links to track which ads and events are effective without using privacy intrusive methods such as cookies.

	The campaign parameter (Just CT for the app store) may be the only variable visible in app store dashboards.

	Example UTM parameter URL: https://www.orchid.com/?utm_source=example&utm_medium=example&utm_campaign=example&utm_term=example&utm_content=example
*/

const utm_keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

const GlobalParameters = new URLSearchParams(window.location.search);
for (let param of GlobalParameters) {
	if (utm_keys.includes(param[0])) {
		let value = param[1];
		localStorage[param[0]] = value;
	}
}

const utm_holdovers = {
	utm_source: localStorage["utm_source"],
	utm_medium: localStorage["utm_medium"],
	utm_campaign: localStorage["utm_campaign"],
	ct: localStorage["utm_campaign"],
	utm_term: localStorage["utm_term"],
	utm_content: localStorage["utm_content"],
}

const addUTMParameters = (link) => {
	let urlParts = link.split("?");
	const parameters = new URLSearchParams(urlParts[1]);
	for (let param of parameters) {
		if (parameters.has(param[0]) && utm_holdovers[param[0]] !== undefined) {
			const key = param[0];
			let value = param[1];
			if (key === "utm_campaign" || key === "ct") {
				value = utm_holdovers["utm_campaign"] + "-UTMWebsitePass-" + value;
			}

			parameters.set(key, value);
		}
	}
	return urlParts[0] + "?" + parameters.toString();
}

window.addUTMParameters = addUTMParameters;

/*
// This solution only runs on initial load, and not when users navigate subsequent pages.
// Causes react to throw a warning in development "Warning: Prop `href` did not match. Server"

window.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll("a[data-appstorelink]");
	for (let index = 0; index < links.length; index++) {
		const link = links[index];
		link.setAttribute('href', addUTMParameters(link.getAttribute('href')));
	}
})
*/