import { ArrowRight, CheckCircle2, Code2, Globe2, Network, ShieldCheck } from "lucide-react";
import hero from "../../data/hero.json";
import services from "../../data/services.json";

const iconMap = { Code2, Globe2, Network, ShieldCheck };

export default function Hero() {
  return <section id="home" className="relative overflow-hidden bg-wb-soft">
    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-wb-green/10 blur-3xl"/>
    <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-wb-blue/10 blur-3xl"/>
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div className="relative">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-wb-green/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-wb-green shadow-sm">{hero.badge}</div>
        <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-wb-navy sm:text-6xl">{hero.title}<span className="block text-wb-green">{hero.highlight}</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{hero.description}</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href={hero.primaryLink} className="btn border-0 bg-wb-navy px-6 text-white hover:bg-wb-blue">{hero.primaryButton} <ArrowRight size={18}/></a><a href={hero.secondaryLink} className="btn btn-outline border-wb-navy text-wb-navy hover:bg-wb-navy hover:text-white">{hero.secondaryButton}</a></div>
        <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-600">{hero.features.map(x=><span key={x} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-wb-green"/>{x}</span>)}</div>
      </div>
      <div className="relative"><div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-wb-green/20 via-transparent to-wb-blue/20 blur-xl"/>
        <div className="relative rounded-[2rem] border border-white bg-white p-7 shadow-soft">
          <div className="mb-7 flex items-center justify-between"><div><p className="text-sm font-bold text-wb-green">{hero.hubLabel}</p><h3 className="mt-1 text-2xl font-black text-wb-navy">{hero.hubTitle}</h3></div><div className="rounded-2xl bg-wb-navy p-4 text-white"><Code2 size={30}/></div></div>
          <div className="grid grid-cols-2 gap-4">{services.map(s=>{const Icon=iconMap[s.icon];return <div key={s.title} className="rounded-2xl bg-wb-soft p-5"><Icon className="text-wb-green" size={25}/><h4 className="mt-3 text-sm font-bold text-wb-navy">{s.title}</h4></div>})}</div>
          <div className="mt-5 rounded-2xl bg-wb-navy p-5 text-white"><p className="text-xs uppercase tracking-widest text-white/60">{hero.promiseLabel}</p><p className="mt-2 font-semibold">{hero.promiseText}</p></div>
        </div>
      </div>
    </div>
  </section>;
}
