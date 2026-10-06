import site from "../../data/site.json";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-wb-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="text-xl font-black">Web<span className="text-wb-green">Bangla</span> <span className="font-semibold">Technologies</span></div>
          <p className="mt-1 text-sm text-white/50">{site.footerTagline}</p>
        </div>
        <div className="text-sm text-white/50">© {new Date().getFullYear()} {site.companyName}. {site.copyrightText}</div>
      </div>
    </footer>
  );
}
