import CONFIG from "@/config";

export const setToken = (token: string) => {
    sessionStorage.setItem(CONFIG.STORAGE.TOKEN_KEY, token);
    document.cookie = `${CONFIG.STORAGE.TOKEN_KEY}=${token}; path=/;`;
}
export const getToken = () => {
    return sessionStorage.getItem(CONFIG.STORAGE.TOKEN_KEY);
}