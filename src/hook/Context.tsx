"use client";
import { createContext, useContext, useState } from "react";
import { User } from "@/types/response/login";
const Context = createContext<{ user: User | null; setUser: (user: User | null) => void } | null>(null);
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
};

export const useMyContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useMyContext must be used within a ContextProvider");
    }
    return context;
};