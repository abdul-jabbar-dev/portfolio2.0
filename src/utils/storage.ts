import CONFIG from "@/config";

export const setToken = (token: string) => {
    document.cookie = `${CONFIG.STORAGE.TOKEN_KEY}=${token}; path=/; max-age=${60 * 60 * 24 * 7};`;
}
export const getToken = () => {
    return document.cookie.split(";").map(c => c.trim()).find((cookie) => cookie.startsWith(`${CONFIG.STORAGE.TOKEN_KEY}=`))?.split("=")[1];
}