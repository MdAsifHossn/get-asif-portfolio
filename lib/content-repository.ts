import { getDatabase } from "@/lib/mongodb";
import { defaultSiteContent, SiteContent } from "@/lib/site-content";

const DOCUMENT_ID = "main";

function mergeDefaults<T>(defaults: T, saved: unknown): T {
  if (Array.isArray(defaults)) return (Array.isArray(saved) ? saved : defaults) as T;
  if (defaults && typeof defaults === "object") {
    const source = saved && typeof saved === "object" ? saved as Record<string, unknown> : {};
    return Object.fromEntries(Object.entries(defaults as Record<string, unknown>).map(([key, value]) => [key, mergeDefaults(value, source[key])])) as T;
  }
  return (saved === undefined || saved === null ? defaults : saved) as T;
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const db = await getDatabase();
    const document = await db.collection("siteContent").findOne({ _id: DOCUMENT_ID as never });
    if (!document?.content) return defaultSiteContent;
    return mergeDefaults(defaultSiteContent, document.content) as SiteContent;
  } catch (error) {
    console.error("Could not load CMS content; using defaults.", error);
    return defaultSiteContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  const db = await getDatabase();
  await db.collection("siteContent").updateOne(
    { _id: DOCUMENT_ID as never },
    { $set: { content, updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } },
    { upsert: true },
  );
}
