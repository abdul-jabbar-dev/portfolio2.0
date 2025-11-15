exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 4578:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(4414);
const _normalizetrailingslash = __webpack_require__(1094);
const basePath =  false || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 6937:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "callServer", ({
    enumerable: true,
    get: function() {
        return callServer;
    }
}));
const _approuter = __webpack_require__(2987);
async function callServer(actionId, actionArgs) {
    const actionDispatcher = (0, _approuter.getServerActionDispatcher)();
    if (!actionDispatcher) {
        throw new Error("Invariant: missing action dispatcher.");
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map


/***/ }),

/***/ 3049:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AppRouterAnnouncer", ({
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
}));
const _react = __webpack_require__(8038);
const _reactdom = __webpack_require__(8704);
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.ariaLive = "assertive";
        announcer.id = ANNOUNCER_ID;
        announcer.role = "alert";
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map


/***/ }),

/***/ 6265:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RSC: function() {
        return RSC;
    },
    ACTION: function() {
        return ACTION;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_ROUTER_PREFETCH: function() {
        return NEXT_ROUTER_PREFETCH;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    FETCH_CACHE_HEADER: function() {
        return FETCH_CACHE_HEADER;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_VARY_HEADER: function() {
        return RSC_VARY_HEADER;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    }
});
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
const NEXT_RSC_UNION_QUERY = "_rsc";
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 2987:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    },
    default: function() {
        return AppRouter;
    }
});
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _approutercontext = __webpack_require__(7085);
const _routerreducer = __webpack_require__(7189);
const _routerreducertypes = __webpack_require__(2836);
const _createhreffromurl = __webpack_require__(4331);
const _hooksclientcontext = __webpack_require__(9569);
const _usereducerwithdevtools = __webpack_require__(7951);
const _errorboundary = __webpack_require__(1232);
const _createinitialrouterstate = __webpack_require__(1684);
const _isbot = __webpack_require__(8735);
const _addbasepath = __webpack_require__(4578);
const _approuterannouncer = __webpack_require__(3049);
const _redirectboundary = __webpack_require__(1442);
const _findheadincache = __webpack_require__(1333);
const _infinitepromise = __webpack_require__(6360);
const _approuterheaders = __webpack_require__(6265);
const _removebasepath = __webpack_require__(2666);
const _hasbasepath = __webpack_require__(4374);
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if (true) {
        if ( true && urlWithoutFlightParameters.pathname.endsWith(".txt")) {
            const { pathname } = urlWithoutFlightParameters;
            const length = pathname.endsWith("/index.txt") ? 10 : 4;
            // Slice off `/index.txt` or `.txt` from the end of the pathname
            urlWithoutFlightParameters.pathname = pathname.slice(0, -length);
        }
    }
    return urlWithoutFlightParameters;
}
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { tree, pushRef, canonicalUrl, sync } = param;
    (0, _react.useInsertionEffect)(()=>{
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    return null;
}
const createEmptyCacheNode = ()=>({
        status: _approutercontext.CacheStates.LAZY_INITIALIZED,
        data: null,
        subTreeData: null,
        parallelRoutes: new Map()
    });
function useServerActionDispatcher(dispatch) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                mutable: {},
                cache: createEmptyCacheNode()
            });
        });
    }, [
        dispatch
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
/**
 * Server response that only patches the cache and tree.
 */ function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((previousTree, flightData, overrideCanonicalUrl)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                flightData,
                previousTree,
                overrideCanonicalUrl,
                cache: createEmptyCacheNode(),
                mutable: {}
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, forceOptimisticNavigation, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            forceOptimisticNavigation,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType,
            cache: createEmptyCacheNode(),
            mutable: {}
        });
    }, [
        dispatch
    ]);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { buildId, initialHead, initialTree, initialCanonicalUrl, children, assetPrefix } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        buildId,
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree, cache, prefetchCache, pushRef, focusAndScrollRef, canonicalUrl, nextUrl }, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(_routerreducer.reducer, initialState);
    (0, _react.useEffect)(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    useServerActionDispatcher(dispatch);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                // Don't prefetch for bots as they don't navigate.
                // Don't prefetch during development (improves compilation performance)
                if ((0, _isbot.isBot)(window.navigator.userAgent) || "production" === "development") {
                    return;
                }
                const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                (0, _react.startTransition)(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        cache: createEmptyCacheNode(),
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            },
            // @ts-ignore we don't want to expose this method at all
            fastRefresh: ()=>{
                if (true) {
                    throw new Error("fastRefresh can only be used in development mode. Please use refresh instead.");
                } else {}
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if (false) {}
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.tree)) return;
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.tree
            });
        }
        window.addEventListener("pageshow", handlePageShow);
        return ()=>{
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, [
        dispatch
    ]);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    if (pushRef.mpaNavigation) {
        const location1 = window.location;
        if (pushRef.pendingPush) {
            location1.assign(canonicalUrl);
        } else {
            location1.replace(canonicalUrl);
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react.useCallback)((param)=>{
        let { state } = param;
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react.useEffect)(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const head = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    let content = /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, head, cache.subTreeData, /*#__PURE__*/ _react.default.createElement(_approuterannouncer.AppRouterAnnouncer, {
        tree: tree
    }));
    if (false) {}
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(HistoryUpdater, {
        tree: tree,
        pushRef: pushRef,
        canonicalUrl: canonicalUrl,
        sync: sync
    }), /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.GlobalLayoutRouterContext.Provider, {
        value: {
            buildId,
            changeByServerResponse,
            tree,
            focusAndScrollRef,
            nextUrl
        }
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        }
    }, content))))));
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, rest));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 5661:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _dynamicnossr = __webpack_require__(9708);
const _staticgenerationasyncstorage = __webpack_require__(3539);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 2633:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clientHookInServerComponentError", ({
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 1232:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    // Exported so that the import signature in the loaders can be identical to user
    // supplied custom global error signatures.
    default: function() {
        return _default;
    },
    ErrorBoundary: function() {
        return ErrorBoundary;
    }
});
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ _react.default.createElement("html", {
        id: "__next_error__"
    }, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a " + (digest ? "server" : "client") + "-side exception has occurred (see the " + (digest ? "server logs" : "browser console") + " for more information)."), digest ? /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, "Digest: " + digest) : null))));
}
const _default = GlobalError;
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 8047:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_ERROR_CODE: function() {
        return DYNAMIC_ERROR_CODE;
    },
    DynamicServerError: function() {
        return DynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 6360:
/***/ ((module, exports) => {

"use strict";
/**
 * Used to cache in createInfinitePromise
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInfinitePromise", ({
    enumerable: true,
    get: function() {
        return createInfinitePromise;
    }
}));
let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 831:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8704));
const _approutercontext = __webpack_require__(7085);
const _fetchserverresponse = __webpack_require__(8080);
const _infinitepromise = __webpack_require__(6360);
const _errorboundary = __webpack_require__(1232);
const _matchsegments = __webpack_require__(7618);
const _handlesmoothscroll = __webpack_require__(4490);
const _redirectboundary = __webpack_require__(1442);
const _notfoundboundary = __webpack_require__(6505);
const _getsegmentvalue = __webpack_require__(7741);
const _createroutercachekey = __webpack_require__(8870);
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (true) return null;
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        "sticky",
        "fixed"
    ].includes(getComputedStyle(element).position)) {
        if (false) {}
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `handleSmoothScroll`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return /*#__PURE__*/ _react.default.createElement(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef
    }, children);
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, childProp, segmentPath, tree, // isActive,
    cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(cacheKey);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (!childNode) {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            };
            childNodes.set(cacheKey, childNode);
        } else {
            if (childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
                // @ts-expect-error we're changing it's type!
                childNode.status = _approutercontext.CacheStates.READY;
                // @ts-expect-error
                childNode.subTreeData = childProp.current;
            }
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        childNode = {
            status: _approutercontext.CacheStates.DATA_FETCH,
            data: (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, context.nextUrl, buildId),
            subTreeData: null,
            head: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        };
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(cacheKey, childNode);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react.use)(childNode.data);
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            (0, _react.startTransition)(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url
        }
    }, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { children, loading, loadingStyles, hasLoading } = param;
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, childProp, error, errorStyles, templateStyles, loading, loadingStyles, hasLoading, template, notFound, notFoundStyles, styles } = param;
    const context = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodesForParallelRouter = new Map();
        childNodes.set(parallelRouterKey, childNodesForParallelRouter);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        treeSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, styles, preservedSegments.map((preservedSegment)=>{
        const isChildPropSegment = (0, _matchsegments.matchSegment)(preservedSegment, childPropSegment);
        const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_approutercontext.TemplateContext.Provider, {
            key: (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true),
            value: /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
                segmentPath: segmentPath
            }, /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: isChildPropSegment ? childProp : null,
                segmentPath: segmentPath,
                cacheKey: cacheKey,
                isActive: currentChildSegmentValue === preservedSegmentValue
            }))))))
        }, templateStyles, template));
    }));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 7618:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchSegment: function() {
        return matchSegment;
    },
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    }
});
const _getsegmentparam = __webpack_require__(1844);
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === "string") {
        if (typeof segment === "string") {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === "string") {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 696:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
// useLayoutSegments() // Only the segments for the current place. ['children', 'dashboard', 'children', 'integrations'] -> /dashboard/integrations (/dashboard/layout.js would get ['children', 'dashboard', 'children', 'integrations'])

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __webpack_require__(8038);
const _approutercontext = __webpack_require__(7085);
const _hooksclientcontext = __webpack_require__(9569);
const _clienthookinservercomponenterror = __webpack_require__(2633);
const _getsegmentvalue = __webpack_require__(7741);
const _serverinsertedhtml = __webpack_require__(9618);
const _redirect = __webpack_require__(2622);
const _notfound = __webpack_require__(5858);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
        this.size = urlSearchParams.size;
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(5661);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        // This only happens in `pages`. Type is overwritten in navigation.d.ts
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 6505:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NotFoundBoundary", ({
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }),  false && /*#__PURE__*/ 0, this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 5858:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    notFound: function() {
        return notFound;
    },
    isNotFoundError: function() {
        return isNotFoundError;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 8811:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "PromiseQueue", ({
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
}));
const _class_private_field_loose_base = __webpack_require__(8324);
const _class_private_field_loose_key = __webpack_require__(4567);
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map


/***/ }),

/***/ 1442:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    },
    RedirectBoundary: function() {
        return RedirectBoundary;
    }
});
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
const _redirect = __webpack_require__(2622);
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        // @ts-ignore startTransition exists
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map


/***/ }),

/***/ 2622:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    redirect: function() {
        return redirect;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    }
});
const _requestasyncstorage = __webpack_require__(1715);
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url;
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type);
}
function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination] = error.digest.split(";", 3);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string";
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 3)[1];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 6926:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
}));
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _approutercontext = __webpack_require__(7085);
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 4173:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyFlightData", ({
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _fillcachewithnewsubtreedata = __webpack_require__(8921);
function applyFlightData(existingCache, cache, flightDataPath, wasPrefetched) {
    if (wasPrefetched === void 0) wasPrefetched = false;
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, head, wasPrefetched);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = existingCache.subTreeData;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, wasPrefetched);
    }
    return true;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map


/***/ }),

/***/ 3914:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyRouterStatePatchToTree", ({
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
}));
const _matchsegments = __webpack_require__(7618);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then we can ignore it and return the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === "__DEFAULT__" && initialSegment !== "__DEFAULT__") {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        }
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 9089:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    computeChangedPath: function() {
        return computeChangedPath;
    }
});
const _interceptionroutes = __webpack_require__(6624);
const _matchsegments = __webpack_require__(7618);
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        return segment;
    }
    return segment[1];
};
function normalizePathname(pathname) {
    return pathname.split("/").reduce((acc, segment)=>{
        if (segment === "" || segment.startsWith("(") && segment.endsWith(")")) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === "__DEFAULT__" || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith("__PAGE__")) return "";
    const path = [
        segment
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        path.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                path.push(childPath);
            }
        }
    }
    // TODO-APP: optimise this, it's not ideal to join and split
    return normalizePathname(path.join("/"));
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizePathname(changedPath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map


/***/ }),

/***/ 4331:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createHrefFromUrl", ({
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
}));
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 1684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInitialRouterState", ({
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createhreffromurl = __webpack_require__(4331);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _computechangedpath = __webpack_require__(9089);
function createInitialRouterState(param) {
    let { buildId, initialTree, children, initialCanonicalUrl, initialParallelRoutes, isServer, location, initialHead } = param;
    const cache = {
        status: _approutercontext.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialHead);
    }
    var _ref;
    return {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 8503:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createOptimisticTree", ({
    enumerable: true,
    get: function() {
        return createOptimisticTree;
    }
}));
const _matchsegments = __webpack_require__(7618);
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchsegments.matchSegment)(existingSegment, segment);
    // if there are multiple parallel routes at this level, we need to refetch here
    // to ensure we get the correct tree. This is because we don't know which
    // parallel route will match the next segment.
    const hasMultipleParallelRoutes = Object.keys(existingParallelRoutes).length > 1;
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches || hasMultipleParallelRoutes;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    // if there's multiple parallel routes at this level, we shouldn't create an
    // optimistic tree for the next level because we don't know which one will
    // match the next segment.
    if (!isLastSegment && !hasMultipleParallelRoutes) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        {
            ...parallelRoutes,
            ...childTree ? {
                children: childTree
            } : {}
        }
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-optimistic-tree.js.map


/***/ }),

/***/ 4621:
/***/ ((module, exports) => {

"use strict";
/**
 * Create data fetching record for Promise.
 */ // TODO-APP: change `any` to type inference.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRecordFromThenable", ({
    enumerable: true,
    get: function() {
        return createRecordFromThenable;
    }
}));
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-record-from-thenable.js.map


/***/ }),

/***/ 8870:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRouterCacheKey", ({
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
}));
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    return Array.isArray(segment) ? segment[0] + "|" + segment[1] + "|" + segment[2] : withoutSearchParameters && segment.startsWith("__PAGE__") ? "__PAGE__" : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map


/***/ }),

/***/ 8080:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fetchServerResponse", ({
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
}));
const _client = __webpack_require__(7897);
const _approuterheaders = __webpack_require__(6265);
const _approuter = __webpack_require__(2987);
const _appcallserver = __webpack_require__(6937);
const _routerreducertypes = __webpack_require__(2836);
const _hash = __webpack_require__(199);
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC]: "1",
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE],
        headers[_approuterheaders.NEXT_URL]
    ].join(","));
    try {
        let fetchUrl = new URL(url);
        if (true) {
            if (true) {
                if (fetchUrl.pathname.endsWith("/")) {
                    fetchUrl.pathname += "index.txt";
                } else {
                    fetchUrl.pathname += ".txt";
                }
            }
        }
        // Add unique cache query to avoid caching conflicts on CDN which don't respect to Vary header
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if (true) {
            if (true) {
                if (!isFlightResponse) {
                    isFlightResponse = contentType.startsWith("text/plain");
                }
            }
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok) {
            return doMpaNavigation(responseUrl.toString());
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const [buildId, flightData] = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload. Falling back to browser navigation.", err);
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return [
            url.toString(),
            undefined
        ];
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 9996:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithDataProperty", ({
    enumerable: true,
    get: function() {
        return fillCacheWithDataProperty;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createroutercachekey = __webpack_require__(8870);
function fillCacheWithDataProperty(newCache, existingCache, flightSegmentPath, fetchResponse, bailOnParallelRoutes) {
    if (bailOnParallelRoutes === void 0) bailOnParallelRoutes = false;
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap || bailOnParallelRoutes && existingCache.parallelRoutes.size > 1) {
        // Bailout because the existing cache does not have the path to the leaf node
        // or the existing cache has multiple parallel routes
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2), fetchResponse);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map


/***/ }),

/***/ 8921:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", ({
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _invalidatecachebyrouterstate = __webpack_require__(1727);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _createroutercachekey = __webpack_require__(8870);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, wasPrefetched) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4], wasPrefetched);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), wasPrefetched);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 2684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", ({
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createroutercachekey = __webpack_require__(8870);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head, wasPrefetched) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                const newCacheNode = wasPrefetched && existingCacheNode ? {
                    status: existingCacheNode.status,
                    data: existingCacheNode.data,
                    subTreeData: existingCacheNode.subTreeData,
                    parallelRoutes: new Map(existingCacheNode.parallelRoutes)
                } : {
                    status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, head, wasPrefetched);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _approutercontext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head, wasPrefetched);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 6489:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    getPrefetchEntryCacheStatus: function() {
        return getPrefetchEntryCacheStatus;
    }
});
const FIVE_MINUTES = 5 * 60 * 1000;
const THIRTY_SECONDS = 30 * 1000;
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    // if the cache entry was prefetched or read less than 30s ago, then we want to re-use it
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + THIRTY_SECONDS) {
        return lastUsedTime ? "reusable" : "fresh";
    }
    // if the cache entry was prefetched less than 5 mins ago, then we want to re-use only the loading state
    if (kind === "auto") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "stale";
        }
    }
    // if the cache entry was prefetched less than 5 mins ago and was a "full" prefetch, then we want to re-use it "full
    if (kind === "full") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "reusable";
        }
    }
    return "expired";
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-prefetch-cache-entry-status.js.map


/***/ }),

/***/ 7462:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleMutable", ({
    enumerable: true,
    get: function() {
        return handleMutable;
    }
}));
const _computechangedpath = __webpack_require__(9089);
function handleMutable(state, mutable) {
    var _mutable_canonicalUrl;
    var _mutable_shouldScroll;
    // shouldScroll is true by default, can override to false.
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    var _mutable_scrollableSegments, _computeChangedPath;
    return {
        buildId: state.buildId,
        // Set href.
        canonicalUrl: mutable.canonicalUrl != null ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: mutable.pendingPush != null ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: mutable.mpaNavigation != null ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? (mutable == null ? void 0 : mutable.scrollableSegments) !== undefined ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: !!mutable.hashFragment && state.canonicalUrl.split("#")[0] === ((_mutable_canonicalUrl = mutable.canonicalUrl) == null ? void 0 : _mutable_canonicalUrl.split("#")[0]),
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: mutable.patchedTree !== undefined ? mutable.patchedTree : state.tree,
        nextUrl: mutable.patchedTree !== undefined ? (_computeChangedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree)) != null ? _computeChangedPath : state.canonicalUrl : state.nextUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map


/***/ }),

/***/ 8457:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", ({
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 1727:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheByRouterState", ({
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 2615:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNavigatingToNewRootLayout", ({
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
}));
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 2401:
/***/ ((module, exports) => {

"use strict";
/**
 * Read record value or throw Promise if it's not resolved yet.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "readRecordValue", ({
    enumerable: true,
    get: function() {
        return readRecordValue;
    }
}));
function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=read-record-value.js.map


/***/ }),

/***/ 7300:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fastRefreshReducer", ({
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _handlemutable = __webpack_require__(7462);
const _applyflightdata = __webpack_require__(4173);
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function fastRefreshReducerImpl(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        if (applied) {
            mutable.cache = cache;
            currentCache = cache;
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer =  true ? fastRefreshReducerNoop : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fast-refresh-reducer.js.map


/***/ }),

/***/ 1333:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findHeadInCache", ({
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 7741:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 9962:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _approutercontext = __webpack_require__(7085);
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _invalidatecachebelowflightsegmentpath = __webpack_require__(8457);
const _fillcachewithdataproperty = __webpack_require__(9996);
const _createoptimistictree = __webpack_require__(8503);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _shouldhardnavigate = __webpack_require__(8072);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _routerreducertypes = __webpack_require__(2836);
const _handlemutable = __webpack_require__(7462);
const _applyflightdata = __webpack_require__(4173);
const _getprefetchcacheentrystatus = __webpack_require__(6489);
const _pruneprefetchcache = __webpack_require__(7025);
const _prefetchreducer = __webpack_require__(1910);
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function addRefetchToLeafSegments(newCache, currentCache, flightSegmentPath, treePatch, data) {
    let appliedPatch = false;
    newCache.status = _approutercontext.CacheStates.READY;
    newCache.subTreeData = currentCache.subTreeData;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(newCache, currentCache, segmentPaths, data);
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            appliedPatch = true;
        }
    }
    return appliedPatch;
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, cache, mutable, forceOptimisticNavigation, shouldScroll } = action;
    const { pathname, hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    let prefetchValues = state.prefetchCache.get((0, _createhreffromurl.createHrefFromUrl)(url, false));
    if (forceOptimisticNavigation && (prefetchValues == null ? void 0 : prefetchValues.kind) !== _routerreducertypes.PrefetchKind.TEMPORARY) {
        const segments = pathname.split("/");
        // TODO-APP: figure out something better for index pages
        segments.push("__PAGE__");
        // Optimistic tree case.
        // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
        const optimisticTree = (0, _createoptimistictree.createOptimisticTree)(segments, state.tree, false);
        // we need a copy of the cache in case we need to revert to it
        const temporaryCacheNode = {
            ...cache
        };
        // Copy subTreeData for the root node of the cache.
        // Note: didn't do it above because typescript doesn't like it.
        temporaryCacheNode.status = _approutercontext.CacheStates.READY;
        temporaryCacheNode.subTreeData = state.cache.subTreeData;
        temporaryCacheNode.parallelRoutes = new Map(state.cache.parallelRoutes);
        let data;
        const fetchResponse = ()=>{
            if (!data) {
                data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, optimisticTree, state.nextUrl, state.buildId));
            }
            return data;
        };
        // TODO-APP: segments.slice(1) strips '', we can get rid of '' altogether.
        // TODO-APP: re-evaluate if we need to strip the last segment
        const optimisticFlightSegmentPath = segments.slice(1).map((segment)=>[
                "children",
                segment
            ]).flat();
        // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
        // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(temporaryCacheNode, state.cache, optimisticFlightSegmentPath, fetchResponse, true);
        // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.hashFragment = hash;
            mutable.shouldScroll = shouldScroll;
            mutable.scrollableSegments = [];
            mutable.cache = temporaryCacheNode;
            mutable.canonicalUrl = href;
            state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), {
                data: Promise.resolve(data),
                // this will make sure that the entry will be discarded after 30s
                kind: _routerreducertypes.PrefetchKind.TEMPORARY,
                prefetchTime: Date.now(),
                treeAtTimeOfPrefetch: state.tree,
                lastUsedTime: Date.now()
            });
            return (0, _handlemutable.handleMutable)(state, mutable);
        }
    }
    // If we don't have a prefetch value, we need to create one
    if (!prefetchValues) {
        const data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, // in order to simulate the behavior of the prefetch cache
         false ? 0 : undefined));
        const newPrefetchValue = {
            data: Promise.resolve(data),
            // this will make sure that the entry will be discarded after 30s
            kind:  false ? 0 : _routerreducertypes.PrefetchKind.TEMPORARY,
            prefetchTime: Date.now(),
            treeAtTimeOfPrefetch: state.tree,
            lastUsedTime: null
        };
        state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), newPrefetchValue);
        prefetchValues = newPrefetchValue;
    }
    const prefetchEntryCacheStatus = (0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchValues);
    // The one before last item is the router state tree patch
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(data);
    // important: we should only mark the cache node as dirty after we unsuspend from the call above
    prefetchValues.lastUsedTime = Date.now();
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    let scrollableSegments = [];
    for (const flightDataPath of flightData){
        const flightSegmentPath = flightDataPath.slice(0, -4);
        // The one before last item is the router state tree patch
        const treePatch = flightDataPath.slice(-3)[0];
        // TODO-APP: remove ''
        const flightSegmentPathWithLeadingEmpty = [
            "",
            ...flightSegmentPath
        ];
        // Create new tree based on the flightSegmentPath and router state patch
        let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch);
        // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
        // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
        if (newTree === null) {
            newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch);
        }
        if (newTree !== null) {
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            let applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues.kind === "auto" && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.reusable);
            if (!applied && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.stale) {
                applied = addRefetchToLeafSegments(cache, currentCache, flightSegmentPath, treePatch, ()=>(0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
            }
            const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
            if (hardNavigate) {
                cache.status = _approutercontext.CacheStates.READY;
                // Copy subTreeData for the root node of the cache.
                cache.subTreeData = currentCache.subTreeData;
                (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                // Ensure the existing cache value is used when the cache was not invalidated.
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            currentCache = cache;
            currentTree = newTree;
            for (const subSegment of generateSegmentsFromPatch(treePatch)){
                const scrollableSegmentPath = [
                    ...flightSegmentPath,
                    ...subSegment
                ];
                // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== "__DEFAULT__") {
                    scrollableSegments.push(scrollableSegmentPath);
                }
            }
        }
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = currentTree;
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = scrollableSegments;
    mutable.hashFragment = hash;
    mutable.shouldScroll = shouldScroll;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 1910:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _createhreffromurl = __webpack_require__(4331);
const _fetchserverresponse = __webpack_require__(8080);
const _routerreducertypes = __webpack_require__(2836);
const _createrecordfromthenable = __webpack_require__(4621);
const _pruneprefetchcache = __webpack_require__(7025);
const _approuterheaders = __webpack_require__(6265);
const _promisequeue = __webpack_require__(8811);
const prefetchQueue = new _promisequeue.PromiseQueue(5);
function prefetchReducer(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const href = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    const cacheEntry = state.prefetchCache.get(href);
    if (cacheEntry) {
        /**
     * If the cache entry present was marked as temporary, it means that we prefetched it from the navigate reducer,
     * where we didn't have the prefetch intent. We want to update it to the new, more accurate, kind here.
     */ if (cacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            state.prefetchCache.set(href, {
                ...cacheEntry,
                kind: action.kind
            });
        }
        /**
     * if the prefetch action was a full prefetch and that the current cache entry wasn't one, we want to re-prefetch,
     * otherwise we can re-use the current cache entry
     **/ if (!(cacheEntry.kind === _routerreducertypes.PrefetchKind.AUTO && action.kind === _routerreducertypes.PrefetchKind.FULL)) {
            return state;
        }
    }
    // fetchServerResponse is intentionally not awaited so that it can be unwrapped in the navigate-reducer
    const serverResponse = (0, _createrecordfromthenable.createRecordFromThenable)(prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, action.kind)));
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        // Create new tree based on the flightSegmentPath and router state patch
        treeAtTimeOfPrefetch: state.tree,
        data: serverResponse,
        kind: action.kind,
        prefetchTime: Date.now(),
        lastUsedTime: null
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 7025:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "prunePrefetchCache", ({
    enumerable: true,
    get: function() {
        return prunePrefetchCache;
    }
}));
const _getprefetchcacheentrystatus = __webpack_require__(6489);
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if ((0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchCacheEntry) === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prune-prefetch-cache.js.map


/***/ }),

/***/ 9082:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "refreshReducer", ({
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _handlemutable = __webpack_require__(7462);
const _approutercontext = __webpack_require__(7085);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
function refreshReducer(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            currentTree[0],
            currentTree[1],
            currentTree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        // The one before last item is the router state tree patch
        const [subTreeData, head] = flightDataPath.slice(-2);
        // Handles case where prefetch only returns the router tree patch without rendered components.
        if (subTreeData !== null) {
            cache.status = _approutercontext.CacheStates.READY;
            cache.subTreeData = subTreeData;
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
            mutable.cache = cache;
            mutable.prefetchCache = new Map();
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 9425:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "restoreReducer", ({
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
}));
const _createhreffromurl = __webpack_require__(4331);
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    return {
        buildId: state.buildId,
        // Set canonical url
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree,
        nextUrl: url.pathname
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 7238:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverActionReducer", ({
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
}));
const _appcallserver = __webpack_require__(6937);
const _approuterheaders = __webpack_require__(6265);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _client = __webpack_require__(7897);
const _addbasepath = __webpack_require__(4578);
const _createhreffromurl = __webpack_require__(4331);
const _navigatereducer = __webpack_require__(9962);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _approutercontext = __webpack_require__(7085);
const _handlemutable = __webpack_require__(7462);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
async function fetchServerAction(state, param) {
    let { actionId, actionArgs } = param;
    const body = await (0, _client.encodeReply)(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            "Next-Action": actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(state.tree)),
            ... false ? 0 : {},
            ...state.nextUrl ? {
                [_approuterheaders.NEXT_URL]: state.nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), window.location.origin) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (location) {
            // if it was a redirection, then result is just a regular RSC payload
            const [, actionFlightData] = response != null ? response : [];
            return {
                actionFlightData: actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
        // otherwise it's a tuple of [actionResult, actionFlightData]
        const [actionResult, [, actionFlightData]] = response != null ? response : [];
        return {
            actionResult,
            actionFlightData,
            redirectLocation,
            revalidatedParts
        };
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    const { mutable, cache, resolve, reject } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!action.mutable.inFlightServerAction) {
        action.mutable.inFlightServerAction = (0, _createrecordfromthenable.createRecordFromThenable)(fetchServerAction(state, action));
    }
    // TODO-APP: Make try/catch wrap only readRecordValue so that other errors bubble up through the reducer instead.
    try {
        // suspends until the server action is resolved.
        const { actionResult, actionFlightData: flightData, redirectLocation } = (0, _readrecordvalue.readRecordValue)(action.mutable.inFlightServerAction);
        mutable.previousTree = state.tree;
        if (!flightData) {
            if (!mutable.actionResultResolved) {
                resolve(actionResult);
                mutable.actionResultResolved = true;
            }
            // If there is a redirect but no flight data we need to do a mpaNavigation.
            if (redirectLocation) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectLocation.href, state.pushRef.pendingPush);
            }
            return state;
        }
        if (typeof flightData === "string") {
            // Handle case when navigating to page in `pages` from `app`
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.data as it has been resolved at this point.
        mutable.inFlightServerAction = null;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("SERVER ACTION APPLY FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and subTreeData for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch);
            if (newTree === null) {
                throw new Error("SEGMENT MISMATCH");
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            // The one before last item is the router state tree patch
            const [subTreeData, head] = flightDataPath.slice(-2);
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (subTreeData !== null) {
                cache.status = _approutercontext.CacheStates.READY;
                cache.subTreeData = subTreeData;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
                mutable.cache = cache;
                mutable.prefetchCache = new Map();
            }
            mutable.previousTree = currentTree;
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        if (redirectLocation) {
            const newHref = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
            mutable.canonicalUrl = newHref;
        }
        if (!mutable.actionResultResolved) {
            resolve(actionResult);
            mutable.actionResultResolved = true;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    } catch (e) {
        if (e.status === "rejected") {
            if (!mutable.actionResultResolved) {
                reject(e.value);
                mutable.actionResultResolved = true;
            }
            // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
            return state;
        }
        throw e;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map


/***/ }),

/***/ 5022:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverPatchReducer", ({
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
}));
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _applyflightdata = __webpack_require__(4173);
const _handlemutable = __webpack_require__(7462);
function serverPatchReducer(state, action) {
    const { flightData, previousTree, overrideCanonicalUrl, cache, mutable } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 2836:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 7189:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "reducer", ({
    enumerable: true,
    get: function() {
        return reducer;
    }
}));
const _routerreducertypes = __webpack_require__(2836);
const _navigatereducer = __webpack_require__(9962);
const _serverpatchreducer = __webpack_require__(5022);
const _restorereducer = __webpack_require__(9425);
const _refreshreducer = __webpack_require__(9082);
const _prefetchreducer = __webpack_require__(1910);
const _fastrefreshreducer = __webpack_require__(7300);
const _serveractionreducer = __webpack_require__(7238);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 8072:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "shouldHardNavigate", ({
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
}));
const _matchsegments = __webpack_require__(7618);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 8437:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(8862);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 8862:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationBailout", ({
    enumerable: true,
    get: function() {
        return staticGenerationBailout;
    }
}));
const _hooksservercontext = __webpack_require__(8047);
const _staticgenerationasyncstorage = __webpack_require__(3539);
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
function formatErrorMessage(reason, opts) {
    const { dynamic, link } = opts || {};
    const suffix = link ? " See more info here: " + link : "";
    return "Page" + (dynamic ? ' with `dynamic = "' + dynamic + '"`' : "") + " couldn't be rendered statically because it used `" + reason + "`." + suffix;
}
const staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        var _opts_dynamic;
        throw new StaticGenBailoutError(formatErrorMessage(reason, {
            ...opts,
            dynamic: (_opts_dynamic = opts == null ? void 0 : opts.dynamic) != null ? _opts_dynamic : "error"
        }));
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new _hooksservercontext.DynamicServerError(formatErrorMessage(reason, {
            ...opts,
            // this error should be caught by Next to bail out of static generation
            // in case it's uncaught, this link provides some additional context as to why
            link: "https://nextjs.org/docs/messages/dynamic-server-error"
        }));
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 4282:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _searchparamsbailoutproxy = __webpack_require__(8437);
function StaticGenerationSearchParamsBailoutProvider(param) {
    let { Component, propsForComponent } = param;
    const searchParams = (0, _searchparamsbailoutproxy.createSearchParamsBailoutProxy)();
    return /*#__PURE__*/ _react.default.createElement(Component, {
        searchParams: searchParams,
        ...propsForComponent
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 7951:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useReducerWithReduxDevtools", ({
    enumerable: true,
    get: function() {
        return useReducerWithReduxDevtools;
    }
}));
const _react = __webpack_require__(8038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react.useReducer)(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react.useReducer)(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react.useCallback)(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 4374:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasBasePath", ({
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
}));
const _pathhasprefix = __webpack_require__(4614);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 3380:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _reactdom = __webpack_require__(8704);
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6864));
const _getimgprops = __webpack_require__(1830);
const _imageconfig = __webpack_require__(2210);
const _imageconfigcontext = __webpack_require__(5359);
const _warnonce = __webpack_require__(8658);
const _routercontext = __webpack_require__(7160);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5246));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true};
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.preload) {
        // See https://github.com/facebook/react/pull/26940
        (0, _reactdom.preload)(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        ...opts
    }));
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontext.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgAttributes,
        unoptimized: imgMeta.unoptimized,
        placeholder: imgMeta.placeholder,
        fill: imgMeta.fill,
        onLoadRef: onLoadRef,
        onLoadingCompleteRef: onLoadingCompleteRef,
        setBlurComplete: setBlurComplete,
        setShowAltText: setShowAltText,
        ref: forwardedRef
    }), imgMeta.priority ? /*#__PURE__*/ _react.default.createElement(ImagePreload, {
        isAppRouter: isAppRouter,
        imgAttributes: imgAttributes
    }) : null);
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 1094:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(3750);
const _parsepath = __webpack_require__(8231);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 2666:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeBasePath", ({
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
}));
const _hasbasepath = __webpack_require__(4374);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = "/" + path;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(2147);
const _getimgprops = __webpack_require__(1830);
const _warnonce = __webpack_require__(8658);
const _imagecomponent = __webpack_require__(3380);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5246));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 5246:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 9708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    suspense: function() {
        return suspense;
    },
    NoSSR: function() {
        return NoSSR;
    }
});
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _nossrerror = __webpack_require__(827);
function suspense() {
    const error = new Error(_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR(param) {
    let { children } = param;
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NEXT_DYNAMIC_NO_SSR_CODE", ({
    enumerable: true,
    get: function() {
        return NEXT_DYNAMIC_NO_SSR_CODE;
    }
}));
const NEXT_DYNAMIC_NO_SSR_CODE = "NEXT_DYNAMIC_NO_SSR_CODE"; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 9072:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function(global, factory) {
     true ? factory(exports, __webpack_require__(7422), __webpack_require__(3902)) : 0;
})(this, function(exports1, tslib, graphql) {
    "use strict";
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
        return tslib.__assign(tslib.__assign({}, ast), {
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
            var parsed = graphql.parse(source, {
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
    var gql$1 = gql;
    exports1.default = gql$1;
    exports1.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;
    exports1.disableFragmentWarnings = disableFragmentWarnings;
    exports1.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
    exports1.gql = gql;
    exports1.resetCaches = resetCaches;
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
}); //# sourceMappingURL=graphql-tag.umd.js.map


/***/ }),

/***/ 1137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// For backwards compatibility, make sure require("graphql-tag") returns
// the gql function, rather than an exports object.

module.exports = __webpack_require__(9072).gql;


/***/ }),

/***/ 6042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLError = void 0;
exports.formatError = formatError;
exports.printError = printError;
var _isObjectLike = __webpack_require__(9112);
var _location = __webpack_require__(7097);
var _printLocation = __webpack_require__(4832);
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
        this.locations = positions && source ? positions.map((pos)=>(0, _location.getLocation)(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>(0, _location.getLocation)(loc.source, loc.start));
        const originalExtensions = (0, _isObjectLike.isObjectLike)(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : undefined;
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
                    output += "\n\n" + (0, _printLocation.printLocation)(node.loc);
                }
            }
        } else if (this.source && this.locations) {
            for (const location of this.locations){
                output += "\n\n" + (0, _printLocation.printSourceLocation)(this.source, location);
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
exports.GraphQLError = GraphQLError;
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


/***/ }),

/***/ 3939:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "GraphQLError", ({
    enumerable: true,
    get: function() {
        return _GraphQLError.GraphQLError;
    }
}));
Object.defineProperty(exports, "formatError", ({
    enumerable: true,
    get: function() {
        return _GraphQLError.formatError;
    }
}));
Object.defineProperty(exports, "locatedError", ({
    enumerable: true,
    get: function() {
        return _locatedError.locatedError;
    }
}));
Object.defineProperty(exports, "printError", ({
    enumerable: true,
    get: function() {
        return _GraphQLError.printError;
    }
}));
Object.defineProperty(exports, "syntaxError", ({
    enumerable: true,
    get: function() {
        return _syntaxError.syntaxError;
    }
}));
var _GraphQLError = __webpack_require__(6042);
var _syntaxError = __webpack_require__(2399);
var _locatedError = __webpack_require__(8710);


/***/ }),

/***/ 8710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.locatedError = locatedError;
var _toError = __webpack_require__(2870);
var _GraphQLError = __webpack_require__(6042);
/**
 * Given an arbitrary value, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */ function locatedError(rawOriginalError, nodes, path) {
    var _nodes;
    const originalError = (0, _toError.toError)(rawOriginalError); // Note: this uses a brand-check to support GraphQL errors originating from other contexts.
    if (isLocatedGraphQLError(originalError)) {
        return originalError;
    }
    return new _GraphQLError.GraphQLError(originalError.message, {
        nodes: (_nodes = originalError.nodes) !== null && _nodes !== void 0 ? _nodes : nodes,
        source: originalError.source,
        positions: originalError.positions,
        path,
        originalError
    });
}
function isLocatedGraphQLError(error) {
    return Array.isArray(error.path);
}


/***/ }),

/***/ 2399:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.syntaxError = syntaxError;
var _GraphQLError = __webpack_require__(6042);
/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */ function syntaxError(source, position, description) {
    return new _GraphQLError.GraphQLError(`Syntax Error: ${description}`, {
        source,
        positions: [
            position
        ]
    });
}


/***/ }),

/***/ 2480:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.collectFields = collectFields;
exports.collectSubfields = collectSubfields;
var _kinds = __webpack_require__(4278);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
var _typeFromAST = __webpack_require__(871);
var _values = __webpack_require__(1669);
/**
 * Given a selectionSet, collects all of the fields and returns them.
 *
 * CollectFields requires the "runtime type" of an object. For a field that
 * returns an Interface or Union type, the "runtime type" will be the actual
 * object type returned by that field.
 *
 * @internal
 */ function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
    const fields = new Map();
    collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, new Set());
    return fields;
}
/**
 * Given an array of field nodes, collects all of the subfields of the passed
 * in fields, and returns them at the end.
 *
 * CollectSubFields requires the "return type" of an object. For a field that
 * returns an Interface or Union type, the "return type" will be the actual
 * object type returned by that field.
 *
 * @internal
 */ function collectSubfields(schema, fragments, variableValues, returnType, fieldNodes) {
    const subFieldNodes = new Map();
    const visitedFragmentNames = new Set();
    for (const node of fieldNodes){
        if (node.selectionSet) {
            collectFieldsImpl(schema, fragments, variableValues, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
        }
    }
    return subFieldNodes;
}
function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, visitedFragmentNames) {
    for (const selection of selectionSet.selections){
        switch(selection.kind){
            case _kinds.Kind.FIELD:
                {
                    if (!shouldIncludeNode(variableValues, selection)) {
                        continue;
                    }
                    const name = getFieldEntryKey(selection);
                    const fieldList = fields.get(name);
                    if (fieldList !== undefined) {
                        fieldList.push(selection);
                    } else {
                        fields.set(name, [
                            selection
                        ]);
                    }
                    break;
                }
            case _kinds.Kind.INLINE_FRAGMENT:
                {
                    if (!shouldIncludeNode(variableValues, selection) || !doesFragmentConditionMatch(schema, selection, runtimeType)) {
                        continue;
                    }
                    collectFieldsImpl(schema, fragments, variableValues, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
                    break;
                }
            case _kinds.Kind.FRAGMENT_SPREAD:
                {
                    const fragName = selection.name.value;
                    if (visitedFragmentNames.has(fragName) || !shouldIncludeNode(variableValues, selection)) {
                        continue;
                    }
                    visitedFragmentNames.add(fragName);
                    const fragment = fragments[fragName];
                    if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
                        continue;
                    }
                    collectFieldsImpl(schema, fragments, variableValues, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
                    break;
                }
        }
    }
}
/**
 * Determines if a field should be included based on the `@include` and `@skip`
 * directives, where `@skip` has higher precedence than `@include`.
 */ function shouldIncludeNode(variableValues, node) {
    const skip = (0, _values.getDirectiveValues)(_directives.GraphQLSkipDirective, node, variableValues);
    if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
        return false;
    }
    const include = (0, _values.getDirectiveValues)(_directives.GraphQLIncludeDirective, node, variableValues);
    if ((include === null || include === void 0 ? void 0 : include.if) === false) {
        return false;
    }
    return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */ function doesFragmentConditionMatch(schema, fragment, type) {
    const typeConditionNode = fragment.typeCondition;
    if (!typeConditionNode) {
        return true;
    }
    const conditionalType = (0, _typeFromAST.typeFromAST)(schema, typeConditionNode);
    if (conditionalType === type) {
        return true;
    }
    if ((0, _definition.isAbstractType)(conditionalType)) {
        return schema.isSubType(conditionalType, type);
    }
    return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */ function getFieldEntryKey(node) {
    return node.alias ? node.alias.value : node.name.value;
}


/***/ }),

/***/ 3551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.assertValidExecutionArguments = assertValidExecutionArguments;
exports.buildExecutionContext = buildExecutionContext;
exports.buildResolveInfo = buildResolveInfo;
exports.defaultTypeResolver = exports.defaultFieldResolver = void 0;
exports.execute = execute;
exports.executeSync = executeSync;
exports.getFieldDef = getFieldDef;
var _devAssert = __webpack_require__(6158);
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _isIterableObject = __webpack_require__(8020);
var _isObjectLike = __webpack_require__(9112);
var _isPromise = __webpack_require__(2833);
var _memoize = __webpack_require__(9579);
var _Path = __webpack_require__(9053);
var _promiseForObject = __webpack_require__(3967);
var _promiseReduce = __webpack_require__(5118);
var _GraphQLError = __webpack_require__(6042);
var _locatedError = __webpack_require__(8710);
var _ast = __webpack_require__(1874);
var _kinds = __webpack_require__(4278);
var _definition = __webpack_require__(2838);
var _introspection = __webpack_require__(8840);
var _validate = __webpack_require__(2419);
var _collectFields = __webpack_require__(2480);
var _values = __webpack_require__(1669);
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */ const collectSubfields = (0, _memoize.memoize3)((exeContext, returnType, fieldNodes)=>(0, _collectFields.collectSubfields)(exeContext.schema, exeContext.fragments, exeContext.variableValues, returnType, fieldNodes));
/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g `a`
 * 2) fragment "spreads" e.g. `...c`
 * 3) inline fragment "spreads" e.g. `...on Type { a }`
 */ /**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */ /**
 * Implements the "Executing requests" section of the GraphQL specification.
 *
 * Returns either a synchronous ExecutionResult (if all encountered resolvers
 * are synchronous), or a Promise of an ExecutionResult that will eventually be
 * resolved and never rejected.
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 */ function execute(args) {
    // Temporary for v15 to v16 migration. Remove in v17
    arguments.length < 2 || (0, _devAssert.devAssert)(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    const { schema, document, variableValues, rootValue } = args; // If arguments are missing or incorrect, throw an error.
    assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
    // a "Response" with only errors is returned.
    const exeContext = buildExecutionContext(args); // Return early errors if execution context failed.
    if (!("schema" in exeContext)) {
        return {
            errors: exeContext
        };
    } // Return a Promise that will eventually resolve to the data described by
    // The "Response" section of the GraphQL specification.
    //
    // If errors are encountered while executing a GraphQL field, only that
    // field and its descendants will be omitted, and sibling fields will still
    // be executed. An execution which encounters errors will still result in a
    // resolved Promise.
    //
    // Errors from sub-fields of a NonNull type may propagate to the top level,
    // at which point we still log the error and null the parent field, which
    // in this case is the entire response.
    try {
        const { operation } = exeContext;
        const result = executeOperation(exeContext, operation, rootValue);
        if ((0, _isPromise.isPromise)(result)) {
            return result.then((data)=>buildResponse(data, exeContext.errors), (error)=>{
                exeContext.errors.push(error);
                return buildResponse(null, exeContext.errors);
            });
        }
        return buildResponse(result, exeContext.errors);
    } catch (error) {
        exeContext.errors.push(error);
        return buildResponse(null, exeContext.errors);
    }
}
/**
 * Also implements the "Executing requests" section of the GraphQL specification.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */ function executeSync(args) {
    const result = execute(args); // Assert that the execution was synchronous.
    if ((0, _isPromise.isPromise)(result)) {
        throw new Error("GraphQL execution failed to complete synchronously.");
    }
    return result;
}
/**
 * Given a completed execution context and data, build the `{ errors, data }`
 * response defined by the "Response" section of the GraphQL specification.
 */ function buildResponse(data, errors) {
    return errors.length === 0 ? {
        data
    } : {
        errors,
        data
    };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 *
 * @internal
 */ function assertValidExecutionArguments(schema, document, rawVariableValues) {
    document || (0, _devAssert.devAssert)(false, "Must provide document."); // If the schema used for execution is invalid, throw an error.
    (0, _validate.assertValidSchema)(schema); // Variables, if provided, must be an object.
    rawVariableValues == null || (0, _isObjectLike.isObjectLike)(rawVariableValues) || (0, _devAssert.devAssert)(false, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.");
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 *
 * @internal
 */ function buildExecutionContext(args) {
    var _definition$name, _operation$variableDe, _options$maxCoercionE;
    const { schema, document, rootValue, contextValue, variableValues: rawVariableValues, operationName, fieldResolver, typeResolver, subscribeFieldResolver, options } = args;
    let operation;
    const fragments = Object.create(null);
    for (const definition of document.definitions){
        switch(definition.kind){
            case _kinds.Kind.OPERATION_DEFINITION:
                if (operationName == null) {
                    if (operation !== undefined) {
                        return [
                            new _GraphQLError.GraphQLError("Must provide operation name if query contains multiple operations.")
                        ];
                    }
                    operation = definition;
                } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
                    operation = definition;
                }
                break;
            case _kinds.Kind.FRAGMENT_DEFINITION:
                fragments[definition.name.value] = definition;
                break;
            default:
        }
    }
    if (!operation) {
        if (operationName != null) {
            return [
                new _GraphQLError.GraphQLError(`Unknown operation named "${operationName}".`)
            ];
        }
        return [
            new _GraphQLError.GraphQLError("Must provide an operation.")
        ];
    } // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ const variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
    const coercedVariableValues = (0, _values.getVariableValues)(schema, variableDefinitions, rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {}, {
        maxErrors: (_options$maxCoercionE = options === null || options === void 0 ? void 0 : options.maxCoercionErrors) !== null && _options$maxCoercionE !== void 0 ? _options$maxCoercionE : 50
    });
    if (coercedVariableValues.errors) {
        return coercedVariableValues.errors;
    }
    return {
        schema,
        fragments,
        rootValue,
        contextValue,
        operation,
        variableValues: coercedVariableValues.coerced,
        fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
        typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
        subscribeFieldResolver: subscribeFieldResolver !== null && subscribeFieldResolver !== void 0 ? subscribeFieldResolver : defaultFieldResolver,
        errors: []
    };
}
/**
 * Implements the "Executing operations" section of the spec.
 */ function executeOperation(exeContext, operation, rootValue) {
    const rootType = exeContext.schema.getRootType(operation.operation);
    if (rootType == null) {
        throw new _GraphQLError.GraphQLError(`Schema is not configured to execute ${operation.operation} operation.`, {
            nodes: operation
        });
    }
    const rootFields = (0, _collectFields.collectFields)(exeContext.schema, exeContext.fragments, exeContext.variableValues, rootType, operation.selectionSet);
    const path = undefined;
    switch(operation.operation){
        case _ast.OperationTypeNode.QUERY:
            return executeFields(exeContext, rootType, rootValue, path, rootFields);
        case _ast.OperationTypeNode.MUTATION:
            return executeFieldsSerially(exeContext, rootType, rootValue, path, rootFields);
        case _ast.OperationTypeNode.SUBSCRIPTION:
            // TODO: deprecate `subscribe` and move all logic here
            // Temporary solution until we finish merging execute and subscribe together
            return executeFields(exeContext, rootType, rootValue, path, rootFields);
    }
}
/**
 * Implements the "Executing selection sets" section of the spec
 * for fields that must be executed serially.
 */ function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
    return (0, _promiseReduce.promiseReduce)(fields.entries(), (results, [responseName, fieldNodes])=>{
        const fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
        const result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
        if (result === undefined) {
            return results;
        }
        if ((0, _isPromise.isPromise)(result)) {
            return result.then((resolvedResult)=>{
                results[responseName] = resolvedResult;
                return results;
            });
        }
        results[responseName] = result;
        return results;
    }, Object.create(null));
}
/**
 * Implements the "Executing selection sets" section of the spec
 * for fields that may be executed in parallel.
 */ function executeFields(exeContext, parentType, sourceValue, path, fields) {
    const results = Object.create(null);
    let containsPromise = false;
    try {
        for (const [responseName, fieldNodes] of fields.entries()){
            const fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
            const result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
            if (result !== undefined) {
                results[responseName] = result;
                if ((0, _isPromise.isPromise)(result)) {
                    containsPromise = true;
                }
            }
        }
    } catch (error) {
        if (containsPromise) {
            // Ensure that any promises returned by other fields are handled, as they may also reject.
            return (0, _promiseForObject.promiseForObject)(results).finally(()=>{
                throw error;
            });
        }
        throw error;
    } // If there are no promises, we can just return the object
    if (!containsPromise) {
        return results;
    } // Otherwise, results is a map from field name to the result of resolving that
    // field, which is possibly a promise. Return a promise that will return this
    // same map, but with any promises replaced with the values they resolved to.
    return (0, _promiseForObject.promiseForObject)(results);
}
/**
 * Implements the "Executing fields" section of the spec
 * In particular, this function figures out the value that the field returns by
 * calling its resolve function, then calls completeValue to complete promises,
 * serialize scalars, or execute the sub-selection-set for objects.
 */ function executeField(exeContext, parentType, source, fieldNodes, path) {
    var _fieldDef$resolve;
    const fieldDef = getFieldDef(exeContext.schema, parentType, fieldNodes[0]);
    if (!fieldDef) {
        return;
    }
    const returnType = fieldDef.type;
    const resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
    const info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal or abrupt (error).
    try {
        // Build a JS object of arguments from the field.arguments AST, using the
        // variables scope to fulfill any variable references.
        // TODO: find a way to memoize, in case this field is within a List type.
        const args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
        // is provided to every resolve function within an execution. It is commonly
        // used to represent an authenticated user, or request-specific caches.
        const contextValue = exeContext.contextValue;
        const result = resolveFn(source, args, contextValue, info);
        let completed;
        if ((0, _isPromise.isPromise)(result)) {
            completed = result.then((resolved)=>completeValue(exeContext, returnType, fieldNodes, info, path, resolved));
        } else {
            completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
        }
        if ((0, _isPromise.isPromise)(completed)) {
            // Note: we don't rely on a `catch` method, but we do expect "thenable"
            // to take a second callback for the error case.
            return completed.then(undefined, (rawError)=>{
                const error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(path));
                return handleFieldError(error, returnType, exeContext);
            });
        }
        return completed;
    } catch (rawError) {
        const error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(path));
        return handleFieldError(error, returnType, exeContext);
    }
}
/**
 * @internal
 */ function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
    // The resolve function's optional fourth argument is a collection of
    // information about the current execution state.
    return {
        fieldName: fieldDef.name,
        fieldNodes,
        returnType: fieldDef.type,
        parentType,
        path,
        schema: exeContext.schema,
        fragments: exeContext.fragments,
        rootValue: exeContext.rootValue,
        operation: exeContext.operation,
        variableValues: exeContext.variableValues
    };
}
function handleFieldError(error, returnType, exeContext) {
    // If the field type is non-nullable, then it is resolved without any
    // protection from errors, however it still properly locates the error.
    if ((0, _definition.isNonNullType)(returnType)) {
        throw error;
    } // Otherwise, error protection is applied, logging the error and resolving
    // a null value for this field if one is encountered.
    exeContext.errors.push(error);
    return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Value Completion" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by executing all sub-selections.
 */ function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
    // If result is an Error, throw a located error.
    if (result instanceof Error) {
        throw result;
    } // If field type is NonNull, complete for inner type, and throw field error
    // if result is null.
    if ((0, _definition.isNonNullType)(returnType)) {
        const completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
        if (completed === null) {
            throw new Error(`Cannot return null for non-nullable field ${info.parentType.name}.${info.fieldName}.`);
        }
        return completed;
    } // If result value is null or undefined then return null.
    if (result == null) {
        return null;
    } // If field type is List, complete each item in the list with the inner type
    if ((0, _definition.isListType)(returnType)) {
        return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
    } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
    // returning null if serialization is not possible.
    if ((0, _definition.isLeafType)(returnType)) {
        return completeLeafValue(returnType, result);
    } // If field type is an abstract type, Interface or Union, determine the
    // runtime Object type and complete for that type.
    if ((0, _definition.isAbstractType)(returnType)) {
        return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
    } // If field type is Object, execute and complete all sub-selections.
    if ((0, _definition.isObjectType)(returnType)) {
        return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
    }
    /* c8 ignore next 6 */ // Not reachable, all possible output types have been considered.
     false || (0, _invariant.invariant)(false, "Cannot complete value of unexpected output type: " + (0, _inspect.inspect)(returnType));
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */ function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
    if (!(0, _isIterableObject.isIterableObject)(result)) {
        throw new _GraphQLError.GraphQLError(`Expected Iterable, but did not find one for field "${info.parentType.name}.${info.fieldName}".`);
    } // This is specified as a simple map, however we're optimizing the path
    // where the list contains no Promises by avoiding creating another Promise.
    const itemType = returnType.ofType;
    let containsPromise = false;
    const completedResults = Array.from(result, (item, index)=>{
        // No need to modify the info object containing the path,
        // since from here on it is not ever accessed by resolver functions.
        const itemPath = (0, _Path.addPath)(path, index, undefined);
        try {
            let completedItem;
            if ((0, _isPromise.isPromise)(item)) {
                completedItem = item.then((resolved)=>completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved));
            } else {
                completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item);
            }
            if ((0, _isPromise.isPromise)(completedItem)) {
                containsPromise = true; // Note: we don't rely on a `catch` method, but we do expect "thenable"
                // to take a second callback for the error case.
                return completedItem.then(undefined, (rawError)=>{
                    const error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(itemPath));
                    return handleFieldError(error, itemType, exeContext);
                });
            }
            return completedItem;
        } catch (rawError) {
            const error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(itemPath));
            return handleFieldError(error, itemType, exeContext);
        }
    });
    return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */ function completeLeafValue(returnType, result) {
    const serializedResult = returnType.serialize(result);
    if (serializedResult == null) {
        throw new Error(`Expected \`${(0, _inspect.inspect)(returnType)}.serialize(${(0, _inspect.inspect)(result)})\` to ` + `return non-nullable value, returned: ${(0, _inspect.inspect)(serializedResult)}`);
    }
    return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */ function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
    var _returnType$resolveTy;
    const resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
    const contextValue = exeContext.contextValue;
    const runtimeType = resolveTypeFn(result, contextValue, info, returnType);
    if ((0, _isPromise.isPromise)(runtimeType)) {
        return runtimeType.then((resolvedRuntimeType)=>completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result));
    }
    return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}
function ensureValidRuntimeType(runtimeTypeName, exeContext, returnType, fieldNodes, info, result) {
    if (runtimeTypeName == null) {
        throw new _GraphQLError.GraphQLError(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}". Either the "${returnType.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, fieldNodes);
    } // releases before 16.0.0 supported returning `GraphQLObjectType` from `resolveType`
    // TODO: remove in 17.0.0 release
    if ((0, _definition.isObjectType)(runtimeTypeName)) {
        throw new _GraphQLError.GraphQLError("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
    }
    if (typeof runtimeTypeName !== "string") {
        throw new _GraphQLError.GraphQLError(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}" with ` + `value ${(0, _inspect.inspect)(result)}, received "${(0, _inspect.inspect)(runtimeTypeName)}".`);
    }
    const runtimeType = exeContext.schema.getType(runtimeTypeName);
    if (runtimeType == null) {
        throw new _GraphQLError.GraphQLError(`Abstract type "${returnType.name}" was resolved to a type "${runtimeTypeName}" that does not exist inside the schema.`, {
            nodes: fieldNodes
        });
    }
    if (!(0, _definition.isObjectType)(runtimeType)) {
        throw new _GraphQLError.GraphQLError(`Abstract type "${returnType.name}" was resolved to a non-object type "${runtimeTypeName}".`, {
            nodes: fieldNodes
        });
    }
    if (!exeContext.schema.isSubType(returnType, runtimeType)) {
        throw new _GraphQLError.GraphQLError(`Runtime Object type "${runtimeType.name}" is not a possible type for "${returnType.name}".`, {
            nodes: fieldNodes
        });
    }
    return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */ function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
    // Collect sub-fields to execute to complete this value.
    const subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes); // If there is an isTypeOf predicate function, call it with the
    // current result. If isTypeOf returns false, then raise an error rather
    // than continuing execution.
    if (returnType.isTypeOf) {
        const isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
        if ((0, _isPromise.isPromise)(isTypeOf)) {
            return isTypeOf.then((resolvedIsTypeOf)=>{
                if (!resolvedIsTypeOf) {
                    throw invalidReturnTypeError(returnType, result, fieldNodes);
                }
                return executeFields(exeContext, returnType, result, path, subFieldNodes);
            });
        }
        if (!isTypeOf) {
            throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
    }
    return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
function invalidReturnTypeError(returnType, result, fieldNodes) {
    return new _GraphQLError.GraphQLError(`Expected value of type "${returnType.name}" but got: ${(0, _inspect.inspect)(result)}.`, {
        nodes: fieldNodes
    });
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */ const defaultTypeResolver = function(value, contextValue, info, abstractType) {
    // First, look for `__typename`.
    if ((0, _isObjectLike.isObjectLike)(value) && typeof value.__typename === "string") {
        return value.__typename;
    } // Otherwise, test each possible type.
    const possibleTypes = info.schema.getPossibleTypes(abstractType);
    const promisedIsTypeOfResults = [];
    for(let i = 0; i < possibleTypes.length; i++){
        const type = possibleTypes[i];
        if (type.isTypeOf) {
            const isTypeOfResult = type.isTypeOf(value, contextValue, info);
            if ((0, _isPromise.isPromise)(isTypeOfResult)) {
                promisedIsTypeOfResults[i] = isTypeOfResult;
            } else if (isTypeOfResult) {
                return type.name;
            }
        }
    }
    if (promisedIsTypeOfResults.length) {
        return Promise.all(promisedIsTypeOfResults).then((isTypeOfResults)=>{
            for(let i = 0; i < isTypeOfResults.length; i++){
                if (isTypeOfResults[i]) {
                    return possibleTypes[i].name;
                }
            }
        });
    }
};
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */ exports.defaultTypeResolver = defaultTypeResolver;
const defaultFieldResolver = function(source, args, contextValue, info) {
    // ensure source is a value for which property access is acceptable.
    if ((0, _isObjectLike.isObjectLike)(source) || typeof source === "function") {
        const property = source[info.fieldName];
        if (typeof property === "function") {
            return source[info.fieldName](args, contextValue, info);
        }
        return property;
    }
};
/**
 * This method looks up the field on the given type definition.
 * It has special casing for the three introspection fields,
 * __schema, __type and __typename. __typename is special because
 * it can always be queried as a field, even in situations where no
 * other fields are allowed, like on a Union. __schema and __type
 * could get automatically added to the query type, but that would
 * require mutating type definitions, which would cause issues.
 *
 * @internal
 */ exports.defaultFieldResolver = defaultFieldResolver;
function getFieldDef(schema, parentType, fieldNode) {
    const fieldName = fieldNode.name.value;
    if (fieldName === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.SchemaMetaFieldDef;
    } else if (fieldName === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.TypeMetaFieldDef;
    } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
        return _introspection.TypeNameMetaFieldDef;
    }
    return parentType.getFields()[fieldName];
}


/***/ }),

/***/ 4251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSourceEventStream", ({
    enumerable: true,
    get: function() {
        return _subscribe.createSourceEventStream;
    }
}));
Object.defineProperty(exports, "defaultFieldResolver", ({
    enumerable: true,
    get: function() {
        return _execute.defaultFieldResolver;
    }
}));
Object.defineProperty(exports, "defaultTypeResolver", ({
    enumerable: true,
    get: function() {
        return _execute.defaultTypeResolver;
    }
}));
Object.defineProperty(exports, "execute", ({
    enumerable: true,
    get: function() {
        return _execute.execute;
    }
}));
Object.defineProperty(exports, "executeSync", ({
    enumerable: true,
    get: function() {
        return _execute.executeSync;
    }
}));
Object.defineProperty(exports, "getArgumentValues", ({
    enumerable: true,
    get: function() {
        return _values.getArgumentValues;
    }
}));
Object.defineProperty(exports, "getDirectiveValues", ({
    enumerable: true,
    get: function() {
        return _values.getDirectiveValues;
    }
}));
Object.defineProperty(exports, "getVariableValues", ({
    enumerable: true,
    get: function() {
        return _values.getVariableValues;
    }
}));
Object.defineProperty(exports, "responsePathAsArray", ({
    enumerable: true,
    get: function() {
        return _Path.pathToArray;
    }
}));
Object.defineProperty(exports, "subscribe", ({
    enumerable: true,
    get: function() {
        return _subscribe.subscribe;
    }
}));
var _Path = __webpack_require__(9053);
var _execute = __webpack_require__(3551);
var _subscribe = __webpack_require__(8788);
var _values = __webpack_require__(1669);


/***/ }),

/***/ 2038:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mapAsyncIterator = mapAsyncIterator;
/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */ function mapAsyncIterator(iterable, callback) {
    const iterator = iterable[Symbol.asyncIterator]();
    async function mapResult(result) {
        if (result.done) {
            return result;
        }
        try {
            return {
                value: await callback(result.value),
                done: false
            };
        } catch (error) {
            /* c8 ignore start */ // FIXME: add test case
            if (typeof iterator.return === "function") {
                try {
                    await iterator.return();
                } catch (_e) {
                /* ignore error */ }
            }
            throw error;
        /* c8 ignore stop */ }
    }
    return {
        async next () {
            return mapResult(await iterator.next());
        },
        async return () {
            // If iterator.return() does not exist, then type R must be undefined.
            return typeof iterator.return === "function" ? mapResult(await iterator.return()) : {
                value: undefined,
                done: true
            };
        },
        async throw (error) {
            if (typeof iterator.throw === "function") {
                return mapResult(await iterator.throw(error));
            }
            throw error;
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
}


/***/ }),

/***/ 8788:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createSourceEventStream = createSourceEventStream;
exports.subscribe = subscribe;
var _devAssert = __webpack_require__(6158);
var _inspect = __webpack_require__(893);
var _isAsyncIterable = __webpack_require__(4069);
var _Path = __webpack_require__(9053);
var _GraphQLError = __webpack_require__(6042);
var _locatedError = __webpack_require__(8710);
var _collectFields = __webpack_require__(2480);
var _execute = __webpack_require__(3551);
var _mapAsyncIterator = __webpack_require__(2038);
var _values = __webpack_require__(1669);
/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns a Promise which resolves to either an AsyncIterator (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to an AsyncIterator, which
 * yields a stream of ExecutionResults representing the response stream.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */ async function subscribe(args) {
    // Temporary for v15 to v16 migration. Remove in v17
    arguments.length < 2 || (0, _devAssert.devAssert)(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    const resultOrStream = await createSourceEventStream(args);
    if (!(0, _isAsyncIterable.isAsyncIterable)(resultOrStream)) {
        return resultOrStream;
    } // For each payload yielded from a subscription, map it over the normal
    // GraphQL `execute` function, with `payload` as the rootValue.
    // This implements the "MapSourceToResponseEvent" algorithm described in
    // the GraphQL specification. The `execute` function provides the
    // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
    // "ExecuteQuery" algorithm, for which `execute` is also used.
    const mapSourceToResponse = (payload)=>(0, _execute.execute)({
            ...args,
            rootValue: payload
        }); // Map every source value to a ExecutionResult value as described above.
    return (0, _mapAsyncIterator.mapAsyncIterator)(resultOrStream, mapSourceToResponse);
}
function toNormalizedArgs(args) {
    const firstArg = args[0];
    if (firstArg && "document" in firstArg) {
        return firstArg;
    }
    return {
        schema: firstArg,
        // FIXME: when underlying TS bug fixed, see https://github.com/microsoft/TypeScript/issues/31613
        document: args[1],
        rootValue: args[2],
        contextValue: args[3],
        variableValues: args[4],
        operationName: args[5],
        subscribeFieldResolver: args[6]
    };
}
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise which resolves to either an AsyncIterable (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to the AsyncIterable for the
 * event stream returned by the resolver.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */ async function createSourceEventStream(...rawArgs) {
    const args = toNormalizedArgs(rawArgs);
    const { schema, document, variableValues } = args; // If arguments are missing or incorrectly typed, this is an internal
    // developer mistake which should throw an early error.
    (0, _execute.assertValidExecutionArguments)(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
    // a "Response" with only errors is returned.
    const exeContext = (0, _execute.buildExecutionContext)(args); // Return early errors if execution context failed.
    if (!("schema" in exeContext)) {
        return {
            errors: exeContext
        };
    }
    try {
        const eventStream = await executeSubscription(exeContext); // Assert field returned an event stream, otherwise yield an error.
        if (!(0, _isAsyncIterable.isAsyncIterable)(eventStream)) {
            throw new Error("Subscription field must return Async Iterable. " + `Received: ${(0, _inspect.inspect)(eventStream)}.`);
        }
        return eventStream;
    } catch (error) {
        // If it GraphQLError, report it as an ExecutionResult, containing only errors and no data.
        // Otherwise treat the error as a system-class error and re-throw it.
        if (error instanceof _GraphQLError.GraphQLError) {
            return {
                errors: [
                    error
                ]
            };
        }
        throw error;
    }
}
async function executeSubscription(exeContext) {
    const { schema, fragments, operation, variableValues, rootValue } = exeContext;
    const rootType = schema.getSubscriptionType();
    if (rootType == null) {
        throw new _GraphQLError.GraphQLError("Schema is not configured to execute subscription operation.", {
            nodes: operation
        });
    }
    const rootFields = (0, _collectFields.collectFields)(schema, fragments, variableValues, rootType, operation.selectionSet);
    const [responseName, fieldNodes] = [
        ...rootFields.entries()
    ][0];
    const fieldDef = (0, _execute.getFieldDef)(schema, rootType, fieldNodes[0]);
    if (!fieldDef) {
        const fieldName = fieldNodes[0].name.value;
        throw new _GraphQLError.GraphQLError(`The subscription field "${fieldName}" is not defined.`, {
            nodes: fieldNodes
        });
    }
    const path = (0, _Path.addPath)(undefined, responseName, rootType.name);
    const info = (0, _execute.buildResolveInfo)(exeContext, fieldDef, fieldNodes, rootType, path);
    try {
        var _fieldDef$subscribe;
        // Implements the "ResolveFieldEventStream" algorithm from GraphQL specification.
        // It differs from "ResolveFieldValue" due to providing a different `resolveFn`.
        // Build a JS object of arguments from the field.arguments AST, using the
        // variables scope to fulfill any variable references.
        const args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], variableValues); // The resolve function's optional third argument is a context value that
        // is provided to every resolve function within an execution. It is commonly
        // used to represent an authenticated user, or request-specific caches.
        const contextValue = exeContext.contextValue; // Call the `subscribe()` resolver or the default resolver to produce an
        // AsyncIterable yielding raw payloads.
        const resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.subscribeFieldResolver;
        const eventStream = await resolveFn(rootValue, args, contextValue, info);
        if (eventStream instanceof Error) {
            throw eventStream;
        }
        return eventStream;
    } catch (error) {
        throw (0, _locatedError.locatedError)(error, fieldNodes, (0, _Path.pathToArray)(path));
    }
}


/***/ }),

/***/ 1669:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getArgumentValues = getArgumentValues;
exports.getDirectiveValues = getDirectiveValues;
exports.getVariableValues = getVariableValues;
var _inspect = __webpack_require__(893);
var _keyMap = __webpack_require__(1180);
var _printPathArray = __webpack_require__(6780);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
var _coerceInputValue = __webpack_require__(5001);
var _typeFromAST = __webpack_require__(871);
var _valueFromAST = __webpack_require__(9308);
/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */ function getVariableValues(schema, varDefNodes, inputs, options) {
    const errors = [];
    const maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors;
    try {
        const coerced = coerceVariableValues(schema, varDefNodes, inputs, (error)=>{
            if (maxErrors != null && errors.length >= maxErrors) {
                throw new _GraphQLError.GraphQLError("Too many errors processing variables, error limit reached. Execution aborted.");
            }
            errors.push(error);
        });
        if (errors.length === 0) {
            return {
                coerced
            };
        }
    } catch (error) {
        errors.push(error);
    }
    return {
        errors
    };
}
function coerceVariableValues(schema, varDefNodes, inputs, onError) {
    const coercedValues = {};
    for (const varDefNode of varDefNodes){
        const varName = varDefNode.variable.name.value;
        const varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
        if (!(0, _definition.isInputType)(varType)) {
            // Must use input types for variables. This should be caught during
            // validation, however is checked again here for safety.
            const varTypeStr = (0, _printer.print)(varDefNode.type);
            onError(new _GraphQLError.GraphQLError(`Variable "$${varName}" expected value of type "${varTypeStr}" which cannot be used as an input type.`, {
                nodes: varDefNode.type
            }));
            continue;
        }
        if (!hasOwnProperty(inputs, varName)) {
            if (varDefNode.defaultValue) {
                coercedValues[varName] = (0, _valueFromAST.valueFromAST)(varDefNode.defaultValue, varType);
            } else if ((0, _definition.isNonNullType)(varType)) {
                const varTypeStr = (0, _inspect.inspect)(varType);
                onError(new _GraphQLError.GraphQLError(`Variable "$${varName}" of required type "${varTypeStr}" was not provided.`, {
                    nodes: varDefNode
                }));
            }
            continue;
        }
        const value = inputs[varName];
        if (value === null && (0, _definition.isNonNullType)(varType)) {
            const varTypeStr = (0, _inspect.inspect)(varType);
            onError(new _GraphQLError.GraphQLError(`Variable "$${varName}" of non-null type "${varTypeStr}" must not be null.`, {
                nodes: varDefNode
            }));
            continue;
        }
        coercedValues[varName] = (0, _coerceInputValue.coerceInputValue)(value, varType, (path, invalidValue, error)=>{
            let prefix = `Variable "$${varName}" got invalid value ` + (0, _inspect.inspect)(invalidValue);
            if (path.length > 0) {
                prefix += ` at "${varName}${(0, _printPathArray.printPathArray)(path)}"`;
            }
            onError(new _GraphQLError.GraphQLError(prefix + "; " + error.message, {
                nodes: varDefNode,
                originalError: error
            }));
        });
    }
    return coercedValues;
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */ function getArgumentValues(def, node, variableValues) {
    var _node$arguments;
    const coercedValues = {}; // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ const argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
    const argNodeMap = (0, _keyMap.keyMap)(argumentNodes, (arg)=>arg.name.value);
    for (const argDef of def.args){
        const name = argDef.name;
        const argType = argDef.type;
        const argumentNode = argNodeMap[name];
        if (!argumentNode) {
            if (argDef.defaultValue !== undefined) {
                coercedValues[name] = argDef.defaultValue;
            } else if ((0, _definition.isNonNullType)(argType)) {
                throw new _GraphQLError.GraphQLError(`Argument "${name}" of required type "${(0, _inspect.inspect)(argType)}" ` + "was not provided.", {
                    nodes: node
                });
            }
            continue;
        }
        const valueNode = argumentNode.value;
        let isNull = valueNode.kind === _kinds.Kind.NULL;
        if (valueNode.kind === _kinds.Kind.VARIABLE) {
            const variableName = valueNode.name.value;
            if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
                if (argDef.defaultValue !== undefined) {
                    coercedValues[name] = argDef.defaultValue;
                } else if ((0, _definition.isNonNullType)(argType)) {
                    throw new _GraphQLError.GraphQLError(`Argument "${name}" of required type "${(0, _inspect.inspect)(argType)}" ` + `was provided the variable "$${variableName}" which was not provided a runtime value.`, {
                        nodes: valueNode
                    });
                }
                continue;
            }
            isNull = variableValues[variableName] == null;
        }
        if (isNull && (0, _definition.isNonNullType)(argType)) {
            throw new _GraphQLError.GraphQLError(`Argument "${name}" of non-null type "${(0, _inspect.inspect)(argType)}" ` + "must not be null.", {
                nodes: valueNode
            });
        }
        const coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
        if (coercedValue === undefined) {
            // Note: ValuesOfCorrectTypeRule validation should catch this before
            // execution. This is a runtime check to ensure execution does not
            // continue with an invalid argument value.
            throw new _GraphQLError.GraphQLError(`Argument "${name}" has invalid value ${(0, _printer.print)(valueNode)}.`, {
                nodes: valueNode
            });
        }
        coercedValues[name] = coercedValue;
    }
    return coercedValues;
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */ function getDirectiveValues(directiveDef, node, variableValues) {
    var _node$directives;
    const directiveNode = (_node$directives = node.directives) === null || _node$directives === void 0 ? void 0 : _node$directives.find((directive)=>directive.name.value === directiveDef.name);
    if (directiveNode) {
        return getArgumentValues(directiveDef, directiveNode, variableValues);
    }
}
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ 1402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.graphql = graphql;
exports.graphqlSync = graphqlSync;
var _devAssert = __webpack_require__(6158);
var _isPromise = __webpack_require__(2833);
var _parser = __webpack_require__(3243);
var _validate = __webpack_require__(2419);
var _validate2 = __webpack_require__(7887);
var _execute = __webpack_require__(3551);
function graphql(args) {
    // Always return a Promise for a consistent API.
    return new Promise((resolve)=>resolve(graphqlImpl(args)));
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */ function graphqlSync(args) {
    const result = graphqlImpl(args); // Assert that the execution was synchronous.
    if ((0, _isPromise.isPromise)(result)) {
        throw new Error("GraphQL execution failed to complete synchronously.");
    }
    return result;
}
function graphqlImpl(args) {
    // Temporary for v15 to v16 migration. Remove in v17
    arguments.length < 2 || (0, _devAssert.devAssert)(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    const { schema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver } = args; // Validate Schema
    const schemaValidationErrors = (0, _validate.validateSchema)(schema);
    if (schemaValidationErrors.length > 0) {
        return {
            errors: schemaValidationErrors
        };
    } // Parse
    let document;
    try {
        document = (0, _parser.parse)(source);
    } catch (syntaxError) {
        return {
            errors: [
                syntaxError
            ]
        };
    } // Validate
    const validationErrors = (0, _validate2.validate)(schema, document);
    if (validationErrors.length > 0) {
        return {
            errors: validationErrors
        };
    } // Execute
    return (0, _execute.execute)({
        schema,
        document,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
    });
}


/***/ }),

/***/ 3902:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "BREAK", ({
    enumerable: true,
    get: function() {
        return _index2.BREAK;
    }
}));
Object.defineProperty(exports, "BreakingChangeType", ({
    enumerable: true,
    get: function() {
        return _index6.BreakingChangeType;
    }
}));
Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", ({
    enumerable: true,
    get: function() {
        return _index.DEFAULT_DEPRECATION_REASON;
    }
}));
Object.defineProperty(exports, "DangerousChangeType", ({
    enumerable: true,
    get: function() {
        return _index6.DangerousChangeType;
    }
}));
Object.defineProperty(exports, "DirectiveLocation", ({
    enumerable: true,
    get: function() {
        return _index2.DirectiveLocation;
    }
}));
Object.defineProperty(exports, "ExecutableDefinitionsRule", ({
    enumerable: true,
    get: function() {
        return _index4.ExecutableDefinitionsRule;
    }
}));
Object.defineProperty(exports, "FieldsOnCorrectTypeRule", ({
    enumerable: true,
    get: function() {
        return _index4.FieldsOnCorrectTypeRule;
    }
}));
Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", ({
    enumerable: true,
    get: function() {
        return _index4.FragmentsOnCompositeTypesRule;
    }
}));
Object.defineProperty(exports, "GRAPHQL_MAX_INT", ({
    enumerable: true,
    get: function() {
        return _index.GRAPHQL_MAX_INT;
    }
}));
Object.defineProperty(exports, "GRAPHQL_MIN_INT", ({
    enumerable: true,
    get: function() {
        return _index.GRAPHQL_MIN_INT;
    }
}));
Object.defineProperty(exports, "GraphQLBoolean", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLBoolean;
    }
}));
Object.defineProperty(exports, "GraphQLDeprecatedDirective", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLDeprecatedDirective;
    }
}));
Object.defineProperty(exports, "GraphQLDirective", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLDirective;
    }
}));
Object.defineProperty(exports, "GraphQLEnumType", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLEnumType;
    }
}));
Object.defineProperty(exports, "GraphQLError", ({
    enumerable: true,
    get: function() {
        return _index5.GraphQLError;
    }
}));
Object.defineProperty(exports, "GraphQLFloat", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLFloat;
    }
}));
Object.defineProperty(exports, "GraphQLID", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLID;
    }
}));
Object.defineProperty(exports, "GraphQLIncludeDirective", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLIncludeDirective;
    }
}));
Object.defineProperty(exports, "GraphQLInputObjectType", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLInputObjectType;
    }
}));
Object.defineProperty(exports, "GraphQLInt", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLInt;
    }
}));
Object.defineProperty(exports, "GraphQLInterfaceType", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLInterfaceType;
    }
}));
Object.defineProperty(exports, "GraphQLList", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLList;
    }
}));
Object.defineProperty(exports, "GraphQLNonNull", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLNonNull;
    }
}));
Object.defineProperty(exports, "GraphQLObjectType", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLObjectType;
    }
}));
Object.defineProperty(exports, "GraphQLOneOfDirective", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLOneOfDirective;
    }
}));
Object.defineProperty(exports, "GraphQLScalarType", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLScalarType;
    }
}));
Object.defineProperty(exports, "GraphQLSchema", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLSchema;
    }
}));
Object.defineProperty(exports, "GraphQLSkipDirective", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLSkipDirective;
    }
}));
Object.defineProperty(exports, "GraphQLSpecifiedByDirective", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLSpecifiedByDirective;
    }
}));
Object.defineProperty(exports, "GraphQLString", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLString;
    }
}));
Object.defineProperty(exports, "GraphQLUnionType", ({
    enumerable: true,
    get: function() {
        return _index.GraphQLUnionType;
    }
}));
Object.defineProperty(exports, "Kind", ({
    enumerable: true,
    get: function() {
        return _index2.Kind;
    }
}));
Object.defineProperty(exports, "KnownArgumentNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.KnownArgumentNamesRule;
    }
}));
Object.defineProperty(exports, "KnownDirectivesRule", ({
    enumerable: true,
    get: function() {
        return _index4.KnownDirectivesRule;
    }
}));
Object.defineProperty(exports, "KnownFragmentNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.KnownFragmentNamesRule;
    }
}));
Object.defineProperty(exports, "KnownTypeNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.KnownTypeNamesRule;
    }
}));
Object.defineProperty(exports, "Lexer", ({
    enumerable: true,
    get: function() {
        return _index2.Lexer;
    }
}));
Object.defineProperty(exports, "Location", ({
    enumerable: true,
    get: function() {
        return _index2.Location;
    }
}));
Object.defineProperty(exports, "LoneAnonymousOperationRule", ({
    enumerable: true,
    get: function() {
        return _index4.LoneAnonymousOperationRule;
    }
}));
Object.defineProperty(exports, "LoneSchemaDefinitionRule", ({
    enumerable: true,
    get: function() {
        return _index4.LoneSchemaDefinitionRule;
    }
}));
Object.defineProperty(exports, "MaxIntrospectionDepthRule", ({
    enumerable: true,
    get: function() {
        return _index4.MaxIntrospectionDepthRule;
    }
}));
Object.defineProperty(exports, "NoDeprecatedCustomRule", ({
    enumerable: true,
    get: function() {
        return _index4.NoDeprecatedCustomRule;
    }
}));
Object.defineProperty(exports, "NoFragmentCyclesRule", ({
    enumerable: true,
    get: function() {
        return _index4.NoFragmentCyclesRule;
    }
}));
Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", ({
    enumerable: true,
    get: function() {
        return _index4.NoSchemaIntrospectionCustomRule;
    }
}));
Object.defineProperty(exports, "NoUndefinedVariablesRule", ({
    enumerable: true,
    get: function() {
        return _index4.NoUndefinedVariablesRule;
    }
}));
Object.defineProperty(exports, "NoUnusedFragmentsRule", ({
    enumerable: true,
    get: function() {
        return _index4.NoUnusedFragmentsRule;
    }
}));
Object.defineProperty(exports, "NoUnusedVariablesRule", ({
    enumerable: true,
    get: function() {
        return _index4.NoUnusedVariablesRule;
    }
}));
Object.defineProperty(exports, "OperationTypeNode", ({
    enumerable: true,
    get: function() {
        return _index2.OperationTypeNode;
    }
}));
Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", ({
    enumerable: true,
    get: function() {
        return _index4.OverlappingFieldsCanBeMergedRule;
    }
}));
Object.defineProperty(exports, "PossibleFragmentSpreadsRule", ({
    enumerable: true,
    get: function() {
        return _index4.PossibleFragmentSpreadsRule;
    }
}));
Object.defineProperty(exports, "PossibleTypeExtensionsRule", ({
    enumerable: true,
    get: function() {
        return _index4.PossibleTypeExtensionsRule;
    }
}));
Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", ({
    enumerable: true,
    get: function() {
        return _index4.ProvidedRequiredArgumentsRule;
    }
}));
Object.defineProperty(exports, "ScalarLeafsRule", ({
    enumerable: true,
    get: function() {
        return _index4.ScalarLeafsRule;
    }
}));
Object.defineProperty(exports, "SchemaMetaFieldDef", ({
    enumerable: true,
    get: function() {
        return _index.SchemaMetaFieldDef;
    }
}));
Object.defineProperty(exports, "SingleFieldSubscriptionsRule", ({
    enumerable: true,
    get: function() {
        return _index4.SingleFieldSubscriptionsRule;
    }
}));
Object.defineProperty(exports, "Source", ({
    enumerable: true,
    get: function() {
        return _index2.Source;
    }
}));
Object.defineProperty(exports, "Token", ({
    enumerable: true,
    get: function() {
        return _index2.Token;
    }
}));
Object.defineProperty(exports, "TokenKind", ({
    enumerable: true,
    get: function() {
        return _index2.TokenKind;
    }
}));
Object.defineProperty(exports, "TypeInfo", ({
    enumerable: true,
    get: function() {
        return _index6.TypeInfo;
    }
}));
Object.defineProperty(exports, "TypeKind", ({
    enumerable: true,
    get: function() {
        return _index.TypeKind;
    }
}));
Object.defineProperty(exports, "TypeMetaFieldDef", ({
    enumerable: true,
    get: function() {
        return _index.TypeMetaFieldDef;
    }
}));
Object.defineProperty(exports, "TypeNameMetaFieldDef", ({
    enumerable: true,
    get: function() {
        return _index.TypeNameMetaFieldDef;
    }
}));
Object.defineProperty(exports, "UniqueArgumentDefinitionNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueArgumentDefinitionNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueArgumentNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueArgumentNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueDirectiveNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueDirectiveNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueDirectivesPerLocationRule;
    }
}));
Object.defineProperty(exports, "UniqueEnumValueNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueEnumValueNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueFieldDefinitionNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueFragmentNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueFragmentNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueInputFieldNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueInputFieldNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueOperationNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueOperationNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueOperationTypesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueOperationTypesRule;
    }
}));
Object.defineProperty(exports, "UniqueTypeNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueTypeNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueVariableNamesRule", ({
    enumerable: true,
    get: function() {
        return _index4.UniqueVariableNamesRule;
    }
}));
Object.defineProperty(exports, "ValidationContext", ({
    enumerable: true,
    get: function() {
        return _index4.ValidationContext;
    }
}));
Object.defineProperty(exports, "ValuesOfCorrectTypeRule", ({
    enumerable: true,
    get: function() {
        return _index4.ValuesOfCorrectTypeRule;
    }
}));
Object.defineProperty(exports, "VariablesAreInputTypesRule", ({
    enumerable: true,
    get: function() {
        return _index4.VariablesAreInputTypesRule;
    }
}));
Object.defineProperty(exports, "VariablesInAllowedPositionRule", ({
    enumerable: true,
    get: function() {
        return _index4.VariablesInAllowedPositionRule;
    }
}));
Object.defineProperty(exports, "__Directive", ({
    enumerable: true,
    get: function() {
        return _index.__Directive;
    }
}));
Object.defineProperty(exports, "__DirectiveLocation", ({
    enumerable: true,
    get: function() {
        return _index.__DirectiveLocation;
    }
}));
Object.defineProperty(exports, "__EnumValue", ({
    enumerable: true,
    get: function() {
        return _index.__EnumValue;
    }
}));
Object.defineProperty(exports, "__Field", ({
    enumerable: true,
    get: function() {
        return _index.__Field;
    }
}));
Object.defineProperty(exports, "__InputValue", ({
    enumerable: true,
    get: function() {
        return _index.__InputValue;
    }
}));
Object.defineProperty(exports, "__Schema", ({
    enumerable: true,
    get: function() {
        return _index.__Schema;
    }
}));
Object.defineProperty(exports, "__Type", ({
    enumerable: true,
    get: function() {
        return _index.__Type;
    }
}));
Object.defineProperty(exports, "__TypeKind", ({
    enumerable: true,
    get: function() {
        return _index.__TypeKind;
    }
}));
Object.defineProperty(exports, "assertAbstractType", ({
    enumerable: true,
    get: function() {
        return _index.assertAbstractType;
    }
}));
Object.defineProperty(exports, "assertCompositeType", ({
    enumerable: true,
    get: function() {
        return _index.assertCompositeType;
    }
}));
Object.defineProperty(exports, "assertDirective", ({
    enumerable: true,
    get: function() {
        return _index.assertDirective;
    }
}));
Object.defineProperty(exports, "assertEnumType", ({
    enumerable: true,
    get: function() {
        return _index.assertEnumType;
    }
}));
Object.defineProperty(exports, "assertEnumValueName", ({
    enumerable: true,
    get: function() {
        return _index.assertEnumValueName;
    }
}));
Object.defineProperty(exports, "assertInputObjectType", ({
    enumerable: true,
    get: function() {
        return _index.assertInputObjectType;
    }
}));
Object.defineProperty(exports, "assertInputType", ({
    enumerable: true,
    get: function() {
        return _index.assertInputType;
    }
}));
Object.defineProperty(exports, "assertInterfaceType", ({
    enumerable: true,
    get: function() {
        return _index.assertInterfaceType;
    }
}));
Object.defineProperty(exports, "assertLeafType", ({
    enumerable: true,
    get: function() {
        return _index.assertLeafType;
    }
}));
Object.defineProperty(exports, "assertListType", ({
    enumerable: true,
    get: function() {
        return _index.assertListType;
    }
}));
Object.defineProperty(exports, "assertName", ({
    enumerable: true,
    get: function() {
        return _index.assertName;
    }
}));
Object.defineProperty(exports, "assertNamedType", ({
    enumerable: true,
    get: function() {
        return _index.assertNamedType;
    }
}));
Object.defineProperty(exports, "assertNonNullType", ({
    enumerable: true,
    get: function() {
        return _index.assertNonNullType;
    }
}));
Object.defineProperty(exports, "assertNullableType", ({
    enumerable: true,
    get: function() {
        return _index.assertNullableType;
    }
}));
Object.defineProperty(exports, "assertObjectType", ({
    enumerable: true,
    get: function() {
        return _index.assertObjectType;
    }
}));
Object.defineProperty(exports, "assertOutputType", ({
    enumerable: true,
    get: function() {
        return _index.assertOutputType;
    }
}));
Object.defineProperty(exports, "assertScalarType", ({
    enumerable: true,
    get: function() {
        return _index.assertScalarType;
    }
}));
Object.defineProperty(exports, "assertSchema", ({
    enumerable: true,
    get: function() {
        return _index.assertSchema;
    }
}));
Object.defineProperty(exports, "assertType", ({
    enumerable: true,
    get: function() {
        return _index.assertType;
    }
}));
Object.defineProperty(exports, "assertUnionType", ({
    enumerable: true,
    get: function() {
        return _index.assertUnionType;
    }
}));
Object.defineProperty(exports, "assertValidName", ({
    enumerable: true,
    get: function() {
        return _index6.assertValidName;
    }
}));
Object.defineProperty(exports, "assertValidSchema", ({
    enumerable: true,
    get: function() {
        return _index.assertValidSchema;
    }
}));
Object.defineProperty(exports, "assertWrappingType", ({
    enumerable: true,
    get: function() {
        return _index.assertWrappingType;
    }
}));
Object.defineProperty(exports, "astFromValue", ({
    enumerable: true,
    get: function() {
        return _index6.astFromValue;
    }
}));
Object.defineProperty(exports, "buildASTSchema", ({
    enumerable: true,
    get: function() {
        return _index6.buildASTSchema;
    }
}));
Object.defineProperty(exports, "buildClientSchema", ({
    enumerable: true,
    get: function() {
        return _index6.buildClientSchema;
    }
}));
Object.defineProperty(exports, "buildSchema", ({
    enumerable: true,
    get: function() {
        return _index6.buildSchema;
    }
}));
Object.defineProperty(exports, "coerceInputValue", ({
    enumerable: true,
    get: function() {
        return _index6.coerceInputValue;
    }
}));
Object.defineProperty(exports, "concatAST", ({
    enumerable: true,
    get: function() {
        return _index6.concatAST;
    }
}));
Object.defineProperty(exports, "createSourceEventStream", ({
    enumerable: true,
    get: function() {
        return _index3.createSourceEventStream;
    }
}));
Object.defineProperty(exports, "defaultFieldResolver", ({
    enumerable: true,
    get: function() {
        return _index3.defaultFieldResolver;
    }
}));
Object.defineProperty(exports, "defaultTypeResolver", ({
    enumerable: true,
    get: function() {
        return _index3.defaultTypeResolver;
    }
}));
Object.defineProperty(exports, "doTypesOverlap", ({
    enumerable: true,
    get: function() {
        return _index6.doTypesOverlap;
    }
}));
Object.defineProperty(exports, "execute", ({
    enumerable: true,
    get: function() {
        return _index3.execute;
    }
}));
Object.defineProperty(exports, "executeSync", ({
    enumerable: true,
    get: function() {
        return _index3.executeSync;
    }
}));
Object.defineProperty(exports, "extendSchema", ({
    enumerable: true,
    get: function() {
        return _index6.extendSchema;
    }
}));
Object.defineProperty(exports, "findBreakingChanges", ({
    enumerable: true,
    get: function() {
        return _index6.findBreakingChanges;
    }
}));
Object.defineProperty(exports, "findDangerousChanges", ({
    enumerable: true,
    get: function() {
        return _index6.findDangerousChanges;
    }
}));
Object.defineProperty(exports, "formatError", ({
    enumerable: true,
    get: function() {
        return _index5.formatError;
    }
}));
Object.defineProperty(exports, "getArgumentValues", ({
    enumerable: true,
    get: function() {
        return _index3.getArgumentValues;
    }
}));
Object.defineProperty(exports, "getDirectiveValues", ({
    enumerable: true,
    get: function() {
        return _index3.getDirectiveValues;
    }
}));
Object.defineProperty(exports, "getEnterLeaveForKind", ({
    enumerable: true,
    get: function() {
        return _index2.getEnterLeaveForKind;
    }
}));
Object.defineProperty(exports, "getIntrospectionQuery", ({
    enumerable: true,
    get: function() {
        return _index6.getIntrospectionQuery;
    }
}));
Object.defineProperty(exports, "getLocation", ({
    enumerable: true,
    get: function() {
        return _index2.getLocation;
    }
}));
Object.defineProperty(exports, "getNamedType", ({
    enumerable: true,
    get: function() {
        return _index.getNamedType;
    }
}));
Object.defineProperty(exports, "getNullableType", ({
    enumerable: true,
    get: function() {
        return _index.getNullableType;
    }
}));
Object.defineProperty(exports, "getOperationAST", ({
    enumerable: true,
    get: function() {
        return _index6.getOperationAST;
    }
}));
Object.defineProperty(exports, "getOperationRootType", ({
    enumerable: true,
    get: function() {
        return _index6.getOperationRootType;
    }
}));
Object.defineProperty(exports, "getVariableValues", ({
    enumerable: true,
    get: function() {
        return _index3.getVariableValues;
    }
}));
Object.defineProperty(exports, "getVisitFn", ({
    enumerable: true,
    get: function() {
        return _index2.getVisitFn;
    }
}));
Object.defineProperty(exports, "graphql", ({
    enumerable: true,
    get: function() {
        return _graphql.graphql;
    }
}));
Object.defineProperty(exports, "graphqlSync", ({
    enumerable: true,
    get: function() {
        return _graphql.graphqlSync;
    }
}));
Object.defineProperty(exports, "introspectionFromSchema", ({
    enumerable: true,
    get: function() {
        return _index6.introspectionFromSchema;
    }
}));
Object.defineProperty(exports, "introspectionTypes", ({
    enumerable: true,
    get: function() {
        return _index.introspectionTypes;
    }
}));
Object.defineProperty(exports, "isAbstractType", ({
    enumerable: true,
    get: function() {
        return _index.isAbstractType;
    }
}));
Object.defineProperty(exports, "isCompositeType", ({
    enumerable: true,
    get: function() {
        return _index.isCompositeType;
    }
}));
Object.defineProperty(exports, "isConstValueNode", ({
    enumerable: true,
    get: function() {
        return _index2.isConstValueNode;
    }
}));
Object.defineProperty(exports, "isDefinitionNode", ({
    enumerable: true,
    get: function() {
        return _index2.isDefinitionNode;
    }
}));
Object.defineProperty(exports, "isDirective", ({
    enumerable: true,
    get: function() {
        return _index.isDirective;
    }
}));
Object.defineProperty(exports, "isEnumType", ({
    enumerable: true,
    get: function() {
        return _index.isEnumType;
    }
}));
Object.defineProperty(exports, "isEqualType", ({
    enumerable: true,
    get: function() {
        return _index6.isEqualType;
    }
}));
Object.defineProperty(exports, "isExecutableDefinitionNode", ({
    enumerable: true,
    get: function() {
        return _index2.isExecutableDefinitionNode;
    }
}));
Object.defineProperty(exports, "isInputObjectType", ({
    enumerable: true,
    get: function() {
        return _index.isInputObjectType;
    }
}));
Object.defineProperty(exports, "isInputType", ({
    enumerable: true,
    get: function() {
        return _index.isInputType;
    }
}));
Object.defineProperty(exports, "isInterfaceType", ({
    enumerable: true,
    get: function() {
        return _index.isInterfaceType;
    }
}));
Object.defineProperty(exports, "isIntrospectionType", ({
    enumerable: true,
    get: function() {
        return _index.isIntrospectionType;
    }
}));
Object.defineProperty(exports, "isLeafType", ({
    enumerable: true,
    get: function() {
        return _index.isLeafType;
    }
}));
Object.defineProperty(exports, "isListType", ({
    enumerable: true,
    get: function() {
        return _index.isListType;
    }
}));
Object.defineProperty(exports, "isNamedType", ({
    enumerable: true,
    get: function() {
        return _index.isNamedType;
    }
}));
Object.defineProperty(exports, "isNonNullType", ({
    enumerable: true,
    get: function() {
        return _index.isNonNullType;
    }
}));
Object.defineProperty(exports, "isNullableType", ({
    enumerable: true,
    get: function() {
        return _index.isNullableType;
    }
}));
Object.defineProperty(exports, "isObjectType", ({
    enumerable: true,
    get: function() {
        return _index.isObjectType;
    }
}));
Object.defineProperty(exports, "isOutputType", ({
    enumerable: true,
    get: function() {
        return _index.isOutputType;
    }
}));
Object.defineProperty(exports, "isRequiredArgument", ({
    enumerable: true,
    get: function() {
        return _index.isRequiredArgument;
    }
}));
Object.defineProperty(exports, "isRequiredInputField", ({
    enumerable: true,
    get: function() {
        return _index.isRequiredInputField;
    }
}));
Object.defineProperty(exports, "isScalarType", ({
    enumerable: true,
    get: function() {
        return _index.isScalarType;
    }
}));
Object.defineProperty(exports, "isSchema", ({
    enumerable: true,
    get: function() {
        return _index.isSchema;
    }
}));
Object.defineProperty(exports, "isSelectionNode", ({
    enumerable: true,
    get: function() {
        return _index2.isSelectionNode;
    }
}));
Object.defineProperty(exports, "isSpecifiedDirective", ({
    enumerable: true,
    get: function() {
        return _index.isSpecifiedDirective;
    }
}));
Object.defineProperty(exports, "isSpecifiedScalarType", ({
    enumerable: true,
    get: function() {
        return _index.isSpecifiedScalarType;
    }
}));
Object.defineProperty(exports, "isType", ({
    enumerable: true,
    get: function() {
        return _index.isType;
    }
}));
Object.defineProperty(exports, "isTypeDefinitionNode", ({
    enumerable: true,
    get: function() {
        return _index2.isTypeDefinitionNode;
    }
}));
Object.defineProperty(exports, "isTypeExtensionNode", ({
    enumerable: true,
    get: function() {
        return _index2.isTypeExtensionNode;
    }
}));
Object.defineProperty(exports, "isTypeNode", ({
    enumerable: true,
    get: function() {
        return _index2.isTypeNode;
    }
}));
Object.defineProperty(exports, "isTypeSubTypeOf", ({
    enumerable: true,
    get: function() {
        return _index6.isTypeSubTypeOf;
    }
}));
Object.defineProperty(exports, "isTypeSystemDefinitionNode", ({
    enumerable: true,
    get: function() {
        return _index2.isTypeSystemDefinitionNode;
    }
}));
Object.defineProperty(exports, "isTypeSystemExtensionNode", ({
    enumerable: true,
    get: function() {
        return _index2.isTypeSystemExtensionNode;
    }
}));
Object.defineProperty(exports, "isUnionType", ({
    enumerable: true,
    get: function() {
        return _index.isUnionType;
    }
}));
Object.defineProperty(exports, "isValidNameError", ({
    enumerable: true,
    get: function() {
        return _index6.isValidNameError;
    }
}));
Object.defineProperty(exports, "isValueNode", ({
    enumerable: true,
    get: function() {
        return _index2.isValueNode;
    }
}));
Object.defineProperty(exports, "isWrappingType", ({
    enumerable: true,
    get: function() {
        return _index.isWrappingType;
    }
}));
Object.defineProperty(exports, "lexicographicSortSchema", ({
    enumerable: true,
    get: function() {
        return _index6.lexicographicSortSchema;
    }
}));
Object.defineProperty(exports, "locatedError", ({
    enumerable: true,
    get: function() {
        return _index5.locatedError;
    }
}));
Object.defineProperty(exports, "parse", ({
    enumerable: true,
    get: function() {
        return _index2.parse;
    }
}));
Object.defineProperty(exports, "parseConstValue", ({
    enumerable: true,
    get: function() {
        return _index2.parseConstValue;
    }
}));
Object.defineProperty(exports, "parseType", ({
    enumerable: true,
    get: function() {
        return _index2.parseType;
    }
}));
Object.defineProperty(exports, "parseValue", ({
    enumerable: true,
    get: function() {
        return _index2.parseValue;
    }
}));
Object.defineProperty(exports, "print", ({
    enumerable: true,
    get: function() {
        return _index2.print;
    }
}));
Object.defineProperty(exports, "printError", ({
    enumerable: true,
    get: function() {
        return _index5.printError;
    }
}));
Object.defineProperty(exports, "printIntrospectionSchema", ({
    enumerable: true,
    get: function() {
        return _index6.printIntrospectionSchema;
    }
}));
Object.defineProperty(exports, "printLocation", ({
    enumerable: true,
    get: function() {
        return _index2.printLocation;
    }
}));
Object.defineProperty(exports, "printSchema", ({
    enumerable: true,
    get: function() {
        return _index6.printSchema;
    }
}));
Object.defineProperty(exports, "printSourceLocation", ({
    enumerable: true,
    get: function() {
        return _index2.printSourceLocation;
    }
}));
Object.defineProperty(exports, "printType", ({
    enumerable: true,
    get: function() {
        return _index6.printType;
    }
}));
Object.defineProperty(exports, "recommendedRules", ({
    enumerable: true,
    get: function() {
        return _index4.recommendedRules;
    }
}));
Object.defineProperty(exports, "resolveObjMapThunk", ({
    enumerable: true,
    get: function() {
        return _index.resolveObjMapThunk;
    }
}));
Object.defineProperty(exports, "resolveReadonlyArrayThunk", ({
    enumerable: true,
    get: function() {
        return _index.resolveReadonlyArrayThunk;
    }
}));
Object.defineProperty(exports, "responsePathAsArray", ({
    enumerable: true,
    get: function() {
        return _index3.responsePathAsArray;
    }
}));
Object.defineProperty(exports, "separateOperations", ({
    enumerable: true,
    get: function() {
        return _index6.separateOperations;
    }
}));
Object.defineProperty(exports, "specifiedDirectives", ({
    enumerable: true,
    get: function() {
        return _index.specifiedDirectives;
    }
}));
Object.defineProperty(exports, "specifiedRules", ({
    enumerable: true,
    get: function() {
        return _index4.specifiedRules;
    }
}));
Object.defineProperty(exports, "specifiedScalarTypes", ({
    enumerable: true,
    get: function() {
        return _index.specifiedScalarTypes;
    }
}));
Object.defineProperty(exports, "stripIgnoredCharacters", ({
    enumerable: true,
    get: function() {
        return _index6.stripIgnoredCharacters;
    }
}));
Object.defineProperty(exports, "subscribe", ({
    enumerable: true,
    get: function() {
        return _index3.subscribe;
    }
}));
Object.defineProperty(exports, "syntaxError", ({
    enumerable: true,
    get: function() {
        return _index5.syntaxError;
    }
}));
Object.defineProperty(exports, "typeFromAST", ({
    enumerable: true,
    get: function() {
        return _index6.typeFromAST;
    }
}));
Object.defineProperty(exports, "validate", ({
    enumerable: true,
    get: function() {
        return _index4.validate;
    }
}));
Object.defineProperty(exports, "validateSchema", ({
    enumerable: true,
    get: function() {
        return _index.validateSchema;
    }
}));
Object.defineProperty(exports, "valueFromAST", ({
    enumerable: true,
    get: function() {
        return _index6.valueFromAST;
    }
}));
Object.defineProperty(exports, "valueFromASTUntyped", ({
    enumerable: true,
    get: function() {
        return _index6.valueFromASTUntyped;
    }
}));
Object.defineProperty(exports, "version", ({
    enumerable: true,
    get: function() {
        return _version.version;
    }
}));
Object.defineProperty(exports, "versionInfo", ({
    enumerable: true,
    get: function() {
        return _version.versionInfo;
    }
}));
Object.defineProperty(exports, "visit", ({
    enumerable: true,
    get: function() {
        return _index2.visit;
    }
}));
Object.defineProperty(exports, "visitInParallel", ({
    enumerable: true,
    get: function() {
        return _index2.visitInParallel;
    }
}));
Object.defineProperty(exports, "visitWithTypeInfo", ({
    enumerable: true,
    get: function() {
        return _index6.visitWithTypeInfo;
    }
}));
var _version = __webpack_require__(5183);
var _graphql = __webpack_require__(1402);
var _index = __webpack_require__(7559);
var _index2 = __webpack_require__(2111);
var _index3 = __webpack_require__(4251);
var _index4 = __webpack_require__(6653);
var _index5 = __webpack_require__(3939);
var _index6 = __webpack_require__(5558);


/***/ }),

/***/ 9053:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addPath = addPath;
exports.pathToArray = pathToArray;
/**
 * Given a Path and a key, return a new Path containing the new key.
 */ function addPath(prev, key, typename) {
    return {
        prev,
        key,
        typename
    };
}
/**
 * Given a Path, return an Array of the path keys.
 */ function pathToArray(path) {
    const flattened = [];
    let curr = path;
    while(curr){
        flattened.push(curr.key);
        curr = curr.prev;
    }
    return flattened.reverse();
}


/***/ }),

/***/ 6158:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.devAssert = devAssert;
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message);
    }
}


/***/ }),

/***/ 3278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.didYouMean = didYouMean;
const MAX_SUGGESTIONS = 5;
/**
 * Given [ A, B, C ] return ' Did you mean A, B, or C?'.
 */ function didYouMean(firstArg, secondArg) {
    const [subMessage, suggestionsArg] = secondArg ? [
        firstArg,
        secondArg
    ] : [
        undefined,
        firstArg
    ];
    let message = " Did you mean ";
    if (subMessage) {
        message += subMessage + " ";
    }
    const suggestions = suggestionsArg.map((x)=>`"${x}"`);
    switch(suggestions.length){
        case 0:
            return "";
        case 1:
            return message + suggestions[0] + "?";
        case 2:
            return message + suggestions[0] + " or " + suggestions[1] + "?";
    }
    const selected = suggestions.slice(0, MAX_SUGGESTIONS);
    const lastItem = selected.pop();
    return message + selected.join(", ") + ", or " + lastItem + "?";
}


/***/ }),

/***/ 9374:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.groupBy = groupBy;
/**
 * Groups array items into a Map, given a function to produce grouping key.
 */ function groupBy(list, keyFn) {
    const result = new Map();
    for (const item of list){
        const key = keyFn(item);
        const group = result.get(key);
        if (group === undefined) {
            result.set(key, [
                item
            ]);
        } else {
            group.push(item);
        }
    }
    return result;
}


/***/ }),

/***/ 7026:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.identityFunc = identityFunc;
/**
 * Returns the first argument it receives.
 */ function identityFunc(x) {
    return x;
}


/***/ }),

/***/ 893:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.inspect = inspect;
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


/***/ }),

/***/ 3387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.instanceOf = void 0;
var _inspect = __webpack_require__(893);
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
            const stringifiedValue = (0, _inspect.inspect)(value);
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
exports.instanceOf = instanceOf;


/***/ }),

/***/ 2270:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.invariant = invariant;
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message != null ? message : "Unexpected invariant triggered.");
    }
}


/***/ }),

/***/ 4069:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isAsyncIterable = isAsyncIterable;
/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * implementing a `Symbol.asyncIterator` method.
 */ function isAsyncIterable(maybeAsyncIterable) {
    return typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0 ? void 0 : maybeAsyncIterable[Symbol.asyncIterator]) === "function";
}


/***/ }),

/***/ 8020:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isIterableObject = isIterableObject;
/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and implements the Iterator protocol.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if
 * an object should be iterated-over e.g. Array, Map, Set, Int8Array,
 * TypedArray, etc. but excludes string literals.
 *
 * @example
 * ```ts
 * isIterableObject([ 1, 2, 3 ]) // true
 * isIterableObject(new Map()) // true
 * isIterableObject('ABC') // false
 * isIterableObject({ key: 'value' }) // false
 * isIterableObject({ length: 1, 0: 'Alpha' }) // false
 * ```
 */ function isIterableObject(maybeIterable) {
    return typeof maybeIterable === "object" && typeof (maybeIterable === null || maybeIterable === void 0 ? void 0 : maybeIterable[Symbol.iterator]) === "function";
}


/***/ }),

/***/ 9112:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isObjectLike = isObjectLike;
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */ function isObjectLike(value) {
    return typeof value == "object" && value !== null;
}


/***/ }),

/***/ 2833:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isPromise = isPromise;
/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */ function isPromise(value) {
    return typeof (value === null || value === void 0 ? void 0 : value.then) === "function";
}


/***/ }),

/***/ 1180:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.keyMap = keyMap;
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 * ```ts
 * const phoneBook = [
 *   { name: 'Jon', num: '555-1234' },
 *   { name: 'Jenny', num: '867-5309' }
 * ]
 *
 * const entriesByName = keyMap(
 *   phoneBook,
 *   entry => entry.name
 * )
 *
 * // {
 * //   Jon: { name: 'Jon', num: '555-1234' },
 * //   Jenny: { name: 'Jenny', num: '867-5309' }
 * // }
 *
 * const jennyEntry = entriesByName['Jenny']
 *
 * // { name: 'Jenny', num: '857-6309' }
 * ```
 */ function keyMap(list, keyFn) {
    const result = Object.create(null);
    for (const item of list){
        result[keyFn(item)] = item;
    }
    return result;
}


/***/ }),

/***/ 6179:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.keyValMap = keyValMap;
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 * ```ts
 * const phoneBook = [
 *   { name: 'Jon', num: '555-1234' },
 *   { name: 'Jenny', num: '867-5309' }
 * ]
 *
 * // { Jon: '555-1234', Jenny: '867-5309' }
 * const phonesByName = keyValMap(
 *   phoneBook,
 *   entry => entry.name,
 *   entry => entry.num
 * )
 * ```
 */ function keyValMap(list, keyFn, valFn) {
    const result = Object.create(null);
    for (const item of list){
        result[keyFn(item)] = valFn(item);
    }
    return result;
}


/***/ }),

/***/ 9539:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mapValue = mapValue;
/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */ function mapValue(map, fn) {
    const result = Object.create(null);
    for (const key of Object.keys(map)){
        result[key] = fn(map[key], key);
    }
    return result;
}


/***/ }),

/***/ 9579:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.memoize3 = memoize3;
/**
 * Memoizes the provided three-argument function.
 */ function memoize3(fn) {
    let cache0;
    return function memoized(a1, a2, a3) {
        if (cache0 === undefined) {
            cache0 = new WeakMap();
        }
        let cache1 = cache0.get(a1);
        if (cache1 === undefined) {
            cache1 = new WeakMap();
            cache0.set(a1, cache1);
        }
        let cache2 = cache1.get(a2);
        if (cache2 === undefined) {
            cache2 = new WeakMap();
            cache1.set(a2, cache2);
        }
        let fnResult = cache2.get(a3);
        if (fnResult === undefined) {
            fnResult = fn(a1, a2, a3);
            cache2.set(a3, fnResult);
        }
        return fnResult;
    };
}


/***/ }),

/***/ 9170:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.naturalCompare = naturalCompare;
/**
 * Returns a number indicating whether a reference string comes before, or after,
 * or is the same as the given string in natural sort order.
 *
 * See: https://en.wikipedia.org/wiki/Natural_sort_order
 *
 */ function naturalCompare(aStr, bStr) {
    let aIndex = 0;
    let bIndex = 0;
    while(aIndex < aStr.length && bIndex < bStr.length){
        let aChar = aStr.charCodeAt(aIndex);
        let bChar = bStr.charCodeAt(bIndex);
        if (isDigit(aChar) && isDigit(bChar)) {
            let aNum = 0;
            do {
                ++aIndex;
                aNum = aNum * 10 + aChar - DIGIT_0;
                aChar = aStr.charCodeAt(aIndex);
            }while (isDigit(aChar) && aNum > 0);
            let bNum = 0;
            do {
                ++bIndex;
                bNum = bNum * 10 + bChar - DIGIT_0;
                bChar = bStr.charCodeAt(bIndex);
            }while (isDigit(bChar) && bNum > 0);
            if (aNum < bNum) {
                return -1;
            }
            if (aNum > bNum) {
                return 1;
            }
        } else {
            if (aChar < bChar) {
                return -1;
            }
            if (aChar > bChar) {
                return 1;
            }
            ++aIndex;
            ++bIndex;
        }
    }
    return aStr.length - bStr.length;
}
const DIGIT_0 = 48;
const DIGIT_9 = 57;
function isDigit(code) {
    return !isNaN(code) && DIGIT_0 <= code && code <= DIGIT_9;
}


/***/ }),

/***/ 6780:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.printPathArray = printPathArray;
/**
 * Build a string describing the path.
 */ function printPathArray(path) {
    return path.map((key)=>typeof key === "number" ? "[" + key.toString() + "]" : "." + key).join("");
}


/***/ }),

/***/ 3967:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.promiseForObject = promiseForObject;
/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */ function promiseForObject(object) {
    return Promise.all(Object.values(object)).then((resolvedValues)=>{
        const resolvedObject = Object.create(null);
        for (const [i, key] of Object.keys(object).entries()){
            resolvedObject[key] = resolvedValues[i];
        }
        return resolvedObject;
    });
}


/***/ }),

/***/ 5118:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.promiseReduce = promiseReduce;
var _isPromise = __webpack_require__(2833);
/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */ function promiseReduce(values, callbackFn, initialValue) {
    let accumulator = initialValue;
    for (const value of values){
        accumulator = (0, _isPromise.isPromise)(accumulator) ? accumulator.then((resolved)=>callbackFn(resolved, value)) : callbackFn(accumulator, value);
    }
    return accumulator;
}


/***/ }),

/***/ 7135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.suggestionList = suggestionList;
var _naturalCompare = __webpack_require__(9170);
/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */ function suggestionList(input, options) {
    const optionsByDistance = Object.create(null);
    const lexicalDistance = new LexicalDistance(input);
    const threshold = Math.floor(input.length * 0.4) + 1;
    for (const option of options){
        const distance = lexicalDistance.measure(option, threshold);
        if (distance !== undefined) {
            optionsByDistance[option] = distance;
        }
    }
    return Object.keys(optionsByDistance).sort((a, b)=>{
        const distanceDiff = optionsByDistance[a] - optionsByDistance[b];
        return distanceDiff !== 0 ? distanceDiff : (0, _naturalCompare.naturalCompare)(a, b);
    });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 */ class LexicalDistance {
    constructor(input){
        this._input = input;
        this._inputLowerCase = input.toLowerCase();
        this._inputArray = stringToArray(this._inputLowerCase);
        this._rows = [
            new Array(input.length + 1).fill(0),
            new Array(input.length + 1).fill(0),
            new Array(input.length + 1).fill(0)
        ];
    }
    measure(option, threshold) {
        if (this._input === option) {
            return 0;
        }
        const optionLowerCase = option.toLowerCase(); // Any case change counts as a single edit
        if (this._inputLowerCase === optionLowerCase) {
            return 1;
        }
        let a = stringToArray(optionLowerCase);
        let b = this._inputArray;
        if (a.length < b.length) {
            const tmp = a;
            a = b;
            b = tmp;
        }
        const aLength = a.length;
        const bLength = b.length;
        if (aLength - bLength > threshold) {
            return undefined;
        }
        const rows = this._rows;
        for(let j = 0; j <= bLength; j++){
            rows[0][j] = j;
        }
        for(let i = 1; i <= aLength; i++){
            const upRow = rows[(i - 1) % 3];
            const currentRow = rows[i % 3];
            let smallestCell = currentRow[0] = i;
            for(let j = 1; j <= bLength; j++){
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                let currentCell = Math.min(upRow[j] + 1, currentRow[j - 1] + 1, upRow[j - 1] + cost);
                if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
                    // transposition
                    const doubleDiagonalCell = rows[(i - 2) % 3][j - 2];
                    currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
                }
                if (currentCell < smallestCell) {
                    smallestCell = currentCell;
                }
                currentRow[j] = currentCell;
            } // Early exit, since distance can't go smaller than smallest element of the previous row.
            if (smallestCell > threshold) {
                return undefined;
            }
        }
        const distance = rows[aLength % 3][bLength];
        return distance <= threshold ? distance : undefined;
    }
}
function stringToArray(str) {
    const strLength = str.length;
    const array = new Array(strLength);
    for(let i = 0; i < strLength; ++i){
        array[i] = str.charCodeAt(i);
    }
    return array;
}


/***/ }),

/***/ 2870:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toError = toError;
var _inspect = __webpack_require__(893);
/**
 * Sometimes a non-error is thrown, wrap it as an Error instance to ensure a consistent Error interface.
 */ function toError(thrownValue) {
    return thrownValue instanceof Error ? thrownValue : new NonErrorThrown(thrownValue);
}
class NonErrorThrown extends Error {
    constructor(thrownValue){
        super("Unexpected error value: " + (0, _inspect.inspect)(thrownValue));
        this.name = "NonErrorThrown";
        this.thrownValue = thrownValue;
    }
}


/***/ }),

/***/ 2529:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toObjMap = toObjMap;
function toObjMap(obj) {
    if (obj == null) {
        return Object.create(null);
    }
    if (Object.getPrototypeOf(obj) === null) {
        return obj;
    }
    const map = Object.create(null);
    for (const [key, value] of Object.entries(obj)){
        map[key] = value;
    }
    return map;
}


/***/ }),

/***/ 1874:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Token = exports.QueryDocumentKeys = exports.OperationTypeNode = exports.Location = void 0;
exports.isNode = isNode;
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
 */ exports.Location = Location;
class Token {
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
 */ exports.Token = Token;
/**
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
exports.QueryDocumentKeys = QueryDocumentKeys;
const kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */ function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
/** Name */ var OperationTypeNode;
exports.OperationTypeNode = OperationTypeNode;
(function(OperationTypeNode) {
    OperationTypeNode["QUERY"] = "query";
    OperationTypeNode["MUTATION"] = "mutation";
    OperationTypeNode["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (exports.OperationTypeNode = OperationTypeNode = {}));


/***/ }),

/***/ 7168:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.dedentBlockStringLines = dedentBlockStringLines;
exports.isPrintableAsBlockString = isPrintableAsBlockString;
exports.printBlockString = printBlockString;
var _characterClasses = __webpack_require__(4622);
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
    while(i < str.length && (0, _characterClasses.isWhiteSpace)(str.charCodeAt(i))){
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
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || (0, _characterClasses.isWhiteSpace)(line.charCodeAt(0))); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith("\\");
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
    (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ""; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && (0, _characterClasses.isWhiteSpace)(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
        result += "\n";
    }
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) {
        result += "\n";
    }
    return '"""' + result + '"""';
}


/***/ }),

/***/ 4622:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isDigit = isDigit;
exports.isLetter = isLetter;
exports.isNameContinue = isNameContinue;
exports.isNameStart = isNameStart;
exports.isWhiteSpace = isWhiteSpace;
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


/***/ }),

/***/ 5650:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.DirectiveLocation = void 0;
/**
 * The set of allowed directive location values.
 */ var DirectiveLocation;
exports.DirectiveLocation = DirectiveLocation;
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
})(DirectiveLocation || (exports.DirectiveLocation = DirectiveLocation = {})); /**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */ 


/***/ }),

/***/ 2111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "BREAK", ({
    enumerable: true,
    get: function() {
        return _visitor.BREAK;
    }
}));
Object.defineProperty(exports, "DirectiveLocation", ({
    enumerable: true,
    get: function() {
        return _directiveLocation.DirectiveLocation;
    }
}));
Object.defineProperty(exports, "Kind", ({
    enumerable: true,
    get: function() {
        return _kinds.Kind;
    }
}));
Object.defineProperty(exports, "Lexer", ({
    enumerable: true,
    get: function() {
        return _lexer.Lexer;
    }
}));
Object.defineProperty(exports, "Location", ({
    enumerable: true,
    get: function() {
        return _ast.Location;
    }
}));
Object.defineProperty(exports, "OperationTypeNode", ({
    enumerable: true,
    get: function() {
        return _ast.OperationTypeNode;
    }
}));
Object.defineProperty(exports, "Source", ({
    enumerable: true,
    get: function() {
        return _source.Source;
    }
}));
Object.defineProperty(exports, "Token", ({
    enumerable: true,
    get: function() {
        return _ast.Token;
    }
}));
Object.defineProperty(exports, "TokenKind", ({
    enumerable: true,
    get: function() {
        return _tokenKind.TokenKind;
    }
}));
Object.defineProperty(exports, "getEnterLeaveForKind", ({
    enumerable: true,
    get: function() {
        return _visitor.getEnterLeaveForKind;
    }
}));
Object.defineProperty(exports, "getLocation", ({
    enumerable: true,
    get: function() {
        return _location.getLocation;
    }
}));
Object.defineProperty(exports, "getVisitFn", ({
    enumerable: true,
    get: function() {
        return _visitor.getVisitFn;
    }
}));
Object.defineProperty(exports, "isConstValueNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isConstValueNode;
    }
}));
Object.defineProperty(exports, "isDefinitionNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isDefinitionNode;
    }
}));
Object.defineProperty(exports, "isExecutableDefinitionNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isExecutableDefinitionNode;
    }
}));
Object.defineProperty(exports, "isSelectionNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isSelectionNode;
    }
}));
Object.defineProperty(exports, "isTypeDefinitionNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isTypeDefinitionNode;
    }
}));
Object.defineProperty(exports, "isTypeExtensionNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isTypeExtensionNode;
    }
}));
Object.defineProperty(exports, "isTypeNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isTypeNode;
    }
}));
Object.defineProperty(exports, "isTypeSystemDefinitionNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isTypeSystemDefinitionNode;
    }
}));
Object.defineProperty(exports, "isTypeSystemExtensionNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isTypeSystemExtensionNode;
    }
}));
Object.defineProperty(exports, "isValueNode", ({
    enumerable: true,
    get: function() {
        return _predicates.isValueNode;
    }
}));
Object.defineProperty(exports, "parse", ({
    enumerable: true,
    get: function() {
        return _parser.parse;
    }
}));
Object.defineProperty(exports, "parseConstValue", ({
    enumerable: true,
    get: function() {
        return _parser.parseConstValue;
    }
}));
Object.defineProperty(exports, "parseType", ({
    enumerable: true,
    get: function() {
        return _parser.parseType;
    }
}));
Object.defineProperty(exports, "parseValue", ({
    enumerable: true,
    get: function() {
        return _parser.parseValue;
    }
}));
Object.defineProperty(exports, "print", ({
    enumerable: true,
    get: function() {
        return _printer.print;
    }
}));
Object.defineProperty(exports, "printLocation", ({
    enumerable: true,
    get: function() {
        return _printLocation.printLocation;
    }
}));
Object.defineProperty(exports, "printSourceLocation", ({
    enumerable: true,
    get: function() {
        return _printLocation.printSourceLocation;
    }
}));
Object.defineProperty(exports, "visit", ({
    enumerable: true,
    get: function() {
        return _visitor.visit;
    }
}));
Object.defineProperty(exports, "visitInParallel", ({
    enumerable: true,
    get: function() {
        return _visitor.visitInParallel;
    }
}));
var _source = __webpack_require__(9262);
var _location = __webpack_require__(7097);
var _printLocation = __webpack_require__(4832);
var _kinds = __webpack_require__(4278);
var _tokenKind = __webpack_require__(8515);
var _lexer = __webpack_require__(9651);
var _parser = __webpack_require__(3243);
var _printer = __webpack_require__(5332);
var _visitor = __webpack_require__(4041);
var _ast = __webpack_require__(1874);
var _predicates = __webpack_require__(2338);
var _directiveLocation = __webpack_require__(5650);


/***/ }),

/***/ 4278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Kind = void 0;
/**
 * The set of allowed kind values for AST nodes.
 */ var Kind;
exports.Kind = Kind;
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
})(Kind || (exports.Kind = Kind = {})); /**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ 


/***/ }),

/***/ 9651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Lexer = void 0;
exports.isPunctuatorTokenKind = isPunctuatorTokenKind;
var _syntaxError = __webpack_require__(2399);
var _ast = __webpack_require__(1874);
var _blockString = __webpack_require__(7168);
var _characterClasses = __webpack_require__(4622);
var _tokenKind = __webpack_require__(8515);
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
        const startOfFileToken = new _ast.Token(_tokenKind.TokenKind.SOF, 0, 0, 0, 0);
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
        if (token.kind !== _tokenKind.TokenKind.EOF) {
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
            }while (token.kind === _tokenKind.TokenKind.COMMENT);
        }
        return token;
    }
}
/**
 * @internal
 */ exports.Lexer = Lexer;
function isPunctuatorTokenKind(kind) {
    return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
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
        return _tokenKind.TokenKind.EOF;
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
    return new _ast.Token(kind, start, end, line, col, value);
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
                return createToken(lexer, _tokenKind.TokenKind.BANG, position, position + 1);
            case 0x0024:
                // $
                return createToken(lexer, _tokenKind.TokenKind.DOLLAR, position, position + 1);
            case 0x0026:
                // &
                return createToken(lexer, _tokenKind.TokenKind.AMP, position, position + 1);
            case 0x0028:
                // (
                return createToken(lexer, _tokenKind.TokenKind.PAREN_L, position, position + 1);
            case 0x0029:
                // )
                return createToken(lexer, _tokenKind.TokenKind.PAREN_R, position, position + 1);
            case 0x002e:
                // .
                if (body.charCodeAt(position + 1) === 0x002e && body.charCodeAt(position + 2) === 0x002e) {
                    return createToken(lexer, _tokenKind.TokenKind.SPREAD, position, position + 3);
                }
                break;
            case 0x003a:
                // :
                return createToken(lexer, _tokenKind.TokenKind.COLON, position, position + 1);
            case 0x003d:
                // =
                return createToken(lexer, _tokenKind.TokenKind.EQUALS, position, position + 1);
            case 0x0040:
                // @
                return createToken(lexer, _tokenKind.TokenKind.AT, position, position + 1);
            case 0x005b:
                // [
                return createToken(lexer, _tokenKind.TokenKind.BRACKET_L, position, position + 1);
            case 0x005d:
                // ]
                return createToken(lexer, _tokenKind.TokenKind.BRACKET_R, position, position + 1);
            case 0x007b:
                // {
                return createToken(lexer, _tokenKind.TokenKind.BRACE_L, position, position + 1);
            case 0x007c:
                // |
                return createToken(lexer, _tokenKind.TokenKind.PIPE, position, position + 1);
            case 0x007d:
                // }
                return createToken(lexer, _tokenKind.TokenKind.BRACE_R, position, position + 1);
            // StringValue
            case 0x0022:
                // "
                if (body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
                    return readBlockString(lexer, position);
                }
                return readString(lexer, position);
        } // IntValue | FloatValue (Digit | -)
        if ((0, _characterClasses.isDigit)(code) || code === 0x002d) {
            return readNumber(lexer, position, code);
        } // Name
        if ((0, _characterClasses.isNameStart)(code)) {
            return readName(lexer, position);
        }
        throw (0, _syntaxError.syntaxError)(lexer.source, position, code === 0x0027 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, _tokenKind.TokenKind.EOF, bodyLength, bodyLength);
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
    return createToken(lexer, _tokenKind.TokenKind.COMMENT, start, position, body.slice(start + 1, position));
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
        if ((0, _characterClasses.isDigit)(code)) {
            throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
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
    if (code === 0x002e || (0, _characterClasses.isNameStart)(code)) {
        throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT, start, position, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading one or more digits.
 */ function readDigits(lexer, start, firstCode) {
    if (!(0, _characterClasses.isDigit)(firstCode)) {
        throw (0, _syntaxError.syntaxError)(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
    }
    const body = lexer.source.body;
    let position = start + 1; // +1 to skip first firstCode
    while((0, _characterClasses.isDigit)(body.charCodeAt(position))){
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
            return createToken(lexer, _tokenKind.TokenKind.STRING, start, position + 1, value);
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
            throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
    }
    throw (0, _syntaxError.syntaxError)(lexer.source, position, "Unterminated string.");
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
    throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
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
    throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
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
    throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
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
            const token = createToken(lexer, _tokenKind.TokenKind.BLOCK_STRING, start, position + 3, (0, _blockString.dedentBlockStringLines)(blockLines).join("\n"));
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
            throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
    }
    throw (0, _syntaxError.syntaxError)(lexer.source, position, "Unterminated string.");
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
        if ((0, _characterClasses.isNameContinue)(code)) {
            ++position;
        } else {
            break;
        }
    }
    return createToken(lexer, _tokenKind.TokenKind.NAME, start, position, body.slice(start, position));
}


/***/ }),

/***/ 7097:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getLocation = getLocation;
var _invariant = __webpack_require__(2270);
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
        typeof match.index === "number" || (0, _invariant.invariant)(false);
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


/***/ }),

/***/ 3243:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Parser = void 0;
exports.parse = parse;
exports.parseConstValue = parseConstValue;
exports.parseType = parseType;
exports.parseValue = parseValue;
var _syntaxError = __webpack_require__(2399);
var _ast = __webpack_require__(1874);
var _directiveLocation = __webpack_require__(5650);
var _kinds = __webpack_require__(4278);
var _lexer = __webpack_require__(9651);
var _source = __webpack_require__(9262);
var _tokenKind = __webpack_require__(8515);
/**
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
    parser.expectToken(_tokenKind.TokenKind.SOF);
    const value = parser.parseValueLiteral(false);
    parser.expectToken(_tokenKind.TokenKind.EOF);
    return value;
}
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */ function parseConstValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKind.TokenKind.SOF);
    const value = parser.parseConstValueLiteral();
    parser.expectToken(_tokenKind.TokenKind.EOF);
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
    parser.expectToken(_tokenKind.TokenKind.SOF);
    const type = parser.parseTypeReference();
    parser.expectToken(_tokenKind.TokenKind.EOF);
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
        const sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
        this._lexer = new _lexer.Lexer(sourceObj);
        this._options = options;
        this._tokenCounter = 0;
    }
    get tokenCount() {
        return this._tokenCounter;
    }
    /**
   * Converts a name lex token into a name parse node.
   */ parseName() {
        const token = this.expectToken(_tokenKind.TokenKind.NAME);
        return this.node(token, {
            kind: _kinds.Kind.NAME,
            value: token.value
        });
    }
    /**
   * Document : Definition+
   */ parseDocument() {
        return this.node(this._lexer.token, {
            kind: _kinds.Kind.DOCUMENT,
            definitions: this.many(_tokenKind.TokenKind.SOF, this.parseDefinition, _tokenKind.TokenKind.EOF)
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
        if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
            return this.parseOperationDefinition();
        } // Many definitions begin with a description and require a lookahead.
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
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
                throw (0, _syntaxError.syntaxError)(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
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
        if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
            return this.node(start, {
                kind: _kinds.Kind.OPERATION_DEFINITION,
                operation: _ast.OperationTypeNode.QUERY,
                name: undefined,
                variableDefinitions: [],
                directives: [],
                selectionSet: this.parseSelectionSet()
            });
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(_tokenKind.TokenKind.NAME)) {
            name = this.parseName();
        }
        return this.node(start, {
            kind: _kinds.Kind.OPERATION_DEFINITION,
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
        const operationToken = this.expectToken(_tokenKind.TokenKind.NAME);
        switch(operationToken.value){
            case "query":
                return _ast.OperationTypeNode.QUERY;
            case "mutation":
                return _ast.OperationTypeNode.MUTATION;
            case "subscription":
                return _ast.OperationTypeNode.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
    }
    /**
   * VariableDefinitions : ( VariableDefinition+ )
   */ parseVariableDefinitions() {
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind.TokenKind.PAREN_R);
    }
    /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */ parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: _kinds.Kind.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseConstValueLiteral() : undefined,
            directives: this.parseConstDirectives()
        });
    }
    /**
   * Variable : $ Name
   */ parseVariable() {
        const start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.DOLLAR);
        return this.node(start, {
            kind: _kinds.Kind.VARIABLE,
            name: this.parseName()
        });
    }
    /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */ parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: _kinds.Kind.SELECTION_SET,
            selections: this.many(_tokenKind.TokenKind.BRACE_L, this.parseSelection, _tokenKind.TokenKind.BRACE_R)
        });
    }
    /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */ parseSelection() {
        return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
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
        if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else {
            name = nameOrAlias;
        }
        return this.node(start, {
            kind: _kinds.Kind.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined
        });
    }
    /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */ parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, item, _tokenKind.TokenKind.PAREN_R);
    }
    /**
   * Argument[Const] : Name : Value[?Const]
   */ parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        return this.node(start, {
            kind: _kinds.Kind.ARGUMENT,
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
        this.expectToken(_tokenKind.TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
            return this.node(start, {
                kind: _kinds.Kind.FRAGMENT_SPREAD,
                name: this.parseFragmentName(),
                directives: this.parseDirectives(false)
            });
        }
        return this.node(start, {
            kind: _kinds.Kind.INLINE_FRAGMENT,
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
                kind: _kinds.Kind.FRAGMENT_DEFINITION,
                name: this.parseFragmentName(),
                variableDefinitions: this.parseVariableDefinitions(),
                typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                directives: this.parseDirectives(false),
                selectionSet: this.parseSelectionSet()
            });
        }
        return this.node(start, {
            kind: _kinds.Kind.FRAGMENT_DEFINITION,
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
            case _tokenKind.TokenKind.BRACKET_L:
                return this.parseList(isConst);
            case _tokenKind.TokenKind.BRACE_L:
                return this.parseObject(isConst);
            case _tokenKind.TokenKind.INT:
                this.advanceLexer();
                return this.node(token, {
                    kind: _kinds.Kind.INT,
                    value: token.value
                });
            case _tokenKind.TokenKind.FLOAT:
                this.advanceLexer();
                return this.node(token, {
                    kind: _kinds.Kind.FLOAT,
                    value: token.value
                });
            case _tokenKind.TokenKind.STRING:
            case _tokenKind.TokenKind.BLOCK_STRING:
                return this.parseStringLiteral();
            case _tokenKind.TokenKind.NAME:
                this.advanceLexer();
                switch(token.value){
                    case "true":
                        return this.node(token, {
                            kind: _kinds.Kind.BOOLEAN,
                            value: true
                        });
                    case "false":
                        return this.node(token, {
                            kind: _kinds.Kind.BOOLEAN,
                            value: false
                        });
                    case "null":
                        return this.node(token, {
                            kind: _kinds.Kind.NULL
                        });
                    default:
                        return this.node(token, {
                            kind: _kinds.Kind.ENUM,
                            value: token.value
                        });
                }
            case _tokenKind.TokenKind.DOLLAR:
                if (isConst) {
                    this.expectToken(_tokenKind.TokenKind.DOLLAR);
                    if (this._lexer.token.kind === _tokenKind.TokenKind.NAME) {
                        const varName = this._lexer.token.value;
                        throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
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
            kind: _kinds.Kind.STRING,
            value: token.value,
            block: token.kind === _tokenKind.TokenKind.BLOCK_STRING
        });
    }
    /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */ parseList(isConst) {
        const item = ()=>this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
            kind: _kinds.Kind.LIST,
            values: this.any(_tokenKind.TokenKind.BRACKET_L, item, _tokenKind.TokenKind.BRACKET_R)
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
            kind: _kinds.Kind.OBJECT,
            fields: this.any(_tokenKind.TokenKind.BRACE_L, item, _tokenKind.TokenKind.BRACE_R)
        });
    }
    /**
   * ObjectField[Const] : Name : Value[?Const]
   */ parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        return this.node(start, {
            kind: _kinds.Kind.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    /**
   * Directives[Const] : Directive[?Const]+
   */ parseDirectives(isConst) {
        const directives = [];
        while(this.peek(_tokenKind.TokenKind.AT)){
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
        this.expectToken(_tokenKind.TokenKind.AT);
        return this.node(start, {
            kind: _kinds.Kind.DIRECTIVE,
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
        if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
            const innerType = this.parseTypeReference();
            this.expectToken(_tokenKind.TokenKind.BRACKET_R);
            type = this.node(start, {
                kind: _kinds.Kind.LIST_TYPE,
                type: innerType
            });
        } else {
            type = this.parseNamedType();
        }
        if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
            return this.node(start, {
                kind: _kinds.Kind.NON_NULL_TYPE,
                type
            });
        }
        return type;
    }
    /**
   * NamedType : Name
   */ parseNamedType() {
        return this.node(this._lexer.token, {
            kind: _kinds.Kind.NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
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
        const operationTypes = this.many(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
        return this.node(start, {
            kind: _kinds.Kind.SCHEMA_DEFINITION,
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
        this.expectToken(_tokenKind.TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
            kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
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
            kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
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
            kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
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
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(_tokenKind.TokenKind.AMP, this.parseNamedType) : [];
    }
    /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */ parseFieldsDefinition() {
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind.TokenKind.BRACE_R);
    }
    /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */ parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(_tokenKind.TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kinds.Kind.FIELD_DEFINITION,
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
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind.TokenKind.PAREN_R);
    }
    /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */ parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
            defaultValue = this.parseConstValueLiteral();
        }
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
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
            kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
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
            kind: _kinds.Kind.UNION_TYPE_DEFINITION,
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
        return this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseNamedType) : [];
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
            kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
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
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind.TokenKind.BRACE_R);
    }
    /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */ parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
            throw (0, _syntaxError.syntaxError)(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
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
            kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
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
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind.TokenKind.BRACE_R);
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
        if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
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
        const operationTypes = this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: _kinds.Kind.SCHEMA_EXTENSION,
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
            kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
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
            kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
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
            kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
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
            kind: _kinds.Kind.UNION_TYPE_EXTENSION,
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
            kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
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
            kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
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
        this.expectToken(_tokenKind.TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
            kind: _kinds.Kind.DIRECTIVE_DEFINITION,
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
        return this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseDirectiveLocation);
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
        if (Object.prototype.hasOwnProperty.call(_directiveLocation.DirectiveLocation, name.value)) {
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
            node.loc = new _ast.Location(startToken, this._lexer.lastToken, this._lexer.source);
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
        throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
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
        if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
            this.advanceLexer();
        } else {
            throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
        }
    }
    /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */ unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
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
        if (token.kind !== _tokenKind.TokenKind.EOF) {
            ++this._tokenCounter;
            if (maxTokens !== undefined && this._tokenCounter > maxTokens) {
                throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Document contains more that ${maxTokens} tokens. Parsing aborted.`);
            }
        }
    }
}
/**
 * A helper function to describe a token as a string for debugging.
 */ exports.Parser = Parser;
function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */ function getTokenKindDesc(kind) {
    return (0, _lexer.isPunctuatorTokenKind)(kind) ? `"${kind}"` : kind;
}


/***/ }),

/***/ 2338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isConstValueNode = isConstValueNode;
exports.isDefinitionNode = isDefinitionNode;
exports.isExecutableDefinitionNode = isExecutableDefinitionNode;
exports.isSelectionNode = isSelectionNode;
exports.isTypeDefinitionNode = isTypeDefinitionNode;
exports.isTypeExtensionNode = isTypeExtensionNode;
exports.isTypeNode = isTypeNode;
exports.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode;
exports.isTypeSystemExtensionNode = isTypeSystemExtensionNode;
exports.isValueNode = isValueNode;
var _kinds = __webpack_require__(4278);
function isDefinitionNode(node) {
    return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
    return node.kind === _kinds.Kind.OPERATION_DEFINITION || node.kind === _kinds.Kind.FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
    return node.kind === _kinds.Kind.FIELD || node.kind === _kinds.Kind.FRAGMENT_SPREAD || node.kind === _kinds.Kind.INLINE_FRAGMENT;
}
function isValueNode(node) {
    return node.kind === _kinds.Kind.VARIABLE || node.kind === _kinds.Kind.INT || node.kind === _kinds.Kind.FLOAT || node.kind === _kinds.Kind.STRING || node.kind === _kinds.Kind.BOOLEAN || node.kind === _kinds.Kind.NULL || node.kind === _kinds.Kind.ENUM || node.kind === _kinds.Kind.LIST || node.kind === _kinds.Kind.OBJECT;
}
function isConstValueNode(node) {
    return isValueNode(node) && (node.kind === _kinds.Kind.LIST ? node.values.some(isConstValueNode) : node.kind === _kinds.Kind.OBJECT ? node.fields.some((field)=>isConstValueNode(field.value)) : node.kind !== _kinds.Kind.VARIABLE);
}
function isTypeNode(node) {
    return node.kind === _kinds.Kind.NAMED_TYPE || node.kind === _kinds.Kind.LIST_TYPE || node.kind === _kinds.Kind.NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
    return node.kind === _kinds.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds.Kind.DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
    return node.kind === _kinds.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kinds.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kinds.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kinds.Kind.UNION_TYPE_DEFINITION || node.kind === _kinds.Kind.ENUM_TYPE_DEFINITION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
    return node.kind === _kinds.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
    return node.kind === _kinds.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kinds.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kinds.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kinds.Kind.UNION_TYPE_EXTENSION || node.kind === _kinds.Kind.ENUM_TYPE_EXTENSION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
}


/***/ }),

/***/ 4832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.printLocation = printLocation;
exports.printSourceLocation = printSourceLocation;
var _location = __webpack_require__(7097);
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ function printLocation(location) {
    return printSourceLocation(location.source, (0, _location.getLocation)(location.source, location.start));
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


/***/ }),

/***/ 3805:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.printString = printString;
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


/***/ }),

/***/ 5332:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.print = print;
var _blockString = __webpack_require__(7168);
var _printString = __webpack_require__(3805);
var _visitor = __webpack_require__(4041);
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */ function print(ast) {
    return (0, _visitor.visit)(ast, printDocASTReducer);
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
        leave: ({ value, block: isBlockString })=>isBlockString ? (0, _blockString.printBlockString)(value) : (0, _printString.printString)(value)
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


/***/ }),

/***/ 9262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Source = void 0;
exports.isSource = isSource;
var _devAssert = __webpack_require__(6158);
var _inspect = __webpack_require__(893);
var _instanceOf = __webpack_require__(3387);
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
        typeof body === "string" || (0, _devAssert.devAssert)(false, `Body must be a string. Received: ${(0, _inspect.inspect)(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || (0, _devAssert.devAssert)(false, "line in locationOffset is 1-indexed and must be positive.");
        this.locationOffset.column > 0 || (0, _devAssert.devAssert)(false, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
        return "Source";
    }
}
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */ exports.Source = Source;
function isSource(source) {
    return (0, _instanceOf.instanceOf)(source, Source);
}


/***/ }),

/***/ 8515:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TokenKind = void 0;
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */ var TokenKind;
exports.TokenKind = TokenKind;
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
})(TokenKind || (exports.TokenKind = TokenKind = {})); /**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */ 


/***/ }),

/***/ 4041:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.BREAK = void 0;
exports.getEnterLeaveForKind = getEnterLeaveForKind;
exports.getVisitFn = getVisitFn;
exports.visit = visit;
exports.visitInParallel = visitInParallel;
var _devAssert = __webpack_require__(6158);
var _inspect = __webpack_require__(893);
var _ast = __webpack_require__(1874);
var _kinds = __webpack_require__(4278);
const BREAK = Object.freeze({});
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
 */ exports.BREAK = BREAK;
function visit(root, visitor, visitorKeys = _ast.QueryDocumentKeys) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values(_kinds.Kind)){
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
            (0, _ast.isNode)(node) || (0, _devAssert.devAssert)(false, `Invalid AST Node: ${(0, _inspect.inspect)(node)}.`);
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
                    if ((0, _ast.isNode)(result)) {
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
    for (const kind of Object.values(_kinds.Kind)){
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


/***/ }),

/***/ 4423:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.assertEnumValueName = assertEnumValueName;
exports.assertName = assertName;
var _devAssert = __webpack_require__(6158);
var _GraphQLError = __webpack_require__(6042);
var _characterClasses = __webpack_require__(4622);
/**
 * Upholds the spec rules about naming.
 */ function assertName(name) {
    name != null || (0, _devAssert.devAssert)(false, "Must provide name.");
    typeof name === "string" || (0, _devAssert.devAssert)(false, "Expected name to be a string.");
    if (name.length === 0) {
        throw new _GraphQLError.GraphQLError("Expected name to be a non-empty string.");
    }
    for(let i = 1; i < name.length; ++i){
        if (!(0, _characterClasses.isNameContinue)(name.charCodeAt(i))) {
            throw new _GraphQLError.GraphQLError(`Names must only contain [_a-zA-Z0-9] but "${name}" does not.`);
        }
    }
    if (!(0, _characterClasses.isNameStart)(name.charCodeAt(0))) {
        throw new _GraphQLError.GraphQLError(`Names must start with [_a-zA-Z] but "${name}" does not.`);
    }
    return name;
}
/**
 * Upholds the spec rules about naming enum values.
 *
 * @internal
 */ function assertEnumValueName(name) {
    if (name === "true" || name === "false" || name === "null") {
        throw new _GraphQLError.GraphQLError(`Enum values cannot be named: ${name}`);
    }
    return assertName(name);
}


/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLUnionType = exports.GraphQLScalarType = exports.GraphQLObjectType = exports.GraphQLNonNull = exports.GraphQLList = exports.GraphQLInterfaceType = exports.GraphQLInputObjectType = exports.GraphQLEnumType = void 0;
exports.argsToArgsConfig = argsToArgsConfig;
exports.assertAbstractType = assertAbstractType;
exports.assertCompositeType = assertCompositeType;
exports.assertEnumType = assertEnumType;
exports.assertInputObjectType = assertInputObjectType;
exports.assertInputType = assertInputType;
exports.assertInterfaceType = assertInterfaceType;
exports.assertLeafType = assertLeafType;
exports.assertListType = assertListType;
exports.assertNamedType = assertNamedType;
exports.assertNonNullType = assertNonNullType;
exports.assertNullableType = assertNullableType;
exports.assertObjectType = assertObjectType;
exports.assertOutputType = assertOutputType;
exports.assertScalarType = assertScalarType;
exports.assertType = assertType;
exports.assertUnionType = assertUnionType;
exports.assertWrappingType = assertWrappingType;
exports.defineArguments = defineArguments;
exports.getNamedType = getNamedType;
exports.getNullableType = getNullableType;
exports.isAbstractType = isAbstractType;
exports.isCompositeType = isCompositeType;
exports.isEnumType = isEnumType;
exports.isInputObjectType = isInputObjectType;
exports.isInputType = isInputType;
exports.isInterfaceType = isInterfaceType;
exports.isLeafType = isLeafType;
exports.isListType = isListType;
exports.isNamedType = isNamedType;
exports.isNonNullType = isNonNullType;
exports.isNullableType = isNullableType;
exports.isObjectType = isObjectType;
exports.isOutputType = isOutputType;
exports.isRequiredArgument = isRequiredArgument;
exports.isRequiredInputField = isRequiredInputField;
exports.isScalarType = isScalarType;
exports.isType = isType;
exports.isUnionType = isUnionType;
exports.isWrappingType = isWrappingType;
exports.resolveObjMapThunk = resolveObjMapThunk;
exports.resolveReadonlyArrayThunk = resolveReadonlyArrayThunk;
var _devAssert = __webpack_require__(6158);
var _didYouMean = __webpack_require__(3278);
var _identityFunc = __webpack_require__(7026);
var _inspect = __webpack_require__(893);
var _instanceOf = __webpack_require__(3387);
var _isObjectLike = __webpack_require__(9112);
var _keyMap = __webpack_require__(1180);
var _keyValMap = __webpack_require__(6179);
var _mapValue = __webpack_require__(9539);
var _suggestionList = __webpack_require__(7135);
var _toObjMap = __webpack_require__(2529);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _printer = __webpack_require__(5332);
var _valueFromASTUntyped = __webpack_require__(964);
var _assertName = __webpack_require__(4423);
function isType(type) {
    return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function assertType(type) {
    if (!isType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL type.`);
    }
    return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */ function isScalarType(type) {
    return (0, _instanceOf.instanceOf)(type, GraphQLScalarType);
}
function assertScalarType(type) {
    if (!isScalarType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Scalar type.`);
    }
    return type;
}
function isObjectType(type) {
    return (0, _instanceOf.instanceOf)(type, GraphQLObjectType);
}
function assertObjectType(type) {
    if (!isObjectType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Object type.`);
    }
    return type;
}
function isInterfaceType(type) {
    return (0, _instanceOf.instanceOf)(type, GraphQLInterfaceType);
}
function assertInterfaceType(type) {
    if (!isInterfaceType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Interface type.`);
    }
    return type;
}
function isUnionType(type) {
    return (0, _instanceOf.instanceOf)(type, GraphQLUnionType);
}
function assertUnionType(type) {
    if (!isUnionType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Union type.`);
    }
    return type;
}
function isEnumType(type) {
    return (0, _instanceOf.instanceOf)(type, GraphQLEnumType);
}
function assertEnumType(type) {
    if (!isEnumType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Enum type.`);
    }
    return type;
}
function isInputObjectType(type) {
    return (0, _instanceOf.instanceOf)(type, GraphQLInputObjectType);
}
function assertInputObjectType(type) {
    if (!isInputObjectType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Input Object type.`);
    }
    return type;
}
function isListType(type) {
    return (0, _instanceOf.instanceOf)(type, GraphQLList);
}
function assertListType(type) {
    if (!isListType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL List type.`);
    }
    return type;
}
function isNonNullType(type) {
    return (0, _instanceOf.instanceOf)(type, GraphQLNonNull);
}
function assertNonNullType(type) {
    if (!isNonNullType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Non-Null type.`);
    }
    return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */ function isInputType(type) {
    return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function assertInputType(type) {
    if (!isInputType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL input type.`);
    }
    return type;
}
/**
 * These types may be used as output types as the result of fields.
 */ function isOutputType(type) {
    return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}
function assertOutputType(type) {
    if (!isOutputType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL output type.`);
    }
    return type;
}
/**
 * These types may describe types which may be leaf values.
 */ function isLeafType(type) {
    return isScalarType(type) || isEnumType(type);
}
function assertLeafType(type) {
    if (!isLeafType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL leaf type.`);
    }
    return type;
}
/**
 * These types may describe the parent context of a selection set.
 */ function isCompositeType(type) {
    return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function assertCompositeType(type) {
    if (!isCompositeType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL composite type.`);
    }
    return type;
}
/**
 * These types may describe the parent context of a selection set.
 */ function isAbstractType(type) {
    return isInterfaceType(type) || isUnionType(type);
}
function assertAbstractType(type) {
    if (!isAbstractType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL abstract type.`);
    }
    return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 * ```ts
 * const PersonType = new GraphQLObjectType({
 *   name: 'Person',
 *   fields: () => ({
 *     parents: { type: new GraphQLList(PersonType) },
 *     children: { type: new GraphQLList(PersonType) },
 *   })
 * })
 * ```
 */ class GraphQLList {
    constructor(ofType){
        isType(ofType) || (0, _devAssert.devAssert)(false, `Expected ${(0, _inspect.inspect)(ofType)} to be a GraphQL type.`);
        this.ofType = ofType;
    }
    get [Symbol.toStringTag]() {
        return "GraphQLList";
    }
    toString() {
        return "[" + String(this.ofType) + "]";
    }
    toJSON() {
        return this.toString();
    }
}
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 * ```ts
 * const RowType = new GraphQLObjectType({
 *   name: 'Row',
 *   fields: () => ({
 *     id: { type: new GraphQLNonNull(GraphQLString) },
 *   })
 * })
 * ```
 * Note: the enforcement of non-nullability occurs within the executor.
 */ exports.GraphQLList = GraphQLList;
class GraphQLNonNull {
    constructor(ofType){
        isNullableType(ofType) || (0, _devAssert.devAssert)(false, `Expected ${(0, _inspect.inspect)(ofType)} to be a GraphQL nullable type.`);
        this.ofType = ofType;
    }
    get [Symbol.toStringTag]() {
        return "GraphQLNonNull";
    }
    toString() {
        return String(this.ofType) + "!";
    }
    toJSON() {
        return this.toString();
    }
}
/**
 * These types wrap and modify other types
 */ exports.GraphQLNonNull = GraphQLNonNull;
function isWrappingType(type) {
    return isListType(type) || isNonNullType(type);
}
function assertWrappingType(type) {
    if (!isWrappingType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL wrapping type.`);
    }
    return type;
}
/**
 * These types can all accept null as a value.
 */ function isNullableType(type) {
    return isType(type) && !isNonNullType(type);
}
function assertNullableType(type) {
    if (!isNullableType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL nullable type.`);
    }
    return type;
}
function getNullableType(type) {
    if (type) {
        return isNonNullType(type) ? type.ofType : type;
    }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */ function isNamedType(type) {
    return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}
function assertNamedType(type) {
    if (!isNamedType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL named type.`);
    }
    return type;
}
function getNamedType(type) {
    if (type) {
        let unwrappedType = type;
        while(isWrappingType(unwrappedType)){
            unwrappedType = unwrappedType.ofType;
        }
        return unwrappedType;
    }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */ function resolveReadonlyArrayThunk(thunk) {
    return typeof thunk === "function" ? thunk() : thunk;
}
function resolveObjMapThunk(thunk) {
    return typeof thunk === "function" ? thunk() : thunk;
}
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */ /**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function returns `null` or does not return a value
 * (i.e. it returns `undefined`) then an error will be raised and a `null`
 * value will be returned in the response. It is always better to validate
 *
 * Example:
 *
 * ```ts
 * const OddType = new GraphQLScalarType({
 *   name: 'Odd',
 *   serialize(value) {
 *     if (!Number.isFinite(value)) {
 *       throw new Error(
 *         `Scalar "Odd" cannot represent "${value}" since it is not a finite number.`,
 *       );
 *     }
 *
 *     if (value % 2 === 0) {
 *       throw new Error(`Scalar "Odd" cannot represent "${value}" since it is even.`);
 *     }
 *     return value;
 *   }
 * });
 * ```
 */ class GraphQLScalarType {
    constructor(config){
        var _config$parseValue, _config$serialize, _config$parseLiteral, _config$extensionASTN;
        const parseValue = (_config$parseValue = config.parseValue) !== null && _config$parseValue !== void 0 ? _config$parseValue : _identityFunc.identityFunc;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.specifiedByURL = config.specifiedByURL;
        this.serialize = (_config$serialize = config.serialize) !== null && _config$serialize !== void 0 ? _config$serialize : _identityFunc.identityFunc;
        this.parseValue = parseValue;
        this.parseLiteral = (_config$parseLiteral = config.parseLiteral) !== null && _config$parseLiteral !== void 0 ? _config$parseLiteral : (node, variables)=>parseValue((0, _valueFromASTUntyped.valueFromASTUntyped)(node, variables));
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
        config.specifiedByURL == null || typeof config.specifiedByURL === "string" || (0, _devAssert.devAssert)(false, `${this.name} must provide "specifiedByURL" as a string, ` + `but got: ${(0, _inspect.inspect)(config.specifiedByURL)}.`);
        config.serialize == null || typeof config.serialize === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`);
        if (config.parseLiteral) {
            typeof config.parseValue === "function" && typeof config.parseLiteral === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`);
        }
    }
    get [Symbol.toStringTag]() {
        return "GraphQLScalarType";
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            specifiedByURL: this.specifiedByURL,
            serialize: this.serialize,
            parseValue: this.parseValue,
            parseLiteral: this.parseLiteral,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
}
exports.GraphQLScalarType = GraphQLScalarType;
/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 * ```ts
 * const AddressType = new GraphQLObjectType({
 *   name: 'Address',
 *   fields: {
 *     street: { type: GraphQLString },
 *     number: { type: GraphQLInt },
 *     formatted: {
 *       type: GraphQLString,
 *       resolve(obj) {
 *         return obj.number + ' ' + obj.street
 *       }
 *     }
 *   }
 * });
 * ```
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 * ```ts
 * const PersonType = new GraphQLObjectType({
 *   name: 'Person',
 *   fields: () => ({
 *     name: { type: GraphQLString },
 *     bestFriend: { type: PersonType },
 *   })
 * });
 * ```
 */ class GraphQLObjectType {
    constructor(config){
        var _config$extensionASTN2;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.isTypeOf = config.isTypeOf;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN2 = config.extensionASTNodes) !== null && _config$extensionASTN2 !== void 0 ? _config$extensionASTN2 : [];
        this._fields = ()=>defineFieldMap(config);
        this._interfaces = ()=>defineInterfaces(config);
        config.isTypeOf == null || typeof config.isTypeOf === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide "isTypeOf" as a function, ` + `but got: ${(0, _inspect.inspect)(config.isTypeOf)}.`);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLObjectType";
    }
    getFields() {
        if (typeof this._fields === "function") {
            this._fields = this._fields();
        }
        return this._fields;
    }
    getInterfaces() {
        if (typeof this._interfaces === "function") {
            this._interfaces = this._interfaces();
        }
        return this._interfaces;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: fieldsToFieldsConfig(this.getFields()),
            isTypeOf: this.isTypeOf,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
}
exports.GraphQLObjectType = GraphQLObjectType;
function defineInterfaces(config) {
    var _config$interfaces;
    const interfaces = resolveReadonlyArrayThunk((_config$interfaces = config.interfaces) !== null && _config$interfaces !== void 0 ? _config$interfaces : []);
    Array.isArray(interfaces) || (0, _devAssert.devAssert)(false, `${config.name} interfaces must be an Array or a function which returns an Array.`);
    return interfaces;
}
function defineFieldMap(config) {
    const fieldMap = resolveObjMapThunk(config.fields);
    isPlainObj(fieldMap) || (0, _devAssert.devAssert)(false, `${config.name} fields must be an object with field names as keys or a function which returns such an object.`);
    return (0, _mapValue.mapValue)(fieldMap, (fieldConfig, fieldName)=>{
        var _fieldConfig$args;
        isPlainObj(fieldConfig) || (0, _devAssert.devAssert)(false, `${config.name}.${fieldName} field config must be an object.`);
        fieldConfig.resolve == null || typeof fieldConfig.resolve === "function" || (0, _devAssert.devAssert)(false, `${config.name}.${fieldName} field resolver must be a function if ` + `provided, but got: ${(0, _inspect.inspect)(fieldConfig.resolve)}.`);
        const argsConfig = (_fieldConfig$args = fieldConfig.args) !== null && _fieldConfig$args !== void 0 ? _fieldConfig$args : {};
        isPlainObj(argsConfig) || (0, _devAssert.devAssert)(false, `${config.name}.${fieldName} args must be an object with argument names as keys.`);
        return {
            name: (0, _assertName.assertName)(fieldName),
            description: fieldConfig.description,
            type: fieldConfig.type,
            args: defineArguments(argsConfig),
            resolve: fieldConfig.resolve,
            subscribe: fieldConfig.subscribe,
            deprecationReason: fieldConfig.deprecationReason,
            extensions: (0, _toObjMap.toObjMap)(fieldConfig.extensions),
            astNode: fieldConfig.astNode
        };
    });
}
function defineArguments(config) {
    return Object.entries(config).map(([argName, argConfig])=>({
            name: (0, _assertName.assertName)(argName),
            description: argConfig.description,
            type: argConfig.type,
            defaultValue: argConfig.defaultValue,
            deprecationReason: argConfig.deprecationReason,
            extensions: (0, _toObjMap.toObjMap)(argConfig.extensions),
            astNode: argConfig.astNode
        }));
}
function isPlainObj(obj) {
    return (0, _isObjectLike.isObjectLike)(obj) && !Array.isArray(obj);
}
function fieldsToFieldsConfig(fields) {
    return (0, _mapValue.mapValue)(fields, (field)=>({
            description: field.description,
            type: field.type,
            args: argsToArgsConfig(field.args),
            resolve: field.resolve,
            subscribe: field.subscribe,
            deprecationReason: field.deprecationReason,
            extensions: field.extensions,
            astNode: field.astNode
        }));
}
/**
 * @internal
 */ function argsToArgsConfig(args) {
    return (0, _keyValMap.keyValMap)(args, (arg)=>arg.name, (arg)=>({
            description: arg.description,
            type: arg.type,
            defaultValue: arg.defaultValue,
            deprecationReason: arg.deprecationReason,
            extensions: arg.extensions,
            astNode: arg.astNode
        }));
}
function isRequiredArgument(arg) {
    return isNonNullType(arg.type) && arg.defaultValue === undefined;
}
/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 * ```ts
 * const EntityType = new GraphQLInterfaceType({
 *   name: 'Entity',
 *   fields: {
 *     name: { type: GraphQLString }
 *   }
 * });
 * ```
 */ class GraphQLInterfaceType {
    constructor(config){
        var _config$extensionASTN3;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.resolveType = config.resolveType;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN3 = config.extensionASTNodes) !== null && _config$extensionASTN3 !== void 0 ? _config$extensionASTN3 : [];
        this._fields = defineFieldMap.bind(undefined, config);
        this._interfaces = defineInterfaces.bind(undefined, config);
        config.resolveType == null || typeof config.resolveType === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide "resolveType" as a function, ` + `but got: ${(0, _inspect.inspect)(config.resolveType)}.`);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLInterfaceType";
    }
    getFields() {
        if (typeof this._fields === "function") {
            this._fields = this._fields();
        }
        return this._fields;
    }
    getInterfaces() {
        if (typeof this._interfaces === "function") {
            this._interfaces = this._interfaces();
        }
        return this._interfaces;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: fieldsToFieldsConfig(this.getFields()),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
}
exports.GraphQLInterfaceType = GraphQLInterfaceType;
/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 * ```ts
 * const PetType = new GraphQLUnionType({
 *   name: 'Pet',
 *   types: [ DogType, CatType ],
 *   resolveType(value) {
 *     if (value instanceof Dog) {
 *       return DogType;
 *     }
 *     if (value instanceof Cat) {
 *       return CatType;
 *     }
 *   }
 * });
 * ```
 */ class GraphQLUnionType {
    constructor(config){
        var _config$extensionASTN4;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.resolveType = config.resolveType;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN4 = config.extensionASTNodes) !== null && _config$extensionASTN4 !== void 0 ? _config$extensionASTN4 : [];
        this._types = defineTypes.bind(undefined, config);
        config.resolveType == null || typeof config.resolveType === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide "resolveType" as a function, ` + `but got: ${(0, _inspect.inspect)(config.resolveType)}.`);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLUnionType";
    }
    getTypes() {
        if (typeof this._types === "function") {
            this._types = this._types();
        }
        return this._types;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            types: this.getTypes(),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
}
exports.GraphQLUnionType = GraphQLUnionType;
function defineTypes(config) {
    const types = resolveReadonlyArrayThunk(config.types);
    Array.isArray(types) || (0, _devAssert.devAssert)(false, `Must provide Array of types or a function which returns such an array for Union ${config.name}.`);
    return types;
}
/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 * ```ts
 * const RGBType = new GraphQLEnumType({
 *   name: 'RGB',
 *   values: {
 *     RED: { value: 0 },
 *     GREEN: { value: 1 },
 *     BLUE: { value: 2 }
 *   }
 * });
 * ```
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */ class GraphQLEnumType {
    /* <T> */ constructor(config){
        var _config$extensionASTN5;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN5 = config.extensionASTNodes) !== null && _config$extensionASTN5 !== void 0 ? _config$extensionASTN5 : [];
        this._values = typeof config.values === "function" ? config.values : defineEnumValues(this.name, config.values);
        this._valueLookup = null;
        this._nameLookup = null;
    }
    get [Symbol.toStringTag]() {
        return "GraphQLEnumType";
    }
    getValues() {
        if (typeof this._values === "function") {
            this._values = defineEnumValues(this.name, this._values());
        }
        return this._values;
    }
    getValue(name) {
        if (this._nameLookup === null) {
            this._nameLookup = (0, _keyMap.keyMap)(this.getValues(), (value)=>value.name);
        }
        return this._nameLookup[name];
    }
    serialize(outputValue) {
        if (this._valueLookup === null) {
            this._valueLookup = new Map(this.getValues().map((enumValue)=>[
                    enumValue.value,
                    enumValue
                ]));
        }
        const enumValue = this._valueLookup.get(outputValue);
        if (enumValue === undefined) {
            throw new _GraphQLError.GraphQLError(`Enum "${this.name}" cannot represent value: ${(0, _inspect.inspect)(outputValue)}`);
        }
        return enumValue.name;
    }
    parseValue(inputValue) /* T */ {
        if (typeof inputValue !== "string") {
            const valueStr = (0, _inspect.inspect)(inputValue);
            throw new _GraphQLError.GraphQLError(`Enum "${this.name}" cannot represent non-string value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr));
        }
        const enumValue = this.getValue(inputValue);
        if (enumValue == null) {
            throw new _GraphQLError.GraphQLError(`Value "${inputValue}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, inputValue));
        }
        return enumValue.value;
    }
    parseLiteral(valueNode, _variables) /* T */ {
        // Note: variables will be resolved to a value before calling this function.
        if (valueNode.kind !== _kinds.Kind.ENUM) {
            const valueStr = (0, _printer.print)(valueNode);
            throw new _GraphQLError.GraphQLError(`Enum "${this.name}" cannot represent non-enum value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr), {
                nodes: valueNode
            });
        }
        const enumValue = this.getValue(valueNode.value);
        if (enumValue == null) {
            const valueStr = (0, _printer.print)(valueNode);
            throw new _GraphQLError.GraphQLError(`Value "${valueStr}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, valueStr), {
                nodes: valueNode
            });
        }
        return enumValue.value;
    }
    toConfig() {
        const values = (0, _keyValMap.keyValMap)(this.getValues(), (value)=>value.name, (value)=>({
                description: value.description,
                value: value.value,
                deprecationReason: value.deprecationReason,
                extensions: value.extensions,
                astNode: value.astNode
            }));
        return {
            name: this.name,
            description: this.description,
            values,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
}
exports.GraphQLEnumType = GraphQLEnumType;
function didYouMeanEnumValue(enumType, unknownValueStr) {
    const allNames = enumType.getValues().map((value)=>value.name);
    const suggestedValues = (0, _suggestionList.suggestionList)(unknownValueStr, allNames);
    return (0, _didYouMean.didYouMean)("the enum value", suggestedValues);
}
function defineEnumValues(typeName, valueMap) {
    isPlainObj(valueMap) || (0, _devAssert.devAssert)(false, `${typeName} values must be an object with value names as keys.`);
    return Object.entries(valueMap).map(([valueName, valueConfig])=>{
        isPlainObj(valueConfig) || (0, _devAssert.devAssert)(false, `${typeName}.${valueName} must refer to an object with a "value" key ` + `representing an internal value but got: ${(0, _inspect.inspect)(valueConfig)}.`);
        return {
            name: (0, _assertName.assertEnumValueName)(valueName),
            description: valueConfig.description,
            value: valueConfig.value !== undefined ? valueConfig.value : valueName,
            deprecationReason: valueConfig.deprecationReason,
            extensions: (0, _toObjMap.toObjMap)(valueConfig.extensions),
            astNode: valueConfig.astNode
        };
    });
}
/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 * ```ts
 * const GeoPoint = new GraphQLInputObjectType({
 *   name: 'GeoPoint',
 *   fields: {
 *     lat: { type: new GraphQLNonNull(GraphQLFloat) },
 *     lon: { type: new GraphQLNonNull(GraphQLFloat) },
 *     alt: { type: GraphQLFloat, defaultValue: 0 },
 *   }
 * });
 * ```
 */ class GraphQLInputObjectType {
    constructor(config){
        var _config$extensionASTN6, _config$isOneOf;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN6 = config.extensionASTNodes) !== null && _config$extensionASTN6 !== void 0 ? _config$extensionASTN6 : [];
        this.isOneOf = (_config$isOneOf = config.isOneOf) !== null && _config$isOneOf !== void 0 ? _config$isOneOf : false;
        this._fields = defineInputFieldMap.bind(undefined, config);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLInputObjectType";
    }
    getFields() {
        if (typeof this._fields === "function") {
            this._fields = this._fields();
        }
        return this._fields;
    }
    toConfig() {
        const fields = (0, _mapValue.mapValue)(this.getFields(), (field)=>({
                description: field.description,
                type: field.type,
                defaultValue: field.defaultValue,
                deprecationReason: field.deprecationReason,
                extensions: field.extensions,
                astNode: field.astNode
            }));
        return {
            name: this.name,
            description: this.description,
            fields,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
            isOneOf: this.isOneOf
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
}
exports.GraphQLInputObjectType = GraphQLInputObjectType;
function defineInputFieldMap(config) {
    const fieldMap = resolveObjMapThunk(config.fields);
    isPlainObj(fieldMap) || (0, _devAssert.devAssert)(false, `${config.name} fields must be an object with field names as keys or a function which returns such an object.`);
    return (0, _mapValue.mapValue)(fieldMap, (fieldConfig, fieldName)=>{
        !("resolve" in fieldConfig) || (0, _devAssert.devAssert)(false, `${config.name}.${fieldName} field has a resolve property, but Input Types cannot define resolvers.`);
        return {
            name: (0, _assertName.assertName)(fieldName),
            description: fieldConfig.description,
            type: fieldConfig.type,
            defaultValue: fieldConfig.defaultValue,
            deprecationReason: fieldConfig.deprecationReason,
            extensions: (0, _toObjMap.toObjMap)(fieldConfig.extensions),
            astNode: fieldConfig.astNode
        };
    });
}
function isRequiredInputField(field) {
    return isNonNullType(field.type) && field.defaultValue === undefined;
}


/***/ }),

/***/ 2194:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLSpecifiedByDirective = exports.GraphQLSkipDirective = exports.GraphQLOneOfDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = void 0;
exports.assertDirective = assertDirective;
exports.isDirective = isDirective;
exports.isSpecifiedDirective = isSpecifiedDirective;
exports.specifiedDirectives = void 0;
var _devAssert = __webpack_require__(6158);
var _inspect = __webpack_require__(893);
var _instanceOf = __webpack_require__(3387);
var _isObjectLike = __webpack_require__(9112);
var _toObjMap = __webpack_require__(2529);
var _directiveLocation = __webpack_require__(5650);
var _assertName = __webpack_require__(4423);
var _definition = __webpack_require__(2838);
var _scalars = __webpack_require__(6314);
/**
 * Test if the given value is a GraphQL directive.
 */ function isDirective(directive) {
    return (0, _instanceOf.instanceOf)(directive, GraphQLDirective);
}
function assertDirective(directive) {
    if (!isDirective(directive)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(directive)} to be a GraphQL directive.`);
    }
    return directive;
}
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */ /**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */ class GraphQLDirective {
    constructor(config){
        var _config$isRepeatable, _config$args;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.locations = config.locations;
        this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        Array.isArray(config.locations) || (0, _devAssert.devAssert)(false, `@${config.name} locations must be an Array.`);
        const args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
        (0, _isObjectLike.isObjectLike)(args) && !Array.isArray(args) || (0, _devAssert.devAssert)(false, `@${config.name} args must be an object with argument names as keys.`);
        this.args = (0, _definition.defineArguments)(args);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLDirective";
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: (0, _definition.argsToArgsConfig)(this.args),
            isRepeatable: this.isRepeatable,
            extensions: this.extensions,
            astNode: this.astNode
        };
    }
    toString() {
        return "@" + this.name;
    }
    toJSON() {
        return this.toString();
    }
}
exports.GraphQLDirective = GraphQLDirective;
/**
 * Used to conditionally include fields or fragments.
 */ const GraphQLIncludeDirective = new GraphQLDirective({
    name: "include",
    description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
    locations: [
        _directiveLocation.DirectiveLocation.FIELD,
        _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
        _directiveLocation.DirectiveLocation.INLINE_FRAGMENT
    ],
    args: {
        if: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            description: "Included when true."
        }
    }
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */ exports.GraphQLIncludeDirective = GraphQLIncludeDirective;
const GraphQLSkipDirective = new GraphQLDirective({
    name: "skip",
    description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
    locations: [
        _directiveLocation.DirectiveLocation.FIELD,
        _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
        _directiveLocation.DirectiveLocation.INLINE_FRAGMENT
    ],
    args: {
        if: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            description: "Skipped when true."
        }
    }
});
/**
 * Constant string used for default reason for a deprecation.
 */ exports.GraphQLSkipDirective = GraphQLSkipDirective;
const DEFAULT_DEPRECATION_REASON = "No longer supported";
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */ exports.DEFAULT_DEPRECATION_REASON = DEFAULT_DEPRECATION_REASON;
const GraphQLDeprecatedDirective = new GraphQLDirective({
    name: "deprecated",
    description: "Marks an element of a GraphQL schema as no longer supported.",
    locations: [
        _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
        _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
        _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
        _directiveLocation.DirectiveLocation.ENUM_VALUE
    ],
    args: {
        reason: {
            type: _scalars.GraphQLString,
            description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
            defaultValue: DEFAULT_DEPRECATION_REASON
        }
    }
});
/**
 * Used to provide a URL for specifying the behavior of custom scalar definitions.
 */ exports.GraphQLDeprecatedDirective = GraphQLDeprecatedDirective;
const GraphQLSpecifiedByDirective = new GraphQLDirective({
    name: "specifiedBy",
    description: "Exposes a URL that specifies the behavior of this scalar.",
    locations: [
        _directiveLocation.DirectiveLocation.SCALAR
    ],
    args: {
        url: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            description: "The URL that specifies the behavior of this scalar."
        }
    }
});
/**
 * Used to indicate an Input Object is a OneOf Input Object.
 */ exports.GraphQLSpecifiedByDirective = GraphQLSpecifiedByDirective;
const GraphQLOneOfDirective = new GraphQLDirective({
    name: "oneOf",
    description: "Indicates exactly one field must be supplied and this field must not be `null`.",
    locations: [
        _directiveLocation.DirectiveLocation.INPUT_OBJECT
    ],
    args: {}
});
/**
 * The full list of specified directives.
 */ exports.GraphQLOneOfDirective = GraphQLOneOfDirective;
const specifiedDirectives = Object.freeze([
    GraphQLIncludeDirective,
    GraphQLSkipDirective,
    GraphQLDeprecatedDirective,
    GraphQLSpecifiedByDirective,
    GraphQLOneOfDirective
]);
exports.specifiedDirectives = specifiedDirectives;
function isSpecifiedDirective(directive) {
    return specifiedDirectives.some(({ name })=>name === directive.name);
}


/***/ }),

/***/ 7559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", ({
    enumerable: true,
    get: function() {
        return _directives.DEFAULT_DEPRECATION_REASON;
    }
}));
Object.defineProperty(exports, "GRAPHQL_MAX_INT", ({
    enumerable: true,
    get: function() {
        return _scalars.GRAPHQL_MAX_INT;
    }
}));
Object.defineProperty(exports, "GRAPHQL_MIN_INT", ({
    enumerable: true,
    get: function() {
        return _scalars.GRAPHQL_MIN_INT;
    }
}));
Object.defineProperty(exports, "GraphQLBoolean", ({
    enumerable: true,
    get: function() {
        return _scalars.GraphQLBoolean;
    }
}));
Object.defineProperty(exports, "GraphQLDeprecatedDirective", ({
    enumerable: true,
    get: function() {
        return _directives.GraphQLDeprecatedDirective;
    }
}));
Object.defineProperty(exports, "GraphQLDirective", ({
    enumerable: true,
    get: function() {
        return _directives.GraphQLDirective;
    }
}));
Object.defineProperty(exports, "GraphQLEnumType", ({
    enumerable: true,
    get: function() {
        return _definition.GraphQLEnumType;
    }
}));
Object.defineProperty(exports, "GraphQLFloat", ({
    enumerable: true,
    get: function() {
        return _scalars.GraphQLFloat;
    }
}));
Object.defineProperty(exports, "GraphQLID", ({
    enumerable: true,
    get: function() {
        return _scalars.GraphQLID;
    }
}));
Object.defineProperty(exports, "GraphQLIncludeDirective", ({
    enumerable: true,
    get: function() {
        return _directives.GraphQLIncludeDirective;
    }
}));
Object.defineProperty(exports, "GraphQLInputObjectType", ({
    enumerable: true,
    get: function() {
        return _definition.GraphQLInputObjectType;
    }
}));
Object.defineProperty(exports, "GraphQLInt", ({
    enumerable: true,
    get: function() {
        return _scalars.GraphQLInt;
    }
}));
Object.defineProperty(exports, "GraphQLInterfaceType", ({
    enumerable: true,
    get: function() {
        return _definition.GraphQLInterfaceType;
    }
}));
Object.defineProperty(exports, "GraphQLList", ({
    enumerable: true,
    get: function() {
        return _definition.GraphQLList;
    }
}));
Object.defineProperty(exports, "GraphQLNonNull", ({
    enumerable: true,
    get: function() {
        return _definition.GraphQLNonNull;
    }
}));
Object.defineProperty(exports, "GraphQLObjectType", ({
    enumerable: true,
    get: function() {
        return _definition.GraphQLObjectType;
    }
}));
Object.defineProperty(exports, "GraphQLOneOfDirective", ({
    enumerable: true,
    get: function() {
        return _directives.GraphQLOneOfDirective;
    }
}));
Object.defineProperty(exports, "GraphQLScalarType", ({
    enumerable: true,
    get: function() {
        return _definition.GraphQLScalarType;
    }
}));
Object.defineProperty(exports, "GraphQLSchema", ({
    enumerable: true,
    get: function() {
        return _schema.GraphQLSchema;
    }
}));
Object.defineProperty(exports, "GraphQLSkipDirective", ({
    enumerable: true,
    get: function() {
        return _directives.GraphQLSkipDirective;
    }
}));
Object.defineProperty(exports, "GraphQLSpecifiedByDirective", ({
    enumerable: true,
    get: function() {
        return _directives.GraphQLSpecifiedByDirective;
    }
}));
Object.defineProperty(exports, "GraphQLString", ({
    enumerable: true,
    get: function() {
        return _scalars.GraphQLString;
    }
}));
Object.defineProperty(exports, "GraphQLUnionType", ({
    enumerable: true,
    get: function() {
        return _definition.GraphQLUnionType;
    }
}));
Object.defineProperty(exports, "SchemaMetaFieldDef", ({
    enumerable: true,
    get: function() {
        return _introspection.SchemaMetaFieldDef;
    }
}));
Object.defineProperty(exports, "TypeKind", ({
    enumerable: true,
    get: function() {
        return _introspection.TypeKind;
    }
}));
Object.defineProperty(exports, "TypeMetaFieldDef", ({
    enumerable: true,
    get: function() {
        return _introspection.TypeMetaFieldDef;
    }
}));
Object.defineProperty(exports, "TypeNameMetaFieldDef", ({
    enumerable: true,
    get: function() {
        return _introspection.TypeNameMetaFieldDef;
    }
}));
Object.defineProperty(exports, "__Directive", ({
    enumerable: true,
    get: function() {
        return _introspection.__Directive;
    }
}));
Object.defineProperty(exports, "__DirectiveLocation", ({
    enumerable: true,
    get: function() {
        return _introspection.__DirectiveLocation;
    }
}));
Object.defineProperty(exports, "__EnumValue", ({
    enumerable: true,
    get: function() {
        return _introspection.__EnumValue;
    }
}));
Object.defineProperty(exports, "__Field", ({
    enumerable: true,
    get: function() {
        return _introspection.__Field;
    }
}));
Object.defineProperty(exports, "__InputValue", ({
    enumerable: true,
    get: function() {
        return _introspection.__InputValue;
    }
}));
Object.defineProperty(exports, "__Schema", ({
    enumerable: true,
    get: function() {
        return _introspection.__Schema;
    }
}));
Object.defineProperty(exports, "__Type", ({
    enumerable: true,
    get: function() {
        return _introspection.__Type;
    }
}));
Object.defineProperty(exports, "__TypeKind", ({
    enumerable: true,
    get: function() {
        return _introspection.__TypeKind;
    }
}));
Object.defineProperty(exports, "assertAbstractType", ({
    enumerable: true,
    get: function() {
        return _definition.assertAbstractType;
    }
}));
Object.defineProperty(exports, "assertCompositeType", ({
    enumerable: true,
    get: function() {
        return _definition.assertCompositeType;
    }
}));
Object.defineProperty(exports, "assertDirective", ({
    enumerable: true,
    get: function() {
        return _directives.assertDirective;
    }
}));
Object.defineProperty(exports, "assertEnumType", ({
    enumerable: true,
    get: function() {
        return _definition.assertEnumType;
    }
}));
Object.defineProperty(exports, "assertEnumValueName", ({
    enumerable: true,
    get: function() {
        return _assertName.assertEnumValueName;
    }
}));
Object.defineProperty(exports, "assertInputObjectType", ({
    enumerable: true,
    get: function() {
        return _definition.assertInputObjectType;
    }
}));
Object.defineProperty(exports, "assertInputType", ({
    enumerable: true,
    get: function() {
        return _definition.assertInputType;
    }
}));
Object.defineProperty(exports, "assertInterfaceType", ({
    enumerable: true,
    get: function() {
        return _definition.assertInterfaceType;
    }
}));
Object.defineProperty(exports, "assertLeafType", ({
    enumerable: true,
    get: function() {
        return _definition.assertLeafType;
    }
}));
Object.defineProperty(exports, "assertListType", ({
    enumerable: true,
    get: function() {
        return _definition.assertListType;
    }
}));
Object.defineProperty(exports, "assertName", ({
    enumerable: true,
    get: function() {
        return _assertName.assertName;
    }
}));
Object.defineProperty(exports, "assertNamedType", ({
    enumerable: true,
    get: function() {
        return _definition.assertNamedType;
    }
}));
Object.defineProperty(exports, "assertNonNullType", ({
    enumerable: true,
    get: function() {
        return _definition.assertNonNullType;
    }
}));
Object.defineProperty(exports, "assertNullableType", ({
    enumerable: true,
    get: function() {
        return _definition.assertNullableType;
    }
}));
Object.defineProperty(exports, "assertObjectType", ({
    enumerable: true,
    get: function() {
        return _definition.assertObjectType;
    }
}));
Object.defineProperty(exports, "assertOutputType", ({
    enumerable: true,
    get: function() {
        return _definition.assertOutputType;
    }
}));
Object.defineProperty(exports, "assertScalarType", ({
    enumerable: true,
    get: function() {
        return _definition.assertScalarType;
    }
}));
Object.defineProperty(exports, "assertSchema", ({
    enumerable: true,
    get: function() {
        return _schema.assertSchema;
    }
}));
Object.defineProperty(exports, "assertType", ({
    enumerable: true,
    get: function() {
        return _definition.assertType;
    }
}));
Object.defineProperty(exports, "assertUnionType", ({
    enumerable: true,
    get: function() {
        return _definition.assertUnionType;
    }
}));
Object.defineProperty(exports, "assertValidSchema", ({
    enumerable: true,
    get: function() {
        return _validate.assertValidSchema;
    }
}));
Object.defineProperty(exports, "assertWrappingType", ({
    enumerable: true,
    get: function() {
        return _definition.assertWrappingType;
    }
}));
Object.defineProperty(exports, "getNamedType", ({
    enumerable: true,
    get: function() {
        return _definition.getNamedType;
    }
}));
Object.defineProperty(exports, "getNullableType", ({
    enumerable: true,
    get: function() {
        return _definition.getNullableType;
    }
}));
Object.defineProperty(exports, "introspectionTypes", ({
    enumerable: true,
    get: function() {
        return _introspection.introspectionTypes;
    }
}));
Object.defineProperty(exports, "isAbstractType", ({
    enumerable: true,
    get: function() {
        return _definition.isAbstractType;
    }
}));
Object.defineProperty(exports, "isCompositeType", ({
    enumerable: true,
    get: function() {
        return _definition.isCompositeType;
    }
}));
Object.defineProperty(exports, "isDirective", ({
    enumerable: true,
    get: function() {
        return _directives.isDirective;
    }
}));
Object.defineProperty(exports, "isEnumType", ({
    enumerable: true,
    get: function() {
        return _definition.isEnumType;
    }
}));
Object.defineProperty(exports, "isInputObjectType", ({
    enumerable: true,
    get: function() {
        return _definition.isInputObjectType;
    }
}));
Object.defineProperty(exports, "isInputType", ({
    enumerable: true,
    get: function() {
        return _definition.isInputType;
    }
}));
Object.defineProperty(exports, "isInterfaceType", ({
    enumerable: true,
    get: function() {
        return _definition.isInterfaceType;
    }
}));
Object.defineProperty(exports, "isIntrospectionType", ({
    enumerable: true,
    get: function() {
        return _introspection.isIntrospectionType;
    }
}));
Object.defineProperty(exports, "isLeafType", ({
    enumerable: true,
    get: function() {
        return _definition.isLeafType;
    }
}));
Object.defineProperty(exports, "isListType", ({
    enumerable: true,
    get: function() {
        return _definition.isListType;
    }
}));
Object.defineProperty(exports, "isNamedType", ({
    enumerable: true,
    get: function() {
        return _definition.isNamedType;
    }
}));
Object.defineProperty(exports, "isNonNullType", ({
    enumerable: true,
    get: function() {
        return _definition.isNonNullType;
    }
}));
Object.defineProperty(exports, "isNullableType", ({
    enumerable: true,
    get: function() {
        return _definition.isNullableType;
    }
}));
Object.defineProperty(exports, "isObjectType", ({
    enumerable: true,
    get: function() {
        return _definition.isObjectType;
    }
}));
Object.defineProperty(exports, "isOutputType", ({
    enumerable: true,
    get: function() {
        return _definition.isOutputType;
    }
}));
Object.defineProperty(exports, "isRequiredArgument", ({
    enumerable: true,
    get: function() {
        return _definition.isRequiredArgument;
    }
}));
Object.defineProperty(exports, "isRequiredInputField", ({
    enumerable: true,
    get: function() {
        return _definition.isRequiredInputField;
    }
}));
Object.defineProperty(exports, "isScalarType", ({
    enumerable: true,
    get: function() {
        return _definition.isScalarType;
    }
}));
Object.defineProperty(exports, "isSchema", ({
    enumerable: true,
    get: function() {
        return _schema.isSchema;
    }
}));
Object.defineProperty(exports, "isSpecifiedDirective", ({
    enumerable: true,
    get: function() {
        return _directives.isSpecifiedDirective;
    }
}));
Object.defineProperty(exports, "isSpecifiedScalarType", ({
    enumerable: true,
    get: function() {
        return _scalars.isSpecifiedScalarType;
    }
}));
Object.defineProperty(exports, "isType", ({
    enumerable: true,
    get: function() {
        return _definition.isType;
    }
}));
Object.defineProperty(exports, "isUnionType", ({
    enumerable: true,
    get: function() {
        return _definition.isUnionType;
    }
}));
Object.defineProperty(exports, "isWrappingType", ({
    enumerable: true,
    get: function() {
        return _definition.isWrappingType;
    }
}));
Object.defineProperty(exports, "resolveObjMapThunk", ({
    enumerable: true,
    get: function() {
        return _definition.resolveObjMapThunk;
    }
}));
Object.defineProperty(exports, "resolveReadonlyArrayThunk", ({
    enumerable: true,
    get: function() {
        return _definition.resolveReadonlyArrayThunk;
    }
}));
Object.defineProperty(exports, "specifiedDirectives", ({
    enumerable: true,
    get: function() {
        return _directives.specifiedDirectives;
    }
}));
Object.defineProperty(exports, "specifiedScalarTypes", ({
    enumerable: true,
    get: function() {
        return _scalars.specifiedScalarTypes;
    }
}));
Object.defineProperty(exports, "validateSchema", ({
    enumerable: true,
    get: function() {
        return _validate.validateSchema;
    }
}));
var _schema = __webpack_require__(5761);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
var _scalars = __webpack_require__(6314);
var _introspection = __webpack_require__(8840);
var _validate = __webpack_require__(2419);
var _assertName = __webpack_require__(4423);


/***/ }),

/***/ 8840:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.introspectionTypes = exports.__TypeKind = exports.__Type = exports.__Schema = exports.__InputValue = exports.__Field = exports.__EnumValue = exports.__DirectiveLocation = exports.__Directive = exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.TypeKind = exports.SchemaMetaFieldDef = void 0;
exports.isIntrospectionType = isIntrospectionType;
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _directiveLocation = __webpack_require__(5650);
var _printer = __webpack_require__(5332);
var _astFromValue = __webpack_require__(5128);
var _definition = __webpack_require__(2838);
var _scalars = __webpack_require__(6314);
const __Schema = new _definition.GraphQLObjectType({
    name: "__Schema",
    description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
    fields: ()=>({
            description: {
                type: _scalars.GraphQLString,
                resolve: (schema)=>schema.description
            },
            types: {
                description: "A list of all types supported by this server.",
                type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
                resolve (schema) {
                    return Object.values(schema.getTypeMap());
                }
            },
            queryType: {
                description: "The type that query operations will be rooted at.",
                type: new _definition.GraphQLNonNull(__Type),
                resolve: (schema)=>schema.getQueryType()
            },
            mutationType: {
                description: "If this server supports mutation, the type that mutation operations will be rooted at.",
                type: __Type,
                resolve: (schema)=>schema.getMutationType()
            },
            subscriptionType: {
                description: "If this server support subscription, the type that subscription operations will be rooted at.",
                type: __Type,
                resolve: (schema)=>schema.getSubscriptionType()
            },
            directives: {
                description: "A list of all directives supported by this server.",
                type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
                resolve: (schema)=>schema.getDirectives()
            }
        })
});
exports.__Schema = __Schema;
const __Directive = new _definition.GraphQLObjectType({
    name: "__Directive",
    description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
    fields: ()=>({
            name: {
                type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
                resolve: (directive)=>directive.name
            },
            description: {
                type: _scalars.GraphQLString,
                resolve: (directive)=>directive.description
            },
            isRepeatable: {
                type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
                resolve: (directive)=>directive.isRepeatable
            },
            locations: {
                type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation))),
                resolve: (directive)=>directive.locations
            },
            args: {
                type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
                args: {
                    includeDeprecated: {
                        type: _scalars.GraphQLBoolean,
                        defaultValue: false
                    }
                },
                resolve (field, { includeDeprecated }) {
                    return includeDeprecated ? field.args : field.args.filter((arg)=>arg.deprecationReason == null);
                }
            }
        })
});
exports.__Directive = __Directive;
const __DirectiveLocation = new _definition.GraphQLEnumType({
    name: "__DirectiveLocation",
    description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
    values: {
        QUERY: {
            value: _directiveLocation.DirectiveLocation.QUERY,
            description: "Location adjacent to a query operation."
        },
        MUTATION: {
            value: _directiveLocation.DirectiveLocation.MUTATION,
            description: "Location adjacent to a mutation operation."
        },
        SUBSCRIPTION: {
            value: _directiveLocation.DirectiveLocation.SUBSCRIPTION,
            description: "Location adjacent to a subscription operation."
        },
        FIELD: {
            value: _directiveLocation.DirectiveLocation.FIELD,
            description: "Location adjacent to a field."
        },
        FRAGMENT_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION,
            description: "Location adjacent to a fragment definition."
        },
        FRAGMENT_SPREAD: {
            value: _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
            description: "Location adjacent to a fragment spread."
        },
        INLINE_FRAGMENT: {
            value: _directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
            description: "Location adjacent to an inline fragment."
        },
        VARIABLE_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION,
            description: "Location adjacent to a variable definition."
        },
        SCHEMA: {
            value: _directiveLocation.DirectiveLocation.SCHEMA,
            description: "Location adjacent to a schema definition."
        },
        SCALAR: {
            value: _directiveLocation.DirectiveLocation.SCALAR,
            description: "Location adjacent to a scalar definition."
        },
        OBJECT: {
            value: _directiveLocation.DirectiveLocation.OBJECT,
            description: "Location adjacent to an object type definition."
        },
        FIELD_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
            description: "Location adjacent to a field definition."
        },
        ARGUMENT_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
            description: "Location adjacent to an argument definition."
        },
        INTERFACE: {
            value: _directiveLocation.DirectiveLocation.INTERFACE,
            description: "Location adjacent to an interface definition."
        },
        UNION: {
            value: _directiveLocation.DirectiveLocation.UNION,
            description: "Location adjacent to a union definition."
        },
        ENUM: {
            value: _directiveLocation.DirectiveLocation.ENUM,
            description: "Location adjacent to an enum definition."
        },
        ENUM_VALUE: {
            value: _directiveLocation.DirectiveLocation.ENUM_VALUE,
            description: "Location adjacent to an enum value definition."
        },
        INPUT_OBJECT: {
            value: _directiveLocation.DirectiveLocation.INPUT_OBJECT,
            description: "Location adjacent to an input object type definition."
        },
        INPUT_FIELD_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
            description: "Location adjacent to an input object field definition."
        }
    }
});
exports.__DirectiveLocation = __DirectiveLocation;
const __Type = new _definition.GraphQLObjectType({
    name: "__Type",
    description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
    fields: ()=>({
            kind: {
                type: new _definition.GraphQLNonNull(__TypeKind),
                resolve (type) {
                    if ((0, _definition.isScalarType)(type)) {
                        return TypeKind.SCALAR;
                    }
                    if ((0, _definition.isObjectType)(type)) {
                        return TypeKind.OBJECT;
                    }
                    if ((0, _definition.isInterfaceType)(type)) {
                        return TypeKind.INTERFACE;
                    }
                    if ((0, _definition.isUnionType)(type)) {
                        return TypeKind.UNION;
                    }
                    if ((0, _definition.isEnumType)(type)) {
                        return TypeKind.ENUM;
                    }
                    if ((0, _definition.isInputObjectType)(type)) {
                        return TypeKind.INPUT_OBJECT;
                    }
                    if ((0, _definition.isListType)(type)) {
                        return TypeKind.LIST;
                    }
                    if ((0, _definition.isNonNullType)(type)) {
                        return TypeKind.NON_NULL;
                    }
                    /* c8 ignore next 3 */ // Not reachable, all possible types have been considered)
                     false || (0, _invariant.invariant)(false, `Unexpected type: "${(0, _inspect.inspect)(type)}".`);
                }
            },
            name: {
                type: _scalars.GraphQLString,
                resolve: (type)=>"name" in type ? type.name : undefined
            },
            description: {
                type: _scalars.GraphQLString,
                resolve: (type)=>/* c8 ignore next */ "description" in type ? type.description : undefined
            },
            specifiedByURL: {
                type: _scalars.GraphQLString,
                resolve: (obj)=>"specifiedByURL" in obj ? obj.specifiedByURL : undefined
            },
            fields: {
                type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
                args: {
                    includeDeprecated: {
                        type: _scalars.GraphQLBoolean,
                        defaultValue: false
                    }
                },
                resolve (type, { includeDeprecated }) {
                    if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
                        const fields = Object.values(type.getFields());
                        return includeDeprecated ? fields : fields.filter((field)=>field.deprecationReason == null);
                    }
                }
            },
            interfaces: {
                type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
                resolve (type) {
                    if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
                        return type.getInterfaces();
                    }
                }
            },
            possibleTypes: {
                type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
                resolve (type, _args, _context, { schema }) {
                    if ((0, _definition.isAbstractType)(type)) {
                        return schema.getPossibleTypes(type);
                    }
                }
            },
            enumValues: {
                type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
                args: {
                    includeDeprecated: {
                        type: _scalars.GraphQLBoolean,
                        defaultValue: false
                    }
                },
                resolve (type, { includeDeprecated }) {
                    if ((0, _definition.isEnumType)(type)) {
                        const values = type.getValues();
                        return includeDeprecated ? values : values.filter((field)=>field.deprecationReason == null);
                    }
                }
            },
            inputFields: {
                type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
                args: {
                    includeDeprecated: {
                        type: _scalars.GraphQLBoolean,
                        defaultValue: false
                    }
                },
                resolve (type, { includeDeprecated }) {
                    if ((0, _definition.isInputObjectType)(type)) {
                        const values = Object.values(type.getFields());
                        return includeDeprecated ? values : values.filter((field)=>field.deprecationReason == null);
                    }
                }
            },
            ofType: {
                type: __Type,
                resolve: (type)=>"ofType" in type ? type.ofType : undefined
            },
            isOneOf: {
                type: _scalars.GraphQLBoolean,
                resolve: (type)=>{
                    if ((0, _definition.isInputObjectType)(type)) {
                        return type.isOneOf;
                    }
                }
            }
        })
});
exports.__Type = __Type;
const __Field = new _definition.GraphQLObjectType({
    name: "__Field",
    description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
    fields: ()=>({
            name: {
                type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
                resolve: (field)=>field.name
            },
            description: {
                type: _scalars.GraphQLString,
                resolve: (field)=>field.description
            },
            args: {
                type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
                args: {
                    includeDeprecated: {
                        type: _scalars.GraphQLBoolean,
                        defaultValue: false
                    }
                },
                resolve (field, { includeDeprecated }) {
                    return includeDeprecated ? field.args : field.args.filter((arg)=>arg.deprecationReason == null);
                }
            },
            type: {
                type: new _definition.GraphQLNonNull(__Type),
                resolve: (field)=>field.type
            },
            isDeprecated: {
                type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
                resolve: (field)=>field.deprecationReason != null
            },
            deprecationReason: {
                type: _scalars.GraphQLString,
                resolve: (field)=>field.deprecationReason
            }
        })
});
exports.__Field = __Field;
const __InputValue = new _definition.GraphQLObjectType({
    name: "__InputValue",
    description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
    fields: ()=>({
            name: {
                type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
                resolve: (inputValue)=>inputValue.name
            },
            description: {
                type: _scalars.GraphQLString,
                resolve: (inputValue)=>inputValue.description
            },
            type: {
                type: new _definition.GraphQLNonNull(__Type),
                resolve: (inputValue)=>inputValue.type
            },
            defaultValue: {
                type: _scalars.GraphQLString,
                description: "A GraphQL-formatted string representing the default value for this input value.",
                resolve (inputValue) {
                    const { type, defaultValue } = inputValue;
                    const valueAST = (0, _astFromValue.astFromValue)(defaultValue, type);
                    return valueAST ? (0, _printer.print)(valueAST) : null;
                }
            },
            isDeprecated: {
                type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
                resolve: (field)=>field.deprecationReason != null
            },
            deprecationReason: {
                type: _scalars.GraphQLString,
                resolve: (obj)=>obj.deprecationReason
            }
        })
});
exports.__InputValue = __InputValue;
const __EnumValue = new _definition.GraphQLObjectType({
    name: "__EnumValue",
    description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
    fields: ()=>({
            name: {
                type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
                resolve: (enumValue)=>enumValue.name
            },
            description: {
                type: _scalars.GraphQLString,
                resolve: (enumValue)=>enumValue.description
            },
            isDeprecated: {
                type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
                resolve: (enumValue)=>enumValue.deprecationReason != null
            },
            deprecationReason: {
                type: _scalars.GraphQLString,
                resolve: (enumValue)=>enumValue.deprecationReason
            }
        })
});
exports.__EnumValue = __EnumValue;
var TypeKind;
exports.TypeKind = TypeKind;
(function(TypeKind) {
    TypeKind["SCALAR"] = "SCALAR";
    TypeKind["OBJECT"] = "OBJECT";
    TypeKind["INTERFACE"] = "INTERFACE";
    TypeKind["UNION"] = "UNION";
    TypeKind["ENUM"] = "ENUM";
    TypeKind["INPUT_OBJECT"] = "INPUT_OBJECT";
    TypeKind["LIST"] = "LIST";
    TypeKind["NON_NULL"] = "NON_NULL";
})(TypeKind || (exports.TypeKind = TypeKind = {}));
const __TypeKind = new _definition.GraphQLEnumType({
    name: "__TypeKind",
    description: "An enum describing what kind of type a given `__Type` is.",
    values: {
        SCALAR: {
            value: TypeKind.SCALAR,
            description: "Indicates this type is a scalar."
        },
        OBJECT: {
            value: TypeKind.OBJECT,
            description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
        },
        INTERFACE: {
            value: TypeKind.INTERFACE,
            description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
        },
        UNION: {
            value: TypeKind.UNION,
            description: "Indicates this type is a union. `possibleTypes` is a valid field."
        },
        ENUM: {
            value: TypeKind.ENUM,
            description: "Indicates this type is an enum. `enumValues` is a valid field."
        },
        INPUT_OBJECT: {
            value: TypeKind.INPUT_OBJECT,
            description: "Indicates this type is an input object. `inputFields` is a valid field."
        },
        LIST: {
            value: TypeKind.LIST,
            description: "Indicates this type is a list. `ofType` is a valid field."
        },
        NON_NULL: {
            value: TypeKind.NON_NULL,
            description: "Indicates this type is a non-null. `ofType` is a valid field."
        }
    }
});
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */ exports.__TypeKind = __TypeKind;
const SchemaMetaFieldDef = {
    name: "__schema",
    type: new _definition.GraphQLNonNull(__Schema),
    description: "Access the current type schema of this server.",
    args: [],
    resolve: (_source, _args, _context, { schema })=>schema,
    deprecationReason: undefined,
    extensions: Object.create(null),
    astNode: undefined
};
exports.SchemaMetaFieldDef = SchemaMetaFieldDef;
const TypeMetaFieldDef = {
    name: "__type",
    type: __Type,
    description: "Request the type information of a single type.",
    args: [
        {
            name: "name",
            description: undefined,
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            defaultValue: undefined,
            deprecationReason: undefined,
            extensions: Object.create(null),
            astNode: undefined
        }
    ],
    resolve: (_source, { name }, _context, { schema })=>schema.getType(name),
    deprecationReason: undefined,
    extensions: Object.create(null),
    astNode: undefined
};
exports.TypeMetaFieldDef = TypeMetaFieldDef;
const TypeNameMetaFieldDef = {
    name: "__typename",
    type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
    description: "The name of the current Object type at runtime.",
    args: [],
    resolve: (_source, _args, _context, { parentType })=>parentType.name,
    deprecationReason: undefined,
    extensions: Object.create(null),
    astNode: undefined
};
exports.TypeNameMetaFieldDef = TypeNameMetaFieldDef;
const introspectionTypes = Object.freeze([
    __Schema,
    __Directive,
    __DirectiveLocation,
    __Type,
    __Field,
    __InputValue,
    __EnumValue,
    __TypeKind
]);
exports.introspectionTypes = introspectionTypes;
function isIntrospectionType(type) {
    return introspectionTypes.some(({ name })=>type.name === name);
}


/***/ }),

/***/ 6314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLString = exports.GraphQLInt = exports.GraphQLID = exports.GraphQLFloat = exports.GraphQLBoolean = exports.GRAPHQL_MIN_INT = exports.GRAPHQL_MAX_INT = void 0;
exports.isSpecifiedScalarType = isSpecifiedScalarType;
exports.specifiedScalarTypes = void 0;
var _inspect = __webpack_require__(893);
var _isObjectLike = __webpack_require__(9112);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
/**
 * Maximum possible Int value as per GraphQL Spec (32-bit signed integer).
 * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe up-to 2^53 - 1
 * */ const GRAPHQL_MAX_INT = 2147483647;
/**
 * Minimum possible Int value as per GraphQL Spec (32-bit signed integer).
 * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe starting at -(2^53 - 1)
 * */ exports.GRAPHQL_MAX_INT = GRAPHQL_MAX_INT;
const GRAPHQL_MIN_INT = -2147483648;
exports.GRAPHQL_MIN_INT = GRAPHQL_MIN_INT;
const GraphQLInt = new _definition.GraphQLScalarType({
    name: "Int",
    description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
    serialize (outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "boolean") {
            return coercedValue ? 1 : 0;
        }
        let num = coercedValue;
        if (typeof coercedValue === "string" && coercedValue !== "") {
            num = Number(coercedValue);
        }
        if (typeof num !== "number" || !Number.isInteger(num)) {
            throw new _GraphQLError.GraphQLError(`Int cannot represent non-integer value: ${(0, _inspect.inspect)(coercedValue)}`);
        }
        if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
            throw new _GraphQLError.GraphQLError("Int cannot represent non 32-bit signed integer value: " + (0, _inspect.inspect)(coercedValue));
        }
        return num;
    },
    parseValue (inputValue) {
        if (typeof inputValue !== "number" || !Number.isInteger(inputValue)) {
            throw new _GraphQLError.GraphQLError(`Int cannot represent non-integer value: ${(0, _inspect.inspect)(inputValue)}`);
        }
        if (inputValue > GRAPHQL_MAX_INT || inputValue < GRAPHQL_MIN_INT) {
            throw new _GraphQLError.GraphQLError(`Int cannot represent non 32-bit signed integer value: ${inputValue}`);
        }
        return inputValue;
    },
    parseLiteral (valueNode) {
        if (valueNode.kind !== _kinds.Kind.INT) {
            throw new _GraphQLError.GraphQLError(`Int cannot represent non-integer value: ${(0, _printer.print)(valueNode)}`, {
                nodes: valueNode
            });
        }
        const num = parseInt(valueNode.value, 10);
        if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
            throw new _GraphQLError.GraphQLError(`Int cannot represent non 32-bit signed integer value: ${valueNode.value}`, {
                nodes: valueNode
            });
        }
        return num;
    }
});
exports.GraphQLInt = GraphQLInt;
const GraphQLFloat = new _definition.GraphQLScalarType({
    name: "Float",
    description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
    serialize (outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "boolean") {
            return coercedValue ? 1 : 0;
        }
        let num = coercedValue;
        if (typeof coercedValue === "string" && coercedValue !== "") {
            num = Number(coercedValue);
        }
        if (typeof num !== "number" || !Number.isFinite(num)) {
            throw new _GraphQLError.GraphQLError(`Float cannot represent non numeric value: ${(0, _inspect.inspect)(coercedValue)}`);
        }
        return num;
    },
    parseValue (inputValue) {
        if (typeof inputValue !== "number" || !Number.isFinite(inputValue)) {
            throw new _GraphQLError.GraphQLError(`Float cannot represent non numeric value: ${(0, _inspect.inspect)(inputValue)}`);
        }
        return inputValue;
    },
    parseLiteral (valueNode) {
        if (valueNode.kind !== _kinds.Kind.FLOAT && valueNode.kind !== _kinds.Kind.INT) {
            throw new _GraphQLError.GraphQLError(`Float cannot represent non numeric value: ${(0, _printer.print)(valueNode)}`, valueNode);
        }
        return parseFloat(valueNode.value);
    }
});
exports.GraphQLFloat = GraphQLFloat;
const GraphQLString = new _definition.GraphQLScalarType({
    name: "String",
    description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
    serialize (outputValue) {
        const coercedValue = serializeObject(outputValue); // Serialize string, boolean and number values to a string, but do not
        // attempt to coerce object, function, symbol, or other types as strings.
        if (typeof coercedValue === "string") {
            return coercedValue;
        }
        if (typeof coercedValue === "boolean") {
            return coercedValue ? "true" : "false";
        }
        if (typeof coercedValue === "number" && Number.isFinite(coercedValue)) {
            return coercedValue.toString();
        }
        throw new _GraphQLError.GraphQLError(`String cannot represent value: ${(0, _inspect.inspect)(outputValue)}`);
    },
    parseValue (inputValue) {
        if (typeof inputValue !== "string") {
            throw new _GraphQLError.GraphQLError(`String cannot represent a non string value: ${(0, _inspect.inspect)(inputValue)}`);
        }
        return inputValue;
    },
    parseLiteral (valueNode) {
        if (valueNode.kind !== _kinds.Kind.STRING) {
            throw new _GraphQLError.GraphQLError(`String cannot represent a non string value: ${(0, _printer.print)(valueNode)}`, {
                nodes: valueNode
            });
        }
        return valueNode.value;
    }
});
exports.GraphQLString = GraphQLString;
const GraphQLBoolean = new _definition.GraphQLScalarType({
    name: "Boolean",
    description: "The `Boolean` scalar type represents `true` or `false`.",
    serialize (outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "boolean") {
            return coercedValue;
        }
        if (Number.isFinite(coercedValue)) {
            return coercedValue !== 0;
        }
        throw new _GraphQLError.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, _inspect.inspect)(coercedValue)}`);
    },
    parseValue (inputValue) {
        if (typeof inputValue !== "boolean") {
            throw new _GraphQLError.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, _inspect.inspect)(inputValue)}`);
        }
        return inputValue;
    },
    parseLiteral (valueNode) {
        if (valueNode.kind !== _kinds.Kind.BOOLEAN) {
            throw new _GraphQLError.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, _printer.print)(valueNode)}`, {
                nodes: valueNode
            });
        }
        return valueNode.value;
    }
});
exports.GraphQLBoolean = GraphQLBoolean;
const GraphQLID = new _definition.GraphQLScalarType({
    name: "ID",
    description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
    serialize (outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "string") {
            return coercedValue;
        }
        if (Number.isInteger(coercedValue)) {
            return String(coercedValue);
        }
        throw new _GraphQLError.GraphQLError(`ID cannot represent value: ${(0, _inspect.inspect)(outputValue)}`);
    },
    parseValue (inputValue) {
        if (typeof inputValue === "string") {
            return inputValue;
        }
        if (typeof inputValue === "number" && Number.isInteger(inputValue)) {
            return inputValue.toString();
        }
        throw new _GraphQLError.GraphQLError(`ID cannot represent value: ${(0, _inspect.inspect)(inputValue)}`);
    },
    parseLiteral (valueNode) {
        if (valueNode.kind !== _kinds.Kind.STRING && valueNode.kind !== _kinds.Kind.INT) {
            throw new _GraphQLError.GraphQLError("ID cannot represent a non-string and non-integer value: " + (0, _printer.print)(valueNode), {
                nodes: valueNode
            });
        }
        return valueNode.value;
    }
});
exports.GraphQLID = GraphQLID;
const specifiedScalarTypes = Object.freeze([
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLID
]);
exports.specifiedScalarTypes = specifiedScalarTypes;
function isSpecifiedScalarType(type) {
    return specifiedScalarTypes.some(({ name })=>type.name === name);
} // Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).
function serializeObject(outputValue) {
    if ((0, _isObjectLike.isObjectLike)(outputValue)) {
        if (typeof outputValue.valueOf === "function") {
            const valueOfResult = outputValue.valueOf();
            if (!(0, _isObjectLike.isObjectLike)(valueOfResult)) {
                return valueOfResult;
            }
        }
        if (typeof outputValue.toJSON === "function") {
            return outputValue.toJSON();
        }
    }
    return outputValue;
}


/***/ }),

/***/ 5761:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLSchema = void 0;
exports.assertSchema = assertSchema;
exports.isSchema = isSchema;
var _devAssert = __webpack_require__(6158);
var _inspect = __webpack_require__(893);
var _instanceOf = __webpack_require__(3387);
var _isObjectLike = __webpack_require__(9112);
var _toObjMap = __webpack_require__(2529);
var _ast = __webpack_require__(1874);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
var _introspection = __webpack_require__(8840);
/**
 * Test if the given value is a GraphQL schema.
 */ function isSchema(schema) {
    return (0, _instanceOf.instanceOf)(schema, GraphQLSchema);
}
function assertSchema(schema) {
    if (!isSchema(schema)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(schema)} to be a GraphQL schema.`);
    }
    return schema;
}
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */ /**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 * ```ts
 * const MyAppSchema = new GraphQLSchema({
 *   query: MyAppQueryRootType,
 *   mutation: MyAppMutationRootType,
 * })
 * ```
 *
 * Note: When the schema is constructed, by default only the types that are
 * reachable by traversing the root types are included, other types must be
 * explicitly referenced.
 *
 * Example:
 *
 * ```ts
 * const characterInterface = new GraphQLInterfaceType({
 *   name: 'Character',
 *   ...
 * });
 *
 * const humanType = new GraphQLObjectType({
 *   name: 'Human',
 *   interfaces: [characterInterface],
 *   ...
 * });
 *
 * const droidType = new GraphQLObjectType({
 *   name: 'Droid',
 *   interfaces: [characterInterface],
 *   ...
 * });
 *
 * const schema = new GraphQLSchema({
 *   query: new GraphQLObjectType({
 *     name: 'Query',
 *     fields: {
 *       hero: { type: characterInterface, ... },
 *     }
 *   }),
 *   ...
 *   // Since this schema references only the `Character` interface it's
 *   // necessary to explicitly list the types that implement it if
 *   // you want them to be included in the final schema.
 *   types: [humanType, droidType],
 * })
 * ```
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. `@include` and
 * `@skip`) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 * ```ts
 * const MyAppSchema = new GraphQLSchema({
 *   ...
 *   directives: specifiedDirectives.concat([ myCustomDirective ]),
 * })
 * ```
 */ class GraphQLSchema {
    // Used as a cache for validateSchema().
    constructor(config){
        var _config$extensionASTN, _config$directives;
        // If this schema was built from a source known to be valid, then it may be
        // marked with assumeValid to avoid an additional type system validation.
        this.__validationErrors = config.assumeValid === true ? [] : undefined; // Check for common mistakes during construction to produce early errors.
        (0, _isObjectLike.isObjectLike)(config) || (0, _devAssert.devAssert)(false, "Must provide configuration object.");
        !config.types || Array.isArray(config.types) || (0, _devAssert.devAssert)(false, `"types" must be Array if provided but got: ${(0, _inspect.inspect)(config.types)}.`);
        !config.directives || Array.isArray(config.directives) || (0, _devAssert.devAssert)(false, '"directives" must be Array if provided but got: ' + `${(0, _inspect.inspect)(config.directives)}.`);
        this.description = config.description;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
        this._queryType = config.query;
        this._mutationType = config.mutation;
        this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.
        this._directives = (_config$directives = config.directives) !== null && _config$directives !== void 0 ? _config$directives : _directives.specifiedDirectives; // To preserve order of user-provided types, we add first to add them to
        // the set of "collected" types, so `collectReferencedTypes` ignore them.
        const allReferencedTypes = new Set(config.types);
        if (config.types != null) {
            for (const type of config.types){
                // When we ready to process this type, we remove it from "collected" types
                // and then add it together with all dependent types in the correct position.
                allReferencedTypes.delete(type);
                collectReferencedTypes(type, allReferencedTypes);
            }
        }
        if (this._queryType != null) {
            collectReferencedTypes(this._queryType, allReferencedTypes);
        }
        if (this._mutationType != null) {
            collectReferencedTypes(this._mutationType, allReferencedTypes);
        }
        if (this._subscriptionType != null) {
            collectReferencedTypes(this._subscriptionType, allReferencedTypes);
        }
        for (const directive of this._directives){
            // Directives are not validated until validateSchema() is called.
            if ((0, _directives.isDirective)(directive)) {
                for (const arg of directive.args){
                    collectReferencedTypes(arg.type, allReferencedTypes);
                }
            }
        }
        collectReferencedTypes(_introspection.__Schema, allReferencedTypes); // Storing the resulting map for reference by the schema.
        this._typeMap = Object.create(null);
        this._subTypeMap = Object.create(null); // Keep track of all implementations by interface name.
        this._implementationsMap = Object.create(null);
        for (const namedType of allReferencedTypes){
            if (namedType == null) {
                continue;
            }
            const typeName = namedType.name;
            typeName || (0, _devAssert.devAssert)(false, "One of the provided types for building the Schema is missing a name.");
            if (this._typeMap[typeName] !== undefined) {
                throw new Error(`Schema must contain uniquely named types but contains multiple types named "${typeName}".`);
            }
            this._typeMap[typeName] = namedType;
            if ((0, _definition.isInterfaceType)(namedType)) {
                // Store implementations by interface.
                for (const iface of namedType.getInterfaces()){
                    if ((0, _definition.isInterfaceType)(iface)) {
                        let implementations = this._implementationsMap[iface.name];
                        if (implementations === undefined) {
                            implementations = this._implementationsMap[iface.name] = {
                                objects: [],
                                interfaces: []
                            };
                        }
                        implementations.interfaces.push(namedType);
                    }
                }
            } else if ((0, _definition.isObjectType)(namedType)) {
                // Store implementations by objects.
                for (const iface of namedType.getInterfaces()){
                    if ((0, _definition.isInterfaceType)(iface)) {
                        let implementations = this._implementationsMap[iface.name];
                        if (implementations === undefined) {
                            implementations = this._implementationsMap[iface.name] = {
                                objects: [],
                                interfaces: []
                            };
                        }
                        implementations.objects.push(namedType);
                    }
                }
            }
        }
    }
    get [Symbol.toStringTag]() {
        return "GraphQLSchema";
    }
    getQueryType() {
        return this._queryType;
    }
    getMutationType() {
        return this._mutationType;
    }
    getSubscriptionType() {
        return this._subscriptionType;
    }
    getRootType(operation) {
        switch(operation){
            case _ast.OperationTypeNode.QUERY:
                return this.getQueryType();
            case _ast.OperationTypeNode.MUTATION:
                return this.getMutationType();
            case _ast.OperationTypeNode.SUBSCRIPTION:
                return this.getSubscriptionType();
        }
    }
    getTypeMap() {
        return this._typeMap;
    }
    getType(name) {
        return this.getTypeMap()[name];
    }
    getPossibleTypes(abstractType) {
        return (0, _definition.isUnionType)(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
    }
    getImplementations(interfaceType) {
        const implementations = this._implementationsMap[interfaceType.name];
        return implementations !== null && implementations !== void 0 ? implementations : {
            objects: [],
            interfaces: []
        };
    }
    isSubType(abstractType, maybeSubType) {
        let map = this._subTypeMap[abstractType.name];
        if (map === undefined) {
            map = Object.create(null);
            if ((0, _definition.isUnionType)(abstractType)) {
                for (const type of abstractType.getTypes()){
                    map[type.name] = true;
                }
            } else {
                const implementations = this.getImplementations(abstractType);
                for (const type of implementations.objects){
                    map[type.name] = true;
                }
                for (const type of implementations.interfaces){
                    map[type.name] = true;
                }
            }
            this._subTypeMap[abstractType.name] = map;
        }
        return map[maybeSubType.name] !== undefined;
    }
    getDirectives() {
        return this._directives;
    }
    getDirective(name) {
        return this.getDirectives().find((directive)=>directive.name === name);
    }
    toConfig() {
        return {
            description: this.description,
            query: this.getQueryType(),
            mutation: this.getMutationType(),
            subscription: this.getSubscriptionType(),
            types: Object.values(this.getTypeMap()),
            directives: this.getDirectives(),
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
            assumeValid: this.__validationErrors !== undefined
        };
    }
}
exports.GraphQLSchema = GraphQLSchema;
function collectReferencedTypes(type, typeSet) {
    const namedType = (0, _definition.getNamedType)(type);
    if (!typeSet.has(namedType)) {
        typeSet.add(namedType);
        if ((0, _definition.isUnionType)(namedType)) {
            for (const memberType of namedType.getTypes()){
                collectReferencedTypes(memberType, typeSet);
            }
        } else if ((0, _definition.isObjectType)(namedType) || (0, _definition.isInterfaceType)(namedType)) {
            for (const interfaceType of namedType.getInterfaces()){
                collectReferencedTypes(interfaceType, typeSet);
            }
            for (const field of Object.values(namedType.getFields())){
                collectReferencedTypes(field.type, typeSet);
                for (const arg of field.args){
                    collectReferencedTypes(arg.type, typeSet);
                }
            }
        } else if ((0, _definition.isInputObjectType)(namedType)) {
            for (const field of Object.values(namedType.getFields())){
                collectReferencedTypes(field.type, typeSet);
            }
        }
    }
    return typeSet;
}


/***/ }),

/***/ 2419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.assertValidSchema = assertValidSchema;
exports.validateSchema = validateSchema;
var _inspect = __webpack_require__(893);
var _GraphQLError = __webpack_require__(6042);
var _ast = __webpack_require__(1874);
var _typeComparators = __webpack_require__(3321);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
var _introspection = __webpack_require__(8840);
var _schema = __webpack_require__(5761);
/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */ function validateSchema(schema) {
    // First check to ensure the provided value is in fact a GraphQLSchema.
    (0, _schema.assertSchema)(schema); // If this Schema has already been validated, return the previous results.
    if (schema.__validationErrors) {
        return schema.__validationErrors;
    } // Validate the schema, producing a list of errors.
    const context = new SchemaValidationContext(schema);
    validateRootTypes(context);
    validateDirectives(context);
    validateTypes(context); // Persist the results of validation before returning to ensure validation
    // does not run multiple times for this schema.
    const errors = context.getErrors();
    schema.__validationErrors = errors;
    return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */ function assertValidSchema(schema) {
    const errors = validateSchema(schema);
    if (errors.length !== 0) {
        throw new Error(errors.map((error)=>error.message).join("\n\n"));
    }
}
class SchemaValidationContext {
    constructor(schema){
        this._errors = [];
        this.schema = schema;
    }
    reportError(message, nodes) {
        const _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;
        this._errors.push(new _GraphQLError.GraphQLError(message, {
            nodes: _nodes
        }));
    }
    getErrors() {
        return this._errors;
    }
}
function validateRootTypes(context) {
    const schema = context.schema;
    const queryType = schema.getQueryType();
    if (!queryType) {
        context.reportError("Query root type must be provided.", schema.astNode);
    } else if (!(0, _definition.isObjectType)(queryType)) {
        var _getOperationTypeNode;
        context.reportError(`Query root type must be Object type, it cannot be ${(0, _inspect.inspect)(queryType)}.`, (_getOperationTypeNode = getOperationTypeNode(schema, _ast.OperationTypeNode.QUERY)) !== null && _getOperationTypeNode !== void 0 ? _getOperationTypeNode : queryType.astNode);
    }
    const mutationType = schema.getMutationType();
    if (mutationType && !(0, _definition.isObjectType)(mutationType)) {
        var _getOperationTypeNode2;
        context.reportError("Mutation root type must be Object type if provided, it cannot be " + `${(0, _inspect.inspect)(mutationType)}.`, (_getOperationTypeNode2 = getOperationTypeNode(schema, _ast.OperationTypeNode.MUTATION)) !== null && _getOperationTypeNode2 !== void 0 ? _getOperationTypeNode2 : mutationType.astNode);
    }
    const subscriptionType = schema.getSubscriptionType();
    if (subscriptionType && !(0, _definition.isObjectType)(subscriptionType)) {
        var _getOperationTypeNode3;
        context.reportError("Subscription root type must be Object type if provided, it cannot be " + `${(0, _inspect.inspect)(subscriptionType)}.`, (_getOperationTypeNode3 = getOperationTypeNode(schema, _ast.OperationTypeNode.SUBSCRIPTION)) !== null && _getOperationTypeNode3 !== void 0 ? _getOperationTypeNode3 : subscriptionType.astNode);
    }
}
function getOperationTypeNode(schema, operation) {
    var _flatMap$find;
    return (_flatMap$find = [
        schema.astNode,
        ...schema.extensionASTNodes
    ].flatMap(// FIXME: https://github.com/graphql/graphql-js/issues/2203
    (schemaNode)=>{
        var _schemaNode$operation;
        return /* c8 ignore next */ (_schemaNode$operation = schemaNode === null || schemaNode === void 0 ? void 0 : schemaNode.operationTypes) !== null && _schemaNode$operation !== void 0 ? _schemaNode$operation : [];
    }).find((operationNode)=>operationNode.operation === operation)) === null || _flatMap$find === void 0 ? void 0 : _flatMap$find.type;
}
function validateDirectives(context) {
    for (const directive of context.schema.getDirectives()){
        // Ensure all directives are in fact GraphQL directives.
        if (!(0, _directives.isDirective)(directive)) {
            context.reportError(`Expected directive but got: ${(0, _inspect.inspect)(directive)}.`, directive === null || directive === void 0 ? void 0 : directive.astNode);
            continue;
        } // Ensure they are named correctly.
        validateName(context, directive);
        if (directive.locations.length === 0) {
            context.reportError(`Directive @${directive.name} must include 1 or more locations.`, directive.astNode);
        } // Ensure the arguments are valid.
        for (const arg of directive.args){
            // Ensure they are named correctly.
            validateName(context, arg); // Ensure the type is an input type.
            if (!(0, _definition.isInputType)(arg.type)) {
                context.reportError(`The type of @${directive.name}(${arg.name}:) must be Input Type ` + `but got: ${(0, _inspect.inspect)(arg.type)}.`, arg.astNode);
            }
            if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
                var _arg$astNode;
                context.reportError(`Required argument @${directive.name}(${arg.name}:) cannot be deprecated.`, [
                    getDeprecatedDirectiveNode(arg.astNode),
                    (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0 ? void 0 : _arg$astNode.type
                ]);
            }
        }
    }
}
function validateName(context, node) {
    // Ensure names are valid, however introspection types opt out.
    if (node.name.startsWith("__")) {
        context.reportError(`Name "${node.name}" must not begin with "__", which is reserved by GraphQL introspection.`, node.astNode);
    }
}
function validateTypes(context) {
    const validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
    const typeMap = context.schema.getTypeMap();
    for (const type of Object.values(typeMap)){
        // Ensure all provided types are in fact GraphQL type.
        if (!(0, _definition.isNamedType)(type)) {
            context.reportError(`Expected GraphQL named type but got: ${(0, _inspect.inspect)(type)}.`, type.astNode);
            continue;
        } // Ensure it is named correctly (excluding introspection types).
        if (!(0, _introspection.isIntrospectionType)(type)) {
            validateName(context, type);
        }
        if ((0, _definition.isObjectType)(type)) {
            // Ensure fields are valid
            validateFields(context, type); // Ensure objects implement the interfaces they claim to.
            validateInterfaces(context, type);
        } else if ((0, _definition.isInterfaceType)(type)) {
            // Ensure fields are valid.
            validateFields(context, type); // Ensure interfaces implement the interfaces they claim to.
            validateInterfaces(context, type);
        } else if ((0, _definition.isUnionType)(type)) {
            // Ensure Unions include valid member types.
            validateUnionMembers(context, type);
        } else if ((0, _definition.isEnumType)(type)) {
            // Ensure Enums have valid values.
            validateEnumValues(context, type);
        } else if ((0, _definition.isInputObjectType)(type)) {
            // Ensure Input Object fields are valid.
            validateInputFields(context, type); // Ensure Input Objects do not contain non-nullable circular references
            validateInputObjectCircularRefs(type);
        }
    }
}
function validateFields(context, type) {
    const fields = Object.values(type.getFields()); // Objects and Interfaces both must define one or more fields.
    if (fields.length === 0) {
        context.reportError(`Type ${type.name} must define one or more fields.`, [
            type.astNode,
            ...type.extensionASTNodes
        ]);
    }
    for (const field of fields){
        // Ensure they are named correctly.
        validateName(context, field); // Ensure the type is an output type
        if (!(0, _definition.isOutputType)(field.type)) {
            var _field$astNode;
            context.reportError(`The type of ${type.name}.${field.name} must be Output Type ` + `but got: ${(0, _inspect.inspect)(field.type)}.`, (_field$astNode = field.astNode) === null || _field$astNode === void 0 ? void 0 : _field$astNode.type);
        } // Ensure the arguments are valid
        for (const arg of field.args){
            const argName = arg.name; // Ensure they are named correctly.
            validateName(context, arg); // Ensure the type is an input type
            if (!(0, _definition.isInputType)(arg.type)) {
                var _arg$astNode2;
                context.reportError(`The type of ${type.name}.${field.name}(${argName}:) must be Input ` + `Type but got: ${(0, _inspect.inspect)(arg.type)}.`, (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0 ? void 0 : _arg$astNode2.type);
            }
            if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
                var _arg$astNode3;
                context.reportError(`Required argument ${type.name}.${field.name}(${argName}:) cannot be deprecated.`, [
                    getDeprecatedDirectiveNode(arg.astNode),
                    (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0 ? void 0 : _arg$astNode3.type
                ]);
            }
        }
    }
}
function validateInterfaces(context, type) {
    const ifaceTypeNames = Object.create(null);
    for (const iface of type.getInterfaces()){
        if (!(0, _definition.isInterfaceType)(iface)) {
            context.reportError(`Type ${(0, _inspect.inspect)(type)} must only implement Interface types, ` + `it cannot implement ${(0, _inspect.inspect)(iface)}.`, getAllImplementsInterfaceNodes(type, iface));
            continue;
        }
        if (type === iface) {
            context.reportError(`Type ${type.name} cannot implement itself because it would create a circular reference.`, getAllImplementsInterfaceNodes(type, iface));
            continue;
        }
        if (ifaceTypeNames[iface.name]) {
            context.reportError(`Type ${type.name} can only implement ${iface.name} once.`, getAllImplementsInterfaceNodes(type, iface));
            continue;
        }
        ifaceTypeNames[iface.name] = true;
        validateTypeImplementsAncestors(context, type, iface);
        validateTypeImplementsInterface(context, type, iface);
    }
}
function validateTypeImplementsInterface(context, type, iface) {
    const typeFieldMap = type.getFields(); // Assert each interface field is implemented.
    for (const ifaceField of Object.values(iface.getFields())){
        const fieldName = ifaceField.name;
        const typeField = typeFieldMap[fieldName]; // Assert interface field exists on type.
        if (!typeField) {
            context.reportError(`Interface field ${iface.name}.${fieldName} expected but ${type.name} does not provide it.`, [
                ifaceField.astNode,
                type.astNode,
                ...type.extensionASTNodes
            ]);
            continue;
        } // Assert interface field type is satisfied by type field type, by being
        // a valid subtype. (covariant)
        if (!(0, _typeComparators.isTypeSubTypeOf)(context.schema, typeField.type, ifaceField.type)) {
            var _ifaceField$astNode, _typeField$astNode;
            context.reportError(`Interface field ${iface.name}.${fieldName} expects type ` + `${(0, _inspect.inspect)(ifaceField.type)} but ${type.name}.${fieldName} ` + `is type ${(0, _inspect.inspect)(typeField.type)}.`, [
                (_ifaceField$astNode = ifaceField.astNode) === null || _ifaceField$astNode === void 0 ? void 0 : _ifaceField$astNode.type,
                (_typeField$astNode = typeField.astNode) === null || _typeField$astNode === void 0 ? void 0 : _typeField$astNode.type
            ]);
        } // Assert each interface field arg is implemented.
        for (const ifaceArg of ifaceField.args){
            const argName = ifaceArg.name;
            const typeArg = typeField.args.find((arg)=>arg.name === argName); // Assert interface field arg exists on object field.
            if (!typeArg) {
                context.reportError(`Interface field argument ${iface.name}.${fieldName}(${argName}:) expected but ${type.name}.${fieldName} does not provide it.`, [
                    ifaceArg.astNode,
                    typeField.astNode
                ]);
                continue;
            } // Assert interface field arg type matches object field arg type.
            // (invariant)
            // TODO: change to contravariant?
            if (!(0, _typeComparators.isEqualType)(ifaceArg.type, typeArg.type)) {
                var _ifaceArg$astNode, _typeArg$astNode;
                context.reportError(`Interface field argument ${iface.name}.${fieldName}(${argName}:) ` + `expects type ${(0, _inspect.inspect)(ifaceArg.type)} but ` + `${type.name}.${fieldName}(${argName}:) is type ` + `${(0, _inspect.inspect)(typeArg.type)}.`, [
                    (_ifaceArg$astNode = ifaceArg.astNode) === null || _ifaceArg$astNode === void 0 ? void 0 : _ifaceArg$astNode.type,
                    (_typeArg$astNode = typeArg.astNode) === null || _typeArg$astNode === void 0 ? void 0 : _typeArg$astNode.type
                ]);
            } // TODO: validate default values?
        } // Assert additional arguments must not be required.
        for (const typeArg of typeField.args){
            const argName = typeArg.name;
            const ifaceArg = ifaceField.args.find((arg)=>arg.name === argName);
            if (!ifaceArg && (0, _definition.isRequiredArgument)(typeArg)) {
                context.reportError(`Object field ${type.name}.${fieldName} includes required argument ${argName} that is missing from the Interface field ${iface.name}.${fieldName}.`, [
                    typeArg.astNode,
                    ifaceField.astNode
                ]);
            }
        }
    }
}
function validateTypeImplementsAncestors(context, type, iface) {
    const ifaceInterfaces = type.getInterfaces();
    for (const transitive of iface.getInterfaces()){
        if (!ifaceInterfaces.includes(transitive)) {
            context.reportError(transitive === type ? `Type ${type.name} cannot implement ${iface.name} because it would create a circular reference.` : `Type ${type.name} must implement ${transitive.name} because it is implemented by ${iface.name}.`, [
                ...getAllImplementsInterfaceNodes(iface, transitive),
                ...getAllImplementsInterfaceNodes(type, iface)
            ]);
        }
    }
}
function validateUnionMembers(context, union) {
    const memberTypes = union.getTypes();
    if (memberTypes.length === 0) {
        context.reportError(`Union type ${union.name} must define one or more member types.`, [
            union.astNode,
            ...union.extensionASTNodes
        ]);
    }
    const includedTypeNames = Object.create(null);
    for (const memberType of memberTypes){
        if (includedTypeNames[memberType.name]) {
            context.reportError(`Union type ${union.name} can only include type ${memberType.name} once.`, getUnionMemberTypeNodes(union, memberType.name));
            continue;
        }
        includedTypeNames[memberType.name] = true;
        if (!(0, _definition.isObjectType)(memberType)) {
            context.reportError(`Union type ${union.name} can only include Object types, ` + `it cannot include ${(0, _inspect.inspect)(memberType)}.`, getUnionMemberTypeNodes(union, String(memberType)));
        }
    }
}
function validateEnumValues(context, enumType) {
    const enumValues = enumType.getValues();
    if (enumValues.length === 0) {
        context.reportError(`Enum type ${enumType.name} must define one or more values.`, [
            enumType.astNode,
            ...enumType.extensionASTNodes
        ]);
    }
    for (const enumValue of enumValues){
        // Ensure valid name.
        validateName(context, enumValue);
    }
}
function validateInputFields(context, inputObj) {
    const fields = Object.values(inputObj.getFields());
    if (fields.length === 0) {
        context.reportError(`Input Object type ${inputObj.name} must define one or more fields.`, [
            inputObj.astNode,
            ...inputObj.extensionASTNodes
        ]);
    } // Ensure the arguments are valid
    for (const field of fields){
        // Ensure they are named correctly.
        validateName(context, field); // Ensure the type is an input type
        if (!(0, _definition.isInputType)(field.type)) {
            var _field$astNode2;
            context.reportError(`The type of ${inputObj.name}.${field.name} must be Input Type ` + `but got: ${(0, _inspect.inspect)(field.type)}.`, (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0 ? void 0 : _field$astNode2.type);
        }
        if ((0, _definition.isRequiredInputField)(field) && field.deprecationReason != null) {
            var _field$astNode3;
            context.reportError(`Required input field ${inputObj.name}.${field.name} cannot be deprecated.`, [
                getDeprecatedDirectiveNode(field.astNode),
                (_field$astNode3 = field.astNode) === null || _field$astNode3 === void 0 ? void 0 : _field$astNode3.type
            ]);
        }
        if (inputObj.isOneOf) {
            validateOneOfInputObjectField(inputObj, field, context);
        }
    }
}
function validateOneOfInputObjectField(type, field, context) {
    if ((0, _definition.isNonNullType)(field.type)) {
        var _field$astNode4;
        context.reportError(`OneOf input field ${type.name}.${field.name} must be nullable.`, (_field$astNode4 = field.astNode) === null || _field$astNode4 === void 0 ? void 0 : _field$astNode4.type);
    }
    if (field.defaultValue !== undefined) {
        context.reportError(`OneOf input field ${type.name}.${field.name} cannot have a default value.`, field.astNode);
    }
}
function createInputObjectCircularRefsValidator(context) {
    // Modified copy of algorithm from 'src/validation/rules/NoFragmentCycles.js'.
    // Tracks already visited types to maintain O(N) and to ensure that cycles
    // are not redundantly reported.
    const visitedTypes = Object.create(null); // Array of types nodes used to produce meaningful errors
    const fieldPath = []; // Position in the type path
    const fieldPathIndexByTypeName = Object.create(null);
    return detectCycleRecursive; // This does a straight-forward DFS to find cycles.
    // It does not terminate when a cycle was found but continues to explore
    // the graph to find all possible cycles.
    function detectCycleRecursive(inputObj) {
        if (visitedTypes[inputObj.name]) {
            return;
        }
        visitedTypes[inputObj.name] = true;
        fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
        const fields = Object.values(inputObj.getFields());
        for (const field of fields){
            if ((0, _definition.isNonNullType)(field.type) && (0, _definition.isInputObjectType)(field.type.ofType)) {
                const fieldType = field.type.ofType;
                const cycleIndex = fieldPathIndexByTypeName[fieldType.name];
                fieldPath.push(field);
                if (cycleIndex === undefined) {
                    detectCycleRecursive(fieldType);
                } else {
                    const cyclePath = fieldPath.slice(cycleIndex);
                    const pathStr = cyclePath.map((fieldObj)=>fieldObj.name).join(".");
                    context.reportError(`Cannot reference Input Object "${fieldType.name}" within itself through a series of non-null fields: "${pathStr}".`, cyclePath.map((fieldObj)=>fieldObj.astNode));
                }
                fieldPath.pop();
            }
        }
        fieldPathIndexByTypeName[inputObj.name] = undefined;
    }
}
function getAllImplementsInterfaceNodes(type, iface) {
    const { astNode, extensionASTNodes } = type;
    const nodes = astNode != null ? [
        astNode,
        ...extensionASTNodes
    ] : extensionASTNodes; // FIXME: https://github.com/graphql/graphql-js/issues/2203
    return nodes.flatMap((typeNode)=>{
        var _typeNode$interfaces;
        return /* c8 ignore next */ (_typeNode$interfaces = typeNode.interfaces) !== null && _typeNode$interfaces !== void 0 ? _typeNode$interfaces : [];
    }).filter((ifaceNode)=>ifaceNode.name.value === iface.name);
}
function getUnionMemberTypeNodes(union, typeName) {
    const { astNode, extensionASTNodes } = union;
    const nodes = astNode != null ? [
        astNode,
        ...extensionASTNodes
    ] : extensionASTNodes; // FIXME: https://github.com/graphql/graphql-js/issues/2203
    return nodes.flatMap((unionNode)=>{
        var _unionNode$types;
        return /* c8 ignore next */ (_unionNode$types = unionNode.types) !== null && _unionNode$types !== void 0 ? _unionNode$types : [];
    }).filter((typeNode)=>typeNode.name.value === typeName);
}
function getDeprecatedDirectiveNode(definitionNode) {
    var _definitionNode$direc;
    return definitionNode === null || definitionNode === void 0 ? void 0 : (_definitionNode$direc = definitionNode.directives) === null || _definitionNode$direc === void 0 ? void 0 : _definitionNode$direc.find((node)=>node.name.value === _directives.GraphQLDeprecatedDirective.name);
}


/***/ }),

/***/ 8674:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TypeInfo = void 0;
exports.visitWithTypeInfo = visitWithTypeInfo;
var _ast = __webpack_require__(1874);
var _kinds = __webpack_require__(4278);
var _visitor = __webpack_require__(4041);
var _definition = __webpack_require__(2838);
var _introspection = __webpack_require__(8840);
var _typeFromAST = __webpack_require__(871);
/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */ class TypeInfo {
    constructor(schema, /**
     * Initial type may be provided in rare cases to facilitate traversals
     *  beginning somewhere other than documents.
     */ initialType, /** @deprecated will be removed in 17.0.0 */ getFieldDefFn){
        this._schema = schema;
        this._typeStack = [];
        this._parentTypeStack = [];
        this._inputTypeStack = [];
        this._fieldDefStack = [];
        this._defaultValueStack = [];
        this._directive = null;
        this._argument = null;
        this._enumValue = null;
        this._getFieldDef = getFieldDefFn !== null && getFieldDefFn !== void 0 ? getFieldDefFn : getFieldDef;
        if (initialType) {
            if ((0, _definition.isInputType)(initialType)) {
                this._inputTypeStack.push(initialType);
            }
            if ((0, _definition.isCompositeType)(initialType)) {
                this._parentTypeStack.push(initialType);
            }
            if ((0, _definition.isOutputType)(initialType)) {
                this._typeStack.push(initialType);
            }
        }
    }
    get [Symbol.toStringTag]() {
        return "TypeInfo";
    }
    getType() {
        if (this._typeStack.length > 0) {
            return this._typeStack[this._typeStack.length - 1];
        }
    }
    getParentType() {
        if (this._parentTypeStack.length > 0) {
            return this._parentTypeStack[this._parentTypeStack.length - 1];
        }
    }
    getInputType() {
        if (this._inputTypeStack.length > 0) {
            return this._inputTypeStack[this._inputTypeStack.length - 1];
        }
    }
    getParentInputType() {
        if (this._inputTypeStack.length > 1) {
            return this._inputTypeStack[this._inputTypeStack.length - 2];
        }
    }
    getFieldDef() {
        if (this._fieldDefStack.length > 0) {
            return this._fieldDefStack[this._fieldDefStack.length - 1];
        }
    }
    getDefaultValue() {
        if (this._defaultValueStack.length > 0) {
            return this._defaultValueStack[this._defaultValueStack.length - 1];
        }
    }
    getDirective() {
        return this._directive;
    }
    getArgument() {
        return this._argument;
    }
    getEnumValue() {
        return this._enumValue;
    }
    enter(node) {
        const schema = this._schema; // Note: many of the types below are explicitly typed as "unknown" to drop
        // any assumptions of a valid schema to ensure runtime types are properly
        // checked before continuing since TypeInfo is used as part of validation
        // which occurs before guarantees of schema and document validity.
        switch(node.kind){
            case _kinds.Kind.SELECTION_SET:
                {
                    const namedType = (0, _definition.getNamedType)(this.getType());
                    this._parentTypeStack.push((0, _definition.isCompositeType)(namedType) ? namedType : undefined);
                    break;
                }
            case _kinds.Kind.FIELD:
                {
                    const parentType = this.getParentType();
                    let fieldDef;
                    let fieldType;
                    if (parentType) {
                        fieldDef = this._getFieldDef(schema, parentType, node);
                        if (fieldDef) {
                            fieldType = fieldDef.type;
                        }
                    }
                    this._fieldDefStack.push(fieldDef);
                    this._typeStack.push((0, _definition.isOutputType)(fieldType) ? fieldType : undefined);
                    break;
                }
            case _kinds.Kind.DIRECTIVE:
                this._directive = schema.getDirective(node.name.value);
                break;
            case _kinds.Kind.OPERATION_DEFINITION:
                {
                    const rootType = schema.getRootType(node.operation);
                    this._typeStack.push((0, _definition.isObjectType)(rootType) ? rootType : undefined);
                    break;
                }
            case _kinds.Kind.INLINE_FRAGMENT:
            case _kinds.Kind.FRAGMENT_DEFINITION:
                {
                    const typeConditionAST = node.typeCondition;
                    const outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : (0, _definition.getNamedType)(this.getType());
                    this._typeStack.push((0, _definition.isOutputType)(outputType) ? outputType : undefined);
                    break;
                }
            case _kinds.Kind.VARIABLE_DEFINITION:
                {
                    const inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
                    this._inputTypeStack.push((0, _definition.isInputType)(inputType) ? inputType : undefined);
                    break;
                }
            case _kinds.Kind.ARGUMENT:
                {
                    var _this$getDirective;
                    let argDef;
                    let argType;
                    const fieldOrDirective = (_this$getDirective = this.getDirective()) !== null && _this$getDirective !== void 0 ? _this$getDirective : this.getFieldDef();
                    if (fieldOrDirective) {
                        argDef = fieldOrDirective.args.find((arg)=>arg.name === node.name.value);
                        if (argDef) {
                            argType = argDef.type;
                        }
                    }
                    this._argument = argDef;
                    this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);
                    this._inputTypeStack.push((0, _definition.isInputType)(argType) ? argType : undefined);
                    break;
                }
            case _kinds.Kind.LIST:
                {
                    const listType = (0, _definition.getNullableType)(this.getInputType());
                    const itemType = (0, _definition.isListType)(listType) ? listType.ofType : listType; // List positions never have a default value.
                    this._defaultValueStack.push(undefined);
                    this._inputTypeStack.push((0, _definition.isInputType)(itemType) ? itemType : undefined);
                    break;
                }
            case _kinds.Kind.OBJECT_FIELD:
                {
                    const objectType = (0, _definition.getNamedType)(this.getInputType());
                    let inputFieldType;
                    let inputField;
                    if ((0, _definition.isInputObjectType)(objectType)) {
                        inputField = objectType.getFields()[node.name.value];
                        if (inputField) {
                            inputFieldType = inputField.type;
                        }
                    }
                    this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);
                    this._inputTypeStack.push((0, _definition.isInputType)(inputFieldType) ? inputFieldType : undefined);
                    break;
                }
            case _kinds.Kind.ENUM:
                {
                    const enumType = (0, _definition.getNamedType)(this.getInputType());
                    let enumValue;
                    if ((0, _definition.isEnumType)(enumType)) {
                        enumValue = enumType.getValue(node.value);
                    }
                    this._enumValue = enumValue;
                    break;
                }
            default:
        }
    }
    leave(node) {
        switch(node.kind){
            case _kinds.Kind.SELECTION_SET:
                this._parentTypeStack.pop();
                break;
            case _kinds.Kind.FIELD:
                this._fieldDefStack.pop();
                this._typeStack.pop();
                break;
            case _kinds.Kind.DIRECTIVE:
                this._directive = null;
                break;
            case _kinds.Kind.OPERATION_DEFINITION:
            case _kinds.Kind.INLINE_FRAGMENT:
            case _kinds.Kind.FRAGMENT_DEFINITION:
                this._typeStack.pop();
                break;
            case _kinds.Kind.VARIABLE_DEFINITION:
                this._inputTypeStack.pop();
                break;
            case _kinds.Kind.ARGUMENT:
                this._argument = null;
                this._defaultValueStack.pop();
                this._inputTypeStack.pop();
                break;
            case _kinds.Kind.LIST:
            case _kinds.Kind.OBJECT_FIELD:
                this._defaultValueStack.pop();
                this._inputTypeStack.pop();
                break;
            case _kinds.Kind.ENUM:
                this._enumValue = null;
                break;
            default:
        }
    }
}
exports.TypeInfo = TypeInfo;
/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */ function getFieldDef(schema, parentType, fieldNode) {
    const name = fieldNode.name.value;
    if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.SchemaMetaFieldDef;
    }
    if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.TypeMetaFieldDef;
    }
    if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
        return _introspection.TypeNameMetaFieldDef;
    }
    if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
        return parentType.getFields()[name];
    }
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */ function visitWithTypeInfo(typeInfo, visitor) {
    return {
        enter (...args) {
            const node = args[0];
            typeInfo.enter(node);
            const fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).enter;
            if (fn) {
                const result = fn.apply(visitor, args);
                if (result !== undefined) {
                    typeInfo.leave(node);
                    if ((0, _ast.isNode)(result)) {
                        typeInfo.enter(result);
                    }
                }
                return result;
            }
        },
        leave (...args) {
            const node = args[0];
            const fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).leave;
            let result;
            if (fn) {
                result = fn.apply(visitor, args);
            }
            typeInfo.leave(node);
            return result;
        }
    };
}


/***/ }),

/***/ 3393:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.assertValidName = assertValidName;
exports.isValidNameError = isValidNameError;
var _devAssert = __webpack_require__(6158);
var _GraphQLError = __webpack_require__(6042);
var _assertName = __webpack_require__(4423);
/* c8 ignore start */ /**
 * Upholds the spec rules about naming.
 * @deprecated Please use `assertName` instead. Will be removed in v17
 */ function assertValidName(name) {
    const error = isValidNameError(name);
    if (error) {
        throw error;
    }
    return name;
}
/**
 * Returns an Error if a name is invalid.
 * @deprecated Please use `assertName` instead. Will be removed in v17
 */ function isValidNameError(name) {
    typeof name === "string" || (0, _devAssert.devAssert)(false, "Expected name to be a string.");
    if (name.startsWith("__")) {
        return new _GraphQLError.GraphQLError(`Name "${name}" must not begin with "__", which is reserved by GraphQL introspection.`);
    }
    try {
        (0, _assertName.assertName)(name);
    } catch (error) {
        return error;
    }
} /* c8 ignore stop */ 


/***/ }),

/***/ 5128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.astFromValue = astFromValue;
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _isIterableObject = __webpack_require__(8020);
var _isObjectLike = __webpack_require__(9112);
var _kinds = __webpack_require__(4278);
var _definition = __webpack_require__(2838);
var _scalars = __webpack_require__(6314);
/**
 * Produces a GraphQL Value AST given a JavaScript object.
 * Function will match JavaScript/JSON values to GraphQL AST schema format
 * by using suggested GraphQLInputType. For example:
 *
 *     astFromValue("value", GraphQLString)
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Unknown       | Enum Value           |
 * | null          | NullValue            |
 *
 */ function astFromValue(value, type) {
    if ((0, _definition.isNonNullType)(type)) {
        const astValue = astFromValue(value, type.ofType);
        if ((astValue === null || astValue === void 0 ? void 0 : astValue.kind) === _kinds.Kind.NULL) {
            return null;
        }
        return astValue;
    } // only explicit null, not undefined, NaN
    if (value === null) {
        return {
            kind: _kinds.Kind.NULL
        };
    } // undefined
    if (value === undefined) {
        return null;
    } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
    // the value is not an array, convert the value using the list's item type.
    if ((0, _definition.isListType)(type)) {
        const itemType = type.ofType;
        if ((0, _isIterableObject.isIterableObject)(value)) {
            const valuesNodes = [];
            for (const item of value){
                const itemNode = astFromValue(item, itemType);
                if (itemNode != null) {
                    valuesNodes.push(itemNode);
                }
            }
            return {
                kind: _kinds.Kind.LIST,
                values: valuesNodes
            };
        }
        return astFromValue(value, itemType);
    } // Populate the fields of the input object by creating ASTs from each value
    // in the JavaScript object according to the fields in the input type.
    if ((0, _definition.isInputObjectType)(type)) {
        if (!(0, _isObjectLike.isObjectLike)(value)) {
            return null;
        }
        const fieldNodes = [];
        for (const field of Object.values(type.getFields())){
            const fieldValue = astFromValue(value[field.name], field.type);
            if (fieldValue) {
                fieldNodes.push({
                    kind: _kinds.Kind.OBJECT_FIELD,
                    name: {
                        kind: _kinds.Kind.NAME,
                        value: field.name
                    },
                    value: fieldValue
                });
            }
        }
        return {
            kind: _kinds.Kind.OBJECT,
            fields: fieldNodes
        };
    }
    if ((0, _definition.isLeafType)(type)) {
        // Since value is an internally represented value, it must be serialized
        // to an externally represented value before converting into an AST.
        const serialized = type.serialize(value);
        if (serialized == null) {
            return null;
        } // Others serialize based on their corresponding JavaScript scalar types.
        if (typeof serialized === "boolean") {
            return {
                kind: _kinds.Kind.BOOLEAN,
                value: serialized
            };
        } // JavaScript numbers can be Int or Float values.
        if (typeof serialized === "number" && Number.isFinite(serialized)) {
            const stringNum = String(serialized);
            return integerStringRegExp.test(stringNum) ? {
                kind: _kinds.Kind.INT,
                value: stringNum
            } : {
                kind: _kinds.Kind.FLOAT,
                value: stringNum
            };
        }
        if (typeof serialized === "string") {
            // Enum types use Enum literals.
            if ((0, _definition.isEnumType)(type)) {
                return {
                    kind: _kinds.Kind.ENUM,
                    value: serialized
                };
            } // ID types can use Int literals.
            if (type === _scalars.GraphQLID && integerStringRegExp.test(serialized)) {
                return {
                    kind: _kinds.Kind.INT,
                    value: serialized
                };
            }
            return {
                kind: _kinds.Kind.STRING,
                value: serialized
            };
        }
        throw new TypeError(`Cannot convert value to AST: ${(0, _inspect.inspect)(serialized)}.`);
    }
    /* c8 ignore next 3 */ // Not reachable, all possible types have been considered.
     false || (0, _invariant.invariant)(false, "Unexpected input type: " + (0, _inspect.inspect)(type));
}
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */ const integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;


/***/ }),

/***/ 7166:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.buildASTSchema = buildASTSchema;
exports.buildSchema = buildSchema;
var _devAssert = __webpack_require__(6158);
var _kinds = __webpack_require__(4278);
var _parser = __webpack_require__(3243);
var _directives = __webpack_require__(2194);
var _schema = __webpack_require__(5761);
var _validate = __webpack_require__(7887);
var _extendSchema = __webpack_require__(6162);
/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query,
 * Mutation and Subscription.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 */ function buildASTSchema(documentAST, options) {
    documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.devAssert)(false, "Must provide valid Document AST.");
    if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
        (0, _validate.assertValidSDL)(documentAST);
    }
    const emptySchemaConfig = {
        description: undefined,
        types: [],
        directives: [],
        extensions: Object.create(null),
        extensionASTNodes: [],
        assumeValid: false
    };
    const config = (0, _extendSchema.extendSchemaImpl)(emptySchemaConfig, documentAST, options);
    if (config.astNode == null) {
        for (const type of config.types){
            switch(type.name){
                // Note: While this could make early assertions to get the correctly
                // typed values below, that would throw immediately while type system
                // validation with validateSchema() will produce more actionable results.
                case "Query":
                    // @ts-expect-error validated in `validateSchema`
                    config.query = type;
                    break;
                case "Mutation":
                    // @ts-expect-error validated in `validateSchema`
                    config.mutation = type;
                    break;
                case "Subscription":
                    // @ts-expect-error validated in `validateSchema`
                    config.subscription = type;
                    break;
            }
        }
    }
    const directives = [
        ...config.directives,
        ..._directives.specifiedDirectives.filter((stdDirective)=>config.directives.every((directive)=>directive.name !== stdDirective.name))
    ];
    return new _schema.GraphQLSchema({
        ...config,
        directives
    });
}
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */ function buildSchema(source, options) {
    const document = (0, _parser.parse)(source, {
        noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
        allowLegacyFragmentVariables: options === null || options === void 0 ? void 0 : options.allowLegacyFragmentVariables
    });
    return buildASTSchema(document, {
        assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
        assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
    });
}


/***/ }),

/***/ 2885:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.buildClientSchema = buildClientSchema;
var _devAssert = __webpack_require__(6158);
var _inspect = __webpack_require__(893);
var _isObjectLike = __webpack_require__(9112);
var _keyValMap = __webpack_require__(6179);
var _parser = __webpack_require__(3243);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
var _introspection = __webpack_require__(8840);
var _scalars = __webpack_require__(6314);
var _schema = __webpack_require__(5761);
var _valueFromAST = __webpack_require__(9308);
/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */ function buildClientSchema(introspection, options) {
    (0, _isObjectLike.isObjectLike)(introspection) && (0, _isObjectLike.isObjectLike)(introspection.__schema) || (0, _devAssert.devAssert)(false, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${(0, _inspect.inspect)(introspection)}.`); // Get the schema from the introspection result.
    const schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.
    const typeMap = (0, _keyValMap.keyValMap)(schemaIntrospection.types, (typeIntrospection)=>typeIntrospection.name, (typeIntrospection)=>buildType(typeIntrospection)); // Include standard types only if they are used.
    for (const stdType of [
        ..._scalars.specifiedScalarTypes,
        ..._introspection.introspectionTypes
    ]){
        if (typeMap[stdType.name]) {
            typeMap[stdType.name] = stdType;
        }
    } // Get the root Query, Mutation, and Subscription types.
    const queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
    const mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
    const subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
    // directives were not queried for.
    const directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.
    return new _schema.GraphQLSchema({
        description: schemaIntrospection.description,
        query: queryType,
        mutation: mutationType,
        subscription: subscriptionType,
        types: Object.values(typeMap),
        directives,
        assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
    }); // Given a type reference in introspection, return the GraphQLType instance.
    // preferring cached instances before building new instances.
    function getType(typeRef) {
        if (typeRef.kind === _introspection.TypeKind.LIST) {
            const itemRef = typeRef.ofType;
            if (!itemRef) {
                throw new Error("Decorated type deeper than introspection query.");
            }
            return new _definition.GraphQLList(getType(itemRef));
        }
        if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
            const nullableRef = typeRef.ofType;
            if (!nullableRef) {
                throw new Error("Decorated type deeper than introspection query.");
            }
            const nullableType = getType(nullableRef);
            return new _definition.GraphQLNonNull((0, _definition.assertNullableType)(nullableType));
        }
        return getNamedType(typeRef);
    }
    function getNamedType(typeRef) {
        const typeName = typeRef.name;
        if (!typeName) {
            throw new Error(`Unknown type reference: ${(0, _inspect.inspect)(typeRef)}.`);
        }
        const type = typeMap[typeName];
        if (!type) {
            throw new Error(`Invalid or incomplete schema, unknown type: ${typeName}. Ensure that a full introspection query is used in order to build a client schema.`);
        }
        return type;
    }
    function getObjectType(typeRef) {
        return (0, _definition.assertObjectType)(getNamedType(typeRef));
    }
    function getInterfaceType(typeRef) {
        return (0, _definition.assertInterfaceType)(getNamedType(typeRef));
    } // Given a type's introspection result, construct the correct
    // GraphQLType instance.
    function buildType(type) {
        // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
        if (type != null && type.name != null && type.kind != null) {
            // FIXME: Properly type IntrospectionType, it's a breaking change so fix in v17
            // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
            switch(type.kind){
                case _introspection.TypeKind.SCALAR:
                    return buildScalarDef(type);
                case _introspection.TypeKind.OBJECT:
                    return buildObjectDef(type);
                case _introspection.TypeKind.INTERFACE:
                    return buildInterfaceDef(type);
                case _introspection.TypeKind.UNION:
                    return buildUnionDef(type);
                case _introspection.TypeKind.ENUM:
                    return buildEnumDef(type);
                case _introspection.TypeKind.INPUT_OBJECT:
                    return buildInputObjectDef(type);
            }
        }
        const typeStr = (0, _inspect.inspect)(type);
        throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${typeStr}.`);
    }
    function buildScalarDef(scalarIntrospection) {
        return new _definition.GraphQLScalarType({
            name: scalarIntrospection.name,
            description: scalarIntrospection.description,
            specifiedByURL: scalarIntrospection.specifiedByURL
        });
    }
    function buildImplementationsList(implementingIntrospection) {
        // TODO: Temporary workaround until GraphQL ecosystem will fully support
        // 'interfaces' on interface types.
        if (implementingIntrospection.interfaces === null && implementingIntrospection.kind === _introspection.TypeKind.INTERFACE) {
            return [];
        }
        if (!implementingIntrospection.interfaces) {
            const implementingIntrospectionStr = (0, _inspect.inspect)(implementingIntrospection);
            throw new Error(`Introspection result missing interfaces: ${implementingIntrospectionStr}.`);
        }
        return implementingIntrospection.interfaces.map(getInterfaceType);
    }
    function buildObjectDef(objectIntrospection) {
        return new _definition.GraphQLObjectType({
            name: objectIntrospection.name,
            description: objectIntrospection.description,
            interfaces: ()=>buildImplementationsList(objectIntrospection),
            fields: ()=>buildFieldDefMap(objectIntrospection)
        });
    }
    function buildInterfaceDef(interfaceIntrospection) {
        return new _definition.GraphQLInterfaceType({
            name: interfaceIntrospection.name,
            description: interfaceIntrospection.description,
            interfaces: ()=>buildImplementationsList(interfaceIntrospection),
            fields: ()=>buildFieldDefMap(interfaceIntrospection)
        });
    }
    function buildUnionDef(unionIntrospection) {
        if (!unionIntrospection.possibleTypes) {
            const unionIntrospectionStr = (0, _inspect.inspect)(unionIntrospection);
            throw new Error(`Introspection result missing possibleTypes: ${unionIntrospectionStr}.`);
        }
        return new _definition.GraphQLUnionType({
            name: unionIntrospection.name,
            description: unionIntrospection.description,
            types: ()=>unionIntrospection.possibleTypes.map(getObjectType)
        });
    }
    function buildEnumDef(enumIntrospection) {
        if (!enumIntrospection.enumValues) {
            const enumIntrospectionStr = (0, _inspect.inspect)(enumIntrospection);
            throw new Error(`Introspection result missing enumValues: ${enumIntrospectionStr}.`);
        }
        return new _definition.GraphQLEnumType({
            name: enumIntrospection.name,
            description: enumIntrospection.description,
            values: (0, _keyValMap.keyValMap)(enumIntrospection.enumValues, (valueIntrospection)=>valueIntrospection.name, (valueIntrospection)=>({
                    description: valueIntrospection.description,
                    deprecationReason: valueIntrospection.deprecationReason
                }))
        });
    }
    function buildInputObjectDef(inputObjectIntrospection) {
        if (!inputObjectIntrospection.inputFields) {
            const inputObjectIntrospectionStr = (0, _inspect.inspect)(inputObjectIntrospection);
            throw new Error(`Introspection result missing inputFields: ${inputObjectIntrospectionStr}.`);
        }
        return new _definition.GraphQLInputObjectType({
            name: inputObjectIntrospection.name,
            description: inputObjectIntrospection.description,
            fields: ()=>buildInputValueDefMap(inputObjectIntrospection.inputFields),
            isOneOf: inputObjectIntrospection.isOneOf
        });
    }
    function buildFieldDefMap(typeIntrospection) {
        if (!typeIntrospection.fields) {
            throw new Error(`Introspection result missing fields: ${(0, _inspect.inspect)(typeIntrospection)}.`);
        }
        return (0, _keyValMap.keyValMap)(typeIntrospection.fields, (fieldIntrospection)=>fieldIntrospection.name, buildField);
    }
    function buildField(fieldIntrospection) {
        const type = getType(fieldIntrospection.type);
        if (!(0, _definition.isOutputType)(type)) {
            const typeStr = (0, _inspect.inspect)(type);
            throw new Error(`Introspection must provide output type for fields, but received: ${typeStr}.`);
        }
        if (!fieldIntrospection.args) {
            const fieldIntrospectionStr = (0, _inspect.inspect)(fieldIntrospection);
            throw new Error(`Introspection result missing field args: ${fieldIntrospectionStr}.`);
        }
        return {
            description: fieldIntrospection.description,
            deprecationReason: fieldIntrospection.deprecationReason,
            type,
            args: buildInputValueDefMap(fieldIntrospection.args)
        };
    }
    function buildInputValueDefMap(inputValueIntrospections) {
        return (0, _keyValMap.keyValMap)(inputValueIntrospections, (inputValue)=>inputValue.name, buildInputValue);
    }
    function buildInputValue(inputValueIntrospection) {
        const type = getType(inputValueIntrospection.type);
        if (!(0, _definition.isInputType)(type)) {
            const typeStr = (0, _inspect.inspect)(type);
            throw new Error(`Introspection must provide input type for arguments, but received: ${typeStr}.`);
        }
        const defaultValue = inputValueIntrospection.defaultValue != null ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
        return {
            description: inputValueIntrospection.description,
            type,
            defaultValue,
            deprecationReason: inputValueIntrospection.deprecationReason
        };
    }
    function buildDirective(directiveIntrospection) {
        if (!directiveIntrospection.args) {
            const directiveIntrospectionStr = (0, _inspect.inspect)(directiveIntrospection);
            throw new Error(`Introspection result missing directive args: ${directiveIntrospectionStr}.`);
        }
        if (!directiveIntrospection.locations) {
            const directiveIntrospectionStr = (0, _inspect.inspect)(directiveIntrospection);
            throw new Error(`Introspection result missing directive locations: ${directiveIntrospectionStr}.`);
        }
        return new _directives.GraphQLDirective({
            name: directiveIntrospection.name,
            description: directiveIntrospection.description,
            isRepeatable: directiveIntrospection.isRepeatable,
            locations: directiveIntrospection.locations.slice(),
            args: buildInputValueDefMap(directiveIntrospection.args)
        });
    }
}


/***/ }),

/***/ 5001:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.coerceInputValue = coerceInputValue;
var _didYouMean = __webpack_require__(3278);
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _isIterableObject = __webpack_require__(8020);
var _isObjectLike = __webpack_require__(9112);
var _Path = __webpack_require__(9053);
var _printPathArray = __webpack_require__(6780);
var _suggestionList = __webpack_require__(7135);
var _GraphQLError = __webpack_require__(6042);
var _definition = __webpack_require__(2838);
/**
 * Coerces a JavaScript value given a GraphQL Input Type.
 */ function coerceInputValue(inputValue, type, onError = defaultOnError) {
    return coerceInputValueImpl(inputValue, type, onError, undefined);
}
function defaultOnError(path, invalidValue, error) {
    let errorPrefix = "Invalid value " + (0, _inspect.inspect)(invalidValue);
    if (path.length > 0) {
        errorPrefix += ` at "value${(0, _printPathArray.printPathArray)(path)}"`;
    }
    error.message = errorPrefix + ": " + error.message;
    throw error;
}
function coerceInputValueImpl(inputValue, type, onError, path) {
    if ((0, _definition.isNonNullType)(type)) {
        if (inputValue != null) {
            return coerceInputValueImpl(inputValue, type.ofType, onError, path);
        }
        onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Expected non-nullable type "${(0, _inspect.inspect)(type)}" not to be null.`));
        return;
    }
    if (inputValue == null) {
        // Explicitly return the value null.
        return null;
    }
    if ((0, _definition.isListType)(type)) {
        const itemType = type.ofType;
        if ((0, _isIterableObject.isIterableObject)(inputValue)) {
            return Array.from(inputValue, (itemValue, index)=>{
                const itemPath = (0, _Path.addPath)(path, index, undefined);
                return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
            });
        } // Lists accept a non-list value as a list of one.
        return [
            coerceInputValueImpl(inputValue, itemType, onError, path)
        ];
    }
    if ((0, _definition.isInputObjectType)(type)) {
        if (!(0, _isObjectLike.isObjectLike)(inputValue) || Array.isArray(inputValue)) {
            onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Expected type "${type.name}" to be an object.`));
            return;
        }
        const coercedValue = {};
        const fieldDefs = type.getFields();
        for (const field of Object.values(fieldDefs)){
            const fieldValue = inputValue[field.name];
            if (fieldValue === undefined) {
                if (field.defaultValue !== undefined) {
                    coercedValue[field.name] = field.defaultValue;
                } else if ((0, _definition.isNonNullType)(field.type)) {
                    const typeStr = (0, _inspect.inspect)(field.type);
                    onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Field "${field.name}" of required type "${typeStr}" was not provided.`));
                }
                continue;
            }
            coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, (0, _Path.addPath)(path, field.name, type.name));
        } // Ensure every provided field is defined.
        for (const fieldName of Object.keys(inputValue)){
            if (!fieldDefs[fieldName]) {
                const suggestions = (0, _suggestionList.suggestionList)(fieldName, Object.keys(type.getFields()));
                onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Field "${fieldName}" is not defined by type "${type.name}".` + (0, _didYouMean.didYouMean)(suggestions)));
            }
        }
        if (type.isOneOf) {
            const keys = Object.keys(coercedValue);
            if (keys.length !== 1) {
                onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Exactly one key must be specified for OneOf type "${type.name}".`));
            }
            const key = keys[0];
            const value = coercedValue[key];
            if (value === null) {
                onError((0, _Path.pathToArray)(path).concat(key), value, new _GraphQLError.GraphQLError(`Field "${key}" must be non-null.`));
            }
        }
        return coercedValue;
    }
    if ((0, _definition.isLeafType)(type)) {
        let parseResult; // Scalars and Enums determine if a input value is valid via parseValue(),
        // which can throw to indicate failure. If it throws, maintain a reference
        // to the original error.
        try {
            parseResult = type.parseValue(inputValue);
        } catch (error) {
            if (error instanceof _GraphQLError.GraphQLError) {
                onError((0, _Path.pathToArray)(path), inputValue, error);
            } else {
                onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Expected type "${type.name}". ` + error.message, {
                    originalError: error
                }));
            }
            return;
        }
        if (parseResult === undefined) {
            onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Expected type "${type.name}".`));
        }
        return parseResult;
    }
    /* c8 ignore next 3 */ // Not reachable, all possible types have been considered.
     false || (0, _invariant.invariant)(false, "Unexpected input type: " + (0, _inspect.inspect)(type));
}


/***/ }),

/***/ 1385:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatAST = concatAST;
var _kinds = __webpack_require__(4278);
/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */ function concatAST(documents) {
    const definitions = [];
    for (const doc of documents){
        definitions.push(...doc.definitions);
    }
    return {
        kind: _kinds.Kind.DOCUMENT,
        definitions
    };
}


/***/ }),

/***/ 6162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.extendSchema = extendSchema;
exports.extendSchemaImpl = extendSchemaImpl;
var _devAssert = __webpack_require__(6158);
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _keyMap = __webpack_require__(1180);
var _mapValue = __webpack_require__(9539);
var _kinds = __webpack_require__(4278);
var _predicates = __webpack_require__(2338);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
var _introspection = __webpack_require__(8840);
var _scalars = __webpack_require__(6314);
var _schema = __webpack_require__(5761);
var _validate = __webpack_require__(7887);
var _values = __webpack_require__(1669);
var _valueFromAST = __webpack_require__(9308);
/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 */ function extendSchema(schema, documentAST, options) {
    (0, _schema.assertSchema)(schema);
    documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.devAssert)(false, "Must provide valid Document AST.");
    if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
        (0, _validate.assertValidSDLExtension)(documentAST, schema);
    }
    const schemaConfig = schema.toConfig();
    const extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
    return schemaConfig === extendedConfig ? schema : new _schema.GraphQLSchema(extendedConfig);
}
/**
 * @internal
 */ function extendSchemaImpl(schemaConfig, documentAST, options) {
    var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;
    // Collect the type definitions and extensions found in the document.
    const typeDefs = [];
    const typeExtensionsMap = Object.create(null); // New directives and types are separate because a directives and types can
    // have the same name. For example, a type named "skip".
    const directiveDefs = [];
    let schemaDef; // Schema extensions are collected which may add additional operation types.
    const schemaExtensions = [];
    for (const def of documentAST.definitions){
        if (def.kind === _kinds.Kind.SCHEMA_DEFINITION) {
            schemaDef = def;
        } else if (def.kind === _kinds.Kind.SCHEMA_EXTENSION) {
            schemaExtensions.push(def);
        } else if ((0, _predicates.isTypeDefinitionNode)(def)) {
            typeDefs.push(def);
        } else if ((0, _predicates.isTypeExtensionNode)(def)) {
            const extendedTypeName = def.name.value;
            const existingTypeExtensions = typeExtensionsMap[extendedTypeName];
            typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([
                def
            ]) : [
                def
            ];
        } else if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            directiveDefs.push(def);
        }
    } // If this document contains no new types, extensions, or directives then
    // return the same unmodified GraphQLSchema instance.
    if (Object.keys(typeExtensionsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
        return schemaConfig;
    }
    const typeMap = Object.create(null);
    for (const existingType of schemaConfig.types){
        typeMap[existingType.name] = extendNamedType(existingType);
    }
    for (const typeNode of typeDefs){
        var _stdTypeMap$name;
        const name = typeNode.name.value;
        typeMap[name] = (_stdTypeMap$name = stdTypeMap[name]) !== null && _stdTypeMap$name !== void 0 ? _stdTypeMap$name : buildType(typeNode);
    }
    const operationTypes = {
        // Get the extended root operation types.
        query: schemaConfig.query && replaceNamedType(schemaConfig.query),
        mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
        subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription),
        // Then, incorporate schema definition and all schema extensions.
        ...schemaDef && getOperationTypes([
            schemaDef
        ]),
        ...getOperationTypes(schemaExtensions)
    }; // Then produce and return a Schema config with these types.
    return {
        description: (_schemaDef = schemaDef) === null || _schemaDef === void 0 ? void 0 : (_schemaDef$descriptio = _schemaDef.description) === null || _schemaDef$descriptio === void 0 ? void 0 : _schemaDef$descriptio.value,
        ...operationTypes,
        types: Object.values(typeMap),
        directives: [
            ...schemaConfig.directives.map(replaceDirective),
            ...directiveDefs.map(buildDirective)
        ],
        extensions: Object.create(null),
        astNode: (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0 ? _schemaDef2 : schemaConfig.astNode,
        extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
        assumeValid: (_options$assumeValid = options === null || options === void 0 ? void 0 : options.assumeValid) !== null && _options$assumeValid !== void 0 ? _options$assumeValid : false
    }; // Below are functions used for producing this schema that have closed over
    // this scope and have access to the schema, cache, and newly defined types.
    function replaceType(type) {
        if ((0, _definition.isListType)(type)) {
            // @ts-expect-error
            return new _definition.GraphQLList(replaceType(type.ofType));
        }
        if ((0, _definition.isNonNullType)(type)) {
            // @ts-expect-error
            return new _definition.GraphQLNonNull(replaceType(type.ofType));
        } // @ts-expect-error FIXME
        return replaceNamedType(type);
    }
    function replaceNamedType(type) {
        // Note: While this could make early assertions to get the correctly
        // typed values, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable results.
        return typeMap[type.name];
    }
    function replaceDirective(directive) {
        const config = directive.toConfig();
        return new _directives.GraphQLDirective({
            ...config,
            args: (0, _mapValue.mapValue)(config.args, extendArg)
        });
    }
    function extendNamedType(type) {
        if ((0, _introspection.isIntrospectionType)(type) || (0, _scalars.isSpecifiedScalarType)(type)) {
            // Builtin types are not extended.
            return type;
        }
        if ((0, _definition.isScalarType)(type)) {
            return extendScalarType(type);
        }
        if ((0, _definition.isObjectType)(type)) {
            return extendObjectType(type);
        }
        if ((0, _definition.isInterfaceType)(type)) {
            return extendInterfaceType(type);
        }
        if ((0, _definition.isUnionType)(type)) {
            return extendUnionType(type);
        }
        if ((0, _definition.isEnumType)(type)) {
            return extendEnumType(type);
        }
        if ((0, _definition.isInputObjectType)(type)) {
            return extendInputObjectType(type);
        }
        /* c8 ignore next 3 */ // Not reachable, all possible type definition nodes have been considered.
         false || (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
    }
    function extendInputObjectType(type) {
        var _typeExtensionsMap$co;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co !== void 0 ? _typeExtensionsMap$co : [];
        return new _definition.GraphQLInputObjectType({
            ...config,
            fields: ()=>({
                    ...(0, _mapValue.mapValue)(config.fields, (field)=>({
                            ...field,
                            type: replaceType(field.type)
                        })),
                    ...buildInputFieldMap(extensions)
                }),
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
    }
    function extendEnumType(type) {
        var _typeExtensionsMap$ty;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null && _typeExtensionsMap$ty !== void 0 ? _typeExtensionsMap$ty : [];
        return new _definition.GraphQLEnumType({
            ...config,
            values: {
                ...config.values,
                ...buildEnumValueMap(extensions)
            },
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
    }
    function extendScalarType(type) {
        var _typeExtensionsMap$co2;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co2 !== void 0 ? _typeExtensionsMap$co2 : [];
        let specifiedByURL = config.specifiedByURL;
        for (const extensionNode of extensions){
            var _getSpecifiedByURL;
            specifiedByURL = (_getSpecifiedByURL = getSpecifiedByURL(extensionNode)) !== null && _getSpecifiedByURL !== void 0 ? _getSpecifiedByURL : specifiedByURL;
        }
        return new _definition.GraphQLScalarType({
            ...config,
            specifiedByURL,
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
    }
    function extendObjectType(type) {
        var _typeExtensionsMap$co3;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co3 !== void 0 ? _typeExtensionsMap$co3 : [];
        return new _definition.GraphQLObjectType({
            ...config,
            interfaces: ()=>[
                    ...type.getInterfaces().map(replaceNamedType),
                    ...buildInterfaces(extensions)
                ],
            fields: ()=>({
                    ...(0, _mapValue.mapValue)(config.fields, extendField),
                    ...buildFieldMap(extensions)
                }),
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
    }
    function extendInterfaceType(type) {
        var _typeExtensionsMap$co4;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co4 !== void 0 ? _typeExtensionsMap$co4 : [];
        return new _definition.GraphQLInterfaceType({
            ...config,
            interfaces: ()=>[
                    ...type.getInterfaces().map(replaceNamedType),
                    ...buildInterfaces(extensions)
                ],
            fields: ()=>({
                    ...(0, _mapValue.mapValue)(config.fields, extendField),
                    ...buildFieldMap(extensions)
                }),
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
    }
    function extendUnionType(type) {
        var _typeExtensionsMap$co5;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co5 !== void 0 ? _typeExtensionsMap$co5 : [];
        return new _definition.GraphQLUnionType({
            ...config,
            types: ()=>[
                    ...type.getTypes().map(replaceNamedType),
                    ...buildUnionTypes(extensions)
                ],
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
    }
    function extendField(field) {
        return {
            ...field,
            type: replaceType(field.type),
            args: field.args && (0, _mapValue.mapValue)(field.args, extendArg)
        };
    }
    function extendArg(arg) {
        return {
            ...arg,
            type: replaceType(arg.type)
        };
    }
    function getOperationTypes(nodes) {
        const opTypes = {};
        for (const node of nodes){
            var _node$operationTypes;
            // FIXME: https://github.com/graphql/graphql-js/issues/2203
            const operationTypesNodes = /* c8 ignore next */ (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
            for (const operationType of operationTypesNodes){
                // Note: While this could make early assertions to get the correctly
                // typed values below, that would throw immediately while type system
                // validation with validateSchema() will produce more actionable results.
                // @ts-expect-error
                opTypes[operationType.operation] = getNamedType(operationType.type);
            }
        }
        return opTypes;
    }
    function getNamedType(node) {
        var _stdTypeMap$name2;
        const name = node.name.value;
        const type = (_stdTypeMap$name2 = stdTypeMap[name]) !== null && _stdTypeMap$name2 !== void 0 ? _stdTypeMap$name2 : typeMap[name];
        if (type === undefined) {
            throw new Error(`Unknown type: "${name}".`);
        }
        return type;
    }
    function getWrappedType(node) {
        if (node.kind === _kinds.Kind.LIST_TYPE) {
            return new _definition.GraphQLList(getWrappedType(node.type));
        }
        if (node.kind === _kinds.Kind.NON_NULL_TYPE) {
            return new _definition.GraphQLNonNull(getWrappedType(node.type));
        }
        return getNamedType(node);
    }
    function buildDirective(node) {
        var _node$description;
        return new _directives.GraphQLDirective({
            name: node.name.value,
            description: (_node$description = node.description) === null || _node$description === void 0 ? void 0 : _node$description.value,
            // @ts-expect-error
            locations: node.locations.map(({ value })=>value),
            isRepeatable: node.repeatable,
            args: buildArgumentMap(node.arguments),
            astNode: node
        });
    }
    function buildFieldMap(nodes) {
        const fieldConfigMap = Object.create(null);
        for (const node of nodes){
            var _node$fields;
            // FIXME: https://github.com/graphql/graphql-js/issues/2203
            const nodeFields = /* c8 ignore next */ (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
            for (const field of nodeFields){
                var _field$description;
                fieldConfigMap[field.name.value] = {
                    // Note: While this could make assertions to get the correctly typed
                    // value, that would throw immediately while type system validation
                    // with validateSchema() will produce more actionable results.
                    type: getWrappedType(field.type),
                    description: (_field$description = field.description) === null || _field$description === void 0 ? void 0 : _field$description.value,
                    args: buildArgumentMap(field.arguments),
                    deprecationReason: getDeprecationReason(field),
                    astNode: field
                };
            }
        }
        return fieldConfigMap;
    }
    function buildArgumentMap(args) {
        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        const argsNodes = /* c8 ignore next */ args !== null && args !== void 0 ? args : [];
        const argConfigMap = Object.create(null);
        for (const arg of argsNodes){
            var _arg$description;
            // Note: While this could make assertions to get the correctly typed
            // value, that would throw immediately while type system validation
            // with validateSchema() will produce more actionable results.
            const type = getWrappedType(arg.type);
            argConfigMap[arg.name.value] = {
                type,
                description: (_arg$description = arg.description) === null || _arg$description === void 0 ? void 0 : _arg$description.value,
                defaultValue: (0, _valueFromAST.valueFromAST)(arg.defaultValue, type),
                deprecationReason: getDeprecationReason(arg),
                astNode: arg
            };
        }
        return argConfigMap;
    }
    function buildInputFieldMap(nodes) {
        const inputFieldMap = Object.create(null);
        for (const node of nodes){
            var _node$fields2;
            // FIXME: https://github.com/graphql/graphql-js/issues/2203
            const fieldsNodes = /* c8 ignore next */ (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0 ? _node$fields2 : [];
            for (const field of fieldsNodes){
                var _field$description2;
                // Note: While this could make assertions to get the correctly typed
                // value, that would throw immediately while type system validation
                // with validateSchema() will produce more actionable results.
                const type = getWrappedType(field.type);
                inputFieldMap[field.name.value] = {
                    type,
                    description: (_field$description2 = field.description) === null || _field$description2 === void 0 ? void 0 : _field$description2.value,
                    defaultValue: (0, _valueFromAST.valueFromAST)(field.defaultValue, type),
                    deprecationReason: getDeprecationReason(field),
                    astNode: field
                };
            }
        }
        return inputFieldMap;
    }
    function buildEnumValueMap(nodes) {
        const enumValueMap = Object.create(null);
        for (const node of nodes){
            var _node$values;
            // FIXME: https://github.com/graphql/graphql-js/issues/2203
            const valuesNodes = /* c8 ignore next */ (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
            for (const value of valuesNodes){
                var _value$description;
                enumValueMap[value.name.value] = {
                    description: (_value$description = value.description) === null || _value$description === void 0 ? void 0 : _value$description.value,
                    deprecationReason: getDeprecationReason(value),
                    astNode: value
                };
            }
        }
        return enumValueMap;
    }
    function buildInterfaces(nodes) {
        // Note: While this could make assertions to get the correctly typed
        // values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable results.
        // @ts-expect-error
        return nodes.flatMap(// FIXME: https://github.com/graphql/graphql-js/issues/2203
        (node)=>{
            var _node$interfaces$map, _node$interfaces;
            return /* c8 ignore next */ (_node$interfaces$map = (_node$interfaces = node.interfaces) === null || _node$interfaces === void 0 ? void 0 : _node$interfaces.map(getNamedType)) !== null && _node$interfaces$map !== void 0 ? _node$interfaces$map : [];
        });
    }
    function buildUnionTypes(nodes) {
        // Note: While this could make assertions to get the correctly typed
        // values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable results.
        // @ts-expect-error
        return nodes.flatMap(// FIXME: https://github.com/graphql/graphql-js/issues/2203
        (node)=>{
            var _node$types$map, _node$types;
            return /* c8 ignore next */ (_node$types$map = (_node$types = node.types) === null || _node$types === void 0 ? void 0 : _node$types.map(getNamedType)) !== null && _node$types$map !== void 0 ? _node$types$map : [];
        });
    }
    function buildType(astNode) {
        var _typeExtensionsMap$na;
        const name = astNode.name.value;
        const extensionASTNodes = (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null && _typeExtensionsMap$na !== void 0 ? _typeExtensionsMap$na : [];
        switch(astNode.kind){
            case _kinds.Kind.OBJECT_TYPE_DEFINITION:
                {
                    var _astNode$description;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new _definition.GraphQLObjectType({
                        name,
                        description: (_astNode$description = astNode.description) === null || _astNode$description === void 0 ? void 0 : _astNode$description.value,
                        interfaces: ()=>buildInterfaces(allNodes),
                        fields: ()=>buildFieldMap(allNodes),
                        astNode,
                        extensionASTNodes
                    });
                }
            case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
                {
                    var _astNode$description2;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new _definition.GraphQLInterfaceType({
                        name,
                        description: (_astNode$description2 = astNode.description) === null || _astNode$description2 === void 0 ? void 0 : _astNode$description2.value,
                        interfaces: ()=>buildInterfaces(allNodes),
                        fields: ()=>buildFieldMap(allNodes),
                        astNode,
                        extensionASTNodes
                    });
                }
            case _kinds.Kind.ENUM_TYPE_DEFINITION:
                {
                    var _astNode$description3;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new _definition.GraphQLEnumType({
                        name,
                        description: (_astNode$description3 = astNode.description) === null || _astNode$description3 === void 0 ? void 0 : _astNode$description3.value,
                        values: buildEnumValueMap(allNodes),
                        astNode,
                        extensionASTNodes
                    });
                }
            case _kinds.Kind.UNION_TYPE_DEFINITION:
                {
                    var _astNode$description4;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new _definition.GraphQLUnionType({
                        name,
                        description: (_astNode$description4 = astNode.description) === null || _astNode$description4 === void 0 ? void 0 : _astNode$description4.value,
                        types: ()=>buildUnionTypes(allNodes),
                        astNode,
                        extensionASTNodes
                    });
                }
            case _kinds.Kind.SCALAR_TYPE_DEFINITION:
                {
                    var _astNode$description5;
                    return new _definition.GraphQLScalarType({
                        name,
                        description: (_astNode$description5 = astNode.description) === null || _astNode$description5 === void 0 ? void 0 : _astNode$description5.value,
                        specifiedByURL: getSpecifiedByURL(astNode),
                        astNode,
                        extensionASTNodes
                    });
                }
            case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
                {
                    var _astNode$description6;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new _definition.GraphQLInputObjectType({
                        name,
                        description: (_astNode$description6 = astNode.description) === null || _astNode$description6 === void 0 ? void 0 : _astNode$description6.value,
                        fields: ()=>buildInputFieldMap(allNodes),
                        astNode,
                        extensionASTNodes,
                        isOneOf: isOneOf(astNode)
                    });
                }
        }
    }
}
const stdTypeMap = (0, _keyMap.keyMap)([
    ..._scalars.specifiedScalarTypes,
    ..._introspection.introspectionTypes
], (type)=>type.name);
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */ function getDeprecationReason(node) {
    const deprecated = (0, _values.getDirectiveValues)(_directives.GraphQLDeprecatedDirective, node); // @ts-expect-error validated by `getDirectiveValues`
    return deprecated === null || deprecated === void 0 ? void 0 : deprecated.reason;
}
/**
 * Given a scalar node, returns the string value for the specifiedByURL.
 */ function getSpecifiedByURL(node) {
    const specifiedBy = (0, _values.getDirectiveValues)(_directives.GraphQLSpecifiedByDirective, node); // @ts-expect-error validated by `getDirectiveValues`
    return specifiedBy === null || specifiedBy === void 0 ? void 0 : specifiedBy.url;
}
/**
 * Given an input object node, returns if the node should be OneOf.
 */ function isOneOf(node) {
    return Boolean((0, _values.getDirectiveValues)(_directives.GraphQLOneOfDirective, node));
}


/***/ }),

/***/ 4336:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.DangerousChangeType = exports.BreakingChangeType = void 0;
exports.findBreakingChanges = findBreakingChanges;
exports.findDangerousChanges = findDangerousChanges;
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _keyMap = __webpack_require__(1180);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
var _scalars = __webpack_require__(6314);
var _astFromValue = __webpack_require__(5128);
var _sortValueNode = __webpack_require__(1597);
var BreakingChangeType;
exports.BreakingChangeType = BreakingChangeType;
(function(BreakingChangeType) {
    BreakingChangeType["TYPE_REMOVED"] = "TYPE_REMOVED";
    BreakingChangeType["TYPE_CHANGED_KIND"] = "TYPE_CHANGED_KIND";
    BreakingChangeType["TYPE_REMOVED_FROM_UNION"] = "TYPE_REMOVED_FROM_UNION";
    BreakingChangeType["VALUE_REMOVED_FROM_ENUM"] = "VALUE_REMOVED_FROM_ENUM";
    BreakingChangeType["REQUIRED_INPUT_FIELD_ADDED"] = "REQUIRED_INPUT_FIELD_ADDED";
    BreakingChangeType["IMPLEMENTED_INTERFACE_REMOVED"] = "IMPLEMENTED_INTERFACE_REMOVED";
    BreakingChangeType["FIELD_REMOVED"] = "FIELD_REMOVED";
    BreakingChangeType["FIELD_CHANGED_KIND"] = "FIELD_CHANGED_KIND";
    BreakingChangeType["REQUIRED_ARG_ADDED"] = "REQUIRED_ARG_ADDED";
    BreakingChangeType["ARG_REMOVED"] = "ARG_REMOVED";
    BreakingChangeType["ARG_CHANGED_KIND"] = "ARG_CHANGED_KIND";
    BreakingChangeType["DIRECTIVE_REMOVED"] = "DIRECTIVE_REMOVED";
    BreakingChangeType["DIRECTIVE_ARG_REMOVED"] = "DIRECTIVE_ARG_REMOVED";
    BreakingChangeType["REQUIRED_DIRECTIVE_ARG_ADDED"] = "REQUIRED_DIRECTIVE_ARG_ADDED";
    BreakingChangeType["DIRECTIVE_REPEATABLE_REMOVED"] = "DIRECTIVE_REPEATABLE_REMOVED";
    BreakingChangeType["DIRECTIVE_LOCATION_REMOVED"] = "DIRECTIVE_LOCATION_REMOVED";
})(BreakingChangeType || (exports.BreakingChangeType = BreakingChangeType = {}));
var DangerousChangeType;
exports.DangerousChangeType = DangerousChangeType;
(function(DangerousChangeType) {
    DangerousChangeType["VALUE_ADDED_TO_ENUM"] = "VALUE_ADDED_TO_ENUM";
    DangerousChangeType["TYPE_ADDED_TO_UNION"] = "TYPE_ADDED_TO_UNION";
    DangerousChangeType["OPTIONAL_INPUT_FIELD_ADDED"] = "OPTIONAL_INPUT_FIELD_ADDED";
    DangerousChangeType["OPTIONAL_ARG_ADDED"] = "OPTIONAL_ARG_ADDED";
    DangerousChangeType["IMPLEMENTED_INTERFACE_ADDED"] = "IMPLEMENTED_INTERFACE_ADDED";
    DangerousChangeType["ARG_DEFAULT_VALUE_CHANGE"] = "ARG_DEFAULT_VALUE_CHANGE";
})(DangerousChangeType || (exports.DangerousChangeType = DangerousChangeType = {}));
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */ function findBreakingChanges(oldSchema, newSchema) {
    // @ts-expect-error
    return findSchemaChanges(oldSchema, newSchema).filter((change)=>change.type in BreakingChangeType);
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */ function findDangerousChanges(oldSchema, newSchema) {
    // @ts-expect-error
    return findSchemaChanges(oldSchema, newSchema).filter((change)=>change.type in DangerousChangeType);
}
function findSchemaChanges(oldSchema, newSchema) {
    return [
        ...findTypeChanges(oldSchema, newSchema),
        ...findDirectiveChanges(oldSchema, newSchema)
    ];
}
function findDirectiveChanges(oldSchema, newSchema) {
    const schemaChanges = [];
    const directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());
    for (const oldDirective of directivesDiff.removed){
        schemaChanges.push({
            type: BreakingChangeType.DIRECTIVE_REMOVED,
            description: `${oldDirective.name} was removed.`
        });
    }
    for (const [oldDirective, newDirective] of directivesDiff.persisted){
        const argsDiff = diff(oldDirective.args, newDirective.args);
        for (const newArg of argsDiff.added){
            if ((0, _definition.isRequiredArgument)(newArg)) {
                schemaChanges.push({
                    type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
                    description: `A required arg ${newArg.name} on directive ${oldDirective.name} was added.`
                });
            }
        }
        for (const oldArg of argsDiff.removed){
            schemaChanges.push({
                type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
                description: `${oldArg.name} was removed from ${oldDirective.name}.`
            });
        }
        if (oldDirective.isRepeatable && !newDirective.isRepeatable) {
            schemaChanges.push({
                type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
                description: `Repeatable flag was removed from ${oldDirective.name}.`
            });
        }
        for (const location of oldDirective.locations){
            if (!newDirective.locations.includes(location)) {
                schemaChanges.push({
                    type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
                    description: `${location} was removed from ${oldDirective.name}.`
                });
            }
        }
    }
    return schemaChanges;
}
function findTypeChanges(oldSchema, newSchema) {
    const schemaChanges = [];
    const typesDiff = diff(Object.values(oldSchema.getTypeMap()), Object.values(newSchema.getTypeMap()));
    for (const oldType of typesDiff.removed){
        schemaChanges.push({
            type: BreakingChangeType.TYPE_REMOVED,
            description: (0, _scalars.isSpecifiedScalarType)(oldType) ? `Standard scalar ${oldType.name} was removed because it is not referenced anymore.` : `${oldType.name} was removed.`
        });
    }
    for (const [oldType, newType] of typesDiff.persisted){
        if ((0, _definition.isEnumType)(oldType) && (0, _definition.isEnumType)(newType)) {
            schemaChanges.push(...findEnumTypeChanges(oldType, newType));
        } else if ((0, _definition.isUnionType)(oldType) && (0, _definition.isUnionType)(newType)) {
            schemaChanges.push(...findUnionTypeChanges(oldType, newType));
        } else if ((0, _definition.isInputObjectType)(oldType) && (0, _definition.isInputObjectType)(newType)) {
            schemaChanges.push(...findInputObjectTypeChanges(oldType, newType));
        } else if ((0, _definition.isObjectType)(oldType) && (0, _definition.isObjectType)(newType)) {
            schemaChanges.push(...findFieldChanges(oldType, newType), ...findImplementedInterfacesChanges(oldType, newType));
        } else if ((0, _definition.isInterfaceType)(oldType) && (0, _definition.isInterfaceType)(newType)) {
            schemaChanges.push(...findFieldChanges(oldType, newType), ...findImplementedInterfacesChanges(oldType, newType));
        } else if (oldType.constructor !== newType.constructor) {
            schemaChanges.push({
                type: BreakingChangeType.TYPE_CHANGED_KIND,
                description: `${oldType.name} changed from ` + `${typeKindName(oldType)} to ${typeKindName(newType)}.`
            });
        }
    }
    return schemaChanges;
}
function findInputObjectTypeChanges(oldType, newType) {
    const schemaChanges = [];
    const fieldsDiff = diff(Object.values(oldType.getFields()), Object.values(newType.getFields()));
    for (const newField of fieldsDiff.added){
        if ((0, _definition.isRequiredInputField)(newField)) {
            schemaChanges.push({
                type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
                description: `A required field ${newField.name} on input type ${oldType.name} was added.`
            });
        } else {
            schemaChanges.push({
                type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
                description: `An optional field ${newField.name} on input type ${oldType.name} was added.`
            });
        }
    }
    for (const oldField of fieldsDiff.removed){
        schemaChanges.push({
            type: BreakingChangeType.FIELD_REMOVED,
            description: `${oldType.name}.${oldField.name} was removed.`
        });
    }
    for (const [oldField, newField] of fieldsDiff.persisted){
        const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldField.type, newField.type);
        if (!isSafe) {
            schemaChanges.push({
                type: BreakingChangeType.FIELD_CHANGED_KIND,
                description: `${oldType.name}.${oldField.name} changed type from ` + `${String(oldField.type)} to ${String(newField.type)}.`
            });
        }
    }
    return schemaChanges;
}
function findUnionTypeChanges(oldType, newType) {
    const schemaChanges = [];
    const possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());
    for (const newPossibleType of possibleTypesDiff.added){
        schemaChanges.push({
            type: DangerousChangeType.TYPE_ADDED_TO_UNION,
            description: `${newPossibleType.name} was added to union type ${oldType.name}.`
        });
    }
    for (const oldPossibleType of possibleTypesDiff.removed){
        schemaChanges.push({
            type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
            description: `${oldPossibleType.name} was removed from union type ${oldType.name}.`
        });
    }
    return schemaChanges;
}
function findEnumTypeChanges(oldType, newType) {
    const schemaChanges = [];
    const valuesDiff = diff(oldType.getValues(), newType.getValues());
    for (const newValue of valuesDiff.added){
        schemaChanges.push({
            type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
            description: `${newValue.name} was added to enum type ${oldType.name}.`
        });
    }
    for (const oldValue of valuesDiff.removed){
        schemaChanges.push({
            type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
            description: `${oldValue.name} was removed from enum type ${oldType.name}.`
        });
    }
    return schemaChanges;
}
function findImplementedInterfacesChanges(oldType, newType) {
    const schemaChanges = [];
    const interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());
    for (const newInterface of interfacesDiff.added){
        schemaChanges.push({
            type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
            description: `${newInterface.name} added to interfaces implemented by ${oldType.name}.`
        });
    }
    for (const oldInterface of interfacesDiff.removed){
        schemaChanges.push({
            type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
            description: `${oldType.name} no longer implements interface ${oldInterface.name}.`
        });
    }
    return schemaChanges;
}
function findFieldChanges(oldType, newType) {
    const schemaChanges = [];
    const fieldsDiff = diff(Object.values(oldType.getFields()), Object.values(newType.getFields()));
    for (const oldField of fieldsDiff.removed){
        schemaChanges.push({
            type: BreakingChangeType.FIELD_REMOVED,
            description: `${oldType.name}.${oldField.name} was removed.`
        });
    }
    for (const [oldField, newField] of fieldsDiff.persisted){
        schemaChanges.push(...findArgChanges(oldType, oldField, newField));
        const isSafe = isChangeSafeForObjectOrInterfaceField(oldField.type, newField.type);
        if (!isSafe) {
            schemaChanges.push({
                type: BreakingChangeType.FIELD_CHANGED_KIND,
                description: `${oldType.name}.${oldField.name} changed type from ` + `${String(oldField.type)} to ${String(newField.type)}.`
            });
        }
    }
    return schemaChanges;
}
function findArgChanges(oldType, oldField, newField) {
    const schemaChanges = [];
    const argsDiff = diff(oldField.args, newField.args);
    for (const oldArg of argsDiff.removed){
        schemaChanges.push({
            type: BreakingChangeType.ARG_REMOVED,
            description: `${oldType.name}.${oldField.name} arg ${oldArg.name} was removed.`
        });
    }
    for (const [oldArg, newArg] of argsDiff.persisted){
        const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArg.type, newArg.type);
        if (!isSafe) {
            schemaChanges.push({
                type: BreakingChangeType.ARG_CHANGED_KIND,
                description: `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed type from ` + `${String(oldArg.type)} to ${String(newArg.type)}.`
            });
        } else if (oldArg.defaultValue !== undefined) {
            if (newArg.defaultValue === undefined) {
                schemaChanges.push({
                    type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
                    description: `${oldType.name}.${oldField.name} arg ${oldArg.name} defaultValue was removed.`
                });
            } else {
                // Since we looking only for client's observable changes we should
                // compare default values in the same representation as they are
                // represented inside introspection.
                const oldValueStr = stringifyValue(oldArg.defaultValue, oldArg.type);
                const newValueStr = stringifyValue(newArg.defaultValue, newArg.type);
                if (oldValueStr !== newValueStr) {
                    schemaChanges.push({
                        type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
                        description: `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed defaultValue from ${oldValueStr} to ${newValueStr}.`
                    });
                }
            }
        }
    }
    for (const newArg of argsDiff.added){
        if ((0, _definition.isRequiredArgument)(newArg)) {
            schemaChanges.push({
                type: BreakingChangeType.REQUIRED_ARG_ADDED,
                description: `A required arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`
            });
        } else {
            schemaChanges.push({
                type: DangerousChangeType.OPTIONAL_ARG_ADDED,
                description: `An optional arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`
            });
        }
    }
    return schemaChanges;
}
function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
    if ((0, _definition.isListType)(oldType)) {
        return(// if they're both lists, make sure the underlying types are compatible
        (0, _definition.isListType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || // moving from nullable to non-null of the same underlying type is safe
        (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType));
    }
    if ((0, _definition.isNonNullType)(oldType)) {
        // if they're both non-null, make sure the underlying types are compatible
        return (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
    }
    return(// if they're both named types, see if their names are equivalent
    (0, _definition.isNamedType)(newType) && oldType.name === newType.name || // moving from nullable to non-null of the same underlying type is safe
    (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType));
}
function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
    if ((0, _definition.isListType)(oldType)) {
        // if they're both lists, make sure the underlying types are compatible
        return (0, _definition.isListType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
    }
    if ((0, _definition.isNonNullType)(oldType)) {
        return(// if they're both non-null, make sure the underlying types are
        // compatible
        (0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || // moving from non-null to nullable of the same underlying type is safe
        !(0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType));
    } // if they're both named types, see if their names are equivalent
    return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
}
function typeKindName(type) {
    if ((0, _definition.isScalarType)(type)) {
        return "a Scalar type";
    }
    if ((0, _definition.isObjectType)(type)) {
        return "an Object type";
    }
    if ((0, _definition.isInterfaceType)(type)) {
        return "an Interface type";
    }
    if ((0, _definition.isUnionType)(type)) {
        return "a Union type";
    }
    if ((0, _definition.isEnumType)(type)) {
        return "an Enum type";
    }
    if ((0, _definition.isInputObjectType)(type)) {
        return "an Input type";
    }
    /* c8 ignore next 3 */ // Not reachable, all possible types have been considered.
     false || (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
}
function stringifyValue(value, type) {
    const ast = (0, _astFromValue.astFromValue)(value, type);
    ast != null || (0, _invariant.invariant)(false);
    return (0, _printer.print)((0, _sortValueNode.sortValueNode)(ast));
}
function diff(oldArray, newArray) {
    const added = [];
    const removed = [];
    const persisted = [];
    const oldMap = (0, _keyMap.keyMap)(oldArray, ({ name })=>name);
    const newMap = (0, _keyMap.keyMap)(newArray, ({ name })=>name);
    for (const oldItem of oldArray){
        const newItem = newMap[oldItem.name];
        if (newItem === undefined) {
            removed.push(oldItem);
        } else {
            persisted.push([
                oldItem,
                newItem
            ]);
        }
    }
    for (const newItem of newArray){
        if (oldMap[newItem.name] === undefined) {
            added.push(newItem);
        }
    }
    return {
        added,
        persisted,
        removed
    };
}


/***/ }),

/***/ 6450:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getIntrospectionQuery = getIntrospectionQuery;
/**
 * Produce the GraphQL query recommended for a full schema introspection.
 * Accepts optional IntrospectionOptions.
 */ function getIntrospectionQuery(options) {
    const optionsWithDefault = {
        descriptions: true,
        specifiedByUrl: false,
        directiveIsRepeatable: false,
        schemaDescription: false,
        inputValueDeprecation: false,
        oneOf: false,
        ...options
    };
    const descriptions = optionsWithDefault.descriptions ? "description" : "";
    const specifiedByUrl = optionsWithDefault.specifiedByUrl ? "specifiedByURL" : "";
    const directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable ? "isRepeatable" : "";
    const schemaDescription = optionsWithDefault.schemaDescription ? descriptions : "";
    function inputDeprecation(str) {
        return optionsWithDefault.inputValueDeprecation ? str : "";
    }
    const oneOf = optionsWithDefault.oneOf ? "isOneOf" : "";
    return `
    query IntrospectionQuery {
      __schema {
        ${schemaDescription}
        queryType { name kind }
        mutationType { name kind }
        subscriptionType { name kind }
        types {
          ...FullType
        }
        directives {
          name
          ${descriptions}
          ${directiveIsRepeatable}
          locations
          args${inputDeprecation("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${descriptions}
      ${specifiedByUrl}
      ${oneOf}
      fields(includeDeprecated: true) {
        name
        ${descriptions}
        args${inputDeprecation("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${inputDeprecation("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${descriptions}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${descriptions}
      type { ...TypeRef }
      defaultValue
      ${inputDeprecation("isDeprecated")}
      ${inputDeprecation("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}


/***/ }),

/***/ 4238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getOperationAST = getOperationAST;
var _kinds = __webpack_require__(4278);
/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */ function getOperationAST(documentAST, operationName) {
    let operation = null;
    for (const definition of documentAST.definitions){
        if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
            var _definition$name;
            if (operationName == null) {
                // If no operation name was provided, only return an Operation if there
                // is one defined in the document. Upon encountering the second, return
                // null.
                if (operation) {
                    return null;
                }
                operation = definition;
            } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
                return definition;
            }
        }
    }
    return operation;
}


/***/ }),

/***/ 4881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getOperationRootType = getOperationRootType;
var _GraphQLError = __webpack_require__(6042);
/**
 * Extracts the root type of the operation from the schema.
 *
 * @deprecated Please use `GraphQLSchema.getRootType` instead. Will be removed in v17
 */ function getOperationRootType(schema, operation) {
    if (operation.operation === "query") {
        const queryType = schema.getQueryType();
        if (!queryType) {
            throw new _GraphQLError.GraphQLError("Schema does not define the required query root type.", {
                nodes: operation
            });
        }
        return queryType;
    }
    if (operation.operation === "mutation") {
        const mutationType = schema.getMutationType();
        if (!mutationType) {
            throw new _GraphQLError.GraphQLError("Schema is not configured for mutations.", {
                nodes: operation
            });
        }
        return mutationType;
    }
    if (operation.operation === "subscription") {
        const subscriptionType = schema.getSubscriptionType();
        if (!subscriptionType) {
            throw new _GraphQLError.GraphQLError("Schema is not configured for subscriptions.", {
                nodes: operation
            });
        }
        return subscriptionType;
    }
    throw new _GraphQLError.GraphQLError("Can only have query, mutation and subscription operations.", {
        nodes: operation
    });
}


/***/ }),

/***/ 5558:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "BreakingChangeType", ({
    enumerable: true,
    get: function() {
        return _findBreakingChanges.BreakingChangeType;
    }
}));
Object.defineProperty(exports, "DangerousChangeType", ({
    enumerable: true,
    get: function() {
        return _findBreakingChanges.DangerousChangeType;
    }
}));
Object.defineProperty(exports, "TypeInfo", ({
    enumerable: true,
    get: function() {
        return _TypeInfo.TypeInfo;
    }
}));
Object.defineProperty(exports, "assertValidName", ({
    enumerable: true,
    get: function() {
        return _assertValidName.assertValidName;
    }
}));
Object.defineProperty(exports, "astFromValue", ({
    enumerable: true,
    get: function() {
        return _astFromValue.astFromValue;
    }
}));
Object.defineProperty(exports, "buildASTSchema", ({
    enumerable: true,
    get: function() {
        return _buildASTSchema.buildASTSchema;
    }
}));
Object.defineProperty(exports, "buildClientSchema", ({
    enumerable: true,
    get: function() {
        return _buildClientSchema.buildClientSchema;
    }
}));
Object.defineProperty(exports, "buildSchema", ({
    enumerable: true,
    get: function() {
        return _buildASTSchema.buildSchema;
    }
}));
Object.defineProperty(exports, "coerceInputValue", ({
    enumerable: true,
    get: function() {
        return _coerceInputValue.coerceInputValue;
    }
}));
Object.defineProperty(exports, "concatAST", ({
    enumerable: true,
    get: function() {
        return _concatAST.concatAST;
    }
}));
Object.defineProperty(exports, "doTypesOverlap", ({
    enumerable: true,
    get: function() {
        return _typeComparators.doTypesOverlap;
    }
}));
Object.defineProperty(exports, "extendSchema", ({
    enumerable: true,
    get: function() {
        return _extendSchema.extendSchema;
    }
}));
Object.defineProperty(exports, "findBreakingChanges", ({
    enumerable: true,
    get: function() {
        return _findBreakingChanges.findBreakingChanges;
    }
}));
Object.defineProperty(exports, "findDangerousChanges", ({
    enumerable: true,
    get: function() {
        return _findBreakingChanges.findDangerousChanges;
    }
}));
Object.defineProperty(exports, "getIntrospectionQuery", ({
    enumerable: true,
    get: function() {
        return _getIntrospectionQuery.getIntrospectionQuery;
    }
}));
Object.defineProperty(exports, "getOperationAST", ({
    enumerable: true,
    get: function() {
        return _getOperationAST.getOperationAST;
    }
}));
Object.defineProperty(exports, "getOperationRootType", ({
    enumerable: true,
    get: function() {
        return _getOperationRootType.getOperationRootType;
    }
}));
Object.defineProperty(exports, "introspectionFromSchema", ({
    enumerable: true,
    get: function() {
        return _introspectionFromSchema.introspectionFromSchema;
    }
}));
Object.defineProperty(exports, "isEqualType", ({
    enumerable: true,
    get: function() {
        return _typeComparators.isEqualType;
    }
}));
Object.defineProperty(exports, "isTypeSubTypeOf", ({
    enumerable: true,
    get: function() {
        return _typeComparators.isTypeSubTypeOf;
    }
}));
Object.defineProperty(exports, "isValidNameError", ({
    enumerable: true,
    get: function() {
        return _assertValidName.isValidNameError;
    }
}));
Object.defineProperty(exports, "lexicographicSortSchema", ({
    enumerable: true,
    get: function() {
        return _lexicographicSortSchema.lexicographicSortSchema;
    }
}));
Object.defineProperty(exports, "printIntrospectionSchema", ({
    enumerable: true,
    get: function() {
        return _printSchema.printIntrospectionSchema;
    }
}));
Object.defineProperty(exports, "printSchema", ({
    enumerable: true,
    get: function() {
        return _printSchema.printSchema;
    }
}));
Object.defineProperty(exports, "printType", ({
    enumerable: true,
    get: function() {
        return _printSchema.printType;
    }
}));
Object.defineProperty(exports, "separateOperations", ({
    enumerable: true,
    get: function() {
        return _separateOperations.separateOperations;
    }
}));
Object.defineProperty(exports, "stripIgnoredCharacters", ({
    enumerable: true,
    get: function() {
        return _stripIgnoredCharacters.stripIgnoredCharacters;
    }
}));
Object.defineProperty(exports, "typeFromAST", ({
    enumerable: true,
    get: function() {
        return _typeFromAST.typeFromAST;
    }
}));
Object.defineProperty(exports, "valueFromAST", ({
    enumerable: true,
    get: function() {
        return _valueFromAST.valueFromAST;
    }
}));
Object.defineProperty(exports, "valueFromASTUntyped", ({
    enumerable: true,
    get: function() {
        return _valueFromASTUntyped.valueFromASTUntyped;
    }
}));
Object.defineProperty(exports, "visitWithTypeInfo", ({
    enumerable: true,
    get: function() {
        return _TypeInfo.visitWithTypeInfo;
    }
}));
var _getIntrospectionQuery = __webpack_require__(6450);
var _getOperationAST = __webpack_require__(4238);
var _getOperationRootType = __webpack_require__(4881);
var _introspectionFromSchema = __webpack_require__(8490);
var _buildClientSchema = __webpack_require__(2885);
var _buildASTSchema = __webpack_require__(7166);
var _extendSchema = __webpack_require__(6162);
var _lexicographicSortSchema = __webpack_require__(686);
var _printSchema = __webpack_require__(1893);
var _typeFromAST = __webpack_require__(871);
var _valueFromAST = __webpack_require__(9308);
var _valueFromASTUntyped = __webpack_require__(964);
var _astFromValue = __webpack_require__(5128);
var _TypeInfo = __webpack_require__(8674);
var _coerceInputValue = __webpack_require__(5001);
var _concatAST = __webpack_require__(1385);
var _separateOperations = __webpack_require__(2271);
var _stripIgnoredCharacters = __webpack_require__(232);
var _typeComparators = __webpack_require__(3321);
var _assertValidName = __webpack_require__(3393);
var _findBreakingChanges = __webpack_require__(4336);


/***/ }),

/***/ 8490:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.introspectionFromSchema = introspectionFromSchema;
var _invariant = __webpack_require__(2270);
var _parser = __webpack_require__(3243);
var _execute = __webpack_require__(3551);
var _getIntrospectionQuery = __webpack_require__(6450);
/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */ function introspectionFromSchema(schema, options) {
    const optionsWithDefaults = {
        specifiedByUrl: true,
        directiveIsRepeatable: true,
        schemaDescription: true,
        inputValueDeprecation: true,
        oneOf: true,
        ...options
    };
    const document = (0, _parser.parse)((0, _getIntrospectionQuery.getIntrospectionQuery)(optionsWithDefaults));
    const result = (0, _execute.executeSync)({
        schema,
        document
    });
    !result.errors && result.data || (0, _invariant.invariant)(false);
    return result.data;
}


/***/ }),

/***/ 686:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.lexicographicSortSchema = lexicographicSortSchema;
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _keyValMap = __webpack_require__(6179);
var _naturalCompare = __webpack_require__(9170);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
var _introspection = __webpack_require__(8840);
var _schema = __webpack_require__(5761);
/**
 * Sort GraphQLSchema.
 *
 * This function returns a sorted copy of the given GraphQLSchema.
 */ function lexicographicSortSchema(schema) {
    const schemaConfig = schema.toConfig();
    const typeMap = (0, _keyValMap.keyValMap)(sortByName(schemaConfig.types), (type)=>type.name, sortNamedType);
    return new _schema.GraphQLSchema({
        ...schemaConfig,
        types: Object.values(typeMap),
        directives: sortByName(schemaConfig.directives).map(sortDirective),
        query: replaceMaybeType(schemaConfig.query),
        mutation: replaceMaybeType(schemaConfig.mutation),
        subscription: replaceMaybeType(schemaConfig.subscription)
    });
    function replaceType(type) {
        if ((0, _definition.isListType)(type)) {
            // @ts-expect-error
            return new _definition.GraphQLList(replaceType(type.ofType));
        } else if ((0, _definition.isNonNullType)(type)) {
            // @ts-expect-error
            return new _definition.GraphQLNonNull(replaceType(type.ofType));
        } // @ts-expect-error FIXME: TS Conversion
        return replaceNamedType(type);
    }
    function replaceNamedType(type) {
        return typeMap[type.name];
    }
    function replaceMaybeType(maybeType) {
        return maybeType && replaceNamedType(maybeType);
    }
    function sortDirective(directive) {
        const config = directive.toConfig();
        return new _directives.GraphQLDirective({
            ...config,
            locations: sortBy(config.locations, (x)=>x),
            args: sortArgs(config.args)
        });
    }
    function sortArgs(args) {
        return sortObjMap(args, (arg)=>({
                ...arg,
                type: replaceType(arg.type)
            }));
    }
    function sortFields(fieldsMap) {
        return sortObjMap(fieldsMap, (field)=>({
                ...field,
                type: replaceType(field.type),
                args: field.args && sortArgs(field.args)
            }));
    }
    function sortInputFields(fieldsMap) {
        return sortObjMap(fieldsMap, (field)=>({
                ...field,
                type: replaceType(field.type)
            }));
    }
    function sortTypes(array) {
        return sortByName(array).map(replaceNamedType);
    }
    function sortNamedType(type) {
        if ((0, _definition.isScalarType)(type) || (0, _introspection.isIntrospectionType)(type)) {
            return type;
        }
        if ((0, _definition.isObjectType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLObjectType({
                ...config,
                interfaces: ()=>sortTypes(config.interfaces),
                fields: ()=>sortFields(config.fields)
            });
        }
        if ((0, _definition.isInterfaceType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLInterfaceType({
                ...config,
                interfaces: ()=>sortTypes(config.interfaces),
                fields: ()=>sortFields(config.fields)
            });
        }
        if ((0, _definition.isUnionType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLUnionType({
                ...config,
                types: ()=>sortTypes(config.types)
            });
        }
        if ((0, _definition.isEnumType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLEnumType({
                ...config,
                values: sortObjMap(config.values, (value)=>value)
            });
        }
        if ((0, _definition.isInputObjectType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLInputObjectType({
                ...config,
                fields: ()=>sortInputFields(config.fields)
            });
        }
        /* c8 ignore next 3 */ // Not reachable, all possible types have been considered.
         false || (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
    }
}
function sortObjMap(map, sortValueFn) {
    const sortedMap = Object.create(null);
    for (const key of Object.keys(map).sort(_naturalCompare.naturalCompare)){
        sortedMap[key] = sortValueFn(map[key]);
    }
    return sortedMap;
}
function sortByName(array) {
    return sortBy(array, (obj)=>obj.name);
}
function sortBy(array, mapToKey) {
    return array.slice().sort((obj1, obj2)=>{
        const key1 = mapToKey(obj1);
        const key2 = mapToKey(obj2);
        return (0, _naturalCompare.naturalCompare)(key1, key2);
    });
}


/***/ }),

/***/ 1893:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.printIntrospectionSchema = printIntrospectionSchema;
exports.printSchema = printSchema;
exports.printType = printType;
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _blockString = __webpack_require__(7168);
var _kinds = __webpack_require__(4278);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
var _introspection = __webpack_require__(8840);
var _scalars = __webpack_require__(6314);
var _astFromValue = __webpack_require__(5128);
function printSchema(schema) {
    return printFilteredSchema(schema, (n)=>!(0, _directives.isSpecifiedDirective)(n), isDefinedType);
}
function printIntrospectionSchema(schema) {
    return printFilteredSchema(schema, _directives.isSpecifiedDirective, _introspection.isIntrospectionType);
}
function isDefinedType(type) {
    return !(0, _scalars.isSpecifiedScalarType)(type) && !(0, _introspection.isIntrospectionType)(type);
}
function printFilteredSchema(schema, directiveFilter, typeFilter) {
    const directives = schema.getDirectives().filter(directiveFilter);
    const types = Object.values(schema.getTypeMap()).filter(typeFilter);
    return [
        printSchemaDefinition(schema),
        ...directives.map((directive)=>printDirective(directive)),
        ...types.map((type)=>printType(type))
    ].filter(Boolean).join("\n\n");
}
function printSchemaDefinition(schema) {
    if (schema.description == null && isSchemaOfCommonNames(schema)) {
        return;
    }
    const operationTypes = [];
    const queryType = schema.getQueryType();
    if (queryType) {
        operationTypes.push(`  query: ${queryType.name}`);
    }
    const mutationType = schema.getMutationType();
    if (mutationType) {
        operationTypes.push(`  mutation: ${mutationType.name}`);
    }
    const subscriptionType = schema.getSubscriptionType();
    if (subscriptionType) {
        operationTypes.push(`  subscription: ${subscriptionType.name}`);
    }
    return printDescription(schema) + `schema {\n${operationTypes.join("\n")}\n}`;
}
/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 * ```graphql
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *     subscription: Subscription
 *   }
 * ```
 *
 * When using this naming convention, the schema description can be omitted.
 */ function isSchemaOfCommonNames(schema) {
    const queryType = schema.getQueryType();
    if (queryType && queryType.name !== "Query") {
        return false;
    }
    const mutationType = schema.getMutationType();
    if (mutationType && mutationType.name !== "Mutation") {
        return false;
    }
    const subscriptionType = schema.getSubscriptionType();
    if (subscriptionType && subscriptionType.name !== "Subscription") {
        return false;
    }
    return true;
}
function printType(type) {
    if ((0, _definition.isScalarType)(type)) {
        return printScalar(type);
    }
    if ((0, _definition.isObjectType)(type)) {
        return printObject(type);
    }
    if ((0, _definition.isInterfaceType)(type)) {
        return printInterface(type);
    }
    if ((0, _definition.isUnionType)(type)) {
        return printUnion(type);
    }
    if ((0, _definition.isEnumType)(type)) {
        return printEnum(type);
    }
    if ((0, _definition.isInputObjectType)(type)) {
        return printInputObject(type);
    }
    /* c8 ignore next 3 */ // Not reachable, all possible types have been considered.
     false || (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
}
function printScalar(type) {
    return printDescription(type) + `scalar ${type.name}` + printSpecifiedByURL(type);
}
function printImplementedInterfaces(type) {
    const interfaces = type.getInterfaces();
    return interfaces.length ? " implements " + interfaces.map((i)=>i.name).join(" & ") : "";
}
function printObject(type) {
    return printDescription(type) + `type ${type.name}` + printImplementedInterfaces(type) + printFields(type);
}
function printInterface(type) {
    return printDescription(type) + `interface ${type.name}` + printImplementedInterfaces(type) + printFields(type);
}
function printUnion(type) {
    const types = type.getTypes();
    const possibleTypes = types.length ? " = " + types.join(" | ") : "";
    return printDescription(type) + "union " + type.name + possibleTypes;
}
function printEnum(type) {
    const values = type.getValues().map((value, i)=>printDescription(value, "  ", !i) + "  " + value.name + printDeprecated(value.deprecationReason));
    return printDescription(type) + `enum ${type.name}` + printBlock(values);
}
function printInputObject(type) {
    const fields = Object.values(type.getFields()).map((f, i)=>printDescription(f, "  ", !i) + "  " + printInputValue(f));
    return printDescription(type) + `input ${type.name}` + (type.isOneOf ? " @oneOf" : "") + printBlock(fields);
}
function printFields(type) {
    const fields = Object.values(type.getFields()).map((f, i)=>printDescription(f, "  ", !i) + "  " + f.name + printArgs(f.args, "  ") + ": " + String(f.type) + printDeprecated(f.deprecationReason));
    return printBlock(fields);
}
function printBlock(items) {
    return items.length !== 0 ? " {\n" + items.join("\n") + "\n}" : "";
}
function printArgs(args, indentation = "") {
    if (args.length === 0) {
        return "";
    } // If every arg does not have a description, print them on one line.
    if (args.every((arg)=>!arg.description)) {
        return "(" + args.map(printInputValue).join(", ") + ")";
    }
    return "(\n" + args.map((arg, i)=>printDescription(arg, "  " + indentation, !i) + "  " + indentation + printInputValue(arg)).join("\n") + "\n" + indentation + ")";
}
function printInputValue(arg) {
    const defaultAST = (0, _astFromValue.astFromValue)(arg.defaultValue, arg.type);
    let argDecl = arg.name + ": " + String(arg.type);
    if (defaultAST) {
        argDecl += ` = ${(0, _printer.print)(defaultAST)}`;
    }
    return argDecl + printDeprecated(arg.deprecationReason);
}
function printDirective(directive) {
    return printDescription(directive) + "directive @" + directive.name + printArgs(directive.args) + (directive.isRepeatable ? " repeatable" : "") + " on " + directive.locations.join(" | ");
}
function printDeprecated(reason) {
    if (reason == null) {
        return "";
    }
    if (reason !== _directives.DEFAULT_DEPRECATION_REASON) {
        const astValue = (0, _printer.print)({
            kind: _kinds.Kind.STRING,
            value: reason
        });
        return ` @deprecated(reason: ${astValue})`;
    }
    return " @deprecated";
}
function printSpecifiedByURL(scalar) {
    if (scalar.specifiedByURL == null) {
        return "";
    }
    const astValue = (0, _printer.print)({
        kind: _kinds.Kind.STRING,
        value: scalar.specifiedByURL
    });
    return ` @specifiedBy(url: ${astValue})`;
}
function printDescription(def, indentation = "", firstInBlock = true) {
    const { description } = def;
    if (description == null) {
        return "";
    }
    const blockString = (0, _printer.print)({
        kind: _kinds.Kind.STRING,
        value: description,
        block: (0, _blockString.isPrintableAsBlockString)(description)
    });
    const prefix = indentation && !firstInBlock ? "\n" + indentation : indentation;
    return prefix + blockString.replace(/\n/g, "\n" + indentation) + "\n";
}


/***/ }),

/***/ 2271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.separateOperations = separateOperations;
var _kinds = __webpack_require__(4278);
var _visitor = __webpack_require__(4041);
/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */ function separateOperations(documentAST) {
    const operations = [];
    const depGraph = Object.create(null); // Populate metadata and build a dependency graph.
    for (const definitionNode of documentAST.definitions){
        switch(definitionNode.kind){
            case _kinds.Kind.OPERATION_DEFINITION:
                operations.push(definitionNode);
                break;
            case _kinds.Kind.FRAGMENT_DEFINITION:
                depGraph[definitionNode.name.value] = collectDependencies(definitionNode.selectionSet);
                break;
            default:
        }
    } // For each operation, produce a new synthesized AST which includes only what
    // is necessary for completing that operation.
    const separatedDocumentASTs = Object.create(null);
    for (const operation of operations){
        const dependencies = new Set();
        for (const fragmentName of collectDependencies(operation.selectionSet)){
            collectTransitiveDependencies(dependencies, depGraph, fragmentName);
        } // Provides the empty string for anonymous operations.
        const operationName = operation.name ? operation.name.value : ""; // The list of definition nodes to be included for this operation, sorted
        // to retain the same order as the original document.
        separatedDocumentASTs[operationName] = {
            kind: _kinds.Kind.DOCUMENT,
            definitions: documentAST.definitions.filter((node)=>node === operation || node.kind === _kinds.Kind.FRAGMENT_DEFINITION && dependencies.has(node.name.value))
        };
    }
    return separatedDocumentASTs;
}
// From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.
function collectTransitiveDependencies(collected, depGraph, fromName) {
    if (!collected.has(fromName)) {
        collected.add(fromName);
        const immediateDeps = depGraph[fromName];
        if (immediateDeps !== undefined) {
            for (const toName of immediateDeps){
                collectTransitiveDependencies(collected, depGraph, toName);
            }
        }
    }
}
function collectDependencies(selectionSet) {
    const dependencies = [];
    (0, _visitor.visit)(selectionSet, {
        FragmentSpread (node) {
            dependencies.push(node.name.value);
        }
    });
    return dependencies;
}


/***/ }),

/***/ 1597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.sortValueNode = sortValueNode;
var _naturalCompare = __webpack_require__(9170);
var _kinds = __webpack_require__(4278);
/**
 * Sort ValueNode.
 *
 * This function returns a sorted copy of the given ValueNode.
 *
 * @internal
 */ function sortValueNode(valueNode) {
    switch(valueNode.kind){
        case _kinds.Kind.OBJECT:
            return {
                ...valueNode,
                fields: sortFields(valueNode.fields)
            };
        case _kinds.Kind.LIST:
            return {
                ...valueNode,
                values: valueNode.values.map(sortValueNode)
            };
        case _kinds.Kind.INT:
        case _kinds.Kind.FLOAT:
        case _kinds.Kind.STRING:
        case _kinds.Kind.BOOLEAN:
        case _kinds.Kind.NULL:
        case _kinds.Kind.ENUM:
        case _kinds.Kind.VARIABLE:
            return valueNode;
    }
}
function sortFields(fields) {
    return fields.map((fieldNode)=>({
            ...fieldNode,
            value: sortValueNode(fieldNode.value)
        })).sort((fieldA, fieldB)=>(0, _naturalCompare.naturalCompare)(fieldA.name.value, fieldB.name.value));
}


/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.stripIgnoredCharacters = stripIgnoredCharacters;
var _blockString = __webpack_require__(7168);
var _lexer = __webpack_require__(9651);
var _source = __webpack_require__(9262);
var _tokenKind = __webpack_require__(8515);
/**
 * Strips characters that are not significant to the validity or execution
 * of a GraphQL document:
 *   - UnicodeBOM
 *   - WhiteSpace
 *   - LineTerminator
 *   - Comment
 *   - Comma
 *   - BlockString indentation
 *
 * Note: It is required to have a delimiter character between neighboring
 * non-punctuator tokens and this function always uses single space as delimiter.
 *
 * It is guaranteed that both input and output documents if parsed would result
 * in the exact same AST except for nodes location.
 *
 * Warning: It is guaranteed that this function will always produce stable results.
 * However, it's not guaranteed that it will stay the same between different
 * releases due to bugfixes or changes in the GraphQL specification.
 *
 * Query example:
 *
 * ```graphql
 * query SomeQuery($foo: String!, $bar: String) {
 *   someField(foo: $foo, bar: $bar) {
 *     a
 *     b {
 *       c
 *       d
 *     }
 *   }
 * }
 * ```
 *
 * Becomes:
 *
 * ```graphql
 * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
 * ```
 *
 * SDL example:
 *
 * ```graphql
 * """
 * Type description
 * """
 * type Foo {
 *   """
 *   Field description
 *   """
 *   bar: String
 * }
 * ```
 *
 * Becomes:
 *
 * ```graphql
 * """Type description""" type Foo{"""Field description""" bar:String}
 * ```
 */ function stripIgnoredCharacters(source) {
    const sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
    const body = sourceObj.body;
    const lexer = new _lexer.Lexer(sourceObj);
    let strippedBody = "";
    let wasLastAddedTokenNonPunctuator = false;
    while(lexer.advance().kind !== _tokenKind.TokenKind.EOF){
        const currentToken = lexer.token;
        const tokenKind = currentToken.kind;
        /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */ const isNonPunctuator = !(0, _lexer.isPunctuatorTokenKind)(currentToken.kind);
        if (wasLastAddedTokenNonPunctuator) {
            if (isNonPunctuator || currentToken.kind === _tokenKind.TokenKind.SPREAD) {
                strippedBody += " ";
            }
        }
        const tokenBody = body.slice(currentToken.start, currentToken.end);
        if (tokenKind === _tokenKind.TokenKind.BLOCK_STRING) {
            strippedBody += (0, _blockString.printBlockString)(currentToken.value, {
                minimize: true
            });
        } else {
            strippedBody += tokenBody;
        }
        wasLastAddedTokenNonPunctuator = isNonPunctuator;
    }
    return strippedBody;
}


/***/ }),

/***/ 3321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.doTypesOverlap = doTypesOverlap;
exports.isEqualType = isEqualType;
exports.isTypeSubTypeOf = isTypeSubTypeOf;
var _definition = __webpack_require__(2838);
/**
 * Provided two types, return true if the types are equal (invariant).
 */ function isEqualType(typeA, typeB) {
    // Equivalent types are equal.
    if (typeA === typeB) {
        return true;
    } // If either type is non-null, the other must also be non-null.
    if ((0, _definition.isNonNullType)(typeA) && (0, _definition.isNonNullType)(typeB)) {
        return isEqualType(typeA.ofType, typeB.ofType);
    } // If either type is a list, the other must also be a list.
    if ((0, _definition.isListType)(typeA) && (0, _definition.isListType)(typeB)) {
        return isEqualType(typeA.ofType, typeB.ofType);
    } // Otherwise the types are not equal.
    return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */ function isTypeSubTypeOf(schema, maybeSubType, superType) {
    // Equivalent type is a valid subtype
    if (maybeSubType === superType) {
        return true;
    } // If superType is non-null, maybeSubType must also be non-null.
    if ((0, _definition.isNonNullType)(superType)) {
        if ((0, _definition.isNonNullType)(maybeSubType)) {
            return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
        }
        return false;
    }
    if ((0, _definition.isNonNullType)(maybeSubType)) {
        // If superType is nullable, maybeSubType may be non-null or nullable.
        return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
    } // If superType type is a list, maybeSubType type must also be a list.
    if ((0, _definition.isListType)(superType)) {
        if ((0, _definition.isListType)(maybeSubType)) {
            return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
        }
        return false;
    }
    if ((0, _definition.isListType)(maybeSubType)) {
        // If superType is not a list, maybeSubType must also be not a list.
        return false;
    } // If superType type is an abstract type, check if it is super type of maybeSubType.
    // Otherwise, the child type is not a valid subtype of the parent type.
    return (0, _definition.isAbstractType)(superType) && ((0, _definition.isInterfaceType)(maybeSubType) || (0, _definition.isObjectType)(maybeSubType)) && schema.isSubType(superType, maybeSubType);
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */ function doTypesOverlap(schema, typeA, typeB) {
    // Equivalent types overlap
    if (typeA === typeB) {
        return true;
    }
    if ((0, _definition.isAbstractType)(typeA)) {
        if ((0, _definition.isAbstractType)(typeB)) {
            // If both types are abstract, then determine if there is any intersection
            // between possible concrete types of each.
            return schema.getPossibleTypes(typeA).some((type)=>schema.isSubType(typeB, type));
        } // Determine if the latter type is a possible concrete type of the former.
        return schema.isSubType(typeA, typeB);
    }
    if ((0, _definition.isAbstractType)(typeB)) {
        // Determine if the former type is a possible concrete type of the latter.
        return schema.isSubType(typeB, typeA);
    } // Otherwise the types do not overlap.
    return false;
}


/***/ }),

/***/ 871:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.typeFromAST = typeFromAST;
var _kinds = __webpack_require__(4278);
var _definition = __webpack_require__(2838);
function typeFromAST(schema, typeNode) {
    switch(typeNode.kind){
        case _kinds.Kind.LIST_TYPE:
            {
                const innerType = typeFromAST(schema, typeNode.type);
                return innerType && new _definition.GraphQLList(innerType);
            }
        case _kinds.Kind.NON_NULL_TYPE:
            {
                const innerType = typeFromAST(schema, typeNode.type);
                return innerType && new _definition.GraphQLNonNull(innerType);
            }
        case _kinds.Kind.NAMED_TYPE:
            return schema.getType(typeNode.name.value);
    }
}


/***/ }),

/***/ 9308:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.valueFromAST = valueFromAST;
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _keyMap = __webpack_require__(1180);
var _kinds = __webpack_require__(4278);
var _definition = __webpack_require__(2838);
/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Unknown       |
 * | NullValue            | null          |
 *
 */ function valueFromAST(valueNode, type, variables) {
    if (!valueNode) {
        // When there is no node, then there is also no value.
        // Importantly, this is different from returning the value null.
        return;
    }
    if (valueNode.kind === _kinds.Kind.VARIABLE) {
        const variableName = valueNode.name.value;
        if (variables == null || variables[variableName] === undefined) {
            // No valid return value.
            return;
        }
        const variableValue = variables[variableName];
        if (variableValue === null && (0, _definition.isNonNullType)(type)) {
            return; // Invalid: intentionally return no value.
        } // Note: This does no further checking that this variable is correct.
        // This assumes that this query has been validated and the variable
        // usage here is of the correct type.
        return variableValue;
    }
    if ((0, _definition.isNonNullType)(type)) {
        if (valueNode.kind === _kinds.Kind.NULL) {
            return; // Invalid: intentionally return no value.
        }
        return valueFromAST(valueNode, type.ofType, variables);
    }
    if (valueNode.kind === _kinds.Kind.NULL) {
        // This is explicitly returning the value null.
        return null;
    }
    if ((0, _definition.isListType)(type)) {
        const itemType = type.ofType;
        if (valueNode.kind === _kinds.Kind.LIST) {
            const coercedValues = [];
            for (const itemNode of valueNode.values){
                if (isMissingVariable(itemNode, variables)) {
                    // If an array contains a missing variable, it is either coerced to
                    // null or if the item type is non-null, it considered invalid.
                    if ((0, _definition.isNonNullType)(itemType)) {
                        return; // Invalid: intentionally return no value.
                    }
                    coercedValues.push(null);
                } else {
                    const itemValue = valueFromAST(itemNode, itemType, variables);
                    if (itemValue === undefined) {
                        return; // Invalid: intentionally return no value.
                    }
                    coercedValues.push(itemValue);
                }
            }
            return coercedValues;
        }
        const coercedValue = valueFromAST(valueNode, itemType, variables);
        if (coercedValue === undefined) {
            return; // Invalid: intentionally return no value.
        }
        return [
            coercedValue
        ];
    }
    if ((0, _definition.isInputObjectType)(type)) {
        if (valueNode.kind !== _kinds.Kind.OBJECT) {
            return; // Invalid: intentionally return no value.
        }
        const coercedObj = Object.create(null);
        const fieldNodes = (0, _keyMap.keyMap)(valueNode.fields, (field)=>field.name.value);
        for (const field of Object.values(type.getFields())){
            const fieldNode = fieldNodes[field.name];
            if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
                if (field.defaultValue !== undefined) {
                    coercedObj[field.name] = field.defaultValue;
                } else if ((0, _definition.isNonNullType)(field.type)) {
                    return; // Invalid: intentionally return no value.
                }
                continue;
            }
            const fieldValue = valueFromAST(fieldNode.value, field.type, variables);
            if (fieldValue === undefined) {
                return; // Invalid: intentionally return no value.
            }
            coercedObj[field.name] = fieldValue;
        }
        if (type.isOneOf) {
            const keys = Object.keys(coercedObj);
            if (keys.length !== 1) {
                return; // Invalid: not exactly one key, intentionally return no value.
            }
            if (coercedObj[keys[0]] === null) {
                return; // Invalid: value not non-null, intentionally return no value.
            }
        }
        return coercedObj;
    }
    if ((0, _definition.isLeafType)(type)) {
        // Scalars and Enums fulfill parsing a literal value via parseLiteral().
        // Invalid values represent a failure to parse correctly, in which case
        // no value is returned.
        let result;
        try {
            result = type.parseLiteral(valueNode, variables);
        } catch (_error) {
            return; // Invalid: intentionally return no value.
        }
        if (result === undefined) {
            return; // Invalid: intentionally return no value.
        }
        return result;
    }
    /* c8 ignore next 3 */ // Not reachable, all possible input types have been considered.
     false || (0, _invariant.invariant)(false, "Unexpected input type: " + (0, _inspect.inspect)(type));
} // Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.
function isMissingVariable(valueNode, variables) {
    return valueNode.kind === _kinds.Kind.VARIABLE && (variables == null || variables[valueNode.name.value] === undefined);
}


/***/ }),

/***/ 964:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.valueFromASTUntyped = valueFromASTUntyped;
var _keyValMap = __webpack_require__(6179);
var _kinds = __webpack_require__(4278);
/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */ function valueFromASTUntyped(valueNode, variables) {
    switch(valueNode.kind){
        case _kinds.Kind.NULL:
            return null;
        case _kinds.Kind.INT:
            return parseInt(valueNode.value, 10);
        case _kinds.Kind.FLOAT:
            return parseFloat(valueNode.value);
        case _kinds.Kind.STRING:
        case _kinds.Kind.ENUM:
        case _kinds.Kind.BOOLEAN:
            return valueNode.value;
        case _kinds.Kind.LIST:
            return valueNode.values.map((node)=>valueFromASTUntyped(node, variables));
        case _kinds.Kind.OBJECT:
            return (0, _keyValMap.keyValMap)(valueNode.fields, (field)=>field.name.value, (field)=>valueFromASTUntyped(field.value, variables));
        case _kinds.Kind.VARIABLE:
            return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
    }
}


/***/ }),

/***/ 4904:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ValidationContext = exports.SDLValidationContext = exports.ASTValidationContext = void 0;
var _kinds = __webpack_require__(4278);
var _visitor = __webpack_require__(4041);
var _TypeInfo = __webpack_require__(8674);
/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */ class ASTValidationContext {
    constructor(ast, onError){
        this._ast = ast;
        this._fragments = undefined;
        this._fragmentSpreads = new Map();
        this._recursivelyReferencedFragments = new Map();
        this._onError = onError;
    }
    get [Symbol.toStringTag]() {
        return "ASTValidationContext";
    }
    reportError(error) {
        this._onError(error);
    }
    getDocument() {
        return this._ast;
    }
    getFragment(name) {
        let fragments;
        if (this._fragments) {
            fragments = this._fragments;
        } else {
            fragments = Object.create(null);
            for (const defNode of this.getDocument().definitions){
                if (defNode.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
                    fragments[defNode.name.value] = defNode;
                }
            }
            this._fragments = fragments;
        }
        return fragments[name];
    }
    getFragmentSpreads(node) {
        let spreads = this._fragmentSpreads.get(node);
        if (!spreads) {
            spreads = [];
            const setsToVisit = [
                node
            ];
            let set;
            while(set = setsToVisit.pop()){
                for (const selection of set.selections){
                    if (selection.kind === _kinds.Kind.FRAGMENT_SPREAD) {
                        spreads.push(selection);
                    } else if (selection.selectionSet) {
                        setsToVisit.push(selection.selectionSet);
                    }
                }
            }
            this._fragmentSpreads.set(node, spreads);
        }
        return spreads;
    }
    getRecursivelyReferencedFragments(operation) {
        let fragments = this._recursivelyReferencedFragments.get(operation);
        if (!fragments) {
            fragments = [];
            const collectedNames = Object.create(null);
            const nodesToVisit = [
                operation.selectionSet
            ];
            let node;
            while(node = nodesToVisit.pop()){
                for (const spread of this.getFragmentSpreads(node)){
                    const fragName = spread.name.value;
                    if (collectedNames[fragName] !== true) {
                        collectedNames[fragName] = true;
                        const fragment = this.getFragment(fragName);
                        if (fragment) {
                            fragments.push(fragment);
                            nodesToVisit.push(fragment.selectionSet);
                        }
                    }
                }
            }
            this._recursivelyReferencedFragments.set(operation, fragments);
        }
        return fragments;
    }
}
exports.ASTValidationContext = ASTValidationContext;
class SDLValidationContext extends ASTValidationContext {
    constructor(ast, schema, onError){
        super(ast, onError);
        this._schema = schema;
    }
    get [Symbol.toStringTag]() {
        return "SDLValidationContext";
    }
    getSchema() {
        return this._schema;
    }
}
exports.SDLValidationContext = SDLValidationContext;
class ValidationContext extends ASTValidationContext {
    constructor(schema, ast, typeInfo, onError){
        super(ast, onError);
        this._schema = schema;
        this._typeInfo = typeInfo;
        this._variableUsages = new Map();
        this._recursiveVariableUsages = new Map();
    }
    get [Symbol.toStringTag]() {
        return "ValidationContext";
    }
    getSchema() {
        return this._schema;
    }
    getVariableUsages(node) {
        let usages = this._variableUsages.get(node);
        if (!usages) {
            const newUsages = [];
            const typeInfo = new _TypeInfo.TypeInfo(this._schema);
            (0, _visitor.visit)(node, (0, _TypeInfo.visitWithTypeInfo)(typeInfo, {
                VariableDefinition: ()=>false,
                Variable (variable) {
                    newUsages.push({
                        node: variable,
                        type: typeInfo.getInputType(),
                        defaultValue: typeInfo.getDefaultValue(),
                        parentType: typeInfo.getParentInputType()
                    });
                }
            }));
            usages = newUsages;
            this._variableUsages.set(node, usages);
        }
        return usages;
    }
    getRecursiveVariableUsages(operation) {
        let usages = this._recursiveVariableUsages.get(operation);
        if (!usages) {
            usages = this.getVariableUsages(operation);
            for (const frag of this.getRecursivelyReferencedFragments(operation)){
                usages = usages.concat(this.getVariableUsages(frag));
            }
            this._recursiveVariableUsages.set(operation, usages);
        }
        return usages;
    }
    getType() {
        return this._typeInfo.getType();
    }
    getParentType() {
        return this._typeInfo.getParentType();
    }
    getInputType() {
        return this._typeInfo.getInputType();
    }
    getParentInputType() {
        return this._typeInfo.getParentInputType();
    }
    getFieldDef() {
        return this._typeInfo.getFieldDef();
    }
    getDirective() {
        return this._typeInfo.getDirective();
    }
    getArgument() {
        return this._typeInfo.getArgument();
    }
    getEnumValue() {
        return this._typeInfo.getEnumValue();
    }
}
exports.ValidationContext = ValidationContext;


/***/ }),

/***/ 6653:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ExecutableDefinitionsRule", ({
    enumerable: true,
    get: function() {
        return _ExecutableDefinitionsRule.ExecutableDefinitionsRule;
    }
}));
Object.defineProperty(exports, "FieldsOnCorrectTypeRule", ({
    enumerable: true,
    get: function() {
        return _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule;
    }
}));
Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", ({
    enumerable: true,
    get: function() {
        return _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule;
    }
}));
Object.defineProperty(exports, "KnownArgumentNamesRule", ({
    enumerable: true,
    get: function() {
        return _KnownArgumentNamesRule.KnownArgumentNamesRule;
    }
}));
Object.defineProperty(exports, "KnownDirectivesRule", ({
    enumerable: true,
    get: function() {
        return _KnownDirectivesRule.KnownDirectivesRule;
    }
}));
Object.defineProperty(exports, "KnownFragmentNamesRule", ({
    enumerable: true,
    get: function() {
        return _KnownFragmentNamesRule.KnownFragmentNamesRule;
    }
}));
Object.defineProperty(exports, "KnownTypeNamesRule", ({
    enumerable: true,
    get: function() {
        return _KnownTypeNamesRule.KnownTypeNamesRule;
    }
}));
Object.defineProperty(exports, "LoneAnonymousOperationRule", ({
    enumerable: true,
    get: function() {
        return _LoneAnonymousOperationRule.LoneAnonymousOperationRule;
    }
}));
Object.defineProperty(exports, "LoneSchemaDefinitionRule", ({
    enumerable: true,
    get: function() {
        return _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule;
    }
}));
Object.defineProperty(exports, "MaxIntrospectionDepthRule", ({
    enumerable: true,
    get: function() {
        return _MaxIntrospectionDepthRule.MaxIntrospectionDepthRule;
    }
}));
Object.defineProperty(exports, "NoDeprecatedCustomRule", ({
    enumerable: true,
    get: function() {
        return _NoDeprecatedCustomRule.NoDeprecatedCustomRule;
    }
}));
Object.defineProperty(exports, "NoFragmentCyclesRule", ({
    enumerable: true,
    get: function() {
        return _NoFragmentCyclesRule.NoFragmentCyclesRule;
    }
}));
Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", ({
    enumerable: true,
    get: function() {
        return _NoSchemaIntrospectionCustomRule.NoSchemaIntrospectionCustomRule;
    }
}));
Object.defineProperty(exports, "NoUndefinedVariablesRule", ({
    enumerable: true,
    get: function() {
        return _NoUndefinedVariablesRule.NoUndefinedVariablesRule;
    }
}));
Object.defineProperty(exports, "NoUnusedFragmentsRule", ({
    enumerable: true,
    get: function() {
        return _NoUnusedFragmentsRule.NoUnusedFragmentsRule;
    }
}));
Object.defineProperty(exports, "NoUnusedVariablesRule", ({
    enumerable: true,
    get: function() {
        return _NoUnusedVariablesRule.NoUnusedVariablesRule;
    }
}));
Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", ({
    enumerable: true,
    get: function() {
        return _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule;
    }
}));
Object.defineProperty(exports, "PossibleFragmentSpreadsRule", ({
    enumerable: true,
    get: function() {
        return _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule;
    }
}));
Object.defineProperty(exports, "PossibleTypeExtensionsRule", ({
    enumerable: true,
    get: function() {
        return _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule;
    }
}));
Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", ({
    enumerable: true,
    get: function() {
        return _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule;
    }
}));
Object.defineProperty(exports, "ScalarLeafsRule", ({
    enumerable: true,
    get: function() {
        return _ScalarLeafsRule.ScalarLeafsRule;
    }
}));
Object.defineProperty(exports, "SingleFieldSubscriptionsRule", ({
    enumerable: true,
    get: function() {
        return _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule;
    }
}));
Object.defineProperty(exports, "UniqueArgumentDefinitionNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueArgumentNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueArgumentNamesRule.UniqueArgumentNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueDirectiveNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", ({
    enumerable: true,
    get: function() {
        return _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule;
    }
}));
Object.defineProperty(exports, "UniqueEnumValueNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueFragmentNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueFragmentNamesRule.UniqueFragmentNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueInputFieldNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueOperationNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueOperationNamesRule.UniqueOperationNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueOperationTypesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueOperationTypesRule.UniqueOperationTypesRule;
    }
}));
Object.defineProperty(exports, "UniqueTypeNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueTypeNamesRule.UniqueTypeNamesRule;
    }
}));
Object.defineProperty(exports, "UniqueVariableNamesRule", ({
    enumerable: true,
    get: function() {
        return _UniqueVariableNamesRule.UniqueVariableNamesRule;
    }
}));
Object.defineProperty(exports, "ValidationContext", ({
    enumerable: true,
    get: function() {
        return _ValidationContext.ValidationContext;
    }
}));
Object.defineProperty(exports, "ValuesOfCorrectTypeRule", ({
    enumerable: true,
    get: function() {
        return _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule;
    }
}));
Object.defineProperty(exports, "VariablesAreInputTypesRule", ({
    enumerable: true,
    get: function() {
        return _VariablesAreInputTypesRule.VariablesAreInputTypesRule;
    }
}));
Object.defineProperty(exports, "VariablesInAllowedPositionRule", ({
    enumerable: true,
    get: function() {
        return _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule;
    }
}));
Object.defineProperty(exports, "recommendedRules", ({
    enumerable: true,
    get: function() {
        return _specifiedRules.recommendedRules;
    }
}));
Object.defineProperty(exports, "specifiedRules", ({
    enumerable: true,
    get: function() {
        return _specifiedRules.specifiedRules;
    }
}));
Object.defineProperty(exports, "validate", ({
    enumerable: true,
    get: function() {
        return _validate.validate;
    }
}));
var _validate = __webpack_require__(7887);
var _ValidationContext = __webpack_require__(4904);
var _specifiedRules = __webpack_require__(5725);
var _ExecutableDefinitionsRule = __webpack_require__(2818);
var _FieldsOnCorrectTypeRule = __webpack_require__(9111);
var _FragmentsOnCompositeTypesRule = __webpack_require__(9989);
var _KnownArgumentNamesRule = __webpack_require__(5057);
var _KnownDirectivesRule = __webpack_require__(6907);
var _KnownFragmentNamesRule = __webpack_require__(2307);
var _KnownTypeNamesRule = __webpack_require__(6387);
var _LoneAnonymousOperationRule = __webpack_require__(5659);
var _NoFragmentCyclesRule = __webpack_require__(2075);
var _NoUndefinedVariablesRule = __webpack_require__(6411);
var _NoUnusedFragmentsRule = __webpack_require__(9791);
var _NoUnusedVariablesRule = __webpack_require__(8571);
var _OverlappingFieldsCanBeMergedRule = __webpack_require__(4657);
var _PossibleFragmentSpreadsRule = __webpack_require__(6283);
var _ProvidedRequiredArgumentsRule = __webpack_require__(933);
var _ScalarLeafsRule = __webpack_require__(7781);
var _SingleFieldSubscriptionsRule = __webpack_require__(4068);
var _UniqueArgumentNamesRule = __webpack_require__(882);
var _UniqueDirectivesPerLocationRule = __webpack_require__(5588);
var _UniqueFragmentNamesRule = __webpack_require__(2278);
var _UniqueInputFieldNamesRule = __webpack_require__(2902);
var _UniqueOperationNamesRule = __webpack_require__(2767);
var _UniqueVariableNamesRule = __webpack_require__(1733);
var _ValuesOfCorrectTypeRule = __webpack_require__(6);
var _VariablesAreInputTypesRule = __webpack_require__(1404);
var _VariablesInAllowedPositionRule = __webpack_require__(7610);
var _MaxIntrospectionDepthRule = __webpack_require__(4025);
var _LoneSchemaDefinitionRule = __webpack_require__(2472);
var _UniqueOperationTypesRule = __webpack_require__(1159);
var _UniqueTypeNamesRule = __webpack_require__(9426);
var _UniqueEnumValueNamesRule = __webpack_require__(7703);
var _UniqueFieldDefinitionNamesRule = __webpack_require__(451);
var _UniqueArgumentDefinitionNamesRule = __webpack_require__(9969);
var _UniqueDirectiveNamesRule = __webpack_require__(8544);
var _PossibleTypeExtensionsRule = __webpack_require__(2891);
var _NoDeprecatedCustomRule = __webpack_require__(7324);
var _NoSchemaIntrospectionCustomRule = __webpack_require__(7099);


/***/ }),

/***/ 2818:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ExecutableDefinitionsRule = ExecutableDefinitionsRule;
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _predicates = __webpack_require__(2338);
/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 *
 * See https://spec.graphql.org/draft/#sec-Executable-Definitions
 */ function ExecutableDefinitionsRule(context) {
    return {
        Document (node) {
            for (const definition of node.definitions){
                if (!(0, _predicates.isExecutableDefinitionNode)(definition)) {
                    const defName = definition.kind === _kinds.Kind.SCHEMA_DEFINITION || definition.kind === _kinds.Kind.SCHEMA_EXTENSION ? "schema" : '"' + definition.name.value + '"';
                    context.reportError(new _GraphQLError.GraphQLError(`The ${defName} definition is not executable.`, {
                        nodes: definition
                    }));
                }
            }
            return false;
        }
    };
}


/***/ }),

/***/ 9111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FieldsOnCorrectTypeRule = FieldsOnCorrectTypeRule;
var _didYouMean = __webpack_require__(3278);
var _naturalCompare = __webpack_require__(9170);
var _suggestionList = __webpack_require__(7135);
var _GraphQLError = __webpack_require__(6042);
var _definition = __webpack_require__(2838);
/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 *
 * See https://spec.graphql.org/draft/#sec-Field-Selections
 */ function FieldsOnCorrectTypeRule(context) {
    return {
        Field (node) {
            const type = context.getParentType();
            if (type) {
                const fieldDef = context.getFieldDef();
                if (!fieldDef) {
                    // This field doesn't exist, lets look for suggestions.
                    const schema = context.getSchema();
                    const fieldName = node.name.value; // First determine if there are any suggested types to condition on.
                    let suggestion = (0, _didYouMean.didYouMean)("to use an inline fragment on", getSuggestedTypeNames(schema, type, fieldName)); // If there are no suggested types, then perhaps this was a typo?
                    if (suggestion === "") {
                        suggestion = (0, _didYouMean.didYouMean)(getSuggestedFieldNames(type, fieldName));
                    } // Report an error, including helpful suggestions.
                    context.reportError(new _GraphQLError.GraphQLError(`Cannot query field "${fieldName}" on type "${type.name}".` + suggestion, {
                        nodes: node
                    }));
                }
            }
        }
    };
}
/**
 * Go through all of the implementations of type, as well as the interfaces that
 * they implement. If any of those types include the provided field, suggest them,
 * sorted by how often the type is referenced.
 */ function getSuggestedTypeNames(schema, type, fieldName) {
    if (!(0, _definition.isAbstractType)(type)) {
        // Must be an Object type, which does not have possible fields.
        return [];
    }
    const suggestedTypes = new Set();
    const usageCount = Object.create(null);
    for (const possibleType of schema.getPossibleTypes(type)){
        if (!possibleType.getFields()[fieldName]) {
            continue;
        } // This object type defines this field.
        suggestedTypes.add(possibleType);
        usageCount[possibleType.name] = 1;
        for (const possibleInterface of possibleType.getInterfaces()){
            var _usageCount$possibleI;
            if (!possibleInterface.getFields()[fieldName]) {
                continue;
            } // This interface type defines this field.
            suggestedTypes.add(possibleInterface);
            usageCount[possibleInterface.name] = ((_usageCount$possibleI = usageCount[possibleInterface.name]) !== null && _usageCount$possibleI !== void 0 ? _usageCount$possibleI : 0) + 1;
        }
    }
    return [
        ...suggestedTypes
    ].sort((typeA, typeB)=>{
        // Suggest both interface and object types based on how common they are.
        const usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];
        if (usageCountDiff !== 0) {
            return usageCountDiff;
        } // Suggest super types first followed by subtypes
        if ((0, _definition.isInterfaceType)(typeA) && schema.isSubType(typeA, typeB)) {
            return -1;
        }
        if ((0, _definition.isInterfaceType)(typeB) && schema.isSubType(typeB, typeA)) {
            return 1;
        }
        return (0, _naturalCompare.naturalCompare)(typeA.name, typeB.name);
    }).map((x)=>x.name);
}
/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */ function getSuggestedFieldNames(type, fieldName) {
    if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
        const possibleFieldNames = Object.keys(type.getFields());
        return (0, _suggestionList.suggestionList)(fieldName, possibleFieldNames);
    } // Otherwise, must be a Union type, which does not define fields.
    return [];
}


/***/ }),

/***/ 9989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule;
var _GraphQLError = __webpack_require__(6042);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
var _typeFromAST = __webpack_require__(871);
/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 *
 * See https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types
 */ function FragmentsOnCompositeTypesRule(context) {
    return {
        InlineFragment (node) {
            const typeCondition = node.typeCondition;
            if (typeCondition) {
                const type = (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition);
                if (type && !(0, _definition.isCompositeType)(type)) {
                    const typeStr = (0, _printer.print)(typeCondition);
                    context.reportError(new _GraphQLError.GraphQLError(`Fragment cannot condition on non composite type "${typeStr}".`, {
                        nodes: typeCondition
                    }));
                }
            }
        },
        FragmentDefinition (node) {
            const type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.typeCondition);
            if (type && !(0, _definition.isCompositeType)(type)) {
                const typeStr = (0, _printer.print)(node.typeCondition);
                context.reportError(new _GraphQLError.GraphQLError(`Fragment "${node.name.value}" cannot condition on non composite type "${typeStr}".`, {
                    nodes: node.typeCondition
                }));
            }
        }
    };
}


/***/ }),

/***/ 5057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.KnownArgumentNamesOnDirectivesRule = KnownArgumentNamesOnDirectivesRule;
exports.KnownArgumentNamesRule = KnownArgumentNamesRule;
var _didYouMean = __webpack_require__(3278);
var _suggestionList = __webpack_require__(7135);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _directives = __webpack_require__(2194);
/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 *
 * See https://spec.graphql.org/draft/#sec-Argument-Names
 * See https://spec.graphql.org/draft/#sec-Directives-Are-In-Valid-Locations
 */ function KnownArgumentNamesRule(context) {
    return {
        // eslint-disable-next-line new-cap
        ...KnownArgumentNamesOnDirectivesRule(context),
        Argument (argNode) {
            const argDef = context.getArgument();
            const fieldDef = context.getFieldDef();
            const parentType = context.getParentType();
            if (!argDef && fieldDef && parentType) {
                const argName = argNode.name.value;
                const knownArgsNames = fieldDef.args.map((arg)=>arg.name);
                const suggestions = (0, _suggestionList.suggestionList)(argName, knownArgsNames);
                context.reportError(new _GraphQLError.GraphQLError(`Unknown argument "${argName}" on field "${parentType.name}.${fieldDef.name}".` + (0, _didYouMean.didYouMean)(suggestions), {
                    nodes: argNode
                }));
            }
        }
    };
}
/**
 * @internal
 */ function KnownArgumentNamesOnDirectivesRule(context) {
    const directiveArgs = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
    for (const directive of definedDirectives){
        directiveArgs[directive.name] = directive.args.map((arg)=>arg.name);
    }
    const astDefinitions = context.getDocument().definitions;
    for (const def of astDefinitions){
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            var _def$arguments;
            // FIXME: https://github.com/graphql/graphql-js/issues/2203
            /* c8 ignore next */ const argsNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
            directiveArgs[def.name.value] = argsNodes.map((arg)=>arg.name.value);
        }
    }
    return {
        Directive (directiveNode) {
            const directiveName = directiveNode.name.value;
            const knownArgs = directiveArgs[directiveName];
            if (directiveNode.arguments && knownArgs) {
                for (const argNode of directiveNode.arguments){
                    const argName = argNode.name.value;
                    if (!knownArgs.includes(argName)) {
                        const suggestions = (0, _suggestionList.suggestionList)(argName, knownArgs);
                        context.reportError(new _GraphQLError.GraphQLError(`Unknown argument "${argName}" on directive "@${directiveName}".` + (0, _didYouMean.didYouMean)(suggestions), {
                            nodes: argNode
                        }));
                    }
                }
            }
            return false;
        }
    };
}


/***/ }),

/***/ 6907:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.KnownDirectivesRule = KnownDirectivesRule;
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _GraphQLError = __webpack_require__(6042);
var _ast = __webpack_require__(1874);
var _directiveLocation = __webpack_require__(5650);
var _kinds = __webpack_require__(4278);
var _directives = __webpack_require__(2194);
/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 *
 * See https://spec.graphql.org/draft/#sec-Directives-Are-Defined
 */ function KnownDirectivesRule(context) {
    const locationsMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
    for (const directive of definedDirectives){
        locationsMap[directive.name] = directive.locations;
    }
    const astDefinitions = context.getDocument().definitions;
    for (const def of astDefinitions){
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            locationsMap[def.name.value] = def.locations.map((name)=>name.value);
        }
    }
    return {
        Directive (node, _key, _parent, _path, ancestors) {
            const name = node.name.value;
            const locations = locationsMap[name];
            if (!locations) {
                context.reportError(new _GraphQLError.GraphQLError(`Unknown directive "@${name}".`, {
                    nodes: node
                }));
                return;
            }
            const candidateLocation = getDirectiveLocationForASTPath(ancestors);
            if (candidateLocation && !locations.includes(candidateLocation)) {
                context.reportError(new _GraphQLError.GraphQLError(`Directive "@${name}" may not be used on ${candidateLocation}.`, {
                    nodes: node
                }));
            }
        }
    };
}
function getDirectiveLocationForASTPath(ancestors) {
    const appliedTo = ancestors[ancestors.length - 1];
    "kind" in appliedTo || (0, _invariant.invariant)(false);
    switch(appliedTo.kind){
        case _kinds.Kind.OPERATION_DEFINITION:
            return getDirectiveLocationForOperation(appliedTo.operation);
        case _kinds.Kind.FIELD:
            return _directiveLocation.DirectiveLocation.FIELD;
        case _kinds.Kind.FRAGMENT_SPREAD:
            return _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;
        case _kinds.Kind.INLINE_FRAGMENT:
            return _directiveLocation.DirectiveLocation.INLINE_FRAGMENT;
        case _kinds.Kind.FRAGMENT_DEFINITION:
            return _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;
        case _kinds.Kind.VARIABLE_DEFINITION:
            return _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION;
        case _kinds.Kind.SCHEMA_DEFINITION:
        case _kinds.Kind.SCHEMA_EXTENSION:
            return _directiveLocation.DirectiveLocation.SCHEMA;
        case _kinds.Kind.SCALAR_TYPE_DEFINITION:
        case _kinds.Kind.SCALAR_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.SCALAR;
        case _kinds.Kind.OBJECT_TYPE_DEFINITION:
        case _kinds.Kind.OBJECT_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.OBJECT;
        case _kinds.Kind.FIELD_DEFINITION:
            return _directiveLocation.DirectiveLocation.FIELD_DEFINITION;
        case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
        case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.INTERFACE;
        case _kinds.Kind.UNION_TYPE_DEFINITION:
        case _kinds.Kind.UNION_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.UNION;
        case _kinds.Kind.ENUM_TYPE_DEFINITION:
        case _kinds.Kind.ENUM_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.ENUM;
        case _kinds.Kind.ENUM_VALUE_DEFINITION:
            return _directiveLocation.DirectiveLocation.ENUM_VALUE;
        case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.INPUT_OBJECT;
        case _kinds.Kind.INPUT_VALUE_DEFINITION:
            {
                const parentNode = ancestors[ancestors.length - 3];
                "kind" in parentNode || (0, _invariant.invariant)(false);
                return parentNode.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION ? _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION : _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
            }
        // Not reachable, all possible types have been considered.
        /* c8 ignore next */ default:
             false || (0, _invariant.invariant)(false, "Unexpected kind: " + (0, _inspect.inspect)(appliedTo.kind));
    }
}
function getDirectiveLocationForOperation(operation) {
    switch(operation){
        case _ast.OperationTypeNode.QUERY:
            return _directiveLocation.DirectiveLocation.QUERY;
        case _ast.OperationTypeNode.MUTATION:
            return _directiveLocation.DirectiveLocation.MUTATION;
        case _ast.OperationTypeNode.SUBSCRIPTION:
            return _directiveLocation.DirectiveLocation.SUBSCRIPTION;
    }
}


/***/ }),

/***/ 2307:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.KnownFragmentNamesRule = KnownFragmentNamesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-spread-target-defined
 */ function KnownFragmentNamesRule(context) {
    return {
        FragmentSpread (node) {
            const fragmentName = node.name.value;
            const fragment = context.getFragment(fragmentName);
            if (!fragment) {
                context.reportError(new _GraphQLError.GraphQLError(`Unknown fragment "${fragmentName}".`, {
                    nodes: node.name
                }));
            }
        }
    };
}


/***/ }),

/***/ 6387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.KnownTypeNamesRule = KnownTypeNamesRule;
var _didYouMean = __webpack_require__(3278);
var _suggestionList = __webpack_require__(7135);
var _GraphQLError = __webpack_require__(6042);
var _predicates = __webpack_require__(2338);
var _introspection = __webpack_require__(8840);
var _scalars = __webpack_require__(6314);
/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence
 */ function KnownTypeNamesRule(context) {
    const schema = context.getSchema();
    const existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
    const definedTypes = Object.create(null);
    for (const def of context.getDocument().definitions){
        if ((0, _predicates.isTypeDefinitionNode)(def)) {
            definedTypes[def.name.value] = true;
        }
    }
    const typeNames = [
        ...Object.keys(existingTypesMap),
        ...Object.keys(definedTypes)
    ];
    return {
        NamedType (node, _1, parent, _2, ancestors) {
            const typeName = node.name.value;
            if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
                var _ancestors$;
                const definitionNode = (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0 ? _ancestors$ : parent;
                const isSDL = definitionNode != null && isSDLNode(definitionNode);
                if (isSDL && standardTypeNames.includes(typeName)) {
                    return;
                }
                const suggestedTypes = (0, _suggestionList.suggestionList)(typeName, isSDL ? standardTypeNames.concat(typeNames) : typeNames);
                context.reportError(new _GraphQLError.GraphQLError(`Unknown type "${typeName}".` + (0, _didYouMean.didYouMean)(suggestedTypes), {
                    nodes: node
                }));
            }
        }
    };
}
const standardTypeNames = [
    ..._scalars.specifiedScalarTypes,
    ..._introspection.introspectionTypes
].map((type)=>type.name);
function isSDLNode(value) {
    return "kind" in value && ((0, _predicates.isTypeSystemDefinitionNode)(value) || (0, _predicates.isTypeSystemExtensionNode)(value));
}


/***/ }),

/***/ 5659:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.LoneAnonymousOperationRule = LoneAnonymousOperationRule;
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 *
 * See https://spec.graphql.org/draft/#sec-Lone-Anonymous-Operation
 */ function LoneAnonymousOperationRule(context) {
    let operationCount = 0;
    return {
        Document (node) {
            operationCount = node.definitions.filter((definition)=>definition.kind === _kinds.Kind.OPERATION_DEFINITION).length;
        },
        OperationDefinition (node) {
            if (!node.name && operationCount > 1) {
                context.reportError(new _GraphQLError.GraphQLError("This anonymous operation must be the only defined operation.", {
                    nodes: node
                }));
            }
        }
    };
}


/***/ }),

/***/ 2472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.LoneSchemaDefinitionRule = LoneSchemaDefinitionRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */ function LoneSchemaDefinitionRule(context) {
    var _ref, _ref2, _oldSchema$astNode;
    const oldSchema = context.getSchema();
    const alreadyDefined = (_ref = (_ref2 = (_oldSchema$astNode = oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0 ? _oldSchema$astNode : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getQueryType()) !== null && _ref2 !== void 0 ? _ref2 : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getMutationType()) !== null && _ref !== void 0 ? _ref : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getSubscriptionType();
    let schemaDefinitionsCount = 0;
    return {
        SchemaDefinition (node) {
            if (alreadyDefined) {
                context.reportError(new _GraphQLError.GraphQLError("Cannot define a new schema within a schema extension.", {
                    nodes: node
                }));
                return;
            }
            if (schemaDefinitionsCount > 0) {
                context.reportError(new _GraphQLError.GraphQLError("Must provide only one schema definition.", {
                    nodes: node
                }));
            }
            ++schemaDefinitionsCount;
        }
    };
}


/***/ }),

/***/ 4025:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MaxIntrospectionDepthRule = MaxIntrospectionDepthRule;
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
const MAX_LISTS_DEPTH = 3;
function MaxIntrospectionDepthRule(context) {
    /**
   * Counts the depth of list fields in "__Type" recursively and
   * returns `true` if the limit has been reached.
   */ function checkDepth(node, visitedFragments = Object.create(null), depth = 0) {
        if (node.kind === _kinds.Kind.FRAGMENT_SPREAD) {
            const fragmentName = node.name.value;
            if (visitedFragments[fragmentName] === true) {
                // Fragment cycles are handled by `NoFragmentCyclesRule`.
                return false;
            }
            const fragment = context.getFragment(fragmentName);
            if (!fragment) {
                // Missing fragments checks are handled by `KnownFragmentNamesRule`.
                return false;
            } // Rather than following an immutable programming pattern which has
            // significant memory and garbage collection overhead, we've opted to
            // take a mutable approach for efficiency's sake. Importantly visiting a
            // fragment twice is fine, so long as you don't do one visit inside the
            // other.
            try {
                visitedFragments[fragmentName] = true;
                return checkDepth(fragment, visitedFragments, depth);
            } finally{
                visitedFragments[fragmentName] = undefined;
            }
        }
        if (node.kind === _kinds.Kind.FIELD && // check all introspection lists
        (node.name.value === "fields" || node.name.value === "interfaces" || node.name.value === "possibleTypes" || node.name.value === "inputFields")) {
            // eslint-disable-next-line no-param-reassign
            depth++;
            if (depth >= MAX_LISTS_DEPTH) {
                return true;
            }
        } // handles fields and inline fragments
        if ("selectionSet" in node && node.selectionSet) {
            for (const child of node.selectionSet.selections){
                if (checkDepth(child, visitedFragments, depth)) {
                    return true;
                }
            }
        }
        return false;
    }
    return {
        Field (node) {
            if (node.name.value === "__schema" || node.name.value === "__type") {
                if (checkDepth(node)) {
                    context.reportError(new _GraphQLError.GraphQLError("Maximum introspection depth exceeded", {
                        nodes: [
                            node
                        ]
                    }));
                    return false;
                }
            }
        }
    };
}


/***/ }),

/***/ 2075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NoFragmentCyclesRule = NoFragmentCyclesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * No fragment cycles
 *
 * The graph of fragment spreads must not form any cycles including spreading itself.
 * Otherwise an operation could infinitely spread or infinitely execute on cycles in the underlying data.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-spreads-must-not-form-cycles
 */ function NoFragmentCyclesRule(context) {
    // Tracks already visited fragments to maintain O(N) and to ensure that cycles
    // are not redundantly reported.
    const visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors
    const spreadPath = []; // Position in the spread path
    const spreadPathIndexByName = Object.create(null);
    return {
        OperationDefinition: ()=>false,
        FragmentDefinition (node) {
            detectCycleRecursive(node);
            return false;
        }
    }; // This does a straight-forward DFS to find cycles.
    // It does not terminate when a cycle was found but continues to explore
    // the graph to find all possible cycles.
    function detectCycleRecursive(fragment) {
        if (visitedFrags[fragment.name.value]) {
            return;
        }
        const fragmentName = fragment.name.value;
        visitedFrags[fragmentName] = true;
        const spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
        if (spreadNodes.length === 0) {
            return;
        }
        spreadPathIndexByName[fragmentName] = spreadPath.length;
        for (const spreadNode of spreadNodes){
            const spreadName = spreadNode.name.value;
            const cycleIndex = spreadPathIndexByName[spreadName];
            spreadPath.push(spreadNode);
            if (cycleIndex === undefined) {
                const spreadFragment = context.getFragment(spreadName);
                if (spreadFragment) {
                    detectCycleRecursive(spreadFragment);
                }
            } else {
                const cyclePath = spreadPath.slice(cycleIndex);
                const viaPath = cyclePath.slice(0, -1).map((s)=>'"' + s.name.value + '"').join(", ");
                context.reportError(new _GraphQLError.GraphQLError(`Cannot spread fragment "${spreadName}" within itself` + (viaPath !== "" ? ` via ${viaPath}.` : "."), {
                    nodes: cyclePath
                }));
            }
            spreadPath.pop();
        }
        spreadPathIndexByName[fragmentName] = undefined;
    }
}


/***/ }),

/***/ 6411:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NoUndefinedVariablesRule = NoUndefinedVariablesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 *
 * See https://spec.graphql.org/draft/#sec-All-Variable-Uses-Defined
 */ function NoUndefinedVariablesRule(context) {
    let variableNameDefined = Object.create(null);
    return {
        OperationDefinition: {
            enter () {
                variableNameDefined = Object.create(null);
            },
            leave (operation) {
                const usages = context.getRecursiveVariableUsages(operation);
                for (const { node } of usages){
                    const varName = node.name.value;
                    if (variableNameDefined[varName] !== true) {
                        context.reportError(new _GraphQLError.GraphQLError(operation.name ? `Variable "$${varName}" is not defined by operation "${operation.name.value}".` : `Variable "$${varName}" is not defined.`, {
                            nodes: [
                                node,
                                operation
                            ]
                        }));
                    }
                }
            }
        },
        VariableDefinition (node) {
            variableNameDefined[node.variable.name.value] = true;
        }
    };
}


/***/ }),

/***/ 9791:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NoUnusedFragmentsRule = NoUnusedFragmentsRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 *
 * See https://spec.graphql.org/draft/#sec-Fragments-Must-Be-Used
 */ function NoUnusedFragmentsRule(context) {
    const operationDefs = [];
    const fragmentDefs = [];
    return {
        OperationDefinition (node) {
            operationDefs.push(node);
            return false;
        },
        FragmentDefinition (node) {
            fragmentDefs.push(node);
            return false;
        },
        Document: {
            leave () {
                const fragmentNameUsed = Object.create(null);
                for (const operation of operationDefs){
                    for (const fragment of context.getRecursivelyReferencedFragments(operation)){
                        fragmentNameUsed[fragment.name.value] = true;
                    }
                }
                for (const fragmentDef of fragmentDefs){
                    const fragName = fragmentDef.name.value;
                    if (fragmentNameUsed[fragName] !== true) {
                        context.reportError(new _GraphQLError.GraphQLError(`Fragment "${fragName}" is never used.`, {
                            nodes: fragmentDef
                        }));
                    }
                }
            }
        }
    };
}


/***/ }),

/***/ 8571:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NoUnusedVariablesRule = NoUnusedVariablesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 *
 * See https://spec.graphql.org/draft/#sec-All-Variables-Used
 */ function NoUnusedVariablesRule(context) {
    let variableDefs = [];
    return {
        OperationDefinition: {
            enter () {
                variableDefs = [];
            },
            leave (operation) {
                const variableNameUsed = Object.create(null);
                const usages = context.getRecursiveVariableUsages(operation);
                for (const { node } of usages){
                    variableNameUsed[node.name.value] = true;
                }
                for (const variableDef of variableDefs){
                    const variableName = variableDef.variable.name.value;
                    if (variableNameUsed[variableName] !== true) {
                        context.reportError(new _GraphQLError.GraphQLError(operation.name ? `Variable "$${variableName}" is never used in operation "${operation.name.value}".` : `Variable "$${variableName}" is never used.`, {
                            nodes: variableDef
                        }));
                    }
                }
            }
        },
        VariableDefinition (def) {
            variableDefs.push(def);
        }
    };
}


/***/ }),

/***/ 4657:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMergedRule;
var _inspect = __webpack_require__(893);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
var _sortValueNode = __webpack_require__(1597);
var _typeFromAST = __webpack_require__(871);
function reasonMessage(reason) {
    if (Array.isArray(reason)) {
        return reason.map(([responseName, subReason])=>`subfields "${responseName}" conflict because ` + reasonMessage(subReason)).join(" and ");
    }
    return reason;
}
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 *
 * See https://spec.graphql.org/draft/#sec-Field-Selection-Merging
 */ function OverlappingFieldsCanBeMergedRule(context) {
    // A memoization for when fields and a fragment or two fragments are compared
    // "between" each other for conflicts. Comparisons made be made many times,
    // so memoizing this can dramatically improve the performance of this validator.
    const comparedFieldsAndFragmentPairs = new OrderedPairSet();
    const comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
    // selection set. Selection sets may be asked for this information multiple
    // times, so this improves the performance of this validator.
    const cachedFieldsAndFragmentNames = new Map();
    return {
        SelectionSet (selectionSet) {
            const conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, context.getParentType(), selectionSet);
            for (const [[responseName, reason], fields1, fields2] of conflicts){
                const reasonMsg = reasonMessage(reason);
                context.reportError(new _GraphQLError.GraphQLError(`Fields "${responseName}" conflict because ${reasonMsg}. Use different aliases on the fields to fetch both if this was intentional.`, {
                    nodes: fields1.concat(fields2)
                }));
            }
        }
    };
}
/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */ // Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, parentType, selectionSet) {
    const conflicts = [];
    const [fieldMap, fragmentNames] = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet); // (A) Find find all conflicts "within" the fields of this selection set.
    // Note: this is the *only place* `collectConflictsWithin` is called.
    collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, fieldMap);
    if (fragmentNames.length !== 0) {
        // (B) Then collect conflicts between these fields and those represented by
        // each spread fragment name found.
        for(let i = 0; i < fragmentNames.length; i++){
            collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, false, fieldMap, fragmentNames[i]); // (C) Then compare this fragment with all other fragments found in this
            // selection set to collect conflicts between fragments spread together.
            // This compares each item in the list of fragment names to every other
            // item in that same list (except for itself).
            for(let j = i + 1; j < fragmentNames.length; j++){
                collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
            }
        }
    }
    return conflicts;
} // Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.
function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
    // Memoize so the fields and fragments are not compared for conflicts more
    // than once.
    if (comparedFieldsAndFragmentPairs.has(fieldMap, fragmentName, areMutuallyExclusive)) {
        return;
    }
    comparedFieldsAndFragmentPairs.add(fieldMap, fragmentName, areMutuallyExclusive);
    const fragment = context.getFragment(fragmentName);
    if (!fragment) {
        return;
    }
    const [fieldMap2, referencedFragmentNames] = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment); // Do not compare a fragment's fieldMap to itself.
    if (fieldMap === fieldMap2) {
        return;
    } // (D) First collect any conflicts between the provided collection of fields
    // and the collection of fields represented by the given fragment.
    collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2); // (E) Then collect any conflicts between the provided collection of fields
    // and any fragment names found in the given fragment.
    for (const referencedFragmentName of referencedFragmentNames){
        collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fieldMap, referencedFragmentName);
    }
} // Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.
function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
    // No need to compare a fragment to itself.
    if (fragmentName1 === fragmentName2) {
        return;
    } // Memoize so two fragments are not compared for conflicts more than once.
    if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
        return;
    }
    comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
    const fragment1 = context.getFragment(fragmentName1);
    const fragment2 = context.getFragment(fragmentName2);
    if (!fragment1 || !fragment2) {
        return;
    }
    const [fieldMap1, referencedFragmentNames1] = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1);
    const [fieldMap2, referencedFragmentNames2] = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2); // (F) First, collect all conflicts between these two collections of fields
    // (not including any nested fragments).
    collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (G) Then collect conflicts between the first fragment and any nested
    // fragments spread in the second fragment.
    for (const referencedFragmentName2 of referencedFragmentNames2){
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, referencedFragmentName2);
    } // (G) Then collect conflicts between the second fragment and any nested
    // fragments spread in the first fragment.
    for (const referencedFragmentName1 of referencedFragmentNames1){
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, referencedFragmentName1, fragmentName2);
    }
} // Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.
function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
    const conflicts = [];
    const [fieldMap1, fragmentNames1] = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1);
    const [fieldMap2, fragmentNames2] = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2); // (H) First, collect all conflicts between these two collections of field.
    collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (I) Then collect conflicts between the first collection of fields and
    // those referenced by each fragment name associated with the second.
    for (const fragmentName2 of fragmentNames2){
        collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentName2);
    } // (I) Then collect conflicts between the second collection of fields and
    // those referenced by each fragment name associated with the first.
    for (const fragmentName1 of fragmentNames1){
        collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentName1);
    } // (J) Also collect conflicts between any fragment names by the first and
    // fragment names by the second. This compares each item in the first set of
    // names to each item in the second set of names.
    for (const fragmentName1 of fragmentNames1){
        for (const fragmentName2 of fragmentNames2){
            collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2);
        }
    }
    return conflicts;
} // Collect all Conflicts "within" one collection of fields.
function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, fieldMap) {
    // A field map is a keyed collection, where each key represents a response
    // name and the value at that key is a list of all fields which provide that
    // response name. For every response name, if there are multiple fields, they
    // must be compared to find a potential conflict.
    for (const [responseName, fields] of Object.entries(fieldMap)){
        // This compares every field in the list to every other field in this list
        // (except to itself). If the list only has one item, nothing needs to
        // be compared.
        if (fields.length > 1) {
            for(let i = 0; i < fields.length; i++){
                for(let j = i + 1; j < fields.length; j++){
                    const conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, false, responseName, fields[i], fields[j]);
                    if (conflict) {
                        conflicts.push(conflict);
                    }
                }
            }
        }
    }
} // Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.
function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
    // A field map is a keyed collection, where each key represents a response
    // name and the value at that key is a list of all fields which provide that
    // response name. For any response name which appears in both provided field
    // maps, each field from the first field map must be compared to every field
    // in the second field map to find potential conflicts.
    for (const [responseName, fields1] of Object.entries(fieldMap1)){
        const fields2 = fieldMap2[responseName];
        if (fields2) {
            for (const field1 of fields1){
                for (const field2 of fields2){
                    const conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2);
                    if (conflict) {
                        conflicts.push(conflict);
                    }
                }
            }
        }
    }
} // Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.
function findConflict(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
    const [parentType1, node1, def1] = field1;
    const [parentType2, node2, def2] = field2; // If it is known that two fields could not possibly apply at the same
    // time, due to the parent types, then it is safe to permit them to diverge
    // in aliased field or arguments used as they will not present any ambiguity
    // by differing.
    // It is known that two parent types could never overlap if they are
    // different Object types. Interface or Union types might overlap - if not
    // in the current state of the schema, then perhaps in some future version,
    // thus may not safely diverge.
    const areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && (0, _definition.isObjectType)(parentType1) && (0, _definition.isObjectType)(parentType2);
    if (!areMutuallyExclusive) {
        // Two aliases must refer to the same field.
        const name1 = node1.name.value;
        const name2 = node2.name.value;
        if (name1 !== name2) {
            return [
                [
                    responseName,
                    `"${name1}" and "${name2}" are different fields`
                ],
                [
                    node1
                ],
                [
                    node2
                ]
            ];
        } // Two field calls must have the same arguments.
        if (!sameArguments(node1, node2)) {
            return [
                [
                    responseName,
                    "they have differing arguments"
                ],
                [
                    node1
                ],
                [
                    node2
                ]
            ];
        }
    } // The return type for each field.
    const type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
    const type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;
    if (type1 && type2 && doTypesConflict(type1, type2)) {
        return [
            [
                responseName,
                `they return conflicting types "${(0, _inspect.inspect)(type1)}" and "${(0, _inspect.inspect)(type2)}"`
            ],
            [
                node1
            ],
            [
                node2
            ]
        ];
    } // Collect and compare sub-fields. Use the same "visited fragment names" list
    // for both collections so fields in a fragment reference are never
    // compared to themselves.
    const selectionSet1 = node1.selectionSet;
    const selectionSet2 = node2.selectionSet;
    if (selectionSet1 && selectionSet2) {
        const conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, (0, _definition.getNamedType)(type1), selectionSet1, (0, _definition.getNamedType)(type2), selectionSet2);
        return subfieldConflicts(conflicts, responseName, node1, node2);
    }
}
function sameArguments(node1, node2) {
    const args1 = node1.arguments;
    const args2 = node2.arguments;
    if (args1 === undefined || args1.length === 0) {
        return args2 === undefined || args2.length === 0;
    }
    if (args2 === undefined || args2.length === 0) {
        return false;
    }
    /* c8 ignore next */ if (args1.length !== args2.length) {
        /* c8 ignore next */ return false;
    /* c8 ignore next */ }
    const values2 = new Map(args2.map(({ name, value })=>[
            name.value,
            value
        ]));
    return args1.every((arg1)=>{
        const value1 = arg1.value;
        const value2 = values2.get(arg1.name.value);
        if (value2 === undefined) {
            return false;
        }
        return stringifyValue(value1) === stringifyValue(value2);
    });
}
function stringifyValue(value) {
    return (0, _printer.print)((0, _sortValueNode.sortValueNode)(value));
} // Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.
function doTypesConflict(type1, type2) {
    if ((0, _definition.isListType)(type1)) {
        return (0, _definition.isListType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
    }
    if ((0, _definition.isListType)(type2)) {
        return true;
    }
    if ((0, _definition.isNonNullType)(type1)) {
        return (0, _definition.isNonNullType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
    }
    if ((0, _definition.isNonNullType)(type2)) {
        return true;
    }
    if ((0, _definition.isLeafType)(type1) || (0, _definition.isLeafType)(type2)) {
        return type1 !== type2;
    }
    return false;
} // Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.
function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
    const cached = cachedFieldsAndFragmentNames.get(selectionSet);
    if (cached) {
        return cached;
    }
    const nodeAndDefs = Object.create(null);
    const fragmentNames = Object.create(null);
    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
    const result = [
        nodeAndDefs,
        Object.keys(fragmentNames)
    ];
    cachedFieldsAndFragmentNames.set(selectionSet, result);
    return result;
} // Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.
function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
    // Short-circuit building a type from the node if possible.
    const cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
    if (cached) {
        return cached;
    }
    const fragmentType = (0, _typeFromAST.typeFromAST)(context.getSchema(), fragment.typeCondition);
    return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}
function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
    for (const selection of selectionSet.selections){
        switch(selection.kind){
            case _kinds.Kind.FIELD:
                {
                    const fieldName = selection.name.value;
                    let fieldDef;
                    if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
                        fieldDef = parentType.getFields()[fieldName];
                    }
                    const responseName = selection.alias ? selection.alias.value : fieldName;
                    if (!nodeAndDefs[responseName]) {
                        nodeAndDefs[responseName] = [];
                    }
                    nodeAndDefs[responseName].push([
                        parentType,
                        selection,
                        fieldDef
                    ]);
                    break;
                }
            case _kinds.Kind.FRAGMENT_SPREAD:
                fragmentNames[selection.name.value] = true;
                break;
            case _kinds.Kind.INLINE_FRAGMENT:
                {
                    const typeCondition = selection.typeCondition;
                    const inlineFragmentType = typeCondition ? (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition) : parentType;
                    _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
                    break;
                }
        }
    }
} // Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.
function subfieldConflicts(conflicts, responseName, node1, node2) {
    if (conflicts.length > 0) {
        return [
            [
                responseName,
                conflicts.map(([reason])=>reason)
            ],
            [
                node1,
                ...conflicts.map(([, fields1])=>fields1).flat()
            ],
            [
                node2,
                ...conflicts.map(([, , fields2])=>fields2).flat()
            ]
        ];
    }
}
/**
 * A way to keep track of pairs of things where the ordering of the pair
 * matters.
 *
 * Provides a third argument for has/set to allow flagging the pair as
 * weakly or strongly present within the collection.
 */ class OrderedPairSet {
    constructor(){
        this._data = new Map();
    }
    has(a, b, weaklyPresent) {
        var _this$_data$get;
        const result = (_this$_data$get = this._data.get(a)) === null || _this$_data$get === void 0 ? void 0 : _this$_data$get.get(b);
        if (result === undefined) {
            return false;
        }
        return weaklyPresent ? true : weaklyPresent === result;
    }
    add(a, b, weaklyPresent) {
        const map = this._data.get(a);
        if (map === undefined) {
            this._data.set(a, new Map([
                [
                    b,
                    weaklyPresent
                ]
            ]));
        } else {
            map.set(b, weaklyPresent);
        }
    }
}
/**
 * A way to keep track of pairs of similar things when the ordering of the pair
 * does not matter.
 */ class PairSet {
    constructor(){
        this._orderedPairSet = new OrderedPairSet();
    }
    has(a, b, weaklyPresent) {
        return a < b ? this._orderedPairSet.has(a, b, weaklyPresent) : this._orderedPairSet.has(b, a, weaklyPresent);
    }
    add(a, b, weaklyPresent) {
        if (a < b) {
            this._orderedPairSet.add(a, b, weaklyPresent);
        } else {
            this._orderedPairSet.add(b, a, weaklyPresent);
        }
    }
}


/***/ }),

/***/ 6283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule;
var _inspect = __webpack_require__(893);
var _GraphQLError = __webpack_require__(6042);
var _definition = __webpack_require__(2838);
var _typeComparators = __webpack_require__(3321);
var _typeFromAST = __webpack_require__(871);
/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */ function PossibleFragmentSpreadsRule(context) {
    return {
        InlineFragment (node) {
            const fragType = context.getType();
            const parentType = context.getParentType();
            if ((0, _definition.isCompositeType)(fragType) && (0, _definition.isCompositeType)(parentType) && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
                const parentTypeStr = (0, _inspect.inspect)(parentType);
                const fragTypeStr = (0, _inspect.inspect)(fragType);
                context.reportError(new _GraphQLError.GraphQLError(`Fragment cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`, {
                    nodes: node
                }));
            }
        },
        FragmentSpread (node) {
            const fragName = node.name.value;
            const fragType = getFragmentType(context, fragName);
            const parentType = context.getParentType();
            if (fragType && parentType && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
                const parentTypeStr = (0, _inspect.inspect)(parentType);
                const fragTypeStr = (0, _inspect.inspect)(fragType);
                context.reportError(new _GraphQLError.GraphQLError(`Fragment "${fragName}" cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`, {
                    nodes: node
                }));
            }
        }
    };
}
function getFragmentType(context, name) {
    const frag = context.getFragment(name);
    if (frag) {
        const type = (0, _typeFromAST.typeFromAST)(context.getSchema(), frag.typeCondition);
        if ((0, _definition.isCompositeType)(type)) {
            return type;
        }
    }
}


/***/ }),

/***/ 2891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PossibleTypeExtensionsRule = PossibleTypeExtensionsRule;
var _didYouMean = __webpack_require__(3278);
var _inspect = __webpack_require__(893);
var _invariant = __webpack_require__(2270);
var _suggestionList = __webpack_require__(7135);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _predicates = __webpack_require__(2338);
var _definition = __webpack_require__(2838);
/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */ function PossibleTypeExtensionsRule(context) {
    const schema = context.getSchema();
    const definedTypes = Object.create(null);
    for (const def of context.getDocument().definitions){
        if ((0, _predicates.isTypeDefinitionNode)(def)) {
            definedTypes[def.name.value] = def;
        }
    }
    return {
        ScalarTypeExtension: checkExtension,
        ObjectTypeExtension: checkExtension,
        InterfaceTypeExtension: checkExtension,
        UnionTypeExtension: checkExtension,
        EnumTypeExtension: checkExtension,
        InputObjectTypeExtension: checkExtension
    };
    function checkExtension(node) {
        const typeName = node.name.value;
        const defNode = definedTypes[typeName];
        const existingType = schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
        let expectedKind;
        if (defNode) {
            expectedKind = defKindToExtKind[defNode.kind];
        } else if (existingType) {
            expectedKind = typeToExtKind(existingType);
        }
        if (expectedKind) {
            if (expectedKind !== node.kind) {
                const kindStr = extensionKindToTypeName(node.kind);
                context.reportError(new _GraphQLError.GraphQLError(`Cannot extend non-${kindStr} type "${typeName}".`, {
                    nodes: defNode ? [
                        defNode,
                        node
                    ] : node
                }));
            }
        } else {
            const allTypeNames = Object.keys({
                ...definedTypes,
                ...schema === null || schema === void 0 ? void 0 : schema.getTypeMap()
            });
            const suggestedTypes = (0, _suggestionList.suggestionList)(typeName, allTypeNames);
            context.reportError(new _GraphQLError.GraphQLError(`Cannot extend type "${typeName}" because it is not defined.` + (0, _didYouMean.didYouMean)(suggestedTypes), {
                nodes: node.name
            }));
        }
    }
}
const defKindToExtKind = {
    [_kinds.Kind.SCALAR_TYPE_DEFINITION]: _kinds.Kind.SCALAR_TYPE_EXTENSION,
    [_kinds.Kind.OBJECT_TYPE_DEFINITION]: _kinds.Kind.OBJECT_TYPE_EXTENSION,
    [_kinds.Kind.INTERFACE_TYPE_DEFINITION]: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
    [_kinds.Kind.UNION_TYPE_DEFINITION]: _kinds.Kind.UNION_TYPE_EXTENSION,
    [_kinds.Kind.ENUM_TYPE_DEFINITION]: _kinds.Kind.ENUM_TYPE_EXTENSION,
    [_kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION]: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION
};
function typeToExtKind(type) {
    if ((0, _definition.isScalarType)(type)) {
        return _kinds.Kind.SCALAR_TYPE_EXTENSION;
    }
    if ((0, _definition.isObjectType)(type)) {
        return _kinds.Kind.OBJECT_TYPE_EXTENSION;
    }
    if ((0, _definition.isInterfaceType)(type)) {
        return _kinds.Kind.INTERFACE_TYPE_EXTENSION;
    }
    if ((0, _definition.isUnionType)(type)) {
        return _kinds.Kind.UNION_TYPE_EXTENSION;
    }
    if ((0, _definition.isEnumType)(type)) {
        return _kinds.Kind.ENUM_TYPE_EXTENSION;
    }
    if ((0, _definition.isInputObjectType)(type)) {
        return _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
    }
    /* c8 ignore next 3 */ // Not reachable. All possible types have been considered
     false || (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
}
function extensionKindToTypeName(kind) {
    switch(kind){
        case _kinds.Kind.SCALAR_TYPE_EXTENSION:
            return "scalar";
        case _kinds.Kind.OBJECT_TYPE_EXTENSION:
            return "object";
        case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
            return "interface";
        case _kinds.Kind.UNION_TYPE_EXTENSION:
            return "union";
        case _kinds.Kind.ENUM_TYPE_EXTENSION:
            return "enum";
        case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
            return "input object";
        // Not reachable. All possible types have been considered
        /* c8 ignore next */ default:
             false || (0, _invariant.invariant)(false, "Unexpected kind: " + (0, _inspect.inspect)(kind));
    }
}


/***/ }),

/***/ 933:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ProvidedRequiredArgumentsOnDirectivesRule = ProvidedRequiredArgumentsOnDirectivesRule;
exports.ProvidedRequiredArgumentsRule = ProvidedRequiredArgumentsRule;
var _inspect = __webpack_require__(893);
var _keyMap = __webpack_require__(1180);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
var _directives = __webpack_require__(2194);
/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */ function ProvidedRequiredArgumentsRule(context) {
    return {
        // eslint-disable-next-line new-cap
        ...ProvidedRequiredArgumentsOnDirectivesRule(context),
        Field: {
            // Validate on leave to allow for deeper errors to appear first.
            leave (fieldNode) {
                var _fieldNode$arguments;
                const fieldDef = context.getFieldDef();
                if (!fieldDef) {
                    return false;
                }
                const providedArgs = new Set(/* c8 ignore next */ (_fieldNode$arguments = fieldNode.arguments) === null || _fieldNode$arguments === void 0 ? void 0 : _fieldNode$arguments.map((arg)=>arg.name.value));
                for (const argDef of fieldDef.args){
                    if (!providedArgs.has(argDef.name) && (0, _definition.isRequiredArgument)(argDef)) {
                        const argTypeStr = (0, _inspect.inspect)(argDef.type);
                        context.reportError(new _GraphQLError.GraphQLError(`Field "${fieldDef.name}" argument "${argDef.name}" of type "${argTypeStr}" is required, but it was not provided.`, {
                            nodes: fieldNode
                        }));
                    }
                }
            }
        }
    };
}
/**
 * @internal
 */ function ProvidedRequiredArgumentsOnDirectivesRule(context) {
    var _schema$getDirectives;
    const requiredArgsMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = (_schema$getDirectives = schema === null || schema === void 0 ? void 0 : schema.getDirectives()) !== null && _schema$getDirectives !== void 0 ? _schema$getDirectives : _directives.specifiedDirectives;
    for (const directive of definedDirectives){
        requiredArgsMap[directive.name] = (0, _keyMap.keyMap)(directive.args.filter(_definition.isRequiredArgument), (arg)=>arg.name);
    }
    const astDefinitions = context.getDocument().definitions;
    for (const def of astDefinitions){
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            var _def$arguments;
            // FIXME: https://github.com/graphql/graphql-js/issues/2203
            /* c8 ignore next */ const argNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
            requiredArgsMap[def.name.value] = (0, _keyMap.keyMap)(argNodes.filter(isRequiredArgumentNode), (arg)=>arg.name.value);
        }
    }
    return {
        Directive: {
            // Validate on leave to allow for deeper errors to appear first.
            leave (directiveNode) {
                const directiveName = directiveNode.name.value;
                const requiredArgs = requiredArgsMap[directiveName];
                if (requiredArgs) {
                    var _directiveNode$argume;
                    // FIXME: https://github.com/graphql/graphql-js/issues/2203
                    /* c8 ignore next */ const argNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
                    const argNodeMap = new Set(argNodes.map((arg)=>arg.name.value));
                    for (const [argName, argDef] of Object.entries(requiredArgs)){
                        if (!argNodeMap.has(argName)) {
                            const argType = (0, _definition.isType)(argDef.type) ? (0, _inspect.inspect)(argDef.type) : (0, _printer.print)(argDef.type);
                            context.reportError(new _GraphQLError.GraphQLError(`Directive "@${directiveName}" argument "${argName}" of type "${argType}" is required, but it was not provided.`, {
                                nodes: directiveNode
                            }));
                        }
                    }
                }
            }
        }
    };
}
function isRequiredArgumentNode(arg) {
    return arg.type.kind === _kinds.Kind.NON_NULL_TYPE && arg.defaultValue == null;
}


/***/ }),

/***/ 7781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ScalarLeafsRule = ScalarLeafsRule;
var _inspect = __webpack_require__(893);
var _GraphQLError = __webpack_require__(6042);
var _definition = __webpack_require__(2838);
/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */ function ScalarLeafsRule(context) {
    return {
        Field (node) {
            const type = context.getType();
            const selectionSet = node.selectionSet;
            if (type) {
                if ((0, _definition.isLeafType)((0, _definition.getNamedType)(type))) {
                    if (selectionSet) {
                        const fieldName = node.name.value;
                        const typeStr = (0, _inspect.inspect)(type);
                        context.reportError(new _GraphQLError.GraphQLError(`Field "${fieldName}" must not have a selection since type "${typeStr}" has no subfields.`, {
                            nodes: selectionSet
                        }));
                    }
                } else if (!selectionSet) {
                    const fieldName = node.name.value;
                    const typeStr = (0, _inspect.inspect)(type);
                    context.reportError(new _GraphQLError.GraphQLError(`Field "${fieldName}" of type "${typeStr}" must have a selection of subfields. Did you mean "${fieldName} { ... }"?`, {
                        nodes: node
                    }));
                } else if (selectionSet.selections.length === 0) {
                    const fieldName = node.name.value;
                    const typeStr = (0, _inspect.inspect)(type);
                    context.reportError(new _GraphQLError.GraphQLError(`Field "${fieldName}" of type "${typeStr}" must have at least one field selected.`, {
                        nodes: node
                    }));
                }
            }
        }
    };
}


/***/ }),

/***/ 4068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SingleFieldSubscriptionsRule = SingleFieldSubscriptionsRule;
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _collectFields = __webpack_require__(2480);
/**
 * Subscriptions must only include a non-introspection field.
 *
 * A GraphQL subscription is valid only if it contains a single root field and
 * that root field is not an introspection field.
 *
 * See https://spec.graphql.org/draft/#sec-Single-root-field
 */ function SingleFieldSubscriptionsRule(context) {
    return {
        OperationDefinition (node) {
            if (node.operation === "subscription") {
                const schema = context.getSchema();
                const subscriptionType = schema.getSubscriptionType();
                if (subscriptionType) {
                    const operationName = node.name ? node.name.value : null;
                    const variableValues = Object.create(null);
                    const document = context.getDocument();
                    const fragments = Object.create(null);
                    for (const definition of document.definitions){
                        if (definition.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
                            fragments[definition.name.value] = definition;
                        }
                    }
                    const fields = (0, _collectFields.collectFields)(schema, fragments, variableValues, subscriptionType, node.selectionSet);
                    if (fields.size > 1) {
                        const fieldSelectionLists = [
                            ...fields.values()
                        ];
                        const extraFieldSelectionLists = fieldSelectionLists.slice(1);
                        const extraFieldSelections = extraFieldSelectionLists.flat();
                        context.reportError(new _GraphQLError.GraphQLError(operationName != null ? `Subscription "${operationName}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", {
                            nodes: extraFieldSelections
                        }));
                    }
                    for (const fieldNodes of fields.values()){
                        const field = fieldNodes[0];
                        const fieldName = field.name.value;
                        if (fieldName.startsWith("__")) {
                            context.reportError(new _GraphQLError.GraphQLError(operationName != null ? `Subscription "${operationName}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", {
                                nodes: fieldNodes
                            }));
                        }
                    }
                }
            }
        }
    };
}


/***/ }),

/***/ 9969:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueArgumentDefinitionNamesRule = UniqueArgumentDefinitionNamesRule;
var _groupBy = __webpack_require__(9374);
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique argument definition names
 *
 * A GraphQL Object or Interface type is only valid if all its fields have uniquely named arguments.
 * A GraphQL Directive is only valid if all its arguments are uniquely named.
 */ function UniqueArgumentDefinitionNamesRule(context) {
    return {
        DirectiveDefinition (directiveNode) {
            var _directiveNode$argume;
            // FIXME: https://github.com/graphql/graphql-js/issues/2203
            /* c8 ignore next */ const argumentNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
            return checkArgUniqueness(`@${directiveNode.name.value}`, argumentNodes);
        },
        InterfaceTypeDefinition: checkArgUniquenessPerField,
        InterfaceTypeExtension: checkArgUniquenessPerField,
        ObjectTypeDefinition: checkArgUniquenessPerField,
        ObjectTypeExtension: checkArgUniquenessPerField
    };
    function checkArgUniquenessPerField(typeNode) {
        var _typeNode$fields;
        const typeName = typeNode.name.value; // FIXME: https://github.com/graphql/graphql-js/issues/2203
        /* c8 ignore next */ const fieldNodes = (_typeNode$fields = typeNode.fields) !== null && _typeNode$fields !== void 0 ? _typeNode$fields : [];
        for (const fieldDef of fieldNodes){
            var _fieldDef$arguments;
            const fieldName = fieldDef.name.value; // FIXME: https://github.com/graphql/graphql-js/issues/2203
            /* c8 ignore next */ const argumentNodes = (_fieldDef$arguments = fieldDef.arguments) !== null && _fieldDef$arguments !== void 0 ? _fieldDef$arguments : [];
            checkArgUniqueness(`${typeName}.${fieldName}`, argumentNodes);
        }
        return false;
    }
    function checkArgUniqueness(parentName, argumentNodes) {
        const seenArgs = (0, _groupBy.groupBy)(argumentNodes, (arg)=>arg.name.value);
        for (const [argName, argNodes] of seenArgs){
            if (argNodes.length > 1) {
                context.reportError(new _GraphQLError.GraphQLError(`Argument "${parentName}(${argName}:)" can only be defined once.`, {
                    nodes: argNodes.map((node)=>node.name)
                }));
            }
        }
        return false;
    }
}


/***/ }),

/***/ 882:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueArgumentNamesRule = UniqueArgumentNamesRule;
var _groupBy = __webpack_require__(9374);
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 *
 * See https://spec.graphql.org/draft/#sec-Argument-Names
 */ function UniqueArgumentNamesRule(context) {
    return {
        Field: checkArgUniqueness,
        Directive: checkArgUniqueness
    };
    function checkArgUniqueness(parentNode) {
        var _parentNode$arguments;
        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        /* c8 ignore next */ const argumentNodes = (_parentNode$arguments = parentNode.arguments) !== null && _parentNode$arguments !== void 0 ? _parentNode$arguments : [];
        const seenArgs = (0, _groupBy.groupBy)(argumentNodes, (arg)=>arg.name.value);
        for (const [argName, argNodes] of seenArgs){
            if (argNodes.length > 1) {
                context.reportError(new _GraphQLError.GraphQLError(`There can be only one argument named "${argName}".`, {
                    nodes: argNodes.map((node)=>node.name)
                }));
            }
        }
    }
}


/***/ }),

/***/ 8544:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueDirectiveNamesRule = UniqueDirectiveNamesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */ function UniqueDirectiveNamesRule(context) {
    const knownDirectiveNames = Object.create(null);
    const schema = context.getSchema();
    return {
        DirectiveDefinition (node) {
            const directiveName = node.name.value;
            if (schema !== null && schema !== void 0 && schema.getDirective(directiveName)) {
                context.reportError(new _GraphQLError.GraphQLError(`Directive "@${directiveName}" already exists in the schema. It cannot be redefined.`, {
                    nodes: node.name
                }));
                return;
            }
            if (knownDirectiveNames[directiveName]) {
                context.reportError(new _GraphQLError.GraphQLError(`There can be only one directive named "@${directiveName}".`, {
                    nodes: [
                        knownDirectiveNames[directiveName],
                        node.name
                    ]
                }));
            } else {
                knownDirectiveNames[directiveName] = node.name;
            }
            return false;
        }
    };
}


/***/ }),

/***/ 5588:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule;
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _predicates = __webpack_require__(2338);
var _directives = __webpack_require__(2194);
/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all non-repeatable directives at
 * a given location are uniquely named.
 *
 * See https://spec.graphql.org/draft/#sec-Directives-Are-Unique-Per-Location
 */ function UniqueDirectivesPerLocationRule(context) {
    const uniqueDirectiveMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
    for (const directive of definedDirectives){
        uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
    }
    const astDefinitions = context.getDocument().definitions;
    for (const def of astDefinitions){
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            uniqueDirectiveMap[def.name.value] = !def.repeatable;
        }
    }
    const schemaDirectives = Object.create(null);
    const typeDirectivesMap = Object.create(null);
    return {
        // Many different AST nodes may contain directives. Rather than listing
        // them all, just listen for entering any node, and check to see if it
        // defines any directives.
        enter (node) {
            if (!("directives" in node) || !node.directives) {
                return;
            }
            let seenDirectives;
            if (node.kind === _kinds.Kind.SCHEMA_DEFINITION || node.kind === _kinds.Kind.SCHEMA_EXTENSION) {
                seenDirectives = schemaDirectives;
            } else if ((0, _predicates.isTypeDefinitionNode)(node) || (0, _predicates.isTypeExtensionNode)(node)) {
                const typeName = node.name.value;
                seenDirectives = typeDirectivesMap[typeName];
                if (seenDirectives === undefined) {
                    typeDirectivesMap[typeName] = seenDirectives = Object.create(null);
                }
            } else {
                seenDirectives = Object.create(null);
            }
            for (const directive of node.directives){
                const directiveName = directive.name.value;
                if (uniqueDirectiveMap[directiveName]) {
                    if (seenDirectives[directiveName]) {
                        context.reportError(new _GraphQLError.GraphQLError(`The directive "@${directiveName}" can only be used once at this location.`, {
                            nodes: [
                                seenDirectives[directiveName],
                                directive
                            ]
                        }));
                    } else {
                        seenDirectives[directiveName] = directive;
                    }
                }
            }
        }
    };
}


/***/ }),

/***/ 7703:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueEnumValueNamesRule = UniqueEnumValueNamesRule;
var _GraphQLError = __webpack_require__(6042);
var _definition = __webpack_require__(2838);
/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */ function UniqueEnumValueNamesRule(context) {
    const schema = context.getSchema();
    const existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
    const knownValueNames = Object.create(null);
    return {
        EnumTypeDefinition: checkValueUniqueness,
        EnumTypeExtension: checkValueUniqueness
    };
    function checkValueUniqueness(node) {
        var _node$values;
        const typeName = node.name.value;
        if (!knownValueNames[typeName]) {
            knownValueNames[typeName] = Object.create(null);
        } // FIXME: https://github.com/graphql/graphql-js/issues/2203
        /* c8 ignore next */ const valueNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
        const valueNames = knownValueNames[typeName];
        for (const valueDef of valueNodes){
            const valueName = valueDef.name.value;
            const existingType = existingTypeMap[typeName];
            if ((0, _definition.isEnumType)(existingType) && existingType.getValue(valueName)) {
                context.reportError(new _GraphQLError.GraphQLError(`Enum value "${typeName}.${valueName}" already exists in the schema. It cannot also be defined in this type extension.`, {
                    nodes: valueDef.name
                }));
            } else if (valueNames[valueName]) {
                context.reportError(new _GraphQLError.GraphQLError(`Enum value "${typeName}.${valueName}" can only be defined once.`, {
                    nodes: [
                        valueNames[valueName],
                        valueDef.name
                    ]
                }));
            } else {
                valueNames[valueName] = valueDef.name;
            }
        }
        return false;
    }
}


/***/ }),

/***/ 451:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueFieldDefinitionNamesRule = UniqueFieldDefinitionNamesRule;
var _GraphQLError = __webpack_require__(6042);
var _definition = __webpack_require__(2838);
/**
 * Unique field definition names
 *
 * A GraphQL complex type is only valid if all its fields are uniquely named.
 */ function UniqueFieldDefinitionNamesRule(context) {
    const schema = context.getSchema();
    const existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
    const knownFieldNames = Object.create(null);
    return {
        InputObjectTypeDefinition: checkFieldUniqueness,
        InputObjectTypeExtension: checkFieldUniqueness,
        InterfaceTypeDefinition: checkFieldUniqueness,
        InterfaceTypeExtension: checkFieldUniqueness,
        ObjectTypeDefinition: checkFieldUniqueness,
        ObjectTypeExtension: checkFieldUniqueness
    };
    function checkFieldUniqueness(node) {
        var _node$fields;
        const typeName = node.name.value;
        if (!knownFieldNames[typeName]) {
            knownFieldNames[typeName] = Object.create(null);
        } // FIXME: https://github.com/graphql/graphql-js/issues/2203
        /* c8 ignore next */ const fieldNodes = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
        const fieldNames = knownFieldNames[typeName];
        for (const fieldDef of fieldNodes){
            const fieldName = fieldDef.name.value;
            if (hasField(existingTypeMap[typeName], fieldName)) {
                context.reportError(new _GraphQLError.GraphQLError(`Field "${typeName}.${fieldName}" already exists in the schema. It cannot also be defined in this type extension.`, {
                    nodes: fieldDef.name
                }));
            } else if (fieldNames[fieldName]) {
                context.reportError(new _GraphQLError.GraphQLError(`Field "${typeName}.${fieldName}" can only be defined once.`, {
                    nodes: [
                        fieldNames[fieldName],
                        fieldDef.name
                    ]
                }));
            } else {
                fieldNames[fieldName] = fieldDef.name;
            }
        }
        return false;
    }
}
function hasField(type, fieldName) {
    if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type) || (0, _definition.isInputObjectType)(type)) {
        return type.getFields()[fieldName] != null;
    }
    return false;
}


/***/ }),

/***/ 2278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueFragmentNamesRule = UniqueFragmentNamesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-Name-Uniqueness
 */ function UniqueFragmentNamesRule(context) {
    const knownFragmentNames = Object.create(null);
    return {
        OperationDefinition: ()=>false,
        FragmentDefinition (node) {
            const fragmentName = node.name.value;
            if (knownFragmentNames[fragmentName]) {
                context.reportError(new _GraphQLError.GraphQLError(`There can be only one fragment named "${fragmentName}".`, {
                    nodes: [
                        knownFragmentNames[fragmentName],
                        node.name
                    ]
                }));
            } else {
                knownFragmentNames[fragmentName] = node.name;
            }
            return false;
        }
    };
}


/***/ }),

/***/ 2902:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueInputFieldNamesRule = UniqueInputFieldNamesRule;
var _invariant = __webpack_require__(2270);
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 *
 * See https://spec.graphql.org/draft/#sec-Input-Object-Field-Uniqueness
 */ function UniqueInputFieldNamesRule(context) {
    const knownNameStack = [];
    let knownNames = Object.create(null);
    return {
        ObjectValue: {
            enter () {
                knownNameStack.push(knownNames);
                knownNames = Object.create(null);
            },
            leave () {
                const prevKnownNames = knownNameStack.pop();
                prevKnownNames || (0, _invariant.invariant)(false);
                knownNames = prevKnownNames;
            }
        },
        ObjectField (node) {
            const fieldName = node.name.value;
            if (knownNames[fieldName]) {
                context.reportError(new _GraphQLError.GraphQLError(`There can be only one input field named "${fieldName}".`, {
                    nodes: [
                        knownNames[fieldName],
                        node.name
                    ]
                }));
            } else {
                knownNames[fieldName] = node.name;
            }
        }
    };
}


/***/ }),

/***/ 2767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueOperationNamesRule = UniqueOperationNamesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 *
 * See https://spec.graphql.org/draft/#sec-Operation-Name-Uniqueness
 */ function UniqueOperationNamesRule(context) {
    const knownOperationNames = Object.create(null);
    return {
        OperationDefinition (node) {
            const operationName = node.name;
            if (operationName) {
                if (knownOperationNames[operationName.value]) {
                    context.reportError(new _GraphQLError.GraphQLError(`There can be only one operation named "${operationName.value}".`, {
                        nodes: [
                            knownOperationNames[operationName.value],
                            operationName
                        ]
                    }));
                } else {
                    knownOperationNames[operationName.value] = operationName;
                }
            }
            return false;
        },
        FragmentDefinition: ()=>false
    };
}


/***/ }),

/***/ 1159:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueOperationTypesRule = UniqueOperationTypesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique operation types
 *
 * A GraphQL document is only valid if it has only one type per operation.
 */ function UniqueOperationTypesRule(context) {
    const schema = context.getSchema();
    const definedOperationTypes = Object.create(null);
    const existingOperationTypes = schema ? {
        query: schema.getQueryType(),
        mutation: schema.getMutationType(),
        subscription: schema.getSubscriptionType()
    } : {};
    return {
        SchemaDefinition: checkOperationTypes,
        SchemaExtension: checkOperationTypes
    };
    function checkOperationTypes(node) {
        var _node$operationTypes;
        // See: https://github.com/graphql/graphql-js/issues/2203
        /* c8 ignore next */ const operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
        for (const operationType of operationTypesNodes){
            const operation = operationType.operation;
            const alreadyDefinedOperationType = definedOperationTypes[operation];
            if (existingOperationTypes[operation]) {
                context.reportError(new _GraphQLError.GraphQLError(`Type for ${operation} already defined in the schema. It cannot be redefined.`, {
                    nodes: operationType
                }));
            } else if (alreadyDefinedOperationType) {
                context.reportError(new _GraphQLError.GraphQLError(`There can be only one ${operation} type in schema.`, {
                    nodes: [
                        alreadyDefinedOperationType,
                        operationType
                    ]
                }));
            } else {
                definedOperationTypes[operation] = operationType;
            }
        }
        return false;
    }
}


/***/ }),

/***/ 9426:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueTypeNamesRule = UniqueTypeNamesRule;
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique type names
 *
 * A GraphQL document is only valid if all defined types have unique names.
 */ function UniqueTypeNamesRule(context) {
    const knownTypeNames = Object.create(null);
    const schema = context.getSchema();
    return {
        ScalarTypeDefinition: checkTypeName,
        ObjectTypeDefinition: checkTypeName,
        InterfaceTypeDefinition: checkTypeName,
        UnionTypeDefinition: checkTypeName,
        EnumTypeDefinition: checkTypeName,
        InputObjectTypeDefinition: checkTypeName
    };
    function checkTypeName(node) {
        const typeName = node.name.value;
        if (schema !== null && schema !== void 0 && schema.getType(typeName)) {
            context.reportError(new _GraphQLError.GraphQLError(`Type "${typeName}" already exists in the schema. It cannot also be defined in this type definition.`, {
                nodes: node.name
            }));
            return;
        }
        if (knownTypeNames[typeName]) {
            context.reportError(new _GraphQLError.GraphQLError(`There can be only one type named "${typeName}".`, {
                nodes: [
                    knownTypeNames[typeName],
                    node.name
                ]
            }));
        } else {
            knownTypeNames[typeName] = node.name;
        }
        return false;
    }
}


/***/ }),

/***/ 1733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UniqueVariableNamesRule = UniqueVariableNamesRule;
var _groupBy = __webpack_require__(9374);
var _GraphQLError = __webpack_require__(6042);
/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */ function UniqueVariableNamesRule(context) {
    return {
        OperationDefinition (operationNode) {
            var _operationNode$variab;
            // See: https://github.com/graphql/graphql-js/issues/2203
            /* c8 ignore next */ const variableDefinitions = (_operationNode$variab = operationNode.variableDefinitions) !== null && _operationNode$variab !== void 0 ? _operationNode$variab : [];
            const seenVariableDefinitions = (0, _groupBy.groupBy)(variableDefinitions, (node)=>node.variable.name.value);
            for (const [variableName, variableNodes] of seenVariableDefinitions){
                if (variableNodes.length > 1) {
                    context.reportError(new _GraphQLError.GraphQLError(`There can be only one variable named "$${variableName}".`, {
                        nodes: variableNodes.map((node)=>node.variable.name)
                    }));
                }
            }
        }
    };
}


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ValuesOfCorrectTypeRule = ValuesOfCorrectTypeRule;
var _didYouMean = __webpack_require__(3278);
var _inspect = __webpack_require__(893);
var _keyMap = __webpack_require__(1180);
var _suggestionList = __webpack_require__(7135);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 *
 * See https://spec.graphql.org/draft/#sec-Values-of-Correct-Type
 */ function ValuesOfCorrectTypeRule(context) {
    let variableDefinitions = {};
    return {
        OperationDefinition: {
            enter () {
                variableDefinitions = {};
            }
        },
        VariableDefinition (definition) {
            variableDefinitions[definition.variable.name.value] = definition;
        },
        ListValue (node) {
            // Note: TypeInfo will traverse into a list's item type, so look to the
            // parent input type to check if it is a list.
            const type = (0, _definition.getNullableType)(context.getParentInputType());
            if (!(0, _definition.isListType)(type)) {
                isValidValueNode(context, node);
                return false; // Don't traverse further.
            }
        },
        ObjectValue (node) {
            const type = (0, _definition.getNamedType)(context.getInputType());
            if (!(0, _definition.isInputObjectType)(type)) {
                isValidValueNode(context, node);
                return false; // Don't traverse further.
            } // Ensure every required field exists.
            const fieldNodeMap = (0, _keyMap.keyMap)(node.fields, (field)=>field.name.value);
            for (const fieldDef of Object.values(type.getFields())){
                const fieldNode = fieldNodeMap[fieldDef.name];
                if (!fieldNode && (0, _definition.isRequiredInputField)(fieldDef)) {
                    const typeStr = (0, _inspect.inspect)(fieldDef.type);
                    context.reportError(new _GraphQLError.GraphQLError(`Field "${type.name}.${fieldDef.name}" of required type "${typeStr}" was not provided.`, {
                        nodes: node
                    }));
                }
            }
            if (type.isOneOf) {
                validateOneOfInputObject(context, node, type, fieldNodeMap, variableDefinitions);
            }
        },
        ObjectField (node) {
            const parentType = (0, _definition.getNamedType)(context.getParentInputType());
            const fieldType = context.getInputType();
            if (!fieldType && (0, _definition.isInputObjectType)(parentType)) {
                const suggestions = (0, _suggestionList.suggestionList)(node.name.value, Object.keys(parentType.getFields()));
                context.reportError(new _GraphQLError.GraphQLError(`Field "${node.name.value}" is not defined by type "${parentType.name}".` + (0, _didYouMean.didYouMean)(suggestions), {
                    nodes: node
                }));
            }
        },
        NullValue (node) {
            const type = context.getInputType();
            if ((0, _definition.isNonNullType)(type)) {
                context.reportError(new _GraphQLError.GraphQLError(`Expected value of type "${(0, _inspect.inspect)(type)}", found ${(0, _printer.print)(node)}.`, {
                    nodes: node
                }));
            }
        },
        EnumValue: (node)=>isValidValueNode(context, node),
        IntValue: (node)=>isValidValueNode(context, node),
        FloatValue: (node)=>isValidValueNode(context, node),
        StringValue: (node)=>isValidValueNode(context, node),
        BooleanValue: (node)=>isValidValueNode(context, node)
    };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */ function isValidValueNode(context, node) {
    // Report any error at the full type expected by the location.
    const locationType = context.getInputType();
    if (!locationType) {
        return;
    }
    const type = (0, _definition.getNamedType)(locationType);
    if (!(0, _definition.isLeafType)(type)) {
        const typeStr = (0, _inspect.inspect)(locationType);
        context.reportError(new _GraphQLError.GraphQLError(`Expected value of type "${typeStr}", found ${(0, _printer.print)(node)}.`, {
            nodes: node
        }));
        return;
    } // Scalars and Enums determine if a literal value is valid via parseLiteral(),
    // which may throw or return an invalid value to indicate failure.
    try {
        const parseResult = type.parseLiteral(node, undefined);
        if (parseResult === undefined) {
            const typeStr = (0, _inspect.inspect)(locationType);
            context.reportError(new _GraphQLError.GraphQLError(`Expected value of type "${typeStr}", found ${(0, _printer.print)(node)}.`, {
                nodes: node
            }));
        }
    } catch (error) {
        const typeStr = (0, _inspect.inspect)(locationType);
        if (error instanceof _GraphQLError.GraphQLError) {
            context.reportError(error);
        } else {
            context.reportError(new _GraphQLError.GraphQLError(`Expected value of type "${typeStr}", found ${(0, _printer.print)(node)}; ` + error.message, {
                nodes: node,
                originalError: error
            }));
        }
    }
}
function validateOneOfInputObject(context, node, type, fieldNodeMap, variableDefinitions) {
    var _fieldNodeMap$keys$;
    const keys = Object.keys(fieldNodeMap);
    const isNotExactlyOneField = keys.length !== 1;
    if (isNotExactlyOneField) {
        context.reportError(new _GraphQLError.GraphQLError(`OneOf Input Object "${type.name}" must specify exactly one key.`, {
            nodes: [
                node
            ]
        }));
        return;
    }
    const value = (_fieldNodeMap$keys$ = fieldNodeMap[keys[0]]) === null || _fieldNodeMap$keys$ === void 0 ? void 0 : _fieldNodeMap$keys$.value;
    const isNullLiteral = !value || value.kind === _kinds.Kind.NULL;
    const isVariable = (value === null || value === void 0 ? void 0 : value.kind) === _kinds.Kind.VARIABLE;
    if (isNullLiteral) {
        context.reportError(new _GraphQLError.GraphQLError(`Field "${type.name}.${keys[0]}" must be non-null.`, {
            nodes: [
                node
            ]
        }));
        return;
    }
    if (isVariable) {
        const variableName = value.name.value;
        const definition = variableDefinitions[variableName];
        const isNullableVariable = definition.type.kind !== _kinds.Kind.NON_NULL_TYPE;
        if (isNullableVariable) {
            context.reportError(new _GraphQLError.GraphQLError(`Variable "${variableName}" must be non-nullable to be used for OneOf Input Object "${type.name}".`, {
                nodes: [
                    node
                ]
            }));
        }
    }
}


/***/ }),

/***/ 1404:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.VariablesAreInputTypesRule = VariablesAreInputTypesRule;
var _GraphQLError = __webpack_require__(6042);
var _printer = __webpack_require__(5332);
var _definition = __webpack_require__(2838);
var _typeFromAST = __webpack_require__(871);
/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 *
 * See https://spec.graphql.org/draft/#sec-Variables-Are-Input-Types
 */ function VariablesAreInputTypesRule(context) {
    return {
        VariableDefinition (node) {
            const type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.type);
            if (type !== undefined && !(0, _definition.isInputType)(type)) {
                const variableName = node.variable.name.value;
                const typeName = (0, _printer.print)(node.type);
                context.reportError(new _GraphQLError.GraphQLError(`Variable "$${variableName}" cannot be non-input type "${typeName}".`, {
                    nodes: node.type
                }));
            }
        }
    };
}


/***/ }),

/***/ 7610:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.VariablesInAllowedPositionRule = VariablesInAllowedPositionRule;
var _inspect = __webpack_require__(893);
var _GraphQLError = __webpack_require__(6042);
var _kinds = __webpack_require__(4278);
var _definition = __webpack_require__(2838);
var _typeComparators = __webpack_require__(3321);
var _typeFromAST = __webpack_require__(871);
/**
 * Variables in allowed position
 *
 * Variable usages must be compatible with the arguments they are passed to.
 *
 * See https://spec.graphql.org/draft/#sec-All-Variable-Usages-are-Allowed
 */ function VariablesInAllowedPositionRule(context) {
    let varDefMap = Object.create(null);
    return {
        OperationDefinition: {
            enter () {
                varDefMap = Object.create(null);
            },
            leave (operation) {
                const usages = context.getRecursiveVariableUsages(operation);
                for (const { node, type, defaultValue, parentType } of usages){
                    const varName = node.name.value;
                    const varDef = varDefMap[varName];
                    if (varDef && type) {
                        // A var type is allowed if it is the same or more strict (e.g. is
                        // a subtype of) than the expected type. It can be more strict if
                        // the variable type is non-null when the expected type is nullable.
                        // If both are list types, the variable item type can be more strict
                        // than the expected item type (contravariant).
                        const schema = context.getSchema();
                        const varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);
                        if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
                            const varTypeStr = (0, _inspect.inspect)(varType);
                            const typeStr = (0, _inspect.inspect)(type);
                            context.reportError(new _GraphQLError.GraphQLError(`Variable "$${varName}" of type "${varTypeStr}" used in position expecting type "${typeStr}".`, {
                                nodes: [
                                    varDef,
                                    node
                                ]
                            }));
                        }
                        if ((0, _definition.isInputObjectType)(parentType) && parentType.isOneOf && (0, _definition.isNullableType)(varType)) {
                            context.reportError(new _GraphQLError.GraphQLError(`Variable "$${varName}" is of type "${varType}" but must be non-nullable to be used for OneOf Input Object "${parentType}".`, {
                                nodes: [
                                    varDef,
                                    node
                                ]
                            }));
                        }
                    }
                }
            }
        },
        VariableDefinition (node) {
            varDefMap[node.variable.name.value] = node;
        }
    };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */ function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
    if ((0, _definition.isNonNullType)(locationType) && !(0, _definition.isNonNullType)(varType)) {
        const hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _kinds.Kind.NULL;
        const hasLocationDefaultValue = locationDefaultValue !== undefined;
        if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
            return false;
        }
        const nullableLocationType = locationType.ofType;
        return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, nullableLocationType);
    }
    return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, locationType);
}


/***/ }),

/***/ 7324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NoDeprecatedCustomRule = NoDeprecatedCustomRule;
var _invariant = __webpack_require__(2270);
var _GraphQLError = __webpack_require__(6042);
var _definition = __webpack_require__(2838);
/**
 * No deprecated
 *
 * A GraphQL document is only valid if all selected fields and all used enum values have not been
 * deprecated.
 *
 * Note: This rule is optional and is not part of the Validation section of the GraphQL
 * Specification. The main purpose of this rule is detection of deprecated usages and not
 * necessarily to forbid their use when querying a service.
 */ function NoDeprecatedCustomRule(context) {
    return {
        Field (node) {
            const fieldDef = context.getFieldDef();
            const deprecationReason = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason;
            if (fieldDef && deprecationReason != null) {
                const parentType = context.getParentType();
                parentType != null || (0, _invariant.invariant)(false);
                context.reportError(new _GraphQLError.GraphQLError(`The field ${parentType.name}.${fieldDef.name} is deprecated. ${deprecationReason}`, {
                    nodes: node
                }));
            }
        },
        Argument (node) {
            const argDef = context.getArgument();
            const deprecationReason = argDef === null || argDef === void 0 ? void 0 : argDef.deprecationReason;
            if (argDef && deprecationReason != null) {
                const directiveDef = context.getDirective();
                if (directiveDef != null) {
                    context.reportError(new _GraphQLError.GraphQLError(`Directive "@${directiveDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`, {
                        nodes: node
                    }));
                } else {
                    const parentType = context.getParentType();
                    const fieldDef = context.getFieldDef();
                    parentType != null && fieldDef != null || (0, _invariant.invariant)(false);
                    context.reportError(new _GraphQLError.GraphQLError(`Field "${parentType.name}.${fieldDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`, {
                        nodes: node
                    }));
                }
            }
        },
        ObjectField (node) {
            const inputObjectDef = (0, _definition.getNamedType)(context.getParentInputType());
            if ((0, _definition.isInputObjectType)(inputObjectDef)) {
                const inputFieldDef = inputObjectDef.getFields()[node.name.value];
                const deprecationReason = inputFieldDef === null || inputFieldDef === void 0 ? void 0 : inputFieldDef.deprecationReason;
                if (deprecationReason != null) {
                    context.reportError(new _GraphQLError.GraphQLError(`The input field ${inputObjectDef.name}.${inputFieldDef.name} is deprecated. ${deprecationReason}`, {
                        nodes: node
                    }));
                }
            }
        },
        EnumValue (node) {
            const enumValueDef = context.getEnumValue();
            const deprecationReason = enumValueDef === null || enumValueDef === void 0 ? void 0 : enumValueDef.deprecationReason;
            if (enumValueDef && deprecationReason != null) {
                const enumTypeDef = (0, _definition.getNamedType)(context.getInputType());
                enumTypeDef != null || (0, _invariant.invariant)(false);
                context.reportError(new _GraphQLError.GraphQLError(`The enum value "${enumTypeDef.name}.${enumValueDef.name}" is deprecated. ${deprecationReason}`, {
                    nodes: node
                }));
            }
        }
    };
}


/***/ }),

/***/ 7099:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NoSchemaIntrospectionCustomRule = NoSchemaIntrospectionCustomRule;
var _GraphQLError = __webpack_require__(6042);
var _definition = __webpack_require__(2838);
var _introspection = __webpack_require__(8840);
/**
 * Prohibit introspection queries
 *
 * A GraphQL document is only valid if all fields selected are not fields that
 * return an introspection type.
 *
 * Note: This rule is optional and is not part of the Validation section of the
 * GraphQL Specification. This rule effectively disables introspection, which
 * does not reflect best practices and should only be done if absolutely necessary.
 */ function NoSchemaIntrospectionCustomRule(context) {
    return {
        Field (node) {
            const type = (0, _definition.getNamedType)(context.getType());
            if (type && (0, _introspection.isIntrospectionType)(type)) {
                context.reportError(new _GraphQLError.GraphQLError(`GraphQL introspection has been disabled, but the requested query contained the field "${node.name.value}".`, {
                    nodes: node
                }));
            }
        }
    };
}


/***/ }),

/***/ 5725:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.specifiedSDLRules = exports.specifiedRules = exports.recommendedRules = void 0;
var _ExecutableDefinitionsRule = __webpack_require__(2818);
var _FieldsOnCorrectTypeRule = __webpack_require__(9111);
var _FragmentsOnCompositeTypesRule = __webpack_require__(9989);
var _KnownArgumentNamesRule = __webpack_require__(5057);
var _KnownDirectivesRule = __webpack_require__(6907);
var _KnownFragmentNamesRule = __webpack_require__(2307);
var _KnownTypeNamesRule = __webpack_require__(6387);
var _LoneAnonymousOperationRule = __webpack_require__(5659);
var _LoneSchemaDefinitionRule = __webpack_require__(2472);
var _MaxIntrospectionDepthRule = __webpack_require__(4025);
var _NoFragmentCyclesRule = __webpack_require__(2075);
var _NoUndefinedVariablesRule = __webpack_require__(6411);
var _NoUnusedFragmentsRule = __webpack_require__(9791);
var _NoUnusedVariablesRule = __webpack_require__(8571);
var _OverlappingFieldsCanBeMergedRule = __webpack_require__(4657);
var _PossibleFragmentSpreadsRule = __webpack_require__(6283);
var _PossibleTypeExtensionsRule = __webpack_require__(2891);
var _ProvidedRequiredArgumentsRule = __webpack_require__(933);
var _ScalarLeafsRule = __webpack_require__(7781);
var _SingleFieldSubscriptionsRule = __webpack_require__(4068);
var _UniqueArgumentDefinitionNamesRule = __webpack_require__(9969);
var _UniqueArgumentNamesRule = __webpack_require__(882);
var _UniqueDirectiveNamesRule = __webpack_require__(8544);
var _UniqueDirectivesPerLocationRule = __webpack_require__(5588);
var _UniqueEnumValueNamesRule = __webpack_require__(7703);
var _UniqueFieldDefinitionNamesRule = __webpack_require__(451);
var _UniqueFragmentNamesRule = __webpack_require__(2278);
var _UniqueInputFieldNamesRule = __webpack_require__(2902);
var _UniqueOperationNamesRule = __webpack_require__(2767);
var _UniqueOperationTypesRule = __webpack_require__(1159);
var _UniqueTypeNamesRule = __webpack_require__(9426);
var _UniqueVariableNamesRule = __webpack_require__(1733);
var _ValuesOfCorrectTypeRule = __webpack_require__(6);
var _VariablesAreInputTypesRule = __webpack_require__(1404);
var _VariablesInAllowedPositionRule = __webpack_require__(7610);
// Spec Section: "Executable Definitions"
// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"
// Spec Section: "Fragments on Composite Types"
// Spec Section: "Argument Names"
// Spec Section: "Directives Are Defined"
// Spec Section: "Fragment spread target defined"
// Spec Section: "Fragment Spread Type Existence"
// Spec Section: "Lone Anonymous Operation"
// SDL-specific validation rules
// TODO: Spec Section
// Spec Section: "Fragments must not form cycles"
// Spec Section: "All Variable Used Defined"
// Spec Section: "Fragments must be used"
// Spec Section: "All Variables Used"
// Spec Section: "Field Selection Merging"
// Spec Section: "Fragment spread is possible"
// Spec Section: "Argument Optionality"
// Spec Section: "Leaf Field Selections"
// Spec Section: "Subscriptions with Single Root Field"
// Spec Section: "Argument Uniqueness"
// Spec Section: "Directives Are Unique Per Location"
// Spec Section: "Fragment Name Uniqueness"
// Spec Section: "Input Object Field Uniqueness"
// Spec Section: "Operation Name Uniqueness"
// Spec Section: "Variable Uniqueness"
// Spec Section: "Value Type Correctness"
// Spec Section: "Variables are Input Types"
// Spec Section: "All Variable Usages Are Allowed"
/**
 * Technically these aren't part of the spec but they are strongly encouraged
 * validation rules.
 */ const recommendedRules = Object.freeze([
    _MaxIntrospectionDepthRule.MaxIntrospectionDepthRule
]);
/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */ exports.recommendedRules = recommendedRules;
const specifiedRules = Object.freeze([
    _ExecutableDefinitionsRule.ExecutableDefinitionsRule,
    _UniqueOperationNamesRule.UniqueOperationNamesRule,
    _LoneAnonymousOperationRule.LoneAnonymousOperationRule,
    _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule,
    _KnownTypeNamesRule.KnownTypeNamesRule,
    _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule,
    _VariablesAreInputTypesRule.VariablesAreInputTypesRule,
    _ScalarLeafsRule.ScalarLeafsRule,
    _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule,
    _UniqueFragmentNamesRule.UniqueFragmentNamesRule,
    _KnownFragmentNamesRule.KnownFragmentNamesRule,
    _NoUnusedFragmentsRule.NoUnusedFragmentsRule,
    _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule,
    _NoFragmentCyclesRule.NoFragmentCyclesRule,
    _UniqueVariableNamesRule.UniqueVariableNamesRule,
    _NoUndefinedVariablesRule.NoUndefinedVariablesRule,
    _NoUnusedVariablesRule.NoUnusedVariablesRule,
    _KnownDirectivesRule.KnownDirectivesRule,
    _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
    _KnownArgumentNamesRule.KnownArgumentNamesRule,
    _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
    _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule,
    _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule,
    _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule,
    _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule,
    _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule,
    ...recommendedRules
]);
/**
 * @internal
 */ exports.specifiedRules = specifiedRules;
const specifiedSDLRules = Object.freeze([
    _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule,
    _UniqueOperationTypesRule.UniqueOperationTypesRule,
    _UniqueTypeNamesRule.UniqueTypeNamesRule,
    _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule,
    _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule,
    _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule,
    _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule,
    _KnownTypeNamesRule.KnownTypeNamesRule,
    _KnownDirectivesRule.KnownDirectivesRule,
    _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
    _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule,
    _KnownArgumentNamesRule.KnownArgumentNamesOnDirectivesRule,
    _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
    _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule,
    _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsOnDirectivesRule
]);
exports.specifiedSDLRules = specifiedSDLRules;


/***/ }),

/***/ 7887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.assertValidSDL = assertValidSDL;
exports.assertValidSDLExtension = assertValidSDLExtension;
exports.validate = validate;
exports.validateSDL = validateSDL;
var _devAssert = __webpack_require__(6158);
var _GraphQLError = __webpack_require__(6042);
var _visitor = __webpack_require__(4041);
var _validate = __webpack_require__(2419);
var _TypeInfo = __webpack_require__(8674);
var _specifiedRules = __webpack_require__(5725);
var _ValidationContext = __webpack_require__(4904);
/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Validate will stop validation after a `maxErrors` limit has been reached.
 * Attackers can send pathologically invalid queries to induce a DoS attack,
 * so by default `maxErrors` set to 100 errors.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */ function validate(schema, documentAST, rules = _specifiedRules.specifiedRules, options, /** @deprecated will be removed in 17.0.0 */ typeInfo = new _TypeInfo.TypeInfo(schema)) {
    var _options$maxErrors;
    const maxErrors = (_options$maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors) !== null && _options$maxErrors !== void 0 ? _options$maxErrors : 100;
    documentAST || (0, _devAssert.devAssert)(false, "Must provide document."); // If the schema used for validation is invalid, throw an error.
    (0, _validate.assertValidSchema)(schema);
    const abortObj = Object.freeze({});
    const errors = [];
    const context = new _ValidationContext.ValidationContext(schema, documentAST, typeInfo, (error)=>{
        if (errors.length >= maxErrors) {
            errors.push(new _GraphQLError.GraphQLError("Too many validation errors, error limit reached. Validation aborted.")); // eslint-disable-next-line @typescript-eslint/no-throw-literal
            throw abortObj;
        }
        errors.push(error);
    }); // This uses a specialized visitor which runs multiple visitors in parallel,
    // while maintaining the visitor skip and break API.
    const visitor = (0, _visitor.visitInParallel)(rules.map((rule)=>rule(context))); // Visit the whole document with each instance of all provided rules.
    try {
        (0, _visitor.visit)(documentAST, (0, _TypeInfo.visitWithTypeInfo)(typeInfo, visitor));
    } catch (e) {
        if (e !== abortObj) {
            throw e;
        }
    }
    return errors;
}
/**
 * @internal
 */ function validateSDL(documentAST, schemaToExtend, rules = _specifiedRules.specifiedSDLRules) {
    const errors = [];
    const context = new _ValidationContext.SDLValidationContext(documentAST, schemaToExtend, (error)=>{
        errors.push(error);
    });
    const visitors = rules.map((rule)=>rule(context));
    (0, _visitor.visit)(documentAST, (0, _visitor.visitInParallel)(visitors));
    return errors;
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */ function assertValidSDL(documentAST) {
    const errors = validateSDL(documentAST);
    if (errors.length !== 0) {
        throw new Error(errors.map((error)=>error.message).join("\n\n"));
    }
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */ function assertValidSDLExtension(documentAST, schema) {
    const errors = validateSDL(documentAST, schema);
    if (errors.length !== 0) {
        throw new Error(errors.map((error)=>error.message).join("\n\n"));
    }
}


/***/ }),

/***/ 5183:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.versionInfo = exports.version = void 0;
// Note: This file is autogenerated using "resources/gen-version.js" script and
// automatically updated by "npm version" command.
/**
 * A string containing the version of the GraphQL.js library
 */ const version = "16.11.0";
/**
 * An object containing the components of the GraphQL.js version string
 */ exports.version = version;
const versionInfo = Object.freeze({
    major: 16,
    minor: 11,
    patch: 0,
    preReleaseTag: null
});
exports.versionInfo = versionInfo;


/***/ }),

/***/ 1363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const _serveredge = __webpack_require__(9642);
const createProxy = _serveredge.createClientModuleProxy; //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 8225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\Abdullah\\Desktop\\portfolio2.0\\node_modules\\next\\dist\\client\\components\\app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 1823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\Abdullah\\Desktop\\portfolio2.0\\node_modules\\next\\dist\\client\\components\\error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 7149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\Abdullah\\Desktop\\portfolio2.0\\node_modules\\next\\dist\\client\\components\\layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 6966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\Abdullah\\Desktop\\portfolio2.0\\node_modules\\next\\dist\\client\\components\\not-found-boundary.js");
 //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 5493:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return NotFound;
    }
}));
const _interop_require_default = __webpack_require__(3297);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2947));
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        padding: "0 23px 0 0",
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "49px",
        margin: 0
    }
};
function NotFound() {
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("title", null, "404: This page could not be found."), /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
            /* Minified CSS from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                @media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }
              */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
        }
    }), /*#__PURE__*/ _react.default.createElement("h1", {
        className: "next-error-h1",
        style: styles.h1
    }, "404"), /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.desc
    }, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.h2
    }, "This page could not be found.")))));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-error.js.map


/***/ }),

/***/ 9278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\Abdullah\\Desktop\\portfolio2.0\\node_modules\\next\\dist\\client\\components\\render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 9444:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(6164);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 6345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\Abdullah\\Desktop\\portfolio2.0\\node_modules\\next\\dist\\client\\components\\static-generation-searchparams-bailout-provider.js");
 //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 5153:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-dom-server-rendering-stub.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var d = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: {
        current: null
    }
};
function e(b) {
    for(var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, c = 1; c < arguments.length; c++)a += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + b + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var f = d.Dispatcher;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d;
exports.createPortal = function() {
    throw Error(e(448));
};
exports.experimental_useFormStatus = function() {
    throw Error(e(248));
};
exports.flushSync = function() {
    throw Error(e(449));
};
exports.preconnect = function(b, a) {
    var c = f.current;
    c && c.preconnect(b, a);
};
exports.prefetchDNS = function(b) {
    var a = f.current;
    a && a.prefetchDNS(b);
};
exports.preinit = function(b, a) {
    var c = f.current;
    c && c.preinit(b, a);
};
exports.preload = function(b, a) {
    var c = f.current;
    c && c.preload(b, a);
};
exports.unstable_batchedUpdates = function(b, a) {
    return b(a);
};
exports.version = "18.3.0-canary-1a001dac6-20230812";


/***/ }),

/***/ 2060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(5153);
} else {}


/***/ }),

/***/ 9200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack-server.edge.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var aa = __webpack_require__(2947), ba = __webpack_require__(2060), l = null, m = 0;
function n(a, b) {
    if (0 !== b.byteLength) if (512 < b.byteLength) 0 < m && (a.enqueue(new Uint8Array(l.buffer, 0, m)), l = new Uint8Array(512), m = 0), a.enqueue(b);
    else {
        var d = l.length - m;
        d < b.byteLength && (0 === d ? a.enqueue(l) : (l.set(b.subarray(0, d), m), a.enqueue(l), b = b.subarray(d)), l = new Uint8Array(512), m = 0);
        l.set(b, m);
        m += b.byteLength;
    }
    return !0;
}
var p = new TextEncoder;
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var q = Symbol.for("react.client.reference"), t = Symbol.for("react.server.reference");
function u(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: q
        },
        $$id: {
            value: b
        },
        $$async: {
            value: d
        }
    });
}
var da = Function.prototype.bind, ea = Array.prototype.slice;
function fa() {
    var a = da.apply(this, arguments);
    if (this.$$typeof === t) {
        var b = ea.call(arguments, 1);
        a.$$typeof = t;
        a.$$id = this.$$id;
        a.$$bound = this.$$bound ? this.$$bound.concat(b) : b;
    }
    return a;
}
var ha = Promise.prototype, ia = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "displayName":
                return;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
        }
        throw Error("Cannot access " + (String(a.name) + "." + String(b)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, ja = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                var d = a.$$id;
                a.default = u(function() {
                    throw Error("Attempted to call the default export of " + d + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
                }, a.$$id + "#", a.$$async);
                return !0;
            case "then":
                if (a.then) return a.then;
                if (a.$$async) return;
                var c = u({}, a.$$id, !0), e = new Proxy(c, ja);
                a.status = "fulfilled";
                a.value = e;
                return a.then = u(function(f) {
                    return Promise.resolve(f(e));
                }, a.$$id + "#then", !1);
        }
        c = a[b];
        c || (c = u(function() {
            throw Error("Attempted to call " + String(b) + "() from the server but " + String(b) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, a.$$id + "#" + b, a.$$async), Object.defineProperty(c, "name", {
            value: b
        }), c = a[b] = new Proxy(c, ia));
        return c;
    },
    getPrototypeOf: function() {
        return ha;
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, pa = {
    prefetchDNS: ka,
    preconnect: la,
    preload: ma,
    preinit: na
};
function ka(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "D" + a;
            c.has(e) || (c.add(e), b ? w(d, "D", [
                a,
                b
            ]) : w(d, "D", a), x(d));
        }
    }
}
function la(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = null == b || "string" !== typeof b.crossOrigin ? null : "use-credentials" === b.crossOrigin ? "use-credentials" : "";
            e = "C" + (null === e ? "null" : e) + "|" + a;
            c.has(e) || (c.add(e), b ? w(d, "C", [
                a,
                b
            ]) : w(d, "C", a), x(d));
        }
    }
}
function ma(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "L" + a;
            c.has(e) || (c.add(e), w(d, "L", [
                a,
                b
            ]), x(d));
        }
    }
}
function na(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "I" + a;
            c.has(e) || (c.add(e), w(d, "I", [
                a,
                b
            ]), x(d));
        }
    }
}
var qa = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher, ra = "function" === typeof AsyncLocalStorage, sa = ra ? new AsyncLocalStorage : null, C = Symbol.for("react.element"), ta = Symbol.for("react.fragment"), ua = Symbol.for("react.provider"), va = Symbol.for("react.server_context"), wa = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), ya = Symbol.for("react.suspense_list"), za = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Aa = Symbol.for("react.default_value"), Ba = Symbol.for("react.memo_cache_sentinel"), Ca = Symbol.iterator, E = null;
function F(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var d = b.parent;
        if (null === a) {
            if (null !== d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            F(a, d);
            b.context._currentValue = b.value;
        }
    }
}
function Da(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && Da(a);
}
function Ea(a) {
    var b = a.parent;
    null !== b && Ea(b);
    a.context._currentValue = a.value;
}
function Fa(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? F(a, b) : Fa(a, b);
}
function Ga(a, b) {
    var d = b.parent;
    if (null === d) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === d.depth ? F(a, d) : Ga(a, d);
    b.context._currentValue = b.value;
}
function Ha(a) {
    var b = E;
    b !== a && (null === b ? Ea(a) : null === a ? Da(b) : b.depth === a.depth ? F(b, a) : b.depth > a.depth ? Fa(b, a) : Ga(b, a), E = a);
}
function Ia(a, b) {
    var d = a._currentValue;
    a._currentValue = b;
    var c = E;
    return E = a = {
        parent: c,
        depth: null === c ? 0 : c.depth + 1,
        context: a,
        parentValue: d,
        value: b
    };
}
var Ja = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function Ka() {}
function La(a, b, d) {
    d = a[d];
    void 0 === d ? a.push(b) : d !== b && (b.then(Ka, Ka), b = d);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = c;
                }
            }, function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = c;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            G = b;
            throw Ja;
    }
}
var G = null;
function Ma() {
    if (null === G) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = G;
    G = null;
    return a;
}
var H = null, I = 0, J = null;
function Na() {
    var a = J;
    J = null;
    return a;
}
function Oa(a) {
    return a._currentValue;
}
var Sa = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: K,
    useTransition: K,
    readContext: Oa,
    useContext: Oa,
    useReducer: K,
    useRef: K,
    useState: K,
    useInsertionEffect: K,
    useLayoutEffect: K,
    useImperativeHandle: K,
    useEffect: K,
    useId: Pa,
    useSyncExternalStore: K,
    useCacheRefresh: function() {
        return Qa;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), d = 0; d < a; d++)b[d] = Ba;
        return b;
    },
    use: Ra
};
function K() {
    throw Error("This Hook is not supported in Server Components.");
}
function Qa() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Pa() {
    if (null === H) throw Error("useId can only be used while React is rendering");
    var a = H.identifierCount++;
    return ":" + H.identifierPrefix + "S" + a.toString(32) + ":";
}
function Ra(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = I;
            I += 1;
            null === J && (J = []);
            return La(J, a, b);
        }
        if (a.$$typeof === va) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function Ta() {
    return (new AbortController).signal;
}
function Ua() {
    var a = v();
    return a ? a.cache : new Map;
}
var Va = {
    getCacheSignal: function() {
        var a = Ua(), b = a.get(Ta);
        void 0 === b && (b = Ta(), a.set(Ta, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ua(), d = b.get(a);
        void 0 === d && (d = a(), b.set(a, d));
        return d;
    }
}, Wa = Array.isArray;
function Xa(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, d) {
        return d;
    });
}
function Ya(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.slice(0, 10) + "...");
        case "object":
            if (Wa(a)) return "[...]";
            a = Xa(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function L(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case xa:
            return "Suspense";
        case ya:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case wa:
            return L(a.render);
        case za:
            return L(a.type);
        case D:
            var b = a._payload;
            a = a._init;
            try {
                return L(a(b));
            } catch (d) {}
    }
    return "";
}
function M(a, b) {
    var d = Xa(a);
    if ("Object" !== d && "Array" !== d) return d;
    d = -1;
    var c = 0;
    if (Wa(a)) {
        var e = "[";
        for(var f = 0; f < a.length; f++){
            0 < f && (e += ", ");
            var g = a[f];
            g = "object" === typeof g && null !== g ? M(g) : Ya(g);
            "" + f === b ? (d = e.length, c = g.length, e += g) : e = 10 > g.length && 40 > e.length + g.length ? e + g : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === C) e = "<" + L(a.type) + "/>";
    else {
        e = "{";
        f = Object.keys(a);
        for(g = 0; g < f.length; g++){
            0 < g && (e += ", ");
            var k = f[g], h = JSON.stringify(k);
            e += ('"' + k + '"' === h ? k : h) + ": ";
            h = a[k];
            h = "object" === typeof h && null !== h ? M(h) : Ya(h);
            k === b ? (d = e.length, c = h.length, e += h) : e = 10 > h.length && 40 > e.length + h.length ? e + h : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + e + "\n  " + a) : "\n  " + e;
}
var Za = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $a = Za.ContextRegistry, N = JSON.stringify, ab = Za.ReactCurrentDispatcher, bb = Za.ReactCurrentCache;
function cb(a) {
    console.error(a);
}
function db(a, b, d, c, e) {
    if (null !== bb.current && bb.current !== Va) throw Error("Currently React only supports one RSC renderer at a time.");
    qa.current = pa;
    bb.current = Va;
    var f = new Set, g = [], k = new Set, h = {
        status: 0,
        flushScheduled: !1,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        hints: k,
        abortableTasks: f,
        pingedTasks: g,
        completedImportChunks: [],
        completedHintChunks: [],
        completedRegularChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        identifierPrefix: e || "",
        identifierCount: 1,
        onError: void 0 === d ? cb : d,
        toJSON: function(r, y) {
            return eb(h, this, r, y);
        }
    };
    h.pendingChunks++;
    b = fb(c);
    a = gb(h, a, b, f);
    g.push(a);
    return h;
}
var O = null;
function v() {
    if (O) return O;
    if (ra) {
        var a = sa.getStore();
        if (a) return a;
    }
    return null;
}
var hb = {};
function ib(a, b) {
    a.pendingChunks++;
    var d = gb(a, null, E, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return d.model = b.value, jb(a, d), d.id;
        case "rejected":
            var c = P(a, b.reason);
            Q(a, d.id, c);
            return d.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        d.model = e;
        jb(a, d);
    }, function(e) {
        d.status = 4;
        e = P(a, e);
        Q(a, d.id, e);
        null !== a.destination && R(a, a.destination);
    });
    return d.id;
}
function kb(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function lb(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: D,
        _payload: a,
        _init: kb
    };
}
function S(a, b, d, c, e, f) {
    if (null !== c && void 0 !== c) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === q) return [
            C,
            b,
            d,
            e
        ];
        I = 0;
        J = f;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : lb(e) : e;
    }
    if ("string" === typeof b) return [
        C,
        b,
        d,
        e
    ];
    if ("symbol" === typeof b) return b === ta ? e.children : [
        C,
        b,
        d,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === q) return [
            C,
            b,
            d,
            e
        ];
        switch(b.$$typeof){
            case D:
                var g = b._init;
                b = g(b._payload);
                return S(a, b, d, c, e, f);
            case wa:
                return a = b.render, I = 0, J = f, a(e, void 0);
            case za:
                return S(a, b.type, d, c, e, f);
            case ua:
                return Ia(b._context, e.value), [
                    C,
                    b,
                    d,
                    {
                        value: e.value,
                        children: e.children,
                        __pop: hb
                    }
                ];
        }
    }
    throw Error("Unsupported Server Component type: " + Ya(b));
}
function jb(a, b) {
    var d = a.pingedTasks;
    d.push(b);
    1 === d.length && (a.flushScheduled = null !== a.destination, setTimeout(function() {
        return mb(a);
    }, 0));
}
function gb(a, b, d, c) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: d,
        ping: function() {
            return jb(a, e);
        },
        thenableState: null
    };
    c.add(e);
    return e;
}
function T(a) {
    return "$" + a.toString(16);
}
function nb(a, b, d, c) {
    var e = c.$$async ? c.$$id + "#async" : c.$$id, f = a.writtenClientReferences, g = f.get(e);
    if (void 0 !== g) return b[0] === C && "1" === d ? "$L" + g.toString(16) : T(g);
    try {
        var k = a.bundlerConfig, h = c.$$id;
        g = "";
        var r = k[h];
        if (r) g = r.name;
        else {
            var y = h.lastIndexOf("#");
            -1 !== y && (g = h.slice(y + 1), r = k[h.slice(0, y)]);
            if (!r) throw Error('Could not find the module "' + h + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
        }
        var z = {
            id: r.id,
            chunks: r.chunks,
            name: g,
            async: !!c.$$async
        };
        a.pendingChunks++;
        var A = a.nextChunkId++, oa = N(z), B = A.toString(16) + ":I" + oa + "\n";
        var Fb = p.encode(B);
        a.completedImportChunks.push(Fb);
        f.set(e, A);
        return b[0] === C && "1" === d ? "$L" + A.toString(16) : T(A);
    } catch (Gb) {
        return a.pendingChunks++, b = a.nextChunkId++, d = P(a, Gb), Q(a, b, d), T(b);
    }
}
function ob(a, b) {
    a.pendingChunks++;
    var d = a.nextChunkId++;
    b = pb(a, d, b);
    a.completedRegularChunks.push(b);
    return d;
}
function eb(a, b, d, c) {
    switch(c){
        case C:
            return "$";
    }
    for(; "object" === typeof c && null !== c && (c.$$typeof === C || c.$$typeof === D);)try {
        switch(c.$$typeof){
            case C:
                var e = c;
                c = S(a, e.type, e.key, e.ref, e.props, null);
                break;
            case D:
                var f = c._init;
                c = f(c._payload);
        }
    } catch (g) {
        d = g === Ja ? Ma() : g;
        if ("object" === typeof d && null !== d && "function" === typeof d.then) return a.pendingChunks++, a = gb(a, c, E, a.abortableTasks), c = a.ping, d.then(c, c), a.thenableState = Na(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        c = a.nextChunkId++;
        d = P(a, d);
        Q(a, c, d);
        return "$L" + c.toString(16);
    }
    if (null === c) return null;
    if ("object" === typeof c) {
        if (c.$$typeof === q) return nb(a, b, d, c);
        if ("function" === typeof c.then) return "$@" + ib(a, c).toString(16);
        if (c.$$typeof === ua) return c = c._context._globalName, b = a.writtenProviders, d = b.get(d), void 0 === d && (a.pendingChunks++, d = a.nextChunkId++, b.set(c, d), c = qb(a, d, "$P" + c), a.completedRegularChunks.push(c)), T(d);
        if (c === hb) {
            a = E;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            c = a.parentValue;
            a.context._currentValue = c === Aa ? a.context._defaultValue : c;
            E = a.parent;
            return;
        }
        return c instanceof Map ? "$Q" + ob(a, Array.from(c)).toString(16) : c instanceof Set ? "$W" + ob(a, Array.from(c)).toString(16) : !Wa(c) && (null === c || "object" !== typeof c ? a = null : (a = Ca && c[Ca] || c["@@iterator"], a = "function" === typeof a ? a : null), a) ? Array.from(c) : c;
    }
    if ("string" === typeof c) {
        if ("Z" === c[c.length - 1] && b[d] instanceof Date) return "$D" + c;
        if (1024 <= c.length) return a.pendingChunks += 2, d = a.nextChunkId++, c = p.encode(c), b = c.byteLength, b = d.toString(16) + ":T" + b.toString(16) + ",", b = p.encode(b), a.completedRegularChunks.push(b, c), T(d);
        a = "$" === c[0] ? "$" + c : c;
        return a;
    }
    if ("boolean" === typeof c) return c;
    if ("number" === typeof c) return a = c, Number.isFinite(a) ? 0 === a && -Infinity === 1 / a ? "$-0" : a : Infinity === a ? "$Infinity" : -Infinity === a ? "$-Infinity" : "$NaN";
    if ("undefined" === typeof c) return "$undefined";
    if ("function" === typeof c) {
        if (c.$$typeof === q) return nb(a, b, d, c);
        if (c.$$typeof === t) return d = a.writtenServerReferences, b = d.get(c), void 0 !== b ? a = "$F" + b.toString(16) : (b = c.$$bound, b = {
            id: c.$$id,
            bound: b ? Promise.resolve(b) : null
        }, a = ob(a, b), d.set(c, a), a = "$F" + a.toString(16)), a;
        if (/^on[A-Z]/.test(d)) throw Error("Event handlers cannot be passed to Client Component props." + M(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + M(b, d));
    }
    if ("symbol" === typeof c) {
        e = a.writtenSymbols;
        f = e.get(c);
        if (void 0 !== f) return T(f);
        f = c.description;
        if (Symbol.for(f) !== c) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + M(b, d));
        a.pendingChunks++;
        d = a.nextChunkId++;
        b = qb(a, d, "$S" + f);
        a.completedImportChunks.push(b);
        e.set(c, d);
        return T(d);
    }
    if ("bigint" === typeof c) return "$n" + c.toString(10);
    throw Error("Type " + typeof c + " is not supported in Client Component props." + M(b, d));
}
function P(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function rb(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function Q(a, b, d) {
    d = {
        digest: d
    };
    b = b.toString(16) + ":E" + N(d) + "\n";
    b = p.encode(b);
    a.completedErrorChunks.push(b);
}
function w(a, b, d) {
    var c = a.nextChunkId++;
    d = N(d);
    b = "H" + b;
    c = c.toString(16) + ":" + b;
    c = p.encode(c + d + "\n");
    a.completedHintChunks.push(c);
}
function mb(a) {
    var b = ab.current;
    ab.current = Sa;
    var d = O;
    H = O = a;
    try {
        var c = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < c.length; e++){
            var f = c[e];
            var g = a;
            if (0 === f.status) {
                Ha(f.context);
                try {
                    var k = f.model;
                    if ("object" === typeof k && null !== k && k.$$typeof === C) {
                        var h = k, r = f.thenableState;
                        f.model = k;
                        k = S(g, h.type, h.key, h.ref, h.props, r);
                        for(f.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === C;)h = k, f.model = k, k = S(g, h.type, h.key, h.ref, h.props, null);
                    }
                    var y = pb(g, f.id, k);
                    g.completedRegularChunks.push(y);
                    g.abortableTasks.delete(f);
                    f.status = 1;
                } catch (B) {
                    var z = B === Ja ? Ma() : B;
                    if ("object" === typeof z && null !== z && "function" === typeof z.then) {
                        var A = f.ping;
                        z.then(A, A);
                        f.thenableState = Na();
                    } else {
                        g.abortableTasks.delete(f);
                        f.status = 4;
                        var oa = P(g, z);
                        Q(g, f.id, oa);
                    }
                }
            }
        }
        null !== a.destination && R(a, a.destination);
    } catch (B) {
        P(a, B), rb(a, B);
    } finally{
        ab.current = b, H = null, O = d;
    }
}
function R(a, b) {
    l = new Uint8Array(512);
    m = 0;
    try {
        for(var d = a.completedImportChunks, c = 0; c < d.length; c++)a.pendingChunks--, n(b, d[c]);
        d.splice(0, c);
        var e = a.completedHintChunks;
        for(c = 0; c < e.length; c++)n(b, e[c]);
        e.splice(0, c);
        var f = a.completedRegularChunks;
        for(c = 0; c < f.length; c++)a.pendingChunks--, n(b, f[c]);
        f.splice(0, c);
        var g = a.completedErrorChunks;
        for(c = 0; c < g.length; c++)a.pendingChunks--, n(b, g[c]);
        g.splice(0, c);
    } finally{
        a.flushScheduled = !1, l && 0 < m && (b.enqueue(new Uint8Array(l.buffer, 0, m)), l = null, m = 0);
    }
    0 === a.pendingChunks && b.close();
}
function sb(a) {
    a.flushScheduled = null !== a.destination;
    ra ? setTimeout(function() {
        return sa.run(a, mb, a);
    }, 0) : setTimeout(function() {
        return mb(a);
    }, 0);
}
function x(a) {
    if (!1 === a.flushScheduled && 0 === a.pingedTasks.length && null !== a.destination) {
        var b = a.destination;
        a.flushScheduled = !0;
        setTimeout(function() {
            return R(a, b);
        }, 0);
    }
}
function tb(a, b) {
    try {
        var d = a.abortableTasks;
        if (0 < d.size) {
            var c = P(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
            a.pendingChunks++;
            var e = a.nextChunkId++;
            Q(a, e, c);
            d.forEach(function(f) {
                f.status = 3;
                var g = T(e);
                f = qb(a, f.id, g);
                a.completedErrorChunks.push(f);
            });
            d.clear();
        }
        null !== a.destination && R(a, a.destination);
    } catch (f) {
        P(a, f), rb(a, f);
    }
}
function fb(a) {
    if (a) {
        var b = E;
        Ha(null);
        for(var d = 0; d < a.length; d++){
            var c = a[d], e = c[0];
            c = c[1];
            $a[e] || ($a[e] = aa.createServerContext(e, Aa));
            Ia($a[e], c);
        }
        a = E;
        Ha(b);
        return a;
    }
    return null;
}
function pb(a, b, d) {
    a = N(d, a.toJSON);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function qb(a, b, d) {
    a = N(d);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function ub(a, b) {
    var d = "", c = a[b];
    if (c) d = c.name;
    else {
        var e = b.lastIndexOf("#");
        -1 !== e && (d = b.slice(e + 1), c = a[b.slice(0, e)]);
        if (!c) throw Error('Could not find the module "' + b + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
    }
    return {
        id: c.id,
        chunks: c.chunks,
        name: d,
        async: !1
    };
}
var U = new Map;
function vb(a) {
    var b = globalThis.__next_require__(a);
    if ("function" !== typeof b.then || "fulfilled" === b.status) return null;
    b.then(function(d) {
        b.status = "fulfilled";
        b.value = d;
    }, function(d) {
        b.status = "rejected";
        b.reason = d;
    });
    return b;
}
function wb() {}
function xb(a) {
    for(var b = a.chunks, d = [], c = 0; c < b.length; c++){
        var e = b[c], f = U.get(e);
        if (void 0 === f) {
            f = globalThis.__next_chunk_load__(e);
            d.push(f);
            var g = U.set.bind(U, e, null);
            f.then(g, wb);
            U.set(e, f);
        } else null !== f && d.push(f);
    }
    return a.async ? 0 === d.length ? vb(a.id) : Promise.all(d).then(function() {
        return vb(a.id);
    }) : 0 < d.length ? Promise.all(d) : null;
}
function V(a) {
    var b = globalThis.__next_require__(a.id);
    if (a.async && "function" === typeof b.then) if ("fulfilled" === b.status) b = b.value;
    else throw b.reason;
    return "*" === a.name ? b : "" === a.name ? b.__esModule ? b.default : b : b[a.name];
}
function W(a, b, d, c) {
    this.status = a;
    this.value = b;
    this.reason = d;
    this._response = c;
}
W.prototype = Object.create(Promise.prototype);
W.prototype.then = function(a, b) {
    switch(this.status){
        case "resolved_model":
            yb(this);
    }
    switch(this.status){
        case "fulfilled":
            a(this.value);
            break;
        case "pending":
        case "blocked":
            a && (null === this.value && (this.value = []), this.value.push(a));
            b && (null === this.reason && (this.reason = []), this.reason.push(b));
            break;
        default:
            b(this.reason);
    }
};
function zb(a, b) {
    for(var d = 0; d < a.length; d++)(0, a[d])(b);
}
function Ab(a, b) {
    if ("pending" === a.status || "blocked" === a.status) {
        var d = a.reason;
        a.status = "rejected";
        a.reason = b;
        null !== d && zb(d, b);
    }
}
function Bb(a, b, d, c, e, f) {
    var g = ub(a._bundlerConfig, b);
    a = xb(g);
    if (d) d = Promise.all([
        d,
        a
    ]).then(function(k) {
        k = k[0];
        var h = V(g);
        return h.bind.apply(h, [
            null
        ].concat(k));
    });
    else if (a) d = Promise.resolve(a).then(function() {
        return V(g);
    });
    else return V(g);
    d.then(Cb(c, e, f), Db(c));
    return null;
}
var X = null, Y = null;
function yb(a) {
    var b = X, d = Y;
    X = a;
    Y = null;
    try {
        var c = JSON.parse(a.value, a._response._fromJSON);
        null !== Y && 0 < Y.deps ? (Y.value = c, a.status = "blocked", a.value = null, a.reason = null) : (a.status = "fulfilled", a.value = c);
    } catch (e) {
        a.status = "rejected", a.reason = e;
    } finally{
        X = b, Y = d;
    }
}
function Eb(a, b) {
    a._chunks.forEach(function(d) {
        "pending" === d.status && Ab(d, b);
    });
}
function Z(a, b) {
    var d = a._chunks, c = d.get(b);
    c || (c = a._formData.get(a._prefix + b), c = null != c ? new W("resolved_model", c, null, a) : new W("pending", null, null, a), d.set(b, c));
    return c;
}
function Cb(a, b, d) {
    if (Y) {
        var c = Y;
        c.deps++;
    } else c = Y = {
        deps: 1,
        value: null
    };
    return function(e) {
        b[d] = e;
        c.deps--;
        0 === c.deps && "blocked" === a.status && (e = a.value, a.status = "fulfilled", a.value = c.value, null !== e && zb(e, c.value));
    };
}
function Db(a) {
    return function(b) {
        return Ab(a, b);
    };
}
function Hb(a, b) {
    a = Z(a, b);
    "resolved_model" === a.status && yb(a);
    if ("fulfilled" !== a.status) throw a.reason;
    return a.value;
}
function Ib(a, b, d, c) {
    if ("$" === c[0]) switch(c[1]){
        case "$":
            return c.slice(1);
        case "@":
            return b = parseInt(c.slice(2), 16), Z(a, b);
        case "S":
            return Symbol.for(c.slice(2));
        case "F":
            return c = parseInt(c.slice(2), 16), c = Hb(a, c), Bb(a, c.id, c.bound, X, b, d);
        case "Q":
            return b = parseInt(c.slice(2), 16), a = Hb(a, b), new Map(a);
        case "W":
            return b = parseInt(c.slice(2), 16), a = Hb(a, b), new Set(a);
        case "K":
            b = c.slice(2);
            var e = a._prefix + b + "_", f = new FormData;
            a._formData.forEach(function(g, k) {
                k.startsWith(e) && f.append(k.slice(e.length), g);
            });
            return f;
        case "I":
            return Infinity;
        case "-":
            return "$-0" === c ? -0 : -Infinity;
        case "N":
            return NaN;
        case "u":
            return;
        case "D":
            return new Date(Date.parse(c.slice(2)));
        case "n":
            return BigInt(c.slice(2));
        default:
            c = parseInt(c.slice(1), 16);
            a = Z(a, c);
            switch(a.status){
                case "resolved_model":
                    yb(a);
            }
            switch(a.status){
                case "fulfilled":
                    return a.value;
                case "pending":
                case "blocked":
                    return c = X, a.then(Cb(c, b, d), Db(c)), null;
                default:
                    throw a.reason;
            }
    }
    return c;
}
function Jb(a, b) {
    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new FormData, c = new Map, e = {
        _bundlerConfig: a,
        _prefix: b,
        _formData: d,
        _chunks: c,
        _fromJSON: function(f, g) {
            return "string" === typeof g ? Ib(e, this, f, g) : g;
        }
    };
    return e;
}
function Kb(a) {
    Eb(a, Error("Connection closed."));
}
function Lb(a, b, d) {
    var c = ub(a, b);
    a = xb(c);
    return d ? Promise.all([
        d,
        a
    ]).then(function(e) {
        e = e[0];
        var f = V(c);
        return f.bind.apply(f, [
            null
        ].concat(e));
    }) : a ? Promise.resolve(a).then(function() {
        return V(c);
    }) : Promise.resolve(V(c));
}
exports.createClientModuleProxy = function(a) {
    a = u({}, a, !1);
    return new Proxy(a, ja);
};
exports.decodeAction = function(a, b) {
    var d = new FormData, c = null;
    a.forEach(function(e, f) {
        if (f.startsWith("$ACTION_")) if (f.startsWith("$ACTION_REF_")) {
            e = "$ACTION_" + f.slice(12) + ":";
            e = Jb(b, e, a);
            Kb(e);
            e = Z(e, 0);
            e.then(function() {});
            if ("fulfilled" !== e.status) throw e.reason;
            e = e.value;
            c = Lb(b, e.id, e.bound);
        } else f.startsWith("$ACTION_ID_") && (e = f.slice(11), c = Lb(b, e, null));
        else d.append(f, e);
    });
    return null === c ? null : c.then(function(e) {
        return e.bind(null, d);
    });
};
exports.decodeReply = function(a, b) {
    if ("string" === typeof a) {
        var d = new FormData;
        d.append("0", a);
        a = d;
    }
    a = Jb(b, "", a);
    Kb(a);
    return Z(a, 0);
};
exports.registerClientReference = function(a, b, d) {
    return u(a, b + "#" + d, !1);
};
exports.registerServerReference = function(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: t
        },
        $$id: {
            value: null === d ? b : b + "#" + d
        },
        $$bound: {
            value: null
        },
        bind: {
            value: fa
        }
    });
};
exports.renderToReadableStream = function(a, b, d) {
    var c = db(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0);
    if (d && d.signal) {
        var e = d.signal;
        if (e.aborted) tb(c, e.reason);
        else {
            var f = function() {
                tb(c, e.reason);
                e.removeEventListener("abort", f);
            };
            e.addEventListener("abort", f);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            sb(c);
        },
        pull: function(g) {
            if (1 === c.status) c.status = 2, ca(g, c.fatalError);
            else if (2 !== c.status && null === c.destination) {
                c.destination = g;
                try {
                    R(c, g);
                } catch (k) {
                    P(c, k), rb(c, k);
                }
            }
        },
        cancel: function() {}
    }, {
        highWaterMark: 0
    });
};


/***/ }),

/***/ 9642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(9200);
} else {}


/***/ }),

/***/ 9446:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-canary-1a001dac6-20230812";


/***/ }),

/***/ 2947:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(9446);
} else {}


/***/ }),

/***/ 2502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouter: function() {
        return AppRouter;
    },
    LayoutRouter: function() {
        return LayoutRouter;
    },
    RenderFromTemplateContext: function() {
        return RenderFromTemplateContext;
    },
    staticGenerationAsyncStorage: function() {
        return staticGenerationAsyncStorage;
    },
    requestAsyncStorage: function() {
        return requestAsyncStorage;
    },
    actionAsyncStorage: function() {
        return actionAsyncStorage;
    },
    staticGenerationBailout: function() {
        return staticGenerationBailout;
    },
    createSearchParamsBailoutProxy: function() {
        return createSearchParamsBailoutProxy;
    },
    serverHooks: function() {
        return serverHooks;
    },
    renderToReadableStream: function() {
        return renderToReadableStream;
    },
    decodeReply: function() {
        return decodeReply;
    },
    decodeAction: function() {
        return decodeAction;
    },
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    },
    StaticGenerationSearchParamsBailoutProvider: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    },
    NotFoundBoundary: function() {
        return NotFoundBoundary;
    }
});
const { default: AppRouter } = __webpack_require__(8225);
const { default: LayoutRouter } = __webpack_require__(7149);
const { default: RenderFromTemplateContext } = __webpack_require__(9278);
const { staticGenerationAsyncStorage } = __webpack_require__(3539);
const { requestAsyncStorage } = __webpack_require__(1715);
const { actionAsyncStorage } = __webpack_require__(4876);
const { staticGenerationBailout } = __webpack_require__(6164);
const { default: StaticGenerationSearchParamsBailoutProvider } = __webpack_require__(6345);
const { createSearchParamsBailoutProxy } = __webpack_require__(9444);
const serverHooks = __webpack_require__(1651);
const { renderToReadableStream, decodeReply, decodeAction } = __webpack_require__(9642);
const { preloadStyle, preloadFont, preconnect } = __webpack_require__(6167);
const { NotFoundBoundary } = __webpack_require__(6966); //# sourceMappingURL=entry-base.js.map


/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    }
});
const _reactdom = /*#__PURE__*/ _interop_require_default(__webpack_require__(2060));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function preloadStyle(href) {
    _reactdom.default.preload(href, {
        as: "style"
    });
}
function preloadFont(href, type) {
    _reactdom.default.preload(href, {
        as: "font",
        type
    });
}
function preconnect(href, crossOrigin) {
    if (typeof crossOrigin === "string") {
        _reactdom.default.preconnect(href, {
            crossOrigin
        });
    } else {
        _reactdom.default.preconnect(href);
    }
} //# sourceMappingURL=preloads.js.map


/***/ }),

/***/ 7262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppPageRouteModule: function() {
        return AppPageRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _apprender = __webpack_require__(5868);
const _routemodule = __webpack_require__(5281);
class AppPageRouteModule extends _routemodule.RouteModule {
    render(req, res, context) {
        return (0, _apprender.renderToHTMLOrFlight)(req, res, context.page, context.query, context.renderOpts);
    }
}
const _default = AppPageRouteModule; //# sourceMappingURL=module.js.map


/***/ }),

/***/ 2451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(489)


/***/ }),

/***/ 8324:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_private_field_loose_base = _class_private_field_loose_base;
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
}


/***/ }),

/***/ 4567:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var id = 0;

exports._ = exports._class_private_field_loose_key = _class_private_field_loose_key;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}


/***/ }),

/***/ 2147:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ }),

/***/ 4009:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}


/***/ }),

/***/ 3297:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 4462:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g6: () => (/* reexport */ GraphQLClient_GraphQLClient)
});

// UNUSED EXPORTS: ClientError, analyzeDocument, batchRequests, default, gql, rawRequest, request

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

// EXTERNAL MODULE: ./node_modules/graphql/index.js
var graphql = __webpack_require__(3902);
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
    return typeof definition === `object` && definition !== null && `kind` in definition && definition.kind === graphql.Kind.OPERATION_DEFINITION;
}; //# sourceMappingURL=graphql.js.map

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
    const expression = typeof document === `string` ? document : (0,graphql.print)(document);
    let isMutation = false;
    let operationName = undefined;
    if (excludeOperationName) {
        return {
            expression,
            isMutation,
            operationName
        };
    }
    const docNode = tryCatch(()=>typeof document === `string` ? (0,graphql.parse)(document) : document);
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


/***/ }),

/***/ 7422:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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


/***/ })

};
;