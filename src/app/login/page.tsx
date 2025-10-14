"use client";
import clientServer from "@/lib/apolloClient";
import React, { useState } from "react";
import API from "../../../api/gql";
import Loader from "@/sheard/components/Loader";
import { setToken } from "@/utils/storage";

const Page = () => {
    const [selected, setSelected] = useState<"me" | "notMe">("notMe");
    const [data, setData] = useState("");
    const [inputError, setInputError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitData = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setLoginError('');
        setInputError('');
        if (!data) {
            setInputError(`Please enter your ${selected === "me" ? "email" : "password"}`);
            setLoading(false);
            return;
        }
        const loginData = { type: selected, credential: data };

        try {
            const res: any = await clientServer.request(API.Mutation.LOGIN_MUTATION, loginData);
            if (res?.login?.token && typeof res?.login?.token === "string") {
                setToken(res?.login?.token);
                setLoginError("");
            } else {
                setLoginError("login Failed");
            }
        } catch (error: any) {
            setLoginError(error?.response?.errors[0].message || error?.message || error || "login Failed");
        }
        setLoading(false);

    };

    return (
        <div className="2xl:xl-content container flex flex-col justify-center mx-auto mb-32">
            <div className="">
                <div className="flex h-screen flex-col items-center justify-center">
                    <div className="max-h-auto mx-auto max-w-xl">
                        {/* Title */}
                        <div className="mb-8 space-y-3 text-center">
                            <p className="text-2xl font-semibold">Login</p>
                        </div>

                        {/* Select Option */}
                        <div className="space-y-4 mb-6 w-[300px]">
                            <p className="text-sm font-medium text-center text-neutral-500">
                                Select an option
                            </p>

                            {/* It's Me */}
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="options"
                                    id="option1-checkbox"
                                    value="me"
                                    checked={selected === "me"}
                                    onChange={() => setSelected("me")}
                                    className="hidden peer"
                                />
                                <label
                                    htmlFor="option1-checkbox"
                                    className={(selected === 'me' ? " bg-blue-200/50 border-blue-400" : " ") + "  inline-flex items-center justify-between w-full p-2 bg-white border-2 rounded-lg cursor-pointer group border-neutral-200/70 text-neutral-600 peer-checked:border-blue-400 peer-checked:text-neutral-900 peer-checked:bg-blue-200/50 hover:text-neutral-900 hover:border-neutral-300"}
                                >
                                    <div className="flex items-center space-x-5">
                                        <svg
                                            className="w-14 h-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 256"
                                        >
                                            <g fill="currentColor">
                                                <path
                                                    d="M224 56v122.06l-39.72-39.72a8 8 0 0 0-11.31 0L147.31 164l-49.65-49.66a8 8 0 0 0-11.32 0L32 168.69V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
                                                    opacity="0.2"
                                                />
                                                <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v102.75l-26.07-26.06a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L40 149.37V56ZM40 172l52-52l80 80H40Zm176 28h-21.37l-36-36l20-20L216 181.38zm-72-100a12 12 0 1 1 12 12a12 12 0 0 1-12-12" />
                                            </g>
                                        </svg>
                                        <div className="flex flex-col justify-start">
                                            <div className="w-full text-lg font-semibold">It’s Me</div>
                                            <div className="w-full text-sm opacity-60">
                                                View the admin panel
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            {/* Not Me */}
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="options"
                                    id="option2-checkbox"
                                    value="notMe"

                                    checked={selected === "notMe"}
                                    onChange={() => setSelected("notMe")}
                                    className="hidden peer"
                                />
                                <label
                                    htmlFor="option2-checkbox"
                                    className={(selected === 'notMe' ? " bg-blue-200/50 border-blue-400" : " ") + "  inline-flex items-center justify-between w-full p-2 bg-white border-2 rounded-lg cursor-pointer group border-neutral-200/70 text-neutral-600 peer-checked:border-blue-400 peer-checked:text-neutral-900 peer-checked:bg-blue-200/50 hover:text-neutral-900 hover:border-neutral-300"}
                                >
                                    <div className="flex items-center space-x-5">
                                        <svg
                                            className="w-14 h-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 256"
                                        >
                                            <g fill="currentColor">
                                                <path
                                                    d="M224 56v122.06l-39.72-39.72a8 8 0 0 0-11.31 0L147.31 164l-49.65-49.66a8 8 0 0 0-11.32 0L32 168.69V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
                                                    opacity="0.2"
                                                />
                                                <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v102.75l-26.07-26.06a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L40 149.37V56ZM40 172l52-52l80 80H40Zm176 28h-21.37l-36-36l20-20L216 181.38zm-72-100a12 12 0 1 1 12 12a12 12 0 0 1-12-12" />
                                            </g>
                                        </svg>
                                        <div className="flex flex-col justify-start">
                                            <div className="w-full text-lg font-semibold">Not Me</div>
                                            <div className="w-full text-sm opacity-60">
                                                Share the resources
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Login Form */}
                        <form className="w-full" onSubmit={e => submitData(e)}>
                            <div className="mb-10 space-y-3">
                                {selected === "me" && (
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="password"
                                            className="text-sm font-medium leading-none"
                                        >
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            onChange={(e) => setData(e.target.value)}
                                            type="password"
                                            placeholder="••••••••"
                                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                        />
                                        {selected === "me" && inputError && (
                                            <p className="text-red-500 text-sm">{inputError}</p>
                                        )}
                                    </div>
                                )}

                                {selected === "notMe" && (
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium leading-none"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            onChange={(e) => setData(e.target.value)}
                                            type="email"
                                            placeholder="mail@example.com"
                                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                        />
                                        {selected === "notMe" && inputError && (
                                            <p className="text-red-500 text-sm">{inputError}</p>
                                        )}
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    >
                                        {loading ? <Loader /> : "Enter"}
                                    </button>
                                    {loginError && (
                                        <p className="text-red-500 text-sm">{loginError}</p>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
