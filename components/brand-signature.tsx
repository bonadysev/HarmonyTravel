import Image from "next/image";
import { brand } from "@/data";

export function BrandSignature() {
  return (
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
      <div className="min-w-0">
        <p className="text-xl font-black">{brand.shortName}</p>
        <p className="mt-1 text-sm font-medium text-[color:var(--ink-soft)]">{brand.displayName}</p>
        <p className="mt-2 max-w-md text-sm font-semibold leading-6 text-[color:var(--foreground)]/82">
          Путешествия для детей, спокойствие для родителей
        </p>
        <p className="mt-2 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
          {brand.displayName} организует детские туры, каникулы и программы с продуманной логистикой,
          вниманием к безопасности и заботой о семье.
        </p>
      </div>
    </div>
  );
}
