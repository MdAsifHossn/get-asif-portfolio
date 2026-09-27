import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, createAdminToken, verifyCredentials } from "@/lib/admin-auth";

const attempts = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  const ip = request.ip || request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const now = Date.now();
  const record = attempts.get(ip);
  if (record && record.resetAt > now && record.count >= 5) {
    return NextResponse.json({ error: "Too many attempts. Try again in 15 minutes." }, { status: 429 });
  }

  const body = await request.json().catch(() => null) as { username?: string; password?: string } | null;
  const valid = !!body && await verifyCredentials(body.username || "", body.password || "");
  if (!valid) {
    const current = record && record.resetAt > now ? record : { count: 0, resetAt: now + 15 * 60_000 };
    current.count += 1;
    attempts.set(ip, current);
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  attempts.delete(ip);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, await createAdminToken(), {
    httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production",
    path: "/", maxAge: 8 * 60 * 60,
  });
  return response;
}
