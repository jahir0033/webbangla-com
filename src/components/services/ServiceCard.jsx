import { ChevronRight, CheckCircle2 } from "lucide-react";

export default function ServiceCard({ service, Icon }) {
  return (
    <article className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between">
        <div className="rounded-2xl bg-wb-green/10 p-4 text-wb-green"><Icon size={28} /></div>
        <ChevronRight className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-wb-green" />
      </div>
      <h3 className="mt-6 text-2xl font-black text-wb-navy">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
      <ul className="mt-5 space-y-2 text-sm font-medium text-slate-600">
        {service.bullets.map((b) => <li key={b} className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 text-wb-green" />{b}</li>)}
      </ul>
    </article>
  );
}
