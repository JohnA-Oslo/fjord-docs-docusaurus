// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fjord Expense API',
  tagline: 'API reference and guides for the Fjord Expense platform',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://JohnA-Oslo.github.io',
  baseUrl: '/fjord-docs-docusaurus/',

  organizationName: 'JohnA-Oslo',
  projectName: 'fjord-docs-docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
      [
        '@easyops-cn/docusaurus-search-local',
        {
          hashed: true,
          language: 'en',
        },
      ],
    'docusaurus-theme-openapi-docs',
  ],

  plugins: [
    './plugins/webpack-patch.js',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          fjord: {
            specPath: 'openapi/fjord-expense-api-revised.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Fjord Expense API',
        logo: {
          alt: 'Fjord Expense API Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/JohnA-Oslo/fjord-docs-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Getting started',
            items: [
              {
                label: 'Quick start',
                to: '/docs/getting-started/quickstart',
              },
              {
                label: 'Authentication',
                to: '/docs/getting-started/authentication',
              },
              {
                label: 'Rate limits',
                to: '/docs/getting-started/rate-limits',
              },
            ],
          },
          {
            title: 'Reference',
            items: [
              {
                label: 'API reference',
                to: '/docs/api/fjord-expense-api',
              },
              {
                label: 'Webhooks',
                to: '/docs/webhooks',
              },
              {
                label: 'Error handling',
                to: '/docs/errors',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/JohnA-Oslo/fjord-docs-docusaurus',
              },
              {
                label: 'MkDocs version',
                href: 'https://johna-oslo.github.io/fjord-expense-api/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fjord Expense API. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;