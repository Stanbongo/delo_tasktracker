export type BadgeVariant = 'soldOut' | 'lowStock' | 'sale' | 'topRated'
export type BadgeData    =  {
    variant: BadgeVariant;
    label: string;
}
export type BadgePalette = {
    bg: string;
    fg: string;
}

export type BadgeProduct = {
    stock: number;
    discountPercentage: number;
    rating: number;
}

export const resolveBadge = (product: BadgeProduct): BadgeData | null => {
    if (product.stock === 0)             return {variant: 'soldOut',  label: 'SOLD OUT'}
    if (product.stock < 5)               return {variant: 'lowStock', label: 'LOW'}
    if (product.discountPercentage > 10) return {variant: 'sale',     label: 'SALE'}
    if (product.rating >= 4.8)           return {variant: 'topRated', label: 'TOP'}
    return null
}

