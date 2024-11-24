import * as _tools from "../tools.js";
import * as _scroll from "../scrollHandler.js";
import * as _header from "./header.js";
import * as _footer from "./footer.js";

_scroll.initScroll();
window["tools"] = _tools;
await _header.initHeader();
await _footer.initFooter();