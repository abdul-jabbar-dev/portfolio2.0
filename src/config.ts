
const META = {
  OG_IMAGE: "https://res.cloudinary.com/dnkwv76h3/image/upload/fl_preserve_transparency/v1760386929/portfolio/meta-OG/abdulJabbarImg1.jpg?_s=public-apps",
}

const BACKEND_GRAPHQL_ENDPOINT: string =
  process.env.NODE_ENV === "development"
    ? process.env.PG_STRING ?? "http://localhost:8000/gql"
    : process.env.PG_STRING_PROD ?? "https://abduljabbar-portfolio.deno.dev/gql";
const CONFIG = {
  BACKEND_GRAPHQL_ENDPOINT,
  META,
  STORAGE: { TOKEN_KEY: "token" },
}
console.log(CONFIG, process.env);
export default CONFIG;
