import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import site from "../../data/site.json";
import contact from "../../data/contact.json";

export default function Contact() {
  const f = contact.form;
  return <section id="contact" className="bg-wb-soft py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-[.2em] text-wb-green">{contact.label}</p>
          <h2 className="mt-3 text-4xl font-black text-wb-navy">{contact.title}</h2>
          <p className="mt-5 max-w-xl leading-7 text-slate-600">{contact.description}</p>
          <div className="mt-8 space-y-5">
            <a href={`tel:${site.phone}`} className="flex items-center gap-4"><span className="rounded-xl bg-white p-3 text-wb-green shadow-sm"><Phone size={20}/></span><span><b className="block text-wb-navy">{contact.phoneLabel}</b><span className="text-slate-600">{site.phone}</span></span></a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-4"><span className="rounded-xl bg-white p-3 text-wb-green shadow-sm"><Mail size={20}/></span><span><b className="block text-wb-navy">{contact.emailLabel}</b><span className="text-slate-600">{site.email}</span></span></a>
            <div className="flex items-center gap-4"><span className="rounded-xl bg-white p-3 text-wb-green shadow-sm"><MapPin size={20}/></span><span><b className="block text-wb-navy">{contact.officeLabel}</b><span className="text-slate-600">{site.office}</span></span></div>
          </div>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl bg-white p-7 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="form-control"><span className="mb-2 text-sm font-bold">{f.nameLabel}</span><input className="input input-bordered" placeholder={f.namePlaceholder}/></label>
            <label className="form-control"><span className="mb-2 text-sm font-bold">{f.phoneLabel}</span><input className="input input-bordered" placeholder={f.phonePlaceholder}/></label>
          </div>
          <label className="form-control mt-4"><span className="mb-2 text-sm font-bold">{f.serviceLabel}</span><select className="select select-bordered">{f.services.map((s)=><option key={s}>{s}</option>)}</select></label>
          <label className="form-control mt-4"><span className="mb-2 text-sm font-bold">{f.messageLabel}</span><textarea className="textarea textarea-bordered min-h-32" placeholder={f.messagePlaceholder}/></label>
          <button className="btn mt-5 w-full border-0 bg-wb-navy text-white hover:bg-wb-blue">{f.button} <ArrowRight size={18}/></button>
        </form>
      </div>
    </div>
  </section>;
}
