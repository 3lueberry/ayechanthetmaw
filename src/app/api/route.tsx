import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:5001/getDB", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
