import about from "../../data/about.json";

export default function About() {
  return <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
    <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
      <div><p className="font-bold uppercase tracking-[.2em] text-wb-green">{about.label}</p><h2 className="mt-3 text-4xl font-black text-wb-navy">{about.title}</h2></div>
      <div className="space-y-5 text-lg leading-8 text-slate-600">{about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
    </div>
  </section>;
}
