
const META = {
  OG_IMAGE: "https://res.cloudinary.com/dnkwv76h3/image/upload/fl_preserve_transparency/v1760386929/portfolio/meta-OG/abdulJabbarImg1.jpg?_s=public-apps",
};
 

const BACKEND_ENDPOINT: string = "https://portfolio-server-rtf8nbjayvnt.abdul-jabbar-dev.deno.net";
const BACKEND_GRAPHQL_ENDPOINT: string = BACKEND_ENDPOINT + "/gql";

const CONFIG = {
  BACKEND_GRAPHQL_ENDPOINT,
  BACKEND_ENDPOINT,
  META,
  STORAGE: { TOKEN_KEY: "token" },
}
export default CONFIG;
