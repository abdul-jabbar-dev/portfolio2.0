import { NextResponse } from "next/server";
import clientServer from "@/lib/apolloClient";
import API from "@/api/gql";

export async function GET() {
  try {
    const data = await clientServer.request(API.Query.FOOTER_SECTION_LINKS);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stack: error.stack }, { status: 500 });
  }
}
