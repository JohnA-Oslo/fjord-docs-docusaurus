import apiSidebar from './docs/api/sidebar.ts';

/** @type {import('@docusaurus/types').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quickstart',
        'getting-started/authentication',
        'getting-started/rate-limits',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/expenses',
        'guides/receipts',
        'guides/approvals',
        'guides/invoicing',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: apiSidebar,
    },
    'webhooks',
    'errors',
  ],
};

export default sidebars;