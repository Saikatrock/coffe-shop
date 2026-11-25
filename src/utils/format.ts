import { siteConfig } from '../data/siteConfig';

export function formatPrice(price: number): string {
  return `${siteConfig.currency}${price}`;
}
