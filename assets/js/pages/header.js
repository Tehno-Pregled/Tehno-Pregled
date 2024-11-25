const headerElement = document.body.querySelector("header");

export async function initHeader() {
    if (!headerElement) {
        return;
    }
    
    const content = await tools.loadPagePart("header");
    try {
        tools.appendChildren(headerElement, content);
    } catch(e) {
        console.error("Header element not found in page.");
        throw new Error(e);
    }

    initHamburger();
}

function initHamburger() {
	const hamburger = headerElement.querySelector(".wrapper").querySelector(".hamburger");
	const hamburgerMenu = headerElement.querySelector(".hamburger-menu");
	const hamburgerMenuCloser = hamburgerMenu.querySelector(".close");
	hamburger.addEventListener("click", () => {
		tools.showElement(hamburger, false);
		tools.showElement(hamburgerMenu, true);
	});
	hamburgerMenuCloser.addEventListener("click", () => {
		tools.showElement(hamburger, true);
		tools.showElement(hamburgerMenu, false);
	});
}