import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://file.io/?search=blank", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return NextResponse.json({ data });
  } catch (e: any) {
    return NextResponse.json({ msg: e.message });
  }
}
