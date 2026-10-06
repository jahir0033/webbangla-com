import { Code2, Globe2, Network, ShieldCheck } from "lucide-react";
import services from "../../data/services.json";
import ServiceCard from "./ServiceCard";

const iconMap = { Code2, Globe2, Network, ShieldCheck };

export default function Services() {
  return (
    <section id="services" className="bg-wb-soft py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-bold uppercase tracking-[.2em] text-wb-green">Our Services</p>
          <h2 className="mt-3 text-4xl font-black text-wb-navy">Everything you need to go digital.</h2>
          <p className="mt-4 text-slate-600">Professional solutions for day-to-day operations, online presence and security.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => <ServiceCard key={service.title} service={service} Icon={iconMap[service.icon]} />)}
        </div>
      </div>
    </section>
  );
}
