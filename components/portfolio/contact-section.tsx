"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useSiteContent } from "@/components/site-content-provider";

export default function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  const { site, home: { contact } } = useSiteContent();
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(String(data.get("subject")));
      const body = encodeURIComponent(`Hi Asif,\n\n${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setSending(true);
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: data.get("name"), from_email: data.get("email"),
        subject: data.get("subject"), message: data.get("message"), to_email: site.email,
      }, publicKey);
      form.reset();
      toast.success("Message sent — thank you!", { description: "I’ll get back to you as soon as possible." });
    } catch {
      toast.error("The message couldn’t be sent.", { description: "Please email me directly instead." });
    } finally { setSending(false); }
  }

  return (
    <section id="contact" className="section-space relative overflow-hidden border-t border-border bg-card/35">
      <div className="absolute right-[-15%] top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div className={showHeading ? "" : "lg:pt-5"}>
            <p className="eyebrow">{contact.eyebrow}</p>
            {showHeading && <h2 className="display-title">{contact.title}<br /><span className="text-primary">{contact.accent}</span></h2>}
            <p className="body-copy mt-7 max-w-md">{contact.description}</p>
            <div className="mt-10 space-y-4 text-sm">
              <a href={`mailto:${site.email}`} className="focus-ring flex items-center gap-3 rounded transition hover:text-primary"><Mail className="h-5 w-5 text-primary" />{site.email}</a>
              <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-5 w-5 text-primary" />{site.location}</p>
              <p className="flex items-center gap-3 text-accent"><CheckCircle2 className="h-5 w-5" />{site.availability}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-border bg-card p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">Your name<input required name="name" autoComplete="name" placeholder="Jane Smith" className="focus-ring mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3.5 text-sm placeholder:text-muted-foreground/60" /></label>
              <label className="text-sm font-medium">Work email<input required name="email" type="email" autoComplete="email" placeholder="jane@company.com" className="focus-ring mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3.5 text-sm placeholder:text-muted-foreground/60" /></label>
            </div>
            <label className="mt-5 block text-sm font-medium">What can I help with?<input required name="subject" placeholder="A product website, dashboard, frontend build…" className="focus-ring mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3.5 text-sm placeholder:text-muted-foreground/60" /></label>
            <label className="mt-5 block text-sm font-medium">A few project details<textarea required name="message" rows={5} placeholder="Goals, timeline, current challenges and any useful links…" className="focus-ring mt-2 w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3.5 text-sm leading-6 placeholder:text-muted-foreground/60" /></label>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-muted-foreground">No spam. Your details are only used to reply.</p>
              <button disabled={sending} className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:brightness-105 disabled:opacity-60">{sending ? "Sending…" : "Send inquiry"}<ArrowUpRight className="h-4 w-4" /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
