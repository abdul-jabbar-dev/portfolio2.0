
const META = {
  OG_IMAGE: "https://res.cloudinary.com/dnkwv76h3/image/upload/fl_preserve_transparency/v1760386929/portfolio/meta-OG/abdulJabbarImg1.jpg?_s=public-apps",
}
const isDev = process.env.NODE_ENV !== "production";

const rawEndpoint = isDev
  ? process.env.PG_STRING ?? "http://localhost:8000"
  : process.env.PG_STRING_PROD ?? "https://portfolio-api-fhnyca9dqtjb.abdul-jabbar-dev.deno.net";

const BACKEND_ENDPOINT: string = rawEndpoint.endsWith('/gql') ? rawEndpoint.slice(0, -4) : rawEndpoint;
const BACKEND_GRAPHQL_ENDPOINT: string = BACKEND_ENDPOINT + "/gql";

const CONFIG = {
  BACKEND_GRAPHQL_ENDPOINT,
  BACKEND_ENDPOINT,
  META,
  STORAGE: { TOKEN_KEY: "token" },
}
export default CONFIG;
