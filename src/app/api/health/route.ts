import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Coolify / Docker HEALTHCHECK — leicht, ohne DB-Abhängigkeit. */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "tracking-portal",
    version: process.env.npm_package_version ?? "0.1.0",
  });
}
