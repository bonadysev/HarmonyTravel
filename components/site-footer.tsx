import { brand } from "@/data";
import { BrandSignature } from "@/components/brand-signature";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <BrandSignature />

        <div className="grid gap-1 text-sm text-[color:var(--ink-soft)] sm:text-right">
          <p className="font-bold text-[color:var(--foreground)]">{brand.legalName}</p>
          <a href={`tel:${brand.phone}`}>{brand.phone}</a>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={brand.telegramUrl}>{brand.telegramChannel}</a>
          <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
            Instagram: {brand.instagramHandle}
          </a>
          <p>{brand.legalAddress}</p>
          <p>УНП: {brand.unp}</p>
          <p>График работы: {brand.schedule}</p>
          <a href="#top">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
