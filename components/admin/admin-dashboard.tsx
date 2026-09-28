"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BriefcaseBusiness, Check, ChevronLeft, ChevronRight, ExternalLink, FileText,
  FolderKanban, GraduationCap, Home, LayoutDashboard, LogOut, Menu, Navigation,
  Plus, Save, Settings2, Trash2, UserRound, Wrench, X,
} from "lucide-react";
import type { SiteContent } from "@/lib/site-content";

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
type SectionKey = keyof SiteContent;

const sectionMeta: Record<string, { label: string; description: string; icon: typeof Home }> = {
  site: { label: "Site settings", description: "Identity, contact details and social links", icon: Settings2 },
  navigation: { label: "Navigation", description: "Manage the links in your main menu", icon: Navigation },
  home: { label: "Home page", description: "Hero, introduction, skills and contact sections", icon: Home },
  pages: { label: "Inner pages", description: "About, work, services and contact page headers", icon: FileText },
  services: { label: "Services", description: "Create and update service offerings", icon: Wrench },
  projects: { label: "Projects", description: "Manage portfolio projects and links", icon: FolderKanban },
  experiences: { label: "Experience", description: "Your employment history and responsibilities", icon: BriefcaseBusiness },
  education: { label: "Education", description: "Degrees, institutions and results", icon: GraduationCap },
};

function title(key: string) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, character => character.toUpperCase());
}

function blankCopy(value: JsonValue): JsonValue {
  if (typeof value === "string") return "";
  if (typeof value === "number") return 0;
  if (typeof value === "boolean") return false;
  if (Array.isArray(value)) return [];
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, blankCopy(child)]));
  return null;
}

const controlClass = "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-normal text-slate-950 caret-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100";

function Field({ name, value, onChange, depth = 0 }: { name: string; value: JsonValue; onChange: (value: JsonValue) => void; depth?: number }) {
  if (Array.isArray(value)) {
    return <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-3.5 sm:px-5">
        <div><h3 className="text-sm font-semibold text-slate-900">{title(name)}</h3><p className="mt-0.5 text-xs text-slate-500">{value.length} {value.length === 1 ? "item" : "items"}</p></div>
        <button type="button" onClick={() => onChange([...value, value.length ? blankCopy(value[0]) : ""])} className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"><Plus className="h-4 w-4" /> Add item</button>
      </div>
      <div className="space-y-4 bg-slate-50/40 p-3 sm:p-5">{value.length === 0 && <p className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">No items yet. Select “Add item” to create one.</p>}{value.map((item, index) => <div key={index} className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">{title(name)} {index + 1}</p><button type="button" aria-label="Remove item" onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))} className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div>
        <Field name="details" value={item} depth={depth + 1} onChange={next => onChange(value.map((current, itemIndex) => itemIndex === index ? next : current))} />
      </div>)}</div>
    </section>;
  }

  if (value && typeof value === "object") {
    const fields = Object.entries(value);
    const content = <div className="grid gap-5 md:grid-cols-2">{fields.map(([key, child]) => <div key={key} className={typeof child === "object" ? "md:col-span-2" : ""}><Field name={key} value={child} depth={depth + 1} onChange={next => onChange({ ...value, [key]: next })} /></div>)}</div>;
    if (name === "details") return content;
    return <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"><div className="mb-5 border-b border-slate-100 pb-4"><h3 className="font-semibold text-slate-950">{title(name)}</h3><p className="mt-1 text-xs text-slate-500">Update the information in this section.</p></div>{content}</section>;
  }

  if (typeof value === "boolean") return <label className="flex min-h-11 cursor-pointer items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 text-sm font-medium text-slate-800 shadow-sm"><span>{title(name)}</span><input type="checkbox" checked={value} onChange={event => onChange(event.target.checked)} className="h-4 w-4 accent-cyan-600" /></label>;

  const long = typeof value === "string" && (value.length > 90 || /description|paragraph|summary|text/i.test(name));
  return <label className="block text-sm font-medium text-slate-800"><span className="mb-2 block">{title(name)}</span>{long ? <textarea rows={4} value={String(value ?? "")} onChange={event => onChange(event.target.value)} className={`${controlClass} resize-y leading-6`} /> : <input type={typeof value === "number" ? "number" : "text"} value={String(value ?? "")} onChange={event => onChange(typeof value === "number" ? Number(event.target.value) : event.target.value)} className={controlClass} />}</label>;
}

export default function AdminDashboard({ initialContent }: { initialContent: SiteContent }) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [active, setActive] = useState<SectionKey>("site");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const sections = useMemo(() => Object.keys(content) as SectionKey[], [content]);
  const meta = sectionMeta[String(active)] || { label: title(String(active)), description: "Edit and publish this section", icon: FileText };

  function chooseSection(section: SectionKey) { setActive(section); setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }

  async function save() {
    setSaving(true); setStatus("");
    const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
    const result = await response.json();
    setStatus(response.ok ? `Published at ${new Date(result.savedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : result.error || "Save failed");
    setSaving(false); if (response.ok) router.refresh();
  }

  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); router.replace("/admin/login"); router.refresh(); }

  const sidebar = <aside className={`flex h-full flex-col border-r border-slate-800 bg-slate-950 text-slate-200 transition-[width] duration-200 ${collapsed ? "w-[76px]" : "w-[272px]"}`}>
    <div className="flex h-16 items-center gap-3 border-b border-slate-800 px-4"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cyan-400 font-black text-slate-950">A</div>{!collapsed && <div className="min-w-0"><p className="truncate text-sm font-bold text-white">Asif Portfolio</p><p className="truncate text-xs text-slate-400">Content management</p></div>}</div>
    <div className="flex-1 overflow-y-auto p-3">{!collapsed && <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">Website content</p>}<nav className="space-y-1">{sections.map(section => { const item = sectionMeta[String(section)] || { label: title(String(section)), icon: FileText }; const Icon = item.icon; return <button key={section} onClick={() => chooseSection(section)} title={collapsed ? item.label : undefined} className={`flex h-11 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition ${active === section ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}><Icon className="h-[18px] w-[18px] shrink-0" />{!collapsed && <span className="truncate">{item.label}</span>}</button>; })}</nav></div>
    <div className="border-t border-slate-800 p-3"><div className={`mb-2 flex items-center gap-3 rounded-lg bg-slate-900 p-2.5 ${collapsed ? "justify-center" : ""}`}><div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-700"><UserRound className="h-4 w-4" /></div>{!collapsed && <div className="min-w-0"><p className="truncate text-xs font-semibold text-white">Administrator</p><p className="truncate text-[11px] text-slate-400">Secure session</p></div>}</div><button onClick={logout} title={collapsed ? "Logout" : undefined} className={`flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm text-slate-400 transition hover:bg-red-500/10 hover:text-red-300 ${collapsed ? "justify-center" : ""}`}><LogOut className="h-4 w-4 shrink-0" />{!collapsed && "Logout"}</button></div>
  </aside>;

  return <main className="min-h-screen bg-slate-100 font-sans text-slate-950">
    <div className="fixed inset-y-0 left-0 z-40 hidden lg:block">{sidebar}<button onClick={() => setCollapsed(value => !value)} aria-label="Toggle sidebar" className="absolute -right-3 top-20 grid h-7 w-7 place-items-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-md">{collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}</button></div>
    {mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} aria-label="Close menu" /><div className="relative h-full w-[280px]">{sidebar}<button onClick={() => setMobileOpen(false)} className="absolute right-3 top-4 grid h-8 w-8 place-items-center rounded-lg bg-slate-800"><X className="h-4 w-4" /></button></div></div>}

    <div className={`min-h-screen transition-[padding] duration-200 ${collapsed ? "lg:pl-[76px]" : "lg:pl-[272px]"}`}>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
        <div className="flex items-center gap-3"><button onClick={() => setMobileOpen(true)} className="grid h-9 w-9 place-items-center rounded-lg border border-slate-300 lg:hidden" aria-label="Open menu"><Menu className="h-4 w-4" /></button><div className="flex items-center gap-2 text-sm"><LayoutDashboard className="h-4 w-4 text-slate-400" /><span className="hidden text-slate-500 sm:inline">Dashboard</span><span className="hidden text-slate-300 sm:inline">/</span><span className="font-semibold text-slate-900">{meta.label}</span></div></div>
        <div className="flex items-center gap-2">{status && <span className={`hidden items-center gap-1.5 text-xs font-semibold sm:flex ${status.startsWith("Published") ? "text-emerald-700" : "text-red-600"}`}>{status.startsWith("Published") && <Check className="h-4 w-4" />}{status}</span>}<a href="/" target="_blank" className="hidden h-9 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 md:inline-flex">View site <ExternalLink className="h-3.5 w-3.5" /></a><button onClick={save} disabled={saving} className="inline-flex h-9 items-center gap-2 rounded-lg bg-slate-950 px-3.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:opacity-60"><Save className="h-4 w-4" />{saving ? "Saving…" : "Save & publish"}</button></div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-cyan-700"><meta.icon className="h-4 w-4" /> Content editor</div><h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{meta.label}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{meta.description}. Changes remain private until you select “Save & publish”.</p></div>
        {status && <div className={`mb-5 flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium sm:hidden ${status.startsWith("Published") ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"}`}>{status.startsWith("Published") && <Check className="h-4 w-4" />}{status}</div>}
        <Field name={String(active)} value={content[active] as unknown as JsonValue} onChange={value => setContent(current => ({ ...current, [active]: value }))} />
      </div>
    </div>
  </main>;
}
