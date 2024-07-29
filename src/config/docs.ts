/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/docs/layout.tsx
 * - src/lib/opendocs/components/docs/pager.tsx
 */

import type { DocsConfig } from '@/lib/opendocs/types/docs'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: '/docs',

      title: {
        en: 'Documentation',
        pt: 'Documentação',
      },
    },
  ],

  sidebarNav: [
    {
      title: {
        en: 'Getting Started',
        pt: 'Começando',
      },

      items: [
        {
          href: '/docs',

          title: {
            en: 'Introduction',
            pt: 'Introdução',
          },

          label: {
            en: 'New',
            pt: 'Novo',
          },

          items: [],
        },

        {
          href: '/docs/adding-new-docs',

          title: {
            en: 'Adding new docs',
            pt: 'Adicionando novos documentos',
          },

          label: {
            en: 'New',
            pt: 'Novo',
          },

          items: [],
        },

        {
          href: '/docs/customizing',

          title: {
            en: 'Customizing',
            pt: 'Personalizando',
          },

          label: {
            en: 'New',
            pt: 'Novo',
          },

          items: [],
        },

        {
          href: '/docs/cli',

          title: {
            en: 'CLI',
          },

          items: [],
        },

        {
          href: '/docs/changelog',

          title: {
            en: 'Changelog',
            pt: 'Histórico de alterações',
          },

          items: [],
        },

        {
          href: '/docs/faq',

          title: {
            en: 'FAQ',
            pt: 'Perguntas frequentes',
          },

          items: [],
        },
      ],
    },

    {
      title: {
        en: 'Installation',
        pt: 'Instalação',
      },

      items: [
        {
          title: {
            en: 'Package managers',
            pt: 'Gerenciadores de pacotes',
          },

          items: [
            {
              title: {
                en: 'npm',
              },

              href: '/docs/installation/package-managers/npm',
              items: [],
            },
            {
              title: {
                en: 'yarn',
              },
              href: '/docs/installation/package-managers/yarn',
              items: [],
            },
            {
              title: {
                en: 'pnpm',
              },
              href: '/docs/installation/package-managers/pnpm',
              items: [],
            },
          ],
        },

        {
          title: {
            en: 'Alternatives',
            pt: 'Alternativas',
          },

          items: [
            {
              title: {
                en: 'npm',
              },
              href: '/docs/installation/package-managers/npm2',
              items: [],
            },
            {
              title: {
                en: 'yarn',
              },
              href: '/docs/installation/package-managers/yarn2',
              items: [],
            },
            {
              title: {
                en: 'pnpm',
              },
              href: '/docs/installation/package-managers/pnpm2',
              items: [],
            },
          ],
        },

        {
          title: {
            en: 'CDN',
          },
          href: '/docs/installation/cdn',
          items: [],
        },
      ],
    },
  ],
} as const
