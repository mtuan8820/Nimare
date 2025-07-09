import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Nimare',
  tagline: `"I created this site to capture my journey of learning and growth — a place 
      to reflect, share, and hopefully inspire others to keep exploring and improving"`,
  favicon: 'img/kanji.png',
  customFields:{
    upcomingJLPT: "2025-12-06T12:00:00"
  },
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Nimare', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','ja'],
    localeConfigs:{
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語'
      }
    }
  },


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebarsVocabulary.js'),
          routeBasePath: 'vocabulary',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins:[
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'grammar',
          path: 'grammar',
          routeBasePath: 'grammar',
          sidebarPath: require.resolve('./sidebarsGrammar.js'),
        }
      ],
      [
          '@docusaurus/plugin-ideal-image',
        {
          disableInDev: false,
          sizes: [500, 500]
        }
      ]
  ],

  themeConfig: {
    colorMode:{
      defaultMode: 'light',
      disableSwitch: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Nimare',
      logo: {
        alt: 'Nimare Logo',
        src: 'img/kanji.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'vocabularySidebar',
          position: 'right',
          label: 'Vocabulary',
        },
        // {
        //   to: '/vocabulary/intro',
        //   position: 'right',
        //   label: 'Vocabulary',
        //   activeBaseRegex: `/vocabulary/`
        // },
        {
          to: '/grammar/grammar-intro',
          position: 'right',
          label: 'Grammar',
          activeBaseRegex: `/grammar/`
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          type: "localeDropdown",
          position: 'right',

        }


      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Vocabulary',
              to: '/docs/vocabulary',
            },
            {
              label: 'Grammar',
              to: '/grammar',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/tuan.minh.25630/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mtuan8820/Nimare',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },

            {
              label: 'Resources',
              to: '/resources',
            },
          ],
        },
      ],
      copyright: `Copyright © 2025 Nimare. Built with Docusaurus.<br> Made with <3 from Hue.`,
    },
    // prism: {
    //   theme: prismThemes.oneLight,
    //   darkTheme: prismThemes.duotoneDark,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
