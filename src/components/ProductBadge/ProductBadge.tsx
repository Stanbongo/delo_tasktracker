import {
  resolveBadge,
  type BadgeData,
  type BadgePalette,
  type BadgeProduct,
  type BadgeVariant,
} from "./resolveBadge";

export type ProductBadgeProps = {
  data?: BadgeData;
  product?: BadgeProduct;
};

const PALETTES: Record<BadgeVariant, BadgePalette> = {
  soldOut: { bg: "#6b7280", fg: "#ffffff" },
  lowStock: { bg: "#f97316", fg: "#000000" },
  sale: { bg: "#dc2626", fg: "#ffffff" },
  topRated: { bg: "#facc15", fg: "#000000" },
};

function ProductBadge({ data, product }: ProductBadgeProps) {
  const badge = data ? data : product ? resolveBadge(product) : null;
  const palette = badge ? PALETTES[badge?.variant] : null;

  if (!badge) return null;

  return (
    <div
      className="absolute top-[-14px] right-[-14px] z-[2] px-1 py-0.5 [font-family:Impact,'Arial_Black',sans-serif] font-bold border-2 [border-style:outset] border-black -rotate-[8deg] [text-shadow:1px_1px_#00000088] whitespace-nowrap pointer-events-none"
      style={{ backgroundColor: palette?.bg, color: palette?.fg }}
    >
      {badge.label}
    </div>
  );
}

export { ProductBadge };
