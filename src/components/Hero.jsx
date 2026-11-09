import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { ActionButton } from './ui'
import { site } from '../data/siteConfig'
import { visibleCategories } from '../data/categories'

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="home" className="bg-ivory">
      <div className="mx-auto grid max-w-[88rem] lg:grid-cols-12">
        {/* Copy */}
        <div className="flex flex-col justify-center px-5 pb-12 pt-12 sm:px-8 md:pt-16 lg:col-span-5 lg:px-12 lg:py-24 xl:pr-16">
          <motion.p {...fade(0)} className="eyebrow">
            {site.name} · {site.city}
          </motion.p>
          <motion.h1
            {...fade(0.1)}
            className="mt-5 text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem]"
          >
            Make Your Home <span className="italic text-olive">Feel Like Home.</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="mt-6 max-w-md text-base leading-relaxed text-charcoal/75 md:text-lg">
            Discover beautiful home furnishings that bring comfort, warmth and style to your everyday living spaces.
          </motion.p>
          <motion.div {...fade(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionButton href="#collection" icon={ArrowRight} variant="primary">
              Explore Our Collection
            </ActionButton>
            <ActionButton href="#contact" icon={MapPin} variant="outline">
              Visit Our Store
            </ActionButton>
          </motion.div>
          <motion.p
            {...fade(0.45)}
            className="mt-12 hidden border-t border-sand pt-5 text-[0.72rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-charcoal/55 lg:block"
          >
            {visibleCategories.map((c) => c.title.split(' & ')[0]).join('  ·  ')}
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-7"
        >
          <img
            src="/images/hero/hero3.jpeg"
            alt="Placeholder lifestyle image of a softly furnished bedroom with bedding, curtains and a rug"
            width="1600"
            height="1200"
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/3] h-full w-full object-cover sm:aspect-[16/10] lg:aspect-auto lg:min-h-[640px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
