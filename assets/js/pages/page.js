import * as _tools from "../tools.js";
import * as _scroll from "../scrollHandler.js";
import * as _header from "./header.js";
import * as _footer from "./footer.js";

initPage();

await _header.initHeader();
await _footer.initFooter();

function initPage() {
	window["tools"] = _tools;

	window["footer"] = document.body.querySelector("footer");

	_scroll.initScroll();
}

export const scrollHandler = _scroll;