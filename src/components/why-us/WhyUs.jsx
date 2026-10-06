import { CheckCircle2 } from "lucide-react";
import whyUs from "../../data/whyUs.json";

export default function WhyUs() {
  return <section id="why-us" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
    <div className="rounded-[2rem] bg-wb-navy p-8 text-white md:p-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div><p className="font-bold uppercase tracking-[.2em] text-wb-gold">{whyUs.label}</p><h2 className="mt-3 text-4xl font-black">{whyUs.title}</h2><p className="mt-5 max-w-xl leading-7 text-white/70">{whyUs.description}</p></div>
        <div className="grid gap-3 sm:grid-cols-2">{whyUs.points.map((x) => <div key={x} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"><CheckCircle2 className="shrink-0 text-wb-gold" size={20}/><span className="text-sm font-semibold">{x}</span></div>)}</div>
      </div>
    </div>
  </section>;
}
