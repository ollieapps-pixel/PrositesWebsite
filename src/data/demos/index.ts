/**
 * Registry of demo client sites. Add an industry by creating its data file
 * and listing it here; every page under /demo/[industry]/ is generated from it.
 */
import type { DemoSite } from './types';
import { applianceRepair } from './appliance-repair';
import { plumbing } from './plumbing';

export const demos: Record<string, DemoSite> = {
  [applianceRepair.slug]: applianceRepair,
  [plumbing.slug]: plumbing,
};

/** getStaticPaths helper for pages that exist once per industry. */
export const demoPaths = () => Object.values(demos).map((site) => ({ params: { industry: site.slug }, props: { site } }));
