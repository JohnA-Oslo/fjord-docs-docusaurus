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
    'api-reference',
    'webhooks',
    'errors',
  ],
};

export default sidebars;