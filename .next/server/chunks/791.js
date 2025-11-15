exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 189:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 2385:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4290))

/***/ }),

/***/ 4290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(566);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sheard_server_component_checkIUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8880);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ProjectIconLink = ({ tech, elementStyle })=>{
    const isTitle = elementStyle?.isTitle !== false;
    const fallbackIcon = `https://img.icons8.com/ios-glyphs/50/github.png`;
    const [validIcon, setValidIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tech?.icon && tech?.icon.startsWith("http") ? tech.icon : fallbackIcon);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchIcon = async ()=>{
            try {
                const newIcon = await (0,_sheard_server_component_checkIUrl__WEBPACK_IMPORTED_MODULE_3__/* .getValidIconUrl */ .J)(tech?.icon || "link", "link", {
                    size: 40,
                    theme: "stroke",
                    iconStr: tech.iconStr
                });
                if (newIcon?.startsWith("http")) setValidIcon(newIcon);
            } catch  {
                setValidIcon(fallbackIcon);
            }
        };
        fetchIcon();
    }, [
        tech?.icon,
        tech?.iconStr
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: ()=>window.open(tech?.url, "_blank"),
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("flex cursor-pointer text-slate-600 px-2 my-3 rounded-lg justify-end items-center space-x-2", elementStyle?.parentStyle),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                width: 36,
                height: 36,
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("opacity-80", elementStyle?.iconStyle),
                src: validIcon,
                alt: tech?.title
            }),
            isTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("font-bold", elementStyle?.titleStyle),
                children: tech?.title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectIconLink);


/***/ }),

/***/ 8880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ getValidIconUrl)
/* harmony export */ });
// utils/getValidIconUrl.ts
const makeUrl = (type, size, iconName)=>`https://img.icons8.com/${type}/${size}/${iconName}.png`;
async function getValidIconUrl(iconName, fallbackIcon = "link", options) {
    const { size = 60, theme = "stroke", iconStr } = options || {};
    const sources = {
        stroke: [
            "fluency-systems-regular",
            "ios-glyphs"
        ],
        color: [
            "fluency",
            "color",
            "ios",
            "offices"
        ]
    };
    const themeList = sources[theme] || sources.stroke;
    // Try fetching a single URL
    const tryFetch = async (type, name)=>{
        const url = makeUrl(type, size, name);
        try {
            const res = await fetch(url, {
                cache: "force-cache"
            }).catch(()=>null);
            if (res?.ok) return url;
        } catch (e) {}
        return null;
    };
    // 1️⃣ If iconStr exists, try it first
    if (iconStr?.trim()) {
        const iconStrUrl = await tryFetch(iconStr, iconName || fallbackIcon);
        if (iconStrUrl) return iconStrUrl;
    }
    // 2️⃣ Try theme sources
    for (const type of themeList){
        const url = await tryFetch(type, iconName || fallbackIcon);
        if (url) return url;
    }
    // 3️⃣ fallback
    return makeUrl("ios-glyphs", size, fallbackIcon);
}


/***/ }),

/***/ 6414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ gql)
});

// EXTERNAL MODULE: ./node_modules/graphql-tag/main.js
var main = __webpack_require__(1137);
;// CONCATENATED MODULE: ./api/gql/mutation/login.ts

const LOGIN_MUTATION = main.gql`
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

const ABOUT_SECTION = main.gql`
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

const SHORT_DYN_DES = main.gql`
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

const EXPERIANCE_SECTION = main.gql`
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

const CONTACT_SECTION = main.gql`
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

const TECHNICAL_SKILLS = main.gql`
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

const PROJECTS = main.gql`
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

const FOOTER_SECTION_LINKS = main.gql`
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

const GET_ME = main.gql`
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
/* harmony default export */ const gql = (API);


/***/ }),

/***/ 4235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(4315);
;// CONCATENATED MODULE: ./src/sheard/navbar/RootNav.tsx

const RootNav = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "py-5 shadow-md z-[999] fixed w-full bg-light",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-nav mx-auto flex justify-between bg-light",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-xl font-bold text-neutral-800",
                            children: "ABDUL.JABBAR"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                })
            }),
            children
        ]
    });
};
/* harmony default export */ const navbar_RootNav = (RootNav);

// EXTERNAL MODULE: ./src/lib/apolloClient.ts
var apolloClient = __webpack_require__(2505);
// EXTERNAL MODULE: ./api/gql/index.ts + 11 modules
var gql = __webpack_require__(6414);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/components/home/ProjectIconLink.tsx
var ProjectIconLink = __webpack_require__(5090);
;// CONCATENATED MODULE: ./src/sheard/footer/RootFooter.tsx





const RootFooter = async ({ children })=>{
    // const [links, setLinks] = React.useState<TLink[]>([]);
    // React.useEffect(() => {
    //   fetch("/api/links.json")
    //     .then((res) => res.json())
    //     .then((data) => setLinks(data));
    // });
    let footerLinks = [];
    try {
        const data = await apolloClient/* default */.Z.request(gql/* default */.Z.Query.FOOTER_SECTION_LINKS);
        footerLinks = data?.footerLinks || [];
    } catch (err) {
        console.error("Failed to fetch footerLinks section:", err);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-16  bg-zinc-800",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "2xl:w-content container mx-auto flex justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-bold text-xl text-slate-300",
                            children: "Copyright \xa9 2025. All rights are reserved"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex gap-x-4",
                            children: footerLinks.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " rounded-full text-white  hover:scale-110  cursor-pointer p-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectIconLink/* default */.ZP, {
                                        tech: link,
                                        elementStyle: {
                                            isTitle: false,
                                            iconStyle: "!text-white !p-0",
                                            parentStyle: " !p-0 !m-0  "
                                        }
                                    })
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footer_RootFooter = (RootFooter); // 01918043284

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Abdul Jabbar - MERN Stack Developer",
    description: "Portfolio of Abdul Jabbar, MERN Stack Developer"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(navbar_RootNav, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(footer_RootFooter, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "landBody",
                        className: "bg-light",
                        children: children
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 5090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Abdullah\Desktop\portfolio2.0\src\components\home\ProjectIconLink.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);


/***/ }),

/***/ 2505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4462);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7060);


const clientServer = new graphql_request__WEBPACK_IMPORTED_MODULE_0__/* .GraphQLClient */ .g6(_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.BACKEND_GRAPHQL_ENDPOINT, {
    fetch: (url, options)=>fetch(url, {
            ...options,
            cache: "force-cache"
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientServer);


/***/ }),

/***/ 4315:
/***/ (() => {



/***/ })

};
;