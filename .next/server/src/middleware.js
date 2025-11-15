// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[727],{

/***/ 818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fsrc_2Fmiddleware_ts_page_2Fsrc_2Fmiddleware_rootDir_C_3A_5CUsers_5CAbdullah_5CDesktop_5Cportfolio2_0_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2Rhc2hib2FyZCg_2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw_2FXSs_2FKSkqKSk_2FKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2Rhc2hib2FyZC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9lZGl0KD86XFwvKCg_2FOlteXFwvI1xcP10rPykoPzpcXC8oPzpbXlxcLyNcXD9dKz8pKSopKT8oLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvZWRpdC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9hZG1pbig_2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw_2FXSs_2FKSkqKSk_2FKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2FkbWluLzpwYXRoKiJ9XQ_3D_3D_preferredRegion_middlewareConfig_eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2Rhc2hib2FyZCg_2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw_2FXSs_2FKSkqKSk_2FKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2Rhc2hib2FyZC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9lZGl0KD86XFwvKCg_2FOlteXFwvI1xcP10rPykoPzpcXC8oPzpbXlxcLyNcXD9dKz8pKSopKT8oLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvZWRpdC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9hZG1pbig_2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw_2FXSs_2FKSkqKSk_2FKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2FkbWluLzpwYXRoKiJ9XX0_3D_)
});

// NAMESPACE OBJECT: ./src/middleware.ts
var middleware_namespaceObject = {};
__webpack_require__.r(middleware_namespaceObject);
__webpack_require__.d(middleware_namespaceObject, {
  config: () => (middleware_config),
  "default": () => (src_middleware)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/globals.js
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/utils.js
/**
 * Converts a Node.js IncomingHttpHeaders object to a Headers object. Any
 * headers with multiple values will be joined with a comma and space. Any
 * headers that have an undefined value will be ignored and others will be
 * coerced to strings.
 *
 * @param nodeHeaders the headers object to convert
 * @returns the converted headers object
 */ function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
/**
 * Converts a Headers object to a Node.js OutgoingHttpHeaders object. This is
 * required to support the set-cookie header, which may have multiple values.
 *
 * @param headers the headers object to convert
 * @returns the converted headers object
 */ function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var _edge_runtime_cookies = __webpack_require__(865);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
 //# sourceMappingURL=cookies.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        validateURL(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new NextURL(url, {
            headers: toNodeOutgoingHttpHeaders(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new _edge_runtime_cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js



const response_INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[response_INTERNALS] = {
            cookies: new _edge_runtime_cookies.ResponseCookies(this.headers),
            url: init.url ? new NextURL(init.url, {
                headers: toNodeOutgoingHttpHeaders(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[response_INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", validateURL(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", validateURL(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc"; //# sourceMappingURL=app-router-headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js

const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    NEXT_RSC_UNION_QUERY
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js

/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment[0] === "(" && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/lib/constants.js
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = (/* unused pure expression or super */ null && (`(?:src/)?${MIDDLEWARE_FILENAME}`));
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
// Consolidate this consts when the `appDir` will be stable.
const ESLINT_DEFAULT_DIRS = [
    "pages",
    "components",
    "lib",
    "src"
];
const ESLINT_DEFAULT_DIRS_WITH_APP = [
    "app",
    ...ESLINT_DEFAULT_DIRS
];
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "actionBrowser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        server: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
}; //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js

/**
 * @internal
 */ class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js


/**
 * @internal
 */ class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res`' cookies
    // will still take precedence.
    const resCookies = new ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookes = new _edge_runtime_cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookes.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            var _fetch___nextGetStaticStore;
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = fetch.__nextGetStaticStore == null ? void 0 : (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore()) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookes.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _edge_runtime_cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookes, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/api-utils/index.js


/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __webpack_require__(487);
        return parseCookieFn(Array.isArray(cookie) ? cookie.join("; ") : cookie);
    };
}
/**
 *
 * @param res response object
 * @param statusCode `HTTP` status code of response
 */ function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
/**
 *
 * @param res response object
 * @param [statusOrUrl] `HTTP` status code of redirect
 * @param url URL of redirect
 */ function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = HeadersAdapter.from(req.headers);
    const previewModeId = headers.get(PRERENDER_REVALIDATE_HEADER);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = (/* unused pure expression or super */ null && (4 * 1024 * 1024));
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __webpack_require__(487);
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
/**
 * Custom error class
 */ class ApiError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
/**
 * Sends error in `response`
 * @param res response object
 * @param statusCode of response
 * @param message of response
 */ function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
/**
 * Execute getter function only if its needed
 * @param LazyProps `req` and `params` for lazyProp
 * @param prop name of property
 * @param getter function to get data
 */ function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js

class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && checkIsOnDemandRevalidate(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && cookieValue === previewProps.previewModeId);
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: this._previewModeId,
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: "",
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js





function getHeaders(headers) {
    const cleaned = HeadersAdapter.from(headers);
    for (const param of FLIGHT_PARAMETERS){
        cleaned.delete(param.toString().toLowerCase());
    }
    return HeadersAdapter.seal(cleaned);
}
function getCookies(headers) {
    const cookies = new _edge_runtime_cookies.RequestCookies(HeadersAdapter.from(headers));
    return RequestCookiesAdapter.seal(cookies);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new _edge_runtime_cookies.RequestCookies(HeadersAdapter.from(headers));
    return MutableRequestCookiesAdapter.wrap(cookies, onUpdateCookies);
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = getCookies(req.headers);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    cache.mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new DraftModeProvider(previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            }
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/async-local-storage.js
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.js

const requestAsyncStorage = createAsyncLocalStorage(); //# sourceMappingURL=request-async-storage.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js















class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const adapter_FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ],
    [
        FETCH_CACHE_HEADER
    ]
];
async function adapter(params) {
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new NextURL(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== NEXT_QUERY_PARAM_PREFIX && key.startsWith(NEXT_QUERY_PARAM_PREFIX)) {
            const normalizedKey = key.substring(NEXT_QUERY_PARAM_PREFIX.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = fromNodeOutgoingHttpHeaders(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of adapter_FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl =  false ? 0 : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: stripInternalSearchParams(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    // we only care to make async storage available for middleware
    if (params.page === "/middleware") {
        response = await RequestAsyncStorageWrapper.wrap(requestAsyncStorage, {
            req: request,
            renderOpts: {
                onUpdateCookies: (cookies)=>{
                    cookiesFromResponse = cookies;
                },
                // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                previewProps: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                    previewModeId: "development-id",
                    previewModeEncryptionKey: "",
                    previewModeSigningKey: ""
                }
            }
        }, ()=>params.handler(request, event));
    } else {
        response = await params.handler(request, event);
    }
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new NextURL(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new NextURL(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : NextResponse.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol])
    };
} //# sourceMappingURL=adapter.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/exports/next-response.js
// This file is for modularized imports for next/server to get fully-treeshaking.
 //# sourceMappingURL=next-response.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/lib/prelude.js
const uppercase = (str)=>str.toUpperCase();
const callOrIdentity = (value)=>{
    return typeof value === `function` ? value() : value;
};
const zip = (a, b)=>a.map((k, i)=>[
            k,
            b[i]
        ]);
const HeadersInitToPlainObject = (headers)=>{
    let oHeaders = {};
    if (headers instanceof Headers) {
        oHeaders = HeadersInstanceToPlainObject(headers);
    } else if (Array.isArray(headers)) {
        headers.forEach(([name, value])=>{
            if (name && value !== undefined) {
                oHeaders[name] = value;
            }
        });
    } else if (headers) {
        oHeaders = headers;
    }
    return oHeaders;
};
const HeadersInstanceToPlainObject = (headers)=>{
    const o = {};
    headers.forEach((v, k)=>{
        o[k] = v;
    });
    return o;
};
const tryCatch = (fn)=>{
    try {
        const result = fn();
        if (isPromiseLikeValue(result)) {
            return result.catch((error)=>{
                return errorFromMaybeError(error);
            });
        }
        return result;
    } catch (error) {
        return errorFromMaybeError(error);
    }
};
/**
 * Ensure that the given value is an error and return it. If it is not an error than
 * wrap it in one, passing the given value as the error message.
 */ const errorFromMaybeError = (maybeError)=>{
    if (maybeError instanceof Error) return maybeError;
    return new Error(String(maybeError));
};
const isPromiseLikeValue = (value)=>{
    return typeof value === `object` && value !== null && `then` in value && typeof value.then === `function` && `catch` in value && typeof value.catch === `function` && `finally` in value && typeof value.finally === `function`;
};
const casesExhausted = (value)=>{
    throw new Error(`Unhandled case: ${String(value)}`);
};
const isPlainObject = (value)=>{
    return typeof value === `object` && value !== null && !Array.isArray(value);
};
const entries = (obj)=>Object.entries(obj);
const values = (obj)=>Object.values(obj);
const mapValues = (object, fn)=>{
    return Object.fromEntries(Object.entries(object).map(([key, value])=>{
        return [
            key,
            fn(value, key)
        ];
    }));
};
const lowerCaseFirstLetter = (s)=>{
    return s.charAt(0).toLowerCase() + s.slice(1);
};
function assertArray(v) {
    if (!Array.isArray(v)) throw new Error(`Expected array. Got: ${String(v)}`);
}
function assertObject(v) {
    if (v === null || typeof v !== `object`) throw new Error(`Expected object. Got: ${String(v)}`);
}
const capitalizeFirstLetter = (string)=>string.charAt(0).toUpperCase() + string.slice(1);
const createDeferred = (options)=>{
    let isResolved = false;
    let resolve;
    let reject;
    const promise = new Promise(($resolve, $reject)=>{
        resolve = $resolve;
        reject = $reject;
    });
    return {
        promise,
        isResolved: ()=>isResolved,
        resolve: (value)=>{
            isResolved = true;
            if (options?.strict && isResolved) {
                throw new Error(`Deferred is already resolved. Attempted to resolve with: ${JSON.stringify(value)}`);
            }
            resolve(value);
        },
        reject: (error)=>reject(error)
    };
};
const debug = (...args)=>{
    if (process.env[`DEBUG`]) {
        console.log(...args);
    }
};
const debugSub = (...args)=>(...subArgs)=>{
        debug(...args, ...subArgs);
    };
const partitionErrors = (array)=>{
    const errors = [];
    const values = [];
    for (const item of array){
        if (item instanceof Error) {
            errors.push(item);
        } else {
            values.push(item);
        }
    }
    return [
        values,
        errors
    ];
}; //# sourceMappingURL=prelude.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/functions/batchRequests.js

/**
 * Send a batch of GraphQL Document to the GraphQL server for execution.
 *
 * @example
 *
 * ```ts
 * // You can pass a raw string
 *
 * await batchRequests('https://foo.bar/graphql', [
 * {
 *  query: `
 *   {
 *     query {
 *       users
 *     }
 *   }`
 * },
 * {
 *   query: `
 *   {
 *     query {
 *       users
 *     }
 *   }`
 * }])
 *
 * // You can also pass a GraphQL DocumentNode as query. Convenient if you
 * // are using graphql-tag package.
 *
 * import gql from 'graphql-tag'
 *
 * await batchRequests('https://foo.bar/graphql', [{ query: gql`...` }])
 * ```
 */ const batchRequests = async (...args)=>{
    const params = parseBatchRequestsArgsExtended(args);
    const client = new GraphQLClient(params.url);
    return client.batchRequests(params);
};
const parseBatchRequestsArgsExtended = (args)=>{
    if (args.length === 1) {
        return args[0];
    } else {
        return {
            url: args[0],
            documents: args[1],
            requestHeaders: args[2],
            signal: undefined
        };
    }
};
const parseBatchRequestArgs = (documentsOrOptions, requestHeaders)=>{
    // eslint-disable-next-line
    return documentsOrOptions.documents ? documentsOrOptions : {
        documents: documentsOrOptions,
        requestHeaders: requestHeaders,
        signal: undefined
    };
}; //# sourceMappingURL=batchRequests.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/functions/rawRequest.js

/**
 * Send a GraphQL Query to the GraphQL server for execution.
 */ const rawRequest = async (...args)=>{
    const [urlOrOptions, query, ...variablesAndRequestHeaders] = args;
    const requestOptions = parseRawRequestExtendedArgs(urlOrOptions, query, ...variablesAndRequestHeaders);
    const client = new GraphQLClient(requestOptions.url);
    return client.rawRequest({
        ...requestOptions
    });
};
const parseRawRequestExtendedArgs = (urlOrOptions, query, ...variablesAndRequestHeaders)=>{
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    return typeof urlOrOptions === `string` ? {
        url: urlOrOptions,
        query: query,
        variables,
        requestHeaders,
        signal: undefined
    } : urlOrOptions;
};
const parseRawRequestArgs = (queryOrOptions, variables, requestHeaders)=>{
    return queryOrOptions.query ? queryOrOptions : {
        query: queryOrOptions,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
}; //# sourceMappingURL=rawRequest.js.map

;// CONCATENATED MODULE: ./node_modules/graphql/language/kinds.mjs
/**
 * The set of allowed kind values for AST nodes.
 */ var kinds_Kind;
(function(Kind) {
    Kind["NAME"] = "Name";
    Kind["DOCUMENT"] = "Document";
    Kind["OPERATION_DEFINITION"] = "OperationDefinition";
    Kind["VARIABLE_DEFINITION"] = "VariableDefinition";
    Kind["SELECTION_SET"] = "SelectionSet";
    Kind["FIELD"] = "Field";
    Kind["ARGUMENT"] = "Argument";
    Kind["FRAGMENT_SPREAD"] = "FragmentSpread";
    Kind["INLINE_FRAGMENT"] = "InlineFragment";
    Kind["FRAGMENT_DEFINITION"] = "FragmentDefinition";
    Kind["VARIABLE"] = "Variable";
    Kind["INT"] = "IntValue";
    Kind["FLOAT"] = "FloatValue";
    Kind["STRING"] = "StringValue";
    Kind["BOOLEAN"] = "BooleanValue";
    Kind["NULL"] = "NullValue";
    Kind["ENUM"] = "EnumValue";
    Kind["LIST"] = "ListValue";
    Kind["OBJECT"] = "ObjectValue";
    Kind["OBJECT_FIELD"] = "ObjectField";
    Kind["DIRECTIVE"] = "Directive";
    Kind["NAMED_TYPE"] = "NamedType";
    Kind["LIST_TYPE"] = "ListType";
    Kind["NON_NULL_TYPE"] = "NonNullType";
    Kind["SCHEMA_DEFINITION"] = "SchemaDefinition";
    Kind["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
    Kind["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
    Kind["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
    Kind["FIELD_DEFINITION"] = "FieldDefinition";
    Kind["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
    Kind["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
    Kind["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
    Kind["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
    Kind["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
    Kind["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
    Kind["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
    Kind["SCHEMA_EXTENSION"] = "SchemaExtension";
    Kind["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
    Kind["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
    Kind["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
    Kind["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
    Kind["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
    Kind["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(kinds_Kind || (kinds_Kind = {}));
 /**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ 

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/lib/http.js
const ACCEPT_HEADER = `Accept`;
const CONTENT_TYPE_HEADER = `Content-Type`;
const CONTENT_TYPE_JSON = `application/json`;
const CONTENT_TYPE_GQL = `application/graphql-response+json`;
const statusCodes = {
    success: 200
}; //# sourceMappingURL=http.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/lib/graphql.js



/**
 * Clean a GraphQL document to send it via a GET query
 */ const cleanQuery = (str)=>str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
const isGraphQLContentType = (contentType)=>{
    const contentTypeLower = contentType.toLowerCase();
    return contentTypeLower.includes(CONTENT_TYPE_GQL) || contentTypeLower.includes(CONTENT_TYPE_JSON);
};
const parseGraphQLExecutionResult = (result)=>{
    try {
        if (Array.isArray(result)) {
            return {
                _tag: `Batch`,
                executionResults: result.map(parseExecutionResult)
            };
        } else if (isPlainObject(result)) {
            return {
                _tag: `Single`,
                executionResult: parseExecutionResult(result)
            };
        } else {
            throw new Error(`Invalid execution result: result is not object or array. \nGot:\n${String(result)}`);
        }
    } catch (e) {
        return e;
    }
};
/**
 * Example result:
 *
 * ```
 * {
 *  "data": null,
 *  "errors": [{
 *    "message": "custom error",
 *    "locations": [{ "line": 2, "column": 3 }],
 *    "path": ["playerNew"]
 *  }]
 * }
 * ```
 */ const parseExecutionResult = (result)=>{
    if (typeof result !== `object` || result === null) {
        throw new Error(`Invalid execution result: result is not object`);
    }
    let errors = undefined;
    let data = undefined;
    let extensions = undefined;
    if (`errors` in result) {
        if (!isPlainObject(result.errors) && !Array.isArray(result.errors)) {
            throw new Error(`Invalid execution result: errors is not plain object OR array`); // prettier-ignore
        }
        errors = result.errors;
    }
    // todo add test coverage for case of null. @see https://github.com/jasonkuhrt/graphql-request/issues/739
    if (`data` in result) {
        if (!isPlainObject(result.data) && result.data !== null) {
            throw new Error(`Invalid execution result: data is not plain object`); // prettier-ignore
        }
        data = result.data;
    }
    if (`extensions` in result) {
        if (!isPlainObject(result.extensions)) throw new Error(`Invalid execution result: extensions is not plain object`); // prettier-ignore
        extensions = result.extensions;
    }
    return {
        data,
        errors,
        extensions
    };
};
const isRequestResultHaveErrors = (result)=>result._tag === `Batch` ? result.executionResults.some(isExecutionResultHaveErrors) : isExecutionResultHaveErrors(result.executionResult);
const isExecutionResultHaveErrors = (result)=>Array.isArray(result.errors) ? result.errors.length > 0 : Boolean(result.errors);
const isOperationDefinitionNode = (definition)=>{
    return typeof definition === `object` && definition !== null && `kind` in definition && definition.kind === kinds_Kind.OPERATION_DEFINITION;
}; //# sourceMappingURL=graphql.js.map

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/isObjectLike.mjs
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */ function isObjectLike(value) {
    return typeof value == "object" && value !== null;
}

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/invariant.mjs
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message != null ? message : "Unexpected invariant triggered.");
    }
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/location.mjs

const LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */ /**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */ function getLocation(source, position) {
    let lastLineStart = 0;
    let line = 1;
    for (const match of source.body.matchAll(LineRegExp)){
        typeof match.index === "number" || invariant(false);
        if (match.index >= position) {
            break;
        }
        lastLineStart = match.index + match[0].length;
        line += 1;
    }
    return {
        line,
        column: position + 1 - lastLineStart
    };
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/printLocation.mjs

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ function printLocation(location) {
    return printSourceLocation(location.source, getLocation(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body = "".padStart(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
    const lines = body.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex]; // Special case for minified documents
    if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for(let i = 0; i < locationLine.length; i += 80){
            subLines.push(locationLine.slice(i, i + 80));
        }
        return locationStr + printPrefixedLines([
            [
                `${lineNum} |`,
                subLines[0]
            ],
            ...subLines.slice(1, subLineIndex + 1).map((subLine)=>[
                    "|",
                    subLine
                ]),
            [
                "|",
                "^".padStart(subLineColumnNum)
            ],
            [
                "|",
                subLines[subLineIndex + 1]
            ]
        ]);
    }
    return locationStr + printPrefixedLines([
        // Lines specified like this: ["prefix", "string"],
        [
            `${lineNum - 1} |`,
            lines[lineIndex - 1]
        ],
        [
            `${lineNum} |`,
            locationLine
        ],
        [
            "|",
            "^".padStart(columnNum)
        ],
        [
            `${lineNum + 1} |`,
            lines[lineIndex + 1]
        ]
    ]);
}
function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line])=>line !== undefined);
    const padLen = Math.max(...existingLines.map(([prefix])=>prefix.length));
    return existingLines.map(([prefix, line])=>prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}

;// CONCATENATED MODULE: ./node_modules/graphql/error/GraphQLError.mjs



function toNormalizedOptions(args) {
    const firstArg = args[0];
    if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
        return {
            nodes: firstArg,
            source: args[1],
            positions: args[2],
            path: args[3],
            originalError: args[4],
            extensions: args[5]
        };
    }
    return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */ class GraphQLError extends Error {
    /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */ /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */ /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */ /**
   * The original error thrown from a field resolver during execution.
   */ /**
   * Extension fields to add to the formatted error.
   */ /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */ constructor(message, ...rawArgs){
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = "GraphQLError";
        this.path = path !== null && path !== void 0 ? path : undefined;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.
        this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [
            nodes
        ] : undefined);
        const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node)=>node.loc).filter((loc)=>loc != null)); // Compute locations in the source for the given nodes/positions.
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>loc.start);
        this.locations = positions && source ? positions.map((pos)=>getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>getLocation(loc.source, loc.start));
        const originalExtensions = isObjectLike(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : undefined;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : Object.create(null); // Only properties prescribed by the spec should be enumerable.
        // Keep the rest as non-enumerable.
        Object.defineProperties(this, {
            message: {
                writable: true,
                enumerable: true
            },
            name: {
                enumerable: false
            },
            nodes: {
                enumerable: false
            },
            source: {
                enumerable: false
            },
            positions: {
                enumerable: false
            },
            originalError: {
                enumerable: false
            }
        }); // Include (non-enumerable) stack trace.
        /* c8 ignore start */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
            Object.defineProperty(this, "stack", {
                value: originalError.stack,
                writable: true,
                configurable: true
            });
        } else if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GraphQLError);
        } else {
            Object.defineProperty(this, "stack", {
                value: Error().stack,
                writable: true,
                configurable: true
            });
        }
    /* c8 ignore stop */ }
    get [Symbol.toStringTag]() {
        return "GraphQLError";
    }
    toString() {
        let output = this.message;
        if (this.nodes) {
            for (const node of this.nodes){
                if (node.loc) {
                    output += "\n\n" + printLocation(node.loc);
                }
            }
        } else if (this.source && this.locations) {
            for (const location of this.locations){
                output += "\n\n" + printSourceLocation(this.source, location);
            }
        }
        return output;
    }
    toJSON() {
        const formattedError = {
            message: this.message
        };
        if (this.locations != null) {
            formattedError.locations = this.locations;
        }
        if (this.path != null) {
            formattedError.path = this.path;
        }
        if (this.extensions != null && Object.keys(this.extensions).length > 0) {
            formattedError.extensions = this.extensions;
        }
        return formattedError;
    }
}
function undefinedIfEmpty(array) {
    return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */ /**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */ function printError(error) {
    return error.toString();
}
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */ function formatError(error) {
    return error.toJSON();
}

;// CONCATENATED MODULE: ./node_modules/graphql/error/syntaxError.mjs

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */ function syntaxError(source, position, description) {
    return new GraphQLError(`Syntax Error: ${description}`, {
        source,
        positions: [
            position
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/ast.mjs
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */ class Location {
    /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The Token at which this Node begins.
   */ /**
   * The Token at which this Node ends.
   */ /**
   * The Source document the AST represents.
   */ constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    get [Symbol.toStringTag]() {
        return "Location";
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */ class Token {
    /**
   * The kind of Token.
   */ /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The 1-indexed line number on which this Token appears.
   */ /**
   * The 1-indexed column number at which this Token begins.
   */ /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */ /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */ constructor(kind, start, end, line, column, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    get [Symbol.toStringTag]() {
        return "Token";
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}
/**
 * The list of all possible AST node types.
 */ /**
 * @internal
 */ const QueryDocumentKeys = {
    Name: [],
    Document: [
        "definitions"
    ],
    OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
    ],
    VariableDefinition: [
        "variable",
        "type",
        "defaultValue",
        "directives"
    ],
    Variable: [
        "name"
    ],
    SelectionSet: [
        "selections"
    ],
    Field: [
        "alias",
        "name",
        "arguments",
        "directives",
        "selectionSet"
    ],
    Argument: [
        "name",
        "value"
    ],
    FragmentSpread: [
        "name",
        "directives"
    ],
    InlineFragment: [
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        "values"
    ],
    ObjectValue: [
        "fields"
    ],
    ObjectField: [
        "name",
        "value"
    ],
    Directive: [
        "name",
        "arguments"
    ],
    NamedType: [
        "name"
    ],
    ListType: [
        "type"
    ],
    NonNullType: [
        "type"
    ],
    SchemaDefinition: [
        "description",
        "directives",
        "operationTypes"
    ],
    OperationTypeDefinition: [
        "type"
    ],
    ScalarTypeDefinition: [
        "description",
        "name",
        "directives"
    ],
    ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives"
    ],
    InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
    ],
    InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeDefinition: [
        "description",
        "name",
        "directives",
        "types"
    ],
    EnumTypeDefinition: [
        "description",
        "name",
        "directives",
        "values"
    ],
    EnumValueDefinition: [
        "description",
        "name",
        "directives"
    ],
    InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields"
    ],
    DirectiveDefinition: [
        "description",
        "name",
        "arguments",
        "locations"
    ],
    SchemaExtension: [
        "directives",
        "operationTypes"
    ],
    ScalarTypeExtension: [
        "name",
        "directives"
    ],
    ObjectTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    InterfaceTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeExtension: [
        "name",
        "directives",
        "types"
    ],
    EnumTypeExtension: [
        "name",
        "directives",
        "values"
    ],
    InputObjectTypeExtension: [
        "name",
        "directives",
        "fields"
    ]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */ function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
/** Name */ var OperationTypeNode;
(function(OperationTypeNode) {
    OperationTypeNode["QUERY"] = "query";
    OperationTypeNode["MUTATION"] = "mutation";
    OperationTypeNode["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));


;// CONCATENATED MODULE: ./node_modules/graphql/language/directiveLocation.mjs
/**
 * The set of allowed directive location values.
 */ var DirectiveLocation;
(function(DirectiveLocation) {
    DirectiveLocation["QUERY"] = "QUERY";
    DirectiveLocation["MUTATION"] = "MUTATION";
    DirectiveLocation["SUBSCRIPTION"] = "SUBSCRIPTION";
    DirectiveLocation["FIELD"] = "FIELD";
    DirectiveLocation["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
    DirectiveLocation["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
    DirectiveLocation["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
    DirectiveLocation["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
    DirectiveLocation["SCHEMA"] = "SCHEMA";
    DirectiveLocation["SCALAR"] = "SCALAR";
    DirectiveLocation["OBJECT"] = "OBJECT";
    DirectiveLocation["FIELD_DEFINITION"] = "FIELD_DEFINITION";
    DirectiveLocation["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
    DirectiveLocation["INTERFACE"] = "INTERFACE";
    DirectiveLocation["UNION"] = "UNION";
    DirectiveLocation["ENUM"] = "ENUM";
    DirectiveLocation["ENUM_VALUE"] = "ENUM_VALUE";
    DirectiveLocation["INPUT_OBJECT"] = "INPUT_OBJECT";
    DirectiveLocation["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));
 /**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */ 

;// CONCATENATED MODULE: ./node_modules/graphql/language/characterClasses.mjs
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */ function isWhiteSpace(code) {
    return code === 0x0009 || code === 0x0020;
}
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */ function isDigit(code) {
    return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */ function isLetter(code) {
    return code >= 0x0061 && code <= 0x007a || // A-Z
    code >= 0x0041 && code <= 0x005a // a-z
    ;
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */ function isNameStart(code) {
    return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */ function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 0x005f;
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/blockString.mjs

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */ function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for(let i = 0; i < lines.length; ++i){
        var _firstNonEmptyLine;
        const line = lines[i];
        const indent = leadingWhitespace(line);
        if (indent === line.length) {
            continue; // skip empty lines
        }
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
        lastNonEmptyLine = i;
        if (i !== 0 && indent < commonIndent) {
            commonIndent = indent;
        }
    }
    return lines // Remove common indentation from all lines but first.
    .map((line, i)=>i === 0 ? line : line.slice(commonIndent)) // Remove leading and trailing blank lines.
    .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
    let i = 0;
    while(i < str.length && isWhiteSpace(str.charCodeAt(i))){
        ++i;
    }
    return i;
}
/**
 * @internal
 */ function isPrintableAsBlockString(value) {
    if (value === "") {
        return true; // empty string is printable
    }
    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;
    for(let i = 0; i < value.length; ++i){
        switch(value.codePointAt(i)){
            case 0x0000:
            case 0x0001:
            case 0x0002:
            case 0x0003:
            case 0x0004:
            case 0x0005:
            case 0x0006:
            case 0x0007:
            case 0x0008:
            case 0x000b:
            case 0x000c:
            case 0x000e:
            case 0x000f:
                return false;
            // Has non-printable characters
            case 0x000d:
                //  \r
                return false;
            // Has \r or \r\n which will be replaced as \n
            case 10:
                //  \n
                if (isEmptyLine && !seenNonEmptyLine) {
                    return false; // Has leading new line
                }
                seenNonEmptyLine = true;
                isEmptyLine = true;
                hasIndent = false;
                break;
            case 9:
            case 32:
                //  <space>
                hasIndent || (hasIndent = isEmptyLine);
                break;
            default:
                hasCommonIndent && (hasCommonIndent = hasIndent);
                isEmptyLine = false;
        }
    }
    if (isEmptyLine) {
        return false; // Has trailing empty lines
    }
    if (hasCommonIndent && seenNonEmptyLine) {
        return false; // Has internal indent
    }
    return true;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */ function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.
    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || isWhiteSpace(line.charCodeAt(0))); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith("\\");
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
    (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ""; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
        result += "\n";
    }
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) {
        result += "\n";
    }
    return '"""' + result + '"""';
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/tokenKind.mjs
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */ var tokenKind_TokenKind;
(function(TokenKind) {
    TokenKind["SOF"] = "<SOF>";
    TokenKind["EOF"] = "<EOF>";
    TokenKind["BANG"] = "!";
    TokenKind["DOLLAR"] = "$";
    TokenKind["AMP"] = "&";
    TokenKind["PAREN_L"] = "(";
    TokenKind["PAREN_R"] = ")";
    TokenKind["SPREAD"] = "...";
    TokenKind["COLON"] = ":";
    TokenKind["EQUALS"] = "=";
    TokenKind["AT"] = "@";
    TokenKind["BRACKET_L"] = "[";
    TokenKind["BRACKET_R"] = "]";
    TokenKind["BRACE_L"] = "{";
    TokenKind["PIPE"] = "|";
    TokenKind["BRACE_R"] = "}";
    TokenKind["NAME"] = "Name";
    TokenKind["INT"] = "Int";
    TokenKind["FLOAT"] = "Float";
    TokenKind["STRING"] = "String";
    TokenKind["BLOCK_STRING"] = "BlockString";
    TokenKind["COMMENT"] = "Comment";
})(tokenKind_TokenKind || (tokenKind_TokenKind = {}));
 /**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */ 

;// CONCATENATED MODULE: ./node_modules/graphql/language/lexer.mjs





/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */ class Lexer {
    /**
   * The previously focused non-ignored token.
   */ /**
   * The currently focused non-ignored token.
   */ /**
   * The (1-indexed) line containing the current token.
   */ /**
   * The character offset at which the current line begins.
   */ constructor(source){
        const startOfFileToken = new Token(tokenKind_TokenKind.SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
        return "Lexer";
    }
    /**
   * Advances the token stream to the next non-ignored token.
   */ advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
    }
    /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */ lookahead() {
        let token = this.token;
        if (token.kind !== tokenKind_TokenKind.EOF) {
            do {
                if (token.next) {
                    token = token.next;
                } else {
                    // Read the next token and form a link in the token linked-list.
                    const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.
                    token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.
                    nextToken.prev = token;
                    token = nextToken;
                }
            }while (token.kind === tokenKind_TokenKind.COMMENT);
        }
        return token;
    }
}
/**
 * @internal
 */ function isPunctuatorTokenKind(kind) {
    return kind === tokenKind_TokenKind.BANG || kind === tokenKind_TokenKind.DOLLAR || kind === tokenKind_TokenKind.AMP || kind === tokenKind_TokenKind.PAREN_L || kind === tokenKind_TokenKind.PAREN_R || kind === tokenKind_TokenKind.SPREAD || kind === tokenKind_TokenKind.COLON || kind === tokenKind_TokenKind.EQUALS || kind === tokenKind_TokenKind.AT || kind === tokenKind_TokenKind.BRACKET_L || kind === tokenKind_TokenKind.BRACKET_R || kind === tokenKind_TokenKind.BRACE_L || kind === tokenKind_TokenKind.PIPE || kind === tokenKind_TokenKind.BRACE_R;
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */ function isUnicodeScalarValue(code) {
    return code >= 0x0000 && code <= 0xd7ff || code >= 0xe000 && code <= 0x10ffff;
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */ function isSupplementaryCodePoint(body, location) {
    return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
    return code >= 0xd800 && code <= 0xdbff;
}
function isTrailingSurrogate(code) {
    return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */ function printCodePointAt(lexer, location) {
    const code = lexer.source.body.codePointAt(location);
    if (code === undefined) {
        return tokenKind_TokenKind.EOF;
    } else if (code >= 0x0020 && code <= 0x007e) {
        // Printable ASCII
        const char = String.fromCodePoint(code);
        return char === '"' ? "'\"'" : `"${char}"`;
    } // Unicode code point
    return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
/**
 * Create a token with line and column location information.
 */ function createToken(lexer, kind, start, end, value) {
    const line = lexer.line;
    const col = 1 + start - lexer.lineStart;
    return new Token(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */ function readNextToken(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // SourceCharacter
        switch(code){
            // Ignored ::
            //   - UnicodeBOM
            //   - WhiteSpace
            //   - LineTerminator
            //   - Comment
            //   - Comma
            //
            // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
            //
            // WhiteSpace ::
            //   - "Horizontal Tab (U+0009)"
            //   - "Space (U+0020)"
            //
            // Comma :: ,
            case 0xfeff:
            case 0x0009:
            case 0x0020:
            case 0x002c:
                // ,
                ++position;
                continue;
            // LineTerminator ::
            //   - "New Line (U+000A)"
            //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
            //   - "Carriage Return (U+000D)" "New Line (U+000A)"
            case 0x000a:
                // \n
                ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            case 0x000d:
                // \r
                if (body.charCodeAt(position + 1) === 0x000a) {
                    position += 2;
                } else {
                    ++position;
                }
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            // Comment
            case 0x0023:
                // #
                return readComment(lexer, position);
            // Token ::
            //   - Punctuator
            //   - Name
            //   - IntValue
            //   - FloatValue
            //   - StringValue
            //
            // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
            case 0x0021:
                // !
                return createToken(lexer, tokenKind_TokenKind.BANG, position, position + 1);
            case 0x0024:
                // $
                return createToken(lexer, tokenKind_TokenKind.DOLLAR, position, position + 1);
            case 0x0026:
                // &
                return createToken(lexer, tokenKind_TokenKind.AMP, position, position + 1);
            case 0x0028:
                // (
                return createToken(lexer, tokenKind_TokenKind.PAREN_L, position, position + 1);
            case 0x0029:
                // )
                return createToken(lexer, tokenKind_TokenKind.PAREN_R, position, position + 1);
            case 0x002e:
                // .
                if (body.charCodeAt(position + 1) === 0x002e && body.charCodeAt(position + 2) === 0x002e) {
                    return createToken(lexer, tokenKind_TokenKind.SPREAD, position, position + 3);
                }
                break;
            case 0x003a:
                // :
                return createToken(lexer, tokenKind_TokenKind.COLON, position, position + 1);
            case 0x003d:
                // =
                return createToken(lexer, tokenKind_TokenKind.EQUALS, position, position + 1);
            case 0x0040:
                // @
                return createToken(lexer, tokenKind_TokenKind.AT, position, position + 1);
            case 0x005b:
                // [
                return createToken(lexer, tokenKind_TokenKind.BRACKET_L, position, position + 1);
            case 0x005d:
                // ]
                return createToken(lexer, tokenKind_TokenKind.BRACKET_R, position, position + 1);
            case 0x007b:
                // {
                return createToken(lexer, tokenKind_TokenKind.BRACE_L, position, position + 1);
            case 0x007c:
                // |
                return createToken(lexer, tokenKind_TokenKind.PIPE, position, position + 1);
            case 0x007d:
                // }
                return createToken(lexer, tokenKind_TokenKind.BRACE_R, position, position + 1);
            // StringValue
            case 0x0022:
                // "
                if (body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
                    return readBlockString(lexer, position);
                }
                return readString(lexer, position);
        } // IntValue | FloatValue (Digit | -)
        if (isDigit(code) || code === 0x002d) {
            return readNumber(lexer, position, code);
        } // Name
        if (isNameStart(code)) {
            return readName(lexer, position);
        }
        throw syntaxError(lexer.source, position, code === 0x0027 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, tokenKind_TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */ function readComment(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) {
            break;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            break;
        }
    }
    return createToken(lexer, tokenKind_TokenKind.COMMENT, start, position, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */ function readNumber(lexer, start, firstCode) {
    const body = lexer.source.body;
    let position = start;
    let code = firstCode;
    let isFloat = false; // NegativeSign (-)
    if (code === 0x002d) {
        code = body.charCodeAt(++position);
    } // Zero (0)
    if (code === 0x0030) {
        code = body.charCodeAt(++position);
        if (isDigit(code)) {
            throw syntaxError(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
        }
    } else {
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Full stop (.)
    if (code === 0x002e) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // E e
    if (code === 0x0045 || code === 0x0065) {
        isFloat = true;
        code = body.charCodeAt(++position); // + -
        if (code === 0x002b || code === 0x002d) {
            code = body.charCodeAt(++position);
        }
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Numbers cannot be followed by . or NameStart
    if (code === 0x002e || isNameStart(code)) {
        throw syntaxError(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, isFloat ? tokenKind_TokenKind.FLOAT : tokenKind_TokenKind.INT, start, position, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading one or more digits.
 */ function readDigits(lexer, start, firstCode) {
    if (!isDigit(firstCode)) {
        throw syntaxError(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
    }
    const body = lexer.source.body;
    let position = start + 1; // +1 to skip first firstCode
    while(isDigit(body.charCodeAt(position))){
        ++position;
    }
    return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */ function readString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    let chunkStart = position;
    let value = "";
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Quote (")
        if (code === 0x0022) {
            value += body.slice(chunkStart, position);
            return createToken(lexer, tokenKind_TokenKind.STRING, start, position + 1, value);
        } // Escape Sequence (\)
        if (code === 0x005c) {
            value += body.slice(chunkStart, position);
            const escape = body.charCodeAt(position + 1) === 0x0075 // u
             ? body.charCodeAt(position + 2) === 0x007b // {
             ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
            value += escape.value;
            position += escape.size;
            chunkStart = position;
            continue;
        } // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) {
            break;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            throw syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
    }
    throw syntaxError(lexer.source, position, "Unterminated string.");
} // The string value and lexed size of an escape sequence.
function readEscapedUnicodeVariableWidth(lexer, position) {
    const body = lexer.source.body;
    let point = 0;
    let size = 3; // Cannot be larger than 12 chars (\u{00000000}).
    while(size < 12){
        const code = body.charCodeAt(position + size++); // Closing Brace (})
        if (code === 0x007d) {
            // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
            if (size < 5 || !isUnicodeScalarValue(point)) {
                break;
            }
            return {
                value: String.fromCodePoint(point),
                size
            };
        } // Append this hex digit to the code point.
        point = point << 4 | readHexDigit(code);
        if (point < 0) {
            break;
        }
    }
    throw syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
}
function readEscapedUnicodeFixedWidth(lexer, position) {
    const body = lexer.source.body;
    const code = read16BitHexCode(body, position + 2);
    if (isUnicodeScalarValue(code)) {
        return {
            value: String.fromCodePoint(code),
            size: 6
        };
    } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
    // a valid pair is formed.
    if (isLeadingSurrogate(code)) {
        // \u
        if (body.charCodeAt(position + 6) === 0x005c && body.charCodeAt(position + 7) === 0x0075) {
            const trailingCode = read16BitHexCode(body, position + 8);
            if (isTrailingSurrogate(trailingCode)) {
                // JavaScript defines strings as a sequence of UTF-16 code units and
                // encodes Unicode code points above U+FFFF using a surrogate pair of
                // code units. Since this is a surrogate pair escape sequence, just
                // include both codes into the JavaScript string value. Had JavaScript
                // not been internally based on UTF-16, then this surrogate pair would
                // be decoded to retrieve the supplementary code point.
                return {
                    value: String.fromCodePoint(code, trailingCode),
                    size: 12
                };
            }
        }
    }
    throw syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */ function read16BitHexCode(body, position) {
    // readHexDigit() returns -1 on error. ORing a negative value with any other
    // value always produces a negative value.
    return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */ function readHexDigit(code) {
    return code >= 0x0030 && code <= 0x0039 // 0-9
     ? code - 0x0030 : code >= 0x0041 && code <= 0x0046 // A-F
     ? code - 0x0037 : code >= 0x0061 && code <= 0x0066 // a-f
     ? code - 0x0057 : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */ function readEscapedCharacter(lexer, position) {
    const body = lexer.source.body;
    const code = body.charCodeAt(position + 1);
    switch(code){
        case 0x0022:
            // "
            return {
                value: '"',
                size: 2
            };
        case 0x005c:
            // \
            return {
                value: "\\",
                size: 2
            };
        case 0x002f:
            // /
            return {
                value: "/",
                size: 2
            };
        case 0x0062:
            // b
            return {
                value: "\b",
                size: 2
            };
        case 0x0066:
            // f
            return {
                value: "\f",
                size: 2
            };
        case 0x006e:
            // n
            return {
                value: "\n",
                size: 2
            };
        case 0x0072:
            // r
            return {
                value: "\r",
                size: 2
            };
        case 0x0074:
            // t
            return {
                value: "	",
                size: 2
            };
    }
    throw syntaxError(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */ function readBlockString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let lineStart = lexer.lineStart;
    let position = start + 3;
    let chunkStart = position;
    let currentLine = "";
    const blockLines = [];
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Triple-Quote (""")
        if (code === 0x0022 && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            const token = createToken(lexer, tokenKind_TokenKind.BLOCK_STRING, start, position + 3, dedentBlockStringLines(blockLines).join("\n"));
            lexer.line += blockLines.length - 1;
            lexer.lineStart = lineStart;
            return token;
        } // Escaped Triple-Quote (\""")
        if (code === 0x005c && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022 && body.charCodeAt(position + 3) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            chunkStart = position + 1; // skip only slash
            position += 4;
            continue;
        } // LineTerminator
        if (code === 0x000a || code === 0x000d) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
                position += 2;
            } else {
                ++position;
            }
            currentLine = "";
            chunkStart = position;
            lineStart = position;
            continue;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            throw syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
    }
    throw syntaxError(lexer.source, position, "Unterminated string.");
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */ function readName(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position);
        if (isNameContinue(code)) {
            ++position;
        } else {
            break;
        }
    }
    return createToken(lexer, tokenKind_TokenKind.NAME, start, position, body.slice(start, position));
}

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/devAssert.mjs
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message);
    }
}

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/inspect.mjs
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */ function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case "string":
            return JSON.stringify(value);
        case "function":
            return value.name ? `[function ${value.name}]` : "[function]";
        case "object":
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) {
        return "null";
    }
    if (previouslySeenValues.includes(value)) {
        return "[Circular]";
    }
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON(); // check for infinite recursion
        if (jsonValue !== value) {
            return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
        }
    } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) {
        return "{}";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[" + getObjectTag(object) + "]";
    }
    const properties = entries.map(([key, value])=>key + ": " + formatValue(value, seenValues));
    return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
    if (array.length === 0) {
        return "[]";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[Array]";
    }
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i = 0; i < len; ++i){
        items.push(formatValue(array[i], seenValues));
    }
    if (remaining === 1) {
        items.push("... 1 more item");
    } else if (remaining > 1) {
        items.push(`... ${remaining} more items`);
    }
    return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
    if (tag === "Object" && typeof object.constructor === "function") {
        const name = object.constructor.name;
        if (typeof name === "string" && name !== "") {
            return name;
        }
    }
    return tag;
}

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/instanceOf.mjs

/* c8 ignore next 3 */ const isProduction = globalThis.process && // eslint-disable-next-line no-undef
"production" === "production";
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
 * See: https://webpack.js.org/guides/production/
 */ const instanceOf = /* c8 ignore next 6 */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
isProduction ? function instanceOf(value, constructor) {
    return value instanceof constructor;
} : function instanceOf(value, constructor) {
    if (value instanceof constructor) {
        return true;
    }
    if (typeof value === "object" && value !== null) {
        var _value$constructor;
        // Prefer Symbol.toStringTag since it is immune to minification.
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
         ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
            const stringifiedValue = inspect(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
    }
    return false;
};

;// CONCATENATED MODULE: ./node_modules/graphql/language/source.mjs



/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */ class Source {
    constructor(body, name = "GraphQL request", locationOffset = {
        line: 1,
        column: 1
    }){
        typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || devAssert(false, "line in locationOffset is 1-indexed and must be positive.");
        this.locationOffset.column > 0 || devAssert(false, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
        return "Source";
    }
}
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */ function isSource(source) {
    return instanceOf(source, Source);
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/parser.mjs







/**
 * Configuration options to control parser behavior
 */ /**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */ function parse(source, options) {
    const parser = new Parser(source, options);
    const document = parser.parseDocument();
    Object.defineProperty(document, "tokenCount", {
        enumerable: false,
        value: parser.tokenCount
    });
    return document;
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */ function parseValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(TokenKind.SOF);
    const value = parser.parseValueLiteral(false);
    parser.expectToken(TokenKind.EOF);
    return value;
}
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */ function parseConstValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(TokenKind.SOF);
    const value = parser.parseConstValueLiteral();
    parser.expectToken(TokenKind.EOF);
    return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */ function parseType(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(TokenKind.SOF);
    const type = parser.parseTypeReference();
    parser.expectToken(TokenKind.EOF);
    return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */ class Parser {
    constructor(source, options = {}){
        const sourceObj = isSource(source) ? source : new Source(source);
        this._lexer = new Lexer(sourceObj);
        this._options = options;
        this._tokenCounter = 0;
    }
    get tokenCount() {
        return this._tokenCounter;
    }
    /**
   * Converts a name lex token into a name parse node.
   */ parseName() {
        const token = this.expectToken(tokenKind_TokenKind.NAME);
        return this.node(token, {
            kind: kinds_Kind.NAME,
            value: token.value
        });
    }
    /**
   * Document : Definition+
   */ parseDocument() {
        return this.node(this._lexer.token, {
            kind: kinds_Kind.DOCUMENT,
            definitions: this.many(tokenKind_TokenKind.SOF, this.parseDefinition, tokenKind_TokenKind.EOF)
        });
    }
    /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */ parseDefinition() {
        if (this.peek(tokenKind_TokenKind.BRACE_L)) {
            return this.parseOperationDefinition();
        } // Many definitions begin with a description and require a lookahead.
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === tokenKind_TokenKind.NAME) {
            switch(keywordToken.value){
                case "schema":
                    return this.parseSchemaDefinition();
                case "scalar":
                    return this.parseScalarTypeDefinition();
                case "type":
                    return this.parseObjectTypeDefinition();
                case "interface":
                    return this.parseInterfaceTypeDefinition();
                case "union":
                    return this.parseUnionTypeDefinition();
                case "enum":
                    return this.parseEnumTypeDefinition();
                case "input":
                    return this.parseInputObjectTypeDefinition();
                case "directive":
                    return this.parseDirectiveDefinition();
            }
            if (hasDescription) {
                throw syntaxError(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            }
            switch(keywordToken.value){
                case "query":
                case "mutation":
                case "subscription":
                    return this.parseOperationDefinition();
                case "fragment":
                    return this.parseFragmentDefinition();
                case "extend":
                    return this.parseTypeSystemExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */ parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(tokenKind_TokenKind.BRACE_L)) {
            return this.node(start, {
                kind: kinds_Kind.OPERATION_DEFINITION,
                operation: OperationTypeNode.QUERY,
                name: undefined,
                variableDefinitions: [],
                directives: [],
                selectionSet: this.parseSelectionSet()
            });
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(tokenKind_TokenKind.NAME)) {
            name = this.parseName();
        }
        return this.node(start, {
            kind: kinds_Kind.OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * OperationType : one of query mutation subscription
   */ parseOperationType() {
        const operationToken = this.expectToken(tokenKind_TokenKind.NAME);
        switch(operationToken.value){
            case "query":
                return OperationTypeNode.QUERY;
            case "mutation":
                return OperationTypeNode.MUTATION;
            case "subscription":
                return OperationTypeNode.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
    }
    /**
   * VariableDefinitions : ( VariableDefinition+ )
   */ parseVariableDefinitions() {
        return this.optionalMany(tokenKind_TokenKind.PAREN_L, this.parseVariableDefinition, tokenKind_TokenKind.PAREN_R);
    }
    /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */ parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: kinds_Kind.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(tokenKind_TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(tokenKind_TokenKind.EQUALS) ? this.parseConstValueLiteral() : undefined,
            directives: this.parseConstDirectives()
        });
    }
    /**
   * Variable : $ Name
   */ parseVariable() {
        const start = this._lexer.token;
        this.expectToken(tokenKind_TokenKind.DOLLAR);
        return this.node(start, {
            kind: kinds_Kind.VARIABLE,
            name: this.parseName()
        });
    }
    /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */ parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: kinds_Kind.SELECTION_SET,
            selections: this.many(tokenKind_TokenKind.BRACE_L, this.parseSelection, tokenKind_TokenKind.BRACE_R)
        });
    }
    /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */ parseSelection() {
        return this.peek(tokenKind_TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */ parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(tokenKind_TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else {
            name = nameOrAlias;
        }
        return this.node(start, {
            kind: kinds_Kind.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(tokenKind_TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined
        });
    }
    /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */ parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(tokenKind_TokenKind.PAREN_L, item, tokenKind_TokenKind.PAREN_R);
    }
    /**
   * Argument[Const] : Name : Value[?Const]
   */ parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(tokenKind_TokenKind.COLON);
        return this.node(start, {
            kind: kinds_Kind.ARGUMENT,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    parseConstArgument() {
        return this.parseArgument(true);
    }
    /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */ parseFragment() {
        const start = this._lexer.token;
        this.expectToken(tokenKind_TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(tokenKind_TokenKind.NAME)) {
            return this.node(start, {
                kind: kinds_Kind.FRAGMENT_SPREAD,
                name: this.parseFragmentName(),
                directives: this.parseDirectives(false)
            });
        }
        return this.node(start, {
            kind: kinds_Kind.INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */ parseFragmentDefinition() {
        const start = this._lexer.token;
        this.expectKeyword("fragment"); // Legacy support for defining variables within fragments changes
        // the grammar of FragmentDefinition:
        //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
        if (this._options.allowLegacyFragmentVariables === true) {
            return this.node(start, {
                kind: kinds_Kind.FRAGMENT_DEFINITION,
                name: this.parseFragmentName(),
                variableDefinitions: this.parseVariableDefinitions(),
                typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                directives: this.parseDirectives(false),
                selectionSet: this.parseSelectionSet()
            });
        }
        return this.node(start, {
            kind: kinds_Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentName : Name but not `on`
   */ parseFragmentName() {
        if (this._lexer.token.value === "on") {
            throw this.unexpected();
        }
        return this.parseName();
    }
    /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch(token.kind){
            case tokenKind_TokenKind.BRACKET_L:
                return this.parseList(isConst);
            case tokenKind_TokenKind.BRACE_L:
                return this.parseObject(isConst);
            case tokenKind_TokenKind.INT:
                this.advanceLexer();
                return this.node(token, {
                    kind: kinds_Kind.INT,
                    value: token.value
                });
            case tokenKind_TokenKind.FLOAT:
                this.advanceLexer();
                return this.node(token, {
                    kind: kinds_Kind.FLOAT,
                    value: token.value
                });
            case tokenKind_TokenKind.STRING:
            case tokenKind_TokenKind.BLOCK_STRING:
                return this.parseStringLiteral();
            case tokenKind_TokenKind.NAME:
                this.advanceLexer();
                switch(token.value){
                    case "true":
                        return this.node(token, {
                            kind: kinds_Kind.BOOLEAN,
                            value: true
                        });
                    case "false":
                        return this.node(token, {
                            kind: kinds_Kind.BOOLEAN,
                            value: false
                        });
                    case "null":
                        return this.node(token, {
                            kind: kinds_Kind.NULL
                        });
                    default:
                        return this.node(token, {
                            kind: kinds_Kind.ENUM,
                            value: token.value
                        });
                }
            case tokenKind_TokenKind.DOLLAR:
                if (isConst) {
                    this.expectToken(tokenKind_TokenKind.DOLLAR);
                    if (this._lexer.token.kind === tokenKind_TokenKind.NAME) {
                        const varName = this._lexer.token.value;
                        throw syntaxError(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
                    } else {
                        throw this.unexpected(token);
                    }
                }
                return this.parseVariable();
            default:
                throw this.unexpected();
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(true);
    }
    parseStringLiteral() {
        const token = this._lexer.token;
        this.advanceLexer();
        return this.node(token, {
            kind: kinds_Kind.STRING,
            value: token.value,
            block: token.kind === tokenKind_TokenKind.BLOCK_STRING
        });
    }
    /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */ parseList(isConst) {
        const item = ()=>this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
            kind: kinds_Kind.LIST,
            values: this.any(tokenKind_TokenKind.BRACKET_L, item, tokenKind_TokenKind.BRACKET_R)
        });
    }
    /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */ parseObject(isConst) {
        const item = ()=>this.parseObjectField(isConst);
        return this.node(this._lexer.token, {
            kind: kinds_Kind.OBJECT,
            fields: this.any(tokenKind_TokenKind.BRACE_L, item, tokenKind_TokenKind.BRACE_R)
        });
    }
    /**
   * ObjectField[Const] : Name : Value[?Const]
   */ parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(tokenKind_TokenKind.COLON);
        return this.node(start, {
            kind: kinds_Kind.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    /**
   * Directives[Const] : Directive[?Const]+
   */ parseDirectives(isConst) {
        const directives = [];
        while(this.peek(tokenKind_TokenKind.AT)){
            directives.push(this.parseDirective(isConst));
        }
        return directives;
    }
    parseConstDirectives() {
        return this.parseDirectives(true);
    }
    /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */ parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(tokenKind_TokenKind.AT);
        return this.node(start, {
            kind: kinds_Kind.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst)
        });
    }
    /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */ parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(tokenKind_TokenKind.BRACKET_L)) {
            const innerType = this.parseTypeReference();
            this.expectToken(tokenKind_TokenKind.BRACKET_R);
            type = this.node(start, {
                kind: kinds_Kind.LIST_TYPE,
                type: innerType
            });
        } else {
            type = this.parseNamedType();
        }
        if (this.expectOptionalToken(tokenKind_TokenKind.BANG)) {
            return this.node(start, {
                kind: kinds_Kind.NON_NULL_TYPE,
                type
            });
        }
        return type;
    }
    /**
   * NamedType : Name
   */ parseNamedType() {
        return this.node(this._lexer.token, {
            kind: kinds_Kind.NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek(tokenKind_TokenKind.STRING) || this.peek(tokenKind_TokenKind.BLOCK_STRING);
    }
    /**
   * Description : StringValue
   */ parseDescription() {
        if (this.peekDescription()) {
            return this.parseStringLiteral();
        }
    }
    /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */ parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(tokenKind_TokenKind.BRACE_L, this.parseOperationTypeDefinition, tokenKind_TokenKind.BRACE_R);
        return this.node(start, {
            kind: kinds_Kind.SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes
        });
    }
    /**
   * OperationTypeDefinition : OperationType : NamedType
   */ parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(tokenKind_TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
            kind: kinds_Kind.OPERATION_TYPE_DEFINITION,
            operation,
            type
        });
    }
    /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */ parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: kinds_Kind.SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */ parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: kinds_Kind.OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */ parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(tokenKind_TokenKind.AMP, this.parseNamedType) : [];
    }
    /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */ parseFieldsDefinition() {
        return this.optionalMany(tokenKind_TokenKind.BRACE_L, this.parseFieldDefinition, tokenKind_TokenKind.BRACE_R);
    }
    /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */ parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(tokenKind_TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: kinds_Kind.FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives
        });
    }
    /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */ parseArgumentDefs() {
        return this.optionalMany(tokenKind_TokenKind.PAREN_L, this.parseInputValueDef, tokenKind_TokenKind.PAREN_R);
    }
    /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */ parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(tokenKind_TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(tokenKind_TokenKind.EQUALS)) {
            defaultValue = this.parseConstValueLiteral();
        }
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: kinds_Kind.INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives
        });
    }
    /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */ parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: kinds_Kind.INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */ parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
            kind: kinds_Kind.UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types
        });
    }
    /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */ parseUnionMemberTypes() {
        return this.expectOptionalToken(tokenKind_TokenKind.EQUALS) ? this.delimitedMany(tokenKind_TokenKind.PIPE, this.parseNamedType) : [];
    }
    /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */ parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
            kind: kinds_Kind.ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values
        });
    }
    /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */ parseEnumValuesDefinition() {
        return this.optionalMany(tokenKind_TokenKind.BRACE_L, this.parseEnumValueDefinition, tokenKind_TokenKind.BRACE_R);
    }
    /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */ parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: kinds_Kind.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
            throw syntaxError(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        }
        return this.parseName();
    }
    /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */ parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
            kind: kinds_Kind.INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */ parseInputFieldsDefinition() {
        return this.optionalMany(tokenKind_TokenKind.BRACE_L, this.parseInputValueDef, tokenKind_TokenKind.BRACE_R);
    }
    /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */ parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === tokenKind_TokenKind.NAME) {
            switch(keywordToken.value){
                case "schema":
                    return this.parseSchemaExtension();
                case "scalar":
                    return this.parseScalarTypeExtension();
                case "type":
                    return this.parseObjectTypeExtension();
                case "interface":
                    return this.parseInterfaceTypeExtension();
                case "union":
                    return this.parseUnionTypeExtension();
                case "enum":
                    return this.parseEnumTypeExtension();
                case "input":
                    return this.parseInputObjectTypeExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */ parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(tokenKind_TokenKind.BRACE_L, this.parseOperationTypeDefinition, tokenKind_TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds_Kind.SCHEMA_EXTENSION,
            directives,
            operationTypes
        });
    }
    /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */ parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds_Kind.SCALAR_TYPE_EXTENSION,
            name,
            directives
        });
    }
    /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */ parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds_Kind.OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */ parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds_Kind.INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */ parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds_Kind.UNION_TYPE_EXTENSION,
            name,
            directives,
            types
        });
    }
    /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */ parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds_Kind.ENUM_TYPE_EXTENSION,
            name,
            directives,
            values
        });
    }
    /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */ parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds_Kind.INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */ parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(tokenKind_TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
            kind: kinds_Kind.DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations
        });
    }
    /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */ parseDirectiveLocations() {
        return this.delimitedMany(tokenKind_TokenKind.PIPE, this.parseDirectiveLocation);
    }
    /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */ parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
            return name;
        }
        throw this.unexpected(start);
    }
    /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */ node(startToken, node) {
        if (this._options.noLocation !== true) {
            node.loc = new Location(startToken, this._lexer.lastToken, this._lexer.source);
        }
        return node;
    }
    /**
   * Determines if the next token is of a given kind
   */ peek(kind) {
        return this._lexer.token.kind === kind;
    }
    /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this.advanceLexer();
            return token;
        }
        throw syntaxError(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === tokenKind_TokenKind.NAME && token.value === value) {
            this.advanceLexer();
        } else {
            throw syntaxError(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
        }
    }
    /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === tokenKind_TokenKind.NAME && token.value === value) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */ unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return syntaxError(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
    }
    /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while(!this.expectOptionalToken(closeKind)){
            nodes.push(parseFn.call(this));
        }
        return nodes;
    }
    /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
            const nodes = [];
            do {
                nodes.push(parseFn.call(this));
            }while (!this.expectOptionalToken(closeKind));
            return nodes;
        }
        return [];
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do {
            nodes.push(parseFn.call(this));
        }while (!this.expectOptionalToken(closeKind));
        return nodes;
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */ delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do {
            nodes.push(parseFn.call(this));
        }while (this.expectOptionalToken(delimiterKind));
        return nodes;
    }
    advanceLexer() {
        const { maxTokens } = this._options;
        const token = this._lexer.advance();
        if (token.kind !== tokenKind_TokenKind.EOF) {
            ++this._tokenCounter;
            if (maxTokens !== undefined && this._tokenCounter > maxTokens) {
                throw syntaxError(this._lexer.source, token.start, `Document contains more that ${maxTokens} tokens. Parsing aborted.`);
            }
        }
    }
}
/**
 * A helper function to describe a token as a string for debugging.
 */ function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */ function getTokenKindDesc(kind) {
    return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/printString.mjs
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */ function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
} // eslint-disable-next-line no-control-regex
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore
const escapeSequences = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F"
];

;// CONCATENATED MODULE: ./node_modules/graphql/language/visitor.mjs




/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */ const BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */ function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values(kinds_Kind)){
        enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    }
    /* eslint-disable no-undef-init */ let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [
        root
    ];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */ do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                    let editOffset = 0;
                    for (const [editKey, editValue] of edits){
                        const arrayKey = editKey - editOffset;
                        if (editValue === null) {
                            node.splice(arrayKey, 1);
                            editOffset++;
                        } else {
                            node[arrayKey] = editValue;
                        }
                    }
                } else {
                    node = {
                        ...node
                    };
                    for (const [editKey, editValue] of edits){
                        node[editKey] = editValue;
                    }
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === undefined) {
                continue;
            }
            path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) {
                break;
            }
            if (result === false) {
                if (!isLeaving) {
                    path.pop();
                    continue;
                }
            } else if (result !== undefined) {
                edits.push([
                    key,
                    result
                ]);
                if (!isLeaving) {
                    if (isNode(result)) {
                        node = result;
                    } else {
                        path.pop();
                        continue;
                    }
                }
            }
        }
        if (result === undefined && isEdited) {
            edits.push([
                key,
                node
            ]);
        }
        if (isLeaving) {
            path.pop();
        } else {
            var _node$kind;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) {
                ancestors.push(parent);
            }
            parent = node;
        }
    }while (stack !== undefined);
    if (edits.length !== 0) {
        // New root
        return edits[edits.length - 1][1];
    }
    return root;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */ function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);
    for (const kind of Object.values(Kind)){
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(undefined);
        const leaveList = new Array(visitors.length).fill(undefined);
        for(let i = 0; i < visitors.length; ++i){
            const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i] = enter;
            leaveList[i] = leave;
        }
        if (!hasVisitor) {
            continue;
        }
        const mergedEnterLeave = {
            enter (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _enterList$i;
                        const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                        if (result === false) {
                            skipping[i] = node;
                        } else if (result === BREAK) {
                            skipping[i] = BREAK;
                        } else if (result !== undefined) {
                            return result;
                        }
                    }
                }
            },
            leave (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _leaveList$i;
                        const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                        if (result === BREAK) {
                            skipping[i] = BREAK;
                        } else if (result !== undefined && result !== false) {
                            return result;
                        }
                    } else if (skipping[i] === node) {
                        skipping[i] = null;
                    }
                }
            }
        };
        mergedVisitor[kind] = mergedEnterLeave;
    }
    return mergedVisitor;
}
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */ function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];
    if (typeof kindVisitor === "object") {
        // { Kind: { enter() {}, leave() {} } }
        return kindVisitor;
    } else if (typeof kindVisitor === "function") {
        // { Kind() {} }
        return {
            enter: kindVisitor,
            leave: undefined
        };
    } // { enter() {}, leave() {} }
    return {
        enter: visitor.enter,
        leave: visitor.leave
    };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */ /* c8 ignore next 8 */ function getVisitFn(visitor, kind, isLeaving) {
    const { enter, leave } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/printer.mjs



/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */ function print(ast) {
    return visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
    Name: {
        leave: (node)=>node.value
    },
    Variable: {
        leave: (node)=>"$" + node.name
    },
    // Document
    Document: {
        leave: (node)=>join(node.definitions, "\n\n")
    },
    OperationDefinition: {
        leave (node) {
            const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
            const prefix = join([
                node.operation,
                join([
                    node.name,
                    varDefs
                ]),
                join(node.directives, " ")
            ], " "); // Anonymous queries with no directives or variable definitions can use
            // the query short form.
            return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives })=>variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
    },
    SelectionSet: {
        leave: ({ selections })=>block(selections)
    },
    Field: {
        leave ({ alias, name, arguments: args, directives, selectionSet }) {
            const prefix = wrap("", alias, ": ") + name;
            let argsLine = prefix + wrap("(", join(args, ", "), ")");
            if (argsLine.length > MAX_LINE_LENGTH) {
                argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
            }
            return join([
                argsLine,
                join(directives, " "),
                selectionSet
            ], " ");
        }
    },
    Argument: {
        leave: ({ name, value })=>name + ": " + value
    },
    // Fragments
    FragmentSpread: {
        leave: ({ name, directives })=>"..." + name + wrap(" ", join(directives, " "))
    },
    InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet })=>join([
                "...",
                wrap("on ", typeCondition),
                join(directives, " "),
                selectionSet
            ], " ")
    },
    FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet })=>// or removed in the future.
            `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} ` + `on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
    },
    // Value
    IntValue: {
        leave: ({ value })=>value
    },
    FloatValue: {
        leave: ({ value })=>value
    },
    StringValue: {
        leave: ({ value, block: isBlockString })=>isBlockString ? printBlockString(value) : printString(value)
    },
    BooleanValue: {
        leave: ({ value })=>value ? "true" : "false"
    },
    NullValue: {
        leave: ()=>"null"
    },
    EnumValue: {
        leave: ({ value })=>value
    },
    ListValue: {
        leave: ({ values })=>"[" + join(values, ", ") + "]"
    },
    ObjectValue: {
        leave: ({ fields })=>"{" + join(fields, ", ") + "}"
    },
    ObjectField: {
        leave: ({ name, value })=>name + ": " + value
    },
    // Directive
    Directive: {
        leave: ({ name, arguments: args })=>"@" + name + wrap("(", join(args, ", "), ")")
    },
    // Type
    NamedType: {
        leave: ({ name })=>name
    },
    ListType: {
        leave: ({ type })=>"[" + type + "]"
    },
    NonNullType: {
        leave: ({ type })=>type + "!"
    },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ description, directives, operationTypes })=>wrap("", description, "\n") + join([
                "schema",
                join(directives, " "),
                block(operationTypes)
            ], " ")
    },
    OperationTypeDefinition: {
        leave: ({ operation, type })=>operation + ": " + type
    },
    ScalarTypeDefinition: {
        leave: ({ description, name, directives })=>wrap("", description, "\n") + join([
                "scalar",
                name,
                join(directives, " ")
            ], " ")
    },
    ObjectTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields })=>wrap("", description, "\n") + join([
                "type",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    FieldDefinition: {
        leave: ({ description, name, arguments: args, type, directives })=>wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
    },
    InputValueDefinition: {
        leave: ({ description, name, type, defaultValue, directives })=>wrap("", description, "\n") + join([
                name + ": " + type,
                wrap("= ", defaultValue),
                join(directives, " ")
            ], " ")
    },
    InterfaceTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields })=>wrap("", description, "\n") + join([
                "interface",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    UnionTypeDefinition: {
        leave: ({ description, name, directives, types })=>wrap("", description, "\n") + join([
                "union",
                name,
                join(directives, " "),
                wrap("= ", join(types, " | "))
            ], " ")
    },
    EnumTypeDefinition: {
        leave: ({ description, name, directives, values })=>wrap("", description, "\n") + join([
                "enum",
                name,
                join(directives, " "),
                block(values)
            ], " ")
    },
    EnumValueDefinition: {
        leave: ({ description, name, directives })=>wrap("", description, "\n") + join([
                name,
                join(directives, " ")
            ], " ")
    },
    InputObjectTypeDefinition: {
        leave: ({ description, name, directives, fields })=>wrap("", description, "\n") + join([
                "input",
                name,
                join(directives, " "),
                block(fields)
            ], " ")
    },
    DirectiveDefinition: {
        leave: ({ description, name, arguments: args, repeatable, locations })=>wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
    },
    SchemaExtension: {
        leave: ({ directives, operationTypes })=>join([
                "extend schema",
                join(directives, " "),
                block(operationTypes)
            ], " ")
    },
    ScalarTypeExtension: {
        leave: ({ name, directives })=>join([
                "extend scalar",
                name,
                join(directives, " ")
            ], " ")
    },
    ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields })=>join([
                "extend type",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields })=>join([
                "extend interface",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    UnionTypeExtension: {
        leave: ({ name, directives, types })=>join([
                "extend union",
                name,
                join(directives, " "),
                wrap("= ", join(types, " | "))
            ], " ")
    },
    EnumTypeExtension: {
        leave: ({ name, directives, values })=>join([
                "extend enum",
                name,
                join(directives, " "),
                block(values)
            ], " ")
    },
    InputObjectTypeExtension: {
        leave: ({ name, directives, fields })=>join([
                "extend input",
                name,
                join(directives, " "),
                block(fields)
            ], " ")
    }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */ function join(maybeArray, separator = "") {
    var _maybeArray$filter$jo;
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x)=>x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */ function block(array) {
    return wrap("{\n", indent(join(array, "\n")), "\n}");
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */ function wrap(start, maybeString, end = "") {
    return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
    return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
    var _maybeArray$some;
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str)=>str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/helpers/analyzeDocument.js




/**
 * helpers
 */ const extractOperationName = (document)=>{
    let operationName = undefined;
    const defs = document.definitions.filter(isOperationDefinitionNode);
    if (defs.length === 1) {
        operationName = defs[0].name?.value;
    }
    return operationName;
};
const extractIsMutation = (document)=>{
    let isMutation = false;
    const defs = document.definitions.filter(isOperationDefinitionNode);
    if (defs.length === 1) {
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison --
         * graphql@15's `OperationTypeNode` is a type, but graphql@16's `OperationTypeNode` is a native TypeScript enum
         * Therefore, we cannot use `OperationTypeNode.MUTATION` here because it wouldn't work with graphql@15
         **/ isMutation = defs[0].operation === `mutation`;
    }
    return isMutation;
};
const analyzeDocument = (document, excludeOperationName)=>{
    const expression = typeof document === `string` ? document : print(document);
    let isMutation = false;
    let operationName = undefined;
    if (excludeOperationName) {
        return {
            expression,
            isMutation,
            operationName
        };
    }
    const docNode = tryCatch(()=>typeof document === `string` ? parse(document) : document);
    if (docNode instanceof Error) {
        return {
            expression,
            isMutation,
            operationName
        };
    }
    operationName = extractOperationName(docNode);
    isMutation = extractIsMutation(docNode);
    return {
        expression,
        operationName,
        isMutation
    };
}; //# sourceMappingURL=analyzeDocument.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/classes/ClientError.js
class ClientError extends Error {
    constructor(response, request){
        const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
            response,
            request
        })}`;
        super(message);
        Object.setPrototypeOf(this, ClientError.prototype);
        this.response = response;
        this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        if (typeof Error.captureStackTrace === `function`) {
            Error.captureStackTrace(this, ClientError);
        }
    }
    static extractMessage(response) {
        return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${String(response.status)})`;
    }
} //# sourceMappingURL=ClientError.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/helpers/defaultJsonSerializer.js
const defaultJsonSerializer = JSON; //# sourceMappingURL=defaultJsonSerializer.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/helpers/runRequest.js





// @ts-expect-error todo
const runRequest = async (input)=>{
    // todo make a Config type
    const config = {
        ...input,
        method: input.request._tag === `Single` ? input.request.document.isMutation ? `POST` : uppercase(input.method ?? `post`) : input.request.hasMutations ? `POST` : uppercase(input.method ?? `post`),
        fetchOptions: {
            ...input.fetchOptions,
            errorPolicy: input.fetchOptions.errorPolicy ?? `none`
        }
    };
    const fetcher = createFetcher(config.method);
    const fetchResponse = await fetcher(config);
    if (!fetchResponse.ok) {
        return new ClientError({
            status: fetchResponse.status,
            headers: fetchResponse.headers
        }, {
            query: input.request._tag === `Single` ? input.request.document.expression : input.request.query,
            variables: input.request.variables
        });
    }
    const result = await parseResultFromResponse(fetchResponse, input.fetchOptions.jsonSerializer ?? defaultJsonSerializer);
    if (result instanceof Error) throw result; // todo something better
    const clientResponseBase = {
        status: fetchResponse.status,
        headers: fetchResponse.headers
    };
    if (isRequestResultHaveErrors(result) && config.fetchOptions.errorPolicy === `none`) {
        // todo this client response on error is not consistent with the data type for success
        const clientResponse = result._tag === `Batch` ? {
            ...result.executionResults,
            ...clientResponseBase
        } : {
            ...result.executionResult,
            ...clientResponseBase
        };
        // @ts-expect-error todo
        return new ClientError(clientResponse, {
            query: input.request._tag === `Single` ? input.request.document.expression : input.request.query,
            variables: input.request.variables
        });
    }
    switch(result._tag){
        case `Single`:
            // @ts-expect-error todo
            return {
                ...clientResponseBase,
                ...executionResultClientResponseFields(config)(result.executionResult)
            };
        case `Batch`:
            return {
                ...clientResponseBase,
                data: result.executionResults.map(executionResultClientResponseFields(config))
            };
        default:
            casesExhausted(result);
    }
};
const executionResultClientResponseFields = ($params)=>(executionResult)=>{
        return {
            extensions: executionResult.extensions,
            data: executionResult.data,
            errors: $params.fetchOptions.errorPolicy === `all` ? executionResult.errors : undefined
        };
    };
const parseResultFromResponse = async (response, jsonSerializer)=>{
    const contentType = response.headers.get(CONTENT_TYPE_HEADER);
    const text = await response.text();
    if (contentType && isGraphQLContentType(contentType)) {
        return parseGraphQLExecutionResult(jsonSerializer.parse(text));
    } else {
        // todo what is this good for...? Seems very random/undefined
        return parseGraphQLExecutionResult(text);
    }
};
const createFetcher = (method)=>async (params)=>{
        const headers = new Headers(params.headers);
        let searchParams = null;
        let body = undefined;
        if (!headers.has(ACCEPT_HEADER)) {
            headers.set(ACCEPT_HEADER, [
                CONTENT_TYPE_GQL,
                CONTENT_TYPE_JSON
            ].join(`, `));
        }
        if (method === `POST`) {
            const $jsonSerializer = params.fetchOptions.jsonSerializer ?? defaultJsonSerializer;
            body = $jsonSerializer.stringify(buildBody(params));
            if (typeof body === `string` && !headers.has(CONTENT_TYPE_HEADER)) {
                headers.set(CONTENT_TYPE_HEADER, CONTENT_TYPE_JSON);
            }
        } else {
            searchParams = buildQueryParams(params);
        }
        const init = {
            method,
            headers,
            body,
            ...params.fetchOptions
        };
        let url = new URL(params.url);
        let initResolved = init;
        if (params.middleware) {
            const result = await Promise.resolve(params.middleware({
                ...init,
                url: params.url,
                operationName: params.request._tag === `Single` ? params.request.document.operationName : undefined,
                variables: params.request.variables
            }));
            const { url: urlNew, ...initNew } = result;
            url = new URL(urlNew);
            initResolved = initNew;
        }
        if (searchParams) {
            searchParams.forEach((value, name)=>{
                url.searchParams.append(name, value);
            });
        }
        const $fetch = params.fetch ?? fetch;
        return await $fetch(url, initResolved);
    };
const buildBody = (params)=>{
    switch(params.request._tag){
        case `Single`:
            return {
                query: params.request.document.expression,
                variables: params.request.variables,
                operationName: params.request.document.operationName
            };
        case `Batch`:
            return zip(params.request.query, params.request.variables ?? []).map(([query, variables])=>({
                    query,
                    variables
                }));
        default:
            throw casesExhausted(params.request);
    }
};
const buildQueryParams = (params)=>{
    const $jsonSerializer = params.fetchOptions.jsonSerializer ?? defaultJsonSerializer;
    const searchParams = new URLSearchParams();
    switch(params.request._tag){
        case `Single`:
            {
                searchParams.append(`query`, cleanQuery(params.request.document.expression));
                if (params.request.variables) {
                    searchParams.append(`variables`, $jsonSerializer.stringify(params.request.variables));
                }
                if (params.request.document.operationName) {
                    searchParams.append(`operationName`, params.request.document.operationName);
                }
                return searchParams;
            }
        case `Batch`:
            {
                const variablesSerialized = params.request.variables?.map((v)=>$jsonSerializer.stringify(v)) ?? [];
                const queriesCleaned = params.request.query.map(cleanQuery);
                const payload = zip(queriesCleaned, variablesSerialized).map(([query, variables])=>({
                        query,
                        variables
                    }));
                searchParams.append(`query`, $jsonSerializer.stringify(payload));
                return searchParams;
            }
        default:
            throw casesExhausted(params.request);
    }
}; //# sourceMappingURL=runRequest.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/classes/GraphQLClient.js






/**
 * GraphQL Client.
 */ class GraphQLClient_GraphQLClient {
    constructor(url, requestConfig = {}){
        /**
     * Send a GraphQL query to the server.
     */ this.rawRequest = async (...args)=>{
            const [queryOrOptions, variables, requestHeaders] = args;
            const rawRequestOptions = parseRawRequestArgs(queryOrOptions, variables, requestHeaders);
            const { headers, fetch = globalThis.fetch, method = `POST`, requestMiddleware, responseMiddleware, excludeOperationName, ...fetchOptions } = this.requestConfig;
            const { url } = this;
            if (rawRequestOptions.signal !== undefined) {
                fetchOptions.signal = rawRequestOptions.signal;
            }
            const document = analyzeDocument(rawRequestOptions.query, excludeOperationName);
            const response = await runRequest({
                url,
                request: {
                    _tag: `Single`,
                    document,
                    variables: rawRequestOptions.variables
                },
                headers: {
                    ...HeadersInitToPlainObject(callOrIdentity(headers)),
                    ...HeadersInitToPlainObject(rawRequestOptions.requestHeaders)
                },
                fetch,
                method,
                fetchOptions,
                middleware: requestMiddleware
            });
            if (responseMiddleware) {
                await responseMiddleware(response, {
                    operationName: document.operationName,
                    variables,
                    url: this.url
                });
            }
            if (response instanceof Error) {
                throw response;
            }
            return response;
        };
        this.url = url;
        this.requestConfig = requestConfig;
    }
    async request(documentOrOptions, ...variablesAndRequestHeaders) {
        const [variables, requestHeaders] = variablesAndRequestHeaders;
        const requestOptions = parseRequestArgs(documentOrOptions, variables, requestHeaders);
        const { headers, fetch = globalThis.fetch, method = `POST`, requestMiddleware, responseMiddleware, excludeOperationName, ...fetchOptions } = this.requestConfig;
        const { url } = this;
        if (requestOptions.signal !== undefined) {
            fetchOptions.signal = requestOptions.signal;
        }
        const analyzedDocument = analyzeDocument(requestOptions.document, excludeOperationName);
        const response = await runRequest({
            url,
            request: {
                _tag: `Single`,
                document: analyzedDocument,
                variables: requestOptions.variables
            },
            headers: {
                ...HeadersInitToPlainObject(callOrIdentity(headers)),
                ...HeadersInitToPlainObject(requestOptions.requestHeaders)
            },
            fetch,
            method,
            fetchOptions,
            middleware: requestMiddleware
        });
        if (responseMiddleware) {
            await responseMiddleware(response, {
                operationName: analyzedDocument.operationName,
                variables: requestOptions.variables,
                url: this.url
            });
        }
        if (response instanceof Error) {
            throw response;
        }
        return response.data;
    }
    async batchRequests(documentsOrOptions, requestHeaders) {
        const batchRequestOptions = parseBatchRequestArgs(documentsOrOptions, requestHeaders);
        const { headers, excludeOperationName, ...fetchOptions } = this.requestConfig;
        if (batchRequestOptions.signal !== undefined) {
            fetchOptions.signal = batchRequestOptions.signal;
        }
        const analyzedDocuments = batchRequestOptions.documents.map(({ document })=>analyzeDocument(document, excludeOperationName));
        const expressions = analyzedDocuments.map(({ expression })=>expression);
        const hasMutations = analyzedDocuments.some(({ isMutation })=>isMutation);
        const variables = batchRequestOptions.documents.map(({ variables })=>variables);
        const response = await runRequest({
            url: this.url,
            request: {
                _tag: `Batch`,
                operationName: undefined,
                query: expressions,
                hasMutations,
                variables
            },
            headers: {
                ...HeadersInitToPlainObject(callOrIdentity(headers)),
                ...HeadersInitToPlainObject(batchRequestOptions.requestHeaders)
            },
            fetch: this.requestConfig.fetch ?? globalThis.fetch,
            method: this.requestConfig.method || `POST`,
            fetchOptions,
            middleware: this.requestConfig.requestMiddleware
        });
        if (this.requestConfig.responseMiddleware) {
            await this.requestConfig.responseMiddleware(response, {
                operationName: undefined,
                variables,
                url: this.url
            });
        }
        if (response instanceof Error) {
            throw response;
        }
        return response.data;
    }
    setHeaders(headers) {
        this.requestConfig.headers = headers;
        return this;
    }
    /**
     * Attach a header to the client. All subsequent requests will have this header.
     */ setHeader(key, value) {
        const { headers } = this.requestConfig;
        if (headers) {
            // todo what if headers is in nested array form... ?
            // @ts-expect-error todo
            headers[key] = value;
        } else {
            this.requestConfig.headers = {
                [key]: value
            };
        }
        return this;
    }
    /**
     * Change the client endpoint. All subsequent requests will send to this endpoint.
     */ setEndpoint(value) {
        this.url = value;
        return this;
    }
} //# sourceMappingURL=GraphQLClient.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/legacy/functions/request.js

// dprint-ignore
// eslint-disable-next-line
async function request_request(urlOrOptions, document, ...variablesAndRequestHeaders) {
    const requestOptions = parseRequestExtendedArgs(urlOrOptions, document, ...variablesAndRequestHeaders);
    const client = new GraphQLClient(requestOptions.url);
    return client.request({
        ...requestOptions
    });
}
const parseRequestArgs = (documentOrOptions, variables, requestHeaders)=>{
    return documentOrOptions.document ? documentOrOptions : {
        document: documentOrOptions,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
};
const parseRequestExtendedArgs = (urlOrOptions, document, ...variablesAndRequestHeaders)=>{
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    return typeof urlOrOptions === `string` ? {
        url: urlOrOptions,
        document: document,
        variables,
        requestHeaders,
        signal: undefined
    } : urlOrOptions;
}; //# sourceMappingURL=request.js.map

;// CONCATENATED MODULE: ./node_modules/graphql-request/build/entrypoints/main.js








/* harmony default export */ const main = ((/* unused pure expression or super */ null && (request))); //# sourceMappingURL=main.js.map

;// CONCATENATED MODULE: ./src/config.ts
const META = {
    OG_IMAGE: "https://res.cloudinary.com/dnkwv76h3/image/upload/fl_preserve_transparency/v1760386929/portfolio/meta-OG/abdulJabbarImg1.jpg?_s=public-apps"
};
const isDev = false;
const BACKEND_GRAPHQL_ENDPOINT = isDev ? process.env.PG_STRING ?? "http://localhost:8000/gql" : process.env.PG_STRING_PROD ?? "https://abduljabbar-portfolio.deno.dev/gql";
console.log(BACKEND_GRAPHQL_ENDPOINT);
const CONFIG = {
    BACKEND_GRAPHQL_ENDPOINT,
    META,
    STORAGE: {
        TOKEN_KEY: "token"
    }
};
/* harmony default export */ const config = (CONFIG);

;// CONCATENATED MODULE: ./src/lib/apolloClient.ts


const clientServer = new GraphQLClient_GraphQLClient(config.BACKEND_GRAPHQL_ENDPOINT, {
    fetch: (url, options)=>fetch(url, {
            ...options,
            cache: "force-cache"
        })
});
/* harmony default export */ const apolloClient = (clientServer);

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
/** @deprecated */ function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
/** @deprecated */ function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
/* harmony default export */ const tslib_es6 = ({
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
});

;// CONCATENATED MODULE: ./node_modules/graphql-tag/lib/index.js


var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
        if (fragmentDefinition.kind === "FragmentDefinition") {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn("Warning: fragment with name " + fragmentName + " already exists.\n" + "graphql-tag enforces all fragment names across your application to be unique; read more about\n" + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                }
            } else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        } else {
            definitions.push(fragmentDefinition);
        }
    });
    return __assign(__assign({}, ast), {
        definitions: definitions
    });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
        if (node.loc) delete node.loc;
        Object.keys(node).forEach(function(key) {
            var value = node[key];
            if (value && typeof value === "object") {
                workSet.add(value);
            }
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = parse(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== "Document") {
            throw new Error("Not a valid GraphQL document.");
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++){
        args[_i - 1] = arguments[_i];
    }
    if (typeof literals === "string") {
        literals = [
            literals
        ];
    }
    var result = literals[0];
    args.forEach(function(arg, i) {
        if (arg && arg.kind === "Document") {
            result += arg.loc.source.body;
        } else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function(gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
/* harmony default export */ const lib = ((/* unused pure expression or super */ null && (gql))); //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./api/gql/mutation/login.ts

const LOGIN_MUTATION = gql`
  mutation Login($type: String!, $credential: String!) {
    login(type: $type, credential: $credential ) {
      token
      user {
        id
        type
        email
        metadata
      }
    }
  }
`;
/* harmony default export */ const login = (LOGIN_MUTATION);

;// CONCATENATED MODULE: ./api/gql/mutation/index.ts

const Mutation = {
    LOGIN_MUTATION: login
};
/* harmony default export */ const mutation = (Mutation);

;// CONCATENATED MODULE: ./api/gql/query/aboutSection.ts

const ABOUT_SECTION = gql`
  query {
    about {
      title
      desc
      img
      link
      linkTitle
      descPosition
    }
  }
`;
/* harmony default export */ const aboutSection = (ABOUT_SECTION);

;// CONCATENATED MODULE: ./api/gql/query/landingPageShortDescription.ts

const SHORT_DYN_DES = gql`
  query {
    hero {
      title
      description
      image
      resume
      socialLinks {
        title
        section
        desc
        url
        icon
        iconStr
      }
      techStack {
        title
         desc
         url
         icon
         iconStr
      }
    }
  }
`;
/* harmony default export */ const landingPageShortDescription = (SHORT_DYN_DES);

;// CONCATENATED MODULE: ./api/gql/query/experianceSection.ts

const EXPERIANCE_SECTION = gql`
  query {
    experience {
      companyName
      id
      desc
      location
      jobPosition
      startDate
      endDate
      companyLink
      order
    }
  }
`;
/* harmony default export */ const experianceSection = (EXPERIANCE_SECTION);

;// CONCATENATED MODULE: ./api/gql/query/contact.ts

const CONTACT_SECTION = gql`
  query {
    contact {
      icon
      iconStr
      title
      desc
      id
      link
      order
    }
  }
`;
/* harmony default export */ const contact = (CONTACT_SECTION);

;// CONCATENATED MODULE: ./api/gql/query/technicalSkills.ts

const TECHNICAL_SKILLS = gql`
 query {
  technicalSkills {
    icon
    fieldName
    desc
    id
    iconStr
    link
    techStack {
      title
      desc
      id
      url
      icon
      skillsPercentage
      order
      iconStr
    }
  }
}

`;
/* harmony default export */ const technicalSkills = (TECHNICAL_SKILLS);

;// CONCATENATED MODULE: ./api/gql/query/projects.ts

const PROJECTS = gql`
query{
  
  projects{
    id
    title
    section
    desc
    img
    projectTools
    techStack{
      section
      desc
      icon
      url
      title
      iconStr
      order
    }
  }
}

`;
/* harmony default export */ const projects = (PROJECTS);

;// CONCATENATED MODULE: ./api/gql/query/footerSection.ts

const FOOTER_SECTION_LINKS = gql`
  query {
    footerLinks {
      id
      title
      section
      desc
      url
      icon
      iconStr
    }
  }
`;
/* harmony default export */ const footerSection = (FOOTER_SECTION_LINKS);

;// CONCATENATED MODULE: ./api/gql/query/getMe.ts

const GET_ME = gql`
  query {
    getMe {
      id
      type
      email
      token
      metadata
      name
      phone
      permissions
      status

    }
  }
`;
/* harmony default export */ const getMe = (GET_ME);

;// CONCATENATED MODULE: ./api/gql/query/index.ts








const Query = {
    SHORT_DYN_DES: landingPageShortDescription,
    ABOUT_SECTION: aboutSection,
    EXPERIANCE_SECTION: experianceSection,
    CONTACT_SECTION: contact,
    TECHNICAL_SKILLS: technicalSkills,
    PROJECTS: projects,
    FOOTER_SECTION_LINKS: footerSection,
    GET_ME: getMe
};
/* harmony default export */ const query = (Query);

;// CONCATENATED MODULE: ./api/gql/index.ts


const API = {
    Query: query,
    Mutation: mutation
};
/* harmony default export */ const api_gql = (API);

;// CONCATENATED MODULE: ./src/middleware.ts




const protectedRoutes = [
    "/edit",
    "/profile",
    "/admin"
];
const middleware = async (request)=>{
    let user;
    const { pathname } = request.nextUrl;
    const token = request.cookies.get(config.STORAGE.TOKEN_KEY)?.value;
    const getData = async ()=>{
        const res = await apolloClient.setHeaders({
            Authorization: `Bearer ${token}`
        }).request(api_gql.Query.GET_ME);
        if (res?.getMe?.id) {
            return res?.getMe;
        }
    };
    if (token) {
        try {
            user = await getData();
        } catch (error) {
            console.log(error?.response?.errors[0]?.message || error?.message || error);
        }
    }
    if (protectedRoutes.some((path)=>pathname.startsWith(path)) && !user?.id) {
        const loginUrl = new URL("/login", request.url);
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
};
/* harmony default export */ const src_middleware = (middleware);
// কোন routes এ middleware চলবে সেটা define করো
const middleware_config = {
    matcher: [
        "/dashboard/:path*",
        "/edit/:path*",
        "/admin/:path*"
    ]
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fsrc%2Fmiddleware.ts&page=%2Fsrc%2Fmiddleware&rootDir=C%3A%5CUsers%5CAbdullah%5CDesktop%5Cportfolio2.0&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2Rhc2hib2FyZCg%2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw%2FXSs%2FKSkqKSk%2FKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2Rhc2hib2FyZC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9lZGl0KD86XFwvKCg%2FOlteXFwvI1xcP10rPykoPzpcXC8oPzpbXlxcLyNcXD9dKz8pKSopKT8oLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvZWRpdC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9hZG1pbig%2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw%2FXSs%2FKSkqKSk%2FKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2FkbWluLzpwYXRoKiJ9XQ%3D%3D&preferredRegion=&middlewareConfig=eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2Rhc2hib2FyZCg%2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw%2FXSs%2FKSkqKSk%2FKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2Rhc2hib2FyZC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9lZGl0KD86XFwvKCg%2FOlteXFwvI1xcP10rPykoPzpcXC8oPzpbXlxcLyNcXD9dKz8pKSopKT8oLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvZWRpdC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9hZG1pbig%2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw%2FXSs%2FKSkqKSk%2FKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2FkbWluLzpwYXRoKiJ9XX0%3D!

        
        
        

        const mod = { ...middleware_namespaceObject }
        const handler = mod.middleware || mod.default

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/src/middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fsrc_2Fmiddleware_ts_page_2Fsrc_2Fmiddleware_rootDir_C_3A_5CUsers_5CAbdullah_5CDesktop_5Cportfolio2_0_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2Rhc2hib2FyZCg_2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw_2FXSs_2FKSkqKSk_2FKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2Rhc2hib2FyZC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9lZGl0KD86XFwvKCg_2FOlteXFwvI1xcP10rPykoPzpcXC8oPzpbXlxcLyNcXD9dKz8pKSopKT8oLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvZWRpdC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9hZG1pbig_2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw_2FXSs_2FKSkqKSk_2FKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2FkbWluLzpwYXRoKiJ9XQ_3D_3D_preferredRegion_middlewareConfig_eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2Rhc2hib2FyZCg_2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw_2FXSs_2FKSkqKSk_2FKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2Rhc2hib2FyZC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9lZGl0KD86XFwvKCg_2FOlteXFwvI1xcP10rPykoPzpcXC8oPzpbXlxcLyNcXD9dKz8pKSopKT8oLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvZWRpdC86cGF0aCoifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9hZG1pbig_2FOlxcLygoPzpbXlxcLyNcXD9dKz8pKD86XFwvKD86W15cXC8jXFw_2FXSs_2FKSkqKSk_2FKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2FkbWluLzpwYXRoKiJ9XX0_3D_(opts) {
          return adapter({
            ...opts,
            page: "/src/middleware",
            handler,
          })
        }
    

/***/ }),

/***/ 865:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    splitCookiesString: ()=>splitCookiesString,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = // @ts-expect-error See https://github.com/whatwg/fetch/issues/973
        (_c = (_b = (_a = responseHeaders.getAll) == null ? void 0 : _a.call(responseHeaders, "set-cookie")) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 487:
/***/ ((module) => {

"use strict";
var __dirname = "/";

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(818));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES)["middleware_src/middleware"] = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map