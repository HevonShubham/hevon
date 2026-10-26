import { NextResponse } from 'next/server';
import { product } from '@/lib/store';
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return NextResponse.json({error:'Invalid request origin.'}, {status:403});
  if (!product.available) return NextResponse.json({error:'Orders are not open yet. Join the waitlist for launch updates.'}, {status:409});
  let data;
  try { data = await request.json(); } catch { return NextResponse.json({error:'Invalid request.'}, {status:400}); }
  if (!Number.isInteger(data?.quantity) || data.quantity < 1 || data.quantity > 12) return NextResponse.json({error:'Choose between 1 and 12 bottles.'}, {status:400});
  // Shopify is authoritative for current price, availability, shipping and payment.
  const url = `https://${product.domain}/cart/${product.variant}:${data.quantity}`;
  return NextResponse.json({url}, {headers:{'Cache-Control':'no-store'}});
}
