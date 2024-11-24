const headerElement = document.body.querySelector("header");

export async function initHeader() {
    if (!headerElement) {
        return;
    }

    window["header"] = headerElement;
    
    const content = await tools.loadPagePart("header");
    try {
        headerElement.appendChild(content);
    } catch(e) {
        console.error("Header element not found in page.");
        throw new Error(e);
    }
}