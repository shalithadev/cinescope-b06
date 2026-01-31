import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from the CineScope API!",
    success: true,
  });
}
