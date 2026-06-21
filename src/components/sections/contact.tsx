"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const methods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "GitHub", value: profile.socials.githubHandle, href: profile.socials.github, icon: GithubIcon },
  { label: "LinkedIn", value: profile.socials.linkedinHandle, href: profile.socials.linkedin, icon: LinkedinIcon },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto w-full max-w-6xl container-px">
        <div className="ring-glow glass relative overflow-hidden rounded-3xl p-7 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.3),transparent_70%)] blur-3xl" />

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* CTA + methods */}
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
                  <span className="eyebrow">Contact</span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.75rem]">
                  Let&apos;s build something
                  <br />
                  <span className="text-gradient">amazing together</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md leading-relaxed text-muted">
                  Have a product to ship or a payment flow to untangle? I&apos;m open
                  to consulting and full-time mobile roles. Drop a line — I reply fast.
                </p>
              </Reveal>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {methods.map((m, i) => (
                  <Reveal key={m.label} delay={0.15 + i * 0.05}>
                    <a
                      href={m.href}
                      target={m.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white/[0.03] p-3.5 transition-colors hover:border-primary/40 hover:bg-white/[0.05]"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(6,182,212,0.12))] text-accent">
                        <m.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-faint">
                          {m.label}
                        </span>
                        <span className="block truncate text-sm text-foreground">{m.value}</span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Form */}
            <Reveal delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="glass-strong rounded-2xl p-6 sm:p-8"
              >
                <div className="space-y-5">
                  <Field
                    label="Name"
                    id="name"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    placeholder="Enter your name"
                    required
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    placeholder="Enter your email"
                    required
                  />
                  <div className="group">
                    <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-faint">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project…"
                      className="w-full resize-none rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-primary/60 focus:bg-white/[0.04]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" variant="primary">
                    <AnimatePresence mode="wait" initial={false}>
                      {sent ? (
                        <motion.span
                          key="sent"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="flex items-center gap-2"
                        >
                          <Check className="h-4 w-4" /> Opening your mail client…
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="flex items-center gap-2"
                        >
                          Send message <Send className="h-4 w-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                  <p className="flex items-center justify-center gap-1.5 text-center text-xs text-faint">
                    Prefer email? <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-0.5 text-accent hover:underline">Reach me directly <ArrowRight className="h-3 w-3" /></a>
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-widest text-faint">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-primary/60 focus:bg-white/[0.04]"
      />
    </div>
  );
}
