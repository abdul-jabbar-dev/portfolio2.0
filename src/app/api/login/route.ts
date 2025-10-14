
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    // backend call
    console.log(email, password);
    const token = "backend_generated_token";

    const res = NextResponse.json({ success: true });
    res.cookies.set("token", token, {
        httpOnly: true,
        path: "/", // very important
        sameSite: "lax",
        maxAge: 60 * 60, // 1 hour
    });

    return res;
}
