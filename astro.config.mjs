import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        // Import a component’s default export
        // generates:
        // import A from './src/components/A.astro';
        './src/components/A.astro',

        {
          // Explicitly alias a default export
          // generates:
          // import { default as B } from './src/components/B.astro';
          './src/components/B.astro': [['default', 'B']],

          // Import a module’s named exports
          // generates:
          // import { Tweet, YouTube } from 'astro-embed';
          'astro-embed': ['Tweet', 'YouTube'],
        },
      ],
    }),

    // Make sure the MDX integration is included AFTER astro-auto-import
    mdx(),
  ],
});