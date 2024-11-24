export function showElement(element, show) {
	if (show) {
		element.classList.add("active");
		element.classList.remove("inactive");
	}
	else {
		element.classList.remove("active");
		element.classList.add("inactive");
	}
}

export function isElementVisible(element) {
	return element.classList.contains("active");
}

export async function loadJsonData(fileName) {
	const location = ("../assets/data/").concat(fileName).concat(".json");
    let response = await fetch(location);
	if (!response.ok) {
        throw new Error(("Could not load json data file ").concat(fileName).concat(".json"))
    }
	return await response.json();
}

export async function loadPagePart(pagePart) {
	const location = ("../assets/page-parts/").concat(pagePart).concat(".html");
	let response = await fetch(location);
    if (!response.ok) {
        throw new Error(("Could not load page part ").concat(pagePart).concat(".html"))
    }
    const html = await response.text();
	const parser = new DOMParser();
	return parser.parseFromString(html, "text/html").querySelector("body").children[0]; 
}