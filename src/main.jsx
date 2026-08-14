import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, CheckCircle2, Code2, Globe2, Menu, Network,
  Phone, Mail, MapPin, ShieldCheck, X, ChevronRight
} from "lucide-react";
import "./index.css";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Custom business and education management software designed around your workflow.",
    bullets: ["Web-based applications", "Dashboard & reporting", "Automation & integrations"]
  },
  {
    icon: Globe2,
    title: "Web Development",
    text: "Fast, responsive and professional websites that build trust and turn visitors into customers.",
    bullets: ["Corporate websites", "School & institution websites", "Modern responsive UI"]
  },
  {
    icon: Network,
    title: "Networking Solution",
    text: "Reliable network planning, setup and maintenance for offices and educational institutions.",
    bullets: ["LAN/Wi-Fi setup", "Router & switch configuration", "Network troubleshooting"]
  },
  {
    icon: ShieldCheck,
    title: "CCTV Solution",
    text: "Complete surveillance solutions for schools, offices, shops and other organizations.",
    bullets: ["IP & analog CCTV", "NVR/DVR setup", "Remote mobile monitoring"]
  }
];
// 1
function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <div className="leading-none">
        <div className="text-3xl font-black tracking-tight text-wb-navy">
          Web<span className="text-wb-green">Bangla</span>
        </div>
        <div className="mt-1 text-right text-[11px] font-semibold tracking-[.28em] text-wb-ink">
          TECHNOLOGIES
        </div>
      </div>
    </a>
  );
}
// 2
function App() {
  const [open, setOpen] = useState(false);

  const nav = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Why Us", "#why-us"],
    ["Contact", "#contact"]
  ];

  return (
    <div data-theme="webbangla" className="min-h-screen bg-white text-wb-ink">
      <div className="bg-wb-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span>www.webbangla.com.bd</span>
            <span>webbanglatechnologies@gmail.com</span>
          </div>
          <a href="tel:01843139511" className="font-semibold hover:text-wb-gold">01843139511</a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-wb-green">
                {label}
              </a>
            ))}
            <a href="#contact" className="btn btn-sm border-0 bg-wb-navy px-5 text-white hover:bg-wb-blue">
              Get Started
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="btn btn-square btn-ghost md:hidden" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t bg-white px-5 py-4 md:hidden">
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold">
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-wb-soft">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-wb-green/10 blur-3xl" />
          <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-wb-blue/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-wb-green/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-wb-green shadow-sm">
                Technology • Trust • Growth
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-wb-navy sm:text-6xl">
                Smart Technology
                <span className="block text-wb-green">for a Smarter Future.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                WebBangla Technologies delivers practical digital solutions for businesses,
                schools and organizations — from software and websites to networking and CCTV.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="btn border-0 bg-wb-navy px-6 text-white hover:bg-wb-blue">
                  Explore Services <ArrowRight size={18} />
                </a>
                <a href="#contact" className="btn btn-outline border-wb-navy text-wb-navy hover:bg-wb-navy hover:text-white">
                  Talk to Us
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-wb-green" /> Professional Service</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-wb-green" /> Reliable Support</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-wb-green/20 via-transparent to-wb-blue/20 blur-xl" />
              <div className="relative rounded-[2rem] border border-white bg-white p-7 shadow-soft">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-wb-green">WEBBANGLA</p>
                    <h3 className="mt-1 text-2xl font-black text-wb-navy">Digital Solutions Hub</h3>
                  </div>
                  <div className="rounded-2xl bg-wb-navy p-4 text-white">
                    <Code2 size={30} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.title} className="rounded-2xl bg-wb-soft p-5">
                        <Icon className="text-wb-green" size={25} />
                        <h4 className="mt-3 text-sm font-bold text-wb-navy">{s.title}</h4>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 rounded-2xl bg-wb-navy p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/60">Our Promise</p>
                  <p className="mt-2 font-semibold">Technology that works for your organization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[.2em] text-wb-green">About WebBangla</p>
              <h2 className="mt-3 text-4xl font-black text-wb-navy">Technology built around your needs.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                WebBangla Technologies is a technology service company focused on helping
                organizations simplify operations, improve communication and build a stronger digital presence.
              </p>
              <p>
                We combine software, web, networking and security solutions so clients can work
                with one dependable technology partner instead of managing multiple vendors.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-wb-soft py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-bold uppercase tracking-[.2em] text-wb-green">Our Services</p>
              <h2 className="mt-3 text-4xl font-black text-wb-navy">Everything you need to go digital.</h2>
              <p className="mt-4 text-slate-600">Professional solutions for day-to-day operations, online presence and security.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <article key={s.title} className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="flex items-start justify-between">
                      <div className="rounded-2xl bg-wb-green/10 p-4 text-wb-green">
                        <Icon size={28} />
                      </div>
                      <ChevronRight className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-wb-green" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black text-wb-navy">{s.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{s.text}</p>
                    <ul className="mt-5 space-y-2 text-sm font-medium text-slate-600">
                      {s.bullets.map((b) => <li key={b} className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 text-wb-green" />{b}</li>)}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why-us" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] bg-wb-navy p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-bold uppercase tracking-[.2em] text-wb-gold">Why Choose Us</p>
                <h2 className="mt-3 text-4xl font-black">One partner. Multiple technology solutions.</h2>
                <p className="mt-5 max-w-xl leading-7 text-white/70">
                  We focus on dependable implementation, clean design and responsive support — so your technology investment keeps delivering value.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Modern & responsive design",
                  "Practical business solutions",
                  "Scalable technology",
                  "Friendly technical support",
                  "Secure implementation",
                  "Long-term partnership"
                ].map((x) => (
                  <div key={x} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                    <CheckCircle2 className="shrink-0 text-wb-gold" size={20} />
                    <span className="text-sm font-semibold">{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-wb-soft py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="font-bold uppercase tracking-[.2em] text-wb-green">Contact Us</p>
                <h2 className="mt-3 text-4xl font-black text-wb-navy">Let’s build something useful.</h2>
                <p className="mt-5 max-w-xl leading-7 text-slate-600">
                  Tell us what your organization needs. We can discuss the right software, website, network or CCTV solution for your project.
                </p>
                <div className="mt-8 space-y-5">
                  <a href="tel:01843139511" className="flex items-center gap-4">
                    <span className="rounded-xl bg-white p-3 text-wb-green shadow-sm"><Phone size={20} /></span>
                    <span><b className="block text-wb-navy">Phone</b><span className="text-slate-600">01843139511</span></span>
                  </a>
                  <a href="mailto:webbanglatechnologies@gmail.com" className="flex items-center gap-4">
                    <span className="rounded-xl bg-white p-3 text-wb-green shadow-sm"><Mail size={20} /></span>
                    <span><b className="block text-wb-navy">Email</b><span className="text-slate-600">webbanglatechnologies@gmail.com</span></span>
                  </a>
                  <div className="flex items-center gap-4">
                    <span className="rounded-xl bg-white p-3 text-wb-green shadow-sm"><MapPin size={20} /></span>
                    <span><b className="block text-wb-navy">Office</b><span className="text-slate-600">21/A Textile Area, Nasirabad, Chattogram-4000, Bangladesh</span></span>
                  </div>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white p-7 shadow-soft">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="mb-2 text-sm font-bold">Your Name</span>
                    <input className="input input-bordered" placeholder="Name" />
                  </label>
                  <label className="form-control">
                    <span className="mb-2 text-sm font-bold">Phone</span>
                    <input className="input input-bordered" placeholder="01XXXXXXXXX" />
                  </label>
                </div>
                <label className="form-control mt-4">
                  <span className="mb-2 text-sm font-bold">Service</span>
                  <select className="select select-bordered">
                    <option>Software Development</option>
                    <option>Web Development</option>
                    <option>Networking Solution</option>
                    <option>CCTV Solution</option>
                  </select>
                </label>
                <label className="form-control mt-4">
                  <span className="mb-2 text-sm font-bold">Message</span>
                  <textarea className="textarea textarea-bordered min-h-32" placeholder="Tell us about your project..." />
                </label>
                <button className="btn mt-5 w-full border-0 bg-wb-navy text-white hover:bg-wb-blue">
                  Send Inquiry <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-wb-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="text-xl font-black">Web<span className="text-wb-green">Bangla</span> <span className="font-semibold">Technologies</span></div>
            <p className="mt-1 text-sm text-white/50">Software • Web • Networking • CCTV</p>
          </div>
          <div className="text-sm text-white/50">© {new Date().getFullYear()} WebBangla Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
