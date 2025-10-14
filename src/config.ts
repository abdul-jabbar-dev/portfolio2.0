 
const META = {
  OG_IMAGE: "https://res.cloudinary.com/dnkwv76h3/image/upload/fl_preserve_transparency/v1760386929/portfolio/meta-OG/abdulJabbarImg1.jpg?_s=public-apps",
}
 

const CONFIG={
  BACKEND_GRAPHQL_ENDPOINT:  (process.env.NODE_ENV === "development" ? process.env.PG_STRING : process.env.PG_STRING_PROD) || "http://localhost:8000/gql",
  META,
  STORAGE: {TOKEN_KEY: "token"},
}
console.log(CONFIG,process.env.NODE_ENV );
export default CONFIG;
