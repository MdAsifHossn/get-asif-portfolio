import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifyAdminToken } from "@/lib/admin-auth";
import { getSiteContent, saveSiteContent } from "@/lib/content-repository";
import type { SiteContent } from "@/lib/site-content";

async function authorized() {
  return verifyAdminToken(cookies().get(ADMIN_COOKIE)?.value);
}

export async function GET() {
  if (!await authorized()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await getSiteContent());
}

export async function PUT(request: NextRequest) {
  if (!await authorized()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 1_000_000) return NextResponse.json({ error: "Content is too large." }, { status: 413 });
  const content = await request.json().catch(() => null) as SiteContent | null;
  if (!content || typeof content !== "object" || !content.site || !content.home || !content.pages) {
    return NextResponse.json({ error: "Invalid content structure." }, { status: 400 });
  }
  await saveSiteContent(content);
  return NextResponse.json({ ok: true, savedAt: new Date().toISOString() });
}
