import site from "../../data/site.json";

export default function TopBar() {
  return (
    <div className="bg-wb-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <span>{site.website}</span>
          <span>{site.email}</span>
        </div>
        <a href={`tel:${site.phone}`} className="font-semibold hover:text-wb-gold">{site.phone}</a>
      </div>
    </div>
  );
}
