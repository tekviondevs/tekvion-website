import type { BlogPost } from './types';
import { post as wordpressVsBubble } from './blog/wordpress-vs-bubble-io-which-to-choose';
import { post as coreWebVitals } from './blog/core-web-vitals-wordpress-guide';
import { post as redesignChecklist } from './blog/website-redesign-checklist';
import { post as wooVsShopify } from './blog/woocommerce-vs-shopify';
import { post as websiteCost } from './blog/how-much-does-a-website-cost';
import { post as multilingual } from './blog/multilingual-website-guide';
import { post as aiIntegration } from './blog/ai-integration-for-small-business-websites';
import { post as maintenance } from './blog/website-maintenance-guide';
import { post as goHighLevel } from './blog/gohighlevel-guide-for-agencies';
import { post as aiAutomation } from './blog/ai-automation-for-business-operations';
import { post as n8nGuide } from './blog/n8n-workflow-automation-guide';
import { post as makeVsN8n } from './blog/make-com-vs-n8n-automation-platforms';

/** All posts, newest first. */
export const posts: BlogPost[] = [
  wordpressVsBubble,
  coreWebVitals,
  redesignChecklist,
  wooVsShopify,
  websiteCost,
  multilingual,
  aiIntegration,
  maintenance,
  goHighLevel,
  aiAutomation,
  n8nGuide,
  makeVsN8n,
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export const blogCategories: string[] = Array.from(
  new Set(posts.map((post) => post.category)),
).sort();

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPosts(slugs: string[]): BlogPost[] {
  return slugs.map((slug) => getPost(slug)).filter((post): post is BlogPost => Boolean(post));
}

/** Posts that mention a given service, used for cross-linking from service pages. */
export function postsForService(serviceSlug: string): BlogPost[] {
  return posts.filter((post) => post.relatedServiceSlugs.includes(serviceSlug));
}
