import Image from "next/image";
import { brand } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/60 bg-[#261a53] shadow-sm">
            <Image
              src={brand.logoPath}
              alt={`Логотип ${brand.displayName}`}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div>
          <p className="text-xl font-black">{brand.shortName}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
            {brand.displayName} организует детские туры, каникулы и программы с продуманной логистикой,
            вниманием к безопасности и заботой о семье.
          </p>
          </div>
        </div>

        <div className="grid gap-1 text-sm text-[color:var(--ink-soft)] sm:text-right">
          <p className="font-bold text-[color:var(--foreground)]">{brand.legalName}</p>
          <a href={`tel:${brand.phone}`}>{brand.phone}</a>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={brand.telegramUrl}>{brand.telegramChannel}</a>
          <p>{brand.legalAddress}</p>
          <p>УНП: {brand.unp}</p>
          <a href="#top">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
