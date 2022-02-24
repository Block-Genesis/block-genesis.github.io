const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Block Genesis',
  tagline: 'Take the crypto pill, and I show you how deep the rabbit hole goes.',
  url: 'https://block-genesis.github.io/',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'block-genesis', // Usually your GitHub org/user name.
  projectName: 'block-genesis.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ["solidity"],
    },
    hideableSidebar: false,
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-title.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'start/intro',
          position: 'left',
          label: 'Start',
        },
        {
          type: 'doc',
          docId: 'learn/getting-started',
          position: 'left',
          label: '📖 Learn',
        },
        {
          type: 'doc',
          docId: 'buidl/overview',
          position: 'left',
          label: '🛠️ Buidl',
        },
        {
          type: 'doc',
          docId: 'explore/intro',
          position: 'left',
          label: '🌐 Explore',
        },
        {
          type: 'doc',
          docId: 'earn/intro',
          position: 'left',
          label: 'Earn',
        },
        {
          type: 'doc',
          docId: 'resources/intro',
          position: 'left',
          label: 'Resources',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Website',
              href: 'https://pendle.finance',
            },
            {
              label: 'App',
              href: 'https://app.pendle.finance',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/EAujvncY2R/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pendle_fi/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/pendlefinance/',
            },
          ],
        },
        {
          title: 'About Us',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/pendle/',
            },
            {
              label: 'Careers',
              href: 'https://angel.co/company/pendle_finance/',
            },
            {
              label: 'Media Kit',
              href: 'https://pendle.finance/Pendle_Media_Kit.zip',
            },
            {
              label: 'Audits',
              href: 'https://github.com/pendle-finance/pendle-core/tree/master/docs/audits'
            }
          ],
        },
      ],
      logo: {
        alt: 'Pendle Finance Logo',
        src: 'img/logo.svg',
        href: 'https://pendle.finance',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Pendle Finance`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};
