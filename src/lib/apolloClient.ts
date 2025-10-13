import { GraphQLClient } from "graphql-request";
import CONFIG from "@/config";

const clientServer = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
  fetch: (url, options) =>
    fetch(url, {
      ...options,
      cache: "no-store", // 🚫 Next.js / Node fetch cache বন্ধ
      
    }),
});

export default clientServer;
