"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, LogOut, Plus, Save, Trash2 } from "lucide-react";
import type { SiteContent } from "@/lib/site-content";

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

const labels: Record<string, string> = {
  site: "Site settings", navigation: "Navigation", home: "Home page", pages: "Inner pages",
  services: "Services", projects: "Projects", experiences: "Experience", education: "Education",
};

function title(key: string) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase());
}

function blankCopy(value: JsonValue): JsonValue {
  if (typeof value === "string") return "";
  if (typeof value === "number") return 0;
  if (typeof value === "boolean") return false;
  if (Array.isArray(value)) return [];
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, blankCopy(v)]));
  return null;
}

function Field({ name, value, onChange }: { name: string; value: JsonValue; onChange: (value: JsonValue) => void }) {
  if (Array.isArray(value)) {
    return <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between"><h3 className="font-bold text-slate-800">{title(name)}</h3><button type="button" onClick={() => onChange([...value, value.length ? blankCopy(value[0]) : ""])} className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white"><Plus className="h-3.5 w-3.5" /> Add</button></div>
      <div className="space-y-4">{value.map((item, index) => <div key={index} className="relative rounded-xl border border-slate-200 bg-white p-4">
        <button type="button" aria-label="Remove item" onClick={() => onChange(value.filter((_, i) => i !== index))} className="absolute right-3 top-3 z-10 rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
        <Field name={`${title(name)} ${index + 1}`} value={item} onChange={next => onChange(value.map((current, i) => i === index ? next : current))} />
      </div>)}</div>
    </div>;
  }

  if (value && typeof value === "object") {
    return <fieldset className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"><legend className="px-2 text-sm font-extrabold text-slate-900">{title(name)}</legend><div className="grid gap-4 md:grid-cols-2">{Object.entries(value).map(([key, child]) => <div key={key} className={typeof child === "object" ? "md:col-span-2" : ""}><Field name={key} value={child} onChange={next => onChange({ ...value, [key]: next })} /></div>)}</div></fieldset>;
  }

  if (typeof value === "boolean") return <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"><input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} className="h-4 w-4" />{title(name)}</label>;

  const long = typeof value === "string" && (value.length > 90 || /description|paragraph|summary|text/i.test(name));
  return <label className="block text-sm font-semibold text-slate-700"><span className="mb-2 block">{title(name)}</span>{long ? <textarea rows={4} value={String(value ?? "")} onChange={e => onChange(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 font-normal leading-6 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" /> : <input type={typeof value === "number" ? "number" : "text"} value={String(value ?? "")} onChange={e => onChange(typeof value === "number" ? Number(e.target.value) : e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />}</label>;
}

export default function AdminDashboard({ initialContent }: { initialContent: SiteContent }) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [active, setActive] = useState<keyof SiteContent>("site");
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const sections = useMemo(() => Object.keys(content) as (keyof SiteContent)[], [content]);

  async function save() {
    setSaving(true); setStatus("");
    const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
    const result = await response.json();
    setStatus(response.ok ? `Saved and published · ${new Date(result.savedAt).toLocaleTimeString()}` : result.error || "Save failed");
    setSaving(false); if (response.ok) router.refresh();
  }

  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); router.replace("/admin/login"); router.refresh(); }

  return <main className="min-h-screen bg-slate-100 pb-20 text-slate-950">
    <header className="sticky top-[72px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-4 sm:px-8"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-700">Secure CMS</p><h1 className="text-xl font-extrabold">Portfolio dashboard</h1></div><div className="flex items-center gap-2"><a href="/" target="_blank" className="hidden items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold sm:inline-flex">View site <ExternalLink className="h-4 w-4" /></a><button onClick={logout} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold"><LogOut className="h-4 w-4" /> Logout</button><button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-extrabold text-slate-950 disabled:opacity-60"><Save className="h-4 w-4" /> {saving ? "Saving…" : "Save & publish"}</button></div></div></header>
    <div className="mx-auto grid max-w-[1500px] gap-6 px-5 py-7 sm:px-8 lg:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-3 lg:sticky lg:top-40">{sections.map(section => <button key={section} onClick={() => setActive(section)} className={`mb-1 w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition ${active === section ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{labels[String(section)] || title(String(section))}</button>)}</aside>
      <section><div className="mb-5 flex items-end justify-between"><div><h2 className="text-2xl font-extrabold">{labels[String(active)]}</h2><p className="mt-1 text-sm text-slate-500">Edit the fields below, then save to publish them.</p></div>{status && <p className={`text-sm font-bold ${status.startsWith("Saved") ? "text-emerald-600" : "text-red-600"}`}>{status}</p>}</div><Field name={String(active)} value={content[active] as unknown as JsonValue} onChange={value => setContent(current => ({ ...current, [active]: value }))} /></section>
    </div>
  </main>;
}
