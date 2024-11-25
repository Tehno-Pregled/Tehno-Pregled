const footerElement = document.body.querySelector("footer");

export async function initFooter() {
    if (!footerElement) {
        return;
    }

    window["footer"] = footerElement;
    
    const content = await tools.loadPagePart("footer");
    try {
        tools.appendChildren(footerElement, content);
    } catch(e) {
        console.error("Footer element not found in page.");
        throw new Error(e);
    }
}