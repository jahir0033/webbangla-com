import site from "../../data/site.json";

export default function Logo() {
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
