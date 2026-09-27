"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    const data = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: data.get("username"), password: data.get("password") }) });
    const result = await response.json();
    if (!response.ok) { setError(result.error || "Login failed."); setLoading(false); return; }
    router.replace("/admin"); router.refresh();
  }

  return <form onSubmit={submit} className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/[.06] p-8 shadow-2xl backdrop-blur">
    <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300"><LockKeyhole /></div>
    <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Private workspace</p>
    <h1 className="mt-3 text-3xl font-bold">Portfolio admin</h1>
    <p className="mt-3 text-sm leading-6 text-slate-400">Sign in to edit and publish your website content.</p>
    <label className="mt-8 block text-sm font-semibold">Username<input name="username" required autoComplete="username" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400" /></label>
    <label className="mt-5 block text-sm font-semibold">Password<input name="password" required type="password" autoComplete="current-password" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400" /></label>
    {error && <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p>}
    <button disabled={loading} className="mt-7 w-full rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 disabled:opacity-60">{loading ? "Signing in…" : "Sign in securely"}</button>
  </form>;
}
