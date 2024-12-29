import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { TextGenerateEffect } from '../../../components/ui/text-generate-effect'
import { FeaturedCard } from '../../../components/featured-card'
import { Announcement } from '../../../components/announcement'
import { buttonVariants } from '../../../components/ui/button'
import { FlipWords } from '../../../components/ui/flip-words'
import { Vortex } from '../../../components/ui/vortex'
import { Icons } from '../../../components/icons'
import { siteConfig } from '../../../config/site'
import { Link } from '../../../navigation'
import { cn } from '../../../lib/utils'

import {
  PageHeader,
  PageActions,
  PageHeaderHeading,
  PageHeaderDescription,
} from '../../../components/page-header'

import type { LocaleOptions } from '../../../lib/opendocs/types/i18n'

export const dynamicParams = true

export default async function AboutPage({
  params,
}: {
  params: { locale: LocaleOptions }
}) {
  unstable_setRequestLocale(params.locale)

  const t = await getTranslations()

  return (
    <div className="container relative">
      <PageHeader>
        <Announcement title={t('site.announcement')} href="/docs" />

        <PageHeaderHeading>
          <FlipWords
            words={['about', 'team', 'mission']}
            className="text-9xl -z-10"
          />

          <TextGenerateEffect words={t('site.heading')} />
        </PageHeaderHeading>

        <PageHeaderDescription>{t('site.description')}</PageHeaderDescription>

        <PageActions>
          <Link href="/contact" className={cn(buttonVariants())}>
            {t('site.buttons.get_started')}
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github.url}
            title={siteConfig.links.github.label}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className="mr-2 size-4" />
            {siteConfig.links.github.label}
          </Link>
        </PageActions>

        <div className="fixed left-0 -top-40 size-full -z-10 overflow-hidden">
          <Vortex
            backgroundColor="transparent"
            className="flex size-full"
            rangeY={300}
            baseRadius={2}
            particleCount={20}
            rangeSpeed={1.5}
          />
        </div>
      </PageHeader>

      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
          <FeaturedCard
            icon="🎯"
            title={t('site.featured_cards.mission.title')}
            description={t('site.featured_cards.mission.description')}
          />

          <FeaturedCard
            icon="👥"
            title={t('site.featured_cards.team.title')}
            description={t('site.featured_cards.team.description')}
          />

          <FeaturedCard
            icon="💡"
            title={t('site.featured_cards.innovation.title')}
            description={t('site.featured_cards.innovation.description')}
          />

          <FeaturedCard
            icon="🌟"
            title={t('site.featured_cards.values.title')}
            description={t('site.featured_cards.values.description')}
          />
        </div>

        <FeaturedCard
          icon="+"
          orientation="horizontal"
          title={t('site.featured_cards.more.title')}
          description={t('site.featured_cards.more.description')}
        />
      </section>
    </div>
  )
}
