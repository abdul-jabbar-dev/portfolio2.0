import { GraphQLClient } from "graphql-request";
import CONFIG from "@/config";

const clientServer = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
  fetch: async (url, options) => {
    const headers = new Headers(options?.headers);
    headers.set("Content-Type", "application/json");
    let token: string | null = null;
    try {
      if (typeof window !== "undefined") {
        token = (await window.cookieStore.get("token"))?.value || localStorage.getItem("token")
      } else {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        token = cookieStore.get("token")?.value || null;
        console.log("Server Component - token from cookies:", token ? "Found" : "Null");
      }

      // If token wasn't found in cookies, check if it was manually passed in options
      if (!token && headers.has("Cookie")) {
        const cookieStr = headers.get("Cookie") || "";
        const match = cookieStr.match(/token=([^;]+)/);
        if (match) token = match[1];
      }
      if (!token && headers.has("Authorization")) {
        token = headers.get("Authorization")?.split("Bearer ")[1] || null;
      }

      if (token) {
        headers.set("Cookie", `token=${token}`); 
        headers.set("Authorization", `Bearer ${token}`); 
      }
    } catch (error) {
      console.log("Error reading cookies in server component:", error);
    }

    return fetch(url, {
      ...options,
      cache: "no-store",
      headers,
      credentials: "include",
    });
  },
});

export default clientServer;