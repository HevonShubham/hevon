const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '';
const variant = process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_ID || '';
const price = Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_INR);
const enabled = process.env.NEXT_PUBLIC_HEVON_SALES_OPEN === 'true';
export const product = {
  id: 'hevon-proffee-original', name: 'PROFFEE Original', size: '250 ml',
  image: '/hero-bottle-realistic-v2.png',
  available: enabled && /^[a-z0-9][a-z0-9-]*\.myshopify\.com$/.test(domain) && /^[0-9]+$/.test(variant) && Number.isFinite(price) && price > 0,
  price: Number.isFinite(price) && price > 0 ? price : null,
  domain, variant,
};
export function money(value: number) { return new Intl.NumberFormat('en-IN', {style:'currency', currency:'INR', maximumFractionDigits:2}).format(value); }
