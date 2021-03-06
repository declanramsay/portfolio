import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

// The line below is not needed if you don't have any dynamic segments
import dynamicSegmentResolver from '../utils/dynamic-segment-resolver';

import sitemapEntryFilter from '../utils/sitemap-entry-filter';

export default Route.extend({
  sitemap: service(),

  model() {
    let sitemap = this.get('sitemap');

    // The line below is not needed if you don't have any dynamic segments
    sitemap.setDynamicSegmentResolver(dynamicSegmentResolver);

    sitemap.setSitemapEntryFilter(sitemapEntryFilter);

    return sitemap.getModel();
  },
});
